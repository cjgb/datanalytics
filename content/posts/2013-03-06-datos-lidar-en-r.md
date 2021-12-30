---
author: Carlos J. Gil Bellosta
date: 2013-03-06 07:13:58+00:00
draft: false
title: Datos LIDAR en R

url: /2013/03/06/datos-lidar-en-r/
categories:
- r
tags:
- lidar
- python
- r
- rpython
---

En la reunión del [grupo de interés local (GIL) de R de Madrid](http://r-es.org/Grupo+de+Inter%C3%A9s+Local+de+Madrid+-+GIL+Madrid), Francisco Mauro habló de aplicaciones de R a conjuntos de datos [LIDAR](http://es.wikipedia.org/wiki/LIDAR).

En efecto, uno quiere estimar la cantidad de madera que hay en un monte. Uno entonces la calcula en unas pequeñas zonas y luego, barriendo el monte con pulsos de láser desde un avión toma medidas `(x,y,z)` (es decir, longitud, latitud y altura) en una malla fina de puntos. Esa malla permite identificar, por ejemplo, la densidad y altura de los árboles. Correlacionando estas variables _proxy_ con la cantidad de madera, se puede, por ejemplo, estimar por extrapolación la cantidad total de madera que contiene el monte entero.

Sin embargo, los datos LIDAR se generan habitualmente en un formato, LAS, libre pero binario e ilegible. Que no parecen poder leerse con R aún. Aunque [sí con Python](http://www.liblas.org/python.html), así que...

{{< highlight R "linenos=true" >}}
library(rPython)
library(ggplot2)

python.code <- "
from liblas import file
f = file.File('Parcela_209.las',mode='r')
xyz = [(p.x, p.y, p.z) for p in f]
"

python.exec(python.code)
xyz <-python.get("xyz")

xyz <- data.frame(do.call(rbind, xyz))

ggplot(xyz, aes(x = X1, y = X2, col = X3)) + geom_point()
{{< / highlight >}}

... que produce:

[![](/wp-uploads/2013/03/lidar_points.png#center)
](/wp-uploads/2013/03/lidar_points.png#center)

¿Adivinará alguien lo que estoy pensando?
