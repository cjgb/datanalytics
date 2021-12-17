---
author: Carlos J. Gil Bellosta
date: 2014-10-06 07:13:56+00:00
draft: false
title: El problema del 100% (y un ensayo de solución)

url: /2014/10/06/el-problema-del-100-y-un-ensayo-de-solucion/
categories:
- consultoría
- estadística
tags:
- artesanía estadística
- estadística bayesiana
---

Te encargan un _modelo_. Por ejemplo, relacionado con el uso de tarjetas de débito y crédito (aunque a lo que me referiré ocurre en mil otros contextos). Una variable que consideras importante es la proporción de veces que se usa para sacar dinero de cajeros (y no para pagar en establecimientos). Así que, para cada cliente, divides el número de retiradas por el número de veces que la tarjeta se ha usado y obtienes ese número entre el 0 y el 1 (o entre el 0% y el 100%).

Construyes tu modelo. Lo evalúas. Quieres ver cómo varían las predicciones en función del nivel de la variable que has creado. Efectivamente, la predicción crece con ella. No es para tirar cohetes, pero _algo hay_. Excepto que la predicción decrece en el extremo, en el 100%. Ahí pasan cosas raras.

(Todo lo anterior, supuesto que no uses algún tipo de modelo lineal. En tal caso, lo verías estudiando los errores en función de los niveles de la variable).

Si te ha pasado, **te has topado con el ubicuo problema del 100%**.

El motivo es simple y casi siempre el mismo: en ese extremo, en ese 100%, tienes cantidad de sujetos que solo han usado la tarjeta una vez. Y, fíjate, por casualidad casi seguro, la usaron para retirar dinero. Les has asignado un _100% y lo juro por mi madre_ cuando realmente no tienes ni idea sobre las preferencias de esos sujetos. El un perro maté y mataperros me llamaron no funciona aquí. No puedes confundir a esos sujetos con los que usaron la tarjeta 319 veces y 294 lo hicieron de la manera en cuestión.

Si tienes prisa y no quieres leer lo que sigue, en lugar de $latex n/N$ haz $latex \frac{n + 0.5}{N+1}$ y las cosas mejorarán, casi seguro.

Si tienes más tiempo, tómatelo para aprender sobre la [distribución beta](http://en.wikipedia.org/wiki/Beta_distribution) y en particular, sobre la [inferencia bayesiana con prioris beta](http://en.wikipedia.org/wiki/Beta_distribution#Bayesian_inference). En nada lo invertirás mejor.



