---
author: Carlos J. Gil Bellosta
date: 2020-06-15 09:13:00+00:00
draft: false
title: Cuidado con la aleatoriedad "pochola"

url: /2020/06/15/cuidado-con-la-aleatoriedad-pochola/
categories:
- estadística
- probabilidad
- r
tags:
- paquetes
- probabilidad
- r
- sobol
---

Abundo sobre mi [entrada del otro día](https://www.datanalytics.com/2020/06/08/aleatoriedad-hirsuta-aleatoriedad-pochola/). Usando números aleatorios hirsutos,

{{< highlight R >}}
n <- 200
x <- runif(n)
plot(cumsum(x - .5), type = "l")
{{< / highlight >}}

produce

![](/wp-uploads/2020/06/random_walk_hirsuto.png#center)

mientras que

{{< highlight R >}}
library(randtoolbox)
s <- sobol(n, 1, scrambling = 3)
plot(cumsum(s - .5), type = "l")
{{< / highlight >}}

genera

![](/wp-uploads/2020/06/random_walk_pocholo.png#center)

que tiene un cariz totalmente distinto.