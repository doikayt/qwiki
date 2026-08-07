---
title: "Element - self-hostable, federated encrypted messaging (Matrix)"
tagline: "self-hostable, federated encrypted messaging (Matrix)"
categories:
  - Secure Messaging
redirect_from:
  - Element
  - Matrix
raw: true
---
{{Tool
|company=Element
|protocol=https
|url=element.io
|pricing=free
|amount=Client and Matrix server software (Synapse/Dendrite/Conduit) are free and open source;
self-host at only your hosting cost, use the free matrix.org homeserver, or buy Element's
hosted plans.
|source_license=open
|hosting=self
|description=End-to-end encrypted chat on the Matrix open standard. Anyone can run a homeserver
and servers federate like email; Element is the reference client. 115M+ addressable accounts,
with bridges to Signal, Telegram, WhatsApp and others.
|usage_notes=Why it clears the self-host bar: run your own Synapse homeserver and you own the
infrastructure and your metadata -- no operator can cut you off, and you still federate with
the wider network. It is the messaging analogue of self-custody.

Tradeoffs: self-hosting Matrix is non-trivial (ops burden and upgrades -- e.g. the 2025 room
v12 security migration); the homeserver still processes account and room metadata, so it is
less metadata-private than Signal's sealed sender; and the default matrix.org homeserver is
Element-operated under UK law, so you must run your own server to get the deplatform benefit.
Device-verification UX is clunkier than Signal.

Best fit: a community that wants federated, self-controlled comms and can run a server. Pair it
with [[Signal]] for members who need a zero-setup daily driver.
|rejected_alternatives=Relying on the public matrix.org homeserver reintroduces an
operator/jurisdiction -- self-host to get the benefit. Discord and Slack are centralized and
not end-to-end encrypted.
|category=Secure Messaging
}}
