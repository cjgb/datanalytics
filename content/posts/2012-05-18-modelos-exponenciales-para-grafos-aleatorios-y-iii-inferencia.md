---
author: Carlos J. Gil Bellosta
categories:
- estadística
- probabilidad
date: 2012-05-18 07:20:48+00:00
draft: false
lastmod: '2025-04-06T18:48:18.591004'
related:
- 2020-06-29-sobremuestreando-x-y-no-y.md
- 2020-07-17-mas-sobre-la-presunta-sobredispersion-en-el-modelo-de-poisson.md
- 2020-04-13-regresion-tradicional-vs-multinivel.md
- 2012-05-10-modelos-exponenciales-para-grafos-aleatorios-ii-modelo-probabilistico.md
- 2010-05-18-regresion-por-cuantiles-en-r-y-sas.md
tags:
- estadística
- probabilidad
- redes sociales
- regresión logística
title: 'Modelos exponenciales para grafos aleatorios (y III): inferencia'
url: /2012/05/18/modelos-exponenciales-para-grafos-aleatorios-y-iii-inferencia/
---

Me quedé el otro día en el [modelo probabilístico](https://datanalytics.com/2012/05/10/modelos-exponenciales-para-grafos-aleatorios-ii-modelo-probabilistico/) de los [grafos aleatorios exponenciales](https://datanalytics.com/2012/05/09/modelos-exponenciales-para-grafos-aleatorios-i-motivacion/). Quedaba una última parte y al ensayar su redacción me di cuenta de que me había metido en un huerto: la cosa es mucho más vasta de lo que a primera vista parecía.

Así que me limitaré a repasar lo más básico tratando de no meter demasiado la pata.

Tradicionalmente, se utilizaba para estimar los parámetros de un grafo la llamada técnica de la [función de seudo-verosimilitud](http://en.wikipedia.org/wiki/Pseudolikelihood). Se ve que uno puede escribir


$$ \log \left( \frac{P(v_{ij} = 1| y_{ij})}{P(v_{ij} = 0| y_{ij})} \right) = \sum_A \eta_A d_A(y)$$

donde $latex v_{ij}$ es una _posible_ arista del grafo, $latex y_{ij}$ es el grafo original sin la arista $latex v_{ij}$ y $latex d_A(y)$ es una función —la función _difererencia_— que depende del tipo de configuración. Un poco más en cristiano, que la razón de probabilidades para que exista un cierto vértice puede modelarse como una ecuación lineal en los coeficientes $latex \eta_A$ y eso permite estimarlos usando algo similar a regresiones logísticas.

Si vale el símil, sería equivalente a plantear un modelo logístico para predecir la existencia o no existencia de un determinado vértice.

Pero parece que esta técnica está mandada a recoger, i.e., desaconsejada, y suelen utilizarse en su lugar técnicas de Montecarlo. En particular, usando el [paquete `ergm`](http://cran.r-project.org/web/packages/ergm/index.html) de R. Como me superan los detalles de este asunto entero, me limitaré a recorrer con cierta minuciosidad el ejemplo que aparece en la función central del paquete, `ergm`.

Para ello, primero cargamos el paquete e importamos un conjunto de datos, `flo`.

{{< highlight R >}}
library(ergm)
data(flo)
{{< / highlight >}}

`flo` es una matriz de incidencia: contiene ceros y unos y estos últimos indican que una determinada pareja de familias florentinas mantuvieron en su día vínculos matrimoniales. A partir de dicha matriz se puede crear una red:

{{< highlight R >}}
flomarriage <- network(flo, directed = FALSE)
flomarriage
{{< / highlight >}}

Y también añadir atributos a sus nodos (en este caso, la riqueza relativa de las familias):

{{< highlight R >}}
flomarriage %v% "wealth" <- c(10,36,27,146,55,44,20,8,42,103,48,49,10,48,32,3)
flomarriage
{{< / highlight >}}

Obviamente, las redes pueden representarse gráficamente haciendo

{{< highlight R >}}
plot( flomarriage )
plot(flomarriage, vertex.cex=flomarriage %v% "wealth" / 20)
{{< / highlight >}}

para obtener (en la segunda sentencia) algo así como

[![](/wp-uploads/2012/05/flomarriage.png#center)
](/wp-uploads/2012/05/flomarriage.png#center)

La parte interesante llega ahora: plantear un modelo que, por ejemplo, indique si las familias tienen propensión a enlazarse cuando la diferencia de riqueza entre ellas es grande. Por supuesto, controlando por el número de enlaces totales que hay en el modelo, que es el significado del térmimo `edges`:

{{< highlight R >}}
gest <- ergm(flomarriage ~ edges + absdiff("wealth"))
summary(gest)
{{< / highlight >}}

La salida es

{{< highlight R >}}
# ==========================
# Summary of model fit
# ==========================
#
# Formula: flomarriage ~ edges + absdiff("wealth")
#
# Iterations: 20
#
# Monte Carlo MLE Results:
# Estimate Std. Error MCMC % p-value
# edges -1.457666 0.354532 NA absdiff.wealth -0.004176 0.007387 NA 0.573
# ---
# Signif. codes: 0 ‘***’ 0.001 ‘**’ 0.01 ‘*’ 0.05 ‘.’ 0.1 ‘ ’ 1
#
# Null Deviance: 166.355 on 120 degrees of freedom
# Residual Deviance: 107.798 on 118 degrees of freedom
# Deviance: 58.557 on 2 degrees of freedom
#
# AIC: 111.8 BIC: 117.37
{{< / highlight >}}

en la que diría yo que el coeficiente (negativo) de `edges` indica que la densidad del grafo es relativamente pequeña (que es un grafo con pocos vértices, vamos) y que descontado ese efecto, la diferencia de riqueza entre las familias no parece tener mayor efecto.

Los términos que aparecen a la derecha de la fórmula del modelo representan configuraciones y el paquete implementa muchas de ellas: `kstar(n)` para el número de estrellas de `n` vértices, `transitive`, `degree`, `cycle`,... y así hasta treinta o cuarenta de ellas.

Los lectores interesados en el asunto pueden encontrar gratificante el ejercicio consistente en relacionar el coeficiente obtenido para el parámetro `edges` al modelar redes creadas con sentencias del tipo

{{< highlight R >}}
mi.red <- network(25, directed=FALSE, density=0.1)
{{< / highlight >}}

haciendo variar el parámetro `density`.