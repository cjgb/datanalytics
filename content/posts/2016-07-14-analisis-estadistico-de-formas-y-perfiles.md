---
author: Carlos J. Gil Bellosta
categories:
- estadística
date: 2016-07-14 08:13:26+00:00
draft: false
lastmod: '2025-04-06T18:53:07.949969'
related:
- 2011-08-01-dos-aplicaciones-c2bfsorprendentes-del-analisis-de-la-correlacion-canonica.md
- 2020-11-02-distancias-i-el-planteamiento-del-problema.md
- 2024-12-26-cortos-stats.md
- 2022-07-14-proximidad-distribuciones.md
- 2015-11-11-ad-more-geometrico.md
tags:
- estadística
- formas
- momocs
- distancia
title: Análisis estadístico de formas y perfiles
url: /2016/07/14/analisis-estadistico-de-formas-y-perfiles/
---

Siempre me intrigó cómo podía realizarse el análisis estadístico de _cosas_ que no son tablas. Por ejemplo, formas.

![momocs_botellas](/img/2016/07/momocs_botellas.png#center)

Nótese que tales medidas deberían presentar invariancias frente a rotaciones, dilataciones, simetrías, etc.

Quien alimente también semejantes dudas podrá saciarlas (parcialmente, claro) [aquí](https://www.jstatsoft.org/index.php/jss/article/view/v056i13/v56i13.pdf) y [aquí](https://github.com/vbonhomme/Momocs/blob/master/vignettes/Momocs_speed_dating.Rmd), donde, entre otras cosas, se enseña cómo extraer variables _de toda la vida_ que resumen ese tipo de perfiles a través de, por ejemplo, aplicaciones muy particulares de la transformada de Fourier.

Particularmente interesante es el llamado análisis de Fourier elíptico, que busca descomponer una figura en elipses, tal como en

![momocs_botellas_elipses](/img/2016/07/momocs_botellas_elipses.png#center)

No deja de ser un divertimento para los más de nosotros pero quién sabe qué cosas nos puede inspirar en el futuro.