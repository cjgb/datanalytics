---
author: Carlos J. Gil Bellosta
categories:
- estadística
date: 2024-01-25
lastmod: '2025-04-06T19:10:49.101771'
related:
- 2016-11-16-detras-de-la-deteccion-de-anomalias-en-series-temporales.md
- 2023-01-16-autoencoders-consejos.md
- 2016-06-02-deteccion-de-outliers-locales.md
- 2024-02-13-outliers-dos-modos.md
- 2020-07-21-analisis-de-arquetipos.md
tags:
- estadística
- fotografía
- mediana
- outliers
title: Una aplicación inesperada de la detección de "outliers"
url: /2024/01/25/antimediana-fotos/
---

Es esta:

![](/img/2024/antimedianstacking512.jpg#center)

La foto está construida _apilando_ varias tomadas secuencialmente. Cada píxel que se ve procede de alguna de las originales. En concreto, en la coordenada $ij$ se selecciona uno de los píxeles $ij$ de alguna de las de partida.

Para conseguir el efecto deseado, el píxel seleccionado es no otro que el _outlier_. En este caso concreto, la _antimediana_, el más alejado de la mediana.

La foto original, una discusión detallada del algoritmo, etc., puede consultarse en
[_Apilado por 'antimediana' para replicar sujetos en movimiento con Photoshop_](https://www.overfitting.net/2022/11/apilado-por-antimediana-para-replicar_18.html).