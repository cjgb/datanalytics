---
author: Carlos J. Gil Bellosta
categories:
- estadística
date: 2017-02-09 08:13:13+00:00
draft: false
lastmod: '2025-04-06T19:07:37.095175'
related:
- 2018-01-16-las-correlaciones-positivas-son-transitivas.md
- 2018-11-16-colinealidad-y-posterioris.md
- 2022-03-10-diagramas-causales-hipersimples-1-errores.md
- 2019-07-19-un-truco-para-reducir-la-varianza-de-un-estimador.md
- 2012-04-19-variables-instrumentales-con-r.md
tags:
- estadística
- independencia
- probabilidad
- correlación
title: La inesperada correlación de los ratios
url: /2017/02/09/la-inesperada-correlacion-de-los-ratios/
---

Tomemos dos variables aleatorias independientes y positivas,

{{< highlight R >}}
    set.seed(123)
    n <- 100
    x <- runif(n) + 0.5
    y <- runif(n) + 0.5
{{< / highlight >}}

No tengo ni que decir que su correlación es prácticamente cero,

{{< highlight R >}}
    cor(x,y)
    #-0.0872707
{{< / highlight >}}

y que en su diagrama de dispersión tampoco vamos a poder leer otra cosa:

![](/img/2017/02/disp_indep_xy.png#center)

Ahora generamos otra variable independiente de las anteriores,

{{< highlight R >}}
    z <- runif(n) + 0.5
{{< / highlight >}}

y calculamos el cociente de las primeras con respecto a esta:

{{< highlight R >}}
    xz <- x / z
    yz <- y / z
{{< / highlight >}}

¿Independientes? Hummmm...

{{< highlight R >}}
    cor(xz, yz)
    # 0.5277787
{{< / highlight >}}

![](/img/2017/02/disp_ratio_xy.png#center)

Parece que no. Porque valores grandes del cociente aplastan a la vez a los valores de `x` e `y` y a la inversa. La correlación entre las nuevas variables crece con la del denominador, de hecho.

Así que ¡cuidado al dividir!

**Nota:** Lo aquí publicado es casi, casi, casi una traducción de [esto](https://nsaunders.wordpress.com/2017/02/03/the-real-meaning-of-spurious-correlations/).