---
author: Carlos J. Gil Bellosta
date: 2015-08-28 08:13:32+00:00
draft: false
title: Todos los errores son iguales, pero algunos son más iguales que otros

url: /2015/08/28/todos-los-errores-son-iguales-pero-algunos-son-mas-iguales-que-otros/
categories:
- ciencia de datos
- estadística
tags:
- artesanía estadística
- estadística
- ciencia de datos
- svm
---

Por eso, en la práctica, el [RMSE](https://es.wikipedia.org/wiki/Error_cuadr%C3%A1tico_medio) y similares son irrelevantes. Aunque eso, desgraciadamente, no quiera decir que no sean utilizados.

Pero en muchas ocasiones no es el error medio la medida importante. A menudo uno quiere detectar _outliers_: una variable de interés tiene un comportamiento normal la mayor parte del tiempo pero en ocasiones, en raras ocasiones, cuando supera un umbral, produce catástrofes. Dejarse guiar por el RMSE (o similares) produciría una peligrosa sensación de seguridad: detectaría la normalidad; la anormalidad, lo interesante, le resultaría inasequible.

Un ejemplo de hoy mismo. Un modelo para predecir irradiación solar. Si esta se sitúa por debajo de un determinado umbral, se rompen cosas. El modelo es _bueno_: ¡casi siempre acierta! Pero esa bondad significa simplemente que ha aprendido que en verano pega el sol. Un viaje para el que sobran alforjas.

(Y mientras escribo esto se me ocurre especular sobre la conveniencia de usar SVM en estos casos).
