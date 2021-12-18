---
author: Carlos J. Gil Bellosta
date: 2021-05-18 09:13:00+00:00
draft: false
title: Un viejo truco para que R vuele

url: /2021/05/18/un-viejo-truco-para-que-r-vuele/
categories:
- r
tags:
- c++
- eficiencia
- paquetes
- r
- rcpp
- trucos
---

Existe un viejo truco ---mas no por ello conocido--- para que R vuele. Lo aprendí en una conferencia de uno de los padres de R (aunque ya no recuerdo quién era) en la primera década del siglo. El problema que tenía entre manos era el de ajustar unos cuantos miles de regresiones logísticas. Además de hacer uso de los métodos de paralelización, aún muy rudimentarios en la época, uno de los trucos más efectivos que utilizaba era el de _desnudar_ las funciones.

Si veis el código de la función `glm`, observaréis que se trata de una llamada a `glm.fit` incrustada en 80 líneas de programación defensiva. Pero, ¿por qué ejecutarlas si sabemos llamar a `glm.fit` directamente? Esas líneas _de más_ están ahí para facilitar el uso interactivo de R, pero son una rémora para su uso _industrial_. Etc.

Vuelvo a 2021. Un colega me escribe por [esto](https://www.overfitting.net/2021/05/apilado-por-mediana-para-eliminar.html) (resumen: quiere _apilar_ 16 fotos usando la mediana para obtener una _foto sintética_ a partir de aquellas). Tiene un array 6000 × 4000 × 16 y la manera más simple de obtener la foto sintética, i.e., hacer

{{< highlight R "linenos=true" >}}
apply(fotos, c(1, 2), median)
{{< / highlight >}}

le resulta desesperadamente lento: 15 minutos, me dice. Así que ha probado la vía de C++ y lo ha dejado en uno y medio (1.4, de hecho).

En lo que sigue, voy a intentar aplicar la técnica del desnudo, quitándole (tarito, tariro) prendas a `median` en cada paso:

{{< highlight R "linenos=true" >}}
nx <- 600
ny <- 400

fotos <- array(rnorm(nx * ny * 16), dim = c(ny, nx, 16))

# Original
t0 <- system.time(
  res0 <- apply(fotos, c(1, 2), median)
)

# Desnudando median
my_median <- function(x){
  tmp <- sort(x)
  (tmp[8] + tmp[9]) / 2
}

t1 <- system.time(
  res1 <- apply(fotos, c(1, 2), my_median)
)

# Desnudando median + ordenación parcial
my_median_partial <- function(x){
  tmp <- sort.int(x, partial = c(8, 9))
  (tmp[8] + tmp[9]) / 2
}

t2 <- system.time(
  res2 <- apply(fotos, c(1, 2), my_median_partial)
)

# Desnudando sort
my_median_internal <- function(x){
  tmp <- .Internal(sort(x, TRUE))
  (tmp[8] + tmp[9]) / 2
}

t3 <- system.time(
  res3 <- apply(fotos, c(1, 2), my_median_internal)
)
{{< / highlight >}}

_**Nota:** en lo anterior, he reducido a la centésima parte el tamaño del problema original: las fotos son ahora 600 × 400._

Podéis ejecutar el código vosotros mismos. Espero que obtengáis el mismo resultado que yo: que el ratio `t0 / t3` es aproximadamente de 15, es decir, la misma ganancia que usando C++.

Lo cual tiene sentido porque en el fondo, `.Internal(sort(x, TRUE))` es, casi seguro, una llamada a código nativo compilado, tan bueno o más como el que se pueda obtener con Rcpp.



