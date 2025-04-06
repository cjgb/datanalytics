---
author: Carlos J. Gil Bellosta
categories:
- estadística
- números
date: 2015-04-24 08:13:42+00:00
draft: false
lastmod: '2025-04-06T19:06:57.468222'
related:
- 2012-11-28-coma-cero-dos-por-ciento-anda-ya.md
- 2014-12-09-ruido-en-las-estadisticas-oficiales.md
- 2018-03-22-poblacion-el-padron-y-la-otra-cosa.md
- 2013-05-16-el-error-en-las-encuestas-cuentas-en-una-servilleta.md
- 2015-05-14-cualquier-parecido-con-la-realidad-es-pura-coincidencia.md
tags:
- encuestas
- epa
- ine
- varianza
title: ¿13.100 más/menos cuántos parados menos?
url: /2015/04/24/el-sujeto-numero-82694/
---

¿Cuál es la cifra de variación del número de parados de la que hablan la última EPA y los medios? [13100](http://economia.elpais.com/economia/2015/04/23/empleo/1429775090_629440.html).

¿Más menos cuánto? Según el INE, el _error de muestreo relativo_, $latex \sqrt{V(\hat{\sigma}}$ a nivel nacional en términos porcentuales es

[![error_relativo](/wp-uploads/2015/04/error_relativo.png#center)
](/wp-uploads/2015/04/error_relativo.png#center)

Es decir, el intervalo de confianza para la cifra de parados tendría una anchura como de 100k sujetos. Obviamente, eso impide calcular variaciones de un orden de magnitud menor.

Así que casi todo lo que hemos leído sobre la EPA en los medios es, como de costumbre, ruido.

**Nota:** Hace un tiempo calculé muy simplicísimamente una [estimación del error de la tasa de paro de la EPA](http://www.datanalytics.com/2012/11/28/coma-cero-dos-por-ciento-anda-ya/). Venía a dar intervalos de confianza de dos décimas, perfectamente compatibles con las que publica el INE.

**Otra nota:** La variación en el número de parados es la diferencia de dos estimadores puntuales, los de los dos últimos trimestres, cada uno de los cuales está sujeto a un error similar. Eso sí, las estimaciones no son independientes: muchos sujetos repiten en ambas encuestas. ¿Alguien tiene una idea de cómo estimar el error de la diferencia?