---
author: Carlos J. Gil Bellosta
categories:
- gráficos
- r
date: 2015-02-11 08:13:50+00:00
draft: false
lastmod: '2025-04-06T19:01:24.973804'
related:
- 2010-04-21-para-que-copien-peguen-y-disfruten.md
- 2014-05-12-grid-scala-y-arbolitos.md
- 2011-09-12-visualizacion-de-la-actualizacion-bayesiana-y-unas-cuantas-funciones-de-r.md
- 2010-10-26-a-vueltas-con-los-fractales.md
- 2011-08-29-2570.md
tags:
- gráficos
- r
- recursividad
title: Recurrencia recurrente
url: /2015/02/11/recurrencia-recurrente/
---

Pregunta Antonio Sánchez Chinchón cómo mejorar la parte menos vistosa e imaginativa de [esto](https://aschinchon.wordpress.com/2015/02/10/mixing-waves/), es decir, el código. Él, y muchos diríamos que correctamente, autocritica el uso de `eval` + `parse` para plagar el `namespace` de funciones.

La respuesta está en la recurrencia. He aquí mi versión del código:

{{< highlight R >}}
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

vplayout = function(x, y) viewport(layout.pos.row = x, layout.pos.col = y)

opts=theme(legend.position="none",
      panel.background = element_rect(fill="gray95"),
      plot.background = element_rect(fill="gray95", colour="gray95"),
      panel.grid = element_blank(),
      axis.ticks=element_blank(),
      axis.title=element_blank(),
      axis.text =element_blank())

grid.newpage()

jpeg(file="AddingWaves.jpeg", width = 1800, height = 1000,
      bg = "gray95", quality = 100)

pushViewport(viewport(layout = grid.layout(nrows, 2*nrows-1)))

for (i in 1:nrows) {
  for (j in 1:i) {
    print(ggplot(data.frame(x = c(0, 20)), aes(x)) +
            stat_function(fun = function(x) foo(x, i, j),
                  colour = "black", alpha=.75)+opts,
          vp = vplayout(i, nrows+(2*j-(i+1))))
  }
}

dev.off()
{{< / highlight >}}

El resultado es

[![AddingWaves](/img/2015/02/AddingWaves.jpeg)
](/img/2015/02/AddingWaves.jpeg)

Hoy comentaba en el trabajo que unos nacieron para crear y otros para criticar. ¡Qué duro ha sido con alguno de nosotros el sino!