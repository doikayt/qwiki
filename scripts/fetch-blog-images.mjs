import { execSync } from 'child_process';
import { mkdirSync } from 'fs';
import { resolve, dirname, basename } from 'path';
import { fileURLToPath } from 'url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const OUT = resolve(ROOT, 'website/blog/images');
mkdirSync(OUT, { recursive: true });

const urls = `
http://datalackey.com/wp-content/uploads/2019/04/2monkeys-1.jpeg
http://datalackey.com/wp-content/uploads/2019/04/banana-ape.jpeg
http://datalackey.com/wp-content/uploads/2019/04/m-math.jpeg
http://datalackey.com/wp-content/uploads/2019/04/monkeys-computers.jpg
http://datalackey.com/wp-content/uploads/2019/04/new-ape-1024x583.jpeg
http://datalackey.com/wp-content/uploads/2019/06/diagram-1024x732.jpg
http://datalackey.com/wp-content/uploads/2019/06/duck-horse-1.jpeg
http://datalackey.com/wp-content/uploads/2019/06/gorilla1.jpeg
http://datalackey.com/wp-content/uploads/2019/06/monkey-head-scratch-1.jpeg
http://datalackey.com/wp-content/uploads/2019/06/monkey-window-8.jpeg
http://datalackey.com/wp-content/uploads/2019/07/batch-timeline-1.jpeg
http://datalackey.com/wp-content/uploads/2019/07/k-slide-positions.jpeg
http://datalackey.com/wp-content/uploads/2019/07/mustConsiderWindows-1.png
http://datalackey.com/wp-content/uploads/2019/07/timeing-of-arrival-test-code-2.jpeg
http://datalackey.com/wp-content/uploads/2019/08/elipse-ape-clock.png
http://datalackey.com/wp-content/uploads/2019/08/monkey-explosion.png
http://datalackey.com/wp-content/uploads/2019/08/monkey-fishing-1024x509.png
http://datalackey.com/wp-content/uploads/2019/08/timelineForStreamingJoin-1-1024x194.png
http://datalackey.com/wp-content/uploads/2019/09/no-shift-1.png
http://datalackey.com/wp-content/uploads/2019/09/shift-2-1024x596.png
http://datalackey.com/wp-content/uploads/2019/09/unix-time-in-different-time-zones.png
http://datalackey.com/wp-content/uploads/2020/08/tail-pull.jpg
http://datalackey.com/wp-content/uploads/2020/09/Untitled-Diagram-1.png
http://datalackey.com/wp-content/uploads/2020/09/fails-scala-2.11-release-2.2.7.png
http://datalackey.com/wp-content/uploads/2020/09/spring-2.4.4-works-scala-2.12-858x1024.png
`.trim().split('\n');

for (const url of urls) {
  const dest = resolve(OUT, basename(url));
  console.log('fetching', url);
  execSync(`curl -sSL --max-time 20 -o "${dest}" "${url}"`);
}
console.log(`done — ${urls.length} images written to website/blog/images/`);
