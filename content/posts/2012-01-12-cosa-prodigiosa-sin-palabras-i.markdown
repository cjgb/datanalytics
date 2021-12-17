---
author: Carlos J. Gil Bellosta
date: 2012-01-12 07:14:49+00:00
draft: false
title: Cosa prodigiosa, sin palabras (I)

url: /2012/01/12/cosa-prodigiosa-sin-palabras-i/
categories:
- probabilidad
- r
tags:
- probabilidad
- r
---

Hoy voy a hacer mención a una cosa prodigiosa. Pero sin palabras. Voy a regalar a mis lectores tres pedazos de código que son este



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
    <a href="http://inside-r.org/r-doc/stats/fivenum">fivenum( res.juego.s )



este



    juego.c <- function( x ){
      prob.perder <- ifelse( x %% 3 == 0, 0.905, 0.255 )
      juego.s( x, prob.perder )
    }

    res.juego.c <- replicate( 1000, jugar( 1000, juego.c )[1000] )

    hist( res.juego.c )
    <a href="http://inside-r.org/r-doc/stats/fivenum">fivenum( res.juego.c )



y este otro



    juego.fin <- function( x ){
      sample( c( juego.c, juego.s), 1 )[[1]](x)
    }

    res.juego.fin <- replicate( 1000, jugar( 1000, juego.fin )[1000] )

    hist( res.juego.fin )
    <a href="http://inside-r.org/r-doc/stats/fivenum">fivenum( res.juego.fin )



Es una cosa tan maravillosa que no les voy a robar la oportunidad de averiguar por sí mismos en qué consiste. La semana que viene, en la segunda entrega, comentaré el código anterior y explicaré a qué se refiere y, si nadie lo ha dado a conocer antes, dónde reside lo miraculoso del asunto.

Y en la tercera, la última, ofreceré referencias y plantearé un problema que no sé si alguien podrá resolver (y si lo resuelve en la dirección que sospecho, habrá encontrado un sorprendente _bug_ donde menos cabría esperarlo).
