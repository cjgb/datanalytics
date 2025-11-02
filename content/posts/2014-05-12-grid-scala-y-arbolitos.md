---
author: Carlos J. Gil Bellosta
categories:
- programación
- r
date: 2014-05-12 07:39:06+00:00
draft: false
lastmod: '2025-04-06T19:08:53.740515'
related:
- 2012-05-23-patrones-hexagonales-con-r.md
- 2014-09-09-factorizacion-de-enteros-con-grid.md
- 2010-10-26-a-vueltas-con-los-fractales.md
- 2016-05-27-coordenadas-polares-por-doquier.md
- 2015-02-11-recurrencia-recurrente.md
tags:
- fractal
- gráficos
- grid
- r
- scala
title: Grid, Scala y arbolitos fractales
url: /2014/05/12/grid-scala-y-arbolitos/
---

Inspirado por

* los arbolitos que he visto esta mañana en mi semivuelta al lago de Zúrich,
* las cosas que estoy leyendo últimamente sobre el paquete grid de R (p.e., [_grid graphics_](http://stat.ethz.ch/R-manual/R-devel/library/grid/doc/grid.pdf), de Murrell)
* mi curso de scala y
* [este enlace](http://aschinchon.wordpress.com/2014/04/10/the-pythagorean-tree-is-in-bloom/)

me he decidido a reescribirlo como Dios manda (y no como de primeras se le ocurriría a un neoingeniero al que solo le han enseñado MatLab y que, por lo tanto, tiene vetado el acceso a cualquier tipo de empresa tecnológica puntera). Me ha quedado así:

{{< highlight R >}}
library(grid)

grid.newpage()

# datos iniciales
base  <- rbind(c(0.4, .6, 0.6, .4), c(0, 0, 0.2, 0.2))
alpha <- pi/4
r     <- 1 / cos(alpha) / 2

# funciones auxiliares
traslada <- function(rect, vect) rect + vect
encoge   <- function(rect, r) rect * r
rota     <- function(rect, a)
  matrix(c(cos(a), sin(a), -sin(a), cos(a)), 2, 2) %*% rect


fractal <- function(base, nivel){
  grid.draw(polygonGrob(base[1,],
    base[2,],
    gp = gpar(fill = ifelse(nivel < 5, "brown", "green"),
    col = 0)))

  if(nivel < 10){
    fractal(traslada( encoge( rota(
      traslada(base, -base[,1]),  alpha), r) ,
      base[,4]), nivel + 1)
    fractal(traslada( encoge( rota(
      traslada(base, -base[,2]), -alpha), r) ,
      base[,3]), nivel + 1)
  }
}

fractal(base, 1)
{{< / highlight >}}

Espero que ni David Ruescas tenga nada que objetar.

El resultado gráfico es

[![arbolito](/img/2014/05/arbolito.png#center)
](/img/2014/05/arbolito.png#center)

Invitados quedan mis lectores a manipular el grosor del tronco, el ángulo de rotación, el color, la transparencia, etc. para dejarlo a su gusto.