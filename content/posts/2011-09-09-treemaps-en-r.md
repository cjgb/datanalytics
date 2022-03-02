---
author: Carlos J. Gil Bellosta
date: 2011-09-09 07:13:26+00:00
draft: false
title: Treemaps en R

url: /2011/09/09/treemaps-en-r/
categories:
- gráficos
- r
tags:
- gráficos
- r
- treemaps
---

Hay cierto interés por los _[treemaps](http://en.wikipedia.org/wiki/Treemapping)_ en general y existen paquetes como [`treemap`](http://cran.r-project.org/web/packages/treemap/) y la función `map.market` del paquete [`portfolio`](http://cran.r-project.org/web/packages/portfolio/index.html) que permiten construirlos y obtener gráficos como este


[![](/wp-uploads/2011/09/treemap.png#center)
](/wp-uploads/2011/09/treemap.png#center)


que representa la capitalización bursátil de las empresas del IBEX-35 y el porcentaje que destinan al dividendo. Pero me produce cierto desasosiego utilizar áreas y colores para representar magnitudes: ¿es fácil comparar el tamaño relativo de TEF y ELE? ¿Cuánto mayor es ITX que BBVA? ¿Y el dividendo de MAP comparado con el de ACS?

No estoy seguro de hasta qué punto ese tipo de gráficos resultan superiores a otros tal vez menos impactantes como

[![](/wp-uploads/2011/09/textplot.png#center)
](/wp-uploads/2011/09/textplot.png#center)o

[![](/wp-uploads/2011/09/barplot.png#center)
](/wp-uploads/2011/09/barplot.png#center)

¿Qué opinarán mis lectores?

**Nota:** Como siempre, el código:

{{< highlight R >}}
library( ggplot2 )
library( treemap )

dat <- read.table("http://www.datanalytics.com/uploads/datos_treemap.txt", sep = "\t", header = T)
dat$div[is.na(dat$div)] <- 0

tmPlot(dat, index = "valor", vSize = "cap", vColor = "div", sortID = "-cap")

p.text <- ggplot(dat, aes( x = cap, y = div, label = valor)) + geom_text()
p.text <- p.text + scale_y_continuous( name = "% dividend")
p.text <- p.text + scale_x_continuous( name = "capitalization")
p.text

dat$valor <- as.factor( dat$valor )
dat$valor <- reorder( dat$valor, -dat$cap )

p.bar <- ggplot(dat, aes(valor, weight = cap, fill = div)) + geom_bar()
p.bar <- p.bar + opts( axis.text.x = theme_text( angle = 90 ) )
p.bar <- p.bar + scale_y_continuous( name = "capitalization")
p.bar
{{< / highlight >}}
