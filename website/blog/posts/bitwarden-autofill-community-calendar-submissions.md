---
title: "Automating Repetitive Form Fills with Bitwarden, Lastpass and Roboform"
date: 2026-07-27
tags: [palestine, activism, privacy, android, foss]
---

![A cat typing at a desk with three monitors, each showing a different login screen](/blog/images/hero-cat-many-logins.jpg)

Filling out the same web contact form for the nine millionth time has to rate as
one of the most annoying wastes of time known to humankind. 
Now imagine your time wastage if -- as a volunteer at some shoestring
budget organization -- you were responsible for submitting 
_weekly_ recurring events to various community calendars. 
Some calendars natively support submission of auto-recurring events, but in many cases you 
will be stuck entering the same tedious set of field values every seven days. 
That's exactly the kind of workflow inefficiency we recently helped our friends 
at [VigilForGaza](https://www.instagram.com/vigil4gaza/?hl=en) resolve.


The full solution we propose leverages two tools:
- [Bitwarden](https://bitwarden.com/) (BW) -- an open-source credentials
  vault and bare-bones forms fill tool with a CLI
- [RoboForm](https://www.roboform.com/) -- a CLI-less closed-source
  password manager with rich forms fill capabilities

As we will explain below, **for the simplest, lowest requirement scenarios**
it might make sense for you to skip the BW explanations 
and how-to sections and **just focus on Roboform.**



## Why Not Just One Tool ?
 
  Prior to investigating how to automate recurring calendar-event
  submissions, we had become major fans of BW. Firstly, it's open source which 
  is much preferred for any security tool, since that keeps it open to audit and
  review (but do check the info in [[2]](#2-security-track-record) for more details.)
  Second, it's free -- even across multiple devices, and it's 
  equipped with CLI access to their credentials vault.  We lean on that
  CLI constantly for scripting machine and environment setup -- at which point one 
  needs secure access to ssh keys, access tokens, and the like.

  It would have been theoretically possible for us to get BW working as a
  forms-fill tool too, but like the very first password manager we tried --
  LastPass (_not_ free across multiple devices, and _not_ open source) -- both turned out to be
  pretty rigid about which fields they can actually handle on a repetitive
  submission. Form fill for both products hinges on what is essentially a 
  static mapping of field labels to field values. 
  Both LastPass and Bitwarden provide a mechanism for adding custom fields. 
  But when a form has a field not present in the map, adding such field 
  requires -- in both products -- that you manually hunt through a form's raw
  markup for the right attribute, then hand-enter it into a field
  editor. And you need to repeat this for every new form. RoboForm doesn't share
  that limitation -- see the appendix for why
  [[1]](#1-why-not-just-lastpass-or-bitwarden).

Since your requirements might not include CLI capabilities and a bias toward open 
source, we will begin our how-to sections with a focus 
on Roboform set-up and usage on desktops using Chrome.  We then walk through BW set-up and usage on 
deskop Chrome (other browsers will likely be quite similar.)  Finally, for 
those who wish to both tools on mobile devices we walk through some of the gymnastics 
one needs to do on Android (apologies to iPhone users -- since that is a completely
closed source ecosystem, we don't really deal with it.)


## HOW-TO #1: RoboForm desktop setup


### Installing the extension

1. In Chrome, click the three-dot menu (upper right), select
   **Extensions**, then **Visit Chrome Web Store**.

![Chrome's Extensions menu, with "Visit Chrome Web Store" highlighted](/blog/images/desktop-bitwarden-open-web-store.png)

2. Search the Chrome Web Store for **RoboForm**.

![Searching the Chrome Web Store for RoboForm](/blog/images/desktop-roboform-search-extension.png)

3. Open the **RoboForm Password Manager** listing and click **Add to
   Chrome**.

![RoboForm Password Manager's Chrome Web Store listing](/blog/images/desktop-roboform-listing.png)

4. Confirm on the permissions prompt by clicking **Add extension**.

![Chrome's "Add extension?" confirmation dialog for RoboForm](/blog/images/desktop-roboform-add-extension-prompt.png)

### Creating an account

5. On first launch, choose **Sign Up** and create an account with your
   org's email and a master password.

![RoboForm's welcome screen, choosing between Log In and Sign Up](/blog/images/desktop-roboform-welcome-login-signup.png)

6. Verify the account with the **One-Time Code by email** option.

![RoboForm's "Confirm it's you" verification step](/blog/images/desktop-roboform-confirm-email.png)

7. RoboForm offers a short video tutorial on first login -- **Skip** is
   fine, everything below covers what you actually need.

![RoboForm's onboarding tutorial prompt, with Skip and Next](/blog/images/desktop-roboform-tutorial-skip.png)

8. Click the puzzle-piece **Extensions** icon in Chrome's toolbar, find
   RoboForm, and click the **pin** icon so it stays visible instead of
   hiding behind the puzzle piece every time.

![Pinning the RoboForm extension from Chrome's extensions menu](/blog/images/desktop-roboform-pin-extension.png)
![RoboForm's icon now pinned in Chrome's toolbar](/blog/images/desktop-roboform-pinned-toolbar.png)

### Saving a form once, recalling it forever

This is the actual payoff. Fill a form out field-by-field the first time, then
teach RoboForm to remember it:

9. With the form filled in, right-click anywhere on the page, open
   **RoboForm Password Manager**, and choose **Save Forms**.

![Right-clicking a filled-out form to reach RoboForm's Save Forms option](/blog/images/desktop-roboform-save-form-menu.png)

   Whatever you typed into the form's fields at this point is what gets
   remembered -- RoboForm snapshots the field values, not just the field
   layout.

![The form's field values, annotated as what RoboForm will recall](/blog/images/desktop-roboform-save-annotated.png)

10. RoboForm asks what to call this saved entry and whether it's a
    **Login** or a **Bookmark** -- pick Login, give it a name you'll
    recognize (the site or form's purpose works well), and click **Save**.

![RoboForm's save dialog, naming the entry and choosing Login](/blog/images/desktop-roboform-save-dialog.png)

11. Next time you're staring down a blank copy of that same form, click on the pinned RoboForm
    icon to the right of the URL entry area. Then select the name of the form fill profile you chose in the previous step.

![RoboForm's Fill Logins panel offering a saved match, ready to click and fill](/blog/images/desktop-roboform-click-to-fill.png)

12. Every field RoboForm remembered snaps back into place 
    (in this example the title of the dialog switches from 'Create..' to 'Edit...' -- nothing to do with form fill.)

![The form's fields refilled automatically from the saved entry](/blog/images/desktop-roboform-fields-filled.png)



So that is all there is to it if you just want to automate form submissions. 

However, if you prefer open source solutions, and if you 
want scriptability, you will want to read on. We next cover installation
of Bitwarden on the desktop, while the section after that will cover the not-so-intuitive steps 
involved in getting BW and Roboform working together on an Android mobile device.


## HOW-TO #2: Bitwarden as your password manager

We've recommended Bitwarden on our [field-guide wiki]({{WIKI_URL}}/index.php/Main_Page)
before as a strong, open-source alternative to LastPass -- see the
appendix [[2]](#2-security-track-record) for how their security track
records actually compare. BW's free tier covers unlimited passwords
synced across unlimited devices. LastPass's
free tier, by contrast, locks you to *one* device type -- desktop or
mobile, not both -- so syncing between your laptop and your mobile device 
requires upgrading to a paid plan.  Multi-device scenario set-up steps are
given below in [Setting it up on Android](#setting-it-up-on-android).) 

In this section we provide steps for setting up an individual account, mapped to 
one credentials vault.  If your org later needs to share
logins across multiple people, Bitwarden scales up to team and even
enterprise tiers; see the appendix
[[3]](#3-shared-vaults-and-sso-for-teams) for what that looks like.

### Setting it up on Desktop

Same order as RoboForm: extension first, account second. Form-filling
happens through the browser extension UI, not the web vault UI.

1. Open Chrome's three-dot **More** menu (top right) → **Extensions** →
   **Visit Chrome Web Store**.

![Chrome's Extensions menu, with "Visit Chrome Web Store" highlighted](/blog/images/desktop-bitwarden-open-web-store.png)

2. Search for **Bitwarden**.

![Searching the Chrome Web Store for Bitwarden](/blog/images/desktop-bitwarden-search-extension.png)

3. Open the **Bitwarden Password Manager** listing and click **Add to
   Chrome**.

![Bitwarden Password Manager's Chrome Web Store listing](/blog/images/desktop-bitwarden-listing.png)

4. Confirm on the permissions prompt by clicking **Add extension**.

<!-- SCREENSHOT NEEDED: Chrome's "Add extension?" confirmation dialog for
     Bitwarden -- same as RoboForm's equivalent step -->

5. Pin it to the toolbar now, before setting up the account -- puzzle-piece
   icon → find Bitwarden → click the pin.

![Pinning the Bitwarden extension from Chrome's extensions menu](/blog/images/desktop-bitwarden-pin-extension.png)

6. Click the newly-pinned Bitwarden icon and choose **Create account**.

![Bitwarden's extension popup, choosing Create account or Log in](/blog/images/desktop-bitwarden-extension-welcome.png)

7. Enter your email address and continue -- Bitwarden emails you a link
   to confirm it's really you before it lets you finish.

![Bitwarden's "Check your email" confirmation step](/blog/images/desktop-bitwarden-check-email.png)

8. Follow that link, then set a strong, unique master password back in the extension.

![Bitwarden's "Set a strong password" step (password fields redacted)](/blog/images/desktop-bitwarden-set-password.png)

9. Turn off Chrome's own **Google Password Manager** before you start
   relying on Bitwarden day to day -- otherwise the two sit side by side
   offering to save and fill the same logins, which means two competing
   "save this password?" popups every time you sign into something, and
   Chrome occasionally filling a field with its own guess a half-second
   before Bitwarden gets to it. Click Chrome's three-dot **More** menu (top
   right) → **Passwords and autofill** → **Google Password Manager** →
   **Settings**, then turn off **Offer to save passwords and passkeys**
   and **Auto sign-in**. (Or skip the menu digging and go straight to
   `chrome://password-manager/settings`.) It's a one-time fix, and much less
   annoying than dismissing Google's popups for the next month.

<!-- SCREENSHOT NEEDED: Google Password Manager settings page showing the
     "Offer to save passwords and passkeys" and "Auto sign-in" toggles -->

10. You'll land on your vault home, empty and ready for your first saved
    logins.

<!-- SCREENSHOT NEEDED: empty vault home, reached via the extension-first
     flow (the old website-flow screenshot no longer matches this path) -->

The same account works everywhere -- once it exists, log into it on
Android with the steps below.

### Setting it up on Android

![Bitwarden listing in the Play Store, ready to install](/blog/images/android-playstore-bitwarden-listing.png)

1. Install **Bitwarden Password Manager** from the Play Store.
2. Log in with the account from the desktop steps above (or create one
   here directly, if you'd rather skip desktop entirely).
3. Set up biometric unlock (fingerprint or face unlock) under
   **Settings → Security → Unlock with biometrics**, so you aren't typing
   your master password every time you need a credential on your phone.

<!-- SCREENSHOT NEEDED: Android Bitwarden app, Settings -> Security ->
     Unlock with biometrics toggle -->

4. Turn on Bitwarden as your Android **autofill service**: **Settings →
   Autofill Service**, select Bitwarden, and confirm.

![Android's Autofill Service picker with Bitwarden selected](/blog/images/android-autofill-service-settings.jpg)

That last step is the important one, and it's easy to skip past. Android's
autofill framework isn't just for logins -- once Bitwarden is registered as
your system autofill provider, it can offer to fill *any* recognized field
across apps and browser tabs, not just username/password pairs. But it's
also the reason we don't just add a second autofill app on top: Android
only allows one default autofill service. Whatever handles your address
and contact-info fields has to work *around* that slot, not compete for it.
That's what HOW-TO #3 sets up.

Everything above treats Bitwarden as a personal password manager -- your
own vault, your own master password. It can also run as shared
infrastructure for a whole team; see the appendix
[[3]](#3-shared-vaults-and-sso-for-teams) if that's relevant to your org.

## HOW-TO #3: RoboForm for addresses, without the Accessibility permission

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
[[1]](#1-why-not-just-lastpass-or-bitwarden) -- see the appendix at the
end for the details.

### One-time setup: create a RoboForm Identity

![Creating a new Identity in RoboForm, with name and email filled in](/blog/images/android-roboform-identity-new-person.jpg)

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

![Chrome's share menu, with RoboForm listed as a share target](/blog/images/android-chrome-share-sheet-roboform.jpg)

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

## HOW-TO #4: The general workflow -- autofill for any form

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

![A real volunteer sign-up form in RoboForm's browser, with fill icons showing next to the recognized Last Name and ZIP code fields](/blog/images/android-roboform-form-midfill.jpg)

Open the submission form in Chrome, share it to RoboForm, fill from your
saved Identity, and switch back -- the same eight-step loop from HOW-TO #3,
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

## Appendix

### [1] Why Not Just LastPass or Bitwarden

LastPass, Bitwarden, and RoboForm all solve autofill the same basic way
under the hood: a structured profile maps form-field labels to values.
The real difference comes down to two things:

- **Static vs. dynamic mapping.** LastPass and Bitwarden reuse one
  profile across every form. RoboForm effectively generates a fresh
  mapping per form.
- **What happens when a field doesn't match** anything already in the
  profile.

**LastPass and Bitwarden: one static profile, matched by guesswork.**
You save a structured profile -- BW calls it an Identity, LastPass calls
it an Address -- essentially a dictionary of name/address/phone/email
keyed by label, matched against every form's inputs. Neither tool fully
gives up on a field that doesn't match: LastPass calls its manual
fallback a Form Field, Bitwarden calls it a custom field. But "fallback"
undersells how manual it is -- you're the one figuring out which HTML
attribute (`id`, `name`, `aria-label`, `placeholder`) the page actually
keys on, one field at a time, for every new form your org submits to.
Bitwarden's tooling makes that lookup a bit less painful than LastPass's,
but the work is still yours to do.

**RoboForm: a mapping generated per form.** Instead of matching one
static profile against markup and hoping, RoboForm also lets you
*teach* it: fill a form out once by hand, and its AutoSave feature
notices and remembers exactly what you typed into each field, for that
specific form, going forward. No markup-hunting, no manual mapping --
just fill it once and it sticks.

We didn't know RoboForm existed when we started this evaluation, though.
We tested Bitwarden and LastPass head-to-head on the actual forms we
needed to submit -- CalendarWiz and similar WordPress/Drupal-style
calendar plugins -- and hit something worse than rigidity: on any form
where a field's `id` and `name` attributes differ -- not rare on modern
component-framework-built forms, where tools like React generate `id`s
such as `:r3:` that carry no relation to the field's actual `name` --
both tools' autofill either filled the wrong field or silently skipped
it. No error, no warning -- the form still submitted, just with
corrupted data.

So we built
[form-fill-bookmarklet](https://github.com/datalackey/fill-form-bookmarklet):
a zero-dependency browser bookmarklet that matches fields by `name` --
the attribute HTML forms actually submit under -- instead of `id`. Fill
a form out once, click the bookmarklet to capture it as a small JSON
template, save the JSON. On the next submission, edit just the value
that changes (usually the date), copy the JSON to the clipboard, and
invoke the bookmarklet again to refill the form with every value,
including the one you just changed. Three days of work, and a cool tool
-- right up until we evaluated RoboForm and realized it was completely
superfluous.

We still maintain the repo, for pedagogical purposes -- study the code
if you want a sense of how RoboForm might work internally. RoboForm
itself is closed source, so you'll never actually know if we guessed
right.

### [2] Security Track Record

The table below covers every publicly reported incident we found for the
three tools under evaluation. We're upfront fans of open source, so it's worth sitting
with the fact that Bitwarden -- open source -- has an incident on this
list, while RoboForm -- closed source -- doesn't. That's not actually a
contradiction: supply-chain attacks target how software gets built and
published, not whether its source is public, and closed-source software
isn't immune to them, it's just less likely to get caught. What open
source bought here was a fast, independently verifiable response -- the
compromised package was live for about 90 minutes, and anyone could
check exactly what it did rather than take Bitwarden's word for it.

| Tool | Reported incidents | Vault data exposed? |
|---|---|---|
| LastPass | 2022: attacker used data stolen from a compromised employee's home computer to access a cloud storage backup containing encrypted customer vaults, plus some source code. | Encrypted vaults were taken (not decrypted at the time), along with unencrypted metadata like URLs. |
| Bitwarden | 2026: a malicious version of Bitwarden's own CLI was briefly live on npm (~90 minutes) as part of a broader supply-chain attack. 2023: a disclosed flaw allowed iframes to access autofilled credentials, since fixed. | No end-user vault data reported accessed in either incident. |
| RoboForm | None found. | N/A |

Regardless of which tool you pick,
make sure to use a strong, unique master password and turn on two-factor
authentication. 


### [3] Shared Vaults and SSO for Teams


Bitwarden can run as shared infrastructure for a whole team, not just a
personal vault.

**Shared org vaults.** If more than one person on your team submits
events, shares accounts, or needs the same set of logins, set up a
Bitwarden **Organization** ($4/user/month on the Teams plan) instead of
emailing passwords around or maintaining a shared spreadsheet. An
organization holds the same item types a personal vault does -- Logins,
Secure Notes, Cards, Identities -- just organized into **Collections**
that you can scope to specific members or groups. Put the calendar-
submission login in a collection your events team can see, and keep a
treasurer-only collection for anything payment-related. When someone
leaves the team, you revoke their access to the collection or the whole
organization instead of rotating every password by hand.

**Single sign-on.** On the Enterprise tier, Bitwarden supports logging
into the vault itself via your org's existing identity provider (Okta,
Google Workspace, Azure AD/Entra ID, and others, over SAML or OIDC)
instead of a separate Bitwarden master password. That's real
infrastructure consolidation -- one login system to manage instead of
two, and revoking someone's org account revokes their vault access in the
same step. For most shoestring-budget orgs this is aspirational rather
than immediately useful: it's an Enterprise-tier feature, and it assumes
you already have an identity provider in place. Worth knowing it exists
for the day your org outgrows a spreadsheet of names and passwords.  

