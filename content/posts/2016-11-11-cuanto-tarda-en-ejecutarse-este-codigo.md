---
author: Carlos J. Gil Bellosta
date: 2016-11-11 08:13:49+00:00
draft: false
title: ¿Cuánto tarda en ejecutarse este código?

url: /2016/11/11/cuanto-tarda-en-ejecutarse-este-codigo/
categories:
- r
tags:
- future
- futuros
- r
- paquetes
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


