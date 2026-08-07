---
title: "WireGuard - run your own self-hosted VPN, no operator to trust"
tagline: "run your own VPN, no operator to trust"
categories:
  - VPN
redirect_from:
  - WireGuard (self-hosted)
  - WireGuard
  - Algo VPN
raw: true
---
{{Tool
|company=WireGuard (Jason A. Donenfeld) / community tooling
|protocol=https
|url=wireguard.com
|pricing=varies
|amount=Software is free and open source (GPLv2); your only cost is a VPS -- roughly
USD 4-6 / month on a provider like [[Digital Ocean]], or a spare box you already run.
|source_license=open
|hosting=self
|description=A modern, lean VPN protocol (~4,000 lines of code vs OpenVPN's ~70,000, using the
ChaCha20 cipher) that you run on your own server. Deploy-and-forget tooling makes setup painless:
Algo VPN (by Trail of Bits) provisions a locked-down WireGuard server on a cloud VPS in minutes;
WG-Easy adds a web dashboard with QR codes for phones; Headscale / NetBird give you a
self-hosted mesh if you need many devices to reach each other.
|usage_notes=Why it's the top of our preference order: when you run the server, there is no
third-party operator who can log your traffic, be subpoenaed, be acquired by a Kape-style
holding company, or deplatform you. The trust question in [[:Category:VPN]] disappears -- you are
the operator. WireGuard's small codebase is easy to audit and very fast (~900 Mbps on a cheap
VPS is typical).

'''Not for anonymity.''' A self-hosted VPN hides your traffic from your local network/ISP, but
it de-anonymizes you *to the wider internet*: the VPS has a single dedicated exit IP that is
uniquely yours, rented in your name, so every site you visit -- and anyone who can observe that
IP -- can attribute all of it to one person. There is no crowd to hide in (the opposite of a
shared-IP provider like [[Mullvad]]), and the hosting company knows who you are and can be
compelled to log or disclose. Use it for control and hiding from your ISP -- not to be
anonymous. For that, a shared-IP no-logs provider or Tor.

Other tradeoffs: you own the ops burden (patching, key management, uptime), and a single
home/VPS exit gives you one location, not a menu of countries. Requires a technically capable
person -- see [[:Category:Self Hosting]].

Best fit: teams with technical capacity who want maximum infrastructure control and
deplatform-resistance. For anonymity in a crowd or many exit locations, pair with (or choose)
[[Mullvad]].
|rejected_alternatives=Commercial Israeli-owned VPNs (Kape's ExpressVPN / CyberGhost / PIA /
ZenMate, Hola, Hotspot Shield) reintroduce exactly the operator you're trying to remove -- see
[[:Category:VPN]].
|category=VPN
}}
