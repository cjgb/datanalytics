---
author: Carlos J. Gil Bellosta
date: 2017-03-15 08:13:37+00:00
draft: false
title: qgraph para representar grafos que son correlaciones que son vinos

url: /2017/03/15/qgraph-para-representar-grafos-que-son-correlaciones-que-son-vinos/
categories:
- r
tags:
- correlación
- grafos
- paquetes
- qgraph
- r
---

Me vais a permitir que escriba una entrada sin mayores pretensiones, inspirada en y adaptada de [aquí](https://dmwiig.net/2017/03/10/the-r-qgraph-package-using-r-to-visualize-complex-relationships-among-variables-in-a-large-dataset-part-one/) y que sirva solo de que para representar correlaciones entre variables podemos recurrir a los grafos como en

{{< highlight R "linenos=true" >}}
library(qgraph)
wine.quality <- read.csv("https://goo.gl/0Fz1S8",
                            sep = ";")
qgraph(cor(wine.quality), shape= "circle",
        posCol = "darkgreen",
        negCol= "darkred", layout = "groups",
        vsize=13)
{{< / highlight >}}

que pinta

![](/wp-uploads/2017/03/wine_quality_cor.png)

mostrando resumidamente cómo se relacionan entre sí determinadas características de los vinos y cómo en última instancia influyen en su calidad (`qlt`).