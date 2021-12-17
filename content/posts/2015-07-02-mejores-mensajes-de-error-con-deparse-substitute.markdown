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
---

foo <- function(<a href="http://inside-r.org/r-doc/stats/df">df, column.name){
      if (!column.name %in% colnames(<a href="http://inside-r.org/r-doc/stats/df">df))
        stop("Column ", column.name, " not found in ", deparse(substitute(<a href="http://inside-r.org/r-doc/stats/df">df)))

      mean(<a href="http://inside-r.org/r-doc/stats/df">df$column.name)  # por ejemplo
    }

    foo(iris, "petal.area")



Lanza el error

`Error in foo(iris, "petal.area") : Column petal.area not found in iris`

mucho más informativo gracias a `deparse + substitute`.


