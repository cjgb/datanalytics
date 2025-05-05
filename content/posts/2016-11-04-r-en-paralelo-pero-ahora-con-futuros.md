---
author: Carlos J. Gil Bellosta
categories:
- r
date: 2016-11-04 08:13:59+00:00
draft: false
lastmod: '2025-04-06T19:09:10.952631'
related:
- 2016-11-11-cuanto-tarda-en-ejecutarse-este-codigo.md
- 2014-05-15-r-en-paralelo.md
- 2015-06-15-paralelismo-en-r-memorandum.md
- 2016-11-24-habiendo-monadas-quien-quiere-callbacks.md
- 2010-09-01-el-paquete-multicore-de-r.md
tags:
- futuros
- paquetes
- paralelización
- r
title: R en paralelo (pero ahora, con futuros)
url: /2016/11/04/r-en-paralelo-pero-ahora-con-futuros/
---

Esta entrada extiende y mejora una [homónima de 2014](https://datanalytics.com/2014/05/15/r-en-paralelo/).

El problema de entonces consistía en calcular por separado y en paralelo objetos A, B y C para combinarlos después. Cuando, por supuesto, el cálculo de A, B y C es pesado.

El muy reciente paquete `future` incorpora a R un mecanismo disponible en otros lenguajes de programación: un cierto tipo de datos, los futuros, que contienen promesas de valores que se calculan fuera del hilo principal del programa. Se usan, por ejemplo, para realizar llamadas a APIs, operaciones de IO o (y esto es más pertinente para usuarios de R) cálculos que llevan su tiempico.

Mirad el código de entonces y comparadlo con:


{{< highlight R >}}
library(future)

plan(multiprocess)

a0 <- future({
  Sys.sleep(3)
  10
})

b0 <- future({
  Sys.sleep(3)
  11
})

system.time(
  res <- list(value(a0), value(b0))
)
{{< / highlight >}}

Para más detalles, [las viñetas](https://cran.r-project.org/web/packages/future/index.html).