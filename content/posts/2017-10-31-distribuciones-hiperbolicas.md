---
author: Carlos J. Gil Bellosta
categories:
- estadística
- probabilidad
- r
date: 2017-10-31 08:13:21+00:00
draft: false
lastmod: '2025-04-06T19:10:46.602675'
related:
- 2012-03-23-r-y-la-distribucion-de-rayleigh.md
- 2021-03-02-un-argumento-para-usar-la-normal-la-maximizacion-de-la-entropia.md
- 2023-09-19-curtosis-t-test.md
- 2016-05-31-el-extrano-caso-de-la-media-empirica-menguante.md
- 2014-10-10-bootstrap-bayesiano.md
tags:
- distribuciones
- hiperbólica
- r
title: Distribuciones hiperbólicas
url: /2017/10/31/distribuciones-hiperbolicas/
---

{{< highlight R >}}
    curve(-sqrt(x^2 + 1), -5, 5)
{{< / highlight >}}


pinta una rama de hipérbola,

![](/img/2017/10/hiperbola.png#center)

que, una vez exponenciada, i.e.,

{{< highlight R >}}
    curve(exp(-sqrt(x^2 + 1)), -5, 5)
{{< / highlight >}}

da

![](/img/2017/10/distr_hiperbolica.png#center)


Es decir, una curva algo menos esbelta que la normal pero que bien podemos dividir por su integral para obtener la llamada [distribución hiperbólica](https://en.wikipedia.org/wiki/Hyperbolic_distribution).

Tres notas sobre ella:

* Tiene una historia curiosa. Fue considerada por [Ralph Bagnold](https://en.wikipedia.org/wiki/Ralph_Alger_Bagnold) al estudiar la forma de las dunas y la sedimentación de la arena arrastrada por el viento. El logaritmo de sus curvas, se ve, tenía forma de hipérbola.
* Lo cual os proporciona un exótico contraejemplo al argumento habitual sobre la naturaleza omniatractora de la normal.
* La distribución hiperbólica (y sus extensiones) están disponibles en el paquete [`ghyp`](https://cran.r-project.org/web/packages/ghyp/index.html), motivado por aplicaciones financieras, como siempre. Esa gente es adicta a distribuciones con colas gruesas. Aunque para lo que les valen luego...