---
title: "Category:Finance&Accounting"
categories:
  - Operations
redirect_from: []
---

Online and desktop tools for budgeting, tax reporting, payroll, and payment collection.

**On payment processing and deplatform risk:** the money-movement leg of any card or bank
processor cannot be self-hosted -- reaching Visa/Mastercard or ACH/SEPA requires a licensed
intermediary, which is by definition an operator who can freeze or terminate you. So for
payments, "self-hosted" only truly applies to self-custodial crypto rails. Our order of
preference:

1. Self-custodial and self-hosted (`[[BTCPay Server]]`{=mediawiki}), where the donor base
   allows.
2. Bank-debit over card networks (`[[GoCardless]]`{=mediawiki}), which sidesteps
   card-network-driven bans.
3. Card processors only as a last resort.

**Rejected for this domain** -- all centralized card processors with a documented history of
freezing nonprofit and activist funds without recourse, and none self-hostable:

- Stripe
- PayPal
- Square
- Adyen
- Authorize.net
- other card gateways from general survey lists

