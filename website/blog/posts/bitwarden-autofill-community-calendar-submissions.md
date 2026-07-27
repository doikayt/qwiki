---
title: "Bitwarden, Autofill, and the Tedium of Submitting to Community Calendars (Work in Progress)"
date: 2026-07-27
tags: [palestine, activism, privacy, android, foss]
---

<!-- IMAGE: hero image goes here -->

We build organizing tools for the activist community here at Doikayt --
though honestly, anyone's welcome to borrow them, just use them for nice
things, please. This particular one started with a friend of ours who
organizes a weekly action. Same day, same time, every week -- which means
every week, they're back on five or six different community calendars,
re-submitting the same notification: the library's calendar, a mutual aid
coalition's shared calendar, a tenant union's Mobilize page, an
Indivisible chapter's Google Form. The event details are identical, down
to the punctuation. The only thing that ever changes is the date. It's
pure time sink, repeated on a schedule, usually from a phone, standing
somewhere with five minutes before they need to be elsewhere.

Turns out this isn't just an activist problem, either -- ask around and
you'll find the "normies" dealing with their own version of it: job
applicants retyping the same name, address, and work history into a dozen
different applicant-tracking systems, apartment hunters filling out a
near-identical rental application on every listing site, freelancers
re-entering their business info into every new client's intake form,
parents drowning in school and camp registration forms. Anyone who fills
out a lot of forms online has this exact tedium. Our friend's weekly
action is just the sharpest version of it -- constant, on a schedule, on a
phone -- but the fix below is genuinely general-purpose.

None of that tedium is *necessary*. Most of it is credential and
contact-info re-entry that the right pair of apps already knows how to do
for you -- you just haven't pointed them at the problem yet. This post
walks through setting up Bitwarden on Android for password management, and
pairing it with RoboForm for the address and contact-info fields that show
up in *any* form -- calendar submissions, donation pages, RSVP forms,
volunteer sign-ups, permit and comment forms, vendor checkout, all of it.

Why two apps instead of one? Android only lets a single app be the system's
default autofill service at a time, and the obvious way to get a second app
autofilling forms -- Accessibility permission -- hands that app system-wide
screen-reading access. We wanted Bitwarden to keep owning passwords
*without* handing a second app that level of access just to autofill an
address field. The setup below is the workaround: RoboForm fills forms
through its own in-app browser instead of through Accessibility, so it
never needs to touch Bitwarden's turf or ask for anything invasive.

## Who this is for

You're a "power user" volunteer or staff technologist at a movement-aligned
org -- comfortable installing an app and poking around in its settings, but
not necessarily an Android developer. You (or your org) already juggle
several logins and would rather not keep them in a notes app, a sticky
note, or "the password everyone uses." And you or your teammates are the
ones stuck submitting the same event to five calendars a week.

## Part 1: Bitwarden as your team's password manager

We've recommended Bitwarden on our field-guide wiki before as a strong,
open-source alternative to LastPass -- especially given
LastPass's 2022 breach, where encrypted customer vaults were stolen. The
free tier covers unlimited passwords across unlimited devices for
individuals, which is often all a shoestring-budget org needs. Organizations
that outgrow the free tier land at $4/user/month for the Teams plan, well
below LastPass's $7/user/month.

### Setting it up on Android

<!-- IMAGE: Play Store listing / install screen -->

