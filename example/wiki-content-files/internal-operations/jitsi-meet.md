---
title: "Jitsi Meet - self-hostable, open-source video conferencing (WebRTC)"
tagline: "self-hostable, open-source video conferencing (WebRTC)"
categories:
  - Video Conferencing
redirect_from:
  - Jitsi Meet
  - Jitsi
raw: true
---
{{Tool
|company=Jitsi (8x8, Inc.)
|protocol=https
|url=jitsi.org
|pricing=free
|amount=Free and open source (Apache 2.0). Self-host at only your hosting cost, use the free
public meet.jit.si instance, or buy 8x8's managed Jitsi as a Service (JaaS) for scale/branding.
|source_license=open
|hosting=hybrid
|description=Open-source WebRTC video/audio conferencing you can run on your own server. No
account needed -- create a room and share the link. Uses the Jitsi Videobridge (an SFU) to route
streams; deployable via Docker or Debian packages. Maintained by 8x8. It is the video-call
analogue of [[Element]] for messaging: the reference self-hostable option.
|usage_notes=Why it clears the self-host bar: run your own Jitsi server and you own the
infrastructure and your call data -- no operator can cut you off, log your meetings, or be
compelled to hand them over. Gate-keeping is solid (room passwords, lobby mode, JWT auth), and it
doesn't track users or sell data. This is the option when you have technical capacity and want
full control.

Tradeoffs: self-hosting is real ops work -- a modest deployment needs ~2 vCPUs / 4 GB RAM plus a
TURN server, and you own patching and uptime. End-to-end encryption (via WebRTC insertable
streams) is limited to 1:1 and smaller group calls and is not the default -- larger calls are
encrypted in transit but decrypted at the bridge, so the server operator (you, if self-hosted)
can technically access media. The public meet.jit.si instance is 8x8-operated under their terms,
so you must run your own server to get the control/privacy benefit.

Best fit: teams that can run a server and want maximum control over meetings. For a zero-setup,
E2EE-by-default hosted option from a privacy non-profit, pair with (or choose) [[Proton Meet]].
|rejected_alternatives=Zoom and Google Meet are closed-source and not end-to-end encrypted by
default, with the provider able to access call data. If you can't self-host, [[Proton Meet]] is
the managed alternative that still gives you E2EE. Relying on the public meet.jit.si instance
reintroduces an operator/jurisdiction -- self-host to get the benefit (see
[[:Category:Self Hosting]]).
|category=Video Conferencing
}}
