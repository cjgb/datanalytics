---
author: Carlos J. Gil Bellosta
date: 2018-01-18 08:13:26+00:00
draft: false
title: Insospechadas aplicaciones de la estadística en arqueología

url: /2018/01/18/estadistica-insospechadas-aplicaciones-en-arqueologia/
categories:
- estadística
tags:
- arqueología
- comercio
- estadística
- gravedad
- tablillas
- turquía
---

Se ve que hace 4000 años existió una incipiente actividad comercial entre protociudades situadas en las actuales Turquía, Siria e Irak:

![](/wp-uploads/2018/01/rutas_comercio_anatolia.png)


Se han descubierto tablillas tales como

![](/wp-uploads/2018/01/bono.jpg)


(que es el primer bono del que se tiene constancia) en las que se lee que alguien llevó tanta plata de la ciudad X a la Y, etc.

Los autores [_Trade, Merchants and Lost Cities of the Bronze Age_](https://www.princeton.edu/~ies/IESWorkshopS2017/ChaneyPaper.pdf), usando una muestra de unas 5000 tablillas, modelaron este tráfico usando un [modelo de gravedad](https://en.wikipedia.org/wiki/Gravity_model_of_trade), es decir,



$latex \log(X{ij}) = z_i + z_j + \delta \log(d_{ij}) + \epsilon_{ij}$



donde las $latex ij$ recorren los pares de ciudades, las $latex z_i$ dan cuenta de su importancia (o peso) y $latex \delta$ penaliza la distancia entre ellas.

Parece que el modelo ajusta no mal y que $latex \delta$ es coherente con los valores obtenidos después y en otras partes (cosa que podríamos comprobar por nosotros mismos si los datos se liberasen, dicho sea de paso).

Pero, además, el modelo ha permitido acotar las coordenadas de una serie de protociudades perdidas (i.e., que constan, pero se ignora dónde estaban) usando algún tipo de triangulación. Aunque a saber cómo: he buscado _bayesian_ en el documento sin resultado.
