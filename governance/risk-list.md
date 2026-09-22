# Risks & Open Questions

Ranked roughly by how likely each is to force a redesign of the mechanic above.

1. **[Legal — medium severity] DAO scope must stay strictly allocation-only.**
   Because the DAO governs only the *distribution* of already-secured funded-program
   dollars among contributors — not priorities, not policy, not whether to pursue the
   program — board fiduciary duty is much less implicated than a "DAO sets policy"
   design would be. But the board (or an authorized officer) should still retain
   audit/override authority over disbursements: the org, not the DAO, remains legally
   accountable for how those dollars are spent. Recommend the DAO's vote function as a
   binding allocation instruction that the org's disbursement process executes
   automatically, with the board retaining override/audit rights, not that the DAO's
   output be completely outside institutional control. **Worth confirming with counsel
   that this framing is sufficient**, but it is a materially smaller ask than earlier
   drafts of this document implied.

2. **[Legal/tax — high severity] Payments must be structured as compensation for
   services, not profit-sharing.** Because contributors are being paid out of
   funded-program dollars administered by a 501(c)(3), each payment has to map to
   actual services that contributor performed on that program — this is the
   [private-inurement](https://www.irs.gov/charities-non-profits/charitable-organizations/inurement-private-benefit-charitable-organizations)
   guardrail. A
   peer vote determining *shares* is fine as a mechanism for sizing a services
   payment, but the underlying legal characterization must be "contractor payment for
   services performed" — documented as such (e.g., a lightweight statement of work or
   contribution record per contributor per milestone) — not "distribution of program
   winnings" or a profit-sharing distribution. **Requires confirmation from counsel.**

3. **[Tax] Intake must gate disbursement, not follow it.** Building the DAO/wallet
   registration flow to require W-9/W-8 intake before funds are eligible to move keeps
   compliance built into the mechanism rather than bolted on after the fact — this is
   reflected as step 3 above and should stay a hard gate in implementation, not a
   best-effort follow-up.

4. **[Tax] Crypto valuation & withholding.** Paying in crypto still requires
   fair-market-value USD conversion at time of payment for 1099 reporting purposes,
   and potentially backup withholding if a contributor fails to provide a W-9. Needs
   to be built into the disbursement pipeline, not handled ad hoc at year end.

5. **[Legal/tax] Related-party transactions between Commons and Satellite.** If the
   Commons is ever formalized as its own entity, money/IP flowing between it and a
   501(c)(3) Satellite is a related-party transaction and needs arm's-length terms
   (e.g., an IP license at fair market value) to avoid private-benefit problems.
   Keeping the Commons deliberately entity-less (a shared codebase and set of
   practices, not a legal person) avoids this risk for as long as that's tenable.

6. **[Legal] DAO legal wrapper.** Because the DAO's scope is now narrow (allocation
   only, with off-chain payment execution and board override), it may not need its own
   chartered legal vehicle (e.g., a [Wyoming DAO
   LLC](https://sos.wyo.gov/Business/Docs/DAOs_FAQs.pdf)) the way a policy-setting DAO
   would — it could plausibly be implemented as an internal voting tool feeding an
   ordinary org-run disbursement process. Still **unclear/requires confirmation**
   whether any wrapper is needed, and if so, what liability exposure the voting
   mechanism itself carries.

7. **[Operational] Chain/token choice.** Bitcoin vs. Ethereum vs. something else —
   unresolved.

8. **[Operational] Milestone verification.** Who certifies that a funded milestone has
   actually been met, triggering a vote — likely a board or program-management
   function, but unresolved.

9. **[Policy] Interaction with an adopting organization's existing comp
   philosophy.** Many organizations publicly commit to transparent,
   formula-based compensation bands rather than manager/community discretion
   or negotiation. Reconciling that kind of stated philosophy with a
   peer-vote-based allocation mechanic — for anyone who is *also* a paid
   employee or contractor — needs to be resolved case by case per adopter.

10. **[Sequencing] Relationship to an interim fiscal sponsorship arrangement.**
    This document describes a *permanent* structure. It is compatible with,
    and not blocked by, an adopting organization pursuing a fiscal sponsor to
    cover a gap while unincorporated — the sponsor relationship covers the
    near term; this structure is a candidate for what the organization
    incorporates into (or graduates out of the sponsor into) later.

11. **[Legal — medium severity] Tactical governance tokens (§7) must be
    board-delegated authority, not personal property.** A nonprofit board
    can lawfully delegate day-to-day/tactical decision-making to staff, a
    management team, or — per §7 — a token-weighted committer vote. What it
    cannot do is let a founder's personal, freely-held instrument operate as
    the org's real control mechanism independent of board authorization.
    The distinguishing factor is procedural: the board must formally adopt
    the token system as its own chosen delegation mechanism (a board
    resolution is enough) and retain the power to modify or unwind it — the
    same override/audit pattern already required of the funded-program-allocation
    DAO in Risk 1, one layer up. **Requires confirmation from counsel that the
    adoption resolution is sufficient**, particularly for the 501(c)(3) side;
    the for-profit subsidiary side is ordinary corporate practice and carries
    much less of this risk.

12. **[Legal — low severity] Securities-law exposure, walked through
    against Howey rather than just asserted.** The four-part
    [*Howey*](https://en.wikipedia.org/wiki/SEC_v._W._J._Howey_Co.) test for
    an investment contract requires (1) an investment of money, (2) in a
    common enterprise, (3) a reasonable expectation of profit, (4) derived
    from the efforts of others. §7's tokens fail prong 1 (nothing is
    purchased — they're granted by a trusted peer, not bought), fail prong 3
    (no profit-participation rights, and non-transferability means no resale
    value either — no dividends, no capital appreciation, nothing to expect
    a profit from), and prong 4 actively inverts (holders keep their weight
    only by remaining active contributors themselves — the opposite of the
    passive reliance on others' efforts Howey targets). Uniswap's UNI token
    — cited in an earlier draft of this risk item as a reason "governance
    only" doesn't automatically clear the bar — isn't the right comparison
    once transferability is off the table: UNI's exposure came from trading
    on open exchanges with a real, observable market price, which is exactly
    what non-transferability removes here. The direct precedent is
    [*United Housing Foundation, Inc. v. Forman*, 421 U.S. 837
    (1975)](https://supreme.justia.com/cases/federal/us/421/837/) — the
    Supreme Court held cooperative shares were *not* securities specifically
    because they couldn't be transferred outside the cooperative, weren't
    purchased for profit, and (notably, given §7's decay/vesting design)
    carried voting rights not tied to the raw number of shares held. Several
    states codify the same pattern by statute: California's [Consumer
    Cooperative Corporation
    Law](https://leginfo.legislature.ca.gov/faces/billTextClient.xhtml?bill_id=202120220AB283)
    and [Limited Liability Worker Cooperative
    Act](https://leginfo.legislature.ca.gov/faces/billNavClient.xhtml?bill_id=201520160AB816),
    and Illinois' [Limited Worker Cooperative Association
    Act](https://law.justia.com/codes/illinois/2019/chapter-805/act-805-ilcs-317/)
    (805 ILCS 317), both exempt non-transferable, participation-based
    cooperative membership interests from securities registration. This
    doesn't eliminate the question — **still requires confirmation from
    counsel**, per this document's own discipline of never treating a legal
    read as fully settled, and current SEC posture on digital-token no-action
    guidance specifically should be verified rather than assumed from older
    letters — but it's a genuinely low-probability finding, not an open
    question of comparable weight to Risk 2.

