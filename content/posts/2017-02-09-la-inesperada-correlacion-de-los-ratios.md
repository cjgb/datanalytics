---
author: Carlos J. Gil Bellosta
date: 2017-02-09 08:13:13+00:00
draft: false
title: La inesperada correlación de los ratios

url: /2017/02/09/la-inesperada-correlacion-de-los-ratios/
categories:
- estadística
tags:
- estadística
- independencia
- probabilidad
- correlación
---

Tomemos dos variables aleatorias independientes y positivas,

{{< highlight R "linenos=true" >}}
    set.seed(123)
    n <- 100
    x <- runif(n) + 0.5
    y <- runif(n) + 0.5
{{< / highlight >}}

No tengo ni que decir que su correlación es prácticamente cero,

{{< highlight R "linenos=true" >}}
    cor(x,y)
    #-0.0872707
{{< / highlight >}}

y que en su diagrama de dispersión tampoco vamos a poder leer otra cosa:

![](/wp-uploads/2017/02/disp_indep_xy.png)

Ahora generamos otra variable independiente de las anteriores,

{{< highlight R "linenos=true" >}}
    z <- runif(n) + 0.5
{{< / highlight >}}

y calculamos el cociente de las primeras con respecto a esta:

{{< highlight R "linenos=true" >}}
    xz <- x / z
    yz <- y / z
{{< / highlight >}}

¿Independientes? Hummmm...

{{< highlight R "linenos=true" >}}
    cor(xz, yz)
    # 0.5277787
{{< / highlight >}}

![](/wp-uploads/2017/02/disp_ratio_xy.png)

Parece que no. Porque valores grandes del cociente aplastan a la vez a los valores de `x` e `y` y a la inversa. La correlación entre las nuevas variables crece con la del denominador, de hecho.

Así que ¡cuidado al dividir!

**Nota:** Lo aquí publicado es casi, casi, casi una traducción de [esto](https://nsaunders.wordpress.com/2017/02/03/the-real-meaning-of-spurious-correlations/).