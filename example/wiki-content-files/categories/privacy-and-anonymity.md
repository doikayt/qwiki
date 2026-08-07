---
title: "Category:Privacy & Anonymity"
categories:
  - Domains
redirect_from: []
---
# Privacy & Anonymity

Tools whose *primary purpose* is protecting the privacy or anonymity of your network activity --
`[[:Category:VPN]]`{=mediawiki} services, self-hosted tunnels, and the `[[Tor]]`{=mediawiki}
anonymity network.

This is distinct from tools that are *private but do some other job*: end-to-end encrypted
messengers like `[[Signal]]`{=mediawiki} live under
`[[:Category:Secure Messaging]]`{=mediawiki} (their function is communication; privacy is an
attribute), and secret storage lives under `[[:Category:Password Management]]`{=mediawiki}. Use
those categories for those needs; this one is for hiding *where your traffic goes and who is
sending it*.

## No single tool is a guarantee -- match the adversary

The most important idea in this whole category: **there is no tool that makes you anonymous
against everyone.** Every option here defends against some adversaries and not others, so the
question is never "is this secure?" but "secure *against whom?*". Most real-world
deanonymizations don't come from broken cryptography -- they come from a compromised device or
browser, a leaked login or reused handle, or an adversary who can observe enough of the network
to correlate traffic. Pick the tool that covers *your* adversary, and remember that operational
discipline (what you log into, what you leak) usually matters more than the tool.

| Adversary | What a VPN / Tor realistically gives you |
|---|---|
| Your ISP, local/public Wi-Fi, mass or passive surveillance, ad-tech trackers | Defeated well -- this is the sweet spot |
| Ordinary, untargeted law enforcement | Raises the cost of attribution substantially; usually enough |
| A nation-state targeting *you by name* | Assume nothing is guaranteed; opsec and compartmentation dominate |

For the specific trade-offs between a self-hosted tunnel, a shared-IP provider, and Tor, see the
comparison table in `[[:Category:VPN]]`{=mediawiki}.
