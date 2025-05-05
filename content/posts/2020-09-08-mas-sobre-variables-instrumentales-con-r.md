---
author: Carlos J. Gil Bellosta
categories:
- r
date: 2020-09-08 09:13:00+00:00
draft: false
lastmod: '2025-04-06T19:05:52.298187'
related:
- 2012-04-19-variables-instrumentales-con-r.md
- 2018-11-16-colinealidad-y-posterioris.md
- 2022-03-03-error-sesgo-modelos-lineales.md
- 2015-01-26-cuando-dicen-que-la-variable-x-es-exogena-quieren-decir.md
- 2017-11-07-intervalos-de-confianza-con-forma-de-rosquilla.md
tags:
- econometría
- r
- stan
- variables instrumentales
title: Más sobre variables instrumentales con R
url: /2020/09/08/mas-sobre-variables-instrumentales-con-r/
---

_[El título de esta entrada tiene un + delante porque ya escribí sobre el asunto[ tiempo atrás](https://datanalytics.com/2012/04/19/variables-instrumentales-con-r/).]_

Con la excusa de la reciente publicación del paquete [`ivreg`](https://CRAN.R-project.org/package=ivreg) (para el ajuste de modelos con variables instrumentales, por si el contexto no lo hace evidente),  he mirado a ver quién estaba construyendo y ajustando modelos generativos menos triviales que los míos (véase el enlace anterior) para que quede más claro de qué va la cosa. Porque la explicación típica, que adopta formas no muy distintas de

![](/wp-uploads/2020/09/iv_j_fox.png#center)

no nos dicen mucho a casi nadie.

Buscando, he encontrado [esto](https://modernstatisticalworkflow.blogspot.com/2017/11/bayesian-instrumental-variables-with.html) donde se explicita el código de Stan para dos casos concretos y en particular, _[A brief introduction to econometrics in Stan](https://khakieconomics.github.io/stanecon_short_course/Shortcourse.pdf)_ del mismo autor donde explica por qué se parametrizan las cosas de una manera y no de otra.

En resumen:

* Las dos ecuaciones (o conjuntos de ecuaciones) se ajustan simultáneamente extendiendo (apilando) las variables objetivo de ambas ecuaciones y creando la matriz de diseño correspondiente. Es precisamente en la construcción de la matriz de diseño que hay que proceder en dos pasos: primero se generan estimaciones de las varaiables endógenas y luego estas se usan para crear las estimaciones de las objetivo.
* La covarianza entre los términos de error se modela explícitamente. El autor de los dos documentos anteriores usa una parametrización de la matriz de covarianzas en términos de escala y correlación.