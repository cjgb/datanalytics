---
author: Carlos J. Gil Bellosta
date: 2011-09-07 07:45:36+00:00
draft: false
title: 'El paquete reshape de R (I): melt'

url: /2011/09/07/el-paquete-reshape-de-r-i-melt/
categories:
- r
tags:
- r
- reshape
- paquetes
---

El [paquete _reshape_ de R](http://had.co.nz/reshape/) consta esencialmene de dos funciones, `melt` y `cast`, muy útiles para determinado tipo de transformaciones de de datos.

La función `melt` se describe sucintamente con el siguiente gráfico:

[![](/wp-uploads/2011/09/melt.png)
](/wp-uploads/2011/09/melt.png)

Es decir, toma un `data.frame` y lo _funde_ (¡dejaré de ser amigo de quien pronuncie _meltea_!) o, visto de otra manera, estira.

He aquí unos ejemplos:


{{< highlight R "linenos=true" >}}
library(reshape)
iris.m <- melt(iris)
iris.m
{{< / highlight >}}


Nótese cómo `melt` es inteligente y no necesita (en muchas ocasiones) que se le especifiquen cosas evidentes. De hecho, la expresión anterior es equivalente a las siguientes:


{{< highlight R "linenos=true" >}}
iris.m <- melt( iris, id.vars = "Species" )
iris.m <- melt( iris, id.vars = 5 )
iris.m <- melt( iris, id.vars = "Species", measure.vars = 1:4 )
iris.m <- melt( iris, id.vars = 5, measure.vars = 1:4 )
{{< / highlight >}}


Un ejemplo un poco más sofisticado es el siguiente:


{{< highlight R "linenos=true" >}}
library( plm )
data( Produc )
produc.m <- melt( Produc )
produc.m
{{< / highlight >}}


Que no produce los efectos deseados. Más bien, queremos


{{< highlight R "linenos=true" >}}
produc.m <- melt(Produc, id = c("state", "year") )
produc.m
{{< / highlight >}}


El próximo día nos ocuparamos de su función compañera, `cast`.


