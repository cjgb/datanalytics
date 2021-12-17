---
author: Carlos J. Gil Bellosta
date: 2020-01-21 17:46:00+00:00
draft: false
title: De texto a función

url: /2020/01/21/de-texto-a-funcion/
categories:
- r
tags:
- programación
- r
---




**Problema:** convertir una expresión definida por un usuario (p.e., algo como `"a+b"`) en una función (i.e., `function(a, b) a + b`).







**Solución:**







    gen_foo <- function(expr){
        my_args <- all.vars(parse(text = expr))
        expr <- paste0("function(",
                       paste(my_args, collapse = ","),
                       ") ", expr)
        eval(parse(text = expr))
    }







**Demostración:**







    multiplica <- gen_foo("a * b")
    multiplica(5, 31)



