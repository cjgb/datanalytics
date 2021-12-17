---
author: Carlos J. Gil Bellosta
date: 2018-10-10 08:13:03+00:00
draft: false
title: Un resultado probabilístico contraintuitivo (parte I)

url: /2018/10/10/un-resultado-probabilistico-contraintuitivo-parte-i/
categories:
- probabilidad
tags:
- paradoja
- probabilidad
---

A elige dos números con una distribución de probabilidad _cualquiera_,




    generador <- function() rlnorm(2, 3, 4)




y los guarda ocultos. A B le deja ver uno al azar (sin pérdida de generalidad, el primero). Y B tiene que decidir si el que ve es el más alto de los dos (en cuyo caso, gana un premio, etc.). Veamos a B actuar de manera naive:




    estrategia.naive <- function(observed){
      sample(1:2, 1)
    }




Dejemos a A y B jugar repetidamente a este juego:




    juego <- function(estrategia){
      x <- generador()
      choice <- estrategia(x[1])
      x[choice] == max(x)
    }

    res <- replicate(1e6, juego(estrategia.naive))
    mean(res)




Pues sí, como cabe esperar, B tiene una probabilidad de .5 de acertar en el largo plazo.

Sin embargo, B tiene una estrategia superior a la de elegir al azar:




    otro_generador <- function() rexp(1, 1)
    estrategia.guay <- function(observed){
      y <- otro_generador()
      ifelse(y > observed, 2, 1)
    }

    res <- replicate(1e6, juego(estrategia.guay))
    mean(res)




Que me da una probabilidad de éxito aproximada del .65. La estrategia es la siguiente:



	  1. B elige una distribución de probabilidad cualquiera (mañana matizaré qué levísimas restricciones operan sobre esta otra distribución)
	  2. B toma un valor al azar $latex y$ de acuerdo con dicha distribución.
	  3. Si el valor observado $latex o > y$, se queda con $latex o$; si no, se decanta por el otro que no ha visto.


Y funciona, tú.

Todo junto (por si quieres probar con otras distribuciones):




    generador <- function() rlnorm(2, 3, 4)

    estrategia.naive <- function(observed){
      sample(1:2, 1)
    }

    juego <- function(estrategia){
      x <- generador()
      choice <- estrategia(x[1])
      x[choice] == max(x)
    }

    res <- replicate(1e6, juego(estrategia.naive))
    mean(res)

    otro_generador <- function() rexp(1, 1)
    estrategia.guay <- function(observed){
      y <- otro_generador()
      ifelse(y > observed, 2, 1)
    }

    res <- replicate(1e6, juego(estrategia.guay))
    mean(res)




Mañana, más sobre este problema.
