---
author: Carlos J. Gil Bellosta
categories:
- gráficos
- r
date: 2011-12-29 06:51:03+00:00
draft: false
lastmod: '2025-04-06T18:56:36.143076'
related:
- 2017-04-10-pues-si-puede-fabricarse-uno-para-espana.md
- 2010-09-16-representando-graficamente-conjuntos-de-datos-pequenos.md
- 2011-09-21-facetas-en-ggplot2-al-hilo-de-otra-gananada.md
- 2010-06-28-graficos-en-r-con-simbolos-arbitrarios-codigo-comentarios-y-fin.md
- 2012-07-02-graficos-estadisticos-y-mapas-con-r.md
tags:
- gráficos
- r
- paquetes
title: Gráficos de pares de variables mejorados (con R)
url: /2011/12/29/graficos-de-pares-de-variables-mejorados-con-r/
---

Un gráfico de _pares_ de variables —que no he sabido traducir mejor desde el original inglés _pairplot_— es algo como lo siguiente:

[![](/wp-uploads/2011/12/pair_plot_traditional.png#center)
](/wp-uploads/2011/12/pair_plot_traditional.png#center)


Ahora es posible construir gráficos de pares más sofisticados e informativos usando el paquete `GGally` de R. Usando el código (extraído de _[SAS and R](http://sas-and-r.blogspot.com/2011/12/example-917-much-better-pairs-plots.html)_)


{{< highlight R >}}
library(GGally)

ds <- read.csv("http://www.math.smith.edu/r/data/help.csv")
ds$sex <- as.factor( ifelse(ds$female==1, "female", "male") )
ds$housing <- as.factor( ifelse(ds$homeless==1, "homeless", "housed") )
smallds <- subset(ds, select=c("housing", "sex", "i1", "cesd"))

ggpairs(smallds,
        diag=list(continuous="density", discrete="bar"),
        axisLabels="show")
{{< / highlight >}}


se obtiene la siguiente versión mejorada:


[![](/wp-uploads/2011/12/pair_plot_new.png#center)
](/wp-uploads/2011/12/pair_plot_new.png#center)

¿Gusta más?