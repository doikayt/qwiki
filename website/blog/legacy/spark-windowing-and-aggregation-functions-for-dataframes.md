---
title: "Spark Windowing and Aggregation Functions for DataFrames"
date: 2019-06-03
source: http://datalackey.com/2019/06/03/spark-windowing-and-aggregation-functions-for-dataframes/
---

![](/blog/images/monkey-window-8.jpeg)

This post provides example usage of the Spark "lag" windowing function
with a full code example of how "lag" can be used to find gaps in dates.
Windowing and aggregate functions are similar in that each works on some
kind of grouping criteria. The difference is that with aggregates Spark
generates a unique value for each group, based on some calculation like
computing the maximum value (within group) of some column. Windowing
functions use grouping to compute a value for *each record* in the
group.

For example, lets say you were a sports ball statistician that needs to
calculate:

-   for each team in league: the average number of goals scored by all
    players on that team
-   for each player on each team: an ordering of players by top scorer,
    and for each player 'P', the delta between 'P' and the top scorer.

You could generate the first stat using groupBy and the 'average'
aggregate function. Note that for each (by team) group,
you get one value.

``` wp-block-code
Input 
-----

Team    Player      Goals
----    ------      -----

Bears   
        Joe         4  \
        Bob         3    ->   (4+3+2) /3 = 3
        Mike        2  /

Sharks
        Lou         2  \                   
        Pancho      4    ->   (2+4+0) /3 = 2
        Tim         0  /

Output
------

Team    Average
-----   -------
Bears   3
Sharks  2
```

For the second stat (the delta) you would need the team max number of
goals, and you need to subtract EACH individual player's goals from that
max.

So instead of ending up with two records (one for each team) that convey
the max (per team) as done above, what you need to do here is calculate
the max, m(T), for each team T (teamMax, in the snippet below) and then
inject this max into the record corresponding to EACH member of team T.
You would then compute the "delta" for each player on a given team T as
the max for team T minus that player's goals scored.

The associated code would look something like this:

``` wp-block-code
  spark.read.csv(...path...)
       .withColumn( "teamMax", max($"goals") .
          over(Window.partitionBy("team")))
       .withColumn( "delta", $"teamMax" - $"goals")
       .orderBy($"team", $"goals")
```

The full code example goes into more details of the usage. But
conceptually, your inputs and outputs would look something like the
following:

``` wp-block-code
    Input 
    -----

    Team    Player      Goals                       
    ----    ------      -----

    Bears   
            Joe         4  \
            Bob         3    ->   max(4,3,2) = 4
            Mike        2  /

    Sharks
            Lou         4  \                   
            Pancho      2    ->   max(2,4,0) = 4
            Tim         0  /

    Output
    ------

    Team    Player      Goals   Delta
    -----   -------     -----   -----
    Bears   Joe         4       0       <--- We have 3 values 
    Bears   Bob         3       1       <--- for each team.  
    Bears   Mike        2       2       <--- One per player, 
    Sharks  Lou         4       0       <--- not one value  
    Sharks  Pancho      2       2       <--- for each team, 
    Sharks  Tim         0       4       <--- as in previous example
```

## Full Code Example
Now let's look at a runnable example that makes use of the 'lag'
function. For this one, let's imagine we are managing our sports ball
team and we need each player to regularly certify for non-use of
anabolic steroids. For a given auditing period we will give any
individual player a pass for one lapse (defined by an interval where a
previous non-use certification has expired and a new certification has
not entered into effect.) Two or more lapses, and *Yooouuuu're Out* ! We
give the complete code listing below, followed by a discussion.

