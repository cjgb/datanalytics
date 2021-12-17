---
author: Carlos J. Gil Bellosta
date: 2015-06-15 08:13:30+00:00
draft: false
title: 'Paralelismo en R: memo[rándum]'

url: /2015/06/15/paralelismo-en-r-memorandum/
categories:
- r
tags:
- paralelización
- parallel
- r
---

Esta es una nota que me dejo a mí mismo sobre paralelización en R para no tener que ir buscándola en otras partes:



    library(<a href="http://inside-r.org/r-doc/lattice/parallel">parallel)

    foo <- function(i){
      <a href="http://inside-r.org/r-doc/base/Sys.sleep">Sys.sleep(i)
    }

    cl <- makeCluster(4)

    system.time(parSapply(cl, 1:4, foo))
    # user  system elapsed
    # 0.025   0.006   4.007

    system.time(sapply(1:4, foo))
    # user  system elapsed
    # 0.039   0.033  10.001

    stopCluster(cl)
