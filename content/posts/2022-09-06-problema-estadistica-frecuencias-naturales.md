---
author: Carlos J. Gil Bellosta
categories:
- probabilidad
date: 2022-09-06
description: Un problema no tan simple de probabilidades resuelto usando frecuencias
  naturales
lastmod: '2025-04-06T18:54:11.679494'
related:
- 2010-11-12-abundando-en-lo-de-nuestra-ineptitud-para-estimar-la-probabilidad-condicionada.md
- 2011-01-10-c2bfuna-caida-demasiado-drastica-de-la-varianza.md
- 2017-12-19-sobre-el-problema-de-las-martingalas-cuantos-sabiais-la-respuesta.md
- 2023-09-07-problema-modelos-bayesianos-identicabilidad.md
- 2014-02-12-de-ratios-apuestas-y-riesgos.md
tags:
- probabilidad
- teorema de bayes
- frecuencias naturales
- odds
title: Un problema no tan simple de probabilidades resuelto usando frecuencias naturales
url: /2022/09/06/problema-probabilidad-frecuencias-naturales/
---

El otro día se propuso un problema de probabilidad sencillo en su planteamiento aunque de solución no trivial (véase el
[planteamiento](https://statmodeling.stat.columbia.edu/2022/08/01/heres-a-little-problem-to-test-your-probability-intuitions/) y
[una solución](https://statmodeling.stat.columbia.edu/2022/08/02/solution-to-that-little-problem-to-test-your-probability-intuitions-and-why-i-think-its-poorly-stated/))
que tenía como intención original poner a prueba las intuiciones de las probabilidades de eventos.

El problema se enuncia así:

> Una pequeñísima proporción de recién nacidos tienen cierto rasgo (genético). Se realizan dos pruebas, A y B, para detectarlo. Sin embargo, las pruebas no son muy precisas:
> * El 70% de los recién nacidos con test A positivo tienen el rasgo (y el 30% no).
> * El 20% de los recién nacidos con test B positivo tienen el rasgo (y el 80% no).
> También se sabe que las pruebas son independientes en el siguiente sentido:
> * Si un recién nacido tiene el rasgo, el resultado de la prueba A es independiente del de la prueba B.
> * Si un recién nacido no tiene el rasgo, el resultado de la prueba A es independiente del de la prueba B.
> Ahora, un recién nacido es positivo en ambas pruebas. ¿Puedes estimar la probabilidad de que tenga el rasgo?

Una solución algebraica (con el teorema de Bayes de por medio) puede consultarse en uno de los enlaces proporcionados más arriba. Como anunciaba, sin ser extraordinariamente compleja, no es trivial. También será útil pensar, más que en términos de probabilidades, de _odds_.

Así, sea esta la tabla de contingencia para los $n$ niños con el rasgo:

![](/wp-uploads/2022/09/marginal_table_01.png#center)

En la anterior tabla:

1. Se han añadido las marginales (en fondo gris).
2. Se han omitido las magnitudes irrelevantes (reemplazadas con asteriscos).
3. $a$ representa el número de pruebas A positivas.
4. $b$ representa el número de pruebas B positivas.
5. Por independencia, $c = a b / n$.

De la misma manera, se puede construir la tabla de contingencia para los $N$ niños sin el rasgo:

![](/wp-uploads/2022/09/marginal_table_02.png#center)

con la misma interpretación que la anterior (pero donde, por distinguir, se han usado mayúsculas). En particular,

$$\frac{a}{A} = \frac{.7}{.3} \approx 2.33$$

son los _odds_ del rasgo tras una prueba A positiva y

$$\frac{b}{B} = \frac{.2}{.8} = .25$$

son los del rasgo tras una prueba B positiva.

Ahora, los _odds_  que solucionan el problema son

$$\frac{c}{C} = \frac{a b / n}{AB/N} = \frac{N}{n} \frac{a b}{AB},$$

que, dado que $N/n$ es _muy grande_, se puede considerar _infinitos_. Por lo tanto, la probabilidad buscada es prácticamente uno.

¿Y la intuición del problema?

Creo que se puede construir a partir de la evidencia de que ambas pruebas son muy específicas: efectivamente, los falsos positivos de la prueba A, confusamente denotados como $A$ en las tablas anteriores, tienen que ser muy pocos con respecto a $N$: son del mismo orden que $a$ y $a < n << N$. Finalmente, dos positivos encadenados en pruebas independientes altamente específicas, difícil será que sean falsos positivos.

### Coda

Es probable que se pueda construir, además, una solución adicional a este problema abundando en la intuición anterior mediante la determinación de la especificidad de las pruebas por separado, etc.