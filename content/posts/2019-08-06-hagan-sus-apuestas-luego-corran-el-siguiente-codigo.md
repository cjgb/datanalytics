---
author: Carlos J. Gil Bellosta
categories:
- r
date: 2019-08-06 09:13:12+00:00
draft: false
lastmod: '2025-04-06T19:02:43.640780'
related:
- 2011-02-15-como-reordenar-niveles-de-factores-en-r.md
- 2010-04-21-para-que-copien-peguen-y-disfruten.md
- 2019-08-07-mas-sobre-factores-strings-y-ordenacion.md
- 2013-11-22-un-pequeno-problema-de-probabilidad.md
- 2012-01-12-cosa-prodigiosa-sin-palabras-i.md
tags:
- order
- r
- trucos
title: Hagan sus apuestas; luego, corran el siguiente código
url: /2019/08/06/hagan-sus-apuestas-luego-corran-el-siguiente-codigo/
---

{{< highlight R >}}
library(microbenchmark)
library(ggplot2)

a_int <- sample(10:99, 1e6, replace = T)
a_char <- paste("P", a_int, sep = "")

res <- microbenchmark(
    sort_int  = sort(a_int),
    sort_char_radix = sort(a_char, method = "radix"),
    sort_char = sort(a_char),
    factor_trick = as.character(sort(as.factor(a_char))),
    times = 50
)

autoplot(res)
{{< / highlight >}}