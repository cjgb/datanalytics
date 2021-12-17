---
author: Carlos J. Gil Bellosta
date: 2014-05-12 07:39:06+00:00
draft: false
title: Grid, Scala y arbolitos fractales

url: /2014/05/12/grid-scala-y-arbolitos/
categories:
- computación
- r
tags:
- fractal
- gráficos
- grid
- r
- scala
---

Inspirado por



	  * los arbolitos que he visto esta mañana en mi semivuelta al lago de Zúrich,
	  * las cosas que estoy leyendo últimamente sobre el paquete grid de R (p.e., [_grid graphics_](http://stat.ethz.ch/R-manual/R-devel/library/grid/doc/grid.pdf), de Murrell)
	  * mi curso de scala y
	  * [este enlace](http://aschinchon.wordpress.com/2014/04/10/the-pythagorean-tree-is-in-bloom/)

me he decidido a reescribirlo como Dios manda (y no como de primeras se le ocurriría a un neoingeniero al que solo le han enseñado MatLab y que, por lo tanto, tiene vetado el acceso a cualquier tipo de empresa tecnológica puntera). Me ha quedado así:



    library("grid")

    <a href="http://inside-r.org/r-doc/grid/grid.newpage">grid.newpage()

    # datos iniciales
    base  <- rbind(c(0.4, .6, 0.6, .4), c(0, 0, 0.2, 0.2))
    alpha <- pi/4
    r     <- 1 / cos(alpha) / 2

    # funciones auxiliares
    traslada <- function(<a href="http://inside-r.org/r-doc/graphics/rect">rect, vect) <a href="http://inside-r.org/r-doc/graphics/rect">rect + vect
    encoge   <- function(<a href="http://inside-r.org/r-doc/graphics/rect">rect, r) <a href="http://inside-r.org/r-doc/graphics/rect">rect * r
    rota     <- function(<a href="http://inside-r.org/r-doc/graphics/rect">rect, a) matrix(c(cos(a), sin(a), -sin(a), cos(a)), 2, 2) %*% <a href="http://inside-r.org/r-doc/graphics/rect">rect


    <a href="http://inside-r.org/packages/cran/fractal">fractal <- function(base, nivel){
      <a href="http://inside-r.org/r-doc/grid/grid.draw">grid.draw(<a href="http://inside-r.org/r-doc/grid/polygonGrob">polygonGrob(base[1,], base[2,],
                            gp = <a href="http://inside-r.org/r-doc/grid/gpar">gpar(fill = ifelse(nivel < 5, "brown", "green"), col = 0)))

      if(nivel < 10){
        <a href="http://inside-r.org/packages/cran/fractal">fractal(traslada( encoge( rota( traslada(base, -base[,1]),  alpha), r) , base[,4]), nivel + 1)
        <a href="http://inside-r.org/packages/cran/fractal">fractal(traslada( encoge( rota( traslada(base, -base[,2]), -alpha), r) , base[,3]), nivel + 1)
      }
    }

    <a href="http://inside-r.org/packages/cran/fractal">fractal(base, 1)



Espero que ni David Ruescas tenga nada que objetar.

El resultado gráfico es

[![arbolito](/wp-uploads/2014/05/arbolito.png)
](/wp-uploads/2014/05/arbolito.png)

Invitados quedan mis lectores a manipular el grosor del tronco, el ángulo de rotación, el color, la transparencia, etc. para dejarlo a su gusto.
