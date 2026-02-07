---
author: Carlos J. Gil Bellosta
categories:
- estadística
date: 2014-12-31 07:13:02+00:00
draft: false
lastmod: '2025-04-06T18:46:06.706670'
related:
- 2017-10-16-modelos-no-lineales-directos-e-inversos.md
- 2022-03-03-error-sesgo-modelos-lineales.md
- 2017-10-23-modelos-directos-inversos-y-en-los-que-tanto-da.md
- 2015-07-08-un-problema-inverso-de-regresion.md
- 2017-11-07-intervalos-de-confianza-con-forma-de-rosquilla.md
tags:
- estadística
- regresión
title: El problema de la estimación inversa
url: /2014/12/31/el-problema-de-la-estimacion-inversa/
---

Supongamos que tenemos unos niños de los que sabemos las edades $x_i$ y las alturas $y_i$. Supongamos además que podemos estimar las segundas en función de las primeras con un modelo lineal clásico

$$ y_i \sim N(a_0 + a_1 x_1, \sigma).$$

Este modelo nos permite, dada una edad, estimar la altura y los correspondientes intervalos de confianza. Pero, dada una altura, ¿qué nos dice de la edad? Este es el problema conocido como de la _estimación inversa_.

En este caso concreto es relativamente sencillo. Pero, ¿qué si $y_i$ depende de más de una variable predictora? ¿O si la regresión no es lineal? ¿O si...?

Estos problemas y algunas maneras de afrontarlos se discuten en [_investr: An R Package for Inverse Estimation_](http://journal.r-project.org/archive/2014-1/greenwell-kabban.pdf). Artículo que, cuyo nombre bien indica, viene acompañado de un paquete de R, [`investr`](http://cran.rstudio.com/web/packages/investr/). Que me hubiese resultado muy útil en más de una ocasión.

**Nota:** Desde hace unas semanas vengo prefiriendo representar el modelo lineal como arriba en lugar de la manera más tradicional, $y_i = a_0 + a_1 x_1 + \epsilon_i$. Cuando tenga más claro el motivo, os lo cuento.
