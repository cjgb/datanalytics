---
author: Carlos J. Gil Bellosta
categories:
- estadística
date: 2023-09-18
lastmod: '2025-04-06T18:45:06.997728'
related:
- 2014-06-10-a-vueltas-con-el-t-test.md
- 2021-02-25-sobre-sumas-de-cuadrados-de-normales-con-varianzas-desiguales.md
- 2016-02-04-y-termino-con-lo-de-los-intervalos.md
- 2021-03-02-un-argumento-para-usar-la-normal-la-maximizacion-de-la-entropia.md
- 2022-10-11-bayesianismo-frecuentismo-teoria-decision-03.md
tags:
- estadística bayesiana
- t-test
- curtosis
title: Más sobre extensiones (bayesianas, pero no necesariamente) del t-test
url: /2023/09/18/curtosis-t-test/
---

En
[_Improving Research Through Safer Learning from Data_](https://www.fharrell.com/post/improve-research/),
Frank Harrell, junto con otros consejos muy provechosos para aquellos investigadores que tengan un compromiso más serio con la rectitud metodológica que con el desarrollo de su carrera profesional, menciona a modo de ejemplo una solución propuesta por Box y Tiao
(en el tercer capítulo de [esto](https://onlinelibrary.wiley.com/doi/book/10.1002/9781118033197))
al problema del t-test en el caso de que no rija la hipótesis de normalidad. Más propiamente, en casos en los que se sospecha que la desviación con respecto a la normalidad lo es en términos de la curtosis (y no la asimetría).

Son un montón de páginas, 54, para describir y analizar una solución alternativa a la más pedestre: reemplazar la normal por la t (con un número de grados de libertad sin especificar). La distribución alternativa que contemplan Box y Tiao es una generalización de la distribución normal en la que el 2 del exponente de

$$\phi(x) = \exp(x^2 / 2)$$

se reemplaza por un parámetro inespecífico $d$. La distribución normal es solo un caso particular de esta familia ampliada de distribuciones cuando $d = 2$.

En realidad, utilizan una parametrización más conveniente del exponente

$$d = \frac{2}{1 + \beta}$$

donde $-1 < \beta < 1$ y la normal se recupera cuando $\beta = 1$. El perfil de las distribuciones para distintos valores de $\beta$ es

![](/img/2023/curtosis_box_tiao.png#center)

Y prácticamente, todo lo que queda por decir es:

- Esta solución para hacer más robusto el t-test frente a desviaciones de la normal no parece haber calado tanto como la alternativa (usando la distribución t); de hecho, ---salvo error u omisión por mi parte--- no a parece en la lista de distribuciones disponibles para simular en Numpyro, Stan o similares.
- Tal vez porque la _sobrecurtosis_ (el problema para el que recurrir a la distribución t está indicado) es más común que la _infracurtosis_ (que la distribución de Box y Tiao contempla).
- De todos modos, la discusión sobre esta distribución atenta contra el espíritu de la entrada de Frank Harrell: allí se reclamaba prestar atención a la especificación del modelo. Lo cual se puede entender de dos maneras hasta cierto punto contradictorias: una, extender la clase de distribuciones a considerar en el problema ---recurriendo, por ejemplo, a la de Box y Tiao---. Pero una interpretación más fiel al espíritu de lo que se reclama es hacer un esfuerzo por determinar la distribución _verdadera_ a la que responden los datos.

Un ejemplo de lo que eso significa lo ofrecen los mismos Box y Tiao al principio de su discusión. Dicen:

> Sin embargo, cabe esperar que cierto tipo de mediciones no sigan una distribución normal. Un ejemplo es la resistencia a la rotura del hilo. Si pensamos en el hilo como si estuviera compuesto por una serie de eslabones (como una cadena), con la rotura ocurriendo en el eslabón más débil, y si la distribución de la resistencia de un eslabón individual fuera normal, entonces la resistencia a la rotura se distribuiría como la distribución de la observación más pequeña de una muestra normal. Esta distribución de valores extremos es asimétrica y altamente leptocúrtica.

Un caso más en el que los primeros principios ofrecen la información necesaria para que un artesano de la estadística moldee _a mano_ una distribución específica para un fin determinado.