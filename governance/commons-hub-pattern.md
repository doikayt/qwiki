# The Commons-Hub Pattern

*A replicable model for organizing collaboratively-developed
open source software (OSS) around nonprofit and for-profit satellites*

**Status:** Early concept draft.

- Not reviewed by counsel — nothing in this document is legal, tax, or
  financial advice; consult qualified counsel and a CPA before acting
  on anything discussed here.
- Not written by a trained economist — this is a summary of the
  author's own research and reflection on equitable approaches to
  structuring, operating, and profiting from an OSS-focused enterprise.

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
- [Appendix A: Historical and Economic Grounding](#appendix-a-historical-and-economic-grounding)
  - [A.1 Why firms exist: Coase, the putting-out system, and what's changing now](#a1-why-firms-exist-coase-the-putting-out-system-and-whats-changing-now)
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
questions of (a) who governs production, and (b) who benefits from that production? We first
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
that the same forces driving that outcome also open opportunities for 
alternative worker-friendly legal/financial/ownership structures to displace
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
the rules.[^16] Concretely, the trust itself is the stock purchaser: it
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

Allocation tracks loan repayment; whether an employee can keep those
allocated shares if they leave follows a separate vesting schedule.[^20]

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
    income tax at all.
  - That tax exemption comes with its own extra safeguard against
    insider concentration.[^15]
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
| DAO (§2 above) | Per funded program | Episodic — ends when the program does | Cash, paid for services rendered | Self-selected opt-in contributors |
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
existing order rather than joining it.[^8]

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

[ WARNING: AI slop ahead - this section is mostly a dump of research, and needs major editing to not 
induce reader headache]

Engineers building cloud infrastructure learned this lesson long ago: you don't put a service in one data center, because
one region's outage takes the whole thing down — you replicate across independent regions and providers so no single
failure is fatal. The same logic applies to organizations, and it's the same reason a single aircraft carrier, however
powerful, is one well-placed strike away from losing everything it carries: concentrating value and capability into one
legal entity is exactly what makes it worth attacking — legally, politically, operationally. A dispersed, replicable
structure has no equivalent point of failure: if a lawsuit, a funding collapse, or a government action takes out one
Satellite, the shared Commons and every other Satellite running it keep operating. See Appendix A.6, "Why dispersion, not
just adequate but better", for the full argument.

This isn't hypothetical. In August 2026, the US government designated the Italian hosting collective Autistici/Inventati
a ["Specially Designated Global Terrorist"](https://decode39.com/16319/autistici-inventati-case-sets-a-new-counterterrorism-precedent-irdi-says/)
entity over how its infrastructure was allegedly used by others — and within
days its primary domain and mail server, both concentrated in one operator, went dark for its entire user base.[^9] Its
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

The chain of events is worth walking through, because it shows exactly which chokepoints did the damage. The
State Department designation landed August 26, 2026. PayPal cut off A/I's account within days.[^17] Then, 48 hours
after the designation, the Public Interest Registry — the nonprofit that operates the entire `.org` namespace —
disabled `autistici.org`.[^17] A/I's mail servers themselves, sitting in Europe, were never touched; nothing about
the underlying software broke. As one account of the shutdown put it, "the failure happened at the domain registry
and the payment rails" — layers no mail provider, and no amount of server dispersion, actually controls.[^19]
Users could still read mail already sitting in their inboxes, but nothing new could be sent or received once the
domain stopped resolving.[^18] The same day, A/I's NoBlogs platform was separately compromised by an attacker
exploiting a software vulnerability — a couple of hours of unauthorized access, a defaced homepage, the service
dropped into read-only mode while they investigated.[^17] Whether or not it was opportunistic, being visibly down
invited more trouble, not less. On September 1, Banca Etica — an Italian bank, outside direct U.S. jurisdiction —
suspended A/I's account too, after consulting Italy's Ministry of Economy and Finance, because an Italian bank
still clears dollars through U.S. correspondent banks and wasn't willing to risk that access over one customer.[^17]
On September 6, roughly sixteen thousand mailboxes, ten thousand blogs, and fifty-five hundred mailing lists later,
A/I shut down for good. Their own statement said it plainly: "the possibility that our work may cause legal and
financial consequences to those who are close to us... leaves us no choice."[^17] Notably, A/I itself said it
couldn't establish whether the registry had acted on an explicit OFAC instruction or simply preferred not to find
out[^18] — which is itself part of the mechanism: no one downstream needs a direct order, only enough exposure
that they'd rather not risk it.

None of that was a technical hack. It was a sanctions designation working exactly as designed — making it too
risky for third parties (a registry, a bank, a payment processor) to keep serving the target, and letting them do
the actual shutting-down. The mitigations split along a line worth naming explicitly: some of them just need
*dispersed people* — a trusted individual in another jurisdiction, no incorporation required — while one of them
needs *dispersed legal entities*, because the risk it's covering is a different kind of risk.

- **DNS/registry — individual-level.** The failure mode wasn't the registrar, it was the registry — `.org` itself
  is operated by a U.S. nonprofit, so no registrar choice would have saved `autistici.org`. A trusted individual
  in a jurisdiction outside U.S.-aligned reach can hold a working mirror domain on a different ccTLD, with that
  fallback address pre-published somewhere that doesn't depend on the primary domain resolving (a pinned
  Fediverse post, a Matrix room, an onion service) — so users know where to look *before* the outage, not during
  it. No entity needed, just someone who isn't organizationally entangled with whatever triggered the takedown.

- **Mail — individual-level.** SMTP is already federated; the concentration here was organizational, not
  protocol-level. A trusted individual running (or paying for) a backup MX in a different jurisdiction, registered
  through a different registry, means one domain's failure doesn't stop the other from accepting mail. Again, no
  incorporation required — just a second person with a server.

- **Crypto keys — individual-level.** Multisig signers should be individuals resident in different jurisdictions,
  holding their own cold, self-custodied keys — not a shared wallet at a custodial exchange, which is a company
  and will freeze or block any address later added to an SDN list, for the same reason PayPal did. This is the
  same "trusted person, not trusted org" pattern as the DNS and mail mitigations.

- **Crypto pay rails — mostly individual-level.** Multisig protects the treasury from being frozen like a bank
  account, but not the off-ramp: the moment a Satellite's wallet address is added to the SDN list, any
  U.S.-regulated exchange will refuse to cash it out — the same mechanism as the registry and the bank, one layer
  down. A segregated wallet controlled by a trusted individual (or the multisig itself) does the practical job of
  containing that blast radius. Full legal separation between entities only starts to matter if the question ever
  becomes a legal one — whether Satellite A's designation can, as a matter of law, reach Satellite B's assets —
  which is a courtroom argument, not a mechanical one.

- **Banking — entity-level.** This is the one place a Satellite's legal-entity status actually earns its keep.
  A trusted individual holding organizational funds personally creates a different category of problem than a
  domain sitting under someone's name: their personal assets and the org's funds commingle, they're personally
  liable, there's no continuity if they die, disappear, get sued, or divorce, and the whole arrangement rests on
  one person's trustworthiness rather than a governed structure. Banca Etica's decision also shows that legal
  dispersion alone isn't enough if every Satellite's bank clears dollars through the same correspondent network —
  which, practically, is nearly all of them. There's no clean fix for that short of holding real reserves the
  DAO's crypto-treasury leg (§2) can reach without a bank in the loop at all.

None of this would have stopped the designation itself. It would have kept the Commons and its other Satellites
running while the targeted one dealt with the consequences — which is the whole point of dispersion.



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
The merchant distributed raw wool or cotton to independent spinners and weavers
working in their own homes and paid piece-rate for finished cloth, with no employment
relationship at all. This system lost out to the factory model for three
specific reasons —
the first two mitigated outright by direct supervision, and the third only by
centralizing the machinery itself:

- **Production was unobservable.** A merchant only saw finished cloth, never
  the process, which produced chronic embezzlement of material and
  inconsistent quality.
- **Scheduling was unenforceable.** Dispersed workers set their own pace,
  often around farm work, and contracting merchants had little visibility into progress.
- **The new machinery physically required centralization.** A water wheel
  could power a mill, not a cottage.


Two successive waves of software-engineering advances have rendered
each of those constraints less binding: tooling advances achieved in the last two
decades, and the more recent innovations in AI, especially LLM-based technologies.

#### The tooling wave

- **Production is now observable.** Version control and CI/CD make the
  process itself visible, not just the finished output. Automated test
  suites and the reporting built on top of them go straight at the old
  *inconsistent quality* problem, and further instrumentation — [code
  coverage](https://en.wikipedia.org/wiki/Code_coverage) and
  [object-oriented
  metrics](https://www.geeksforgeeks.org/software-engineering/object-oriented-metrices-in-software-engineering/)
  like coupling and [cyclomatic
  complexity](https://en.wikipedia.org/wiki/Cyclomatic_complexity) —
  measures that quality rather than just the process's existence.
- **Scheduling is now enforceable.** CI pipelines, issue trackers, and
  automated status checks impose real deadlines and coordination on
  remote contributors without the need to punch a clock and show up
  in a centralized office.
- **Capital no longer requires centralization.** Cloud infrastructure,
  rentable by the hour since well before AI made it fashionable, lets a
  remote contributor reach for the same equipment a centralized firm
  would otherwise have to own outright.

#### The AI wave

AI layers on top of two of those three gains. AI-assisted code review
catches what a human reviewer or a static linter would miss, pushing
observability past what version control and quality instrumentation
manage alone. And AI models are themselves a new form of rentable
capital — rentable by the hour just like the cloud infrastructure
underneath them — so a remote contributor can reach for genuinely
industrial-grade AI tooling without being inside a hierarchical firm
that owns the equipment. Scheduling is the one place AI's effect isn't
just an incremental improvement on the tooling wave: as more of the
actual coding work shifts from remote human contributors to autonomous
AI agents, the need to enforce a human schedule at all starts to
shrink. The endpoint is something like a lights-out software factory —
coordinating machine agents the way [lights-out
manufacturing](https://en.wikipedia.org/wiki/Lights_out_(manufacturing))
coordinates robots, with no human clock-in schedule left to enforce.

**Knowledge and information concentration** is worth naming too, even
though it doesn't map onto any of the three 1769 constraints above —
the textile-era case never had to contend with it. Corporations have
historically concentrated expertise, institutional knowledge, and
decision-making. AI increasingly makes that expertise portable to
distributed producers: [retrieval-augmented
generation](https://en.wikipedia.org/wiki/Retrieval-augmented_generation)
lets a model ground its answers in an organization's own
documentation and history rather than whatever it memorized during
training, and the same models can read, summarize, and explain an
unfamiliar codebase well enough that a remote contributor no longer
needs a tenured engineer sitting beside them to get oriented — an
advantage the textile-era analysis never had to account for.



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
hours are simply wasted and no extra *value* created. 


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
are just as relevant as the hours spent at the drafting table working toward 
the finished design. The total effort hours across both categories are 
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

There's a more basic source of profit, too — one that doesn't depend on
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
that surplus into better machinery, chasing exactly the kind of edge
described in the previous  [section](#exchange-value-and-mechanization).

#### Class struggle and contradictions

<table align="right" width="200">
<tr><td><img src="images/scot-tissue-bolsheviks.jpg" alt="1930s Scot Tissue Towels advertisement reading 'Is your washroom breeding Bolsheviks?'" width="200"></td></tr>
<tr><td><sub>Scot Tissue Towels advertisement,<br>"Is your washroom breeding
Bolsheviks?"<br>(1930s). Public domain.</sub></td></tr>
</table>

Whoever owns the machinery that *surplus value* gets invested in also holds most
of the power to decide how the production process is organized and how
its output gets divided — and whoever operates that machinery has an
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
productive, each unit of `c` embodies less value than before — the
physical mass of machinery increases, but its price doesn't rise in
lockstep, so `q = c/v` climbs more slowly than automation alone would
predict. Add to that foreign trade (cheaper imported inputs, or
higher-margin export markets) and a rising $s'$ that offsets $q$ for a
while, and any of these can slow or reverse the fall in practice.

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
revenue alone.[^10] `q` and capital intensity are close too; it's a real
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
never reads as "the rate of profit is falling" — it reads as output
climbing while a worker's own claim on it shrinks, which is exactly
the disillusionment the ["Drivers" argument
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
  "Co-operation"[^13]: *"all combined labour on a large scale requires,
  more or less, a directing authority, in order to secure the
  harmonious working of the individual activities."*
- **Row 2 (despotic surveillance)** — same chapter[^13]: *"by reason of
  ... the unavoidable antagonism between the exploiter and the living
  and labouring raw material he exploits."*
- **Row 3 (founding labor)** — not Marx. Sourced from Schumpeter[^11]
  instead.
- **Row 4 (rent)** — Marx, *Capital* Vol. 3, Ch. 23, "Interest and
  Profit of Enterprise"[^12], quoting the capitalist's own rationale:
  his profit of enterprise is *"itself rather a wage ... of
  superintendence of labor."*

Coordination (#1) and surveillance (#2) come from one passage doing
double duty: Marx splits what looks like a single "management" function
into two, and the quotes above reflect that split. The first is a
technical function, necessary in any social system, not just
capitalism; Marx's own analogy is an orchestra needing a conductor.
The second, despotic control specific to capitalism, has nothing to
do with coordinating work and everything to do with extracting effort
from workers who have no stake in the outcome.
Marx's viewpoint (with which we concur) argues that coordination
(#1) is clearly fair and surveillance (#2) is clearly not.

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
temporary payout for introducing what he called a "new combination"[^11] —
and the rentier's return on capital merely owned. That entrepreneurial
reward, in his account, gets competed away once the innovation is copied.
This aligns with our belief that the exit reward should recognize the labor
of founding (differing from Marx), including fair pay for any salary
foregone along the way — but should not be a function of a long-lived
ownership stake, ongoing capital input, or a risk premium for having
come in early.

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
[^9]: [Designation of Autistici/Inventati as a Specially Designated
    Global Terrorist — U.S. Department of
    State](https://www.state.gov/releases/office-of-the-spokesperson/2026/08/designation-of-autistici-inventati-as-a-specially-designated-global-terrorist)
    (August 26, 2026); [Autistici/Inventati press release — infrastructure
    impact timeline](https://www.inventati.org/campaign/press) (domain
    unreachable August 28, 2026).
[^10]: Real companies tie executive compensation directly to
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
[^11]: Joseph Schumpeter, *The Theory of Economic Development* (1911;
    trans. 1934), on entrepreneurial profit vs. interest on capital; and
    *Capitalism, Socialism and Democracy* (1942) on "creative
    destruction."
[^12]: Karl Marx, *Capital*, Vol. 3 (1894), [Part V, Ch. 23, "Interest
    and Profit of
    Enterprise"](https://www.marxists.org/archive/marx/works/1894-c3/ch23.htm) —
    the chapter distinguishing "wages of superintendence" from "profit
    of enterprise."
[^13]: Karl Marx, *Capital*, Vol. 1 (1867), [Ch. 13,
    "Co-operation"](https://www.marxists.org/archive/marx/works/1867-c1/ch13.htm) —
    the chapter distinguishing the technical function of directing
    combined labor (the orchestra-conductor analogy) from the despotic
    function of capitalist supervision.
[^14]: [NCEO, "ESOPs in S
    Corporations"](https://www.nceo.org/what-is-employee-ownership/esops/esops-s-corporations) —
    on the federal tax exemption for S-corp income attributable to ESOP
    ownership, and the ~4,000-plus 100%-ESOP-owned S-corps counted in a
    2022 survey.
[^15]: Without a safeguard, a founder could structure an S-corp ESOP
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
[^16]: ERISA requires broad-based coverage — generally, every employee
    meeting minimal age and service thresholds must be eligible — and
    nondiscriminatory allocation formulas that can't disproportionately
    favor highly compensated employees over everyone else. The law is
    built to prevent an ESOP in name only, with a small circle of
    insiders collecting most of its actual value.
[^17]: Timeline of the August 2026 SDGT designation and aftermath: [Autistici/Inventati —
    Wikipedia](https://en.wikipedia.org/wiki/Autistici/Inventati) (PayPal loss "within days";
    Public Interest Registry disabled autistici.org August 28, 2026, 48 hours after the
    designation; NoBlogs compromised the same day via a software vulnerability, ~2 hours of
    unauthorized access, homepage defaced, service put in read-only mode; Banca Etica suspended
    A/I's account September 1, 2026 citing risk of U.S. secondary sanctions, after consulting
    Italy's Ministry of Economy and Finance; A/I announced shutdown September 6, 2026).
[^18]: [Italian Email Service Faces Disruption After U.S. Sanctions —
    emailexpert](https://emailexpert.com/italian-email-service-faces-disruption-after-u-s-sanctions/)
    — users could read existing mail but not send or receive new mail once the domain stopped
    resolving; A/I itself said it had not established whether Public Interest Registry acted on
    an explicit OFAC instruction or preemptively.
[^19]: [US Terror Listing Kills 16,000 Activist Email Accounts —
    gblock.app](https://www.gblock.app/articles/autistici-inventati-shutdown-16000-activist-emails-2026)
    — scale (16,000 email accounts, 5,500 mailing lists, ~10,000 blogs, 1,500 websites); A/I's
    mail servers themselves, hosted in Europe, were never touched.

[^20]: Allocation and vesting are different clocks. Shares move out of the loan's
    collateral (suspense) account into an employee's individual account as the acquisition
    debt gets repaid — that's allocation, and it's mechanically tied to the loan. Whether the
    employee has a non-forfeitable right to *keep* shares already allocated to them is governed
    separately, by a service-based vesting schedule (e.g., graded vesting over several years);
    an employee can hold allocated shares that would still be forfeited if they left early.

