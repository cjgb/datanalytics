---
author: Carlos J. Gil Bellosta
categories:
- r
date: 2015-06-23 08:13:36+00:00
draft: false
lastmod: '2025-04-06T19:01:07.958768'
related:
- 2015-06-17-liberado-spark-1-4.md
- 2011-03-04-1680.md
- 2016-07-07-r-io-o-rio.md
- 2011-04-07-nueva-version-de-paquete-colbycol.md
- 2014-07-09-estrategias-escalables-con-r.md
tags:
- csv
- r
- spark
- sparkr
title: 'SparkR 1.4: carga de ficheros CSV'
url: /2015/06/23/sparkr-1-4-carga-de-ficheros-csv/
---

He instalado [Spark 1.4](https://datanalytics.com/2015/06/17/liberado-spark-1-4/) recientemente y he comenzado a cacharrear. Antes de nada, quiero cargar datos.

Advierto que ha cambiado sustancialmente la API de SparkR. Entre otras _novedades_, desapareció (o más bien, se escondió) la función _textFile_, que permitía leer ficheros línea a línea. Ahora está pero no se exporta. La verás solo si haces `SparkR:::textFile`. ¿Signo de _deprecación_?

Se pueden crear un `DataFrame` (tablas distribuidas de Spark) a partir de un data.frame de R:

{{< highlight R >}}
irisDF <- createDataFrame(sqlContext, iris)
first(irisDF)
# Sepal_Length Sepal_Width Petal_Length Petal_Width Species
# 1          5.1         3.5          1.4         0.2  setosa
isLocal(irisDF)
# [1] FALSE
{{< / highlight >}}

Pero no es plan tener la memoria de la sesión local de R como cuello de botella. Quiero leer ficheros grandes que estén en disco. La documentación de Spark proporciona mecanismos para [importar ficheros en formatos que ni conocía](http://people.apache.org/~pwendell/spark-releases/latest/sql-programming-guide.html#data-sources). ¿Pero qué de los ubicuos CSV?

Para poder cargarlos, tienes que arrancar (¿habrá alguna alternativa?) SparkR así:

`/opt/spark/bin/sparkR --packages com.databricks:spark-csv_2.10:1.0.3`

Es decir, en la misma invocación tienes que indicar que vas a usar la librería (con toda su parafernalia de versionado) que lee CSV. ¡Carajo!

Luego ya funciona, por ejemplo,

{{< highlight R >}}
flights <- read.df(sqlContext, "/home/carlos/Downloads/airports.csv", "com.databricks.spark.csv", header="true")
{{< / highlight >}}

[Rebuscando](https://github.com/databricks/spark-csv/blob/master/src/test/scala/com/databricks/spark/csv/CsvSuite.scala), (porque no, no esperes dar con ello en la documentación) he encontrado cómo cargar, por ejemplo, ficheros separados con tabulador:


{{< highlight R >}}
movimientos <- read.df(sqlContext, "/home/carlos/Downloads/Movimientos.csv", "com.databricks.spark.csv", header="true", delimiter = "\t")
{{< / highlight >}}

De momento, observo cómo los programadores de SparkR no nos lo quieren poner fácil: ¿por qué `header="true"` en lugar de `header=T`? ¿Por qué no `sep = "\t"`?

Lo bueno es que, más o menos, ya sé cómo cargar datos. Pronto, más.