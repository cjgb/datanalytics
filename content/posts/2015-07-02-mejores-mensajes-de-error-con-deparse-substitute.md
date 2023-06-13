---
author: Carlos J. Gil Bellosta
date: 2015-07-02 08:13:54+00:00
draft: false
title: Mejores mensajes de error con deparse + substitute

url: /2015/07/02/mejores-mensajes-de-error-con-deparse-substitute/
categories:
- r
tags:
- r
- trucos
- error
---

{{< highlight R >}}
foo <- function(df, column.name){
    if (!column.name %in% colnames(df))
      stop("Column ", column.name, " not found in ", deparse(substitute(df)))

    mean(df$column.name)  # por ejemplo
  }

  foo(iris, "petal.area")
{{< / highlight >}}

Lanza el error

`Error in foo(iris, "petal.area") : Column petal.area not found in iris`

mucho más informativo gracias a `deparse + substitute`.


