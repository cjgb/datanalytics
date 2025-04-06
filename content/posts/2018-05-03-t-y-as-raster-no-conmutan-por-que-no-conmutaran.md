---
author: Carlos J. Gil Bellosta
categories:
- r
date: 2018-05-03 08:13:35+00:00
draft: false
lastmod: '2025-04-06T19:11:35.758654'
related:
- 2017-09-06-python-y-r-una-perspectiva-markoviana.md
- 2014-05-12-grid-scala-y-arbolitos.md
- 2011-10-14-gestion-avanzada-de-memoria-en-r-tracemem-ii.md
- 2014-03-10-guarjolizacion-de-fotos-con-r.md
- 2010-04-21-para-que-copien-peguen-y-disfruten.md
tags:
- r
- raster
title: t y as.raster no conmutan; ¿por qué no conmutarán?
url: /2018/05/03/t-y-as-raster-no-conmutan-por-que-no-conmutaran/
---

Creo una minimatriz, la convierto en un _raster_ y la represento:

{{< highlight R >}}
m <- matrix(c(0, 0, 0.33, 0.66, .9, .9), 2, 3)
m
#      [,1] [,2] [,3]
# [1,]    0 0.33   .9
# [2,]    0 0.66   .9

r <- as.raster(m)
r
#           [,1]      [,2]      [,3]
# [1,] "#000000" "#545454" "#FFFFFF"
# [2,] "#000000" "#A8A8A8" "#FFFFFF"

plot(r, interpolate = FALSE)
{{< / highlight >}}

![](/wp-uploads/2018/04/t_raster_orig.png#center)

Ahora, con la matriz traspuesta,

{{< highlight R >}}
r_t_1 <- as.raster(t(m))
r_t_1
#           [,1]      [,2]
# [1,] "#000000" "#000000"
# [2,] "#545454" "#A8A8A8"
# [3,] "#E6E6E6" "#E6E6E6"
{{< / highlight >}}

obtengo

![](/wp-uploads/2018/04/raster_t.png#center)

que difiere de cuando invierto el orden de las operaciones, i.e.,

{{< highlight R >}}
r_t_2 <- t(as.raster(m))
r_t_2
#           [,1]      [,2]
# [1,] "#000000" "#E6E6E6"
# [2,] "#A8A8A8" "#545454"
# [3,] "#000000" "#E6E6E6"
{{< / highlight >}}

Que visualmente es

![](/wp-uploads/2018/04/t_raster.png#center)

¿Por qué, Dios mío, por qué? (Si alguien sabe razonarlo y tiene tiempo y disposición, siéntase libre de hacerlo en la sección de comentarios).