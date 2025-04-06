---
author: Carlos J. Gil Bellosta
categories:
- estadística
- r
date: 2020-09-03 08:13:00+00:00
draft: false
lastmod: '2025-04-06T18:45:10.968234'
related:
- 2011-05-30-dos-perspectivas-sobre-el-problema-de-los-valores-no-informados.md
- 2024-07-10-cortos-stats.md
- 2022-06-07-generalized-random-forests.md
- 2012-01-12-localidad-globalidad-y-maldicion-de-la-dimensionalidad.md
- 2024-02-13-outliers-dos-modos.md
tags:
- imputación
- paquetes
- r
title: Contrariamente a lo que creía recordar, "Hot deck" != LOCF
url: /2020/09/03/contrariamente-a-lo-que-creia-recordar-hot-deck-locf/
---

Imputación (que es algo en lo que muy a regañadientes estoy trabajando estos días).

Si de verdad tienes que imputar datos en una tabla (y solo en ese caso), solo hay un criterio: construye un modelo para predecir los valores faltantes en función del resto y reemplaza el NA por la su predicción.

El modelo puede ser tan tonto como

`lm(my_col ~ 1, na.rm = T)`

que resulta en la popular estrategia de reemplazar los NAs por la media del resto de las observaciones. Cambiando `lm` por otras cosas funciones más molonas y la fórmula por otras más complejas en que intervengan otras columnas se obtienen métodos más potentes. Se pueden usar GAMs (como en [`mtsdi`](https://CRAN.R-project.org/package=mtsdi)) o random forests (como en [`missForest`](https://CRAN.R-project.org/package=missForest)), pero la idea está clara. Es solo la naturaleza del problema la que nos invita a decantarnos por una u otra opción.


[Nota: las técnicas de imputación basadas en descomposiciones matriciales, como [esta](https://www.rdocumentation.org/packages/bcv/versions/1.0.1/topics/impute.svd), no encajan exactamente en la formulación que expongo en el párrafo anterior, al menos en el aspecto formal. Pero creo que sí en el sustancial: en el fondo, postulan cierta estructura en los datos y la explotan para realizar las correspondientes imputaciones.]

Pero el abuelo de todas las técnicas de imputación es HDI (_hot deck imputation_), cuya versión original y más conocida es LOCF (_last observation carried forward_). Esta última consistía en completar el dato faltante en una ficha (o tarjeta) con el de la ficha anterior. Recuérdese que estamos hablando de cuando

![](/wp-uploads/2020/09/1890_Census_Hollerith_Pantograph_Punching_Machine_Sci_Amer.jpg)

En el fondo, incluso LOCF tiene un modelo subyacente: tarjetas físicamente próximas en un lote podrían tener procedencias similares; p.e., de familias que residen en un mismo bloque o pacientes tratados por un mismo doctor.

En el fondo, una especie de 1-vecinos (k-vecinos con k = 1) junto con una heruística simple para estimar el vecino más próximo.

Por lo que he averiguado, bajo el nombre HDI, ya no se entiende LOCF sino, más bien, lo que comento más arriba (modelo + predicción) usando k-vecinos propiamente dichos (véase [esto](https://CRAN.R-project.org/package=hot.deck) y sus referencias).