---
author: Carlos J. Gil Bellosta
categories:
- probabilidad
- r
date: 2013-11-22 07:14:13+00:00
draft: false
lastmod: '2025-04-06T19:12:38.080207'
related:
- 2015-08-10-estar-en-racha-y-promediar-promedios.md
- 2012-01-12-cosa-prodigiosa-sin-palabras-i.md
- 2015-09-09-cosas-de-r-que-tal-vez-alguien-sabra-explicar.md
- 2014-02-13-mi-solucion-al-otro-problema-del-cumpleanos.md
- 2013-08-05-medianas-ponderadas.md
tags:
- probabilidad
- r
- paulos
title: Un pequeño problema de probabilidad
url: /2013/11/22/un-pequeno-problema-de-probabilidad/
---

El _tuit_

[![](/img/2013/11/john_allen_paulos_e.png#center)
](/img/2013/11/john_allen_paulos_e.png#center)

de John Allen Paulos me indujo a escribir

{{< highlight R >}}
number.numbers <- function(n){
  sum(cumsum(sample(0:n)) < n) + 1
}

res <- replicate(10000, number.numbers(1000))
{{< / highlight >}}

código con el que, efectivamente, puede _comprobarse_ que la media es, efectivamente, e.

Ahora bien, ¿alguien se atreve a explicar por qué?

(No leas esta pista: `(s??)?s??`).