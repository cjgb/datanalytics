---
author: Carlos J. Gil Bellosta
date: 2020-06-08 09:13:00+00:00
draft: false
title: Aleatoriedad hirsuta, aleatoriedad pochola

url: /2020/06/08/aleatoriedad-hirsuta-aleatoriedad-pochola/
categories:
- estadística
- r
tags:
- estadística
- paquetes
- r
- sobol
---

Contemplando y comparando

![](/wp-uploads/2020/06/aleatoriedad_hirsuta.png#center)

y

![](/wp-uploads/2020/06/aleatoriedad_pochola.png#center)

se me han venido a la mente los adjetivos _hirsuto_ y _pocholo_ para calificar las respectivas _formas de aleatoriedad_ que representan. La primera es el resultado del habitual

{{< highlight R "linenos=true" >}}
n <- 200
x <- runif(n)
y <- runif(n)
plot(x, y, pch = 16)
{{< / highlight >}}

mientras que la segunda exige el más sofisticado

{{< highlight R "linenos=true" >}}
library(randtoolbox)
s <- sobol(n, 2, scrambling = 3)
x <- s[,1]
y <- s[,2]
plot(x, y, pch = 16)
{{< / highlight >}}

Se ve que [Sobol quería rellenar más armoniosamente el espacio](https://en.wikipedia.org/wiki/Sobol_sequence). Me temo que, al hablar de aleatoriedad, muchos de nosotros también (p.e., [esto](https://www.datanalytics.com/2018/09/11/la-falacia-del-fiscal-la-mi-mejor-explicacion-para-profanos-hasta-la-fecha/)).