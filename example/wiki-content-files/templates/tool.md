---
title: "Template:Tool"
categories:
redirect_from: []
raw: true
---
<noinclude>
{{#cargo_declare:_table=tool
|company=String
|tagline=String
|protocol=String
|url=String
|pricing=String
|amount=String
|source_license=String
|hosting=String
|description=String
|usage_notes=String
|rejected_alternatives=String
|category=String
}}
</noinclude>
{{#cargo_store:_table=tool
|company={{{company|}}}
|tagline={{{tagline|}}}
|protocol={{{protocol|}}}
|url={{{url|}}}
|pricing={{{pricing|}}}
|amount={{{amount|}}}
|source_license={{{source_license|}}}
|hosting={{{hosting|}}}
|description={{{description|}}}
|usage_notes={{{usage_notes|}}}
|rejected_alternatives={{{rejected_alternatives|}}}
|category={{{category|}}}
}}
{{DISPLAYTITLE:{{{company|}}}}}
''{{{tagline|}}}''

{| class="wikitable"
! colspan="2" | Overview
|-
! Company || {{{company|}}}
|-
! URL || [{{{protocol|}}}://{{{url|}}} {{{url|}}}]
|-
! Pricing || {{{pricing|}}}{{#if:{{{amount|}}}| — {{{amount|}}}|}}
|-
! License || {{{source_license|}}}
|-
! Hosting || {{{hosting|}}}
|}

{{{description|}}}

== Usage Notes ==
{{{usage_notes|}}}

== Rejected Alternatives ==
{{{rejected_alternatives|}}}

{{#arraymap:{{{category|}}}|,|x|[[Category:x]]|}}
[[Category:Tools]]
