---
author: Carlos J. Gil Bellosta
categories:
- estadística
date: 2016-01-29 09:13:51+00:00
draft: false
lastmod: '2025-04-06T18:51:51.818965'
related:
- 2016-02-03-otra-vuelta-al-caso-del-test-que-rechaza-y-el-intervalo-que-contiene.md
- 2012-08-24-p-valores-bajo-la-hipotesis-nula-tras-multiples-comparaciones.md
- 2016-02-04-y-termino-con-lo-de-los-intervalos.md
- 2014-11-10-remuestreos-y-tests-de-hipotesis.md
- 2016-12-09-una-pregunta-sobre-pruebas-de-hipotesis.md
tags:
- intervalos de confianza
- p-valores
- prueba de hipótesis
title: 'El test rechaza pero el intervalo contiene: [contra]ejemplos'
url: /2016/01/29/el-test-rechaza-pero-el-intervalo-contiene-contraejemplos/
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