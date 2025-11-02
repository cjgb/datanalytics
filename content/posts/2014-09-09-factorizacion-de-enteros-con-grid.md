---
author: Carlos J. Gil Bellosta
categories:
- gráficos
- r
date: 2014-09-09 07:13:03+00:00
draft: false
lastmod: '2025-04-06T19:09:52.817635'
related:
- 2014-05-12-grid-scala-y-arbolitos.md
- 2015-03-24-compresion-con-svd.md
- 2015-02-11-recurrencia-recurrente.md
- 2010-10-26-a-vueltas-con-los-fractales.md
- 2012-05-23-patrones-hexagonales-con-r.md
tags:
- gráficos
- grid
- r
title: Factorización de enteros con grid
url: /2014/09/09/factorizacion-de-enteros-con-grid/
---

Vi [esto](http://mathlesstraveled.com/2012/10/05/factorization-diagrams/) y me dije: yo también quiero. Así que dicho y hecho:

[![100](/img/2014/09/100.png#center)
](/img/2014/09/100.png#center)

Por si acaso, cada diagrama representa la descomposición en números primos de un número del 1 al 100.

El código (que no he adecentado lo que suelo) es un pequeño ejercicio con el paquete `grid` y unos elementos de recursividad (como en [Grid, Scala y arbolitos fractales](https://datanalytics.com/2014/05/12/grid-scala-y-arbolitos/)):


{{< highlight R >}}
library(grid)
library(gmp)

plot.factors <- function(n, new.plot = TRUE){

  if(new.plot)
    grid.newpage()

  divisors <- sort(as.integer(factorize(n)), decreasing = T)

  foo <- function(divs){
    if(length(divs) == 0){
      grid.circle(x = 0.5, y = 0.5, r = 0.5,
                  gp=gpar(fill="black"))
      return()
    }

    n <- divs[1]

    x <- (Re(exp( 2 * pi *(1:n) * 1i /n))) / 4 + 0.5
    y <- (Im(exp( 2 * pi *(1:n) * 1i /n))) / 4 + 0.5

    for(i in 1:n){
      tmp <- viewport(x = x[i], y = y[i],
                      w = 2/(3 + n), h = 2/(3 + n))
      pushViewport(tmp)
      #grid.rect(gp = gpar(col = "grey"))
      foo(divs[-1])
      popViewport()
    }
  }

  foo(divisors)
}

plot.factors(25)


grid.newpage()

nrow <- 10
ncol <- 10

for(y in 1:nrow){
  for(x in 1:ncol){
    tmp <- viewport(x = x / (1 + ncol), y = 1 - y / (1 + nrow),
                    w = 1/(1 + ncol), h = 1/(1+ncol))
    pushViewport(tmp)
    #grid.rect(gp = gpar(col = "grey"))
    plot.factors(x + y * ncol - ncol, new.plot = FALSE)
    popViewport()
  }
}
{{< / highlight >}}