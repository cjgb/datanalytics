---
-categories:
- probabilidad
author: Carlos J. Gil Bellosta
date: 2025-11-25
description: Una descripción detallada del método de muestreo de distribuciones de
  probabilidad por rechazo.
lastmod: '2025-11-22T18:20:30.455362'
related:
- 2025-04-24-auc-vs-dispersion-p-ii.md
- 2015-04-27-intervalos-de-credibilidad-para-la-distribucion-beta.md
- 2025-04-17-auc-vs-dispersion-p.md
- 2018-10-23-abc-2.md
- 2016-03-29-el-auc-es-la-probabilidad-de-que.md
tags:
- simulación
- r
title: Una nota sobre la simulación por el método del rechazo
url: /2025/11/25/muestreo-rechazo/
---

El otro día [publiqué](/2025/11/04/maximo-auc-posible/) un pequeño fragmento de código,

{{< highlight r >}}
a <- 2.89
b <- 36.81
sample_dist <- function() rbeta(1, a, b)

sample_p <- function(y){
  candidate <- sample_dist()
  my_sample <- runif(1)

  if (y == 1) if (my_sample < candidate) return(candidate)
  if (y == 0) if (my_sample < 1 - candidate) return(candidate)

  sample_p(y)
}

p1 <- replicate(100000, sample_p(1))
p0 <- replicate(100000, sample_p(0))

auc <- mean(p1 > p0)
auc
{{< / highlight >}}

que había usado antes [aquí](/2025/04/24/auc-dispersion-calibracion-ii/), para muestrear unas distribuciones relacionadas con el cálculo del AUC en modelos perfectamente calibrados. Lo había escrito meses atrás y supongo que me pasó como a la mayoría de mis lectores: darlo por bueno primero y usarlo después suponía todo un acto de fe (en mí, además).

Ahora voy a explicarlo.

El código permite muestrear dos distribuciones, una con función de densidad proporcional a $x f(x)$ y la otra, a $(1-x)f(x)$, donde $f$ es la densidad de una beta. En realidad, puedo pensar en el muestreo de cualquier función de densidad proporcional a $g(x) f(x)$ donde:
- $g(x) < 1$.
- $f(x)$ es la función de densidad de una distribución fácil de muestrear.

Podría muestrearla de la siguiente manera:
- Represento la gráfica de $g(x)f(x)$ en una hoja de papel.
- Tiro dardos al azar sobre ella.
- Tomo como muestras de mi distribución los valores $x$ correspondientes a los agujeros que caen dentro de curva definida por $g(x)f(x)$ y el eje x.

Se trata del mismo procedimiento que cuando uno quiere calcular el área de un círculo de diámetro 1 muestreando uniformemente el cuadrado unidad y considerando la proporción de puntos que caen dentro del círculo inscrito. Pero se puede hacer mejor y más eficientemente. Se puede:

- Muestrear primero $f$.
- Añadir cada punto $x$ a la muestra final solo si al elegir un número al azar en [0, 1], este es menor que $g(x)$.

Es decir, en lugar de muestrear uniformemente en la hoja de papel entera, uno puede muestrear uniformemente en la curva definida por la densidad $f$ y rechazar los puntos que queden por encima de $g(x)f(x)$. Viene a ser equivalente a:
- Grabar un vídeo de uno tirando dardos sobre la hoja de papel.
- Recortar en el montaje final todos los minutos en los que los dardos caían fuera de la curva definida por $f(x)$.

Finalmente, la recursividad de `sample_p` _garantiza_ (si la memoria del ordenador es finita) que cada llamada a la función devolverá un punto.

## Nota

Un atento lector de estas páginas, [José Luis Cañadas](https://muestrear-no-es-pecado.es/), me hizo llegar un comentario muy oportuno sobre la presente discusión. Es que en el caso concreto en el que la distribución de partida es beta (de parámetros $a$ y $b$), las distribuciones de los casos en los que se obtiene 1 o 0 son conocidas: se trata de betas con parámetros $a+1$ y $b$ y $a$ y $b+1$ respectivamente.

Se ve que llegó a esa conclusión reformulando bayesianamente el problema anterior y advirtiendo que las distribuciones beta y la binomial son conjugadas.