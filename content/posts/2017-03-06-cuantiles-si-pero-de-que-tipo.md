---
author: Carlos J. Gil Bellosta
categories:
- estadística
- r
date: 2017-03-06 08:13:16+00:00
draft: false
lastmod: '2025-04-06T19:12:10.380558'
related:
- 2010-05-18-regresion-por-cuantiles-en-r-y-sas.md
- 2013-08-05-medianas-ponderadas.md
- 2020-07-17-mas-sobre-la-presunta-sobredispersion-en-el-modelo-de-poisson.md
- 2014-08-13-mis-procesos-puntuales-con-glm.md
- 2021-02-25-sobre-sumas-de-cuadrados-de-normales-con-varianzas-desiguales.md
tags:
- cuantiles
- r
- trucos
title: Cuantiles, sí, pero ¿de qué tipo?
url: /2017/03/06/cuantiles-si-pero-de-que-tipo/
---

Porque resulta que los hay de varios tipos. En R, hasta nueve de ellos:

{{< highlight R >}}
    set.seed(1234)
    muestra <- sort(rt(100, 3))
    mis.cuantiles <- sapply(1:9, function(tipo) quantile(muestra, 0.834, type = tipo))
    mis.cuantiles
    #    83.4%     83.4%     83.4%     83.4%     83.4%     83.4%     83.4%     83.4%     83.4%
    #0.9065024 0.9065024 0.8951710 0.8997036 0.9053693 0.9331290 0.9015846 0.9077920 0.9063154
{{< / highlight >}}

Las definiciones de todos ellos pueden consultarse en [_Sample Quantiles in Statistical Packages_](https://www.amherst.edu/media/view/129116/original/Sample+Quantiles.pdf).

Las diferencias entre ellos, de todos modos, decrecen conforme aumenta el tamaño muestral:

{{< highlight R >}}
n.obs <- seq(100, 1e5, by = 1e3)
res <- sapply(n.obs, function(n){
  x <- rt(n, 3)
  diff(range(sapply(1:9, function(tipo)
    quantile(x, 0.834, type = tipo))))
})

plot(n.obs, log10(res), type = "l",
  xlab = "n obs", ylab = "discrepancia",
  main = "Diferencias entre los distintos tipos de cuantiles")
{{< / highlight >}}

![](/img/2017/03/quantile_types.png#center)

Imagino que crecerán, por otro lado, con la dispersión de los datos implicados alrededor del cuantil de interés.

Atribución: me puso sobre la pista de esta peculiaridad de `quantile` [esto](http://r.prevos.net/percentile-calculations/).