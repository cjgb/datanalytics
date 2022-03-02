---
author: Carlos J. Gil Bellosta
date: 2010-10-26 21:27:06+00:00
draft: false
title: A vueltas con los fractales

url: /2010/10/26/a-vueltas-con-los-fractales/
categories:
- r
tags:
- r
- gráficos
- fractales
---

Si bien no hace mucho publicaba una entrada sobre el [triángulo de Sierpinsky](http://www.datanalytics.com/2010/04/21/para-que-copien-peguen-y-disfruten-addenda/), mi tocayo Carlos Ortega (y ahora gentil colaborador) nos ha proporcionado un enlace en este blog a un pedazo de código que bien vale la pena replicar aquí para el solaz (y tal vez, incluso, provecho) de los lectores de estas páginas. Es:



{{< highlight R >}}
    library(fields)         # for tim.colors
    library(caTools)        # for write.gif
    m = 400                 # grid size

    C <- complex(
        real=rep(seq(-1.8,0.6, length.out=m), each=m ),
        imag=rep(seq(-1.2,1.2, length.out=m), m ) )
    C <- matrix(C,m,m)
    Z <- 0
    X <- array(0, c(m,m,20))

    for (k in 1:20) {
        Z <- Z^2+C
        X[,,k] <- exp(-abs(Z))
    }
    image(X[,,k], col=tim.colors(256))
    write.gif(X, "Mandelbrot.gif", col=tim.colors(256), delay=100)
{{< / highlight >}}




(extraído de [aquí](http://tolstoy.newcastle.edu.au/R/help/05/10/13198.html)).

El resultado, infinitamente mejor que la tele:

[![](/wp-uploads/2010/10/Mandelbrot.gif)
](/wp-uploads/2010/10/Mandelbrot.gif)
