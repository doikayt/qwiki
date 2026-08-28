# The Commons-Hub Pattern

*A replicable model for organizing collaboratively-developed
open source software around nonprofit and for-profit satellites*

**Status:** Early concept draft — not reviewed by counsel. 

---

## Introduction

This document presents a replicable organizational model for collaboratively
developing and monetizing an
[open source](https://en.wikipedia.org/wiki/Open-source_software) commons. Before
detailing the mechanics of the model — including how incoming funds from grants
and earned revenue get distributed among contributors through a narrowly-scoped
[DAO](https://en.wikipedia.org/wiki/Decentralized_autonomous_organization) (a
Decentralized Autonomous Organization) — we look at some of the historical and
economic factors which make the emergence of a new model inevitable. We note how
the standard corporate form arose as a specific historical answer to the
questions of (a) who governs production and (b) who benefits from it. We first
analyze these questions through the lens of neoclassical economists — in
particular how [Coase's 1937 transaction-cost
account](https://en.wikipedia.org/wiki/The_Nature_of_the_Firm) explains why
hierarchical structures usually win out. Next up is a dialectical-materialist (Marxist)
reading of the same shift, wherein we ask a question transaction-cost economics
doesn't: who holds the _power_ to set the rules of governance and distribution.

We then examine how the increasing sophistication and reach of AI make any
confident forecast of the next dominant mode of production impossible — to the
point where we have to ask whether human beings can even survive as a species to
participate in whatever mode comes next. Assuming we do, the next question is
whether the average working person ends up better off or worse — and while
today's power structures tilt the scales toward worse, we close on a hopeful
note: the same forces driving that risk also open real room for a
worker-friendly model of production to displace late-stage disaster capitalism,
not just survive alongside it.

## Corporations as a governance technology, not a law of nature

The corporation is not a naturally occurring phenomenon. It is a socially
produced, historically specific answer to **two fundamental questions**: when people
collaborate to produce something, who governs that production — and who
benefits economically? Different historical eras have answered both
questions differently: [guilds](https://en.wikipedia.org/wiki/Guild),
[common land](https://en.wikipedia.org/wiki/Common_land),
[joint-stock charters](https://en.wikipedia.org/wiki/Joint-stock_company),
the industrial corporation, the modern platform company. Each is a governance
structure for collective production and economic benefit, adopted — and later
challenged — because the previous model no longer served elites
with the power to change it. The wave of English enclosure that began around the mid-1700s
was driven by landowners who benefited from privatizing common land, not by
commoners demanding it; joint-stock charters emerged to mobilize capital
for merchants and investors who needed a legal vehicle for it, not from popular
pressure. Governance structures tend to change when they stop working for
whoever has enough power to rewrite them.

This document treats our two fundamental questions as still open, and
attempts to answer them for a specific mode of production: collaboratively
developed [open source software](https://en.wikipedia.org/wiki/Open-source_software)
(OSS). It's the _open_ in OSS — open in who may profit from it, open in who
may contribute to it, open in who steers its direction — that makes it a
round peg for corporate law's square hole. The corporate form defaults to
a single, exclusive top-down structure built for
concentrating both decision-making authority and economic benefit, 
not the diffuse, non-exclusive shape
open production actually takes.

Neoclassical economics gives us an important — but incomplete — answer to only
the first of those two questions. In his 1937 paper [*The Nature of the
Firm*](https://en.wikipedia.org/wiki/The_Nature_of_the_Firm), Ronald Coase —
who later won the 1991 Nobel in Economics substantially on its strength —
asked why production gets organized inside firms at all, rather than
coordinated entirely through market transactions between independent
parties. His answer was transaction costs: for most of industrial history,
hierarchical management was cheaper than coordinating distributed production
through the market. That cost calculus is exactly what technologies such as
AI are now shifting — [Appendix
A.1](#a1-why-firms-exist-coase-the-putting-out-system-and-whats-changing-now)
walks through the textile-industry case where it first played out, and what's
changing about it today.

What Coase's account doesn't do is answer our *second* question: who governs
production once it's inside the firm, who benefits from the resulting
surplus, and why those particular people hold that power. Those are
questions about power and class relations that transaction-cost economics
takes as a given backdrop rather than something to explain — we pick them up
directly in the Marxist reading in [Appendix
A.2](#a2-what-coases-account-leaves-out-power-and-marxs-answer-to-it).

## 1. The Commons Layer and Its Satellites

At the center of our proposed pattern is a **Commons**: a body of 
collaboratively developed
open source software (and the engineering practices, standards, and shared libraries
around it). A Commons might be a shared application framework, a set of 
foundational libraries, or a full product stack. The Commons is not itself a 
legal/financial entity; it is an **engineering hub**. It has no bank
account and moves no money itself. When money does need to move -- from 
donors or to contributors that enhance the commons --  we rely 
on the DAO mechanic shown below.

<figure>
<img src="diagrams/commons-layer.png" alt="Commons Layer fund-flow diagram">
<figcaption>Donors fund Satellites and customers fund subsidiaries; both pay
compensation expense into a Compensation Distribution DAO. Workers vote on
allocation, the DAO issues an allocation instruction to the Board for
review/override, the Board pays Workers, and Workers contribute code back to
the Commons.</figcaption>
</figure>


Each **Satellite** is a [501(c)(3)](https://www.irs.gov/charities-non-profits/charitable-organizations/exemption-requirements-501c3-organizations)
organized around some program of work that extends or improves 
the Commons. A Satellite may, as its revenue-generating programs mature, spin those
programs out into a **wholly-owned for-profit subsidiary**: the nonprofit retains
mission/governance control, while the subsidiary carries the operational/
revenue-generating work.
This is the same basic legal shape used by the
[Mozilla Foundation](https://en.wikipedia.org/wiki/Mozilla_Foundation), whose
wholly-owned for-profit subsidiary,
[Mozilla Corporation](https://en.wikipedia.org/wiki/Mozilla_Corporation), has
funded Firefox's development since 2005 — a two-decade precedent for exactly
this structure.


The 501(c)(3)'s **Board** of directors set the mission, priorities,  and policy 
for each Satellite through ordinary nonprofit governance. 
There is no [DAO](https://en.wikipedia.org/wiki/Decentralized_autonomous_organization)
involved in setting priorities or policy. The board decides what to build,
how to fund those  programs, and what the organization's direction is -- 
exactly as any nonprofit board would.

The **DAO** mechanism governs exactly
one thing: how the proceeds of a funded program — a
grant, a commercial-revenue-funded initiative, or a board-allocated
budget — are split among the individual developers (and pods) who
contribute to the realization of that program. 
The DAO does not set policy, does not decide what to build, and does not govern the
organization. Its entire remit is: given a funded program 
and a defined pool of contributors to that program,
determine -- by equally weighted voting -- what share of the 
disbursed funds each contributor or pod receives. The board has the ultimate
authority to approve (the typical case) or reject that proposal.

The vote itself runs on off-chain tooling
([Coordinape](https://coordinape.com)/[Snapshot](https://snapshot.org)); the
genuinely [blockchain](https://en.wikipedia.org/wiki/Blockchain)-based leg is
the treasury and payout — funds move from a
[multisig](https://en.wikipedia.org/wiki/Multisignature) treasury to each
contributor's crypto wallet
[on-chain](https://en.wikipedia.org/wiki/Blockchain) (chain TBD). See the
[Contributor Guide](contributor-guide.md) for the full pipeline.

## 3. Token-Based Delegated Authority

Along with the Board and the DAO, a third mechanism governs _day-to-day_
operations — product roadmap construction, build-vs.-buy decisions, staffing
assignments, and similar matters: **token-based delegated authority**.

This authority applies across the nonprofit and its for-profit subsidiary
alike. It is, in effect, a share of decision-making authority that scales
with how much a contributor is trusted, and it is distinct from both  the Board and the 
DAO. The former governs mission, long term priorities, and policy. The latter exists to 
distribute the proceeds of an already-secured funded program. 
*Token-based delegated authority* is tactical in scope and carries
no profit-participation rights. 

The founding steward holds all authority initially and grants it to developers
as they deliver results and build trust. Critically, those developers can then grant authority
further themselves  — so authority can keep spreading to
newly-trusted developers without funneling through one person indefinitely.
That delegation is only valid to someone already recognized as a trusted
committer — i.e., someone who's already earned ordinary committer standing in
the project (commit/review rights), independent of this token system. Reusing
that existing standing as the eligibility check means there's no separate
identity-verification process to design for this mechanism.

In practice this authority is held as a
[blockchain](https://en.wikipedia.org/wiki/Blockchain)-based token (or
equivalent [smart
contract](https://en.wikipedia.org/wiki/Smart_contract) access-control
mechanism) rather than a database record, so eligibility and
non-transferability can be checked programmatically. It cannot be bought or
sold — it is granted on trust, never transferable for payment — which is
also the central reason this mechanism doesn't read as a security under the
[Howey test](https://en.wikipedia.org/wiki/SEC_v._W._J._Howey_Co.): nothing
is purchased, and there are no profit-participation or resale rights. Two
constraints keep it from calcifying into permanent control: an individual's
share vests over time rather than landing as a lump sum, and it decays on
inactivity rather than accumulating indefinitely.

The full mechanic — committer eligibility, vesting and decay parameters,
concentration caps, and the full securities-law analysis — is being written
up in the [Contributor Guide](contributor-guide.md) and [Legal Risk
Register](legal-risk-register.md), respectively.

*(Proceeds distribution via the funded-program-allocation DAO — the mechanic
formerly summarized in this section — will get its own detailed treatment in a
later document; a pointer back to it belongs here once that's written.)*

## 4. Economic Benefit — Sequencing Across Mechanisms

By this point there are three distinct mechanisms in play, and it's easy to
conflate them since they all touch "who gets what." Worth seeing side by
side once, rather than only encountering each in its own document:

| Mechanism | Scope | Duration | Economic value | Who's eligible |
|---|---|---|---|---|
| DAO (§2 above) | Per funded program | Episodic — ends when the program does | Cash, paid for services rendered | Self-selected opt-in contributors |
| Token-based delegated authority (see the *Contributor Guide*) | Ongoing | Decays with inactivity | None — pure voice | Registered committers who've earned trust |
| ESOP | Ongoing | Vests over years | Real equity | Legally must be broad-based — ~all full-time employees |

The ESOP row above is conceptual for now, not yet operational: it only
becomes worth evaluating once two things are both true, not on a calendar
date:

1. **There's real enterprise value to distribute.** An ESOP requires an
   independent appraisal (no public market for the stock); with negligible
   or negative enterprise value, there's nothing meaningful to allocate —
   just administrative cost for its own sake.
2. **There's stable cash flow to fund the repurchase obligation.** Every
   vested share must eventually be bought back in cash when a participant
   leaves. A program-to-program or grant-to-grant cash position can't
   safely carry that liability; it takes predictable operating cash
   flow — in practice, real commercial revenue, not just grants.

Industry feasibility guidance (NCEO and others) puts typical setup costs at
**$100k–$250k+**, with most transactions wanting **~$1M+ in annual EBITDA
and ~20+ employees** to justify that overhead — smaller ESOPs do exist, but
this organization is well below even that floor today. One more sequencing
note for later, not now: if a founder-exit tax deferral under
[IRC §1042](https://www.financialplanningassociation.org/learning/publications/journal/AUG24-using-irc-section-1042-retirement-and-exit-planning-business-owners-guide-financial-OPEN)
is ever on the table, the subsidiary needs to already be a C-corp before
that transaction — an entity-type decision worth making with this in mind
well before it's actually needed.

**The resulting ladder:**

- **Now:** DAO for project-based cash payouts, token-based delegated
  authority for day-to-day voice. No ESOP — no enterprise value or stable
  cash flow yet to justify one, and no broad-based W-2 team to make
  "broad-based" mean anything.
- **Once the subsidiary has sustained commercial revenue and real
  employees** (not just grant-funded opt-in contributors): ESOP feasibility
  becomes worth a real evaluation, running alongside — not replacing — the
  DAO and token-based delegated authority, each still doing its own job.
- **If a founder-exit rollover is ever a goal:** C-corp status needs to
  already be in place before that transaction, which means the entity-type
  decision should account for this option early, not be revisited under
  time pressure later.

---

## 5. The Stakes, and Why This Pattern Has an Edge

AI, paired with breakneck progress in robotics, automation, and the Web's role in
democratizing knowledge, points toward a level of material abundance humanity has
not seen before. But the same technology concentrates the means to capture that
abundance in fewer hands: mass job loss, deeper concentration of wealth and power,
and constant surveillance are not even the worst of the possible consequences — at
the far end sits the possibility of an existential threat to the species that
pushed AI technology to its current point.
[Appendix A.8](#a8-ai-abundance-and-the-case-for-urgency) lays out the full
argument.

Assumeing that we clear that bar, the next question is
whether the average working person ends up better off or worse under whatever
comes next. Today's power structures, left to their own devices, tilt that
outcome toward _way_ worse: the same concentration of compute, capital, and political
leverage that creates the existential tail risk also determines who captures the
day-to-day gains long before any of that plays out.

None of that is inevitable, though — and this is where we close on a hopeful
note. Two structural properties of this pattern work directly against that
default trajectory.

### Why this pattern has a cost advantage a for-profit competitor can't match

Nonprofit and grassroots organizations without much money are a real market with a
real, recurring need — CRM/outreach tooling, in Doikayt's own case — that most
for-profit software companies leave alone. Not because the need is illusory, but
because these customers can't pay enough to justify ordinary customer-acquisition
cost. That's usually treated as this pattern's central constraint. It's also,
quietly, a structural advantage.

What a for-profit startup normally has to spend real money to acquire — actual
users, in volume, willing to run early builds, report what's broken, and ask for
the next feature — this pattern gets for free, in abundance, as a side effect of
serving a market a for-profit competitor is ignoring. And the problems don't stay
confined to that market: once a Satellite has solved a given problem for a
cash-poor organization, it's common to find that better-funded organizations have
a structurally similar version of the same problem. Because the resulting software
is free, open, and low-cost to adopt, a Satellite can move into that adjacent,
better-funded market at a cost structure a for-profit incumbent can't match — it
isn't competing on price with something built to extract margin from that market.

### The labor-market half of the advantage: elite overproduction and AI-driven
displacement

Peter Turchin's [structural-demographic
theory](https://en.wikipedia.org/wiki/Structural-demographic_theory)
identifies "elite overproduction" as a recurring precondition for social
instability: when a society trains and credentials more aspirants for
elite-track positions than it has positions to absorb them into, intra-elite
competition intensifies, average outcomes for elite aspirants decline, and —
critically — some fraction of those aspirants become "counter-elites,"
turning their training and ambition toward organizing opposition to the
existing order rather than joining it.[^2]

The current U.S. software labor market is a live instance of this pattern: an
education system that has spent two decades producing an increasing supply of
highly credentialed software engineers, now colliding with AI-driven
contraction of entry- and mid-level engineering hiring. A growing population of
capable, credentialed, increasingly frustrated engineers — including recent
graduates with advanced degrees — is finding the traditional elite-track path
(a well-paid job at a major tech employer) narrowing or closing.

That population is not just a labor pool to hire from — it is a mobilizable
base for a movement, in Turchin's counter-elite sense. Paired with the
cost-advantage dynamic above, this pattern has two complementary resources most
startups have to pay real money for: engaged users and committed labor.

### Resilience: why dispersion is a strength, not just a scaling property

This multi-Satellite shape is a resilience property, not just a scaling one.
Concentrating value and capability into a single legal entity is exactly what
makes it worth attacking — legally, politically, operationally. A dispersed,
replicable structure has no equivalent point of failure: no single Satellite is
load-bearing for the pattern as a whole. See Appendix A.6, ["Why dispersion, not
just adequate but
better"](#a6-why-dispersion-not-just-adequate-but-better-the-aircraft-carrier-problem),
for the full argument.

The same dispersion shows up one level down, inside each Satellite's own
governance. [Token-based delegated authority](#3-token-based-delegated-authority)
is built so trust cascades outward — a developer who earns authority can
grant it further to other trusted committers — rather than funneling every
new grant through the founding steward personally. It's a small-scale version
of the same no-single-point-of-failure logic, and the same
coordination-without-a-center pattern Appendix A.5 calls
[stigmergy](#a5-stigmergy-coordination-without-a-center): no one is directing
traffic, yet trust still propagates.

Cost structure and resilience aren't abstractions here — they're the concrete
reasons a worker-friendly model of production doesn't have to stay a hopeful
aspiration. This is exactly the model built to give a better answer to the
question this document opened with.

## Appendix A: Historical and Economic Grounding


### A.1 Why firms exist: Coase, the putting-out system, and what's changing now

Building on the Introduction's transaction-cost account: the clearest
illustration is textile production just before the modern
corporation took shape. Before Richard Arkwright's water frame (1769), English
cloth was made under the *putting-out system* — pure market coordination: a
merchant distributed raw wool or cotton to independent spinners and weavers
working in their own homes, paid piece-rate for finished cloth, with no employment
relationship at all. It lost to the factory for three specific reasons:

- **Production was unobservable.** A merchant only saw finished cloth, never
  the process, which produced chronic embezzlement of material and
  inconsistent quality.
- **Scheduling was unenforceable.** Dispersed workers set their own pace,
  often around farm work.
- **The new machinery physically required centralization.** A water wheel
  could power a mill, not a cottage.

Direct supervision solved the first two problems outright; centralization was
the only way to use the new capital equipment at all.

<figure class="float">
<img src="images/wheel-water.jpeg" width="220"
     alt="Spinning wheel alongside Arkwright's water frame">
<figcaption>Spinning wheel alongside Arkwright's water frame / Source:
Wikipedia</figcaption>
</figure>

Today, AI and the broader digital-infrastructure stack subvert several of
these same advantages at once — and the honest version of this argument has
to show the mapping directly rather than just assert "technology makes
things cheap":

- **Observability and scheduling — the direct flip of the first two 1769
  reasons.** AI-assisted code review, automated testing, and the
  trust/vetting mechanisms described in the [Contributor
  Guide](contributor-guide.md), paired with tooling that predates this
  document (version control, CI/CD, issue trackers), reduce the cost of
  decomposing work, assigning it, monitoring it, integrating outputs, and
  resolving exceptions — a real version of what a factory foreman and a
  fixed schedule did, without requiring everyone under one roof.
- **Capital requirements — the direct flip of the third 1769 reason.** In
  1769 the machinery forced centralization; a spinner could never own a
  water wheel. Today the equivalent capital — compute, AI models, and the
  cloud infrastructure underneath them — is rentable by the hour. A
  dispersed contributor can access industrial-grade tooling *without* being
  inside a hierarchical firm that owns the equipment.
- **Knowledge and information concentration — a fourth advantage the 1769
  case didn't need to name, because it barely existed yet.** Corporations
  have historically concentrated expertise, institutional knowledge, and
  decision-making. AI increasingly makes that expertise portable and
  accessible to distributed producers, eroding an advantage the
  textile-era analysis never had to account for.
- **Trust, quality control, and reputation — the major countervailing
  force, and where the parallel breaks down.** The 1770 embezzlement
  problem was about *material*; the equivalent risk now is trust in
  *contribution provenance* — can this code, and whoever submitted it, be
  trusted. Cheap AI-generated contribution volume doesn't shrink that
  problem, it grows it — this is the [XZ Utils
  backdoor](https://www.akamai.com/blog/security-research/critical-linux-backdoor-xz-utils-discovered-what-to-know)
  risk, restated as economic history rather than a security anecdote.
  Distributed production doesn't eliminate the need for organization; it
  changes what organization has to do — and **technology-driven abundance
  of code doesn't reduce the need for the trust layer described in the
  Contributor Guide, it increases it.**



------   Need lots of edits on the remaining content.. pls skip if you are reviewing ---

### A.2 What Coase's account leaves out: power, and Marx's answer to it

Coase's framework answers "why hierarchy, given the technology and the cost of
coordination" — but it treats who already owns and controls the
infrastructure of production — the water wheel, the factory floor, today's
compute — as a fixed backdrop, not something itself worth explaining. It
doesn't ask who got to own the water wheel, who got to write the terms
spinners worked under once centralized, or why "efficiency" so often turns
out to have been decided in advance by whoever already held the leverage to
decide it. The issue
of who holds power in a relationship, and how they choose to exercise it, is
not a footnote to human production relationships — it is close to the most
fundamental fact about them. An explanation of why firms exist that doesn't
ask that question has a real blind spot, not just an incomplete one.

This document already makes a version of that argument once, without naming it
as such: the Introduction's account of enclosure is exactly this critique in
miniature. The shift from common land to private landholding wasn't a response
to commoners demanding more efficient land use — it was landowners with the
power to rewrite the rules doing so, in their own interest, and calling the
result an improvement. Coase's transaction-cost story and the "efficiency"
framing around it can be true as far as it goes and still be the story told
afterward by whoever won.

Marx's own answer to the same question isn't merely "the powerful decide" as a
general cynicism — he has a specific mechanism, and it's a genuinely useful lens
for the current moment, not just a historical curiosity. His "Fragment on
Machines," in the [*Grundrisse*](https://www.marxists.org/archive/marx/works/1857/grundrisse/ch13.htm)
notebooks (1857–58), predicted a point at which automated, machine-embodied
social knowledge — what he called the **general intellect** — becomes the
primary productive force directly, at which point value grounded in direct,
individually-measured labor time starts to break down as the actual basis of
production. Software built substantially by AI, trained on the accumulated,
freely-given knowledge-work of millions of people, and then made freely
reproducible at near-zero marginal cost, is about as literal an instance of
"general intellect becoming a direct productive force" as has existed since
Marx wrote the phrase. This is also the passage the later Italian *operaisti* —
[Antonio Negri](https://en.wikipedia.org/wiki/Antonio_Negri),
[Carlo Vercellone](https://en.wikipedia.org/wiki/Carlo_Vercellone), and
[Maurizio Lazzarato](https://en.wikipedia.org/wiki/Maurizio_Lazzarato) — built
[cognitive capitalism](https://en.wikipedia.org/wiki/Cognitive_capitalism) and
[immaterial labor](https://en.wikipedia.org/wiki/Immaterial_labour) theory on:
once value comes from socially-distributed, networked cognitive labor rather
than labor time inside one factory under one owner's direct supervision,
private appropriation of that value becomes increasingly awkward to justify, or
even to mechanically sustain.

Read this way, Coase and Marx aren't answering different questions so much as
describing the same mechanism from two different standpoints: Coase describes
it from inside the system, as a transaction-cost optimization; Marx describes
it from the standpoint of the system's eventual supersession, as a contradiction
between how value is actually produced (socially, collaboratively) and how it's
still legally appropriated (privately, by an owner). Both are looking at the
same shift in where productive capability actually lives.

### A.3 Determinism vs. contingency: what this document is and isn't claiming

It would be convenient — and dishonest — to claim that any of this makes the
outcome determined. A strict materialist reading would want to say this is a
determined transition: the contradiction sharpens, the old relations become an
unsustainable fetter, transformation follows more or less on schedule. The
actual historical record doesn't support that confidence: capitalism has
repeatedly absorbed exactly this kind of threat rather than being superseded by
it — open protocols get captured into platforms, networked production gets
re-enclosed via IP law and API paywalls, and there's nothing automatic about
commons-based production winning this round either.

The honest version isn't "history is doing this for us." It's: the technical
conditions are more favorable to this kind of project than they've been before,
and someone still has to build the institutions that actually hold the line, on
purpose, against re-enclosure. Which, not coincidentally, is what the
[Contributor Guide](contributor-guide.md)'s trust layer and non-transferable
tactical-governance tokens are actually for — they're the deliberate, contingent
political work standing in for the "inevitable" the dialectic doesn't actually
guarantee. Nothing in this pattern wins by waiting.

### A.4 Commons-based peer production: Benkler's answer

There's a second, independent reason hierarchy isn't needed here, distinct
from anything AI changes. Coase's hierarchy doesn't only solve "I can't see
what you're doing" — it solves "you don't actually want to do what I need,"
the **misalignment** between what a wage-earner wants (the largest wage for
the least effort) and what a firm wants (the largest output for the wage),
which is precisely what supervision hierarchies exist to manage. Self-selected,
mission-driven contributors who opted in because they believe in the goal
mostly don't have that gap to begin with — this isn't a cheaper way to
supervise labor, it's a context where the thing supervision exists to fix is
largely absent. This already has a name and a rigorous treatment, and it's a
tighter fit here than Coase alone:
[Yochai Benkler, "Coase's Penguin, or, Linux and The Nature of the
Firm"](https://cyber.harvard.edu/is03/Readings/Benkler_Excerpt.pdf) (Yale Law
Journal, 2002) — the title is a direct response to Coase, using Linux as the
empirical counter-case, and it argues for a third mode of production alongside
markets and firms: **commons-based peer production**, where complex goods get
built by self-organizing contributors motivated by non-monetary reasons
(mission, reputation, craft), coordinated through shared infrastructure rather
than either price signals or managerial hierarchy. This isn't speculative —
it's the mode that already produced Linux and most of the open source stack
this pattern itself depends on.

### A.5 Stigmergy: coordination without a center

The coordination mechanism this points toward has a name too:
**[stigmergy](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10956014/)** —
agents coordinating indirectly through shared traces left in a common
environment, rather than through direct communication or central command. An
ant doesn't get orders; it reads a pheromone trail another ant left and
reinforces or ignores it, and the colony converges on good paths without any
ant ever computing one. It's a live concept in swarm robotics and multi-agent
AI system design today, not just biology — and this pattern already specifies
the pheromone trail: the shared Commons itself, and the committer-standing
record and token-based delegated authority described in the
[Contributor Guide](contributor-guide.md), are the shared environment that
lets independent contributors coordinate toward a common goal without anyone
directing traffic.

### A.6 Why dispersion, not just adequate but better: the aircraft-carrier problem

Which points to why dispersion is the better answer here, not merely an
adequate one. Concentrating capability into one legal entity, one point of
control, one target, is exactly the aircraft-carrier problem: enormous value
in a single place is precisely what makes it worth attacking — legally (one
entity to sue or deplatform), politically (one target to pressure),
operationally (one point of funding or leadership failure). A dispersed,
replicable structure doesn't have that failure mode — no single instance is
load-bearing, and if one node goes down, the pattern survives elsewhere. That
is what the clonable, multi-Satellite shape in
[§1](#1-the-commons-layer-and-its-satellites) is actually for: not just a way to scale, but a
resilience strategy.

### A.7 A return to the commons: enclosure and Ostrom

Before the [enclosure movements](https://en.wikipedia.org/wiki/Enclosure)
reshaped landholding in England, common land was governed collectively by the
communities that worked it — not owned by any single lord, not managed by the
state. Enclosure privatized that land, and with it, concentrated the benefit
of centuries of collective stewardship into far fewer hands.

<figure class="float">
<img src="images/enclosure.jpg" alt="1793 Enclosure Act for Shifnal">
<figcaption>Enclosure Act for Shifnal, 1793 (Shropshire Archives 539/1/5/3).
Public domain, via Wikimedia Commons.</figcaption>
</figure>

Garrett Hardin's later ["tragedy of the
commons"](https://en.wikipedia.org/wiki/Tragedy_of_the_commons) argument
treated unowned shared resources as inherently doomed to overexploitation —
but Elinor Ostrom's empirical research (which won her the [2009 Nobel
Memorial Prize in Economic
Sciences](https://en.wikipedia.org/wiki/Nobel_Memorial_Prize_in_Economic_Sciences))
overturned that claim, documenting hundreds of real cases where communities
successfully self-governed shared resources through their own institutional
rules, without requiring either privatization or centralized state control.[^1]

This initiative is, in effect, a proposal to apply Ostrom-style commons
governance to a *digital* commons — open source software — rather than to land,
water, or fisheries: a body of collectively produced software governed by the
people who build it, with the Commons-Hub structure
([§1](#1-the-commons-layer-and-its-satellites)) as the specific institutional design, and the
funded-program-allocation
[DAO](https://en.wikipedia.org/wiki/Decentralized_autonomous_organization)
([§2–3](#2-governance-layer--two-separate-mechanisms)) as one concrete rule
within it, in Ostrom's sense of a community writing its own rules for how a
shared resource's benefit gets distributed.

[^1]: [Elinor Ostrom — Wikipedia](https://en.wikipedia.org/wiki/Elinor_Ostrom)
[^2]: [Elite overproduction — Wikipedia](https://en.wikipedia.org/wiki/Elite_overproduction);
    [Structural-Demographic Theory — Peter Turchin](https://peterturchin.com/structural-demographic-theory/)

### A.8 AI, abundance, and the case for urgency

AI's honest case for abundance rests on more than the technology itself. Paired with
breakneck progress in robotics and automation, and the Web's role in democratizing
knowledge — anyone now has 24/7 access to an expert
tutor, and the pool of people who can pick
up the skills to become a contributor to a project like this one is larger than it has
ever been — it points toward a level of material abundance humanity has not seen
before.

The same technology concentrates the means to capture that abundance in fewer hands.
Mass displacement of labor, wealth and power pooling further with whoever already
owns the compute and the models, and surveillance capacity to match are not
speculative — they are the direction current incentives already point. At the far end
of that same curve sits a risk with no historical precedent to weigh it against: that
sufficiently advanced AI, up to and including an AI singularity, poses an existential
threat to the species that built it. *(Requires confirmation: this section should cite
specific sources for the existential-risk claim rather than assert it — e.g. the CAIS
statement on AI risk or Bostrom/Christiano — before this document is finalized.)*

This document takes no position on which outcome is more likely — no one credible can,
yet. What it argues is narrower, and harder to dispute: because the downside is this
severe, it is more urgent now, not less, to have alternatives to the traditional
corporation and the capitalist mode of production it was built to serve — built and
tested before the outcome is decided, not improvised after. That is the stake this
whole document is written against.
