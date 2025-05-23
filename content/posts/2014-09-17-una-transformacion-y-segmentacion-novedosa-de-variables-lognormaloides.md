---
author: Carlos J. Gil Bellosta
categories:
- consultoría
date: 2014-09-17 07:13:57+00:00
draft: false
lastmod: '2025-04-06T18:48:44.974486'
related:
- 2017-06-29-hoy-como-excepcion-gritare-y-justificare-malditos-logaritmos.md
- 2015-07-06-una-interpretacion-rapida-y-sucia-de-los-coeficientes-de-la-regresion-logistica.md
- 2023-11-21-sumas-lognormales.md
- 2016-05-31-el-extrano-caso-de-la-media-empirica-menguante.md
- 2020-06-29-sobremuestreando-x-y-no-y.md
tags:
- consultoría
- logaritmo
title: Una transformación (y segmentación) novedosa de variables (lognormaloides)
url: /2014/09/17/una-transformacion-y-segmentacion-novedosa-de-variables-lognormaloides/
---

-- La variable `gasto` tiene una distribución muy fea que tiene un impacto en el modelo. He optado por transformarla.
-- ¿Qué has hecho?
-- Bueno, verás: no es lo mismo que alguien gaste menos de un euro o que gaste más de cien. A los que gastan entre cero y uno les he dado el valor 0.
-- Vale.
-- Entonces, a los que gastan, digamos, entre 1 y 10, 1; luego, a los que gastan entre 10 y 100, 2. Porque no es lo mismo gastar 9 que 90, ¿no?
-- Claro.
-- Y así sucesivamente... a los que gastan entre 100 y 1000 euros, les he puesto un 3...
-- Para, para, para... ¡has tomado el logaritmo!
-- Eh, bueno, en realidad... `log10(x+1)`...

Resumen:

* ¡Los arbitrios que tiene que hacer uno para que le dejen tomar logaritmos!
* No trates de venderle la moto a alguien que tiene un doctorado... aunque sea en informática.

Concluyo con una cita de Andrew Gelman:

>“You take the log so fast that you don’t even see the actual data. Plus you take the log because you can, because they’re all positive.”