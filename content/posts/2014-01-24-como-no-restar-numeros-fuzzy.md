---
author: Carlos J. Gil Bellosta
date: 2014-01-24 08:06:40+00:00
draft: false
title: Cómo no restar números fuzzy

url: /2014/01/24/como-no-restar-numeros-fuzzy/
categories:
- estadística
tags:
- covarianza
- encuestas
- epa
- estadística
- fuzzy
- varianza
---

Esta entrada viene motivada por varios asuntos relacionados que me han sucedido en los últimos tiempos. El primero es un colega que me preguntó sobre si el paro había subido o bajado comparando datos de un par de trimestres.

La respuesta _prima facie_ es evidente: restas las tasas publicadas y ya. Sin embargo, las cosas son un poco más complicadas si se tiene en cuenta que la EPA tiene un error. Es decir, existen infinitas _trayectorias posibles_ entre las tasas de paro _reales_ (pero desconocidas) de los dos trimestres. En térmimos matemáticos, la variación de la tasa de paro es $latex X_1 - X_0$, la diferencia de (presuntamente) dos variables aleatorias normales, que es otra variable aleatoria normal con colas que se extienden a ambos lados del cero.

¡La respuesta ya no es tan simple!

Y es todavía aún más compleja por el hecho de que las variables $latex X_0$ y $latex X_1$ no son independientes. La varianza de la resta es $latex \text{Var}(X_0) + \text{Var}(X_1) - 2 \text{Cov}(X_0, X_1)$ y la covarianza entre $latex X_0$ y $latex X_1$ es > 0 por la construcción misma de la encuesta (aunque sea porque en ella se repiten gran parte de los sujetos).

El segundo asunto es [este](https://github.com/Rexamine/FuzzyNumbers), es decir, un paquete de R para manipular números _fuzzy_. Traduzco parte de la presentación del paquete:

> Los números fuzzy [...] juegan un papel destacado en muchas situaciones de importancia teórica y práctica. Frecuentemente describimos nuestro conocimiento a través de números. Por ejemplo, "mido unos 180 cm" o "el cohete fue lanzado entre las 2 y las 3 de la tarde".

De igual manera, podemos decir que la tasa de paro está _alrededor_ del 26%. Así que veamos qué nos pueden ofrecer estos números raros:

{{< highlight R "linenos=true" >}}
library(FuzzyNumbers)

A <- TrapezoidalFuzzyNumber(0, 1, 2, 3)
B <- TrapezoidalFuzzyNumber(1, 2, 3, 3.5)
plot(A, xlim = c(-3,4))
plot(B, add = TRUE, col = 2, lty = 2)
plot(B - A, add = TRUE, col= "green", lty = 4)
{{< / highlight >}}

En el código anterior he creado dos números _fuzzy_ trapezoidales. Luego los he restado y la salida es otro número trapezoidal. La representación gráfica de los tres es (con la diferencia en verde):

[![fuzzy_difference](/wp-uploads/2014/01/fuzzy_difference.png#center)
](/wp-uploads/2014/01/fuzzy_difference.png#center)

Lo cual, si se me permite, es una chapuza. No sé de dónde ha salido esa teoría _fuzzy_ y si quienes tuvieron la desvergüenza de ponerla en negro sobre blanco habían oído hablar del concepto de distribución de probabilidad. Malo es reinventar la rueda, pero peor es reinventarla cuadrada, ¿no? En particular:

* ¿por qué no estarán los números _fuzzy_ con integral igual a 1 como sería razonable?
* ¿existirá en la _teoría fuzzy_ el concepto de correlación?
* ¿la _inventarán_ algún día y publicarán artículos _fuzzy_ como si fuesen algo novísimo?

Hummm...
