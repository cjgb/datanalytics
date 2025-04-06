---
author: Carlos J. Gil Bellosta
categories:
- estadística
date: 2022-01-11
lastmod: '2025-04-06T18:51:32.464062'
related:
- 2019-01-08-modelos-de-conteos-con-sobredispersion-con-stan.md
- 2011-01-10-c2bfuna-caida-demasiado-drastica-de-la-varianza.md
- 2021-03-02-un-argumento-para-usar-la-normal-la-maximizacion-de-la-entropia.md
- 2020-07-17-mas-sobre-la-presunta-sobredispersion-en-el-modelo-de-poisson.md
- 2011-08-21-comparacion-de-variables-aleatorias-de-poisson.md
tags:
- distribuciones
- binomial negativa
- poisson
- gamma
- mezclas
title: La (mejor) caracterización de la binomial negativa (en términos de la Poisson
  y la gamma)
url: /2022/01/11/caracterizacion-binomial-negativa-poisson-gamma/
---

Estamos acostumbrados a la caracterización habitual de la distribución binomial negativa como el aburrido número de _fracasos_ en una serie de ensayos de Bernoulli hasta lograr $r$ _éxitos_. Esto, junto con un poco de matemáticas de primero de BUP ---todo aquello de combinaciones, etc.--- lleva a la expresión conocida de su función de probabilidad,

$$\binom{n + x - 1}{x} p^r (1 - p)^x.$$

Pero esta caracterización, muy útil para resolver problemas de probabilidad construidos artificialmente para demostrar que los alumnos han estudiado la lección con aprovechamiento, se queda muy corta a la hora de proporcionar intuiciones sobre cómo, cuándo y por qué utilizarla en el ámbito en el que es más útil: el análisis de los procesos puntuales.

En ellos manda Poisson. El motivo está desarrollado (¿mejorablemente?) en [mi (inacabado) libro de estadística](https://datanalytics.com/libro_estadistica/distribuciones-de-probabilidad.html#distribuciones-de-probabilidad-discretas), por lo que no me explayaré más aquí al respecto y me limitaré a rescatar de él el parrafito que dice:

> En general, si $n$ es grande y $p$ relativamente pequeña, se puede demostrar que las variables aleatorias binomiales de parámetros $\alpha n$ y $p/\alpha$ [para distintos valores de $\alpha$] son aproximadamente iguales y que, en el fondo, la distribución solo depende de la media, $np$. Esa distribución común es conocida como distribución de Poisson, que admite como parámetro el valor $np$, que se suele denominar intensidad y denotar por $\lambda$. El nombre hace referencia al número de eventos que cabe esperar, a lo intenso del fenómeno aleatorio que modela.

Para conectar la binomial negativa con la Poisson, considérese el siguiente experimento mental: en un hospital son admitidos en urgencias $N$ pacientes cada día donde $N \sim \text{Pois}(30)$. Si se toman los ingresos a lo largo de un año y se representan gráficamente, se obtendrá un _histograma_ muy similar al de la Poisson.

Pero puede que no. Puede que ese parámetro $\lambda = 30$ se haya calculado _globalmente_ (una media de 30 pacientes por día) pero que cada día del año, por sus características azarosas, tenga asociado un valor $\lambda_i$ distinto. La distribución observada ya no será la de una Poisson sino la de una mezcla de distribuciones de acuerdo con el siguiente esquema:

1. Para cada día $i$ se selecciona un valor $\lambda_i$ de cierta distribución desconocida de media 30.
2. Se obtiene una muestra de la distribución de Poisson de parámetro $\lambda_i$.

La distribución resultante no es necesariamente Poisson. De hecho, solo lo es ---estrictamente--- si todos los $\lambda_i$ son iguales (para una demostración, estúdiese la varianza de una mezcla de distribuciones y aplíquese a este caso concreto).

Pero se da la circunstancia de que si esa distribución desconocida es gamma, entonces la distribución obtenida es binomial negativa (la demostración, [aquí](https://www.johndcook.com/negative_binomial.pdf)).

En definitiva, la distribución binomial positiva es una mezcla de distribuciones de Poisson cuando su parámetro sigue una distribución gamma. O en lo que se convierte la distribución de Poisson cuando hay incertidumbre ---y esa incertidumbre tiene una forma concreta--- acerca de su parámetro. Lo cual tiene, obviamente, una interpretación bayesiana: la distribución binomial negativa es la posteriori asociada a la Poisson con una priori gamma.

Un buen motivo, pues, para usar la binomial negativa en modelos de conteos y trascender así las limitaciones de la distribución de Poisson.