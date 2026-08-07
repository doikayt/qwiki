---
title: "Proton Meet - end-to-end encrypted video conferencing from a Swiss non-profit"
tagline: "end-to-end encrypted video conferencing (Swiss, open-source client)"
categories:
  - Video Conferencing
redirect_from:
  - Proton Meet
raw: true
---
{{Tool
|company=Proton AG
|protocol=https
|url=proton.me/meet
|pricing=varies
|amount=Free tier hosts up to 50 participants for 1 hour per call; guests join by link with no
account. Paid Meet Professional raises this to 100 participants and 24-hour calls with recording;
higher Workspace tiers reach 250. Often bundled with the rest of the Proton suite.
|source_license=open
|hosting=cloud
|description=End-to-end encrypted group video/audio conferencing from Proton AG (Geneva,
majority-owned by the non-profit Proton Foundation -- same organisation as [[Proton VPN]] and
Proton Mail). Publicly launched in 2026. Built on WebRTC/LiveKit with the open, independently
audited MLS (Messaging Layer Security) protocol for E2EE; media and chat are encrypted on the
client, participant names are encrypted, and email/IP addresses are not shared between attendees.
|usage_notes=Why it's strong for us: genuine end-to-end encryption on an open, peer-reviewed
standard (MLS), under Swiss jurisdiction (outside the US CLOUD Act) and a non-profit that answers
to a mission rather than an acquirer. Proton says it keeps no record of who attended, and the web
client is open source so researchers can audit what runs in your browser. The free tier is
genuinely usable (50 people, 1 hour), attendees need no account, and you can even start an
instant call for yourself plus up to 3 others with no account at all.

Free-tier limits explained (the common confusion): the "50 participants" cap and "1 hour" limit
are per-meeting; hosting requires a free Proton account (guests don't). This is unrelated to
[[Proton VPN]]'s free-tier "one device" limit, which counts simultaneous VPN connections, not
meeting attendees -- two different products.

Honest limitation: only the client is open source. The server-side infrastructure is not fully
open, so while call content is E2EE and unreadable to Proton, you cannot independently verify how
signaling and metadata (timing, who connects) are handled on their servers. Strong for
confidentiality of content; not an anonymity tool.
|rejected_alternatives=Zoom and Google Meet are closed-source and not end-to-end encrypted by
default, with the provider able to access call data. For a fully self-hosted option, Jitsi Meet
on your own server keeps infrastructure in your hands (see [[:Category:Self Hosting]]).
|category=Video Conferencing
}}
