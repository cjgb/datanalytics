---
author: Carlos J. Gil Bellosta
categories:
- r
date: 2018-09-13 08:13:23+00:00
draft: false
lastmod: '2025-04-06T19:03:24.963684'
related:
- 2016-11-16-detras-de-la-deteccion-de-anomalias-en-series-temporales.md
- 2012-03-22-primera-reunion-del-grupo-de-usuarios-de-r-de-madrid-ii.md
- 2022-12-15-raking.md
- 2020-09-10-distribuciones-de-renta-solo-de-renta-a-partir-de-histogramas.md
- 2016-07-04-gestion-de-la-mendacidad-encuestoelectoral-los-numeros.md
tags:
- falacias
- fiscal
- paquetes
- prim
- r
title: Contraargumentando (materialmente) sobre la falacia del fiscal
url: /2018/09/13/contraargumentando-materialmente-sobre-la-falacia-del-fiscal/
---

Hace un par de días hablé de [la falacia del fiscal y granos de arroz](https://datanalytics.com/2018/09/11/la-falacia-del-fiscal-la-mi-mejor-explicacion-para-profanos-hasta-la-fecha/). La entrada iba acompañada de

![](/img/2018/09/tiger_isnt.png#center)

y la lección era: es raro no encontrar ningún _clúster_ cuando se tiran al azar granos de arroz sobre una superficie. De lo que se derivaban más cosas que es ocioso repetir aquí.

Pero el gráfico no es desconocido para los viejos del lugar: se parece mucho al de la página 319 de [ESL](https://web.stanford.edu/~hastie/ElemStatLearn/). Para los que no lo tengáis a mano, la parte donde se habla de un algoritmo que se llama igual que un general de Reus con calle en Méjico DF: PRIM.

PRIM y otros algoritmos similares buscan precisamente eso: lugares en _un_ (no necesariamente _el_) espacio donde las observaciones tienden a aglomerarse. PRIM está [implementado en R](https://cran.r-project.org/package=prim). También está disponible otro paquete, [`rsubgroup`](https://cran.r-project.org/package=rsubgroup), que remite a [esta página](http://www.rsubgroup.org/) llena de documentación.

En la que seguro que no se habla de la falacia del fiscal. Porque una cosa es detectar aglomeraciones y otra muy distinta que estas sean del interés de la Guardia Civil.

**Addenda:** En [estas páginas](https://datanalytics.com/tags/sobol/) hay algo de información friqui relevante para la discusión anterior.