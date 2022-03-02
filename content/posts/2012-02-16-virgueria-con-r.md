---
author: Carlos J. Gil Bellosta
date: 2012-02-16 07:50:40+00:00
draft: false
title: Virguería con R

url: /2012/02/16/virgueria-con-r/
categories:
- r
tags:
- r
- gráficos
- 3d
- animaciones
---

A la pregunta, tal vez con una formulación mejorable de un usuario de la lista de R, sobre cómo representar una distribución normal bivariada con correlación 0.5 en 3D di ayer esta solución:

{{< highlight R >}}
library(mvtnorm )

x <- y <- -20:20 / 10
z <- matrix(0, length(x ), length(y ) )

m <- c(0,0)
sigma <- matrix(c(1, 0.5, 0.5, 1 ), 2 )

for(i in 1: length(x ) )
        for(j in 1:length(y ) )
                z[i,j] <- dmvnorm(c(x[i], y[j] ), c(0,0), sigma )

persp(x, y, z )
{{< / highlight >}}

No obstante, la solución alternativa de Carlos Ortega es toda una virguería que merece ser reproducida en estas páginas:

{{< highlight R >}}
library(fMultivar)
library(rgl)

x = (-40:40)/10
X = grid2d(x)
z = dnorm2d(X$x, X$y, rho = 0.5)
Z = list(x = x, y = x, z = matrix(z, ncol = length(x)))

open3d()
bg3d("white")
material3d(col="black")
persp3d(Z$x, Z$y, Z$z, aspect=c(1, 1, 0.5),
    col = "lightblue", xlab = "X",
ylab = "Y", zlab = "Z")
play3d(spin3d(axis=c(0,0,1), rpm=5), duration=20)
{{< / highlight >}}

¿Os gusta?
