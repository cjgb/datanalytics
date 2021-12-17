---
author: Carlos J. Gil Bellosta
date: 2015-02-11 08:13:50+00:00
draft: false
title: Recurrencia recurrente

url: /2015/02/11/recurrencia-recurrente/
categories:
- gráficos
- r
tags:
- gráficos
- r
- recursividad
---

Pregunta Antonio Sánchez Chinchón cómo mejorar la parte menos vistosa e imaginativa de [esto](https://aschinchon.wordpress.com/2015/02/10/mixing-waves/), es decir, el código. Él, y muchos diríamos que correctamente, autocritica el uso de `eval` + `parse` para plagar el `namespace` de funciones.

La respuesta está en la recurrencia. He aquí mi versión del código:



    library(ggplot2)
    library(gridExtra)

    nrows <- 6
    coefs.a <- runif(min=1, max=50, nrows)
    coefs.b <- runif(min=1, max=50, nrows)

    foo.a <- sample(c(sin, cos), nrows, replace = TRUE)
    foo.b <- sample(c(sin, cos), nrows, replace = TRUE)

    foo <- function(x, a, b){
      if(a == 1 || b == 1)
        return(foo.a[[a]](coefs.a[a] * x))

      if(b == a)
        return(foo.b[[a]](coefs.b[a] * x))

      foo(x, a-1, b) + foo(x, a-1, b-1)
    }

    vplayout = function(x, y) <a href="http://inside-r.org/r-doc/grid/viewport">viewport(layout.pos.row = x, layout.pos.col = y)

    opts=theme(legend.position="none",
               panel.background = element_rect(fill="gray95"),
               plot.background = element_rect(fill="gray95", colour="gray95"),
               <a href="http://inside-r.org/r-doc/lattice/panel.grid">panel.grid = element_blank(),
               axis.ticks=element_blank(),
               axis.title=element_blank(),
               axis.text =element_blank())

    <a href="http://inside-r.org/r-doc/grid/grid.newpage">grid.newpage()

    <a href="http://inside-r.org/r-doc/grDevices/jpeg">jpeg(file="AddingWaves.jpeg", width = 1800, height = 1000,
         bg = "gray95", quality = 100)

    <a href="http://inside-r.org/r-doc/grid/pushViewport">pushViewport(<a href="http://inside-r.org/r-doc/grid/viewport">viewport(<a href="http://inside-r.org/r-doc/graphics/layout">layout = <a href="http://inside-r.org/r-doc/grid/grid.layout">grid.layout(nrows, 2*nrows-1)))

    for (i in 1:nrows) {
      for (j in 1:i) {
        print(ggplot(data.frame(x = c(0, 20)), aes(x)) +
                stat_function(fun = function(x) foo(x, i, j),
                              colour = "black", alpha=.75)+opts,
              vp = vplayout(i, nrows+(2*j-(i+1))))
      }
    }

    <a href="http://inside-r.org/r-doc/grDevices/dev.off">dev.off()



El resultado es

[![AddingWaves](/wp-uploads/2015/02/AddingWaves.jpeg)
](/wp-uploads/2015/02/AddingWaves.jpeg)

Hoy comentaba en el trabajo que unos nacieron para crear y otros para criticar. ¡Qué duro ha sido con alguno de nosotros el sino!
