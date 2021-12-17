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



    <span style="color:#069;font-weight:700">import <span style="color:#0053ff;font-weight:700">org.<span style="color:#0053ff;font-weight:700">apache.<span style="color:#0053ff;font-weight:700">spark.<span style="color:#0053ff;font-weight:700">sql.<span style="color:#0053ff;font-weight:700">types.<span style="color:#0053ff;font-weight:700">StructField;
    <span style="color:#069;font-weight:700">import <span style="color:#0053ff;font-weight:700">org.<span style="color:#0053ff;font-weight:700">apache.<span style="color:#0053ff;font-weight:700">spark.<span style="color:#0053ff;font-weight:700">sql.<span style="color:#0053ff;font-weight:700">types.<span style="color:#0053ff;font-weight:700">StructType;
    <span style="color:#069;font-weight:700">import <span style="color:#0053ff;font-weight:700">org.<span style="color:#0053ff;font-weight:700">apache.<span style="color:#0053ff;font-weight:700">spark.<span style="color:#0053ff;font-weight:700">sql.<span style="color:#0053ff;font-weight:700">types.<span style="color:#0053ff;font-weight:700">StringType;
    <span style="color:#069;font-weight:700">import <span style="color:#0053ff;font-weight:700">org.<span style="color:#0053ff;font-weight:700">apache.<span style="color:#0053ff;font-weight:700">spark.<span style="color:#0053ff;font-weight:700">sql.<span style="color:#0053ff;font-weight:700">types.<span style="color:#0053ff;font-weight:700">DoubleType;
    <span style="color:#069;font-weight:700">import <span style="color:#0053ff;font-weight:700">org.<span style="color:#0053ff;font-weight:700">apache.<span style="color:#0053ff;font-weight:700">spark.<span style="color:#0053ff;font-weight:700">sql.<span style="color:#0053ff;font-weight:700">Row;


    <span style="color:#af82d4">/** Create some data **/

    <span style="color:#069;font-weight:700">val nrows = <span style="color:#a8017e">20
    <span style="color:#069;font-weight:700">val origDF = sc.parallelize(<span style="color:#a8017e">1.to(nrows).map(x => (x, math.pow(x,<span style="color:#a8017e">2), math.pow(x,<span style="color:#a8017e">3)))).toDF(<span style="color:#666">"id", <span style="color:#666">"cuadrado", <span style="color:#666">"cubo")

    <span style="color:#af82d4">/** Melt **/

    <span style="color:#069;font-weight:700">val ids  = Map(<span style="color:#666">"id" -> <span style="color:#a8017e">0)
    <span style="color:#069;font-weight:700">val cols = Map(<span style="color:#666">"cuadrado" -> <span style="color:#a8017e">1, <span style="color:#666">"cubo" -> <span style="color:#a8017e">2)


    <span style="color:#069;font-weight:700">def <span style="color:#21439c">melt(x:Row, ids:Map[<span style="color:#ff5600">String, <span style="color:#ff5600">Int] , cols:Map[<span style="color:#ff5600">String, <span style="color:#ff5600">Int]) = {
            <span style="color:#069;font-weight:700">var tmp = ids.mapValues(y => x(y))
            <span style="color:#069;font-weight:700">for((k,v) <- cols) <span style="color:#069;font-weight:700">yield tmp + (<span style="color:#666">"var" -> k, <span style="color:#666">"value" -> x(v))
    }

    <span style="color:#069;font-weight:700">val df = origDF.flatMap(x => melt(x, ids, cols))

    <span style="color:#069;font-weight:700">val newStructure = StructType( ids.values.map(x => origDF.schema(x)).toList ::: List(StructField(<span style="color:#666">"var", StringType), StructField(<span style="color:#666">"value", DoubleType)) )
    <span style="color:#069;font-weight:700">val meltDF = sqlContext.applySchema(df.map(x => Row.fromSeq(x.values.toList)), newStructure)


    <span style="color:#af82d4">/** cast **/

    <span style="color:#069;font-weight:700">val castDF = meltDF.groupBy(<span style="color:#666">"id").pivot(<span style="color:#666">"var").sum(<span style="color:#666">"value")


