---
author: Carlos J. Gil Bellosta
categories:
- r
date: 2011-09-07 07:45:36+00:00
draft: false
lastmod: '2025-04-06T18:56:09.047646'
related:
- 2016-05-17-melt-y-cast-en-spark-con-scala.md
- 2015-03-12-datos-en-formato-largo-y-melt.md
- 2014-03-12-veinte-paquetes-de-r-para-cientificos-de-datos.md
- 2010-08-17-una-tarea-para-mis-lectores.md
- 2022-09-20-tools-etl-memory.md
tags:
- r
- reshape
- paquetes
title: 'El paquete reshape de R (I): melt'
url: /2011/09/07/el-paquete-reshape-de-r-i-melt/
---

El [paquete _reshape_ de R](http://had.co.nz/reshape/) consta esencialmente de dos funciones, `melt` y `cast`, muy útiles para determinado tipo de transformaciones de datos.

La función `melt` se describe sucintamente con el siguiente gráfico:

[![](/wp-uploads/2011/09/melt.png#center)
](/wp-uploads/2011/09/melt.png#center)

Es decir, toma un `data.frame` y lo _funde_ (¡dejaré de ser amigo de quien pronuncie _meltea_!) o, visto de otra manera, estira.

He aquí unos ejemplos:


{{< highlight R >}}
library(reshape)
iris.m <- melt(iris)
iris.m
{{< / highlight >}}


Nótese cómo `melt` es inteligente y no necesita (en muchas ocasiones) que se le especifiquen cosas evidentes. De hecho, la expresión anterior es equivalente a las siguientes:


{{< highlight R >}}
iris.m <- melt( iris, id.vars = "Species" )
iris.m <- melt( iris, id.vars = 5 )
iris.m <- melt( iris, id.vars = "Species", measure.vars = 1:4 )
iris.m <- melt( iris, id.vars = 5, measure.vars = 1:4 )
{{< / highlight >}}


Un ejemplo un poco más sofisticado es el siguiente:


{{< highlight R >}}
library( plm )
data( Produc )
produc.m <- melt( Produc )
produc.m
{{< / highlight >}}


Que no produce los efectos deseados. Más bien, queremos


{{< highlight R >}}
produc.m <- melt(Produc, id = c("state", "year") )
produc.m
{{< / highlight >}}


El próximo día nos ocuparamos de su función compañera, `cast`.