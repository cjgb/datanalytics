---
author: Carlos J. Gil Bellosta
categories:
- estadística
date: 2012-06-25 06:27:35+00:00
draft: false
lastmod: '2025-04-06T18:48:28.064296'
related:
- 2012-05-17-para-los-expertos-en-series-temporales.md
- 2016-11-16-detras-de-la-deteccion-de-anomalias-en-series-temporales.md
- 2014-02-14-memoria-de-decaimiento-exponencial-y-canutos-asincronos.md
- 2020-09-17-una-herramienta-para-el-analisis-no-parametrico-de-series-temporales.md
- 2017-10-20-he-tratado-de-contrastar-una-hipotesis-sin-exito-asi-que-solo-publico-el-subproducto.md
tags:
- estadística
- series temporales
title: Para los expertos en series temporales (II)
url: /2012/06/25/para-los-expertos-en-series-estadisticas-ii/
---

El otro día [propuse un ejercicio de series temporales](https://datanalytics.com/2012/05/17/para-los-expertos-en-series-temporales/), el análisis de una serie temporal bastante conocida. Entre otras cosas, para ver si alguien la reconocía. O si daba con un análisis más o menos adecuado de la misma. Y, ¡vaya!, no he tenido ninguna respuesta...

De todos modos, antes de realizar mi primera entrada pregunté a un amigo experto en la materia para ver si resultaba demasiado evidente. Le pedí expresamente que no perdiese mucho tiempo con ella. Y observó algunos patrones _interesantes_ (como que el número de valores distintos en la serie no excedía la treintena) así como una cierta estructura de correlación.

Podría decirse que mi problema está propuesto desde la _mala onda_. Puede ser. No soy experto en series temporales pero estoy convencido de que su teoría académica cubre únicamente un subconjunto de las estructuras internas que pueden presentar los datos ordenados en el tiempo. Un subconjunto relevante, extenso, útil, etc., por supuesto. Pero no universal.

Mi afirmación es una perogrullada, por supuesto. Todos lo saben. Pero también es cierto que no todos lo practican, ni aun con la evidencia enfrente: basta con que las observaciones del conjunto de datos en cuestión tengan $t$ como subíndice como para que te miren raro si no dices _ipso facto_: "¡ARIMA!". Y yo suelo resistirme en muchas ocasiones.

Porque a veces pienso que $x_t$ puede predecirse mejor a partir de información externa (¿fue $t$ festivo?, ¿llovió ese día?) que de los $x_{t-i}$. Y puede que algún día cuente alguna historia no enteramente edificante al respecto.

Y vuelvo al problema original, el de la serie cuyo estudio propuse, para indicar que tiene una fortísima estructura temporal que escapa, aparentemente, al análisis tradicional de las series temporales. Se trata de la recodificación en forma numérica de los caracteres del primer capítulo de un libro que comienza así: "En un lugar de la Mancha de cuyo nombre..."