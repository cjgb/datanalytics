---
author: Carlos J. Gil Bellosta
categories:
- r
date: 2020-01-21 17:46:00+00:00
draft: false
lastmod: '2025-04-06T19:00:08.674340'
related:
- 2016-06-27-r-es-un-vago.md
- 2015-02-25-todos-contra-todos.md
- 2017-03-16-todo-lo-que-sucede-en-r-es-una-llamada-a-una-funcion.md
- 2015-02-11-recurrencia-recurrente.md
- 2010-11-24-programacion-funcional-en-r-filter.md
tags:
- programación
- r
- trucos
title: De texto a función
url: /2020/01/21/de-texto-a-funcion/
---

**Problema:** convertir una expresión definida por un usuario (p.e., algo como `"a+b"`) en una función (i.e., `function(a, b) a + b`).

**Solución:**

{{< highlight R >}}
    gen_foo <- function(expr){
        my_args <- all.vars(parse(text = expr))
        expr <- paste0("function(",
                       paste(my_args, collapse = ","),
                       ") ", expr)
        eval(parse(text = expr))
    }
{{< / highlight >}}

**Demostración:**

{{< highlight R >}}
    multiplica <- gen_foo("a * b")
    multiplica(5, 31)
{{< / highlight >}}