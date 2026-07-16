#!/usr/bin/env node
// Converts a logo PNG for use on any background:
//   1. flood-fills the key color (white or black) from the image border to
//      transparent — key-colored pixels *inside* the artwork are preserved
//   2. un-blends the anti-aliased fringe next to the removed region so no
//      halo remains when composited on a contrasting background
//   3. optionally downscales to a square target size (premultiplied-alpha
//      box filter, correct for large reductions)
// Handles 8-bit RGB and RGBA PNGs; always writes RGBA.
//
// Usage: make-logo-transparent.js <in.png> [out.png] [--key white|black] [--size N]
//        (out.png defaults to in-place; --key defaults to white)
import fs from 'node:fs';
import zlib from 'node:zlib';

const args = process.argv.slice(2);
const opt = (name, dflt) => {
  const i = args.indexOf(name);
  return i === -1 ? dflt : args.splice(i, 2)[1];
};
const key = opt('--key', 'white');
const size = parseInt(opt('--size', '0'), 10);
const [inPath, outPath = inPath] = args;
if (!inPath || !['white', 'black'].includes(key)) {
  console.error('usage: make-logo-transparent.js <in.png> [out.png] [--key white|black] [--size N]');
  process.exit(1);
}

// ── decode ──
const src = fs.readFileSync(inPath);
const W = src.readUInt32BE(16), H = src.readUInt32BE(20);
const colorType = src[25];
if (src[24] !== 8 || ![2, 6].includes(colorType)) {
  console.error('expected 8-bit RGB or RGBA PNG');
  process.exit(1);
}
const inBpp = colorType === 6 ? 4 : 3;
let pos = 8; const idat = [];
while (pos < src.length) {
  const len = src.readUInt32BE(pos), type = src.toString('ascii', pos + 4, pos + 8);
  if (type === 'IDAT') idat.push(src.subarray(pos + 8, pos + 8 + len));
  pos += 12 + len;
}
const raw = zlib.inflateSync(Buffer.concat(idat));
const stride = W * inBpp + 1;
const paeth = (a, b, c) => {
  const p = a + b - c, pa = Math.abs(p - a), pb = Math.abs(p - b), pc = Math.abs(p - c);
  return pa <= pb && pa <= pc ? a : pb <= pc ? b : c;
};
const dec = Buffer.alloc(W * H * inBpp);
for (let y = 0; y < H; y++) {
  const f = raw[y * stride];
  for (let x = 0; x < W * inBpp; x++) {
    const rv = raw[y * stride + 1 + x];
    const left = x >= inBpp ? dec[y * W * inBpp + x - inBpp] : 0;
    const up = y > 0 ? dec[(y - 1) * W * inBpp + x] : 0;
    const ul = y > 0 && x >= inBpp ? dec[(y - 1) * W * inBpp + x - inBpp] : 0;
    const v = [rv, rv + left, rv + up, rv + ((left + up) >> 1), rv + paeth(left, up, ul)][f];
    dec[y * W * inBpp + x] = v & 255;
  }
}
// expand to RGBA
let px = dec;
if (inBpp === 3) {
  px = Buffer.alloc(W * H * 4, 255);
  for (let p = 0; p < W * H; p++) dec.copy(px, p * 4, p * 3, p * 3 + 3);
}

// ── flood fill key color from the border ──
const K = key === 'white' ? 255 : 0;
const isBg = key === 'white'
  ? (i) => px[i] >= 200 && px[i + 1] >= 200 && px[i + 2] >= 200
  : (i) => px[i] <= 55 && px[i + 1] <= 55 && px[i + 2] <= 55;
const filled = new Uint8Array(W * H);
const stack = [];
for (let x = 0; x < W; x++) stack.push(x, (H - 1) * W + x);
for (let y = 0; y < H; y++) stack.push(y * W, y * W + W - 1);
while (stack.length) {
  const p = stack.pop();
  if (filled[p] || !isBg(p * 4)) continue;
  filled[p] = 1;
  px[p * 4 + 3] = 0;
  const x = p % W, y = (p / W) | 0;
  if (x > 0) stack.push(p - 1);
  if (x < W - 1) stack.push(p + 1);
  if (y > 0) stack.push(p - W);
  if (y < H - 1) stack.push(p + W);
}

