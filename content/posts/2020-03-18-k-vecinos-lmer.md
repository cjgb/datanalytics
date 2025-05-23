---
author: Carlos J. Gil Bellosta
categories:
- estadística
- r
date: 2020-03-18 22:11:00+00:00
draft: false
lastmod: '2025-04-06T18:59:16.060649'
related:
- 2020-03-16-interacciones-y-seleccion-de-modelos.md
- 2012-01-12-localidad-globalidad-y-maldicion-de-la-dimensionalidad.md
- 2019-09-16-un-modelo-que-alimenta-una-simulacion.md
- 2020-03-18-lme4-simulate.md
- 2024-11-12-cortos-stats.md
tags:
- interacciones
- k-vecinos
- lme4
- predicción
title: k-vecinos + lmer
url: /2020/03/19/k-vecinos-lmer/
---

El de los k-vecinos es uno de mis métodos favoritos de modelización. Al menos, teóricamente: luego, en la práctica, es complicado construir una función de distancias decente. Pero tiene la ventaja indiscutible de ser tremendamente local: las predicciones para una observación concreta dependen únicamente de su entorno.

[`lme4::lmer`](https://CRAN.R-project.org/package=lme4) (y sus derivados) es ya casi la lente a través de la que imagino cómo operan las variables dentro de un modelo. Desafortunadamente, es un modelo global y  no gestiona particularmente bien las interacciones, cuando son muchas y complejas.

Un modelo que estoy desarrollando aúna ambos mundos:

* k-vecinos, con un k generoso, para crear un subconjunto local de datos.
* `lmer` para construir un modelo sobre dichos datos únicamente.

Hay muchas variables y condicionantes que sopesar en el enfoque, pero tiene buena pinta y me está dando buenos resultados.

La gente usa `lmer` entre otras cosas para describir globalmente los datos. A mí no me interesa el análisis global, aunque sí el del entorno del dato que quiero predecir. Sí, es un proyecto en el que no se predice con churrera, sino con mimo, caso a caso, y con lupa: hay mucha pasta en juego en cada decisión basada ya no en la predicción en sí misma, sino en la distribución de esperada de las respuestas... y hasta ahí puedo escribir.