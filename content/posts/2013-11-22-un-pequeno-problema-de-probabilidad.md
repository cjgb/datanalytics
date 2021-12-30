---
author: Carlos J. Gil Bellosta
date: 2013-11-22 07:14:13+00:00
draft: false
title: Un pequeño problema de probabilidad

url: /2013/11/22/un-pequeno-problema-de-probabilidad/
categories:
- probabilidad
- r
tags:
- probabilidad
- r
- paulos
---

El _tuit_

[![](/wp-uploads/2013/11/john_allen_paulos_e.png#center)
](/wp-uploads/2013/11/john_allen_paulos_e.png#center)

de John Allen Paulos me indujo a escribir

{{< highlight R "linenos=true" >}}
number.numbers <- function(n){
  sum(cumsum(sample(0:n)) < n) + 1
}

res <- replicate(10000, number.numbers(1000))
{{< / highlight >}}

código con el que, efectivamente, puede _comprobarse_ que la media es, efectivamente, e.

Ahora bien, ¿alguien se atreve a explicar por qué?

(No leas esta pista: `(s??)?s??`).
