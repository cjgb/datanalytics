---
author: Carlos J. Gil Bellosta
date: 2016-03-28 09:13:26+00:00
draft: false
title: Un ejemplo de "importance sampling" (que no sé cómo traducir)

url: /2016/03/28/un-teorema-de-muestreo-que-no-se-si-existe/
categories:
- probabilidad
tags:
- muestreo
- probabilidad
- teorema
---

Imaginemos que queremos muestrear una variable aleatoria cuya función de densidad es (proporcional a) el producto de otras dos (no necesariamente propias). Por ejemplo, la gamma, cuya función de densidad es $latex K x^{k-1} \exp(-\lambda x)$, el producto de una exponencial y una distribución impropia con densidad $latex x^{k-1}$.

Supongamos que no sabemos hacer








    <a href="http://inside-r.org/r-doc/base/set.seed">set.seed(1234)
     
    shape <- 3
    rate  <- 3
     
    m0 <- <a href="http://inside-r.org/r-doc/stats/rgamma">rgamma(1000, shape = shape, rate = rate)








Pero supongamos que sí que sabemos muestrear la distribución exponencial, lo que permite escribir:








    # una muestra de la exponencial
    m1 <- rexp(1e5, rate)
     
    # asignamos "pesos" de acuerdo con la otra distribución
    pesos <- m1^(shape -1)
     
    # muestreamos con esos pesos
    m1 <- sample(m1, 1000, replace = T, <a href="http://inside-r.org/packages/cran/prob">prob = pesos)
     
    # tachán
    <a href="http://inside-r.org/r-doc/stats/qqplot">qqplot(m0, m1)








Es decir, podemos:



	  * Muestrear la distribución conocida
	  * Reponderar cada observación por la otra función de densidad
	  * Muestrear la primera distribución con esos pesos

Esto puede servir para muestrear una posteriori (en algunos casos simples) sin tener que pasar por MCMC y similares puesto que


$latex p(\theta|x_i) \propto p(x_i | \theta) p(\theta).$


Si sabemos muestrear $latex p(\theta)$, podemos usar la verosimilitud $latex p(x_i | \theta)$ para reponderar las muestras y realizar una última extracción de pesos de acuerdo con esos nuevos pesos.
