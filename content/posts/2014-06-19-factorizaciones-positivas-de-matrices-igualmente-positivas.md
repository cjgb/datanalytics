---
author: Carlos J. Gil Bellosta
date: 2014-06-19 07:01:38+00:00
draft: false
title: Factorizaciones positivas de matrices igualmente positivas

url: /2014/06/19/factorizaciones-positivas-de-matrices-igualmente-positivas/
categories:
- estadística
- r
tags:
- estadística
- factorización
- matrices
- nmf
---

Cuando tenía 18 años, pensaba, llegué a aprender todo lo que había que saber sobre factorización de matrices. Incluida la [inutilidad de Jordan](http://en.wikipedia.org/wiki/Jordan_normal_form). El otro día, con un ciento y pico por ciento más de años, he descubierto una clase entera de factorizaciones que aquellos planes de estudios viejunos no contemplaban y que, ¡carajo!, aparte de útiles engarzan con otras ideas la mar de interesantes.

Se trata de factorizaciones positivas de matrices igualmente positivas.

Y no, las matrices positivas, es decir, sin elementos negativos, no son una rareza: piénsese en las tabulaciones (o tablas de contingencia).

Al grano. Dada $latex A =(a_{ij})$ donde cada $latex a_{ij} > 0$ es posible encontrar dos matrices $latex W$ y $latex H$ también positivas tales que $latex A \approx WH$. La no demostración por ejemplo y construcción mediante caja negra es la siguiente:

{{< highlight R "linenos=true" >}}
library(MASS)
library(<a href="http://inside-r.org/packages/cran/NMF">NMF)
 
a <- as.matrix(caith)
res <- <a href="http://inside-r.org/packages/cran/NMF">nmf(a, rank = 2)
 
a
 
# fair red medium dark black
# blue    326  38    241  110     3
# light   688 116    584  188     4
# medium  343  84    909  412    26
# dark     98  48    403  681    85
 
res@fit@W %*% res@fit@H
 
# fair       red   medium      dark     black
# blue   276.37021  45.58136 296.3578  96.37782  3.312852
# light  635.93433 102.81758 656.0355 182.10365  3.108965
# medium 456.68567  92.14988 700.5967 482.32648 42.241237
# dark    86.00979  45.45118 484.0100 630.19204 69.336946
{{< / highlight >}}

Lo del algoritmo es lo de menos. Hay muchos y diversos que pueden consultarse en la bibliografía que acompaña al paquete anterior y en muchas otras partes.

También es medio irrelevante lo de la pérdida de la ortogonalidad (aunque véase [esto](http://www.datanalytics.com/2011/08/12/una-feliz-conjuncion-estadistico-algebraica/) y [esto](http://www.datanalytics.com/2011/08/16/una-feliz-conjuncion-estadistico-algebraica-y-ii/) para ver cómo otro tipo de factorizaciones más convencionales se relaciona con lo de la milonga de la $latex \chi^2$) por lo que se gana. Que es, dividiendo filas y columnas adecuadamente, esto:

$$ A \approx WH= DW^\prime H^\prime$$

donde $latex D$ es una matriz diagonal positiva y $latex W^\prime$ y $latex H^\prime$ son matrices positivas cuyas filas suman 1: ¡son probabilidades!

En concreto, las filas de $latex H^\prime$ son funciones de probabilidad sobre las filas de $latex A$ y las filas de $latex W^\prime$ determinan el peso de las anteriores en la _mixtura_ que _genera_ cada una de ellas. Es decir, se cuenta con un _modelo generativo_ de la matriz (o tabla de contingencia). Los valores de la diagonal de $latex D$, por su parte, indican de alguna manera cuántas observaciones hay en cada fila, es decir, cuántas veces tengo que muestrear cada fila.

Y esto, a su vez, es puro [LDA](http://en.wikipedia.org/wiki/Latent_Dirichlet_allocation) y entronca con otra familia entera de algoritmos, muchos de ellos bayesianos en espíritu, para el análisis de cosas que son (pero que la gente no llama así cuando tienen las dimensiones que uno encuentra en la práctica) tablas de contingencia.

Temo no haber sido claro. A ver si otro día me encuentro más animado para escribir y explico con un ejemplo elaborado cómo se puede obtener muestras de $latex A$ usando el modelo anterior.

Termino comentando para qué podría servir lo anterior y que no se piense hablo por hablar. Supóngase que las filas son clientes y que las columnas son productos que estos han comprado en cierto periodo de tiempo. La descomposición anterior revelaría factores no explícitos (las distribuciones de probabilidad sobre las filas) que hacen que algunos clientes compren determinados productos (juntos) y no otros; luego cada cliente tendría asignada una cierta propensión (dada por las filas de la matriz $latex W^\prime$) a cada uno de los factores.

Algunas cuestiones adicionales que me planteo respecto al asunto de hoy se refieren a, por ejemplo:

* La unicidad (material) de la representación
* Su estabilidad
* La posibilidad de incrementar el número de ceros en las matrices (de manera similar a como se hace con las rotaciones de los componentes principales)
* Si eso que llaman trabajo pero que, en el fondo, es solo ruido, me va a dejar tiempo para seguir indagando en la materia
* Cómo demonios voy a factorizar algunas matrizotas que tengo en el disco duro

