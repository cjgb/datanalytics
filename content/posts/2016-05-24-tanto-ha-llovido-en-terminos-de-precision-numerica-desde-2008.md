---
author: Carlos J. Gil Bellosta
categories:
- programación
- r
date: 2016-05-24 08:13:42+00:00
draft: false
lastmod: '2025-04-06T19:12:30.881128'
related:
- 2014-08-13-mis-procesos-puntuales-con-glm.md
- 2020-01-22-siete-llaves-al-sepulcro-del-metodo-delta.md
- 2017-05-24-aquellos-que-ignoran-la-estadistica-etcetera.md
- 2013-11-22-un-pequeno-problema-de-probabilidad.md
- 2013-05-09-data-table-ii-agregaciones.md
tags:
- programación
- precisión
- varianza
title: ¿Tanto ha llovido (en términos de precisión numérica) desde 2008?
url: /2016/05/24/tanto-ha-llovido-en-terminos-de-precision-numerica-desde-2008/
---

Acabo de ejecutar

{{< highlight R >}}
set.seed(1234)

x <- runif(1e6)
x.shift <- 1e9 + x

sd(x)
sd(x.shift)

sqrt(sum((x - mean(x))^2) / (length(x - 1)))
sqrt(sum((x.shift - mean(x.shift))^2) / (length(x - 1)))

sd.sum.squares <- function(x){
  n <- length(x)
  suma <- sum(x)
  suma.cuadrados <- sum(x^2)
  sqrt((n * suma.cuadrados - suma^2) / (n * (n-1)))
}

sd.sum.squares(x)
sd.sum.squares(x.shift)
{{< / highlight >}}

inspirado por [esto](http://www.johndcook.com/blog/2008/09/26/comparing-three-methods-of-computing-standard-deviation/) y me pregunto: ¿tanto ha llovido en términos de precisión numérica desde 2008?