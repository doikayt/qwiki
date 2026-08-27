# Commons-Hub Doc Split — Plan

**Status as of 2026-08-26:** Plan confirmed (broad-to-narrow gradient across the four
docs, each linking back to the specific upstream section it depends on rather than
recapping everything above it — see discussion in session history).
[`commons-hub-pattern.md`](commons-hub-pattern.md) (Doc 1 — reference architecture,
including the new Appendix A historical/economic grounding with the Marx/Coase/
general-intellect material) is drafted. Docs 2 and 4 not yet started. Doc 3
([`contributor-guide.md`](contributor-guide.md)) is a stub: Doc 1's full §4 Worked
Example moved there in full (not just a simplified extraction, per the outline
below) after Chris judged it too much operational detail for Doc 1's reference
architecture — Doc 1 now keeps only a short summary and a pointer.

## Agreed split

### 1. "The Commons-Hub Pattern" — reference architecture
Audience: Chris, future co-founders, counsel, serious adopters cloning the pattern.
- Core Idea
- The Satellite Layer
- Governance Layer (board vs. funded-program-allocation DAO)
- Worked Example: Funded Program Allocation Mechanic — short summary + pointer only;
  full mechanic lives in Doc 3
- Economic Benefit Sequencing (ESOP maturity ladder)
- **NEW (tweak from Chris):** a contained appendix holding the historical/economic
  grounding — Coase transaction-cost theory, the putting-out-system/textile
  example, Benkler/commons-based peer production, stigmergy, the aircraft-carrier
  resilience argument. This appendix lives here, in Doc 1, not in Doc 2. Doc 2 and
  other docs reference it rather than repeating it inline.

### 2. "Why This, Why Now" — the argument / manifesto
Audience: prospective contributors, funders, press.
- Corporations as a governance technology, not a law of nature (short version;
  full economic grounding now lives in Doc 1's appendix, linked from here)
- The present moment: elite overproduction and AI-driven displacement (Turchin)
- The opportunity (recruitment pitch)
- Closing: pointer to the aircraft-carrier resilience argument in Doc 1's appendix

### 3. "Contributor Guide: Trust, Standing, and Getting Paid"
Audience: actual committers/contributors.
- Community Trust and Contributor Standing (§6 content)
- Tactical Governance — Committer Voting Weight (§7 content, contributor-facing)
- How you get paid: the full funded-program allocation mechanic, moved here in full
  from Doc 1's §4 (not a simplified extraction)

### 4. "Legal Risk Register" — living tracker
Audience: counsel, board.
- Grouped by topic, not narrative order: private inurement/compensation;
  securities-law exposure (tactical tokens); board-delegation formality;
  discrimination/charitable-class exposure; tax/1099 mechanics; DAO legal wrapper
- Each item keeps severity tag + "requires counsel" flag from the original §5

### Placement note
"Trust and bad-faith actors" (currently a short Introduction teaser pointing to
§6) — keep a two-sentence version in Doc 2, move the actual mechanism to Doc 3.
Don't duplicate it in full in both.

## Not yet decided / open
- Exact file names and whether all four live in `governance/` or get their own
  subdirectories.
- Whether Doc 1 (or a trimmed §7+§8 excerpt of it) should be prepared specifically
  for the upcoming meeting with Alex Moss (see
  `~/.claude/projects/-home-chris-admin/memory/project_alex_moss_praxis_relationship.md`)
  — Praxis's specialty (ownership culture, ESOP governance) maps directly onto §7/§8.

## Next step
Chris reviews this plan and the original single-doc content, gives feedback, then
we redraft into the four files.
