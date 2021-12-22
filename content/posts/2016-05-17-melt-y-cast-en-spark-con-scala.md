---
author: Carlos J. Gil Bellosta
date: 2016-05-17 08:13:04+00:00
draft: false
title: Melt y cast en Spark con scala

url: /2016/05/17/melt-y-cast-en-spark-con-scala/
categories:
- computación
tags:
- cast
- melt
- reshape2
- scala
- spark
---

Trabajar con [Spark](http://spark.apache.org/) usando [Scala](http://www.scala-lang.org/) implica renunciar a ese paraíso que son las funciones `melt` y `(d)cast` de `reshape2`.

¿O no?

{{< highlight scala "linenos=true" >}}
import org.apache.spark.sql.types.StructField;
import org.apache.spark.sql.types.StructType;
import org.apache.spark.sql.types.StringType;
import org.apache.spark.sql.types.DoubleType;
import org.apache.spark.sql.Row;

/** Create some data **/

val nrows = 20
val origDF = sc.parallelize(1.to(nrows).map(x => (x, math.pow(x,2), math.pow(x,3)))).toDF("id", "cuadrado", "cubo")

/** Melt **/

val ids  = Map("id" -> 0)
val cols = Map("cuadrado" -> 1, "cubo" -> 2)

def melt(x:Row, ids:Map[String, Int] , cols:Map[String, Int]) = {
        var tmp = ids.mapValues(y => x(y))
        for((k,v) <- cols) yield tmp + ("var" -> k, "value" -> x(v))
}

val df = origDF.flatMap(x => melt(x, ids, cols))

val newStructure = StructType( ids.values.map(x => origDF.schema(x)).toList ::: List(StructField("var", StringType), StructField("value", DoubleType)) )
val meltDF = sqlContext.applySchema(df.map(x => Row.fromSeq(x.values.toList)), newStructure)

/** cast **/

val castDF = meltDF.groupBy("id").pivot("var").sum("value")
{{< / highlight >}}