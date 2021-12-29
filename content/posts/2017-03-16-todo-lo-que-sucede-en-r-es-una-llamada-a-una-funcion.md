---
author: Carlos J. Gil Bellosta
date: 2017-03-16 15:44:30+00:00
draft: false
title: Todo lo que sucede en R es una llamada a una función

url: /2017/03/16/todo-lo-que-sucede-en-r-es-una-llamada-a-una-funcion/
categories:
- programación
- r
tags:
- programación
- r
- trucos
---

En serio, es así. ¿También `if`? Pues también. De hecho,

{{< highlight R "linenos=true" >}}
`if`(1 == 3, print("a"), print("b"))
{{< / highlight >}}

Y eso permite, por ejemplo, que funcionen expresiones tales como

{{< highlight R "linenos=true" >}}
a <- if (1 == 3) 4 else 5
{{< / highlight >}}

tan útiles como poco empleadas en general. También son funciones `(`, `{` y otras que aparecen en [la sección _.Internal vs .Primitive_ del documento _R Internals_](https://cran.r-project.org/doc/manuals/r-release/R-ints.html#g_t_002eInternal-vs-_002ePrimitive).
