# The Commons-Hub Pattern

*A replicable model for organizing collaboratively-developed
open source software around nonprofit and for-profit satellites*

**Status:** Early concept draft — not reviewed by counsel. 

---

## Overview

This document presents a replicable organizational model for collaboratively
developing and monetizing an
[open source](https://en.wikipedia.org/wiki/Open-source_software) commons. Before
detailing the mechanics of the model — including how incoming funds from grants
and earned revenue get distributed among contributors through a narrowly-scoped
[DAO](https://en.wikipedia.org/wiki/Decentralized_autonomous_organization) (a
Decentralized Autonomous Organization) — we look at some of the historical and
economic factors which make the emergence of a new model inevitable. We note how
the standard corporate form arose as a specific historical answer to the
questions of (a) who governs production?   and (b) who benefits from that production? We first
analyze these questions through the lens of neoclassical economists — in
particular how [Coase's 1937 transaction-cost
account](https://en.wikipedia.org/wiki/The_Nature_of_the_Firm) explains why
hierarchical structures usually win out. Next up is a dialectical-materialist (Marxist)
reading of the same shift, wherein we ask a question transaction-cost economics
doesn't: who holds the _power_ to set the rules of governance and distribution.

We later examine how the increasing sophistication and reach of AI make any
confident forecast of the next dominant mode of production impossible — to the
point where we have to ask whether human beings can even survive as a species to
participate in whatever model comes next. Assuming we do, the next question is
whether the average working person ends up better off or worse — and while
today's power structures tilt the scales toward worse, we argue 
that the same forces driving that outcome also open opportunities for 
alternative worker-friendly legal/financial/ownership structures to displace
the top-down corporate form that underpins late-stage disaster capitalism.

In terms of our two opening questions our model's answers are:

- Who governs: the contributors to the commons themselves -- through
[token-based delegated authority](#3-token-based-delegated-authority)
that vests with earned trust and decays on inactivity (rather than
accumulating into permanent control.)   

- Who benefits, and by what means: the people who did the work on a given funded
program, by their own [equally-weighted vote through a
DAO](#2-governance-layer--two-separate-mechanisms). 




## Corporations as a governance technology, not a law of nature

The corporation is not a naturally occurring phenomenon. It is a socially
produced, historically specific answer to **two fundamental questions**: when people
collaborate to produce something, who governs that production (and by what means) — and who
benefits economically (and by what means)? Different historical eras have answered both
questions differently: [guilds](https://en.wikipedia.org/wiki/Guild),
[common land](https://en.wikipedia.org/wiki/Common_land),
[joint-stock charters](https://en.wikipedia.org/wiki/Joint-stock_company),
the industrial corporation, the modern platform company. Each is a governance
structure for collective production and economic benefit, adopted — and later
challenged — because the previous model no longer served elites
with the power to change it. The wave of English enclosure that began around the mid-1700s[^1]
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


### Factors favoring the emergence of the corporate model -- neoclassical View

In his 1937 paper [*The Nature of the
Firm*](https://en.wikipedia.org/wiki/The_Nature_of_the_Firm), Ronald Coase —
who later won the 1991 Nobel in Economics substantially on its strength —
asked why production gets organized inside firms at all, rather than
coordinated entirely through market transactions between independent
parties. His answer was transaction costs: for most of industrial history,
hierarchical management was cheaper than coordinating distributed production
through the market. That cost calculus is exactly what AI and other rapidly evolving digital 
technologies  are now shifting — [Appendix
A.1](#a1-why-firms-exist-coase-the-putting-out-system-and-whats-changing-now)
walks through the textile-industry case where it first played out.



### Drivers of the dissolution of the corporate model -- Marxist view

Coase's analysis makes the advantages of centralization clear, but begs the
question of _who_ got to own the means of production around which the
corporate firm is centralized — and _how_ they got to own it in the first
place.[^2] That question is exactly what [Marxist economic
theory](#a2-marxist-economics-101)
takes up, centering it on **class struggle**: a structural conflict
between whoever owns "the factory," and those who labor inside of it.
This manifests in terms of conflict over 
how the production process is organized (think wildcat strikes over shop floor conditions), and the
division of the value that process generates.


Capitalist modes of production, according to Marx, play out in a system whose internal
_contradictions_ lead to the inexorable collapse of capitalism itself --   among
these contradictions: quarterly focus on profits' demand for infinite growth
versus the fundamental resource limits of the planet,
the fact that continually _squeezing_ working people's wages leaves them with increasingly _shrinking_
disposable income to purchase the goods a capitalist economy produces. But the internal
contradiction most relevant to this section is the process by which the surplus value
extracted from workers is invested into ever more sophisticated machines which
perform work with ever-increasing efficiency, and ever-diminishing requirements for human labor.

Marx's "Fragment on Machines," in the Grundrisse notebooks (1857–58),[^3] anticipated exactly this: a point at
which automated, machine-embodied social knowledge, "the general intellect" (Marx's term — but
with a striking resonance to today's [AGI](https://en.wikipedia.org/wiki/Artificial_general_intelligence)),
becomes the primary productive force directly, breaking down labor-time as the basis of value.
Once that labor-time basis breaks down, working people notice — both that they no longer
have work, and that the resulting abundance is being captured by a class that visibly
isn't the one still producing it. How a society -- especially one as heavily armed and 
socially fragmented as what we have now in the US --  handles that disillusionment 
depends to a large degree on whether alternative, fairer models of production can be 
established.




## 1. The Commons Layer and Its Satellites

At the center of our proposed model is a **Commons**: a body of 
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


### Bulwarks against enclosure of our digital commons

There is an active movement today to re-enclose the digital commons — 
the central component of our model. Companies 
seeking such privatization often justify its merits by pointing to
Garrett Hardin's 1968 essay, ["The Tragedy of the
Commons"](https://en.wikipedia.org/wiki/Tragedy_of_the_commons), which argued
that unowned shared resources are inherently doomed to overexploitation and
mismanagement. Simple in its appeal, this idea has become a go-to rationalization
for private ownership of public goods. Market leading software vendors 
(MongoDB, Elastic, HashiCorp et.al.) have all recently 
decide to relicense away from open source after cloud providers resold
their software without contributing back — HashiCorp's leadership rationalized this move
in almost exactly Hardin's terms: "there's a tragedy of the commons
here."[^4] 

So of what value could our model be, if successful established 
software firms are moving 
in the exact opposite direction?  Note that MongoDB, Elastic, HashiCorp, and Redis 
are for-profit companies answerable
to shareholders — once maintaining their code as open source stopped maximizing shareholder
return, enclosure won out. Our model is engineered to withstand 
that pressure: governance of the Commons is the remit of a 501(c)(3) Satellite, not a
for-profit company, so mission/governance control
([§1](#1-the-commons-layer-and-its-satellites)) stays legally locked to the
public benefit the Satellite was chartered for, never to shareholder
return. That's the actual precondition for this whole proposal: an
organization motivated by mission as opposed to profit has no
motivation or justification to enclose in the same way HashiCorp did. [^5]


### The Tragedy of the Commons, Proven Wrong

We should also note that  Elinor Ostrom's empirical research 
(which won her the [2009 Nobel
Memorial Prize in Economic
Sciences](https://en.wikipedia.org/wiki/Nobel_Memorial_Prize_in_Economic_Sciences))
overturned Hardin's claim, documenting hundreds of real cases where
communities successfully self-governed shared resources through their own
institutional rules, without requiring either privatization or centralized
state control.[^6]    Our proposal can be viewed as applying
Ostrom-style commons governance to a *digital* commons — open source software — 
rather than to land, water, or fisheries.



## 2. Governance Layer — Two Separate Mechanisms

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
[blockchain](https://en.wikipedia.org/wiki/Blockchain)-based leg is
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
distribute the proceeds of a funded program. 
*Token-based delegated authority* is tactical in scope and carries
no profit-participation rights. 


The founding steward holds all authority initially and grants 'slices' of it to developers
as they deliver results and build trust. Those developers can, in turn, 
delegate that authority to others _they_ trust. 
That delegation is only valid to someone already recognized as a trusted
committer — i.e., someone who's already earned commit rights in
the project, independent of this token system. Reusing
that existing standing as the eligibility check means there's no separate
identity-verification process to design for this mechanism. (See the
[Contributor Guide](contributor-guide.md) for the on-boarding mechanic —
wallet registration and tax documents intake.)

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
   flow as opposed to sporadically obtained grants.

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
  employees** : ESOP feasibility
  becomes worth a real evaluation, running alongside — not replacing — the
  DAO and token-based delegated authority, each still doing its own job.
- **If a founder-exit rollover is ever a goal:** C-corp status needs to
  already be in place before that transaction, which means the entity-type
  decision should account for this option early, not be revisited under
  time pressure later.

---

## 5. The Stakes, and why our model has an edge

The past year (2026, as of this writing) has seen rapid, measurable progress
toward AI writing the software that builds AI itself.[^7]   This
mirrors recent progress toward 
["lights-out manufacturing"](https://en.wikipedia.org/wiki/Lights_out_(manufacturing)) 
-- robots building new robots with minimal human involvment -- in the 
physical world. While these  technologies promise never-before-seen levels of material
abundance, they can also be deployed to direct that
abundance exclusively to those whose hands hold the controls. Mass job loss,
heightened inequality, and constant surveillance are not even the worst of the
possible consequences — at the far end sits the possibility of an existential
threat to the species that pushed AI technology to its current point. 
[Appendix A.8](#a8-ai-abundance-and-the-case-for-urgency) provides more detail.


Assuming we clear the extinction bar, the next question is
whether the average working person ends up better off or worse under whatever
comes next. Today's power structures, left to their own devices, tilt that
outcome toward _way_ worse. The same concentration of capital, 
computational resources,  and political influence that enables 
AI research to proceed unregulated also determines who captures the 
day-to-day gains from that same technology.

None of that is inevitable though — and this is where we close on a hopeful
note. First we look at two structural properties of our model 
that provide operational business advantages. Then finally, we address the 
likely consequence of any specific 501c3 realizing a mission 
that is overly threatening to entrenched captial:  targeting and surpression --
and we examine the resliance properties of our model that guard against this.


### The labor-market half of the advantage: elite overproduction and AI-driven displacement

Peter Turchin's [structural-demographic
theory](https://en.wikipedia.org/wiki/Structural-demographic_theory)
identifies "elite overproduction" as a recurring precondition for social
instability: when a society trains and credentials more aspirants for
elite-track positions than it has positions to absorb them into, intra-elite
competition intensifies and average outcomes for elite aspirants decline.
Some fraction of those aspirants then tend to become "counter-elites,"
turning their training and ambition toward organizing opposition to the
existing order rather than joining it.[^8]

This is playing out in the current U.S. software labor market: an
education system that has spent two decades producing an increasing supply of
highly credentialed software engineers is now colliding with the AI-driven
contraction of entry- and mid-level engineering hiring. A growing population of
capable, credentialed, and increasingly frustrated engineers 
is finding the traditional elite-track path
(a well-paid job at a major tech employer) narrowing or closing.
This population of potential colleagues constitutes 
a committed mobilizable base, naturally aligned with the mission of any non-profit 
that challenges the system that is leaving them behind.



### Cost advantages that a for-profit competitor can't match

Identifying the unmet needs of customers with money, and acquiring those customers
(just getting them to _sign up and try_) is a key challenge for-profits face. 
Small nonprofits and shoestring-budget grassroots organizations pose a different problem 
entirely: their needs are real, often recurring,
and easy to identify — but most for-profit software companies 
leave them alone since they can't pay enough to justify the ordinary 
customer-acquisition cost. This works to our advantage.

While for-profit start-ups normally have to devote significant sales and
marketing budget to acquire their users, a collective that 
adopts our model has a much easier job, precisely because their
targeted user base will be underserved. Once a given problem has
been solved for an initial cash-poor and underserved market, 
it's common to find that better-funded organizations
have structurally similar versions of the same problem. Because the software that solves 
those problems is now proven, free and open, a collective can move into that adjacent,
better-funded market at a cost structure a for-profit incumbent can't match.

In summary, the operational advantages that accrue from these two structural properaties are:
  - lower cost of customer acquisition 
  - lower product marketing spend to figure out what to build
  - lower cost of recruiting and easier staff retention due to alignment around principles




### Resilience through dispersion

Engineers building cloud infrastructure learned this lesson long ago: you don't put a service in one data center, because
one region's outage takes the whole thing down — you replicate across independent regions and providers so no single
failure is fatal. The same logic applies to organizations, and it's the same reason a single aircraft carrier, however
powerful, is one well-placed strike away from losing everything it carries: concentrating value and capability into one
legal entity is exactly what makes it worth attacking — legally, politically, operationally. A dispersed, replicable
structure has no equivalent point of failure: if a lawsuit, a funding collapse, or a government action takes out one
Satellite, the shared Commons and every other Satellite running it keep operating. See Appendix A.6, "Why dispersion, not
just adequate but better", for the full argument.

This isn't hypothetical. In August 2026, the US government designated the Italian hosting collective Autistici/Inventati
a "Specially Designated Global Terrorist" entity over how its infrastructure was allegedly used by others — and within
days its primary domain and mail server, both concentrated in one operator, went dark for its entire user base. Its
underlying software was already open source; what wasn't dispersed was the service itself. A multi-Satellite structure
running the same shared code across independently governed, independently banked entities means one Satellite's takedown
doesn't take the whole network's users down with it.

But dispersion of legal entities alone isn't sufficient. If every Satellite banks with the same institutions or registers
domains through the same registry, a single coordinated action, or a wave of banks and hosts preemptively cutting ties
to limit their own exposure, can still hit several at once — real resilience means deliberately varying banks,
registrars, and jurisdictions across Satellites, not just incorporating separately. The DAO's multisig crypto-treasury
leg (§2) offers a partial hedge against that specific bank-level risk — it can't be frozen the way an account can — but
none of this protects whichever Satellite is actually targeted from the consequences of that; dispersion preserves the
pattern and its other Satellites, not any single one of them.



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
<<note: one force we should definitely mention is the Peter Turchin elites idea>>

### A.2 Marxist Economics 101

This narrowly focused primer on Marx's economic theory is targeted to
readers who are 'Marx-curious' but have never studied his work  -- in particular 
his concept of  the **labor theory of value**. The sketch below will, hopefully,
provide sufficient background for readers to understand his "Fragment on Machines" notes.

All human beings -- from stone age hunter gathers to present day 
warehouse workers -- have an intrinsic understanding of what is useful and what isn't. 
To the former, meat and berries had immediate utility — eat them, and nothing else was required. 
On the other hand, something like a raw chunk
of flint, picked up out of a streambed, had a different, lesser
use-value than it would have once it was worked: as raw material, it was
useful only in the sense that it was *good for becoming* something
else — it couldn't yet cut or hunt with anything, the way a knapped
blade could. That gap between raw material and finished tool was what
the forager could already see, before ever knapping the stone.

This intrinsic utility of a thing is what Marx calls *use-value* and it is inherint in a 'useful thing' 
independent of anyone owning or exchanging it.


Arable land, a shoe factory, an idle data center all have real use-value
on their own, worked or not, in exactly the flint's sense — a field
can grow crops, a factory could turn out shoes, a data center could run
workloads, once someone works them.

Value only enters once two different bands meet — say, one near a
flint source but short on meat, one with the opposite problem — and
start trading: flint for meat. That's a negotiation no other animal
is known to carry out. To settle it, both sides need something
comparable that isn't "how nourishing is meat" versus "how sharp is
flint" — those aren't on the same scale at all. What both sides do
have some rough sense of is how much effort each good took to get: days
spent traveling to the source and knapping blades, against days spent
tracking and butchering game. That comparison — effort against effort,
not usefulness against usefulness — is the seed of what Marx calls
*value*: labor applied to produce something specifically to trade away,
measured against what it typically takes other producers to make the
same thing. Put the two side by side and the distinction is: use-value
is intrinsic — does this thing meet a need, exchange or no exchange —
while value doesn't exist without a whole system of exchange behind it,
since its size is set by a social average, not by what any one trade
settles on. Arable land, a shoe factory, a data center all lack value
the same way an unknapped stone does, until human effort is applied to
produce something with it for the market. That effort includes the
entrepreneur's — inventing a new machine, or simply seeing that existing
machinery could make a new product for a new market, much like a
forager recognizing a streambed stone's potential as a blade before
ever picking it up. And value, once it exists, is what settles
*exchange-value* — how much of one commodity trades for another — with
its size set by the labor time society, on average, needs to produce a
given output under prevailing technology, not by how long any one
producer actually takes. A slower worker doesn't create more value by
working longer; a faster one — say, using better machinery — captures the
gap between their own time and the social average as profit, until
competitors catch up and the average itself falls. This is the mechanism
behind the competitive drive to mechanize discussed in [Appendix
A.1](#a1-why-firms-exist-coase-the-putting-out-system-and-whats-changing-now).

That same gap shows up again, from the employer's side, as the source of
profit itself. A worker is paid a wage that covers roughly what it costs
to maintain their lifestyle from one day to the next --everything from 
food to rent, to entertainment, to whatever portion of that day's 
pay that put away for a rainy day. Marx calls the
portion of the working day that earns back that wage *necessary labor
time*. 

Whatever labor happens beyond it — *surplus labor time* — still
produces value, but that value isn't paid for; the employer keeps it as
*surplus value*, the source of profit.

Whoever owns the machinery that surplus gets invested in also holds most
of the power to decide how the production process is organized and how
its output gets divided — and whoever operates that machinery has an
obvious stake in both questions too. That opposition of interest is
structural, not incidental: it isn't something one good-faith negotiation
resolves for good, because the underlying division of power producing it
doesn't go away. Marx calls this **class struggle**, and it's one instance
of a broader pattern he calls *contradictions* — real, structural tensions
between two parts of an economic system that pull against each other and
sharpen over time until something gives. The one that matters most here:
production keeps becoming more social — the combined, coordinated work of
many people at increasing scale — while the surplus it generates keeps
being claimed privately, by whoever owns the means of production, as
though it were the product of their investment alone. The harder that
private claim gets to defend, the more it looks like what Marx's
method — *dialectical materialism* — treats as history's actual engine:
not shifts in ideas or values, but tensions like this one, inside a
society's actual material and economic conditions, forcing a shift to a
new arrangement.

One specific version of that contradiction — surplus value plowed into
machines that need less and less human labor to run — is what the
"Drivers" argument above turns on next. There, automated, machine-embodied
knowledge — what Marx calls **general intellect** — is introduced in
context, where the document actually uses it, rather than here, since it
belongs to his later writing on automation rather than his foundational
value theory.


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

### A.7 A return to the commons: enclosure

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

*(The Hardin/Ostrom discussion formerly here has moved to [the Neoclassical
View
section](#what-factors-drove-emergence-of-corporate-model----neoclassical-view);
the Ostrom-to-Commons-Hub tie-in has moved to the end of
[§1](#1-the-commons-layer-and-its-satellites).)*

[^1]: [Inclosure Acts — Wikipedia](https://en.wikipedia.org/wiki/Inclosure_Acts).
    Parliamentary enclosure became the norm from the 1750s on; by 1750, nearly
    half of all land in England was already enclosed, with roughly 5,200
    enclosure Acts passed between 1604 and 1914, covering about a fifth of
    England's total land area (~6.8 million acres).
[^2]: [Public Goods — YouTube](https://www.youtube.com/watch?v=F4SmgrAmdUQ&t=296s).
    Uses Banksy's graffiti as an example of enclosure — a public good turned
    into a private commodity — and covers Elinor Ostrom's research
    overturning Garrett Hardin's "tragedy of the commons," which this
    document covers directly in [§1](#the-tragedy-of-the-commons-proven-wrong).
[^3]: Karl Marx, "Fragment on Machines," in the [*Grundrisse*
    notebooks](https://www.marxists.org/archive/marx/works/1857/grundrisse/ch14.htm)
    (1857–58) — the notebook section containing the **general intellect**
    passage this document draws on.
[^4]: [As HashiCorp adopts the BSL, an era of open-source software might be
    ending](https://www.runtime.news/as-hashicorp-adopts-the-bsl-an-era-of-open-source-software-might-be-ending/);
    [Moving Away From Open Source: Trends in Source-Available Licensing —
    Goodwin](https://www.goodwinlaw.com/en/insights/publications/2024/09/insights-practices-moving-away-from-open-source-trends-in-licensing).
[^5]: The "nuclear option" against enclosure is a strong copyleft license
    such as the [GPL](https://en.wikipedia.org/wiki/GNU_General_Public_License),
    which requires anyone who distributes a modified version to release
    their changes under the same terms. Note this only locks out
    *third-party* enclosure by default — it doesn't stop the original
    rightsholder from relicensing later, which is exactly how MongoDB
    relicensed away from AGPL: a Contributor License Agreement let them
    do it unilaterally. A GPL project with no CLA and copyright dispersed
    across many independent contributors (the Linux kernel is the
    standard example) is the closest thing to a permanent lock, but it
    would also block a Satellite's own for-profit subsidiary from adding
    proprietary features on top of the Commons. The more workable choice
    for this pattern is a permissive license such as
    [MIT](https://en.wikipedia.org/wiki/MIT_License) or
    [BSD](https://en.wikipedia.org/wiki/BSD_licenses): it lets a
    subsidiary build a thin proprietary layer — hosting, integrations,
    support, a polished commercial product — on top of the shared,
    freely-forkable core. That's the light barrier to entry a subsidiary
    needs to fund itself, without ever restricting the Commons itself.
[^6]: [Elinor Ostrom — Wikipedia](https://en.wikipedia.org/wiki/Elinor_Ostrom)
[^7]: [arxiv.org/abs/2607.07663](https://arxiv.org/abs/2607.07663)
[^8]: [Elite overproduction — Wikipedia](https://en.wikipedia.org/wiki/Elite_overproduction);
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
