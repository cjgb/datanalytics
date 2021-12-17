---
author: Carlos J. Gil Bellosta
date: 2021-01-12 09:13:00+00:00
draft: false
title: Sobre la relación entre la teoría de la relatividad y la regresión logística

url: /2021/01/12/sobre-la-relacion-entre-la-teoria-de-la-relatividad-y-la-regresion-logistica/
categories:
- estadística
tags:
- glm
- regresión logística
- relatividad
---




Según la teoría de la relatividad, las velocidades (lineales) se suman así:







    v1 <- 100000
    v2 <- 100000
    velocidad_luz <- 300000

    suma_relativista <- function(x,y){
      (x + y) / (1 + x * y / velocidad_luz^2)
    }

    suma_relativista(v1, v2)
    # 180000







Lo que es todavía menos conocido es que esa operación es equivalente a la suma ordinaria de velocidades a través de una transformación de ida y vuelta vía la arcotangente hiperbólica (véase [esto](https://www.johndcook.com/blog/2020/12/29/relativistic-addition/)). En concreto:







    f1 <- function(x) {
      atanh(x / velocidad_luz)
    }

    f2 <- function(x) {
      velocidad_luz * tanh(x)
    }

    f2(f1(v1) + f1(v2))
    # 180000







Ahora imaginemos un universo donde la velocidad máxima no es la de la luz, sino que solo están permitidas las velocidades entre 0 y 1:







    p1 <- .9
    p2 <- .9

    flog1 <- function(x) {
      atanh(2 * x - 1)
    }

    flog2 <- function(x) {
      (1 + tanh(x)) / 2
    }

    flog2(flog1(p1) + flog1(p2))
    # 0.9878049







Es decir, si _combinamos_ un sujeto que se mueve por si solo a una p = .9 con otro que se mueve con una p = .9,  obtenemos una p combinada de .987.







Es lo que ocurre en el modelo logístico (supuesto un término independiente de 0, i.e., una tasa base del 50%). Si un sujeto tiene un valor en una variable X que por sí sola sugiere una probabilidad de evento de .9 y otra con un valor tal que por sí solo sugiere una probabilidad también de .9, el efecto combinado es una probabilidad de .987.



