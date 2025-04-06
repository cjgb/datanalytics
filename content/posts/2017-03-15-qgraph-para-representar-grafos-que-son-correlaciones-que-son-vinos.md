---
author: Carlos J. Gil Bellosta
categories:
- r
date: 2017-03-15 08:13:37+00:00
draft: false
lastmod: '2025-04-06T18:51:01.114267'
related:
- 2011-12-29-graficos-de-pares-de-variables-mejorados-con-r.md
- 2013-12-27-tres-articulos-curiosos-sobre-graficos.md
- 2010-09-16-representando-graficamente-conjuntos-de-datos-pequenos.md
- 2018-11-16-colinealidad-y-posterioris.md
- 2018-01-25-mgm-no-la-de-las-pelis-sino-la-de-los-modelos-graficos.md
tags:
- correlación
- grafos
- paquetes
- qgraph
- r
title: qgraph para representar grafos que son correlaciones que son vinos
url: /2017/03/15/qgraph-para-representar-grafos-que-son-correlaciones-que-son-vinos/
---

Me vais a permitir que escriba una entrada sin mayores pretensiones, inspirada en y adaptada de [aquí](https://dmwiig.net/2017/03/10/the-r-qgraph-package-using-r-to-visualize-complex-relationships-among-variables-in-a-large-dataset-part-one/) y que sirva solo de que para representar correlaciones entre variables podemos recurrir a los grafos como en

{{< highlight R >}}
library(qgraph)
wine.quality <- read.csv("https://goo.gl/0Fz1S8",
                            sep = ";")
qgraph(cor(wine.quality), shape= "circle",
        posCol = "darkgreen",
        negCol= "darkred", layout = "groups",
        vsize=13)
{{< / highlight >}}

que pinta

![](/wp-uploads/2017/03/wine_quality_cor.png#center)

mostrando resumidamente cómo se relacionan entre sí determinadas características de los vinos y cómo en última instancia influyen en su calidad (`qlt`).