---
author: Carlos J. Gil Bellosta
categories:
- estadística
date: 2024-03-07 00:00:00
lastmod: '2025-04-06T18:49:10.330470'
related:
- 2022-03-03-error-sesgo-modelos-lineales.md
- 2016-06-21-gbm-i-una-mentira-sugerente.md
- 2017-12-18-el-z-score-es-una-medida-inadecuada-de-la-perpejidad.md
- 2018-09-26-asi-de-floja-esta-la-evidencia-cientifica-sobre-el-impacto-de-airbnb-en-el-mercado-inmobiliario.md
- 2017-11-20-la-funcion-de-perdida-es-una-api-entre-los-stakeholders-de-un-analisis-estadistico.md
tags:
- estadística
- economía
- alquiler
- errores
- zillow
title: Errores en modelos. Zillow. Control de alquileres.
url: /2024/3/7/errores-modelos-zillow-control-alquileres/
---

### I. Errores en modelos

A menudo he usado

{{< highlight R >}}
plot(cars$speed, cars$dist)
abline(lm(dist ~ speed, data = cars), col = "red")
{{< / highlight >}}

con el que se crea la requetemanida gráfica

![](/wp-uploads/2024/cars_dist_speed_regression.png#center)

útil para ilustrar aspectos relacionados con el ajuste de modelos. Hoy, toca de nuevo.

Salvo que uno haga cosas muy extravagantes, los errores de un modelo están tanto por arriba como por debajo de la predicción. De hecho, en una amplia clase de modelos $\sum_i e_i =0$ en entrenamiento y, usualmente, la suma de los errores no debe de quedar muy lejos de cero tampoco en validación (y en el mundo real). Uno puede casi siempre decir: unas veces me quedaré corto; otras, largo; pero la ley de los grandes números me da ciertas garantías de que lo dado compensará lo servido en el largo plazo.

### II. Zillow

Sobre Zillow ya hablé un día [en un vídeo](/2022/02/28/nuevo-video-en-youtube-modelos-estadisticos-comportamiento-estrategico/). Pero resumo:
- Zillow construyó un modelo del precio de la vivienda.
- Zillow se comprometía a comprar las viviendas al precio que marcase el modelo.
- Zillow o quebró (o casi quebró) y tuvo que cambiar de estrategia.

¿Por qué? Porque el error para Zillow no era $\sum_i e_i \sim 0$ sino $\sum_i \min(0, e_i) < 0$. En efecto:
1. La propiedad X tiene un precio de mercado ---es decir, alguien ofrece ese dinero por ella--- de 100k pero Zillow infraestima y ofrece 95k. Zillow ganaría 5k de adquirir X, pero en realidad gana 0 porque nunca llega a adquirirla.
2. La propiedad X tiene un precio de mercado de 100k, pero Zillow sobreestima y ofrece 105k. Entonces Zillow pierde 5k porque compra por 105k algo que vale 100k.

### III. Control de alquileres

El benemérito Reino de España quiere controlar el precio de los alquileres. Se ve que ha creado un _modelo_ en el que a partir de cierta información básica determina cuál es el precio al que debería ofertarse un apartamento en alquiler para maximizar cierta función de pérdida. Las predicciones del _modelo_ ---y las variables de las que depende--- pueden consultarse [aquí](https://serpavi.mivau.gob.es/).

Y uno puede jugar a preguntarse qué pasará ---es decir, cuál será la respuesta estratégica de los afectados--- cuando el modelo infra/sobreestime, esperar unos meses y ver si ha acertado o no.