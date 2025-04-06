---
author: Carlos J. Gil Bellosta
categories:
- r
date: 2016-11-11 08:13:49+00:00
draft: false
lastmod: '2025-04-06T19:02:14.341888'
related:
- 2016-11-04-r-en-paralelo-pero-ahora-con-futuros.md
- 2014-05-15-r-en-paralelo.md
- 2015-06-15-paralelismo-en-r-memorandum.md
- 2010-09-01-el-paquete-multicore-de-r.md
- 2016-11-24-habiendo-monadas-quien-quiere-callbacks.md
tags:
- future
- futuros
- r
- paquetes
title: ¿Cuánto tarda en ejecutarse este código?
url: /2016/11/11/cuanto-tarda-en-ejecutarse-este-codigo/
---

Es:

{{< highlight R >}}
library(future)

plan(multiprocess, workers = 4)

system.time({
  a1 <- future({Sys.sleep(7); 1})
  a2 <- future({Sys.sleep(1); 1})
  a3 <- future({Sys.sleep(1); 1})
  a4 <- future({Sys.sleep(1); 1})
  a5 <- future({Sys.sleep(1); 1})
  a6 <- future({Sys.sleep(1); 1})
  a7 <- future({Sys.sleep(1); 1})

  res <- sapply(list(a1, a2, a3, a4, a5, a6, a5), value)
})
{{< / highlight >}}

Piensa antes las posibles opciones:

* ~8 segundos: ejecuta primero `a1`-`a4` en 7 segundos y luego `a5`-`a7` en un segundo adicional.
* ~7 segundos: ejecuta primero `a1`-`a4`, pero cuando acaban `a2`-`a4`, lanza `a5`-`a7`, que terminan antes que `a1`
* ¿Otras?

Vosotros mismos.

(Pensad que si la respuesta fuese ~7 segundos, podría hacerse [esto](https://twitter.com/opencpu/status/779677832972730368?s=09) directamente con `future`).