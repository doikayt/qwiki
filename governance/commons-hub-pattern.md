# The Commons-Hub Pattern

<table align="right" width="160">
<tr><td><a href="https://doikayt.org"><img src="images/doikayt-logo.svg" alt="Doikayt logo" width="160"></a></td></tr>
<tr><td><sub>Brought to you by<br>Doikayt Mobilization Labs</sub></td></tr>
</table>

*A replicable model for organizing collaboratively-developed
open source software (OSS) around nonprofit and for-profit satellites*

**Status:**: 

Early concept draft.

- Not reviewed by counsel — nothing in this document is legal, tax, or
  financial advice; consult qualified counsel and a CPA before acting
  on anything discussed here.
- Not written by a trained economist — this is a summary of the
  author's own research and reflection on equitable approaches to
  structuring, operating, and profiting from an OSS-focused enterprise.
- Not battle tested -  the patterns, strategies and technical solutions we 
  propose below are based on the emerging roadmap we 
  are putting together for _our_  collective, and are offered in the spirit of 
  spurring discussion and soliciting feedback from the OSS community.
 


---

## Table of Contents

- [Overview](#overview)
- [Corporations as a Governance Technology, Not a Law of Nature](#corporations-as-a-governance-technology-not-a-law-of-nature)
  - [Factors favoring the emergence of the corporate model -- neoclassical view](#factors-favoring-the-emergence-of-the-corporate-model----neoclassical-view)
  - [Drivers of the dissolution of the corporate model -- Marxist view](#drivers-of-the-dissolution-of-the-corporate-model----marxist-view)
- [1. The Commons Layer and Its Satellites](#1-the-commons-layer-and-its-satellites)
  - [Bulwarks against enclosure of our digital commons](#bulwarks-against-enclosure-of-our-digital-commons)
  - [The Tragedy of the Commons, proven wrong](#the-tragedy-of-the-commons-proven-wrong)
- [2. Governance Layer — Three Mechanisms](#2-governance-layer--three-mechanisms)
  - [Board](#board)
  - [DAO](#dao)
  - [Token-based delegated authority](#token-based-delegated-authority)
- [3. Distribution of Economic Benefits — From Founder Incentives to Broad-Based Ownership](#3-distribution-of-economic-benefits--from-founder-incentives-to-broad-based-ownership)
  - [ESOPs in a nutshell](#esops-in-a-nutshell)
  - [When ESOPs make sense](#when-esops-make-sense)
  - [C-corp or S-corp?](#c-corp-or-s-corp)
- [4. The Stakes, and Why Our Model Has an Edge](#4-the-stakes-and-why-our-model-has-an-edge)
  - [The labor-market half of the advantage: elite overproduction and AI-driven displacement](#the-labor-market-half-of-the-advantage-elite-overproduction-and-ai-driven-displacement)
  - [Cost advantages that a for-profit competitor can't match](#cost-advantages-that-a-for-profit-competitor-cant-match)
  - [Resilience through dispersion](#resilience-through-dispersion)
    - [Case study: the takedown of Autistici/Inventati](#case-study-the-takedown-of-autisticiinventati)
    - [Mitigations](#mitigations)
- [Appendix A: Historical and Economic Grounding](#appendix-a-historical-and-economic-grounding)
  - [A.1 Why firms exist: Coase, the putting-out system, and what's changing now](#a1-why-firms-exist-coase-the-putting-out-system-and-whats-changing-now)
    - [The tooling wave](#the-tooling-wave)
    - [The AI wave](#the-ai-wave)
  - [A.2 Marxist economics 101](#a2-marxist-economics-101)
    - [Use-value](#use-value)
    - [Value and socially necessary labor time](#value-and-socially-necessary-labor-time)
    - [From flint tools to factories](#from-flint-tools-to-factories)
    - [Exchange-value and mechanization](#exchange-value-and-mechanization)
    - [Surplus value](#surplus-value)
    - [Class struggle and contradictions](#class-struggle-and-contradictions)
    - [The tendency of the rate of profit to fall](#the-tendency-of-the-rate-of-profit-to-fall)
      - [In accounting terms](#in-accounting-terms)
      - [Quantifying the drivers of disillusionment and dissolution](#quantifying-the-drivers-of-disillusionment-and-dissolution)
  - [A.3 Founder labor and fair reward](#a3-founder-labor-and-fair-reward)
  - [A.5 Income vs. retained earnings: a quick refresher](#a5-income-vs-retained-earnings-a-quick-refresher)
- [Footnotes](#footnotes)

---

## Overview

This document presents a replicable organizational model for equitable,
collaborative development and monetization of an
[open source](https://en.wikipedia.org/wiki/Open-source_software) commons. Before
detailing the mechanics of the model — including how incoming funds from grants
and earned revenue get distributed among contributors through a narrowly-scoped
[DAO](https://en.wikipedia.org/wiki/Decentralized_autonomous_organization) (a
Decentralized Autonomous Organization) — we look at some of the historical and
economic factors which make the emergence of a new model inevitable. We note how
the standard corporate form arose as a specific historical answer to the
economic questions of (a) who governs production, and (b) who benefits from that production? We first
analyze these questions through the lens of neoclassical economists — in
particular how [Coase's 1937 transaction-cost
account](https://en.wikipedia.org/wiki/The_Nature_of_the_Firm) explains why
hierarchical structures usually win out. Next up is a dialectical-materialist (Marxist)
reading of the same shift, wherein we ask a question transaction-cost economics
doesn't: who holds the _power_ to organize production and claim its
surplus — and what happens to that arrangement once automation makes
human labor itself increasingly unnecessary.

We later examine how the increasing sophistication and reach of AI make any
confident forecast of the next dominant mode of production impossible — to the
point where we have to ask whether human beings can even survive as a species under
whatever model comes next. Assuming we do, the next question is
whether the average working person ends up better off or worse — and while
today's power structures tilt the scales toward worse, we argue 
that [the same forces](#4-the-stakes-and-why-our-model-has-an-edge) driving that outcome also open
opportunities for alternative worker-friendly legal/financial/ownership structures to displace
the top-down corporate form that underpins late-stage disaster capitalism.

In terms of our two opening questions our model's answers are:

- Who governs: the contributors to the commons themselves -- through
[token-based delegated authority](#token-based-delegated-authority)
that vests with earned trust and decays on inactivity (rather than
accumulating into permanent control).

- Who benefits: the people who did the work on a given funded
program, by their own [equally-weighted vote through a
DAO](#dao). 




## Corporations as a Governance Technology, Not a Law of Nature

The corporation is not a naturally occurring phenomenon. It is a socially
produced, historically specific answer to **two fundamental questions**: when people
collaborate to produce something, who governs that production (and by what means) — and who
benefits economically (and by what means)? Different historical eras have answered both
questions differently: [guilds](https://en.wikipedia.org/wiki/Guild),
[common land](https://en.wikipedia.org/wiki/Common_land),
[joint-stock charters](https://en.wikipedia.org/wiki/Joint-stock_company),
the industrial corporation, the modern [platform
company](https://en.wikipedia.org/wiki/Platform_economy). Each is a governance
structure for collective production and economic benefit, adopted — and later
challenged — because the previous model no longer served elites
with the power to change it. 
<table align="right" width="150">
<tr><td><img src="images/enclosure.jpg" alt="1793 Enclosure Act for Shifnal" width="150"></td></tr>
<tr><td><sub>Enclosure Act for Shifnal, 1793<br>(Shropshire Archives 539/1/5/3).<br>Public domain, via Wikimedia Commons.</sub></td></tr>
</table>

The wave of English enclosure that began around the mid-1700s[^1]
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


### Factors favoring the emergence of the corporate model -- neoclassical view

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

<table align="right" width="200">
<tr><td><img src="images/capitalism-labor-cartoon.jpg" alt="Cartoon: an arm labeled CAPITALISM feeds coal shoveled by a figure labeled LABOR into a furnace" width="200"></td></tr>
<tr><td><sub>You load sixteen tons, what do you get?<br>Another day older and deeper in
debt.<br>Public domain.</sub></td></tr>
</table>

Marx's "Fragment on Machines," in the Grundrisse notebooks (1857–58),[^3] anticipated exactly this: a point at
which automated, machine-embodied social knowledge, "the general intellect" (Marx's term — but
with a striking resonance with today's concept of [AGI](https://en.wikipedia.org/wiki/Artificial_general_intelligence)),
becomes the primary productive force directly, breaking down labor-time as the basis of value.
Once that labor-time basis breaks down, working people notice — both that they no longer
have work, and that the resulting abundance is being captured by a class that visibly
isn't the one still producing it. How a society -- especially one as heavily armed and 
socially fragmented as what we have now in the US --  handles the inevitable disillusionment 
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
(MongoDB, Elastic, HashiCorp et al.) have all recently 
decided to relicense away from open source after cloud providers resold
their software without contributing back — HashiCorp's leadership rationalized this move
in almost exactly Hardin's terms: "there's a tragedy of the commons
here."[^4] 

So of what value could our model be, if successful, established 
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


### The Tragedy of the Commons, proven wrong

We should also note that  Elinor Ostrom's empirical research 
(which won her the [2009 Nobel
Memorial Prize in Economic
Sciences](https://en.wikipedia.org/wiki/Nobel_Memorial_Prize_in_Economic_Sciences))
definitively overturned Hardin's claim. She documented hundreds of real cases where
communities successfully self-governed shared resources through their own
institutional rules, without requiring either privatization or centralized
state control.[^6]    Our proposal can be viewed as applying
Ostrom-style commons governance to a *digital* commons — open source software — 
rather than to land, water, or fisheries.



## 2. Governance Layer — Three Mechanisms

### Board

The 501(c)(3)'s **Board** of directors sets the mission, priorities, and policy 
for each Satellite through ordinary nonprofit governance. 
There is no [DAO](https://en.wikipedia.org/wiki/Decentralized_autonomous_organization)
involved in setting priorities or policy. The board decides what to build,
how to fund those  programs, and what the organization's direction is -- 
exactly as any nonprofit board would.

### DAO

The **DAO** mechanism governs 
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



### Token-based delegated authority

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


The _founding steward_ holds all authority initially and grants 'slices' of it to developers
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

## 3. Distribution of Economic Benefits — From Founder Incentives to Broad-Based Ownership

In an ideal world, commitment to mission would be sufficient motivation for a 
founding steward to adopt our  proposed model. But self-interest and the  desire for
material comfort shapes nearly every decision people make.
The U.S. tax code actually already provides a ready-made mechanism
for leveraging that self-interest: an [Employee Stock
Ownership Plan](https://en.wikipedia.org/wiki/Employee_stock_ownership_plan)
(ESOP) — available to the for-profit subsidiary specifically (501(c)(3)'s can't sponsor one.)
ESOPs provide a tax-advantaged mechanism to distribute ownership — the
founder gets a real, liquid exit, employees get real equity, and
the tax code subsidizes both sides of that trade.

#### ESOPs in a nutshell

An ESOP is a trust that holds company stock on behalf of a firm's
employees, vesting it to them over years of service. Congress built it
as a tax-favored path to convert employees into genuine owners rather
than just wage earners. How broadly that ownership has to be shared
isn't left to a founder's discretion, though — federal law specifies 
the rules.[^7] Concretely, the trust itself is the stock purchaser: it
buys back the founder's shares directly — typically financed by a loan
that the company then repays over time via tax-deductible
contributions to the trust. This provides founders a liquid exit path that
converts the enterprise value they built into cash. For
employees, it doubles as motivation and retention: all *future*
appreciation accrues to those who stay on to keep building the
company -- rather than to an uninvolved third party who inherits or
buys the founder's stake. (Note: although this document often 
leans on Marxist economic analysis, our perspective on what constitutes _justly rewarded_
founder labor on exit is more aligned with Schumpeter as discussed
in [Appendix A.3](#a3-founder-labor-and-fair-reward).)

The buyout (1), the ongoing vesting cycle (2), and an employee's eventual
exit (3) are three separate flows of cash and shares — the last of these is what
creates the [repurchase obligation](#repurchase-obligation) discussed
below. Here's how they connect:

```mermaid
%%{init: {"themeVariables": {"fontSize": "10px"}}}%%
flowchart TD
    Founder([Founder])
    Lender([Bank / seller financing])
    Trust[ESOP Trust]
    Company[[Company]]
    Employees{{Employee accounts}}
    Departing([Departing employee])

    Founder -- "1 sells shares" --> Trust
    Lender -- "1 loan proceeds" --> Trust
    Trust -- "1 purchase price" --> Founder
    Company -- "2 tax-deductible contributions, annually" --> Trust
    Trust -- "2 loan repayment" --> Lender
    Trust -- "2 shares allocated as loan is repaid" --> Employees
    Employees -- "2 vests over time" --> Employees
    Employees -- "3 shares" --> Departing
    Departing -- "3 vested shares (sellback)" --> Company
    Company -- "3 repurchase obligation: cash at FMV" --> Departing
    linkStyle 0,1,2 stroke:#d62728,color:#d62728
    linkStyle 3,4,5,6 stroke:#1f77b4,color:#1f77b4
    linkStyle 7,8,9 stroke:#2ca02c,color:#2ca02c
```

Allocation moves shares out of the trust's loan-collateral account and into
an employee's individual account as the acquisition debt gets repaid.
This is mechanically tied to the loan repayment schedule, not to tenure. 
Whether or not an employee can keep those allocated shares on exit is separately determined 
by a service-based vesting schedule.[^8]

#### When ESOPs make sense

Setting up an ESOP only makes sense if: 

1. **There's real enterprise value to distribute.** An ESOP requires an
   independent appraisal (no public market for the stock); with negligible
   or negative enterprise value, there's nothing meaningful to allocate —
   just administrative cost for its own sake.
2. **<a id="repurchase-obligation"></a>There's stable cash flow to fund the <u>repurchase obligation</u>.** Every
   vested share must eventually be bought back in cash when a participant
   leaves. A program-to-program or grant-to-grant cash position can't
   safely carry that liability; it takes predictable operating cash
   flow as opposed to sporadically obtained grants.

[NCEO's](https://www.nceo.org/) (the National Center for Employee
Ownership) [guidance](https://www.nceo.org/employee-ownership-faq/how-much-does-setting-up-an-esop-cost)
puts typical setup costs at **$200k–$500k** for most deals, with a [rule
of thumb](https://www.nceo.org/resource-toolkits/esop-pre-feasibility-toolkit)
of at least **15–20 employees** and enough profit to cover both the
deal costs and ongoing operations.

#### C-corp or S-corp?

Two corporate forms are available for the for-profit subsidiary: C-corp or S-corp.
Both can sponsor an ESOP, and both tax income annually as it's
earned — that part doesn't diverge. The real divergence is on two
separate questions: whether retained earnings (see [Appendix
A.5](#a5-income-vs-retained-earnings-a-quick-refresher) for a refresher
on that term) face a *second* tax when eventually distributed as a
dividend, and — specifically at the moment a founder sells stock to
the ESOP trust — whether that capital gain can be deferred. The
details:

- **C-corp:**
  - Entity-level tax: a flat 21% federal rate on the corporation's own
    income, as of this writing.
  - Retained earnings are taxed once at the corporate level as they're
    earned; if that same money is ever paid out later as a dividend,
    shareholders pay tax on it a second time — the classic "double
    taxation" of a C-corp.
  - **The relevant advantage — tax deferral at a founder's exit:** a
    founder selling stock to the ESOP can defer capital-gains tax via the
    [IRC §1042](https://www.financialplanningassociation.org/learning/publications/journal/AUG24-using-irc-section-1042-retirement-and-exit-planning-business-owners-guide-financial-OPEN)
    rollover — reinvesting the proceeds into other US securities — but
    only if the company is a C-corp at the moment of sale.
- **S-corp:**
  - Pass-through: no federal tax at the entity level. All income is
    taxed to shareholders in the year it's earned, whether distributed
    or not.
  - **The relevant advantage — tax-favorable retained earnings:** once
    income is taxed to shareholders as it's earned, it's already been
    fully taxed — nothing further happens when it's later distributed
    from the retained-earnings pool, unlike a C-corp's second tax on
    dividends.
  - Because an ESOP trust is itself tax-exempt, whatever share of the
    company an ESOP owns generates income tax-free at the corporate
    level — a 100%-ESOP-owned S-corp can end up owing no federal
    income tax at all.[^9]
  - That tax exemption comes with its own extra safeguard against
    insider concentration.[^10]
  - Doesn't get §1042: that deferral is C-corp only.

The C-corp/S-corp election is mutually exclusive, and the two reward
different goals (a founder's exit versus the ongoing company's
retained earnings) — which one fits depends on facts specific to the
[cap table](https://en.wikipedia.org/wiki/Capitalization_table) (the
ledger of who owns what share of the company), timeline, and founders'
own tax situation. If a §1042 rollover is ever a
goal, the entity needs to already be a C-corp *before* that
transaction. 

By this point there are three distinct mechanisms in play, and it's easy to
conflate them since they all touch "who gets what" — cash, voice in
decision-making, or equity. To clarify:

| Mechanism | Scope | Duration | Economic value | Who's eligible |
|---|---|---|---|---|
| [DAO](#2-governance-layer--three-mechanisms) (§2 above) | Per funded program | Episodic — ends when the program does | Cash, paid for services rendered | Self-selected opt-in contributors |
| [Token-based delegated authority](#token-based-delegated-authority) (see the *Contributor Guide*) | Ongoing | Decays with inactivity | None — pure voice | Registered committers who've earned trust |
| ESOP | Ongoing | Vests over years | Real equity | Legally must be broad-based — ~all full-time employees |

**Rollout sequence:**

- **Pre-ESOP:** DAO for project-based cash payouts, token-based delegated
  authority for day-to-day voice. No ESOP — no enterprise value or stable
  cash flow yet to justify one, and no broad-based W-2 team to make
  "broad-based" mean anything.
- **Once the subsidiary has sustained commercial revenue and real
  employees**: ESOP feasibility
  becomes worth a real evaluation, running alongside — not replacing — the
  DAO and token-based delegated authority, each still doing its own job.
- **If a founder-exit rollover is ever a goal:** C-corp status needs to
  already be in place before that transaction, which means the entity-type
  decision should account for this option early, not be revisited under
  time pressure later.

---

## 4. The Stakes, and Why Our Model Has an Edge

The past year (2026, as of this writing) has seen rapid, measurable progress
toward AI writing the software that builds AI itself.[^11]   This
mirrors recent progress toward 
["lights-out manufacturing"](https://en.wikipedia.org/wiki/Lights_out_(manufacturing)) 
-- robots building new robots with minimal human involvment -- in the 
physical world. While these  technologies promise never-before-seen levels of material
abundance, they can also be deployed to direct that
abundance exclusively to those whose hands hold the controls. Mass job loss,
heightened inequality, and constant surveillance are not even the worst of the
possible consequences — at the far end sits the possibility of an existential
threat to the species that pushed AI technology to its current point. 

Assuming we clear the extinction bar, the next question is
whether the average working person ends up better off or worse under whatever
comes next. Today's power structures, left to their own devices, tilt that
outcome toward _way_ worse. The same concentration of capital, 
computational resources,  and political influence that enables 
AI research to proceed unregulated also determines who captures the 
day-to-day gains from that same technology.

None of that is inevitable, though, and this final section strikes a hopeful
note. We start with two structural properties of our model that translate
into real operational advantages. Then we look at the flip side: any
501(c)(3) pursuing a mission genuinely threatening to entrenched capital, or
to a repressive state actor, should expect to be targeted for suppression —
so we walk through the resilience properties built into our model to
withstand exactly that.


### The labor-market half of the advantage: elite overproduction and AI-driven displacement

Peter Turchin's [structural-demographic
theory](https://en.wikipedia.org/wiki/Structural-demographic_theory)
identifies "elite overproduction" as a recurring precondition for social
instability: when a society trains and credentials more aspirants for
elite-track positions than it has positions to absorb them into, intra-elite
competition intensifies and average outcomes for elite aspirants decline.
Some fraction of those aspirants then tend to become "counter-elites,"
turning their training and ambition toward organizing opposition to the
existing order rather than joining it.[^12]

This is playing out in the current U.S. software labor market: an
education system that has spent two decades producing what is now an over-supply of
highly credentialed software engineers (Learn to code!) is now colliding with the AI-driven
contraction of entry- and mid-level engineering hiring. A growing population of
capable, credentialed, and increasingly frustrated engineers 
is finding the traditional elite-track path
(a well-paid job at a major tech employer) narrowing or closing.
This population of potential colleagues constitutes 
a committed mobilizable base, naturally aligned with the mission of any nonprofit 
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
targeted user base will be underserved. An underserved market with no real
alternative to doing things by hand is also one whose attention is easier to
capture.

Once a given problem has been solved for an initial cash-poor and underserved market, 
it's common to find that better-funded organizations
have structurally similar versions of the same problem. Because the software that solves 
those problems is now proven, free and open, a collective can move into that adjacent,
better-funded market at a cost structure a for-profit incumbent can't match.

In summary, the operational advantages that accrue from these two structural properties are:
  - lower cost of customer acquisition 
  - lower product marketing spend to figure out what to build
  - lower cost of recruiting and easier staff retention due to alignment around principles




### Resilience through dispersion

Concentrating capability in one place is inherently risky,
whereas dispersed placement of resources increases resilience in the face of attack.
Recent experience on multiple battlefields have driven this 
home to the US military establishment, whose leadership now recognizes that "forces that are 
concentrated and static are easy for enemy forces to detect and destroy."[^13] 
Cloud infrastructure engineers have long been operationalizing this lesson --
replicating services across regions instead of 
concentrating them in a single data center, where one outage can take out _everything_.

We propose applying this same logic to software collectives —
especially those with status-quo-challenging missions, which are
increasingly at risk of repression by state actors and deplatforming[^14] by
large corporations unwilling to tolerate wrongthink [^15].
In light of such threats, the distributed structure proposed in
[§1](#1-the-commons-layer-and-its-satellites) serves as a preemptive
counter-measure.
(Note that the referenced diagram posited the satellites
surrounding a digital commons as 501(c)(3)'s, but here we add a slight twist -- 
in that some satellites might be a trusted individual rather than a corporation.)


#### Case study: the takedown of Autistici/Inventati 

The recent (August 2026) US government designation of Italian
hosting collective Autistici/Inventati (A/I) as a ["Specially Designated
Global Terrorist"](https://decode39.com/16319/autistici-inventati-case-sets-a-new-counterterrorism-precedent-irdi-says/)
serves as a useful case study on how a satellite structured collective might have
avoided a shut-down. We propose mitigations[^16] on two  infrastructural axes:
technical, and financial -- but first a recap.


The US State department issued the designation on August 26.[^17] 
Forty-eight hours later, the Public Interest Registry — the nonprofit 
that runs the entire `.org` namespace — disabled `autistici.org`[^18],
taking out roughly 16,000 email accounts, 5,500 mailing lists, ~10,000
blogs, and 1,500 websites in one stroke.[^19]
On the financial side, PayPal took out the payment rails first [^18], and 
Banca Etica followed by freezing the account itself as it was 
unwilling to risk its own [correspondent-banking](https://en.wikipedia.org/wiki/Correspondent_account)
relationships over one customer.[^18]

Jurisdiction factored in as much as a technology in this take down.
First, on the technology side: [DNS](https://en.wikipedia.org/wiki/Domain_Name_System)
is hierarchical and centralized by design — a single registry is the
authoritative source for every name under its
[top-level domain](https://en.wikipedia.org/wiki/Top-level_domain) (TLD), 
and every [resolver](https://en.wikipedia.org/wiki/Domain_Name_System#DNS_resolvers)
worldwide trusts that record without question. That's precisely what
makes a takedown effective with no technical attack at all: disable
the registry entry, and the domain stops resolving globally and
instantly, regardless of the underlying servers' ability to keep running. 

On the jurisdiction side: the Public Interest Registry is a Virginia-based
501(c)(3) — a US legal entity — and Verisign, which runs `.com`, is a
Delaware corporation headquartered in California. Once the SDGT
designation issued, both registries were subject to the  same US
legal exposure that froze PayPal and Banca Etica's accounts. A US
entity can't keep providing services (registration included), to a
designated (targeted) party. That's what actually took `autistici.org` down —
the registry's own legal obligation to stop serving it, layered on top
of DNS's own centralized architecture giving that decision instant,
global effect. A registry chartered outside the US isn't bound by that
same compulsion, but the centralization problem remains — which is
exactly what the onion-mirror mitigation (below) is built to route
around.

#### Mitigations


*Technical Infrastructure - [DNS](https://en.wikipedia.org/wiki/Domain_Name_System)*

Domain choice is the first line of defense: The popular choices, `.com` and `.org`, are, 
as mentioned above, both administered by U.S.-based registries, which the Autistici/Inventati case just
showed are willing to cave under U.S. pressure. Pinning web branding to a
domain outside U.S. jurisdiction avoids that exposure from the start.
Iceland's `.is` registry is operated by the non-profit
[ISNIC](https://www.isnic.is/en/), which has a track record of
resisting the kind of takedown requests that killed `autistici.org`.
ISNIC runs the [top-level domain](https://en.wikipedia.org/wiki/Top-level_domain)
(TLD) itself (that is: `.is`.) Actually registering a domain under `.is` (e.g., mycompany.is)
still goes through a separate registrar. Registering the domain
through [1984 Hosting](https://1984.hosting/), an Icelandic registrar
with a stated commitment to anonymity and free expression, adds a
second layer of protection — this one over who controls the
registration itself, rather than which jurisdiction the registry sits
in.  Registering with 1984 helps avoid a real risk some privacy-focused registrars carry, since they
keep _you_ as the actual legal registrant with
[WHOIS](https://en.wikipedia.org/wiki/WHOIS) privacy, rather than
registering your domain under its own name and merely licensing you
usage rights. This delegated-ownership model, used by some
anonymity-focused registrars, leaves you with no standing to transfer
or reclaim the domain yourself if that registrar itself caves. 1984 also
runs its own DNS hosting, and its
[nameservers](https://en.wikipedia.org/wiki/Name_server) are already
pre-registered with ISNIC, sidestepping the separate registration
step ISNIC otherwise requires.

A further layer of protection is achievable (at the expense of more network configuration overhead) 
by maintaining a live [onion](https://en.wikipedia.org/wiki/.onion) mirror on
[Tor](https://en.wikipedia.org/wiki/Tor_(network))[^20][^21].
Unlike a `.is` (dot _is_) domain, a `.onion` (dot _onion_) address needs
no DNS at all: it's self-certifying, derived directly from the
service's own [keypair](https://spec.torproject.org/rend-spec/encoding-onion-addresses.html)[^22],
and resolved through Tor's own distributed
hidden-service directory. There is no registry, registrar, or nameserver in
the chain for a state actor to pressure.  Note that the
`.is`/ISNIC strategy relies on a pressure-resistant DNS dependency, but still a dependency; the
onion mirror is a _zero_-DNS-dependency channel. It is in a different
category from a registrar-based approach entirely, no matter how
takedown-resistant the registrar.

```mermaid
%%{init: {"themeVariables": {"fontSize": "10px"}}}%%
flowchart LR
    Client([Tor Client])
    Entry[Entry Node]
    Middle[Middle Relay]
    Exit[Exit Node]
    Dest([Destination])

    Client -- "3 layers" --> Entry
    Entry -- "peel 1" --> Middle
    Middle -- "peel 2" --> Exit
    Exit -- "decrypted" --> Dest
```
<p align="center"><sub>The Tor (onion router) network architecture: each relay hop peels
away one layer of encryption.</sub></p>

Collectives pursing this approach should make verification and publication of their .onion
presence a routine practice, rather than scrambling to prepare in the face 
of a take-down action. Set an `Onion-Location` HTTP header[^23] on the
[clearnet](https://en.wikipedia.org/wiki/Clearnet_(networking)) site
pointing at the `.onion` URL, so [Tor
Browsers](https://en.wikipedia.org/wiki/Tor_(network)) can detect it
automatically
and offer visitors a one-click switch with no separate announcement
needed; publish the bare `.onion` address too, in the site footer and
official bios, for anyone on a different Tor client. Automate periodic
checks with [Playwright](https://playwright.dev/docs/network):
fetch the clearnet site to confirm the `Onion-Location` header is
still present, then point a second context's `proxy` at the local Tor
daemon's SOCKS5 endpoint (`127.0.0.1:9050` by default) and load the
`.onion` URL directly, with hostname resolution happening proxy-side.
A caveat: any use of Tor, even for research, may itself draw extra
scrutiny from state actors.[^24]


*Technical Infrastructure — Key and Credential Custodianship*

This section covers replication of the two categories of keys and credentials a collective needs to
function.

- operational: this covers CI secrets, npm publish tokens,
  and any other secrets required to build and publish a collective's software, and
- financial: this would cover a multisig cosigner's wallet key, recovery codes, and credentials for
  bank account logins, and the like

The recommended vehicle for storing this type of sensitive information
is a [Bitwarden](https://bitwarden.com) vault. Bitwarden is open
source and (as of this writing) free for up to two custodians, letting them access the
full array of secrets through one shared set of credentials and
(ideally) 2FA. Note that the guidance below assumes a JavaScript/Node.js stack (our domain of expertise)  — 
hence the focus on npm publish tokens. A different language stack would swap in its own
package registry (PyPI, RubyGems, and the like.)

**CI secrets.** [Codeberg](https://codeberg.org) is the assumed git
host here, not GitHub — GitHub is a wholly-owned Microsoft subsidiary,
a US company carrying the same deplatforming exposure already
discussed for PayPal and the domain registries above.
Codeberg, built on the open-source Forgejo, is EU-hosted and run by a
nonprofit, for the same jurisdictional reasons as the `.is` domain.
Its [Forgejo Actions](https://docs.codeberg.org/ci/actions/) supports
the same repository- and organization-level secrets [GitHub
Actions](https://docs.github.com/en/actions) does[^33]. CI secrets are
still scoped to whichever account holds them, though, regardless of
host. Once an account is suspended, its associated secrets — and every workflow that
depends on them — are frozen. Mitigate this risk with a satellite
that keeps a (regularly pulled/synced) personal mirror of the repository, with its own
independently configured secrets stored in a Bitwarden vault. This
ensures that the release pipeline can publish, even if the primary
org's account is locked.

**npm publish tokens.** This one raises tricky questions:
npm has been owned by GitHub, and so by Microsoft,
since 2020, which means it carries the identical deplatforming
exposure the Codeberg move above was meant to get away from — but
unlike git hosting, there's no jurisdiction-neutral registry the
public actually can install packages from by default. A self-hosted, npm-compatible
registry such as [Verdaccio](https://github.com/verdaccio/verdaccio)
(MIT-licensed) lets the collective keep publishing internally if its
npmjs.com account is suspended, but it doesn't solve public
installability — anyone running `npm install` still resolves to
npmjs.com unless they've reconfigured their own registry. Short of
that unresolved gap: publish rights are tied to an npm user or org
account, so a suspended account can't publish a new version even
though everything already published stays live. Prefer npm's
[granular access
tokens](https://docs.npmjs.com/creating-and-viewing-access-tokens/) —
scoped to specific packages, with a defined expiry, rather than a
classic token with blanket publish rights[^32] — and
keep a second maintainer's account (2FA-enabled, with its own recovery
methods on file) able to publish as a fallback.

**Financial Keys and Credentials.** A multisig treasury (§2) needs
several signers to agree before funds move, so no single signer can
drain it — but each signer still personally holds one full private
key, and protecting that key is entirely their own responsibility.
Whoever holds a cosigner key needs to guard it without becoming a
point of failure themselves. A
[hardware wallet](https://en.wikipedia.org/wiki/Hardware_wallet), not
a software or exchange-hosted one, is the baseline — it keeps the
private key off any internet-connected device entirely. The [seed
phrase](https://en.wikipedia.org/wiki/Seed_phrase) behind it needs its
own backup, split or duplicated across more than one physical
location, so losing any single copy — to a fire, a theft, or a bag
left behind while traveling — doesn't destroy every copy. None of this should be set up under
pressure: a signer should periodically confirm they can still produce
a valid signature with their own key, the same way the onion mirror
and alternate domain above get periodically checked, rather than
finding out only when a transaction actually needs signing.


[[[  THIS SECTION NEEDS A REWRITE ]]]
*Financial Infrastructure Layer*

Both payment rails and bank accounts become vulnerable the moment a US dollar-denominated transaction moves
through those rails, or results in a deposit into those accounts. Dollars must be settled inside the U.S. banking
system — which OFAC (the Treasury Department's Office of Foreign Assets Control) regulates under the 
[IEEPA](https://en.wikipedia.org/wiki/International_Emergency_Economic_Powers_Act).
Every U.S. bank must comply with OFAC's blocking orders.[^33]

Even a transaction between two non-U.S. parties still runs through the
U.S. correspondent-banking system[^34] — so OFAC doesn't need
jurisdiction over a foreign bank to reach it: it regulates that bank's
*U.S.* correspondent directly. A related Treasury/FinCEN authority
(PATRIOT Act §311) can go further still, barring U.S. banks from
maintaining that correspondent relationship at all. This would result in 
the cut-off of the foreign bank's dollar access entirely, not just one flagged customer.
That threat is what drove Banca Etica to implement its freezing of A/I's assets.



```mermaid
%%{init: {"themeVariables": {"fontSize": "10px"}}}%%
flowchart TD
    subgraph SAT["Satellite (nonprofit) — donor-funded"]
        Donor([Donor / Funder])
        SatBank[Bank account - near-term ops only]
    end

    subgraph SUB["Subsidiary (for-profit) — customer revenue"]
        Customer([Paying customer])
        SubBank[Bank account - near-term ops only]
    end

    DonationProcessor[Giving Block - streamline tax receipts,<br/>HODL to crypto, lands in Treasury]
    Treasury[Multisig Treasury - held as ETH]
    BatchConvert[Periodic ETH to DAI batch convert - monthly/qtrly, single multisig sign-off]
    DAIFloat[DAI - operating float]
    Contributors{{Contributors}}
    ContribOfframp([Contributor's own fiat off-ramp])
    VendorsCrypto{{Vendors - crypto-accepting}}
    OffRampJIT[Request Finance - JIT off-ramp, pays vendor directly]
    VendorsFiat{{Vendors - fiat-only}}
    Hedge[Hedging - staged: once FT controller hired]

    subgraph LEGEND["Legend"]
        L1[Collective-owned]
        L2[External]
    end

    Donor -- "1 cash/USD" --> SatBank
    SatBank -- "1 periodic sweep" --> Treasury
    Donor -- "1 DAI directly" --> DAIFloat
    Donor -- "1 ETH/BTC swappable" --> Treasury
    Customer -- "1 card/ACH, mostly fiat" --> SubBank
    SubBank -- "1 periodic sweep" --> Treasury

    Donor -.->|"deferred until volume or<br/>Form 8283 threshold hit"| DonationProcessor

    Treasury -- "2 periodic batch, single sign-off" --> BatchConvert
    BatchConvert -- "2" --> DAIFloat

    DAIFloat -- "3 wallet-to-wallet" --> Contributors
    Contributors -- "3 own responsibility" --> ContribOfframp
    DAIFloat -- "3 wallet-to-wallet, DAI discount" --> VendorsCrypto
    DAIFloat -- "3 processor converts + pays vendor in one settlement" --> OffRampJIT
    OffRampJIT -- "3" --> VendorsFiat
    SatBank -- "3 ACH/card, routine ops" --> VendorsFiat
    SubBank -- "3 ACH/card, routine ops" --> VendorsFiat

    Treasury -.->|"4 deferred until<br/>F/T controller on board"| Hedge

    Hedge ~~~ DonationProcessor
    Donor ~~~ SatBank
    VendorsFiat ~~~ LEGEND

    linkStyle 0,1,2,3,4,5 stroke:#d62728,color:#d62728
    linkStyle 7,8 stroke:#1f77b4,color:#1f77b4
    linkStyle 9,10,11,12,13,14,15 stroke:#2ca02c,color:#2ca02c
    linkStyle 6,16 stroke:#888888,color:#888888,stroke-dasharray: 5 5

    classDef owned fill:#eaf2fb,stroke:#1f77b4,stroke-width:3px
    classDef external fill:#fdf0e3,stroke:#e07b00,stroke-width:2px,stroke-dasharray:3 3
    class L1 owned
    class L2 external
    class Treasury,SatBank,SubBank,BatchConvert,DAIFloat,Hedge owned
    class Donor,DonationProcessor,Customer,Contributors,ContribOfframp external
    class VendorsCrypto,OffRampJIT,VendorsFiat external
```

This diagram covers financial custody and execution only — how funds move,
and what's crypto versus fiat, owned versus external. It intentionally
leaves out the DAO's allocation vote and the Board's review/override
authority, both already covered in [§2](#2-governance-layer--three-mechanisms);
the multisig treasury shown here is the layer that carries out whatever
that governance process decides, not a stand-in for it.


Our structure holds reserves the DAO's crypto-treasury (§2) can reach
directly, denominated outside the dollar-clearing system entirely —
no correspondent bank, no USD off-ramp, nothing for a sanctions action
to grab. Who holds the keys matters too, in a different way: a single
signer is a single point of failure — if they die, disappear, or go
dark, the funds go with them. Multisig custody split across several
trusted individuals in different jurisdictions covers both failure
modes at once: no institution left to freeze, and no one person whose
death locks the treasury.

None of this would have stopped the designation itself. It would have
kept the Commons and every other Satellite running while the targeted
one dealt with the consequences — which is the whole point of
dispersion.

## Appendix A: Historical and Economic Grounding


### A.1 Why firms exist: Coase, the putting-out system, and what's changing now

<table align="right" width="220">
<tr><td><img src="images/wheel-water.jpeg" width="220" alt="Spinning wheel alongside Arkwright's water frame"></td></tr>
<tr><td><sub>Spinning wheel alongside Arkwright's water frame / Source: Wikipedia</sub></td></tr>
</table>

Building onCoase's transaction-cost,
account [above](#factors-favoring-the-emergence-of-the-corporate-model----neoclassical-view): 
the clearest illustration is textile production just before the
modern corporation took shape. Before Richard Arkwright's water frame (1769), English
cloth was made under the *putting-out system*, which was characterized by
decentralized market coordination, and required that
a separate bargain be struck between contracting merchants and each individual worker.
Merchants distributed raw wool or cotton to independent spinners and weavers
working in their own homes and paid piece-rate for finished cloth, with no employment
relationship at all. This system lost out to the factory model for three
specific reasons: 

- **Production was unobservable.** A merchant only saw finished cloth, never
  the process, which produced chronic embezzlement of material and
  inconsistent quality.
- **Centralization of capital assets was essential.** The new machinery physically
  demanded it — a water wheel could power a mill, not a cottage.
- **Scheduling was unenforceable.** Dispersed workers set their own pace,
  often around farm work, and contracting merchants had little visibility into progress.


Two successive waves of software-engineering advances have rendered
each of those constraints less binding: tooling advances achieved in the last two
decades, and a wave of more recent innovations in AI, especially
[LLM](https://en.wikipedia.org/wiki/Large_language_model)-based technologies.

#### The tooling wave

- **Production**: is now much more observable — past, present, and future.
  [Version control](https://en.wikipedia.org/wiki/Version_control)
  provides a machine searchable record of  what code was written, and 
  by whom, in the *past*. [CI/CD](https://en.wikipedia.org/wiki/CI/CD)
  pipelines, automated test suites, [code
  coverage](https://en.wikipedia.org/wiki/Code_coverage), and
  [object-oriented
  metrics](https://www.geeksforgeeks.org/software-engineering/object-oriented-metrices-in-software-engineering/)
  surface failures the moment they happen in the *present*.[^25]
  [Agile boards](https://en.wikipedia.org/wiki/Kanban_board) and
  estimation — [story
  points](https://en.wikipedia.org/wiki/Planning_poker),
  [sprints](https://en.wikipedia.org/wiki/Sprint_%28software_development%29),
  [burndown](https://en.wikipedia.org/wiki/Burndown_chart) — are not crystal balls,
  but they do significantly streamline the work of estimation, sequence planing
  and distribution of   _future_ work.
- **Centralization**: is no longer required. Cloud infrastructure is
  rentable by the hour -- which enables individual remote developers (and 
  even one person software shops) to leverage the same compute capacity as larger companies.
- **Scheduling**: is now enforceable via [issue
  trackers](https://en.wikipedia.org/wiki/Issue_tracking_system),
  automated status checks, and rule-based status bots[^26], which nudge communication 
  channels on a fixed schedule when a deadline slips. These tools keep
  remote contributors coordinated against real deadlines without the
  need to clock in at some centralized office.

#### The AI wave

AI has unbound the first two constraints to a degree. For example,
AI-assisted reviews help head off _production_ problems by monitoring 
(and preventing the integration of) poor quality candidate updates to the code base.
Hosted AI models are themselves a new form of _decentralized_
infrastructure available to smaller teams.
However, the real advance is in the third: _scheduling_. As more coding
effort shifts from remote human contributors to
autonomous [AI agents](https://en.wikipedia.org/wiki/AI_agent), the need 
for any human involvement in scheduling starts to 
shrink -- thereby bringing us that much closer to the
[lights-out](https://en.wikipedia.org/wiki/Lights_out_(manufacturing))
software factory-style model that we first mention in 
[§4](#4-the-stakes-and-why-our-model-has-an-edge).


### A.2 Marxist economics 101

This narrowly focused primer on Marx's economic theory is targeted to
readers who are 'Marx-curious' but have never studied his work  -- in particular 
his concept of  the **labor theory of value**. The sketch below will, hopefully,
provide sufficient background for readers to understand his "Fragment on Machines" notes.[^3]

#### Use-value

All human beings -- from Stone Age hunter-gatherers to present-day 
warehouse workers -- have an intrinsic understanding of what is useful and what isn't. 
To the former, meat and berries had immediate utility — eat them, and nothing else was required. 
On the other hand, something like a raw chunk
of flint, collected from a streambed, had a different, lesser
utility than it would have once it was worked: as raw material, it was
useful only in the sense that it was good for *becoming something
else* — it couldn't yet cut anything the way a knapped
blade could. That gap between raw material and finished tool was something
the hunter could already see, before ever knapping the stone.
This intrinsic utility of a thing -- a ready-to-eat berry, or a workable piece of rock -- 
is what Marx calls **use-value**,
and it is inherent in any 'useful thing' -- 
independent of anyone exchanging that thing for some other thing.

#### Value and socially necessary labor time

<table align="right" width="280">
<tr><td><img src="images/mammoth-hunt.jpg" alt="19th-century engraving of prehistoric hunters attacking a mastodon with spears and bows" width="280"></td></tr>
<tr><td><sub>"A Pre-Historic Mammoth Hunt" (1876).<br>Public domain, via Wikimedia
Commons.</sub></td></tr>
</table>

What Marx termed **value** only enters into the picture 
once two hypothetical hunter-gatherer bands meet and barter. Let's say one has access to a
riverbed full of flint, but is short on meat, while the other has
half a mastodon, but is short on tools.
They  start trading: flint tools for meat.
To settle a transaction, both sides need to take into account factors other than
"how maggot-free is this meat" versus "how sharp is
this tool" — these two things are not at all directly comparable. What both sides do
have some rough sense of is how much  time and effort each good took to 
obtain in its finished form: days spent traveling to the 
riverbed, then collecting  and knapping blades, versus 
days spent tracking and butchering game.

That comparison — effort against effort, not usefulness against
usefulness — is the essence of the notion of **value** in Marx's labor theory. *Value* is
best measured as the **socially necessary labor time** a thing takes to
produce for trade — not any one producer's own time, but roughly what
it typically takes producers in general to make the same thing.
To make this concrete: if a slow or unskilled knapper takes all day to
turn out one blade, while a knapper of average skill and
industriousness manages the same blade in an hour, the slow knapper's
blade isn't worth more for the extra hours spent. *Value* inheres in the
*average* time  -- across the whole clan — that it takes to produce
something, not whatever time any individual happens to put in. Any extra
hours are simply wasted and no extra *value* is created. 


#### From flint tools to factories

Fast-forward to the present, and the same *use-value logic* applies to
modern production inputs. Arable land, a shoe factory, an idle data
center all have real *use-value* on their own, worked or not — a field
_could_ grow crops, a factory _could_ produce shoes, a data center _could_
process information — but only once someone puts in the labor to make
that happen. None of that is *value* yet, though, in Marx's technical
sense — that takes labor aimed specifically at producing something for
exchange, not just any labor for any purpose. A farmer growing food
only for their own family, say, puts in plenty of real labor — but
none of it counts as *value*, because none of it is aimed at a
market. 

Note that this labor need not be manual. Think of the modern engineer
who spends months designing a superior tractor blade: they never
personally forge a single one, but their effort still creates *value*
— and that effort starts even before they begin working on the design. 
It starts even before the spark of initial
insight that a better blade might even be possible. Without years of
prior training, practice, and study, the engineer would never have 
the mental tools that allow that insight to take shape.
Both types of effort count toward *value* creation —
the hours spent studying to be at  the level where insight is possible 
are just as relevant as the hours spent at the drafting table refining the idea.
The total effort hours across both categories are 
thinly amortized across every blade produced as a result of those
efforts.

This is different, though, from what happens inside the machine itself
once it's built. A machine has *value* too — the labor that went
into manufacturing it — but the machine doesn't create new *value*
just by operating; that only happens through the labor of whoever's
running it. What the machine itself does is simpler: it transfers the
*value* it already has into whatever it helps produce, a little at a
time, as it gradually wears out. This is precisely what accountants
now call **depreciation**. Marx calls it
**constant capital** ([`c`](#the-tendency-of-the-rate-of-profit-to-fall)) — *value* passed
along, not *value* created, unlike the engineer's living labor, which
actually adds something new.

That machine's own value has a layered history too: it was itself
built using other machines and tools, whose value depreciated into it
the same way it now depreciates into what it produces. Marx has a name
for this — **dead labor**, congealed from earlier rounds of
production, as opposed to **living labor** — the engineer's, actually
being performed right now. Trace that back far enough, and it looks
like a dependency graph fanning out at every step:
this machine's value depends on the machines that built it, which
depend on the machines that built *them*, recursively, until you
finally bottom out at nothing but raw materials and someone's bare
hands.

#### Exchange-value and mechanization

Only after that living labor actually produces something for the
market can we interpret value quantitatively, as **exchange-value**. This 
is Marx's term for how much of one commodity trades for another. *Exchange-value*
is set (roughly) by the ratio of *socially necessary labor* necessary
to produce each item to be exchanged.
A capitalist who introduces a newer, more efficient machine ahead of competitors
captures the gap between the reduced labor time now embodied in each unit
they produce and the social average -- as extra profit. This continues until
competitors adopt similar machinery and the social average itself
falls (the same
mechanization race that drives up the *organic composition of
capital*: [`q`](#the-tendency-of-the-rate-of-profit-to-fall)).

#### Surplus value

There's also a more basic source of profit that doesn't depend on
any competitive edge at all. A worker is paid a wage — this is **variable
capital**, [`v`](#the-tendency-of-the-rate-of-profit-to-fall) — that covers
roughly what it costs to maintain their lifestyle from one day to
the next — everything from food to rent, to entertainment, to
whatever portion of that day's 
pay they put away for a rainy day. Marx calls the
portion of the working day that earns back that wage **necessary labor
time**. Whatever labor is input beyond that point — the **surplus labor time** — still
produces *value*, but that *value* isn't paid for; the employer keeps it as
**surplus value**, the source of profit. Much of that profit doesn't just
sit still, either — competitive pressure pushes employers to reinvest
that surplus into better machinery, chasing the same edge
described in the previous  [section](#exchange-value-and-mechanization).

#### Class struggle and contradictions

<table align="right" width="200">
<tr><td><img src="images/scot-tissue-bolsheviks.jpg" alt="1930s Scot Tissue Towels advertisement reading 'Is your washroom breeding Bolsheviks?'" width="200"></td></tr>
<tr><td><sub>Scot Tissue Towels advertisement,<br>"Is your washroom breeding
Bolsheviks?"<br>(1930s). Public domain.</sub></td></tr>
</table>

Whoever owns the machinery that *surplus value* gets invested in also holds most
of the power to decide how the production process is organized and how
its output gets divided. Whoever operates that machinery has an
obvious stake in both questions too. That opposition of interest is
structural and not something that one good-faith negotiation
resolves for good. This is because the underlying division of power and divergence of 
interests that produce this conflict lingers.

Marx's term for this conflict is **class struggle**, and it's one instance
of a broader pattern he calls *contradictions* — real, structural tensions
between two parts of an economic system that pull against each other and
sharpen over time until something gives. The one that matters most here:
production keeps getting broken down into narrower, more specialized
steps, and the skill and judgment once needed to perform each step
keep getting captured and re-embodied in the machinery itself, rather
than staying in the worker's hands. The more of that accumulated
knowledge ends up objectified in machines rather than workers, the
harder it is to say the resulting output is solely the product of
whoever owns the machine. It's tensions like this one — playing out
inside a society's actual material conditions, rather than as shifts
in ideas or values — that Marx's method, *dialectical materialism*
(his materialist inversion of
[Hegel's](https://en.wikipedia.org/wiki/Georg_Wilhelm_Friedrich_Hegel)
idealist dialectic), treats as history's actual engine of change.

This isn't only a nineteenth-century abstraction. In the [2023
SAG-AFTRA
strike](https://www.nbcnews.com/tech/tech-news/hollywood-actor-sag-aftra-ai-artificial-intelligence-strike-rcna94191),
studios proposed scanning background performers for a single day's
pay, then using generative AI to synthesize new performances from that
scan indefinitely, with no further compensation owed — union
president Fran Drescher called it "an existential threat to creative
professions." It's a present-day instance of the same pattern: a
worker's skill and likeness are captured once, re-embodied in a reusable
AI-driven asset, and then split off from any future ability of the worker 
to claim any portion of the *value* that asset goes on to produce.

#### The tendency of the rate of profit to fall

Marx's own mathematical notation shows exactly why the mechanization
race we discussed [above](#exchange-value-and-mechanization) doesn't
just squeeze workers harder — it can push the capitalist's own
*rate of profit* toward zero. 

We split the capital a firm lays out into two categories:

- **Constant capital** ($c$) — machinery, materials, everything that
  transfers its existing *value* into output without adding to it.
- **Variable capital** ($v$) — wages, the only capital that creates
  *value* beyond its own cost, since a worker paid $v$ produces more
  than $v$ over the working day.

Total capital advanced is $C = c + v$. The extra output that variable
capital produces — [*surplus value*](#surplus-value)  — is $s$: the source of profit.

Two ratios follow from that split:

- The **rate of exploitation**, $s' = s/v$, measures *surplus value*
  against wages: how much unpaid labor relative to paid.
- The **organic composition of capital**, $q = c/v$, measures
  machinery against wages: how automated a given operation is.

Every time a capitalist introduces a new machine ahead of competitors,
as described above, they raise their own $q$; once rivals follow suit
to keep up, $q$ rises for the whole industry.

Capitalists don't compete on $s'$, though — they compete on **rate of
profit**, *surplus value* measured against the entire capital outlay:

$$p' = \frac{s}{c+v}$$

Divide through by $v$:

$$p' = \frac{s/v}{c/v + 1} = \frac{s'}{q+1}$$

Picture $p'$ plotted against $q$, and this is the asymptote you get:

```mermaid
%%{init: {"themeVariables": {"xyChart": {"plotColorPalette": "#d62728, #1f77b4, #2ca02c"}}}}%%
xychart-beta
    title "Rate of profit (p') vs. organic composition of capital (q)"
    x-axis "q — organic composition of capital" [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    y-axis "p' — rate of profit" 0 --> 4
    line "s' = 4" [4, 2, 1.33, 1, 0.8, 0.67, 0.57, 0.5, 0.44, 0.4, 0.36, 0.33, 0.31]
    line "s' = 2" [2, 1, 0.67, 0.5, 0.4, 0.33, 0.29, 0.25, 0.22, 0.2, 0.18, 0.17, 0.15]
    line "s' = 1" [1, 0.5, 0.33, 0.25, 0.2, 0.17, 0.14, 0.13, 0.11, 0.1, 0.09, 0.08, 0.08]
```

Each curve in the above graph is a reflection of  how hard labor is being squeezed
(that is: how high $s'$ climbs.) But regardless of which curve we analyze, 
we see that mechanization still drags the
*rate of profit* down toward the same floor. As $q \to \infty$,
$p' \to 0$, machinery transfers *value*; it doesn't create it — only
$v$, *living labor*, does.
So the more of production that shifts from $v$ to $c$, the more the
denominator
outruns anything the numerator can do about it. Push automation far
enough and the rate of profit trends toward zero even as exploitation intensifies
— Marx's own name for this is the **tendency of the rate of profit to
fall**.

This terminology can trip people up: "rate of profit"
sounds like it should track how well capitalists are doing overall, so
one might easily make the mistake that a falling rate means bad 
news for them. It isn't necessarily — a
falling rate and a thriving capitalist class are fully
compatible, just not inevitable. That's because two different things
are being tracked. $p'$ is a *ratio*, profit against total capital
invested, and a falling ratio can easily coexist with a growing
*mass* of profit — if the capital base underneath it (the
denominator) grows even faster than the profit itself. That mass is
just $s$ itself, the absolute dollar amount
([operating profit in GAAP terms](#in-accounting-terms)), not divided
by anything. That capital base is owned, overwhelmingly, by the same
capitalist class collecting the profit. So a falling rate can still
mean the owners come out ahead twice over: capturing both a growing *mass* of profit
*and* ending up with an even  bigger pile of capital (assets) on their own books.

Separately, abundance is a *use-value* related concept. It tracks with 
how much society can actually produce — and automation genuinely 
increases that quantity, whatever is happening to any value-based ratio. What doesn't follow
automatically is _who_ captures these gains: the growing
profit, the growing capital base, or the growing material abundance
itself: that's a question of _who owns_ the machines, not a mathematical one.

Note that Marx treated the *tendency of the rate of profit to fall* as
just that — a _tendency_, not an iron law — and named several
countervailing forces — pressures pushing the other way. Chief among
them: cheapening the elements of *constant capital* itself. As the
industries that produce machinery and raw materials grow more
productive, each *new* unit of `c` costs less current labor-time to
produce than an equivalent unit did before — value tracks the labor
it would take to reproduce something today, not the labor
historically sunk into it. So the physical mass of machinery keeps
climbing (that's what pushes `q = c/v` up in the first place), but its
value doesn't climb in lockstep, and `q` rises more slowly than
automation alone would predict.[^27] Add to that foreign
trade (cheaper imported inputs, or higher-margin export markets) and a
rising $s'$ that offsets $q$ for a while, and any of these can slow or
reverse the fall in practice.

##### In accounting terms

If you think in balance-sheet terms, here's how these map onto modern
accounting and finance vocabulary — exact for some terms, looser for
others:

| Marx's term | Symbol | Closest modern analog |
|---|---|---|
| Constant capital | `c` | Fixed assets (PP&E) + materials/inventory |
| Variable capital | `v` | Direct labor cost, or payroll |
| Surplus value | `s` | Operating profit |
| Total capital advanced | `C = c+v` | Invested capital / capital employed |
| Rate of exploitation | `s' = s/v` | No standard name — closest to a labor-cost markup |
| Organic composition of capital | `q = c/v` | Capital intensity ratio |
| Rate of profit | `p' = s/(c+v)` | ROIC or ROCE (return on invested or employed capital) |

`p'` and ROIC are the tightest match — both ask the same question,
profit per dollar of *total* capital committed, rather than margin on
revenue alone.[^28] `q` and capital intensity are close too; it's a real
ratio tracked in corporate finance, just not always called that. `s'`
has no standard named counterpart — the nearest real-world equivalent
is informal, something like a labor-cost markup.

The tendency of the rate of profit to fall shows up in modern investing too: heavily capital-intensive 
industries — those with lots of fixed assets on the books per
dollar of revenue — are well known to post structurally lower ROIC
than asset-light businesses, part of why investors like Warren Buffett
have long preferred the latter. 

##### Quantifying the drivers of disillusionment and dissolution

Getting back to our graph in the subsection above, note that its asymptote 
is exactly where Marx's later writing on automation
picks up: at the limit where $q \to \infty$, *living labor* ($v$)
becomes vanishingly small relative to capital, and automated,
machine-embodied knowledge — what Marx calls **general intellect** —
becomes the primary productive force directly. At that point
diminishing socially necessary labor-time doesn't just make the rate of 
profit trend toward zero; it stops being
the basis of *value* at all, since *value* in this whole framework has
depended on $v$ from the start.

None of the above reaches workers as a number, though. What they
experience is the flip side of Marx's own countervailing forces — the
same pressures, seen from the worker's side of the ledger instead of
the firm's:
tighter quotas and heavier monitoring as employers push $s'$ up to
offset a rising $q$; stagnant or falling wages as employers cut $v$
directly; specific jobs disappearing as machinery takes over the work
that used to require them; and, periodically, a recession or a round
of layoffs once capital can't find anywhere left to profitably go. It
never reads as "the rate of profit is falling" — it feels like output
climbing while a worker's own claim on it shrinks — the same
disillusionment the ["Drivers" argument
above](#drivers-of-the-dissolution-of-the-corporate-model----marxist-view)
describes: working people noticing both that they no longer have
work, and that the resulting abundance is being captured by a class
that visibly isn't the one still producing it.



### A.3 Founder labor and fair reward

Founding stewards drawn to our proposed model are presumably already
'mission-motivated', and aligned with our belief that labor deserves a fair
reward -- and that more generally, economic benefits accruing from any shared effort
should be distributed equitably. The table below reflects our position on what's 
fair, but each founder should think through how their reward
on exit aligns with their own stated principles.

| # | Reward source                                                                            | Labor? | Fair? |
|---|------------------------------------------------------------------------------------------|---|---|
| 1 | Coordination — project management, hiring, external stakeholder communications | Yes | Yes |
| 2 | Despotic surveillance — monitoring or disciplining workers out of distrust               | Yes | No |
| 3 | One-time founding labor — vision, team-building, capital-allocation judgment             | Yes | Yes |
| 4 | Return on mere capital ownership (rent) — regardless of the capital's origin             | No | No |

Row-by-row, here's where each one comes from:

- **Row 1 (coordination)** — Marx, *Capital* Vol. 1, Ch. 13,
  "Co-operation"[^29]: *"all combined labour on a large scale requires,
  more or less, a directing authority, in order to secure the
  harmonious working of the individual activities."*
- **Row 2 (despotic surveillance)** — same chapter[^29]: *"by reason of
  ... the unavoidable antagonism between the exploiter and the living
  and labouring raw material he exploits."*
- **Row 3 (founding labor)** — not Marx. Sourced from Schumpeter[^30]
  instead.
- **Row 4 (rent)** — Marx, *Capital* Vol. 3, Ch. 23, "Interest and
  Profit of Enterprise"[^31], quoting the capitalist's own rationale:
  his profit of enterprise is *"itself rather a wage ... of
  superintendence of labor."*

Coordination (#1) and surveillance (#2) both come from the same
discussion in *Capital*, Vol. 1, Ch. 13: Marx observes that capitalist
"management" bundles two functions together, then pulls them apart.
The first is a technical function, necessary in any social system, not
just capitalism; Marx's own analogy is an orchestra needing a
conductor. The second, despotic control specific to capitalism, has
nothing to do with coordinating work and everything to do with
extracting effort from workers who have no stake in the outcome.
Marx's own verdict, which we share: coordination (#1) is fair,
surveillance (#2) is not.

Rent (#4) references Marx's description of how capitalist owners
justify their residual profit claim by presenting it as just a bigger
version of coordination (#1). His point is that the claim doesn't hold up:
subtract what a hired, non-owner manager would actually earn doing the
identical coordinating
work, and what's left over isn't explained by labor at all — it's a
return on mere ownership, dressed up rhetorically as a labor reward. He
even had empirical proof: in co-operative factories, where management
is genuinely divorced from ownership, the manager's wage is paid
separately and explicitly, and the mystified category disappears. We
agree with Marx completely here too: rent deserves no reward, full
stop, regardless of who's collecting it or how they came to own the
capital in the first place.

On three of these four rows, then, there's no real daylight between us
and Marx. Broad-based ownership and [token-based delegated
authority](#token-based-delegated-authority) don't exist to argue
against coordination (#1) or eliminate legitimate coordination work;
they exist to dissolve the antagonism that makes surveillance (#2)
seem necessary in the first place, as contributors motivated by their
own stake coordinate and manage work amongst themselves rather than
needing someone to crack a whip.

Founding labor (#3) is the only instance  where we actually part ways with Marx.
Neither of his categories allows reward for the initial one-time
effort involved in actually getting an enterprise off the ground: 
team-building, analyzing competition and regulatory factors, 
analysis of  capital allocation alternatives, etc. 
This is the  labor of the *visionary entrepreneur*, and we see it as 
distinct from ongoing coordination (#1), despotic control (#2), and
mere ownership (#4) We think it deserves fair compensation. 

Joseph Schumpeter offers a cleaner theoretical home for this one gap than
Marx does. He drew his own line between the entrepreneur's reward — a
temporary payout for introducing what he called a "new combination"[^30] —
and the rentier's return on capital merely owned. That entrepreneurial
reward, in his account, gets competed away once the innovation is copied.
This aligns with our belief that the exit reward should recognize the labor
of founding (differing from Marx), including fair pay for any salary
foregone along the way — but should not be a function of a long-lived
ownership stake, new [paid-in
capital](https://en.wikipedia.org/wiki/Paid-in_capital), or a risk
premium for having come in early.

None of this is as clean in practice as the table makes it look. A
founder's actual payout arrives as one blended number, not four
separately labeled deposits, and rent (#4) can ride along in it two
ways: return on seed capital of questionable origin cashing out indistinguishably
from the founding-labor reward (#3), or — even with zero capital
contributed — equity that keeps appreciating on *other people's* later
work for as long as the founder holds it. The longer that holding
period, the more the payout shifts from reward for founding toward
reward for having owned stock while others built. Nothing in the ESOP
mechanism sorts this out automatically.

### A.5 Income vs. retained earnings: a quick refresher

The [C-corp or S-corp?](#c-corp-or-s-corp) discussion in Section 3
turns on a distinction worth making explicit: **income** is a *flow*,
measured over a period — a quarter, a year — as revenue minus all
expenses ([COGS](https://en.wikipedia.org/wiki/Cost_of_goods_sold), operating costs, interest, taxes) for that period. It
resets each period; last year's income doesn't carry forward as this
year's.

**Retained earnings** is a *pool* — a running cumulative balance-sheet
total, built up over the company's entire life:

$$RE_{\text{end}} = RE_{\text{beginning}} + \text{Net Income}_{\text{period}} - \text{Dividends}_{\text{period}}$$

Each period, that period's net income either gets paid out as
dividends or gets added to the accumulated retained-earnings pool. So
income is the flow feeding the pool; retained earnings is the pool
itself.

This is why C-corp vs. S-corp status matters for *when* tax hits that
pool. A C-corp's income is taxed once as it's earned — flowing into
the pool — and taxed again if it's ever paid out later as a dividend:
two tax events on the same dollar, at different times. An S-corp's
income is taxed to shareholders once, the moment it's earned, whether
or not it's actually distributed — so nothing further happens tax-wise
when it later leaves the retained-earnings pool as a distribution.


## Footnotes

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

[^7]: ERISA requires broad-based coverage — generally, every employee
    meeting minimal age and service thresholds must be eligible — and
    nondiscriminatory allocation formulas that can't disproportionately
    favor highly compensated employees over everyone else. The law is
    built to prevent an ESOP in name only, with a small circle of
    insiders collecting most of its actual value.

[^8]: Allocation and vesting are different clocks. Shares move out of the loan's
    collateral (suspense) account into an employee's individual account as the acquisition
    debt gets repaid — that's allocation, and it's mechanically tied to the loan. Whether the
    employee has a non-forfeitable right to *keep* shares already allocated to them is governed
    separately, by a service-based vesting schedule (e.g., graded vesting over several years);
    an employee can hold allocated shares that would still be forfeited if they left early.

[^9]: [NCEO, "ESOPs in S
    Corporations"](https://www.nceo.org/what-is-employee-ownership/esops/esops-s-corporations) —
    on the federal tax exemption for S-corp income attributable to ESOP
    ownership, and the ~4,000-plus 100%-ESOP-owned S-corps counted in a
    2022 survey.

[^10]: Without a safeguard, a founder could structure an S-corp ESOP
    so the company pays no tax while the shares' actual value stays
    concentrated among a small circle of insiders rather than reaching
    rank-and-file employees. [IRC §409(p) — IRS, "Preventing the
    occurrence of a nonallocation
    year"](https://www.irs.gov/retirement-plans/issue-snapshot-preventing-the-occurrence-of-a-nonallocation-year-under-section-409p),
    added by Congress in 2001, blocks this: a "disqualified person"
    (anyone owning 10%+ of deemed-owned ESOP shares, or 20%+ with
    family) can't have ESOP assets accrue to them in any year where
    disqualified persons collectively hold 50%+ of the company's
    equity. Violations carry a 50% excise tax, deemed taxable
    distributions to participants, loss of the ESOP's tax-qualified
    status, and termination of the company's S-corp election.

[^11]: [arxiv.org/abs/2607.07663](https://arxiv.org/abs/2607.07663)

[^12]: [Elite overproduction — Wikipedia](https://en.wikipedia.org/wiki/Elite_overproduction);
    [Structural-Demographic Theory — Peter Turchin](https://peterturchin.com/structural-demographic-theory/)

[^13]: US Army Field Manual FM 3-0, quoted in [Army 2030: Disperse Or
    Die — Network And
    Live](https://breakingdefense.com/2022/10/army-2030-disperse-or-die-network-and-live/),
    Breaking Defense (2022). The stakes are visible in Ukraine: drone
    units make up only about 20% of Ukrainian combat personnel but
    account for over 80% of Russian casualties. [The New Revolution in
    Military
    Affairs](https://carnegieendowment.org/research/2026/04/ukraine-russia-war-changing-warfare-practice-military-strategy),
    Carnegie Endowment for International Peace (April 2026).

[^14]: Rainey Reitman (former EFF Activism Director), *Transaction
    Denied*, documents cases of financial institutions and payment
    processors freezing accounts or blocking transactions over
    speech-related concerns — including teachers, journalists, and
    politicians cut off with little explanation or recourse. [EFF:
    Transaction
    Denied](https://www.eff.org/deeplinks/2026/04/former-eff-activism-directors-new-book-transaction-denied-explores-what-happens)
    (April 2026).

[^15]: [wrongthink — Wiktionary](https://en.wiktionary.org/wiki/wrongthink).

[^16]: In the spirit of full disclosure: these mitigations are not
    something we have tested in practice. They're directions that
    seem promising, and that we plan to explore.

[^17]: [Designation of Autistici/Inventati as a Specially Designated
    Global Terrorist — U.S. Department of
    State](https://www.state.gov/releases/office-of-the-spokesperson/2026/08/designation-of-autistici-inventati-as-a-specially-designated-global-terrorist)
    (August 26, 2026); [Autistici/Inventati press release — infrastructure
    impact timeline](https://www.inventati.org/campaign/press) (domain
    unreachable August 28, 2026).

[^18]: Timeline of the August 2026 SDGT designation and aftermath: [Autistici/Inventati —
    Wikipedia](https://en.wikipedia.org/wiki/Autistici/Inventati) (PayPal loss "within days";
    Public Interest Registry disabled autistici.org August 28, 2026, 48 hours after the
    designation; NoBlogs compromised the same day via a software vulnerability, ~2 hours of
    unauthorized access, homepage defaced, service put in read-only mode; Banca Etica suspended
    A/I's account September 1, 2026 citing risk of U.S. secondary sanctions, after consulting
    Italy's Ministry of Economy and Finance; A/I announced shutdown September 6, 2026).

[^19]: [US Terror Listing Kills 16,000 Activist Email Accounts —
    gblock.app](https://www.gblock.app/articles/autistici-inventati-shutdown-16000-activist-emails-2026)
    — scale (16,000 email accounts, 5,500 mailing lists, ~10,000 blogs, 1,500 websites); A/I's
    mail servers themselves, hosted in Europe, were never touched.

[^20]: "Tor" is short, historically, for "The Onion Router," though the
    Tor Project no longer treats it as a spelled-out acronym — see [Why
    is it called
    Tor?](https://support.torproject.org/about/why-is-it-called-tor/).
    On how onion services actually work: [How Tor's onion services
    actually work —
    YouTube](https://www.youtube.com/watch?v=hXF1X-UVRzI), on the
    self-certifying address scheme and the distributed hidden-service
    directory that resolves it.

[^21]: [Set up Your Onion Service — Join the Tor
    Community](https://community.torproject.org/onion-services/setup/) —
    the step-by-step how-to: install Tor, stand up a local web server, and
    add `HiddenServiceDir`/`HiddenServicePort` lines to `torrc`.

[^22]: Operators who want defense-in-depth beyond Tor's own
    encryption can layer HTTPS on top with either a self-signed or
    CA-issued certificate, using a separate keypair from the onion
    identity key itself — see [TLS Certificates for Onion
    Services](https://onionservices.torproject.org/apps/base/certificates/).
    A CA-issued cert exposes the `.onion` address in public Certificate
    Transparency logs, worth weighing against the anonymity goal here.

[^23]: [Onion-Location — Join the Tor
    Community](https://community.torproject.org/onion-services/advanced/onion-location/) —
    the header must be served over HTTPS on the clearnet site (not the
    onion site itself) and point to a valid `.onion` URL; test with
    `wget --server-response --spider` or by loading the site in Tor
    Browser and confirming the ".onion available" prompt appears.

[^24]: Leaked NSA XKeyscore source code showed Tor users
    flagged for surveillance, some categorized outright as "extremists,"
    regardless of what they were actually doing on the network
    ([SiliconANGLE](https://siliconangle.com/2014/07/04/nsas-xkeyscore-dissected-all-tor-users-marked-as-extremists/),
    July 2014, on source code published by Tor developer Jacob Appelbaum
    with German broadcasters NDR/WDR). A commonly suggested fix — routing
    through a VPN before connecting to Tor — just relocates the trust
    problem: CyberGhost, Private Internet Access, ZenMate, ExpressVPN,
    and Intego, five brands most users assume are independent
    competitors, are all owned by one company, Kape Technologies,
    controlled by Israeli businessman Teddy Sagi
    ([Wikipedia](https://en.wikipedia.org/wiki/Kape_Technologies)). Some
    reporting alleges founder/executive ties to Israeli
    signals-intelligence unit 8200 specifically; requires confirmation —
    we haven't independently verified that beyond the ownership facts
    above. We maintain a running assessment of vetted VPN providers at
    [wiki.doikayt.org](https://wiki.doikayt.org/index.php/Category:VPN).

[^25]: Down to a literal red light on someone's desk when a build
    breaks — see [this example of building a failure
    light](https://99x.io/Insights/blog/building-a-jenkins-failure-light-using-particle-photon)
    for a CI pipeline, wiring a Particle Photon board to a Jenkins job.

[^26]: [Geekbot](https://geekbot.com/) is one example — a Slack/Teams
    bot that runs asynchronous standups and posts status updates
    directly to a channel, without a meeting.

[^27]: Karl Marx, *Capital*, Vol. 1 (1867), Ch. 15, "Machinery and
    Modern Industry" — on machinery losing exchange-value the moment a
    cheaper-to-reproduce equivalent appears, regardless of its own physical
    condition or remaining use-value; Marx's term for this is **moral
    depreciation**, distinct from ordinary wear-and-tear depreciation.

[^28]: Real companies tie executive compensation directly to
    ROIC/ROCE performance targets, per their own SEC filings — e.g.
    [Phillips 66's 2021 proxy
    statement](https://www.sec.gov/Archives/edgar/data/1534701/000114036121010999/nc10021503x3_def14a.htm)
    (50% of performance-share payout tied to after-tax ROCE) and
    [Schlumberger/SLB's 2025 proxy
    statement](https://www.sec.gov/Archives/edgar/data/87347/000130817925000029/slb_courtesy-pdf.pdf)
    (three-year average ROCE benchmarked against competitors). On the
    analyst side, comparing ROIC against WACC (cost of capital) is a
    standard valuation framework taught in the [CFA
    curriculum](https://www.cfainstitute.org/insights/professional-learning/refresher-readings/2026/equity-valuation-applications-and-processes).

[^29]: Karl Marx, *Capital*, Vol. 1 (1867), [Ch. 13,
    "Co-operation"](https://www.marxists.org/archive/marx/works/1867-c1/ch13.htm) —
    the chapter distinguishing the technical function of directing
    combined labor (the orchestra-conductor analogy) from the despotic
    function of capitalist supervision.

[^30]: Joseph Schumpeter, *The Theory of Economic Development* (1911;
    trans. 1934), on entrepreneurial profit vs. interest on capital; and
    *Capitalism, Socialism and Democracy* (1942) on "creative
    destruction."

[^31]: Karl Marx, *Capital*, Vol. 3 (1894), [Part V, Ch. 23, "Interest
    and Profit of
    Enterprise"](https://www.marxists.org/archive/marx/works/1894-c3/ch23.htm) —
    the chapter distinguishing "wages of superintendence" from "profit
    of enterprise."

[^32]: [Creating and viewing access
    tokens](https://docs.npmjs.com/creating-and-viewing-access-tokens/) —
    npm's documentation on granular (package-scoped) tokens vs. classic
    tokens.

[^33]: OFAC's authority derives from the [International Emergency
    Economic Powers Act](https://en.wikipedia.org/wiki/International_Emergency_Economic_Powers_Act)
    (IEEPA); U.S. financial institutions must comply with its blocking
    regulations. On the correspondent-account mechanism specifically:
    [Section 311 Special Measures — eCFR Title 31, Part 1010, Subpart
    F](https://www.ecfr.gov/current/title-31/subtitle-B/chapter-X/part-1010/subpart-F/subject-group-ECFRe5988d602e86fcf),
    and FinCEN's [Iran correspondent-account
    prohibition](https://www.fincen.gov/news/news-releases/final-regulation-implementing-section-312-usa-patriot-act-announced)
    as a worked example of a §311 special measure in practice.

[^34]: Any USD-denominated transaction ultimately clears through Fedwire
    or CHIPS. A non-U.S. bank needs a correspondent relationship with a
    U.S. bank just to make its own dollar holdings usable
    internationally — which is the relationship OFAC reaches through.

---

<a href="https://creativecommons.org/publicdomain/zero/1.0/"><img src="images/cc0.png" alt="CC0 1.0 Universal" width="88" height="31"></a>

This work is released into the [public domain under
CC0](https://creativecommons.org/publicdomain/zero/1.0/) — no rights
reserved. Use it, share it, adapt it, use it in performance art — whatever
you want! No permission or attribution needed.

That said: we'd be grateful for a heads-up or a shout-out to [Doikayt
Mobilization Labs](https://doikayt.org) if you create something new and
useful on top of what we've done so far.

[![Remember the USS Liberty!](https://badge.techforpalestine.org/ceasefire-now)](https://techforpalestine.org/learn-more)
