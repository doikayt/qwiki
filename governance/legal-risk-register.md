# Legal Risk Register

*For counsel and board — open legal/tax questions raised by the mechanics described in
[`commons-hub-pattern.md`](commons-hub-pattern.md) and
[`contributor-guide.md`](contributor-guide.md).*

**Status:** Stub. Only the items below are populated so far. The full risk list from the
original single-doc draft (DAO scope vs. fiduciary duty, compensation-vs-profit-sharing
characterization, board-delegation formality, securities-law exposure for tactical
governance tokens, crypto valuation/withholding, DAO legal wrapper, etc.) has not yet
been migrated here — see
[`DOC-SPLIT-PLAN.md`](DOC-SPLIT-PLAN.md). Nothing here should be treated as a legal or
tax conclusion.

This is one of four companion documents split out of a single original draft (see
[`DOC-SPLIT-PLAN.md`](DOC-SPLIT-PLAN.md) for the rationale).

## Open items

1. **[Tax — requires confirmation] Sub-$600 exception to the tax-intake gate.**
   The [Contributor Guide](contributor-guide.md) pays a contributor directly, without a
   W-9 on file, as long as that contributor's cumulative payouts for the calendar year
   stay under $600; the W-9 gate only applies
   once a payout would cross that threshold. This assumes US-based contributors only —
   non-US tax-intake treatment (W-8BEN) is not yet addressed here. Unresolved, needs
   counsel confirmation:
   - Whether the $600 test aggregates per contributor **across all funded programs
     org-wide** for the calendar year, or per program — the mechanic as drafted assumes
     org-wide aggregation.
   - Whether a crypto-denominated payout is valued in USD at time of payment for
     threshold-crossing purposes the same way a cash payment would be.
   - Whether any backup-withholding exposure exists on the sub-$600, no-W-9 payments
     themselves, or whether that risk only attaches once the $600 threshold is crossed.

2. **[Legal — requires confirmation] Jurisdictional dispersal of trusted signers.**
   [Trusted signer roster design and jurisdictional
   dispersal](commons-hub-pattern.md#trusted-signer-roster-design-and-jurisdictional-dispersal)
   proposes capping the signers in any one jurisdiction at the smaller of M-1 and N-M, so
   that no single government can force a treasury transaction and losing one jurisdiction
   does not stall the treasury. The threshold rule is the author's own analysis and has
   not had an independent technical or security review. The legal questions are
   unresolved and need counsel:
   - Whether a US court or agency can compel a US-based signer to sign a transaction,
     produce a key, or unlock a hardware wallet, and how compelled-production doctrine
     applies to keys and signing acts.
   - Whether deliberately placing enough signers outside the US to keep a compelled US
     quorum from forming could be characterized as obstruction or as sanctions or blocking
     evasion if the US-based entity is later designated or served with a blocking order.
   - Whether signers located abroad, or the roster as a whole, create licensing,
     custody, or money-transmission exposure under their own jurisdictions' law.
   - The personal liability of an individual signer, who has no corporate liability
     shield (see the corporation-versus-individual tradeoff in the same section).
   - The rule assumes the jurisdictions act independently. Whether treaty or sanctions
     coordination makes that assumption fail for particular jurisdiction pairs is a
     factual and legal question for counsel, not settled here.

3. **[Legal — requires confirmation] Corporate trusted signers as targets of legal process.**
   The [Trusted signer election](commons-hub-pattern.md#trusted-signer-election) section
   says a corporation acting as a trusted signer, with a physical address in public
   records and a registered agent to serve, is "an easy target for direct legal process:
   a subpoena, a seizure warrant, or a blocking order." This is drafted as a general
   statement and has not had counsel review. Unresolved, needs counsel:
   - Which of those processes can actually reach a corporate signer, and what each can
     compel: a subpoena reaches records and testimony, but whether it can compel a
     signature or a key turns on the compelled-production questions in item 2.
   - Whether a seizure warrant can reach crypto assets or keys held by a corporate
     signer, and on what showing.
   - Whether a corporate signer incorporated outside the US is reachable by US process,
     and by what route (service on a US agent, mutual legal assistance, or pressure on
     intermediaries).
   - Whether the corporate form gives the liability shield the section describes when the
     signer's role is to hold a key or co-sign treasury transactions.

4. **[Legal — requires confirmation] Tornado Cash as precedent for developer and
   governance exposure.** [Appendix A.4](commons-hub-pattern.md#a4-dai-backgrounder) cites
   the Tornado Cash matter for two points: that people who build or maintain code nobody
   controls can still be prosecuted after a sanction on the code itself falls, and that a
   protocol's foundation and concentrated governance-token holders are a target class
   in their own right. The case facts (the Fifth Circuit's November 2024 reversal, the
   March 2025 delisting, the August 2025 conviction on one count, and the April 2027
   retrial date) were taken from secondary sources and one court-reporting site and have
   not been checked against the dockets. Unresolved, needs counsel:
   - Current status of the prosecution, including the pending acquittal motion, before
     the document states any of it as settled.
   - Whether the analogy carries from a mixer's developer to the participants who govern a
     lending protocol, and on what liability theory (unlicensed money transmission, aiding
     and abetting, or treatment of token holders as an association).