// ── un-blend fringe: blended = orig*a + K*(1-a)  =>  orig = (blended-(1-a)K)/a ──
let fringe = 0;
for (let p = 0; p < W * H; p++) {
  if (filled[p]) continue;
  const x = p % W, y = (p / W) | 0;
  const nearFill = (x > 0 && filled[p - 1]) || (x < W - 1 && filled[p + 1]) ||
                   (y > 0 && filled[p - W]) || (y < H - 1 && filled[p + W]);
  if (!nearFill) continue;
  const i = p * 4, lum = (px[i] + px[i + 1] + px[i + 2]) / 3;
  const a = Math.min(1, Math.abs(lum - K) / 255 * 1.5); // farther from key => more opaque
  for (let c = 0; c < 3; c++) {
    px[i + c] = Math.max(0, Math.min(255, Math.round((px[i + c] - (1 - a) * K) / Math.max(a, 0.01))));
  }
  px[i + 3] = Math.round(a * 255);
  fringe++;
}

// ── resize (premultiplied-alpha box filter with fractional coverage) ──
let outW = W, outH = H, outPx = px;
if (size > 0 && size !== W) {
  outW = outH = size;
  outPx = Buffer.alloc(size * size * 4);
  const scale = W / size;
  for (let dy = 0; dy < size; dy++) {
    for (let dx = 0; dx < size; dx++) {
      const sx0 = dx * scale, sx1 = (dx + 1) * scale;
      const sy0 = dy * scale, sy1 = (dy + 1) * scale;
      let r = 0, g = 0, b = 0, a = 0, wSum = 0;
      for (let sy = Math.floor(sy0); sy < Math.min(H, Math.ceil(sy1)); sy++) {
        const wy = Math.min(sy + 1, sy1) - Math.max(sy, sy0);
        for (let sx = Math.floor(sx0); sx < Math.min(W, Math.ceil(sx1)); sx++) {
          const w = wy * (Math.min(sx + 1, sx1) - Math.max(sx, sx0));
          const i = (sy * W + sx) * 4, av = px[i + 3] / 255;
          r += px[i] * av * w; g += px[i + 1] * av * w; b += px[i + 2] * av * w;
          a += av * w; wSum += w;
        }
      }
      const o = (dy * size + dx) * 4;
      if (a > 0) {
        outPx[o] = Math.round(r / a); outPx[o + 1] = Math.round(g / a); outPx[o + 2] = Math.round(b / a);
      }
      outPx[o + 3] = Math.round(a / wSum * 255);
    }
  }
}

// ── encode ──
const crcTable = Array.from({ length: 256 }, (_, n) => {
  let c = n;
  for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
  return c >>> 0;
});
const crc32 = (buf) => {
  let c = 0xffffffff;
  for (const b of buf) c = crcTable[(c ^ b) & 255] ^ (c >>> 8);
  return (c ^ 0xffffffff) >>> 0;
};
const chunk = (type, data) => {
  const out = Buffer.alloc(12 + data.length);
  out.writeUInt32BE(data.length, 0);
  out.write(type, 4, 'ascii');
  data.copy(out, 8);
  out.writeUInt32BE(crc32(out.subarray(4, 8 + data.length)), 8 + data.length);
  return out;
};
const ihdr = Buffer.alloc(13);
ihdr.writeUInt32BE(outW, 0); ihdr.writeUInt32BE(outH, 4);
ihdr[8] = 8; ihdr[9] = 6; // 8-bit RGBA
const outStride = outW * 4 + 1;
const scan = Buffer.alloc(outH * outStride);
for (let y = 0; y < outH; y++) outPx.copy(scan, y * outStride + 1, y * outW * 4, (y + 1) * outW * 4);
fs.writeFileSync(outPath, Buffer.concat([
  Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]),
  chunk('IHDR', ihdr),
  chunk('IDAT', zlib.deflateSync(scan, { level: 9 })),
  chunk('IEND', Buffer.alloc(0)),
]));
const cleared = filled.reduce((s, v) => s + v, 0);
console.log(`${inPath} -> ${outPath}: key=${key}, ${cleared} bg px cleared, ` +
  `${fringe} fringe px un-blended, output ${outW}x${outH}`);
