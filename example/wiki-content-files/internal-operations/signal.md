---
title: "Signal - end-to-end encrypted messaging from a nonprofit"
tagline: "end-to-end encrypted messaging from a nonprofit"
categories:
  - Secure Messaging
redirect_from:
  - Signal
raw: true
---
{{Tool
|company=Signal Foundation
|protocol=https
|url=signal.org
|pricing=free
|amount=Free, no ads, no paid tiers. Run by the Signal Foundation, a US 501(c)(3) nonprofit
funded by grants and donations; by charter it cannot be acquired.
|source_license=open
|hosting=cloud
|description=End-to-end encrypted 1:1 and group messaging, plus voice/video calls, built on
the audited Signal Protocol (Double Ratchet + X3DH). ~40M monthly users. Registration
requires a phone number; usernames (added 2024) let you start chats without sharing it.
|usage_notes=Why it's strong for us: the most-scrutinized E2E encryption in production, from a
mission-aligned privacy nonprofit that collects minimal metadata (sealed sender). Its
published responses to legal demands show it can only produce registration and last-connection
dates -- not messages, contacts, groups, or call logs. Free.

Deplatform caveat: Signal is deliberately centralized and does NOT federate or support
self-hosting -- the Foundation runs every server, so an outage, protocol change, or government
compulsion hits all users at once and you have no fallback infrastructure. Practical risk is
low (privacy nonprofit, strong track record), but it does not clear our self-host bar. The
self-hostable counterpart is [[Element]].

Phone number: registration still needs one; usernames hide it from other users, but a subpoena
can still map a username to the number. For high-anonymity threat models see [[SimpleX Chat]]
(no identifier) or [[Briar]] (offline/mesh, censorship-resistant).
|rejected_alternatives=WhatsApp (uses the Signal protocol but is Meta-owned and harvests
metadata) and Telegram (chats are not end-to-end encrypted by default, weaker crypto).
|category=Secure Messaging
}}
