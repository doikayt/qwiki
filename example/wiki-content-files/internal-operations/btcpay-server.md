---
title: "BTCPay Server - self-hosted, non-custodial Bitcoin/Lightning payment processor"
tagline: "self-hosted, non-custodial Bitcoin/Lightning payment processor"
categories:
  - Finance&Accounting
redirect_from:
  - BTCPay Server
  - BTCPayServer
raw: true
---
{{Tool
|company=BTCPay Server
|protocol=https
|url=btcpayserver.org
|pricing=free
|amount=Free and open-source (MIT). No fees to any operator -- you pay only network fees
(Bitcoin on-chain miner fees; near-zero on Lightning) and your own hosting: run it free on
your own always-on machine, or a few dollars a month on a VPS. Third-party hosted
deployments exist but trade away some of the self-host benefit.
|source_license=open
|hosting=self
|description=Self-hosted, non-custodial payment processor for Bitcoin and Lightning. Funds
settle directly into a wallet you control -- there is no intermediary account and no KYC to
a processor. Ships invoicing, a point-of-sale app, donation/payment buttons, a crowdfunding
app, pull payments/payouts, and integrations for WooCommerce, Shopify and others.
|usage_notes=Why this is the one on-criteria payment tool: because you run it yourself and it
is non-custodial, there is no operator who can freeze funds or terminate an account -- it is
the only option here that literally clears our "self-hosted / operator cannot unilaterally
terminate access" bar. Payments are final (no card-style chargebacks), which removes a common
deplatform lever but also means no buyer protection for donors.

The tradeoffs are real and load-bearing. (1) You own the infrastructure: an always-on node or
a small VPS, plus updates and backups of your wallet keys -- lose the keys, lose the funds.
(2) Crypto volatility: BTCPay does not auto-convert to fiat, so held balances move with the
market. (3) The weak link is the fiat off-ramp: cashing out to a bank generally means an
exchange, which reintroduces a KYC'd, deplatformable operator -- so end-to-end sovereignty
holds only as far as you keep value in Bitcoin. (4) Donor familiarity: your supporters need to
be willing and able to pay in crypto, which narrows the audience versus card or bank debit.

Best fit: a donor base already comfortable with Bitcoin, or as a censorship-resistant
*secondary* channel alongside a conventional processor -- not usually a sole payment method.
|rejected_alternatives=Custodial crypto processors like Coinbase Commerce and BitPay: they
take crypto but hold funds and impose KYC, reintroducing exactly the operator-freeze risk
that self-custody removes. If the goal is deplatform resistance, a custodial crypto gateway
gives up the main advantage.
|category=Finance&Accounting
}}
