---
author: Carlos J. Gil Bellosta
date: 2014-01-16 08:31:50+00:00
draft: false
title: Macros sintácticas con R

url: /2014/01/16/macros-sintacticas-con-r/
categories:
- r
- programación
tags:
- macros
- r
- sas
---

Creo que muchos hemos tropezado con las macros alguna vez. Yo conocía las del [preprocesador de C](http://es.wikipedia.org/wiki/Preprocesador_de_C) o el [tinglado que tiene SAS](http://support.sas.com/documentation/cdl/en/mcrolref/61885/HTML/default/viewer.htm#macro-stmt.htm). Y nunca fui muy amigo de ellas.

Pero el otro día leí [_Stop Writing JavaScript Compilers! Make Macros Instead_](http://jlongster.com/Stop-Writing-JavaScript-Compilers--Make-Macros-Instead) y se me alargaron los dientes. Así que he buscado información adicional hasta hacerme una idea de la diferencia entre una macro que se limita a reemplazar texto, una macro procedural —como las del lenguaje [PL/I](http://en.wikipedia.org/wiki/PL/I), antecesor e inspirador de SAS— y las sintácticas, como las que tiene Lisp (¿cuándo tendré tiempo para aprenderlo en condiciones?).

No tengo todavía muy claro hasta dónde pueden llevarme y cuáles de sus usos son convenientes para mis fines. Porque no, yo no construyo sublenguajes o minilenguajes. Pero entiendo que pueden servir para construir código aún más breve y expresivo, como en el siguiente ejemplo:

{{< highlight R "linenos=true" >}}
library(gtools)

intercambia <- defmacro(a, b, expr = {
  tmp <- a
  a <- b
  b <- tmp
})

x <- 1
y <- 2

intercambia(x,y)

x
# [1] 2
y
# [1] 1
{{< / highlight >}}

La función `defmacro` del paquete `gtools` permite definir macros sintácticas. Se parecen a funciones, pero no lo son: por ejemplo, el cuerpo de la macro no se ejecuta en un espacio de nombres propio, como las funciones, por lo que el efecto de la asignación de variables perdura más allá de la llamada a la función.

El ejemplo anterior sirve también para ilustrar algunos _caveats_ de las macros (al menos de la actual implementación de R): que no son [higiénicas](http://en.wikipedia.org/wiki/Hygienic_macro):

{{< highlight R "linenos=true" >}}
tmp <- 7
intercambia(x,y)
tmp
# [1] 2
{{< / highlight >}}

Como puede verse, la macro, interna y subrepticiamente, ha cambiado el valor de la variable `tmp`. Una implementación _higiénica_ de `defmacro` (como la que existe en otros lenguajes) permitiría evitar ese tipo de efectos secundarios.

¿A alguien se le ocurren otros usos de las macros?
