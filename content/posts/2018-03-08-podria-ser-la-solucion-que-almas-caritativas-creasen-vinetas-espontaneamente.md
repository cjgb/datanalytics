---
author: Carlos J. Gil Bellosta
date: 2018-03-08 08:13:23+00:00
draft: false
title: ¿Podría ser la solución que almas caritativas creasen viñetas espontáneamente?

url: /2018/03/08/podria-ser-la-solucion-que-almas-caritativas-creasen-vinetas-espontaneamente/
categories:
- r
tags:
- paquetes
- r
- viñetas
---

Uno de los modelos más útiles potencialmente y que menos atención recibe es el de los modelos de conteos autoexcitados. Es decir, aquellos en los que un evento incrementa durante cierto tiempo la probabilidad de que ocurra otro. Creedme, ocurre así muy a menudo en muchas aplicaciones.

Por eso se pone uno muy contento cuando descubre paquetes de R como [este](https://cran.r-project.org/web/packages/RHawkes/index.html).

Pero el hecho de que unos académicos lo hayan creado y puesto _ahí_ por mor de las neonormas (administrativas, morales o de señalamiento) de reproducibilidad, no significa que lo hayan desarrollado para los usuarios finales. O pensando en ellos.

Lo cual cabrea mucho.

Por eso es tan de agradecer que gente como la que escribe [esto](https://jcarroll.com.au/2018/03/06/jc-and-the-vignettes/) tenga por _hobby_ redactar espontáneamente viñetas para acompañar aquellos paquetes que vienen sin ellas.

**Nota:** Del estudio _económico_ (incentivos, etc.) superficial de la cosa, cabe esperar que la moda de la reproducibilidad incremente el volumen de código liberado, sí, pero que decrezca su calidad y usabilidad. Además, el típico académico no tiene interés en mantener su código (o publica o perece: lo que quedó atrás es tierra quemada); así que cabe esperar que muchos paquetes languidezcan hasta que dejen de pasar los _checks_ de futuras versiones.
