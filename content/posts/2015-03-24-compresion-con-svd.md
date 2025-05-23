---
author: Carlos J. Gil Bellosta
categories:
- gráficos
date: 2015-03-24 08:13:19+00:00
draft: false
lastmod: '2025-04-06T19:03:16.359294'
related:
- 2014-09-09-factorizacion-de-enteros-con-grid.md
- 2011-08-05-svd-de-matrices-enormes-con-r.md
- 2017-04-10-pues-si-puede-fabricarse-uno-para-espana.md
- 2012-02-16-virgueria-con-r.md
- 2010-06-28-graficos-en-r-con-simbolos-arbitrarios-codigo-comentarios-y-fin.md
tags:
- gráficos
- r
- svd
title: Compresión con SVD
url: /2015/03/24/compresion-con-svd/
---

[![svd_greco](/wp-uploads/2015/03/svd_greco.png#center)
](/wp-uploads/2015/03/svd_greco.png#center)

lo he creado con

{{< highlight R >}}
library(png)

tmp.file <- tempfile()
download.file("http://datanalytics.com/uploads/greco.png", tmp.file)
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

layout(matrix(1:9, 3, 3, byrow = T))

sapply(c(1,2,3,5,10,15,20,30,50),
        function(k) filtra.svd(svd.m, k))
{{< / highlight >}}