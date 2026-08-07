---
title: "Category:VPN"
categories:
  - Privacy & Anonymity
redirect_from: []
---
# VPN

Tools for tunnelling your traffic through an encrypted link to hide it from your local
network/ISP and to change your apparent location. A VPN moves the trust: your ISP no longer
sees your traffic, but **the VPN operator now does**. So the operator's ownership,
jurisdiction, and transparency matter more than the marketing speed charts.

**On evaluating VPNs:** judge every one on four axes, not just "is it fast":

1. **Who runs it** -- ownership and corporate structure. A "no-logs" promise is only worth the
   trustworthiness of the company making it.
2. **Jurisdiction** -- what laws can compel the operator, and which intelligence-sharing bloc
   (5/9/14 Eyes) it sits in.
3. **Verifiability** -- open-source clients, reproducible builds, and repeated independent
   audits. Better still: a real-world test (a seizure that turned up nothing).
4. **Infrastructure control** -- can you self-host, or is there a single operator who can be
   compromised, compelled, or shut down?

## Ownership concentration you should know about

A large share of the consumer VPN market -- including several brands that top "best VPN" lists
-- is owned by a small number of companies with Israeli ties. This is worth calling out because
the whole point of a VPN is to hand one company visibility into all your traffic, so **who that
company is, and what jurisdiction and transparency regime it answers to, is the entire
question.**

- **Kape Technologies** (British-Israeli, controlled by Israeli billionaire Teddy Sagi via his
  Unikmind holding) owns **ExpressVPN, CyberGhost, Private Internet Access (PIA), and ZenMate**
  -- *and* the review sites **vpnMentor** and **Wizcase** that rank those same products. As of
  early 2026 Kape was taken fully private and delisted from the London Stock Exchange, so there
  are **no more public filings or transparency reports** -- effectively a black box.
- **Hola VPN** -- Hola Networks Ltd., headquartered in Israel; founders have Israeli tech and
  intelligence backgrounds. It was also caught reselling users' bandwidth to third parties.
- **Hotspot Shield / Betternet** -- via **Pango Group**, established in Israel in 2017 (later
  rolled into Aura).
- **Onavo** -- Israeli-founded, later owned by Meta and used to surveil competitors' usage;
  since discontinued.

**A misconception to correct:** **NordVPN** and **Surfshark** are *not* Israeli -- both were
founded by Lithuanians (Nord Security), with Panama/Netherlands corporate structure. The viral
"NordVPN is Israeli" claim is false. We still don't recommend them here, but on the separate
grounds that they aren't open-source or self-hostable -- not on ownership.

## Self-host vs shared-IP VPN vs Tor -- pick for your threat

These solve *different* problems; they aren't ranked on one scale. A self-hosted VPN is for
**control**, not anonymity: it gives you a single dedicated exit IP, rented in your name, so all
your traffic is attributable to one person -- the opposite of hiding in a crowd.

| Approach | Hides from ISP? | Anonymous to sites? | Deplatform-proof? | Best for |
|---|---|---|---|---|
| Self-host (WireGuard) | Yes | No -- one dedicated IP tied to you | Yes -- you're the operator | Control; hiding from your ISP |
| Shared-IP no-logs (Mullvad, IVPN, Proton) | Yes | Yes -- big shared IP, anonymous signup | No -- you trust the operator | Anonymity in a crowd |
| Tor | Yes | Strongest -- multi-hop, no fixed exit | N/A -- no operator | Max anonymity; censorship |

## What we recommend (in preference order)

Same logic as the rest of the wiki: self-host first, then a verifiable non-Israeli provider,
mainstream only as a last resort.

1. **Self-host** -- `[[WireGuard]]`{=mediawiki} on your own VPS. No third party
   sees your traffic and there is nothing to subpoena. See also
   `[[:Category:Self Hosting]]`{=mediawiki}.
2. **`[[Mullvad]]`{=mediawiki}** (Sweden) -- open-source, reproducible builds, anonymous
   account numbers, cash/Monero accepted, and a no-logs policy *proven by a 2023 police raid
   that seized nothing*. The gold standard when self-hosting isn't practical.
3. **`[[IVPN]]`{=mediawiki}** (Gibraltar) -- GPLv3 open-source apps, audited every year since
   2019, anonymous account IDs. Smaller network and pricier, but very high trust.
4. **`[[Proton VPN]]`{=mediawiki}** (Switzerland) -- run by the non-profit Proton Foundation,
   fully open-source apps, annual no-logs audits, and a genuine free tier. Best usability
   fallback, the way Signal is for messaging.

**Rejected on ownership grounds:** ExpressVPN, CyberGhost, PIA, ZenMate (all Kape), Hola VPN,
and Hotspot Shield / Betternet -- regardless of their features, the operator is the risk. Also
avoid free VPNs generally: if you aren't paying, your traffic is usually the product.
