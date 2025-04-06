---
author: Carlos J. Gil Bellosta
categories:
- probabilidad
date: 2023-11-21
draft: false
lastmod: '2025-04-06T18:44:18.458793'
related:
- 2021-02-23-tres-teoremas-que-son-casi-ciertos.md
- 2021-03-02-un-argumento-para-usar-la-normal-la-maximizacion-de-la-entropia.md
- 2016-05-31-el-extrano-caso-de-la-media-empirica-menguante.md
- 2024-02-15-margenes-distribucion.md
- 2024-03-05-sobreajuste-modelos-bayesianos.md
tags:
- distribuciones
- lognormal
- probabilidad
- estadística bayesiana
- modelos jerárquicos
title: El "teorema" sobre las sumas de lognormales no es solo falso sino que, además,
  es innecesario (en muchos casos)
url: /2023/11/21/sobre-sumas-lognormales/
---

## I.

[Hace un tiempo](/2023/11/21/sobre-sumas-lognormales/), reproduje el enunciado del siguiente _teorema_:

> La suma de lognormales (independientes y con parámetros similares) es lognormal.

El _teorema_ no es cierto. No puede serlo tanto por motivos teóricos como meramente empíricos. Es fácil

1. tomar 3000 muestras de una lognormal con parámetros cualesquiera,
2. sumarlos por tríos para obtener 1000 muestras $x_i$ de su suma,
3. ajustar la _mejor_ lognormal que se ajusta a ellos (pista: si se usa MV, los parámetros ajustados son la media y la desviación estándar de $\log x_i$),
4. comparar las dos muestras (p.e., vía _qqplots_).

## II.

Pero sí que es cierto que:

1. la suma de lognormales tiene _aspecto lognormal_ (al menos, en muchos casos),
2. en muchas aplicaciones ---algunas de las cuales son muy relevantes hoy en día, como se verá--- hay datos que son sumas de lognormales y,
3. finalmente, que a quienes trabajan en esas aplicaciones les viene muy bien un _teorema_ en esos términos porque facilita la implementación de soluciones.

Uno de esos ámbitos en los que aparecen este tipo de datos es el de las ventas por internet a través de plataformas como Amazon o similares. Si uno examina las ventas de una empresa determinada a través de estas plataformas, sucede que:

1. Los precios de los productos que vende la empresa tienen ---esta es una regularidad empírica que, como todas, tendrá sus excepciones--- distribución lognormal. Sin ir más lejos, la compañía Ibérica de Cositos SA, vende fundamentalmente cositos; pero también los cositos ultra, más caros y esporádicamnete, algunos cositos de edición limitada a un precio mucho mayor; sin olvidar los _packs_ de 12 cositos, por supuesto; por otra parte, también vende el cable de alimentación de los cositos, la carcasa de los cositos, juegos de limpieza de cositos y ruedas de repuesto para los cositos, que se venden a una fracción de lo que cuesta el cosito estándar. Evidentemente, distribución lognormal.
2. La plataforma proporciona información del tipo: en el día tal, para el anuncio cual, se realizaron 97 _clicks_ y se consumaron 3 ventas por un importe conjunto de 152.28 euros.

Esos 152.28 euros corresponden a 3 ventas, pero se desconoce el precio de cada venta por separado.

La conjunción de los puntos 1 y 2 parecería subrayar la releancia del falso teorema. Pero aún no termina mi entrada.

## III.

La clave está en la letra pequeña del punto 2: _en el anuncio cual_. Típicamente, las empresas crean anuncios (con su foto, su precio, la descripción del producto, etc.) y lo que tiende a suceder ---otra regularidad empírica que tendrá sus excepciones--- es que:

1. La distribución de los precios medios _por anuncio_ tiene distribución lognormal.
2. La distribución de los precios para cada anuncio ---más concretamente, de los precios medios por registro proporcionado por la plataforma--- es aproximadamente normal.

Eso justifica modelar el precio del producto descomponiéndolo a través de la suma

$$X = X_e + X_a,$$

donde:

1. $X_e$ es una variable aleatoria lognormal que define la distribución de los precios medios de la empresa (de ahí la $e$) a través de sus anuncios y
2. $X_a$ es una variable aleatoria normal con media cero.

Obviamente, a la hora de modelar, hay que tener en cuenta el número de ventas agrupadas en cada cifra multiplicando la variable aleatoria anterior por el número de ventas.