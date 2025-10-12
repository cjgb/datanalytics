---
author: Carlos J. Gil Bellosta
categories:
- probabilidad
date: 2016-03-28 09:13:26+00:00
draft: false
lastmod: '2025-04-06T18:49:25.697988'
related:
- 2018-10-23-abc-2.md
- 2019-01-08-modelos-de-conteos-con-sobredispersion-con-stan.md
- 2020-07-17-mas-sobre-la-presunta-sobredispersion-en-el-modelo-de-poisson.md
- 2020-09-18-esto-no-es-practico-pero-si-bonito-bonito-ademas-de-esa-forma-inasequible-a-la-chusma.md
- 2016-01-22-analisis-estadistico-de-respuestas-ocultas-en-encuestas.md
tags:
- muestreo
- probabilidad
- teorema
- importance sampling
title: Un ejemplo de "importance sampling" (que no sé cómo traducir)
url: /2016/03/28/un-teorema-de-muestreo-que-no-se-si-existe/
---

Imaginemos que queremos muestrear una variable aleatoria cuya función de densidad es (proporcional a) el producto de otras dos (no necesariamente propias). Por ejemplo, la gamma, cuya función de densidad es $K x^{k-1} \exp(-\lambda x)$, el producto de una exponencial y una distribución impropia con densidad $x^{k-1}$.

Supongamos que no sabemos hacer

{{< highlight R >}}
set.seed(1234)
shape <- 3
rate  <- 3
m0 <- rgamma(1000, shape = shape, rate = rate)
{{< / highlight >}}

Pero supongamos que sí que sabemos muestrear la distribución exponencial, lo que permite escribir:

{{< highlight R >}}
# una muestra de la exponencial
m1 <- rexp(1e5, rate)
# asignamos "pesos" de acuerdo con la otra distribución
pesos <- m1^(shape -1)
# muestreamos con esos pesos
m1 <- sample(m1, 1000, replace = T, prob = pesos)
# tachán
qqplot(m0, m1)
{{< / highlight >}}

Es decir, podemos:

* Muestrear la distribución conocida
* Reponderar cada observación por la otra función de densidad
* Muestrear la primera distribución con esos pesos

Esto puede servir para muestrear una posteriori (en algunos casos simples) sin tener que pasar por MCMC y similares puesto que

$$ p(\theta|x_i) \propto p(x_i | \theta) p(\theta).$$

Si sabemos muestrear $p(\theta)$, podemos usar la verosimilitud $p(x_i | \theta)$ para reponderar las muestras y realizar una última extracción de pesos de acuerdo con esos nuevos pesos.