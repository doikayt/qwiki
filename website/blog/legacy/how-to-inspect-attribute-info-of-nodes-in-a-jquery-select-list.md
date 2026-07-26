---
title: "How To Inspect Attribute Info of Nodes in a JQuery Select List"
date: 2019-04-09
source: http://datalackey.com/2019/04/09/how-to-inspect-attribute-info-of-nodes-in-a-jquery-select-list/
---

![](/blog/images/2monkeys-1.jpeg)

I haven't done front-end programming for a while, but assuming JQuery is
not yet dead, it might be worth resurrecting this post from my old blog
for the benefit of those interested in dumping the content of nodes in a
JQuery select list. I was never able to find an 'official' way to do
this kind of debugging --- but that doesn't mean there isn't one. This
post just presents the technique that I ended up using, which boils down
to using good old fashioned DOM functions to figure out a node's name
and attributes.

The code below uses a JQuery select expression to grab all nodes that
have an "id" attribute, whose "selected" attribute is "true", and whose
name ends in "man". We iterate through those nodes (actually only one is
found), and dump out any inner content using DOM functions.

Upon saving this code snippet to a local file system and opening in your
browser you should see the pop-up message 'got a node' with the
attributes of the found node enumerated. One caveat: if you see no
pop-up alert, this might be due to link rot: the JQuery reference from
the "text/javascript" might have gotten stale. In this case you'll find
an error in the Javascript console reading something like: "\$ is not
defined" (that means JQuery is not available.) The fix would be to
update the link reference to correctly point to the latest JQuery
distribution.

``` wp-block-code
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
                    "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
 <script type="text/javascript"
        src="http://jqueryui.com/latest/jquery-1.3.2.js"></script>

  <script>
  $(document).ready(function(){

 var gatherAttributes = function(attributes) {
        var attribs = ""
        if (attributes) {
            for (var i = 0; i < attributes.length; i++) {
                attribs = attribs + "| "
                    + attributes[i].nodeName + "=" +
                        attributes[i].nodeValue
            }

        }
        return attribs

    }

    var dumpNode = function(node) {
        alert("got a node: " + node.nodeName + " with attributes:  " +
              gatherAttributes(node.attributes)  +
              " /  and inner content = " + $(node).html());
    }

    alert("HI");

    $("input[selected=true][id][name$='man']").each (
             function() {
                 alert("got a match " + $(this).val());
                dumpNode(this);

  });

  });

  </script>

</head>
<body>
  <input id="man-news" name="man-news" >        foo1</input>
  <input name="milkman" >                       foo2</input>
  <input id="fetterman" name="new-fetterman" >  foo3</input>
  <input selected="true" id="letterman" name="new-letterman" >  foo3</input>
  <input name="newmilk" >                       foo4</input>
</body>
</html>
```
