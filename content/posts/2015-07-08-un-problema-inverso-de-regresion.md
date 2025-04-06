---
author: Carlos J. Gil Bellosta
categories:
- estadística
date: 2015-07-08 08:13:15+00:00
draft: false
lastmod: '2025-04-06T18:54:48.198646'
related:
- 2014-12-31-el-problema-de-la-estimacion-inversa.md
- 2018-11-16-colinealidad-y-posterioris.md
- 2015-01-27-grandes-datos-maquinas-pequenas-y-regresiones-logisticas-con-variables-categoricas.md
- 2017-10-23-modelos-directos-inversos-y-en-los-que-tanto-da.md
- 2020-06-24-la-regresion-logistica-como-el-modelo-mas-simple-posible-que.md
tags:
- estadística
- regresión
title: Un problema inverso de regresión
url: /2015/07/08/un-problema-inverso-de-regresion/
---

He estado pensando qué tipo de ejercicios de estadística (y modelos estadísticos) plantear a mis alumnos del [máster de _data science_ de la UTAD](https://www.u-tad.com/estudios/experto-en-data-science/).

Así que les he dado unos datos, los `X`, relativamente grandes (y sin problemas de colinealidad y similares) y les voy a pedir que me construyan la `y` de manera que los coeficientes obtenidos sean, aproximadamente, iguales a unos dados. A ver qué tal se les da.