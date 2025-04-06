---
author: Carlos J. Gil Bellosta
categories:
- estadística
date: 2017-10-24 08:13:40+00:00
draft: false
lastmod: '2025-04-06T18:48:23.859102'
related:
- 2024-02-01-optimizacion-generalizacion.md
- 2011-06-22-diez-mandamientos-del-analisis-de-datos.md
- 2020-05-11-agregar-antes-de-modelar.md
- 2015-07-10-calcular-una-regresion-a-mano-o-con-un-programa-puede-ser-mas-preciso.md
- 2012-05-03-representacion-de-datos-asociados-a-grupos.md
tags:
- estadística
- gelman
- regresión
title: Tres de seis consejos para mejorar las regresiones
url: /2017/10/24/tres-de-seis-consejos-para-mejorar-las-regresiones/
---

Por si alguien se lo perdió, están [aquí](http://andrewgelman.com/2015/01/29/six-quick-tips-improve-regression-modeling/). De los seis, mencionaré tres que me están resultando muy útiles en un proyecto actual.

De todos ellos, el que más a rajatabla sigo es el primero: **ajustar muchos modelos**. Pudiera parecer trampa: buscar y rebuscar por si _sale algo_. Sin embargo, es una técnica que plantearse como una manera de familiarizarse y aprender la estructura de los datos. Los modelos (explicativos, como los que justifican esta entrada) no dejan de ser resúmenes de conjuntos de datos y no es sino ajustando diversos modelos que uno aprende si, por ejemplo, un coeficiente varía por año o provincia.

El segundo es un prerrequisito para el anterior: **modelar rápida, eficiente y robustamente**. Es conveniente comenzar con un subconjunto de los datos (p.e., una provincia de cada tipo; unos cuantos años y no todos). Poder correr una serie de modelos en bucle (e, incluso, en paralelo) para extraer rápidamente la información relevante y poder...

... **representarla gráficamente**, que viene a ser el tercer consejo y una condición _sine qua non_ para alcanzar el objetivo final: comprender la estructura de los datos.