1. Install **Bitwarden Password Manager** from the Play Store.
2. Log in (or create a free account at
   [bitwarden.com](https://bitwarden.com) first, if you don't have one).
3. Set up biometric unlock (fingerprint or face unlock) under
   **Settings → Security → Unlock with biometrics**, so you aren't typing
   your master password every time you need a credential on your phone.
4. Turn on Bitwarden as your Android **autofill service**: **Settings →
   Autofill Service**, select Bitwarden, and confirm.

<!-- IMAGE: Autofill service settings screen -->

That last step is the important one, and it's easy to skip past. Android's
autofill framework isn't just for logins -- once Bitwarden is registered as
your system autofill provider, it can offer to fill *any* recognized field
across apps and browser tabs, not just username/password pairs. But it's
also the reason we don't just add a second autofill app on top: Android
only allows one default autofill service. Whatever handles your address
and contact-info fields has to work *around* that slot, not compete for it.
That's what part 2 sets up.

### Shared org vaults

If more than one person on your team submits events, shares accounts, or
needs the same set of logins, set up a Bitwarden **Organization** and put
shared items in a collection rather than emailing passwords around or
maintaining a shared spreadsheet. When someone leaves the team, you revoke
their access to the organization instead of rotating every password by
hand.

## Part 2: RoboForm for addresses, without the Accessibility permission

RoboForm has its own concept of an **Identity** -- a saved profile of name,
address, city/state/zip, phone, and email -- the same idea as a Bitwarden
Identity item, just living in a separate app. The classic way RoboForm
offers to fill a form is a floating "RF" button that hovers over whatever
app you're in, but that button only works if you grant RoboForm the
**Accessibility** permission, and Accessibility is all-or-nothing: you
can't scope it to "just Chrome" or "just form fields." It's the same class
of system-wide access screen readers use, and it's a lot of trust to hand a
second app when Bitwarden already covers your actual credentials. We
decided against it.

The fix RoboForm supports instead: don't let it hook into other apps at
all. Send the page *to* RoboForm, fill it inside RoboForm's own built-in
browser, then switch back. No Accessibility permission, no conflict with
Bitwarden's autofill slot, no floating button watching your screen.

RoboForm wasn't the only candidate we looked at for this job -- LastPass
has its own form-fill feature too, and a lot of orgs already have it
sitting around from before switching to Bitwarden. We ruled it out for a
more fundamental reason than the Accessibility question above
[[1]](#1-why-not-lastpass) -- see the appendix at the end for the details.

### One-time setup: create a RoboForm Identity

<!-- IMAGE: Adding a new Identity in RoboForm -->

1. Open the RoboForm app.
2. Tap the **Identities** tab at the bottom.
3. Tap the **+** (Add) button.
4. Fill in your org's details: full name / org name, address, city, state,
   ZIP, phone, and email.
5. Save the profile -- name it something you'll recognize, like "Org" or
   the group's name.

If several people submit events on your org's behalf, treat this the same
way you'd treat a shared Bitwarden item: settle on one canonical version of
your org's address and contact info, so everyone is filling from the same
source instead of five slightly different typed-out versions.

### Every time you need to fill a form: the Share method

<!-- IMAGE: Chrome share sheet with RoboForm listed -->

1. Open Chrome and navigate to the form -- a calendar submission page, a
   checkout form, whatever needs your org's info.
2. Tap Chrome's **3-dot menu** (top right).
3. Tap **Share**.
4. From the share sheet, select **RoboForm**.
5. The page opens inside RoboForm's own built-in browser.
6. Tap RoboForm's fill icon and select your saved Identity.
7. RoboForm fills the form -- name, address, ZIP, and whatever else the
   page recognizes.
8. Tap back (or use Recent Apps) to return to Chrome and submit.

It's a few more taps than a one-tap autofill suggestion -- roughly five
interactions (menu → share → select RoboForm → fill → return) versus the
two a floating button would take. That gap is the actual price of not
handing a second app screen-wide access, and for most people submitting a
handful of forms a week, it's a trade worth making.

### If you'd already turned Accessibility on for RoboForm

If you tried the floating-button approach before landing on the Share
method, turn Accessibility back off:

- **In RoboForm:** Settings → Integration → toggle **Accessibility
  Autofill** off, or
- **In Android:** Settings → Accessibility → Installed apps → RoboForm →
  toggle the main switch off.

Either way, this doesn't touch the Share method above -- that path never
used Accessibility in the first place, so turning it off changes nothing
about how form-filling works, only what permission RoboForm is holding in
the background.

## Part 3: The general workflow -- autofill for any form

This is the actual payoff, and it's bigger than calendars. Once you've got
a saved RoboForm Identity and the Share-method habit down, *any* form
asking for a subset of name / organization / email / phone / address goes
from a re-typing exercise to five taps instead of forty. Community calendar
submissions are the example we keep coming back to because you hit them
over and over, but the exact same workflow covers:

- donation and fundraising platform checkout forms
- event RSVP and volunteer sign-up forms
- permit applications and public-comment forms
- petition sites
- vendor and supply-order checkout on any e-commerce site
- literally any "contact us" or intake form your org fills out repeatedly

Read what follows as a template, not a one-off recipe: wherever a form asks
for that same handful of fields, this is the move.

Community calendar forms -- whether it's a library's WordPress plugin, a
Google Form, an Eventbrite listing, or a Mobilize event page -- are a good
worked example because they're so consistent about *which* fields they
want. That's precisely the shape of a RoboForm Identity.

<!-- IMAGE: A calendar submission form mid-fill inside RoboForm's browser -->

Open the submission form in Chrome, share it to RoboForm, fill from your
saved Identity, and switch back -- the same eight-step loop from part 2,
just applied to whatever form is in front of you this time, instead of you
thumb-typing "Doikayt Mobilization Labs, 123 Somewhere St..." for the fifth
time that week.

A few notes from actually doing this in the field:

- **It's an app switch, not a one-tap suggestion.** The Share method costs
  more taps than a floating autofill button would -- that's the deliberate
  trade for keeping Accessibility off. If that gap starts to feel like real
  friction on forms you fill constantly, that's a sign to weigh it
  consciously rather than reach for Accessibility as a shortcut.
- **Not every form recognizes every field.** Older or hand-rolled forms
  sometimes only pick up part of the Identity inside RoboForm's browser --
  you'll still save time on the fields that *do* match, and can fill the
  rest by hand.
- **Double-check what actually landed.** Autofill occasionally maps a field
  wrong (city into "organization," for instance) on a poorly-labeled form.
  Skim the form before submitting, the same way you'd proofread anything
  else going out under your org's name.
- **Keep the Identity accurate.** If your org changes its contact email or
  moves, update the one Identity -- everyone who fills from it gets the
  correction automatically, instead of some submissions carrying a stale
  address because a volunteer had an old one saved locally.
- **Bitwarden doesn't need to know about any of this.** It stays the
  default autofill service, quietly handling logins the whole time. The two
  apps never fight over the same job.

## Why this is worth the ten minutes of setup

None of this is exotic -- it's the intended use of features most people
never open, split across two apps on purpose. The payoff compounds with
every recurring form, not just calendar submissions: less time spent
hunched over a phone keyboard re-entering the same nine fields, fewer typos
that get an event bounced or a donation misrouted, and one canonical
source of truth for your org's public-facing info instead of it living in
five different volunteers' muscle memory. Set up the Identity once, and
every form afterward -- calendars, donation pages, permits, sign-up sheets,
whatever your org fills out on repeat -- gets faster, at the cost of a
five-tap app switch instead of one tap.

That trade-off -- a few extra taps in exchange for not handing a second app
system-wide screen access -- is the same instinct behind everything else in
this series: own your tools, understand what permission you're actually
granting and why, and don't trade privacy for convenience by default just
because the shortcut is sitting right there. It's a small piece of the
same broader project we keep coming back to -- de-Big-Tech-ify the
workflow, own your data, and spend the time you save on the organizing
itself.

<!-- IMAGE: closing image -->

---

## [1] Why not LastPass

LastPass's form-fill engine leans heavily on matching a form field's `id`
attribute to guess what kind of data belongs there. That's the wrong
attribute to key on. `id` exists for CSS and JavaScript to hook into a
specific element -- nothing in the HTML spec requires it to describe what
the field *is*, and in practice it often doesn't: modern component
frameworks (React's `useId()`, Formik, plenty of others) routinely
generate `id`s like `:r3:` or `field-14` that carry no semantic meaning at
all.

The `name` attribute is a much more reliable signal, because it's what
actually gets sent to the server when the form submits -- a backend has to
be able to make sense of that payload, so `name="email"` or
`name="shipping_zip"` stays meaningful even on a form whose `id`s are pure
framework noise. And the real spec-blessed answer, one level better than
either: the `autocomplete` attribute -- `autocomplete="email"`,
`autocomplete="postal-code"` -- which is what Android's own autofill
framework prioritizes. `name`-pattern matching is the fallback for forms
that skip `autocomplete` entirely; `id`-matching is a fallback below even
that.

The practical result: on a lot of the newer, component-framework-built
forms you'll actually run into -- which is most of them at this point --
LastPass's form-fill quietly whiffs on fields it should be able to
recognize. That's not a permissions trade-off like the Accessibility
question in Part 2; it's just a less reliable tool for the specific job of
reading a form and knowing what goes where.
