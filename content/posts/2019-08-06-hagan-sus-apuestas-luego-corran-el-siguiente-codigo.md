---
author: Carlos J. Gil Bellosta
date: 2019-08-06 09:13:12+00:00
draft: false
title: Hagan sus apuestas; luego, corran el siguiente código

url: /2019/08/06/hagan-sus-apuestas-luego-corran-el-siguiente-codigo/
categories:
- r
tags:
- order
- r
- trucos
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


