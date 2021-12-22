---
author: Carlos J. Gil Bellosta
date: 2014-10-10 07:13:55+00:00
draft: false
title: Bootstrap bayesiano

url: /2014/10/10/bootstrap-bayesiano/
categories:
- estadística
- r
tags:
- bootstrap
- estadística
- estadística bayesiana
- r
---

Hoy voy a hablar de esa especie de oxímoron que es el el _bootstrap_ bayesiano. Comenzaré planteando un pequeño problema bien conocido: tenemos números $latex x_1, \dots, x_n$ y hemos calculado su media. Pero nos preguntamos cómo podría variar dicha media (de realizarse otras muestras).

La respuesta de [Efron (1979)](http://projecteuclid.org/euclid.aos/1176344552) es esta:

{{< highlight R "linenos=true" >}}
replicate(n, mean(sample(x, length(x), replace = TRUE)))
{{< / highlight >}}

Es decir, crear muestras de $latex x_i$ con reemplazamiento y hacer la media de cada una de ellas para obtener su presunta distribución (o una muestra de la presunta distribución de esa media).

Lo anterior puede replantearse así:

* Obtener muchas muestras de enteros mayores que o iguales a cero que sumen n.
* Para cada muestra, $latex n_{i1}, \dots, n_{in}$ calcular $latex 1/n \sum n_{ij}x_j$

Dos años después, a [Rubin (1981)](http://projecteuclid.org/euclid.aos/1176345338) se le ocurrió el _bootstrap_ bayesiano que consiste, esencialmente, en relajar la condición de que los pesos sean enteros. Es decir, se le ocurrió reemplazar la línea de código de Efron por

{{< highlight R "linenos=true" >}}
library(gtools)
rdirichlet(n, rep(1, length(x))) %*% x
{{< / highlight >}}

que viene a ser $latex \sum p_{ij}x_j$ donde $latex \sum_j p_{ij} = 1$ y $latex p_{ij} \ge 0$. (Nótese que la llamada `gtools::rdirichlet(1, rep(1,5))` de vuelve 5 números positivos que suman uno). Es decir, la expresión anterior es una versión _suavizada_ del tal vez demasiado rotundo muestreo con reemplazo: a veces usas más un valor, a veces menos.

Y sí, de eso a que la técnica sea bayesiana yo veo un mundo. Pero bueno, alguna gente vive de encontrar interpretaciones bayesianas a todas las cosas, matar un montón de árboles para ponerlo todo en negro sobre blanco, llamar a todo el proceso _investigación básica_ y facturármelo vía IRPF. Pero esa es otra historia.

¡Ah! Pero hay individuos aún peores. Conozco uno, uno de esos bayesianos de la investigación básica, que mató árboles a mansalva para explicar que el bayesianismo es el culmen de lo habido y por haber, que él iba a solucionar de una vez por todas el problema de indentificar la distribución de esas medias aplicando esas técnicas de las que él es profeta y luego, ¡qué escándalo!, en la última diapositiva pinta un trozo de código de R que es una versión torpe e ineficiente de la versión frecuentista del _bootstrap_. ¡Carajo!
