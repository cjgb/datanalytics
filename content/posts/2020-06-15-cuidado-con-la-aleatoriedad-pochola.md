---
author: Carlos J. Gil Bellosta
categories:
- estadística
- probabilidad
- r
date: 2020-06-15 09:13:00+00:00
draft: false
lastmod: '2025-04-06T18:46:53.504313'
related:
- 2020-06-08-aleatoriedad-hirsuta-aleatoriedad-pochola.md
- 2019-01-08-modelos-de-conteos-con-sobredispersion-con-stan.md
- 2013-11-22-un-pequeno-problema-de-probabilidad.md
- 2019-04-05-simulacion-de-procesos-de-poisson-no-homogeneos-y-autoexcitados.md
- 2014-08-08-procesos-de-poisson-no-homogeneos-la-historia-de-un-fracaso.md
tags:
- paquetes
- probabilidad
- r
- sobol
title: Cuidado con la aleatoriedad "pochola"
url: /2020/06/15/cuidado-con-la-aleatoriedad-pochola/
---

Abundo sobre mi [entrada del otro día](https://datanalytics.com/2020/06/08/aleatoriedad-hirsuta-aleatoriedad-pochola/). Usando números aleatorios hirsutos,

{{< highlight R >}}
n <- 200
x <- runif(n)
plot(cumsum(x - .5), type = "l")
{{< / highlight >}}

produce

![](/img/2020/06/random_walk_hirsuto.png#center)

mientras que

{{< highlight R >}}
library(randtoolbox)
s <- sobol(n, 1, scrambling = 3)
plot(cumsum(s - .5), type = "l")
{{< / highlight >}}

genera

![](/img/2020/06/random_walk_pocholo.png#center)

que tiene un cariz totalmente distinto.