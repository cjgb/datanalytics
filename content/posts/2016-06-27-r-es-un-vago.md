---
author: Carlos J. Gil Bellosta
date: 2016-06-27 08:13:56+00:00
draft: false
title: R es un vago

url: /2016/06/27/r-es-un-vago/
categories:
- computación
- r
tags:
- computación
- r
---

Si creo la función



    foo <- function(a,b) a*a + b



y la llamo mediante



    foo(1 + 1,3)



pueden ocurrir dos cosas: o bien que R precalcule `1+1` y la función ejecute `2 * 2 + 3` o bien que la función ejecute directamente `(1+1)*(1+1)+3`. Pero, ¿qué es lo que hace realmente? Si escribimos



    f1 <- function(x){
      print("Soy f1")
      x
    }

    f2 <- function(x){
      print("Soy f2")
      x
    }

    foo(f1(2), f2(3))



obtenemos



    > foo(f1(2), f2(3))
    [1] "Soy f1"
    [1] "Soy f2"
    [1] 7



lo que significa que `f1` ha sido llamada una única vez. Es decir, R resuelve sus argumentos antes de aplicar la función. Pero hay más:



    foo.alt <- function(a, b) a*a
    foo.alt(f1(2), f2(3))



produce



    > foo.alt(f1(2), f2(3))
    [1] "Soy f1"
    [1] 4



Es decir, resuelve el primer argumento pero no el segundo porque se ha dado cuenta de que no se usa.

¡Qué vago es R!
