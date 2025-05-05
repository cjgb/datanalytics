---
author: Carlos J. Gil Bellosta
categories:
- estadística
- r
date: 2020-06-08 09:13:00+00:00
draft: false
lastmod: '2025-04-06T18:59:33.070287'
related:
- 2020-06-15-cuidado-con-la-aleatoriedad-pochola.md
- 2019-01-08-modelos-de-conteos-con-sobredispersion-con-stan.md
- 2015-02-11-recurrencia-recurrente.md
- 2013-11-22-un-pequeno-problema-de-probabilidad.md
- 2021-10-07-como-aleatorizan-las-columnas-los-rrff-un-experimento-mental-y-una-coda-historica.md
tags:
- estadística
- paquetes
- r
- sobol
title: Aleatoriedad hirsuta, aleatoriedad pochola
url: /2020/06/08/aleatoriedad-hirsuta-aleatoriedad-pochola/
---

Contemplando y comparando

![](/wp-uploads/2020/06/aleatoriedad_hirsuta.png#center)

y

![](/wp-uploads/2020/06/aleatoriedad_pochola.png#center)

se me han venido a la mente los adjetivos _hirsuto_ y _pocholo_ para calificar las respectivas _formas de aleatoriedad_ que representan. La primera es el resultado del habitual

{{< highlight R >}}
n <- 200
x <- runif(n)
y <- runif(n)
plot(x, y, pch = 16)
{{< / highlight >}}

mientras que la segunda exige el más sofisticado

{{< highlight R >}}
library(randtoolbox)
s <- sobol(n, 2, scrambling = 3)
x <- s[,1]
y <- s[,2]
plot(x, y, pch = 16)
{{< / highlight >}}

Se ve que [Sobol quería rellenar más armoniosamente el espacio](https://en.wikipedia.org/wiki/Sobol_sequence). Me temo que, al hablar de aleatoriedad, muchos de nosotros también (p.e., [esto](https://datanalytics.com/2018/09/11/la-falacia-del-fiscal-la-mi-mejor-explicacion-para-profanos-hasta-la-fecha/)).