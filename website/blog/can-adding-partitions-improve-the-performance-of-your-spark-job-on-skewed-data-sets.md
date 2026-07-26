---
title: "Can Adding Partitions Improve The Performance of Your Spark Job On Skewed Data Sets?"
date: 2019-04-22
source: http://datalackey.com/2019/04/22/can-adding-partitions-improve-the-performance-of-your-spark-job-on-skewed-data-sets/
---

![](/blog/images/m-math.jpeg)

After reading a number of on-line articles on how to handle 'data skew'
in one's Spark cluster, I ran some experiments on my own 'single JVM'
cluster to try out one of the techniques mentioned. This post presents
the results, but before we get to those, I could not restrain myself
from some nitpicking (below) about the definition of 'skew'. You can
quite easily skip the next section if you just want to get to the Spark
techniques.

### A Statistical Aside
Statistics defines a *symmetric distribution* as one in which the mean,
median, and mode are all equal, and a *skewed distribution* as one where
these properties do not hold. Many online resources use a conflicting
definition of data skew, for example [this
one](https://www.ibm.com/support/knowledgecenter/en/SSULQD_7.2.1/com.ibm.nz.adm.doc/c_sysadm_data_skew.html),
which talks about skew in terms of "some data slices \[having\] more
rows of a table than others". We can't use the traditional statistics
definition of skew if our concern is unequal distribution of data across
the partitions of our Spark tasks.

Consider a degenerate case where you have allocated 100 partitions to
process a batch of data, and all the keys in that batch are from the
same customer. Then, if we are using a hash or range partitioner, all
records would be processed in one partition, while the other 99 would be
idle. But clearly in this case the mean (average), the mode (most common
value), and the median (the value 'in the middle' of the distribution)
would all be the same. So, our data is not 'skewed' in the traditional
sense, but definitely unequally distributed amongst our partitions.
Perhaps a better term to use instead of 'skewed' would be 'non-uniform',
but everyone uses 'skewed'. So, fine. I will stop losing sleep over this
and go with the data-processing literature usage of the term.

### Techniques for Handling Data Skew
**More Partitions**

Increasing the number of partitions data may result in data associated
with a given key being hashed into more partitions. However, this will
likely not help when one or relatively few keys are dominant in the
data. The following sections will discuss this technique in more detail.

**Bump up spark.sql.autoBroadcastJoinThreshold**

Increasing the value of this setting will increase the likelihood that
the Spark query engine chooses the *BroadcastHashJoin* strategy for
joins in preference to the more data intensive *SortMergeJoin*. This
involves transmitting the smaller to-be-joined table to each executor's
memory, then streaming the larger table and joining row-by-row. As the
size of the smaller table increases, memory pressure will also increase,
and the viability of this technique will decrease.

**Iterative (Chunked) Broadcast Join**

When your smaller table becomes prohibitively large it might be worth
considering the approach of iteratively taking slices of your smaller
(but not that small) table, broadcasting those, joining with the larger
table, then unioning the result.
[Here](https://www.youtube.com/watch?v=6zg7NTw-kTQ) is a talk that
explains the details nicely.

**Convert to RDDs using Custom Partitioners, Convert Back to Dataframe**

[This
article](https://dataninjago.com/2019/06/01/create-custom-partitioner-for-spark-dataframe/)
illustrates the technique of converting each of the to-be-joined
dataframes to pair RDD's, and partitioning them with a custom
partitioner that evenly spreads records across the available partitions.

**Adding salt**

Add 'salt' to the keys of your data set by mapping each key to a pair
whose first element is the original key, and whose second element is a
random integer in some range. For very frequently occurring keys the
range would be larger than for keys which occur with average or lower
frequency.

Say you had a table with data like the one below:

``` wp-block-code
        customerId  itemOrdered Quantity 
            USGOV   a-1         10 // frequently occurring
            USGOV   a-2         44 // frequently occurring
            USGOV   a-5         553// frequently occurring
            small1  a-1         2
            small1  a-1         4
            small3  a-1         2
            USGOV   a-5         553// frequently occurring
            small2  a-5         1
```

And you needed to join to a table of discounts to figure final price,
like this:

``` wp-block-code
        customerId  discountPercent
            USGOV   .010
            small1  .001
            small2  .001
            small3  .002
```

You would add an additional salt column to both tables, then join on the
customerId and the salt, with the modified input to the join appearing
as shown below. Note that 'USGOV' records used to wind up in one
partition, but now, with the salt added to the key they will likely end
up in one of three partitions ('salt range' == 3.) The records
associated with less frequently occurring keys will only get one salt
value ('salt range' == 1), as we don't need to ensure that they end up
in different partitions.

``` wp-block-code
            customerId  salt  itemOrdered Quantity 
                USGOV   1     a-1         10   
                USGOV   2     a-2         44   
                USGOV   3     a-5         553  
                small1  1     a-1         2    
                small1  1     a-1         4    
                small3  1     a-1         2     
                USGOV   3     a-5         553
                small2  1     a-5         1
```

To ensure the join works, the salt column needs to be added to the
smaller table, and for each random salt value associated with higher
frequency keys we need to add new records (note there are now three
USGOV records.) This will add to the size of the smaller table, but
often this will be out-weighed by the efficiency gained from not having
a few partitions loaded up with a majority of the data to be processed.

``` wp-block-code
        customerId  salt discountPercent 
            USGOV   1    .010
            USGOV   2    .010
            USGOV   3    .010
            small1  1    .001
            small2  1    .001 
            small3  1    .002 
```

### Adding More Partitions: Unhelpful When One Key Dominates
Before we look at code, lets consider a minimal contrived example where
we have a data set of twelve records that needs to be distributed across
our cluster, which we will accomplish by 'mod'ing the key by the number
of partitions. First consider a non-skewed data set where no key
dominates, and 3 partitions. We see partition 0 gets filled with 5
items. While partition 2 get filled with three. This skewing is a result
of the fact that we have very few partitions.

``` wp-block-code
3 partitions: 0, 1, 2
distribute to partition via: key % 3

Uniform Data Set 

    key     partition
*   0       0 
    1       1
    2       2
*   3       0
    4       1
    5       2
*   6       0
    7       1
    8       2
*   9       0
    10      1
*   12      0 
```

Now, lets look at two skewed data sets, one in which one key (0)
dominates, and another where the skewedness is the fault of two keys (0
and 12.) We will again partition by mod'ing by the number of available
partitions. In both cases, partition 0 gets flooded with 8 of 12
records. Other partitions get only 2 records.

``` wp-block-code
Skewed Data Set  -- One Key (0) Dominates


    key     partition
*   0       0
*   0       0
*   0       0
    1       1
    2       2
*   3       0
    4       1
    5       2
*   6       0
*   0       0
*   0       0
*   0       0




Skewed Data Set  -- No Single Key Dominates (0 & 12 occur most often)

    key     partition
*   0       0
*   0       0
*   0       0
    1       1
    2       2
*   3       0
    4       1
    5       2
*   6       0
*   12      0
*   12      0
*   12      0
```

Now let's see what happens when we increase the number of partitions to
11, and distribute records across partitions by mod'ing by the same
number. In the case where one key (0) dominates, we find that partition
0 still gets 7 out of 12 records. But when the 'skew' is spread across
not one, but two keys (0 and 12), we find that only 3 out of 12 records
end up in partition zero. This shows that the more 'dominance' is
concentrated around a small set of keys (or one key, as often happens
with nulls), the less we will benefit by simply adding partitions.

``` wp-block-code
Skewed Data Set  -- One Key (0) Dominates



    key     partition
*   0       0
*   0       0
*   0       0
    1       1
    2       2
    3       3
    4       4
    5       5
*   6       6
*   0       0
*   0       0
*   0       0




Skewed Data Set  -- No Single Key Dominates (0/12 are most likely)

    key     partition
*   0       0
*   0       0
*   0       0
    1       1
    2       2
    3       3
    4       4
    5       5
    6       6
    12      1    
    12      1
    12      1
```

### Adding More Partitions: A Simple Test Program
The main processing component of the test program I developed to explore
what happens with skewed data does a *mapPartitionsWithIndex* over each
partition of a Pair RDD with each pair consisting of the key, followed
by the value. The keys are generated by the *KeyGenerator* object which
will always generate 100 keys, either as a uniform distribution from 1
to 100, or as two flavors of skewed distribution, both of which have 55
random keys. The 'oneKeyDominant' distribution augments the 55 random
keys with 55 0's, while the 'not oneKeyDominant' distribution uses 3
high frequency keys: 0, 2, and 4, occurring 18, 18, and 19 times,
respectively.

At the beginning of the mapPartitionsWithIndex we start a timer so we
can see how much time it takes to completely process each partition. As
we iterate over each key we call 'process' which emulates some complex
processing by sleeping for 50 milliseconds.

``` wp-block-code
    def process(key: (Int, Int), index: Int): Unit = {
      println(s"processing $key in partition '$index'")
      Thread.sleep(50)     // Simulate processing w/ delay
    }

    keysRdd.mapPartitionsWithIndex{
      (index, keyzIter) =>
        val start = System.nanoTime()
        keyzIter.foreach {
          key =>
            process(key, index)
        }
        val end = System.nanoTime()
        println(
          s"processing of keys in partition '$index' took " +
            s" ${(end-start) / (1000 * 1000)} milliseconds")
        keyzIter
    }
      .count
  }
```

The full code is presented in full below. As long as you use Spark 2.2+
you should be able to run this code by copy/pasting into any existing
Spark project you might have. To reproduce the results we report in the
next section, you need to manually set these variables: * 
numPartitions* , *useSkewed, * *oneKeyDominant* before you launch the
application.

``` wp-block-code
import org.apache.spark.{HashPartitioner, SparkConf}
import org.apache.spark.rdd.RDD
import org.apache.spark.sql._

import scala.collection.immutable
import scala.util.Random


object KeyGenerator {
  val random = new Random()

  def getKeys(useSkewed: Boolean, 
              oneKeyDominant: Boolean)  : immutable.Seq[Int] = {

    def genKeys(howMany: Int,
                lowerInclusive: Int,
                upperExclusive: Int)  = {
      (1 to howMany).map{ i =>
        lowerInclusive + 
            random.nextInt(upperExclusive - lowerInclusive)
      }
    }

    val keys  =
      if (useSkewed) {
        val skewedKeys =
          if (oneKeyDominant)
            Seq.fill(55)(0)
        else
            Seq.fill(18)(0) ++ Seq.fill(18)(2) ++ Seq.fill(19)(4)

        genKeys(45, 1, 45) ++ skewedKeys
      }
      else {
        genKeys(100, 1, 100)
      }

    System.out.println("keys:" + keys);
    System.out.println("keys size:" + keys.size);

    keys
  }
}

object SaltedToPerfection extends App { 

  import KeyGenerator._
  def runApp(numPartitions: Int, 
             useSkewed: Boolean, 
             oneKeyDominant: Boolean) = {

    val keys: immutable.Seq[Int] = getKeys(useSkewed, oneKeyDominant)
    val keysRdd: RDD[(Int, Int)] =
      sparkSession.sparkContext.
        parallelize(keys).map(key => (key,key)). // to pair RDD
        partitionBy(new HashPartitioner(numPartitions))


    System.out.println("keyz.partitioner:" + keysRdd.partitioner)
    System.out.println("keyz.size:" + keysRdd.partitions.length)

    def process(key: (Int, Int), index: Int): Unit = {
      println(s"processing $key in partition '$index'")
      Thread.sleep(50)     // Simulate processing w/ delay
    }

    keysRdd.mapPartitionsWithIndex{
      (index, keyzIter) =>
        val start = System.nanoTime()
        keyzIter.foreach {
          key =>
            process(key, index)
        }
        val end = System.nanoTime()
        println(
          s"processing of keys in partition '$index' took " +
            s" ${(end-start) / (1000 * 1000)} milliseconds")
        keyzIter
    }
      .count
  }


  lazy val sparkConf = new SparkConf()
    .setAppName("Learn Spark")
    .setMaster("local[4]")

  lazy val sparkSession = SparkSession
    .builder()
    .config(sparkConf)
    .getOrCreate()


  val numPartitions = 50
  val useSkewed = true
  val oneKeyDominant = true

  runApp(numPartitions, useSkewed, oneKeyDominant)
  Thread.sleep(1000 * 600)    // 10 minutes sleep to explore with UI
}
```

### Adding More Partitions: Test Results
The results obtained from running our test program accorded with the
informal analysis we performed above on various cardinality=12 data
sets, namely, that increasing the number of partitions is more helpful
when *more than one* key dominates the distribution. When one key
dominates, increasing partitions improved performance by 16% (see
difference between runs 3 and 5), whereas when multiple keys dominate
the distribution we saw an improvement of 29% (see difference between
runs 2 and 4.)

``` wp-block-code
Run     Partitions      Skew                        Job Duration

1       4               none                        2.057556 s
2       4               multiple dominant keys      3.125907 s
3       4               one dominant key            4.045455 s
4       50              multiple dominant keys      2.217383 s
5       50              one dominant key            3.378734 s



Performance improvements obtained by increasing partitions (4->50)

    one dominant key    
        Elapsed time difference between run 3 and 5
        (4.045455 - 3.378734) / 4.045455  = 16%

    multiple dominant keys
        Elapsed time difference between run 2 and 4
        (3.125907 - 2.217383) / 3.125907  = 29%
```
