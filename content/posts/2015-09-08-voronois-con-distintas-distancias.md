---
author: Carlos J. Gil Bellosta
date: 2015-09-08 08:13:57+00:00
draft: false
title: Voronois con distintas distancias

url: /2015/09/08/voronois-con-distintas-distancias/
categories:
- estadística
tags:
- clústering
- distancia
- estadística
- r
---

Especulando sobre la diferencia en la práctica entre distintas métricas ($latex l_1$, $latex l_2$, $latex l_\infty$, etc.), construi una serie de [diagramas de Voronoi](https://en.wikipedia.org/wiki/Voronoi_diagram) usado métricas arbitrarias.

En la Wikipedia se comparan gráficamente $latex l_1$, $latex l_2$ (o euclídea y Manhattan). Mi código,


{{< highlight R "linenos=true" >}}
library(data.table)
library(reshape2)
library(grid)

n <- 20
dim.image <- 1000
puntos <- data.frame(id = 1:n,
                      x0 = runif(n) * dim.image,
                      y0 = runif(n) * dim.image)
colores <- rainbow(n)

voronoi <- function(p){
  tmp <- data.table(expand.grid(
      x = 1:dim.image,
      y = 1:dim.image, id = 1:n), key = "id")
  tmp <- merge(tmp, puntos, by = "id")

  distancia <- function(a, b, c, d, p)
    (abs(a-c)^p + abs(b-d)^p)^(1/p)

  tmp$distancia <- distancia(tmp$x,
    tmp$y, tmp$x0, tmp$y0, p)
  tmp[, rank := rank(distancia, ties = "random"),
    by = c("x", "y")]

  rejilla <- tmp[tmp$rank == 1,]
  rejilla$x0 <- rejilla$y0 <-
    rejilla$distancia <- rejilla$rank <- NULL

  rejilla$color <- colores[rejilla$id]

  imagen <- as.matrix(dcast(rejilla, x ~ y, value.var = "color")[,-1])

  grid.raster(imagen)
}
{{< / highlight >}}


permite usar más en función del parámetro `p`.

Así, `voronoi(1)` da

[![vioronoi_p1](/wp-uploads/2015/09/vioronoi_p1.png)
](/wp-uploads/2015/09/vioronoi_p1.png)

(nótese el ángulo de los segmentos de frontera) y `voronoi(2)`,

[![voronoi_p2](/wp-uploads/2015/09/voronoi_p2.png)
](/wp-uploads/2015/09/voronoi_p2.png)

donde las fronteras son segmentos (de mediatriz entre parejas de puntos). Con un valor de `p` alto (una aproximación a la norma $latex l_\infty$, `voronoi(100)`, se obtiene

[![voronoi_p_infty](/wp-uploads/2015/09/voronoi_p_infty.png)
](/wp-uploads/2015/09/voronoi_p_infty.png)

que tampoco difiere sustancialmente de las anteriores.

Y para los amigos de la experimentación, aquí va `voronoi(0.8)` (recuérdese que $latex l_{0.8}$ no es una métrica: no respeta la desigualdad triangular, genera bolas no convexas, etc.),

[![voronoi_p_08](/wp-uploads/2015/09/voronoi_p_08.png)
](/wp-uploads/2015/09/voronoi_p_08.png)

donde se aprecian las consecuencias de lo antedicho.
