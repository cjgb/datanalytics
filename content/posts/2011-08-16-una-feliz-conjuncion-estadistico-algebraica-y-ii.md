---
author: Carlos J. Gil Bellosta
date: 2011-08-16 06:52:30+00:00
draft: false
title: Una feliz conjunción estadístico-algebraica (y II)

url: /2011/08/16/una-feliz-conjuncion-estadistico-algebraica-y-ii/
categories:
- estadística
- r
tags:
- estadística
- r
- tablas de contingencia
- cca
- svd
- anacor
---

Abandonamos el otro día nuestra discusión sobre la [feliz conjunción estadístico-algebraica](http://www.datanalytics.com/2011/08/12/una-feliz-conjuncion-estadistico-algebraica/) que subyace a esa técnica conocida como análisis de correspondencias en el punto en que habíamos descompuesto la matriz $latex B$ de la forma $latex B = PDQ^\prime$, donde $latex P$ y $latex Q$ son matrices cuyas columnas son vectores ortonormales $latex p_i$ y $latex q_j$ y $latex D$ es una matriz diagonal (aunque no necesariamente cuadrada) cuyos elementos de la diagonal (en orden decreciente) son $latex \lambda_k$.

Entonces, la matriz $latex B$ puede descomponerse como una suma de matrices de estructura más simple de la forma $latex B = PDQ^\prime = \sum_i \lambda_i p_i q^\prime_i.$

En el caso que estudiábamos el otro día, podemos hacer


{{< highlight R "linenos=true" >}}
b.i <- function( i ) svd.b$d[i] * outer( svd.b$u[,i], svd.b$v[,i] )
b.i( 1 ) # primer sumando
b.i( 2 ) # segundo sumando

b – ( b.i( 1 ) + b.i( 2 ) ) # la aproximación es razonable con la suma de dos componentes
{{< / highlight >}}



Cabe esperar que los valores más grandes de la matriz $latex B$ (es decir, las desviaciones mayores con respecto a la tabla esperada en situaciones de independencia) tengan que ver con los valores más grandes (en términos absolutos) de $latex p_1$ y $latex q_1$. En efecto, en nuestro caso, el valor más grande de B (_dark_/_dark_) es 18.53 y coincide con el cruce de la componente más alta de $latex p_1$, 0.78, y la de $latex q_1$, 0.67.

Nótese, además, cómo las componentes de $latex p_1$ y $latex q_1$ son (casi, casi) crecientes. De ahí que $latex \lambda_1 p_1 q^\prime_1$ recoja la estructura diagonal de la tabla y el hecho de que quienes tienen el pelo más oscuro tienden a tener, también, los ojos más oscuros.

Si el otro día descompusimos el valor del estadístico $latex \chi^2$ como la suma de los valores $latex \lambda_i^2$, ahora podemos advertir cómo $latex \lambda_1^2$ representa el 87 % del mismo y, por lo tanto, deducir que gran parte de la falta de independencia en la tabla se debe al efecto previamente identificado. Si tal efecto no existiese, entonces


{{< highlight R "linenos=true" >}}
pchisq( sum( svd.b$d[-1]^2 ), (nrow( b ) -1 ) * (ncol( b ) -1 ), lower.tail = F )
# 2.248518e-29
{{< / highlight >}}


indica que la falta de independencia todavía sería significativa. Pero si no existiesen ninguno de los dos principales efectos, se tendría


{{< highlight R "linenos=true" >}}
pchisq( sum( svd.b$d[-(1:2)]^2 ), (nrow( b ) -1 ) * (ncol( b ) -1 ), lower.tail = F )
# 0.9692099
{{< / highlight >}}


y no podría descartarse la hipótesis de independencia.

Es habitual realizar una representación gráfica de los principales efectos, típicamente los dos primeros. Por ejemplo, el comando `biplot(corresp(a, nf = 2))` produce


[![](/wp-uploads/2011/08/biplot_correspondence_analysis.png#center)
](/wp-uploads/2011/08/biplot_correspondence_analysis.png#center)



Este gráfico, de alguna manera, representa los vectores $latex p_1, p_2, q_1$ y $latex q_2$. Y digo _de alguna manera_ porque aplica cierta normalización sobre los mismos. Admito que siempre me ha sorprendido que puedan representarse churras y merinas (filas y columnas, quiero decir) sobre los mismos ejes de una manera que tenga sentido. Y el sentido es el siguiente: en la matriz $latex B$ habrá una entrada para la combinación _black_/_blue_ (ojos azules, pelo negro). Como los valores de dichos puntos en el eje X son opuestos (y relativamente grandes), la contribución de la primera componente de la descomposición en dicha entrada, el producto de las dos coordenadas, será grande (en valor absoluto) y negativo: ¡ojos claros deberían corresponderse con pelo claro! En la segunda componente (eje Y), ambas variables tienen valores positivos aunque de valor sustancialmente menor. El producto de ambas coordenadas corrige el valor inicial.

De hecho, examinando las coordenadas Y (correspondientes a la segunda componente) podemos comprender mejor qué fenómeno recoge la segunda componente: una cierta sobreabundancia de personas con ojos claros y pelo oscuro y viceversa. Y a la vez, una proporción mayor de _medium_/_medium_ de la que se deduciría únicamente de la primera componente.

Los interesados en abundar más sobre el el asunto y aprender técnicas adicionales de representación gráfica de este tipo de datos pueden echarle un vistazo al artículo _[Simple and Canonical Correspondence Analysis Using the R Package`anacor`](http://cran.r-project.org/web/packages/anacor/vignettes/anacor.pdf)_ de J. de Leeuw y P. Mair.
