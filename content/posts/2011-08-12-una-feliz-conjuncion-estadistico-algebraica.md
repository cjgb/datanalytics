---
author: Carlos J. Gil Bellosta
date: 2011-08-12 07:17:48+00:00
draft: false
title: Una feliz conjunción estadístico-algebraica

url: /2011/08/12/una-feliz-conjuncion-estadistico-algebraica/
categories:
- estadística
- r
tags:
- estadística
- r
- tablas de contingencia
- cca
- svd
---

Tomemos una tabla de contingencia, p.e.,


{{< highlight R >}}
library(MASS)
a <- as.matrix(caith)

#        fair red medium dark black
# blue    326  38    241  110     3
# light   688 116    584  188     4
# medium  343  84    909  412    26
# dark     98  48    403  681    85
{{< / highlight >}}


que se refiere a los habitantes de una población de Escocia clasificados según el color de los ojos y el pelo. ¿Habrá una relación entre ambas variables?

La teoría nos dice que podemos aplicar un test de independencia y obtener


{{< highlight R >}}
summary(as.table(a))
# Number of cases in table: 5387
# Number of factors: 2
# Test for independence of all factors:
#         Chisq = 1240, df = 12, p-value = 4.124e-258
{{< / highlight >}}



Es decir, parece haber una relación entre filas y columnas de la tabla que excluye de manera razonable la hipótesis de independencia entre las variables consideradas.

Pero podemos proceder de otra manera. De existir independencia, las frecuencias esperadas en la tabla serían


{{< highlight R >}}
n <- sum(a)

prop.filas    <- rowSums( a ) / n
prop.columnas <- colSums( a ) / n

a.hat <- n * outer( prop.filas, prop.columnas )

#            fair      red   medium     dark    black
# blue   193.9280 38.11918 284.8275 185.3978 15.72749
# light  426.7496 83.88342 626.7793 407.9785 34.60924
# medium 479.1479 94.18303 703.7383 458.0720 38.85873
# dark   355.1745 69.81437 521.6549 339.5517 28.80453
{{< / highlight >}}


¿En qué medida difieren `a` y `a.hat`? Consideremos su diferencia


{{< highlight R >}}
a - a.hat

#             fair         red     medium       dark     black
# blue    132.0720  -0.1191758  -43.82755  -75.39781 -12.72749
# light   261.2504  32.1165769  -42.77928 -219.97847 -30.60924
# medium -136.1479 -10.1830332  205.26174  -46.07203 -12.85873
# dark   -257.1745 -21.8143679 -118.65491  341.44830  56.19547
{{< / highlight >}}


Esta diferencia muestra la desviación en términos absolutos entre los conteos obtenidos y los esperados y ofrece cierta información acerca de la estructura de la tabla (¿nadie aprecia una cierta estructura diagonal en los datos?). No obstante, una diferencia de 10 cuando el valor esperado es 100 no es tan _grave_ como una diferencia de 10 cuando el valor esperado es 5. Eso sugiere realizar algún tipo de normalización. Por ejemplo (y la justificaremos en un momento), se puede hacer


{{< highlight R >}}
b <- (a - a.hat) / sqrt(a.hat)

#             fair         red    medium       dark     black
# blue     9.483979 -0.01930262 -2.596906  -5.537407 -3.209321
# light   12.646503  3.50663997 -1.708741 -10.890844 -5.203033
# medium  -6.219798 -1.04927862  7.737531  -2.152635 -2.062785
# dark   -13.646052 -2.61077971 -5.195102  18.529854 10.470584
{{< / highlight >}}


La estructura diagonal de la matriz de diferencias es ahora más clara (¿o sólo me lo parece a mí?). El motivo de elegir ese factor de normalización y no otro es que


{{< highlight R >}}
sum(b^2)
# 1240.039
{{< / highlight >}}


coincide con el valor obtenido para el estadístico $latex \chi^2$ más arriba. En efecto, hemos construido a mano el estadístico del test de independencia, que sigue una distribución $latex \chi^2$ con (4-1)(5-1) = 12 grados de libertad. En efecto,


{{< highlight R >}}
pchisq( sum( b^2 ), (nrow( b ) -1 ) * (ncol( b ) -1 ), lower.tail = F )
# 4.123993e-258
{{< / highlight >}}


que es el mismo valor obtenido antes (si se se consideran relevantes las comparaciones de valores tan minúsculos).

La feliz coincidencia a la que se refiere el título de esta entrada se refiere a la que existe entre el álgebra de primero y la estadística de tercero. En efecto, si $latex A = ( a _{ij})$, entonces $latex \sum a_{ij}^2$ es igual a la traza de $latex A^\prime A$. ¡Lo juro!

Así,


{{< highlight R >}}
sum( diag( t(b) %*% b ) )
# 1240.039
{{< / highlight >}}


Y, ¿por qué es útil esa relación? Pues porque la traza de $latex A^\prime A$ es la suma de los vectores propios de dicha matriz, que son, por otra parte, el cuadrado de sus valores singulares. En efecto,


{{< highlight R >}}
sum( ( svd( b )$d )^2 )
# 1240.039
{{< / highlight >}}


La descomposición en valores singulares de una matriz $latex B$ es $B = PDQ'$. Pero  acabo aquí no sin antes anotar en mi vademécum lo siguiente: escribir una entrada en el blog en la que se repasen las propiedades algebraicas de la descomposición $latex B = PDQ'$ y de las matrices $latex P$ y $latex Q$ para deducir de ellas propiedades estadísticas que nos ayuden a comprender mejor la estructura de la tabla de contingencia.

**Nota:** los más avezados de mis lectores habrán adivinado que me estoy refieriendo sin nombrarlo al [análisis de correspondencias](http://es.wikipedia.org/wiki/An%C3%A1lisis_de_correspondencias); es cierto pero no he querido hacerlo manifiesto por si palabras de tantas sílabas asustaban a algún potencial lector.
