---
author: Carlos J. Gil Bellosta
categories:
- programación
- r
date: 2017-03-16 15:44:30+00:00
draft: false
lastmod: '2025-04-06T18:47:07.747358'
related:
- 2010-08-28-la-funcion-ifelse-a-la-sas.md
- 2016-06-27-r-es-un-vago.md
- 2010-11-24-programacion-funcional-en-r-filter.md
- 2014-05-14-y-sin-embargo-te-quiero.md
- 2010-04-21-para-que-copien-peguen-y-disfruten.md
tags:
- programación
- r
- trucos
title: Todo lo que sucede en R es una llamada a una función
url: /2017/03/16/todo-lo-que-sucede-en-r-es-una-llamada-a-una-funcion/
---

En serio, es así. ¿También `if`? Pues también. De hecho,

{{< highlight R >}}
`if`(1 == 3, print("a"), print("b"))
{{< / highlight >}}

Y eso permite, por ejemplo, que funcionen expresiones tales como

{{< highlight R >}}
a <- if (1 == 3) 4 else 5
{{< / highlight >}}

tan útiles como poco empleadas en general. También son funciones `(`, `{` y otras que aparecen en [la sección _.Internal vs .Primitive_ del documento _R Internals_](https://cran.r-project.org/doc/manuals/r-release/R-ints.html#g_t_002eInternal-vs-_002ePrimitive).