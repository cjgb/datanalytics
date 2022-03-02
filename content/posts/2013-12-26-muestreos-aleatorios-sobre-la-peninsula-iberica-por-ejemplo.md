---
author: Carlos J. Gil Bellosta
date: 2013-12-26 07:10:39+00:00
draft: false
title: Muestreos aleatorios sobre la península Ibérica, por ejemplo

url: /2013/12/26/muestreos-aleatorios-sobre-la-peninsula-iberica-por-ejemplo/
categories:
- probabilidad
- r
tags:
- gráficos
- mapas
- probabilidad
- r
---

El problema fue sugerido por Eloy Ortiz en [un mensaje a r-help-es](https://stat.ethz.ch/pipermail/r-help-es/attachments/20131222/38c76ad8/attachment.pl). Quería saber cómo muestrear aleatoriamente (i.e., uniformemente) puntos sobre una región de la superficie terrestre delimitada por su _bounding box_ (i.e., las coordenadas que definen un _rectángulo_ sobre la esfera).

Obviamente, no vale con muestrear latitud y longitud uniformemente: el área comprendida entre dos meridianos cerca del ecuador es mayor que la comprendida entre otros dos más próximos al polo. Los husos se estrechan lejos del ecuador.

Sin embargo, la superficie de una [zona esférica ](http://es.wikipedia.org/wiki/Zona_esf%C3%A9rica) depende solo de h (su grosor, en la nomenclatura del enlace anterior) y no de la latitud en la que se ubique y es $latex A = 2 \pi R h.$

[![](/wp-uploads/2013/12/area_esferica-300x201.png#center)
](/wp-uploads/2013/12/area_esferica.png#center)

Por tanto, es posible muestrear aleatoriamente sobre h (o el rango de h definido por el bb) y para convertir de nuevo esos puntos en grados. El código en R que permite hacer lo anterior es el siguiente:

{{< highlight R >}}
# bb de la península Ibérica
lat.lims <- c(36, 44)
lon.lims <- c(-10, 4)

# número de puntos
n <- 1000

# la longitud se puede muestrear uniformemente
lon.sample <- runif(n, min = min(lon.lims), max = max(lon.lims))

# transformamos grados a radianes
lat.lims.rads <- lat.lims / 360 * 2 * pi

# latitud del bb en términos de h
h.lims <- sin(lat.lims.rads)
h.sample <- runif(n, min = min(h.lims), max = max(h.lims))

# de nuevo, grados
lat.sample <- asin(h.sample) / 2 / pi * 360

plot(lon.sample, lat.sample)
{{< / highlight >}}

Y sí, sé que debería pintar esos puntos sobre un mapa, etc., pero...

