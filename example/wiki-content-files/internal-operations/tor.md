---
title: "Tor - volunteer-run anonymity network (onion routing)"
tagline: "volunteer-run anonymity network (onion routing)"
categories:
  - Privacy & Anonymity
redirect_from:
  - Tor
  - Tor Browser
  - The Onion Router
raw: true
---
{{Tool
|company=The Tor Project (US 501(c)(3) nonprofit)
|protocol=https
|url=torproject.org
|pricing=free
|amount=Free and open source. Run by the non-profit Tor Project, funded by grants (historically
including US-government sources such as the State Department and NRL) plus individual donations.
Funding is not control here: the code is public, reproducible, and independently audited.
|source_license=open
|hosting=hybrid
|description=An anonymity network, not a VPN. Your traffic is wrapped in layers of encryption and
bounced through three volunteer-run relays (entry/guard, middle, exit), so no single relay knows
both who you are and where you're going. Tor Browser is the hardened reference client; bridges
and pluggable transports help in censored networks.
|usage_notes=How it differs from a VPN: there is no single operator to trust or subpoena -- trust
is spread across independent relays, and anonymity (not just tunnelling) is the whole product.
That makes it the strongest widely available option for anonymity and for censorship
circumvention.

The honest threat model -- read this before relying on it: Tor is a *low-latency* network, and by
its own published design it does NOT defend against a "global passive adversary" who can watch
traffic entering AND leaving the network. Someone who observes both ends can correlate timing and
volume to link sender to destination. This is a documented, structural limit of fast anonymity
systems -- not a hidden backdoor.

What this means in practice: Tor is not known to be cryptographically broken, and the real-world
deanonymizations on record did not come from breaking the network. They came from:

* '''Browser or device exploits''' -- e.g. the FBI's malware in the 2015 Playpen cases attacked
Tor Browser bugs, not the Tor protocol.
* '''Relay-level traffic correlation''' -- an adversary running or watching many relays (the
2014 CMU/SEI incident).
* '''Operator opsec mistakes''' -- logging into a real account, reusing a handle, leaking
metadata.

So the practical defenses are keeping Tor Browser updated, not de-anonymizing yourself by what
you log into, and -- against a determined state adversary -- assuming nothing is bulletproof (see
the adversary table in [[:Category:Privacy & Anonymity]]).

Best fit: maximum anonymity when you accept the speed cost, and getting online under censorship.
For everyday "hide from my ISP with usable speed," a shared-IP no-logs provider like [[Mullvad]]
is the better default; the two are complementary, not ranked.
|rejected_alternatives=A VPN is not a substitute: a self-hosted tunnel ([[WireGuard]]) gives you
control but a single dedicated exit IP tied to you (no anonymity), and a commercial VPN
concentrates trust in one operator. Tor removes that single point of trust at the cost of speed.
For anonymity, do not rely on "free VPN" services -- their business model is usually your data.
|category=Privacy & Anonymity
}}
