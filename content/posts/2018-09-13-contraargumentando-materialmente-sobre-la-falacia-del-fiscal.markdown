---
author: Carlos J. Gil Bellosta
date: 2018-09-13 08:13:23+00:00
draft: false
title: Contraargumentando (materialmente) sobre la falacia del fiscal

url: /2018/09/13/contraargumentando-materialmente-sobre-la-falacia-del-fiscal/
categories:
- r
tags:
- falacias
- fiscal
- paquetes
- prim
- r
---

Hace un par de días hablé de [la falacia del fiscal y granos de arroz](https://www.datanalytics.com/2018/09/11/la-falacia-del-fiscal-la-mi-mejor-explicacion-para-profanos-hasta-la-fecha/). La entrada iba acompañada de

![](/wp-uploads/2018/09/tiger_isnt.png)


y la lección era: es raro no encontrar ningún _clúster_ cuando se tiran al azar granos de arroz sobre una superficie. De lo que se derivaban más cosas que es ocioso repetir aquí.

Pero el gráfico no es desconocido para los viejos del lugar: se parece mucho al de la página 319 de [ESL](https://web.stanford.edu/~hastie/ElemStatLearn/). Para los que no lo tengáis a mano, la parte donde se habla de un algoritmo que se llama igual que un general de Reus con calle en Méjico DF: PRIM.

PRIM y otros algoritmos similares buscan precisamente eso: lugares en _un_ (no necesariamente _el_) espacio donde las observaciones tienden a aglomerarse. PRIM está [implementado en R](https://cran.r-project.org/package=prim). También está disponible otro paquete, [`rsubgroup`](https://cran.r-project.org/package=rsubgroup), que remite a [esta página](http://www.rsubgroup.org/) llena de documentación.

En la que seguro que no se habla de la falacia del fiscal. Porque una cosa es detectar aglomeraciones y otra muy distinta que estas sean del interés de la Guardia Civil.


