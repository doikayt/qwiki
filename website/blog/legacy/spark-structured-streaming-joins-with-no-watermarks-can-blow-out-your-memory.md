---
title: "Spark Structured Streaming Joins With No Watermarks Can Blow Out Your Memory"
date: 2019-08-23
source: http://datalackey.com/2019/08/23/spark-structured-streaming-joins-with-no-watermarks-can-blow-out-your-memory/
---

![](/blog/images/monkey-explosion.png)

As I learn more about Spark Structured Streaming I have been diving into
the posts on Bartosz Konieczny's excellent \@waitingforcode blog. One
entry from a while back included a unit test that illustrates how not
adding watermarks to either or both sides of two joined streams can
cause old data to pile up in memory as Spark waits for new data that can
potentially match the join key of previously-seen records. Bartosz
presents this unit test
[here](https://www.waitingforcode.com/apache-spark-structured-streaming/inner-joins-streams-apache-spark-structured-streaming/read#streaming_inner_joins)
and I've reproduced the code below with some additional comments.

The key concept underlying this unit test is that records are added
roughly every second to two streams,   *mainEventsStream* and
  *joinedEventsStream*. Each time through loop iteration *"i"* we add
*key\${i}* to both *mainEventsStream* and   *joinedEventsStream* (these
adds occur with very little time gap between them, and are shown in the
red and blue timelines, respectively, in the diagram below), and we also
add *key\${i-10}* (shown in green in the same diagram) to
*joinedEventsStream*. The test introduces a sleep so that *key\${i-10}*
arrives on *joinedEventsStream* 1 second before *key\${i}* hits
*mainEventsStream* and *joinedEventsStream*. Roughly 10 seconds after
*key\${i}* hits *joinedEventsStream* on the blue timeline this key will
be added again to *joinedEventsStream*, per the green timeline (showing
the 10 second lag.)

![](/blog/images/timelineForStreamingJoin-1-1024x194.png)

Note what happens at time t-10: the record for *k\${0}* on
*mainEventsStream* has previously matched the corresponding 'non-lagged'
*k\${0}* record that was added to *joinedEventsStream* per the blue
timeline at the end of t-0. At t-10 the record for *k\${0}* on
*mainEventsStream* will also match the 'lagged-by-10' *k\${0}* record
added to *joinedEventsStream* on the green timeline (at t-10.) So there
there will be two *JoinResults* for *k\${0}*, and the timestamps between
these records will differ by between 9 and 10 seconds. This is validated
by the section of the unit test code commented as *// validate the two
join results differ by between 9 and 10 seconds.*

So we see that the record for *k\${0}* was kept hanging around in the
buffer for *mainEventsStream* until the second match with
*joinedEventsStream*. In fact there is no reason this *k\${0}* record
(and all other records) will ever be cleared, because Spark has no idea
whether or not a third matching record will arrive on
*joinedEventsStream*. This is why we need watermarks in Spark Structured
Streaming: to let Spark know when this old data can be discarded.
