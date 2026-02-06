---
author: Carlos J. Gil Bellosta
categories:
- r
date: 2015-07-02 08:13:54+00:00
draft: false
lastmod: '2025-04-06T19:08:44.011474'
related:
- 2011-10-26-herramientas-de-depuracion-en-r.md
- 2017-12-11-cuidado-con-los.md
- 2010-11-24-programacion-funcional-en-r-filter.md
- 2013-03-04-cortar-una-cadena-por-un-caracter-solo-cuando-no-forme-parte-de-una-subcadena-entrecomillada.md
- 2011-05-13-consejos-para-utilizar-r-en-produccion.md
tags:
- r
- trucos
- errores
title: Mejores mensajes de error con deparse + substitute
url: /2015/07/02/mejores-mensajes-de-error-con-deparse-substitute/
---

El código

{{< highlight R >}}
foo <- function(df, column.name){
    if (!column.name %in% colnames(df))
      stop("Column ", column.name, " not found in ", deparse(substitute(df)))
    mean(df$column.name)  # por ejemplo
  }

foo(iris, "petal.area")
{{< / highlight >}}

lanza el error

`Error in foo(iris, "petal.area") : Column petal.area not found in iris`

que es mucho más informativo gracias a la acción combinada de `deparse + substitute`.

En particular, `substitute` evita que R _resuelva_ el valor de `df`, es decir, devuelve un _símbolo_, la referencia a `df`, en lugar de su contenido. Luego, `deparse` transforma ese símbolo en su representación textual, en el nombre del objeto.
