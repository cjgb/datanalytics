---
author: Carlos J. Gil Bellosta
date: 2012-05-23 07:25:13+00:00
draft: false
title: Patrones hexagonales con R

url: /2012/05/23/patrones-hexagonales-con-r/
categories:
- r
tags:
- gráficos
- r
- hexágonos
---

Navegando por internet di con el gráfico

[![](/wp-uploads/2012/05/18-06scf11.jpg)
](/wp-uploads/2012/05/18-06scf11.jpg)

(que puede encontrarse [aquí](http://ocw.mit.edu/courses/mathematics/18-06sc-linear-algebra-fall-2011/)) además de un enlace al [código en Matlab](http://ocw.mit.edu/courses/mathematics/18-06sc-linear-algebra-fall-2011/HexagonArt.m) usado para generarlo.

Diríase que lo programó un contable. Tratad de seguirlo y veréis por qué lo digo.

Y por entretenerme, traté de generarlo con R. Y creo que de una manera algo más intuitiva:

1. Creo una función que sabe pintar un hexágono en una posición dada.
2. Creo una retícula de centros de hexágonos del tamaño adecuado.
3. Pinto finalmente un hexágono en cada uno de esos centros.

El código es

{{< highlight R >}}
# funciones auxiliares

rotar <- function( x, rads ){
  rot <- matrix( c(cos(rads), sin(rads),
    -sin(rads), cos(rads)), 2, 2)
  x %*% rot
}

trasladar <-  function(a, b)
    t( t(a) + b )

rotar.trasladar <- function( x, rads, trans ){
    trasladar( rotar( x, rads ), trans )
}

# polígono base

pol.base <- rbind(
  c(0,0),
  0.5 * c(1, sqrt(3)),
  c(1,0),
  0.5 * c(1, -sqrt(3))
  )

pol.base <- rotar( pol.base, pi/2)

# comprobaciones, por si acaso
#plot(c(-1,1), c(-1,1), type = "n")
#polygon( pol.base, col = "red")

N <- 20

# centros de dos filas de hexágonos
centros.0 <- centros.1 <- rbind( 1:N * sqrt(3), rep(0,N) )
centros.1[1,] <- centros.1[1,] + sqrt(3)/2
centros.1[2,] <- centros.1[2,] + 1.5

centros.0 <- cbind( centros.0, centros.1 )

# apilo estas parejas de centros para formar una
# retícula de N filas de hexágonos

centros <- sapply( 1:(N/2), function(x){
  tmp <- centros.0
  tmp[2,] <- tmp[2,] + 3 * x
  tmp
}, simplify = F)

centros <- t(do.call( cbind, centros ))

hexagono <- function( centro ){
  polygon( rotar.trasladar(pol.base,      0, centro), col = "red")
  polygon( rotar.trasladar(pol.base, 2*pi/3, centro), col = "blue")
  polygon( rotar.trasladar(pol.base, 4*pi/3, centro), col = "green")
}

plot( centros, type = "n")
apply(centros, 1, hexagono)
{{< / highlight >}}





Y el resultado, en el ordenador de cada cual.
