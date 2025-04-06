---
author: Carlos J. Gil Bellosta
categories:
- estadística
date: 2018-01-17 08:13:31+00:00
draft: false
lastmod: '2025-04-06T19:09:30.797801'
related:
- 2022-03-10-diagramas-causales-hipersimples-1-errores.md
- 2014-11-17-los-coeficientes-de-la-regresion-logistica-con-sobremuestreo.md
- 2012-04-19-variables-instrumentales-con-r.md
- 2015-07-06-una-interpretacion-rapida-y-sucia-de-los-coeficientes-de-la-regresion-logistica.md
- 2022-03-18-diagramas-causales-hipersimples-2-control.md
tags:
- coeficientes
- estadística
- regresión
title: ¿Quitar variables no significativas?
url: /2018/01/17/quitar-variables-no-significativas/
---

**Contexto:** modelos de regresión con de varias a muchas variables. Muy particularmente cuando interesa la predicción.

**Pseudoproblema:** ¿quitamos las variables no significativas?

Los manualitos (muy queridos de enseñantes, porque les dan reglas sencillitas; muy queridos también de los aprendientes, por el mismo motivo) rezan que sí. Se quitan y a otra cosa.

La regla adulta es:

* Si el coeficiente es grande y tiene el signo correcto, ¡enhorabuena!
* Si el coeficiente es pequeño, la variable no hace ni bien ni mal. Y [hay más motivos para dejarla que para quitarla](https://stats.stackexchange.com/questions/66448/should-covariates-that-are-not-statistically-significant-be-kept-in-when-creat).
* Pero si el coeficiente es grande y el signo es contrario a lo que cabría esperar (p.e., a más gripe menos fallecidos, a más capacidad económica menos compra media, etc.), ¡ah!, toca volver a replantear el modelo seriamente.

**Nota:** en lo anterior no he usado la palabra _significativo_. Si alguien quiere traducir grande y pequeño en términos de la ocurrencia de hace ochenta años de un inglés que sostenía que el tabaco era sano, allá él.