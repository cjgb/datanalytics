---
author: Carlos J. Gil Bellosta
categories:
- ciencia de datos
- estadística
date: 2015-08-28 08:13:32+00:00
draft: false
lastmod: '2025-04-06T18:50:06.844125'
related:
- 2023-03-28-se-iguales.md
- 2017-11-20-la-funcion-de-perdida-es-una-api-entre-los-stakeholders-de-un-analisis-estadistico.md
- 2024-02-13-outliers-dos-modos.md
- 2020-12-16-la-interpretacion-de-significativo-en-un-caso-muy-concreto.md
- 2015-11-13-gam.md
tags:
- artesanía estadística
- estadística
- ciencia de datos
- svm
title: Todos los errores son iguales, pero algunos son más iguales que otros
url: /2015/08/28/todos-los-errores-son-iguales-pero-algunos-son-mas-iguales-que-otros/
---

Por eso, en la práctica, el [RMSE](https://es.wikipedia.org/wiki/Error_cuadr%C3%A1tico_medio) y similares son irrelevantes. Aunque eso, desgraciadamente, no quiere decir que no sean utilizados.

Pero en muchas ocasiones no es el error medio la medida importante. A menudo, uno quiere detectar _outliers_: una variable de interés tiene un comportamiento normal la mayor parte del tiempo; pero en ocasiones, en raras ocasiones, cuando supera determinado umbral, produce catástrofes. Dejarse guiar por el RMSE (o similares) generaría una peligrosa sensación de seguridad: detectaría la normalidad; pero la la anormalidad, lo verdaderamente interesante, le resultaría inasequible.

Un ejemplo de hoy mismo. Un modelo para predecir irradiación solar. Si esta se sitúa por debajo de un determinado umbral, se rompen cosas. El modelo es _bueno_: ¡casi siempre acierta! Pero esa bondad significa simplemente que ha aprendido que en verano pega el sol. Un viaje para el que sobran alforjas.

(Y mientras escribo esto se me ocurre especular sobre la conveniencia de usar SVM en estos casos).