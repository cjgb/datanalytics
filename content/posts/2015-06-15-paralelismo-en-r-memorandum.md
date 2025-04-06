---
author: Carlos J. Gil Bellosta
categories:
- r
date: 2015-06-15 08:13:30+00:00
draft: false
lastmod: '2025-04-06T19:13:02.723796'
related:
- 2014-06-06-validacion-cruzada-en-paralelo.md
- 2014-05-15-r-en-paralelo.md
- 2014-12-03-paralelizacion-en-r-con-snow.md
- 2010-09-01-el-paquete-multicore-de-r.md
- 2011-04-08-paralelizacion-de-bucles-con-foreach.md
tags:
- paralelización
- parallel
- r
title: 'Paralelismo en R: memo[rándum]'
url: /2015/06/15/paralelismo-en-r-memorandum/
---

Esta es una nota que me dejo a mí mismo sobre paralelización en R para no tener que ir buscándola en otras partes:

{{< highlight R >}}
library(parallel)

foo <- function(i){
  Sys.sleep(i)
}

cl <- makeCluster(4)

system.time(parSapply(cl, 1:4, foo))
# user  system elapsed
# 0.025   0.006   4.007

system.time(sapply(1:4, foo))
# user  system elapsed
# 0.039   0.033  10.001

stopCluster(cl)
{{< / highlight >}}