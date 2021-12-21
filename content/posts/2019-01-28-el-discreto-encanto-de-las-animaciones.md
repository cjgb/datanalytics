---
author: Carlos J. Gil Bellosta
date: 2019-01-28 08:13:45+00:00
draft: false
title: El discreto encanto de las animaciones

url: /2019/01/28/el-discreto-encanto-de-las-animaciones/
categories:
- gráficos
- r
tags:
- animaciones
- ggplot2
- gráficos
- r
- visualización
---

Representando datos, una animación es un gráfico en el que unas facetas (en terminología de `ggplot2`) ocultan el resto, como en

![](/wp-uploads/2019/01/ezgif-4-3c3da54ff084.gif)

extraído de [aquí](https://twitter.com/cocteautriplets/status/986394792329465857?s=03) y que representa la evolución del tamaño (superficie) de los coches _habituales_ a lo largo del último siglo. Lo mismo pero evitando el indeseado efecto:

![](/wp-uploads/2019/01/Rplot.png)

El código:

{{< highlight R "linenos=true" >}}
library(ggplot2)

datos <- structure(list(year = c(1930L,
  1950L, 1960L, 1970L,
  1980L, 1990L, 2000L, 2010L, 2018L),
  width = c(1.45, 1.59, 1.54, 1.56, 1.64,
           1.67, 1.75, 1.76, 1.78),
  length = c(3.38, 4.02, 3.96, 3.89, 3.98,
           4, 4.18, 4.12, 4.23)),
  class = "data.frame", row.names = c(NA, -9L))

ggplot(datos, aes(xmin = 0, ymin = 0,
  xmax = length, ymax = width)) +
  geom_rect() +
  coord_fixed() +
  facet_wrap(~ year) +
  xlab("longitud (m)") +
  ylab("anchura (m)") +
  ggtitle("Evolución de la superficie\ndel coche 'promedio'")
{{< / highlight >}}



