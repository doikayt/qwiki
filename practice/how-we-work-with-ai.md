# How We Work With AI

AI enables us, as engineers, to design solutions at a higher level of abstraction. It
flattens learning curves and allows us to orchestrate the production of new, useful
functionality without getting bogged down in the details of any particular framework
or language. But if we let AI do the bulk of the grunt work — roughing out code 
for a first spike, finding bugs, generating inital drafts of documentation — does that mean
we are mindlessly channeling AI slop? 

No. Why?

Because:

- **[We begin With the _End_ (User) in Mind](#begin-with-the-end-user-in-mind)** — we
  start by describing the system from the end user's perspective, the highest level of abstraction
  that actually matters.
- **[We understand Before Using](#understand-before-using)** — we never blindly accept
  what the AI gives us without taking the time to understand it first.
- **[We teach It Forward](#teach-it-forward)** — as part of cementing our understanding, we write 
  up 'backgrounders' on new concepts we're just getting
  comfortable with. Backgrounders serve as quick intros or refreshers of 
  concepts that will likely be unfamiliar to colleagues onboarding later, and to 'future us'.

## Begin With the _End_ (User) in Mind

Documentation-first is just one aspect of a more general rule we follow: [Begin with
the End in Mind](https://www.goodreads.com/quotes/1401614-to-begin-with-the-end-in-mind-means-to-start).
We approach things from the end _user's_ perspective, the highest level of abstraction
that actually matters. 

When you sketch out the end state first, you
often see early on that some of your ideas lead nowhere, or to a non-intuitive workflow
for your end users. You can always abandon those directions before you've sunk real
time into building them out.
Having AI create that first sketch is a bit like a painter dumping their preferred
colors onto a virtual canvas with just a rough idea of what the finished piece might look
like. An AI-enabled painter can quickly preview different arrangements of those
colors into shapes and concepts, then easily flip, swap, or resize any of those 
before committing to a particular option. Because the initial drafts are cheap, 
the artist can quickly shift directions with minimal time spent eliminating the 
rejected alternative.  The same goes for the AI-enabled engineer.

Keep in mind that, while the most important end state you are pursuing is useful, intuitive 
new functionality, a secondary end state objective is to have code that
is easy to understand, modify and obtain -- by future new members of the team, or maybe even 
'future you'. It is for the benefit of these future colleagues that you develop 
the _backgrounders_ we cover in [below](#teach-it-forward).

## Understand Before Using

We never blindly accept what the AI gives us without taking the time to understand it
first.

We  pay particular attention to reviewing 
code at the 'seams' of a proposed design -- that is code that exposes any 
aspect of functionality to some higher layer -- whether  that layer is calling code, or an
end user. If what we're reviewing is unclear, we ask for more documentation. 
If a comment uses unfamiliar terminology, or a section uses an
unfamiliar syntax pattern, we ask for an explanation — and we weigh folding such explanations back
into the comments (or a _backgrounder_ document), so it's there for the next person too.
Does that mean we scrutinize every numeric value in, say, some CSS the AI dumped out?
Since our attention is limited, probably not — CSS gone wrong is at
worst a rendering issue on one page -- not something that would kneecap an app completely.
Taking the AI's word for it is relatively low risk in these scenarios.

That's the trade-off in a nutshell: attention is limited, so we can't scrutinize
everything equally. What varies is the cost if we miss something — a bad CSS value
costs little, a bad migration costs a lot. So we do a quick risk analysis, and we spend
eyeball time  on sections that would really hose us if they're done wrong, and we 
'never sweat the small stuff'.

## Teach It Forward

The goal here is to be able to echo back the concept in your own words. This serves
two purposes. First, it checks off the mechanical task of cleaning up the wordiness
and robotic cadence issues typically found in an AI's first draft. Second, it moves
you beyond just reading the AI's response, into 
[active learning](https://teaching.cornell.edu/teaching-resources/active-collaborative-learning/active-learning) —
which measurably beats passive reading for retention.

The best way we've found to put this to work is by:

- explain key new concepts your code depends on in your own words (building on,
  and refining the initial AI slop explanation)
- connecting the new idea to another idea — and what better idea to connect it to than
  the actual code you're in the process of developing?


The second point has real science behind it: the interplay of _neuroplasticity_ 
and [_associative learning_](https://en.wikipedia.org/wiki/Learning#Associative_learning)  ensures that
associated something you just learned with some other  thing you know about reinforces 
the impression of both things. [Neural] "cells that fire together, wire together"
([Shatz, 1992](https://en.wikipedia.org/wiki/Carla_J._Shatz)). We explore it further below.


## Case study: linking backgrounders to code

Here's an example from some webpack plugin-in code that our 
founder wrote when he was just starting to learn about webpack:

[`gas-demodulify-plugin`](https://github.com/doikayt/gas-demodulify-plugin)'s design
doc and  its associated backgrounder,
[`docs/plugin-design.md`](https://github.com/doikayt/gas-demodulify-plugin/blob/main/docs/plugin-design.md#rationale-for-referencing-webpacks-internal-runtimespec),
walks through *why* the plugin needs to reach into Webpack's internal `RuntimeSpec`
type — and then just links straight down to the file that does it:

>We pull out the RuntimeSpec via entry.runtime, which we type
>initially as 'unknown' (since there is no published guarantee we can rely on), but we
>then prove to the type checker that it is compatible with our RuntimeSpec type if it passes the guard
>[assertRuntimeSpec](https://github.com/datalackey/gas-demodulify-plugin/blob/bfe9372eb7133b0edb17f26d8c9441d86af90ab6/src/plugin/code-emission/CodeEmitter.ts#L251)


And the code links back. Sitting right on the `WebpackRuntimeSpec` type in
[`CodeEmitter.ts`](https://github.com/doikayt/gas-demodulify-plugin/blob/main/src/plugin/code-emission/CodeEmitter.ts)
is a doc comment pointing at the exact section of the backgrounder that explains why
it exists:

```typescript
/**
 * Webpack's internal structure encoding a runtime specification.
 *
 * See:
 * https://github.com/doikayt/gas-demodulify-plugin/blob/main/docs/plugin-design.md#rationale-for-referencing-webpacks-internal-runtimespec
 */
type WebpackRuntimeSpec = Parameters<import("webpack").CodeGenerationResults["get"]>[1];
```

Notice two things here. First, two different link styles for two different jobs: a
plain relative link when pointing at a whole file that isn't going anywhere, and a
commit-pinned permalink down to exact line numbers when the claim is precise enough
that a refactor could make it stale. Second, the backgrounder doesn't try to explain
everything itself — it says outright that the *why* lives in the doc and the *precise
invariants* live in the source file's own comments. One altitude per document,
cross-linked, so you can start reading from either end and still land in the same
place.

## Other Strategies to More Effectively Leverage AI

- Not accepting AI's first output without really understanding is a good first step. A
  follow-on useful practice is pushing the AI for alternative solutions once you have
  one in hand. Sometimes it's useful to ask _another_ AI for the alternative: LLMs
  show a "pronounced choice-supportive bias... resulting in a marked resistance to
  change their mind" once they've committed to an answer
  ([Kumaran et al., 2025](https://arxiv.org/abs/2507.03120)).
- Link the backgrounder to the code it explains, in both directions — the way
  `plugin-design.md` and `CodeEmitter.ts` do above.
- Use AI-assisted review to regularly verify (maybe by setting up a quality gate in CI) that 
  your docs, tests and implementation are all consistent.
-  If you had to stop and work something out — even something small — ask yourself:
   would a colleague hit this same wall? If yes, leave a marker before moving on: a doc,
   a comment linking to the doc, or both. Assume others will retrace your steps, and make
   sure there's a trail for them to follow. AI can usually generate reasonable versions of such
   things from current context.
