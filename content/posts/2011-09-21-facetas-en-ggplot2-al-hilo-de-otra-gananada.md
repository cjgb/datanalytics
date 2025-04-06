---
author: Carlos J. Gil Bellosta
categories:
- estadística
- números
- r
date: 2011-09-21 07:33:55+00:00
draft: false
lastmod: '2025-04-06T18:44:37.703537'
related:
- 2017-04-10-pues-si-puede-fabricarse-uno-para-espana.md
- 2014-07-17-facetas-para-entender-tal-vez-la-evolucion-del-paro.md
- 2019-01-28-el-discreto-encanto-de-las-animaciones.md
- 2017-04-07-podria-fabricarse-uno-para-espana.md
- 2012-09-10-graficos-estadisticos-y-mapas-con-r-un-analisis.md
tags:
- números
- r
title: Facetas en ggplot2 (al hilo de otra gañanada)
url: /2011/09/21/facetas-en-ggplot2-al-hilo-de-otra-gananada/
---

Hace años que no leo Expansión con la frecuencia de antaño. Los motivos son muchos. Pero el otro día, casi por nostalgia, pagué los 1.60 euros que no vale.

De entre los gañanes que trabajan en dicho diario hay uno que lo es más que todos: el responsable de las gráficas. En tiempos me irritaba. Luego me fui acostumbrando. Al final, casi, casi, le cogí cariño. Acabé interpretando sus gañanadas casi como si me dijese: "pues por aquí andamos, trabajando; de saludo, bien; y tus cosas ¿cómo van?".

Y sí, en el último número que compré, me dio a entender que no lo habían despedido; que no se había ido a Alemania; que no había cogido el traspaso de la tasca suburbana de su padre ni la fragoneta de su tío el repartidor. Seguía al pie del cañón, bien de salud, y me lo dijo así:

[![](/wp-uploads/2011/09/grafico_expansion.jpg)
](/wp-uploads/2011/09/grafico_expansion.jpg)

El ejemplo bien ilustra el efecto (pernicioso) de uno usar correctamente lo que en la nomenclatura de ggplot2 se llamarían escalas y facetas. Al partir una gráfica en varias facetas (o subgráficas) es fundamental mantener la homogeneidad de la escala para facilitar las comparaciones. El paquete ggplot2 lo hace automáticamente:

[![](/wp-uploads/2011/09/crecimiento_pib.png#center)
](/wp-uploads/2011/09/crecimiento_pib.png#center)

Finalmente, el código utilizado:

{{< highlight R >}}
library(ggplot2)
crecimiento <- c(13, 1, 4, 2, 4, 2, 1, 1, 9, 0, 2, 2, 1,3,0,0, 8, 2, 2, 1,7, 2,2,2) / 10
pais <- rep(c("de", "es", "fr", "it", "euroz", "ue27"), each = 4)
pais <- factor(pais, ordered = T)
trimestre <- rep(paste( "t", 1:4, sep = ""), 6)
dat <- data.frame(crecimiento = crecimiento, pais = pais, trimestre = trimestre)
p <- ggplot(dat, aes( x = as.numeric( trimestre ), y = crecimiento))
p <- p + scale_x_continuous(breaks = 1:4, labels = levels(dat$trimestre))
p <- p + geom_line(size = 1)
p <- p + facet_grid(~ pais)

p
{{< / highlight >}}