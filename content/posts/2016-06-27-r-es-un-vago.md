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
- trucos
- lazy evaluation
---

Si creo la función

{{< highlight R "linenos=true" >}}
foo <- function(a,b) a*a + b
{{< / highlight >}}

y la llamo mediante

{{< highlight R "linenos=true" >}}
foo(1 + 1,3)
{{< / highlight >}}

pueden ocurrir dos cosas: o bien que R precalcule `1+1` y la función ejecute `2 * 2 + 3` o bien que la función ejecute directamente `(1+1)*(1+1)+3`. Pero, ¿qué es lo que hace realmente? Si escribimos

{{< highlight R "linenos=true" >}}
f1 <- function(x){
    print("Soy f1")
    x
}

f2 <- function(x){
    print("Soy f2")
    x
}

foo(f1(2), f2(3))
{{< / highlight >}}

obtenemos

{{< highlight R "linenos=true" >}}
> foo(f1(2), f2(3))
[1] "Soy f1"
[1] "Soy f2"
[1] 7
{{< / highlight >}}

lo que significa que `f1` ha sido llamada una única vez. Es decir, R resuelve sus argumentos antes de aplicar la función. Pero hay más:

{{< highlight R "linenos=true" >}}
foo.alt <- function(a, b) a*a
foo.alt(f1(2), f2(3))
{{< / highlight >}}

produce

{{< highlight R "linenos=true" >}}
> foo.alt(f1(2), f2(3))
[1] "Soy f1"
[1] 4
{{< / highlight >}}

Es decir, resuelve el primer argumento pero no el segundo porque se ha dado cuenta de que no se usa.

¡Qué vago es R!
