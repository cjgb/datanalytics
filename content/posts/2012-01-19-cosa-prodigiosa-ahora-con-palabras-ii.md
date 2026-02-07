---
author: Carlos J. Gil Bellosta
categories:
- probabilidad
- r
date: 2012-01-19 06:32:41+00:00
draft: false
lastmod: '2025-04-06T18:45:51.919680'
related:
- 2012-01-31-cosa-prodigiosa-iii-epilogo.md
- 2018-10-10-un-resultado-probabilistico-contraintuitivo-parte-i.md
- 2012-01-12-cosa-prodigiosa-sin-palabras-i.md
- 2011-05-12-c2bfque-nos-jugamos.md
- 2022-09-15-perder-ganando.md
tags:
- martingala
- probabilidad
- r
title: Cosa prodigiosa, ahora con palabras (II)
url: /2012/01/19/cosa-prodigiosa-ahora-con-palabras-ii/
---

Tal como prometí hace ahora una semana, voy a añadir las palabras que faltaban en [aquella entrada](https://datanalytics.com/2012/01/12/cosa-prodigiosa-sin-palabras-i/). Pero primero, imaginad un bar en el que se venden cafés y cervezas. El coste de servir un café es de 1.10 euros pero se vende por 1. El coste de servir una cerveza es 1.30 euros pero se vende por 1.10. Entran los clientes y piden o café o cerveza. ¡Y resulta que a fin de mes el bar hace dinero!

¿Es posible eso? No, obviamente... ¿o sí? Sigamos leyendo.

En la entrada original proponía tres juegos. El primero, descrito con código así,

{{< highlight R >}}
jugar <- function( n, make.step ){
  tmp <- rep( 0L, n)
  for( i in 2:n )
    tmp[i] <- make.step( tmp[i-1] )
  tmp
}

juego.s <- function( x, prob.perder = 0.51 ){
  x + ifelse( runif(1) < prob.perder, -1L, 1L )
}

res.juego.s <- replicate( 1000, jugar( 1000, juego.s )[1000] )
hist( res.juego.s )
fivenum( res.juego.s )
{{< / highlight >}}

es simple: se tira una moneda y si sale cara, recibes un euro y, si sale cruz, lo pierdes. Aunque la moneda tiene un sesgo de manera que se gana/pierde con probabilidad 0.49/0.51. Como puede observarse, en el largo plazo se tiende a perder dinero si se juega repetidamente.

El segundo juego es parecido al primero pero algo más complejo:


{{< highlight R >}}
juego.c <- function( x ){
  prob.perder <- ifelse( x %% 3 == 0, 0.905, 0.255 )
  juego.s( x, prob.perder )
}

res.juego.c <- replicate( 1000, jugar( 1000, juego.c )[1000] )

hist( res.juego.c )
fivenum( res.juego.c )
{{< / highlight >}}

Se juega con dos monedas:

* si la cantidad ganada hasta la fecha es múltiplo de 3, se juega con una con la que la probabilidad de ganar es de solo el 9.5 % pero
* en el caso contrario, se juega con otra con la que la probabilidad de ganar es del 74.5 %.

Este es otro juego en el que, jugando repetidamene, también se acaba perdiendo. Para verlo,solo hay que darse cuenta de que las situaciones en que la cantidad ganada o perdida es múltiplo de 3 representan una especie de barrera probabilística: en ellas casi siempre se pierde. Y las probabilidades de ganar y perder con ambas monedas se han elegido de tal manera que es —un poquito — más probable pasar de tener `3n` euros a `3(n-1)` euros que a tener `3(n+1)` euros.

Así, si observamos el juego solo cuando la cantidad acumulada es múltiplo de tres (obviando lo que pasa en las jugadas intermedias), veremos que se trata de un juego parecido al anterior.

El tercero de los juegos es más interesante. Es similar a los anteriores,solo que utiliza una moneda más. En cada jugada, se tira la última moneda y, si sale cara (con probabilidad 0.5), se juega al primero de los juegos y, si sale cruz, al segundo:

{{< highlight R >}}
juego.fin <- function( x ){
  sample( c( juego.c, juego.s), 1 )[[1]](x)
}

res.juego.fin <- replicate( 1000, jugar( 1000, juego.fin )[1000] )

hist( res.juego.fin )
fivenum( res.juego.fin )
{{< / highlight >}}

Lo sorprendente de este juego es que, con él, ¡se gana dinero! Es decir, jugando al azar a uno u otro juego perdedores, puedes acabar jugando a un juego ganador.

¿No es increíble que el bar pueda acabar ganando dinero perdiéndolo en cada venta?

La semana que viene, os cuento el rollo matemático que hay detrás de este singular fenómeno. ¡Prometido!

(Quizás, entre tanto, alguien quiera ir avanzando y enterándose de qué es una supermartingala y de qué va eso del teorema del tiempo de parada óptimo que el ejemplo anterior parece violar).