``` wp-block-code
package org


import java.io.PrintWriter

import org.apache.spark.SparkConf
import org.apache.spark.sql._
import org.apache.spark.sql.expressions.Window
import org.apache.spark.sql.types._



object DateDiffWithLagExample extends App {

  lazy val sparkConf =
    new SparkConf() .setAppName("SparkySpark") .setMaster("local[*]")
  lazy val sparkSession =
    SparkSession .builder() .config(sparkConf).getOrCreate()
  val datafile = "/tmp/spark.lag.demo.txt"

  import DemoDataSetup._
  import org.apache.spark.sql.functions._
  import sparkSession.implicits._

  sparkSession.sparkContext.setLogLevel("ERROR")

  val schema = StructType(
    List(
      StructField(
        "certification_number", IntegerType, false),
      StructField(
        "player_id", IntegerType, false),
      StructField(
        "certification_start_date_as_string", StringType, false),
      StructField(
        "expiration_date_as_string", StringType, false)
    )
  )


  writeDemoDataToFile(datafile)

  val df =
    sparkSession.
      read.format("csv").schema(schema).load(datafile)
  df.show()

  val window =
    Window.partitionBy("player_id")
      .orderBy("expiration_date")
  val identifyLapsesDF = df
    .withColumn(
      "expiration_date",
      to_date($"expiration_date_as_string", "yyyy+MM-dd"))
    .withColumn(
      "certification_start_date",
      to_date($"certification_start_date_as_string", "yyyy+MM-dd"))
    .withColumn(
      "expiration_date_of_previous_as_string",
      lag($"expiration_date_as_string", 1, "9999+01-01" )
        .over(window))
    .withColumn(
      "expiration_date_of_previous",
      to_date($"expiration_date_of_previous_as_string", "yyyy+MM-dd"))
    .withColumn(
      "days_lapsed",
      datediff(
        $"certification_start_date",
        $"expiration_date_of_previous"))
    .withColumn(
      "is_lapsed",
      when(col("days_lapsed") > 0, 1) .otherwise(0))

  identifyLapsesDF.printSchema()
  identifyLapsesDF.show()

  val identifyLapsesOverThreshold =
    identifyLapsesDF.
      groupBy("player_id").
      sum("is_lapsed").where("sum(is_lapsed) > 1")
  identifyLapsesOverThreshold.show()
}


object DemoDataSetup {
  def writeDemoDataToFile(filename: String): PrintWriter = {
    val data =
      """
        |12384,1,2018+08-10,2018+12-10
        |83294,1,2017+06-03,2017+10-03
        |98234,1,2016+04-08,2016+08-08
        |24903,2,2018+05-08,2018+07-08
        |32843,2,2017+04-06,2018+04-06
        |09283,2,2016+04-07,2017+04-07
      """.stripMargin

    // one liner to write string:  not exception or encoding safe. for demo/testing only
    new PrintWriter(filename) { write(data); close }
  }
}
```

We begin by loading the input data below (only two players) via the\
*DemoDataSetup.writeDemoDataToFile* method.

``` wp-block-preformatted
 +-------+------+------------+-------------+
 |cert_id|player|cert_start  |cert_expires |
 +-------+------+------------+-------------+
 |  12384|     1|  2018+08-10|   2018+12-10|
 |  83294|     1|  2017+06-03|   2017+10-03|
 |  98234|     1|  2016+04-08|   2016+08-08|
 |  24903|     2|  2018+05-08|   2018+07-08|
 |  32843|     2|  2017+04-06|   2018+04-06|
 |   9283|     2|  2016+04-07|   2017+04-07|
 +-------+----+------------+---------------+
```

Next we construct three DataFrames. The first reads in the data (using a
whacky non-standard date format just for kicks.) The second uses the
window definition below

``` wp-block-code
  val window = 
     Window.partitionBy("player_id") .orderBy("expiration_date")
```

which groups records by player id, and orders records from earliest
certification to latest. For each record this expression

``` wp-block-code
   .withColumn(
      "expiration_date_of_previous_as_string",
      lag($"expiration_date_as_string", 1, "9999+01-01" )
        .over(window)
```

will ensure that for any given record listing the start date of a
certification period we get the expiration date of the previous period.
We use 'datediff' to calculate the days elapsed between the expiration
of the previous cert and the effective start date of the cert for the
current record. Then we use *when/otherwise* to mark a given player as
*is_lapsed* if the days elapsed calculation between the current record's
start date and the previous record's end date yielded a number greater
than zero.

Finally, we compute a third DataFrame -- *identifyLapsesOverThreshold*
-- which this time uses an *aggregation * (as opposed to *windowing*)
function to\
group by player id and see if any player's sum of 'is_lapsed' flags is
more than one.

The final culprit is player 1, who has two lapses and will thus be
banished --- should have *just said No *to steroids.

``` wp-block-preformatted
 +-----------+--------------+
 |  player_id|sum(is_lapsed)|
 +-----------+--------------+
 |          1|             2|
 +-----------+--------------+
```
