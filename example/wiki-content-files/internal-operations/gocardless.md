---
title: "GoCardless - bank-debit collection for recurring donations and invoices"
tagline: "bank-debit collection for recurring donations and invoices"
categories:
  - Finance&Accounting
redirect_from:
  - GoCardless
raw: true
---
{{Tool
|company=GoCardless
|protocol=https
|url=gocardless.com
|pricing=varies
|amount=Free account, no monthly fee on the entry (Standard) tier; pay-as-you-go
per-transaction (roughly 1% with a per-payment cap -- verify current rates). US ACH is
capped at $5,000 per transaction; $5 per chargeback above 15 in a month.
|source_license=closed
|hosting=cloud
|description=Bank-to-bank payment collection built for recurring billing: Direct Debit
(UK), SEPA (EU), ACH (US) and other local bank-debit schemes, plus an open-banking data
service. It pulls funds directly from a payer's bank account -- it does NOT process Visa,
Mastercard or any card network, and has no in-person/terminal capability. Best fit is
predictable recurring collections: regular donations, memberships, retainers, subscriptions.
|usage_notes=Why it can be attractive for us: no monthly fee, and it's purpose-built for
recurring collection (regular donors / members), which our current fundraising tools don't
cover well. Because it rides bank-debit rails rather than card networks, it sidesteps
card-network-driven account bans.

Deplatform caveat (important, per our criteria): self-hosting is NOT possible for GoCardless
-- or any bank/card processor. Reaching Direct Debit, SEPA or ACH requires a licensed
intermediary with scheme membership, which an ordinary org cannot hold, so there is always an
operator who can freeze funds. GoCardless is centralized, closed-source and cloud-only; it
keeps a restricted-activities list (gocardless.com/legal/restrictions) and can unilaterally
suspend an account -- a hold means you cannot receive payments, with email-only support and no
phone escalation. So GoCardless can never clear our self-host bar; score it as
lower-risk-than-card (bank rails sidestep card-network bans), not low-risk. The only payment
tool here that actually clears the self-host bar is `[[BTCPay Server]]`{=mediawiki}, at the
cost of crypto volatility and donor familiarity.

Practical limits: online only (donors need a bank account that supports direct debit --
no card fallback); US ACH capped at $5,000/transaction; some high-risk sectors excluded.
Merchant KYC verification is required before your first collection.
|rejected_alternatives=For deplatform resistance, see `[[BTCPay Server]]`{=mediawiki} (the
only self-hostable option). The broader case against card gateways is covered on the
Finance&Accounting category page.
|category=Finance&Accounting
}}
