---
author: Carlos J. Gil Bellosta
date: 2022-06-16
title: 'Un matemático visita los modelos de difusión (generativos)'
description: 'Una explicación minimalista de los modelos generativos de difusión'
url: /2022/06/16/modelos-generativos-difusión/
categories:
- estadística
tags:
- ciencia de datos
- modelos generativos
---

Los modelos generativos ---aunque aquí _generativo_ se use en un sentido distinto del habitual en estas páginas--- están de moda (véase [esto](https://en.wikipedia.org/wiki/DALL-E) o [esto](https://imagen.research.google/)). Estas aplicaciones están basadas en una serie de técnicas que el siguiente diagrama (extraído de [aquí](https://lilianweng.github.io/posts/2021-07-11-diffusion-models/)) resume estupendamente:

![](/wp-uploads/2022/06/generative-overview.png#center)

La más reciente de todas estas técnicas y la que subyace a las últimas y más sorprendentes aplicaciones es la de los llamados modelos de difusión. Les he estado echando un vistazo y esta entrada resume lo que he aprendido de ellos.

Voy a comenzar con el caso más simple que se me ocurre. Supongamos que tenemos una distribución $X \sim N(0, 1)$ y queremos muestrear valores de ella que tengan una alta probabilidad. Es decir, no queremos muestrear $X$, solo queremos valores de $X$ tales que `dnorm(x)` sea _grande_. Hay muchas maneras de hacerlo ---aunque en los casos interesantes, como se verá después, no funcionan las triviales---, pero una de ellas es la siguiente:

1. _Difuminamos_ $X$ añadiéndole un _ruido gaussiano_. Gracias a eso obtenemos una distribución que es prácticamente normal.
2. Muestreamos esa distribución normal.
3. _Invertimos_ la _difuminación_.

En particular, supongamos que $Y \sim N(0, 10)$. La distribución de $X+Y$ es aproximadamente normal (en este caso, estrictamente normal $N(0, \sqrt(11))$). Así que podemos muestrearla y obtener un valor observado `o`.

{{< highlight R >}}
o <- rnorm(1, 0, sqrt(101))
{{< / highlight >}}

El siguiente paso consiste en _invertir la difusión_. En concreto, consiste en encontrar el valor $X$ que hace más probable ese valor de `o`; o, lo que es lo mismo,  encontrar el $x$ que maximiza $p(x | 0)$. Como sabemos (vía Bayes) que

$$p(x | o) \prop p(o | x) p(x) = p_d(o -x) p_0(x),$$

donde $p_d$ es la densidad de una $N(0, 10)$ y $p_0$ es nuestra densidad original, podemos encontrar el $x$ más probable haciendo

{{< highlight R >}}
post <- function(x, o = 0) {
  dnorm(o - x, 0, 10) * dnorm(x, 0, 1)
}
optimize(post,
         lower = -10, upper = 10,
         maximum = TRUE, o = o)
{{< / highlight >}}

Y si simulamos _en masa_,

{{< highlight R >}}
oes <- rnorm(100, 0, sqrt(101))
res <- sapply(
  oes,
  function(o) optimize(post,
                       lower = -10, upper = 10,
                       maximum = TRUE, o = o)$maximum)
hist(res)
{{< / highlight >}}

obtenemos

![](/wp-uploads/2022/06/diffusion_simulation.png#center)

que, como se aprecia, es un conjunto de muestras próximas a la moda de la distribución de partida.

Ahora, el caso de interés.

En este, obviamente, la distribución de partida es _rara_. Supongamos que $f$ es una red neuronal que distingue fotos de gatitos de otras. Es decir, es una función de $R^{N\times N}$ en el intervalo $[0,1]$, que toma valores altos para valores $x \in R^{N\times N}$ que se parecen (interpretados como fotos) a gatitos.

A partir de esa función, normalizándola adecuadamente (aunque eso no es estrictamente necesario), se construye una probabilidad de partida $p_0$ que tiene valores altos para valores $x$ que parecen gatitos y bajos donde no. Para generar imágenes de gatitos tenemos que muestrear las regiones del espacio donde $p_0(x)$ es alto (o, dicho de otra manera, donde la probabilidad de que $x$ se parezca a un gatito es alta).

Y no otra cosa es lo que se ha resuelto arriba. Ahora, obviamente, la optimización no es tan sencilla. Y, por algún motivo técnico que se me escapa, la difusión no se hace _de una_ sino en pequeños saltos, añadiendo más y más _ruido normal_ en cada iteración. Pero la idea subyacente es la misma.
