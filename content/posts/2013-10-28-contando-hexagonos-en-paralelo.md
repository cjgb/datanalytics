---
author: Carlos J. Gil Bellosta
date: 2013-10-28 07:51:25+00:00
draft: false
title: Contando hexágonos en paralelo

url: /2013/10/28/contando-hexagonos-en-paralelo/
categories:
- gráficos
- r
tags:
- gráficos
- hexágonos
- r
---

Dicen que para realizar gráficos de dispersión con muchos datos [no es desaconsejable usar celosías hexagonales](http://cran.r-project.org/web/packages/hexbin/vignettes/hexagon_binning.pdf). Por motivos que no vienen al caso, me interesa poder realizarlas en paralelo.

El código disponible en R (`hexBinning` de [`fMultivar`](http://cran.r-project.org/web/packages/fMultivar/index.html) o el de `geom_hex` de [`ggplot2`](http://docs.ggplot2.org/current/geom_hex.html)) es feo, ininteligible y, en particular, no es paralelizable (o _mapreducible_). No lo es porque cada hilo, por diseño del algoritmo, crea hexágonos excéntricos.

Así que he desarrollado un algoritmo para crear celosías hexagonales paralelizable. Además, creo que es algo más inteligible que los dos mencionados y, me temo, igual de feo. Pero vectorizado, eso sí (es decir, sin un maldito bucle). Es así:

{{< highlight R >}}
library(plyr)

hexbin <- function(x, y, h = 0.3){
  r <- 2 * h / sqrt(3)

  x1 <- 2 * h * round(x/(2*h))
  y1 <- 3 * r * round(y/(3*r))

  x2 <- h * (1 + 2 * round( ((x/h) - 1)/ 2))
  y2 <- 3 * r * ( 1/2 + round( (y/(3*r)) - 1/2) )

  d1 <- (x-x1)^2 + (y-y1)^2
  d2 <- (x-x2)^2 + (y-y2)^2

  test <- d1 > d2

  x1[test] <- x2[test]
  y1[test] <- y2[test]

  res <- count(data.frame(x=x1,y=y1))
  colnames(res) <- c("x", "y", "z")

  res
}
{{< / highlight >}}

Lo comento un poco: en una celosía hexagonal hay dos tipos de filas de hexágonos intercaladas: las unas y las que tienen los centros dislocados respecto a las anteriores. El algoritmo anterior, para cada punto, encuentra dos centros: el del centro del hexágono más próximo perteneciente al primer tipo de fila y el del segundo tipo de fila. Luego compara las dos distancias y escoge el centro que la minimiza. Limpio y simple.

La salida es una lista con las coordenadas de los centros de los hexágonos y el número de casos en cada uno de ellos. Una versión adaptada de la función `plot.hexBinning` de `fMultivar`,

{{< highlight R >}}
plot.hexBinning <- function(x, col = heat.colors(12)){

  X = x$x
  Y = x$y

  # Plot Center Points:
  plot(X, Y, type = "n", asp = 1)

  # Create Hexagon Coordinates:
  rx = median(diff(unique(sort(X))))
  ry = median(diff(unique(sort(Y))))
  rt = 2*ry
  u = c(rx,  0, -rx, -rx,   0,  rx)
  v = c(ry, rt,  ry, -ry, -rt, -ry) / 3

  # Create Color Palette:
  Z = x$z
  Z <- Z - min(Z)
  Z <- Z / max(Z)
  Z <- trunc(Z*(length(col)-1)+1)

  # Add Colored Hexagon Polygons:
  for (i in 1:length(X)) {
    polygon(u+X[i], v+Y[i], col = col[Z[i]], border = "white")
  }

  invisible(NULL)
}
{{< / highlight >}}

permite hacer

{{< highlight R >}}
my.binning <- hexbin(x = rnorm(10000), y = rnorm(10000))
plot.hexBinning(my.binning)
{{< / highlight >}}

y obtener el correspondiente gráfico que no me voy a molestar en incrustar en la presente entrada.

Lo que sí que voy a hacer es indicar que el algoritmo anterior (y la necesidad de paralelizarlo) responden a que hablaré del asunto en el taller de eso que llaman _big data_ que impartiré en la próxima [BigDataSpain](http://www.bigdataspain.org/). Ya sabéis que en ese tipo de eventos siempre hay que contar (en la acepción similar a enumerar) y lo de las palabras en texto está muy manido. Así que, en su lugar, y en pro de la originalidad, contaré hexágonos con el algoritmo anterior.
