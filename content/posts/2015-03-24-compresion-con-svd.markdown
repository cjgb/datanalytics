---
author: Carlos J. Gil Bellosta
date: 2015-03-24 08:13:19+00:00
draft: false
title: Compresión con SVD

url: /2015/03/24/compresion-con-svd/
categories:
- gráficos
tags:
- gráficos
- r
- svd
---

[![svd_greco](/wp-uploads/2015/03/svd_greco.png)
](/wp-uploads/2015/03/svd_greco.png)

lo he creado con



    library(<a href="http://inside-r.org/r-doc/grDevices/png">png)

    tmp.file <- tempfile()
    <a href="http://inside-r.org/r-doc/utils/download.file">download.file("http://datanalytics.com/uploads/greco.png", tmp.file)
    m <- readPNG(tmp.file)

    svd.m <- svd(m)

    filtra.svd <- function(svd, k){
      tmp <- svd
      tmp$d[(k+1):length(tmp$d)] <- 0
      res <- tmp$u %*% diag(tmp$d) %*% t(tmp$v)

      res[res > 1] <- 1
      res[res < 0] <- 0

      plot(1:2, type='n', xlab = "",
           ylab = "", xaxt = "n", yaxt = "n",
           main = paste(k, "primeras componentes", sep = " "))
      rasterImage(res, 1, 1, 2, 2)
    }

    <a href="http://inside-r.org/r-doc/graphics/layout">layout(matrix(1:9, 3, 3, byrow = T))

    sapply(c(1,2,3,5,10,15,20,30,50),
           function(k) filtra.svd(svd.m, k))
