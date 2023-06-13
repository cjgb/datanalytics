---
author: Carlos J. Gil Bellosta
date: 2016-01-29 09:13:51+00:00
draft: false
title: 'El test rechaza pero el intervalo contiene: [contra]ejemplos'

url: /2016/01/29/el-test-rechaza-pero-el-intervalo-contiene-contraejemplos/
categories:
- estadística
tags:
- intervalo de confianza
- p-valores
- prueba de hipótesis
---

De acuerdo con el saber popular, pruebas que rechazan acompañan a intervalos de confianza que no contienen.

Pero

{{< highlight R >}}
foo <- function(N, p = 0.7){
  n <- qbinom(0.975, N, p)
  tmp <- binom.test(n, N, p)
  c(tmp$p.value, tmp$conf.int,
    tmp$conf.int[1] < p & p < tmp$conf.int[2])
}

res <- as.data.frame(t(sapply(20:200, foo)))
res$n <- 20:200

res[res$V1 < 0.05,]
{{< / highlight >}}

no tiene cero filas.
