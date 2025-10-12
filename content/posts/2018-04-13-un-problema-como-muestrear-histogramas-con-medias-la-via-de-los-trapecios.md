---
author: Carlos J. Gil Bellosta
categories:
- estadística
date: 2018-04-13 08:13:32+00:00
draft: false
lastmod: '2025-04-06T18:53:39.952298'
related:
- 2017-04-12-experimentos-con-extremely-small-data-la-media-muestral-de-pocas-betas.md
- 2016-02-04-y-termino-con-lo-de-los-intervalos.md
- 2016-03-03-mezclas-de-distribuciones-con-rstan.md
- 2015-04-27-intervalos-de-credibilidad-para-la-distribucion-beta.md
- 2017-11-03-intervalos-de-confianza-creativos-que-excluyen-el-0.md
tags:
- estadística
- histogramas
- media
- muestreo
title: 'Un problema: cómo muestrear histogramas con medias. La vía de los trapecios'
url: /2018/04/13/un-problema-como-muestrear-histogramas-con-medias-la-via-de-los-trapecios/
---

Me refiero muy impropiamente con _histogramas con medias_ a algo parecido a
![](/wp-uploads/2018/04/histograma_medias.png#center)


que son resúmenes de datos en los que aparecen no solo intervalos sino también las medias correspondientes a los sujetos dentro de esos intervalos.

Si uno quiere hacer cosas con esos datos tiene una vía que consiste en muestrear el _histograma_. Pero la media en cada intervalo será su punto central, no necesariamente su valor medio conocido.

Por simplificar, supongamos que tenemos datos en el intervalo [0, 1] cuya media es $\mu$. ¿Cómo obtener un muestreo razonable de valores en dicho intervalo?

El primer ensayo podría ser muestrear una distribución trapezoidal, i.e.,

![](/wp-uploads/2018/04/muestreo_trapecio.png#center)

Muestrear un trapecio de esas características equivale a muestrear una mezcla de una uniforme y una triangular (con pesos 0.8 y 0.2 en este caso porque el área del triángulo es la quinta parte de la de la región entera).

Como la media de una distribución triangular es 1/3 o 2/3 (dependiendo de si la moda está en 0 o en 1) y la de la uniforme es 0.5, la mezcla, dependiendo de los pesos, solo serviría para los casos en que la media de intervalo estuviese dentro del intervalo [1/3, 2/3].

Para otros casos, otras entradas.