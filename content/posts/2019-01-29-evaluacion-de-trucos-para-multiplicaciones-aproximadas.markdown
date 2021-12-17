---
author: Carlos J. Gil Bellosta
date: 2019-01-29 08:13:40+00:00
draft: false
title: Evaluación de trucos para multiplicaciones aproximadas

url: /2019/01/29/evaluacion-de-trucos-para-multiplicaciones-aproximadas/
categories:
- r
- varios
tags:
- aproximaciones
- libros
- r
---

En [_Street Fighting Mathematics_](https://mitpress.mit.edu/books/street-fighting-mathematics) (leedlo) hay un capítulo en el que se discuten trucos para realizar mental y aproximadamente operaciones del tipo 3600 × 4.4 × 10^4 × 32.




La recomendación es la siguiente: contar ceros primero, gestionar las cifras significativas después. En el caso anterior, el autor identifica 8 ceros (tres del 3600, cuatro del 10^4 y uno del 32), quedando como _cifras significativas_ 3.6, 4.4 y 3.2.




Para estas últimas, recomienda aproximarlas a 1, _pocos_ (alrededor de 3) y 10. _Pocos_ es una cifra que vale tres y cuyo cuadrado es 10. Por lo tanto, 3.6 × 4.4 × 3.2 es el cubo de _pocos_, es decir, treinta. De manera que la aproximación de 3600 × 4.4 × 10^4 × 32 es un tres seguido de nueve ceros (en realidad, es un cinco seguido de nueve ceros).




Así que en el ejemplo del libro la cosa, más o menos, funciona. Como no podía ser de otra manera. Pero, ¿y en general?




Lo que podemos hacer es generar muchas secuencias de secuencias de números, aplicar el triquito a cada una de ellas y comparar el producto real con el estimado. Para secuencias de tres números (entre 1 y 10), se obtiene la siguiente distribución del log2 de los cocientes:






![](/wp-uploads/2019/01/estimation_error.png)








Y el código:






    simplificar <- function(x){
      if (x < 1.7)
        return(1L)
      if (x < 5)
        return(3L)
      return(10L)
    }

    multiplicar <- function(x){

      x <- x[x != 1L]

      if (length(x) == 0)
        return(1)

      prod <- 10^(length(x[x == 10L]))

      x <- x[x != 10L]

      if (length(x) == 0)
        return(prod)

      x <- length(x)

      prod <- prod * 10^(x %/% 2) * 3^(x %% 2)
      prod
    }


    foo <- function(n){
      x <- x <- runif(n, min = 1, max = 10)
      c(prod(x), multiplicar(sapply(x, simplificar)))
    }

    res <- t(replicate(10000, foo(3)))

    hist(log2(res[,1] / res[,2]), breaks = 50,
         freq = FALSE,
         col = "steelblue",
         main = "log2 del ratio real/estimación)",
         xlab = "", ylab = "")

    abline(v = -1, col = "red")
    abline(v =  1, col = "red")


