---
author: Carlos J. Gil Bellosta
categories:
- programación
- r
date: 2016-06-27 08:13:56+00:00
draft: false
lastmod: '2025-04-06T19:09:58.288379'
related:
- 2017-03-16-todo-lo-que-sucede-en-r-es-una-llamada-a-una-funcion.md
- 2020-01-21-de-texto-a-funcion.md
- 2015-02-11-recurrencia-recurrente.md
- 2011-03-16-parentesis-corchetes-y-rendimiento-en-r.md
- 2014-07-04-vectorizacion-en-r-un-contraejemplo.md
tags:
- programación
- r
- trucos
- lazy evaluation
title: R es un vago
url: /2016/06/27/r-es-un-vago/
---

Si creo la función

{{< highlight R >}}
foo <- function(a,b) a*a + b
{{< / highlight >}}

y la llamo mediante

{{< highlight R >}}
foo(1 + 1,3)
{{< / highlight >}}

pueden ocurrir dos cosas: o bien que R precalcule `1+1` y la función ejecute `2 * 2 + 3` o bien que la función ejecute directamente `(1+1)*(1+1)+3`. Pero, ¿qué es lo que hace realmente? Si escribimos

{{< highlight R >}}
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

{{< highlight R >}}
> foo(f1(2), f2(3))
[1] "Soy f1"
[1] "Soy f2"
[1] 7
{{< / highlight >}}

lo que significa que `f1` ha sido llamada una única vez. Es decir, R resuelve sus argumentos antes de aplicar la función. Pero hay más:

{{< highlight R >}}
foo.alt <- function(a, b) a*a
foo.alt(f1(2), f2(3))
{{< / highlight >}}

produce

{{< highlight R >}}
> foo.alt(f1(2), f2(3))
[1] "Soy f1"
[1] 4
{{< / highlight >}}

Es decir, resuelve el primer argumento pero no el segundo porque se ha dado cuenta de que no se usa.

¡Qué vago es R!