---
author: Carlos J. Gil Bellosta
date: 2013-11-04 07:05:09+00:00
draft: false
title: Un récord personal

url: /2013/11/04/un-record-personal/
categories:
- ciencia de datos
- r
tags:
- grandes datos
- hardware
- r
---

El otro día, casi por error, cargué este dataframe en R:

{{< highlight R >}}
dim(raw)
# [1] 115318140         4
{{< / highlight >}}

Es todo un récord personal logrado en un servidor con 24GB de RAM bastante caro.

El anterior estaba en otro de algo así como 20 millones de filas y unas 6 o siete columnas. Eso sí, logrado en `tiramisu`, mi ordenador personal de 8GB de RAM de 400 euros (monitor incluido).

Os preguntaréis si pude hacer algo con ese monstruo. La verdad es que sí: pude muestrear un 10% de las filas y trabajar con ellas sin problemas.

¿Qué lectura puede hacerse de este hito? Pues que los ordenadores de 24, 64 y más GB de RAM comienzan a estar al alcance de manos tan humildes como las mías. Con esos bichos será posible atacar y resolver problemas en memoria (¿no es preferible a hacerlo con datos vaya-vd-a-saber-dónde?) expandiendo el ámbito de lo que llamo _datos semigrandes_ (o _semi-big data_) y de lo resoluble con R (antaño considerado tan estrecho).
