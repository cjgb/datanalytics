---
author: Carlos J. Gil Bellosta
categories:
- estadística
date: 2018-05-24 08:13:36+00:00
draft: false
lastmod: '2025-04-06T19:09:50.208069'
related:
- 2023-09-07-problema-modelos-bayesianos-identicabilidad.md
- 2012-07-27-a-los-datos-mismos.md
- 2015-09-07-prioris-subjetivas.md
- 2016-01-11-prioris-muy-informativas-y-vagamente-informativas-un-ejemplo.md
- 2017-11-03-intervalos-de-confianza-creativos-que-excluyen-el-0.md
tags:
- estadística
- estadística bayesiana
- modelos longitudinales
- modelos mixtos
- priori
title: 'Prioris informativas: un ejemplo'
url: /2018/05/24/prioris-informativas-un-ejemplo/
---

Imagina que tienes que generar (reitero: generar) datos compatibles con el siguiente modelo:

* Tienes n sujetos a los que se proporciona un remedio para dormir en distintas dosis (conocidas) en distintos días.
* El número adicional de horas que duerme cada sujeto es lineal con una pendiente que depende de la dosis (una serie de dosis fijas).
* Esa recta tiene un término independiente (el número de horas que duerme el sujeto con una dosis igual a cero del remedio).

Argumento que para generar los términos independientes usarías algo así como una normal de media igual a 8 horas. Seguro que usarías alguna otra distribución razonable para las pendientes (p.e., que prohibiese que con dosis pequeñas se durmiese, p.e., 80 horas).

¿Y si ahora no queremos generar datos sino ajustar un modelo (longitudinal, en este caso)? ¿No tendría sentido proponer esas distribuciones razonables que hemos utilizado en nuestro pequeño experimento mental anterior como _prioris_ a la hora de ajustar el modelo? ¿Por qué no usarlas? ¿Porque son... _subjetivas_?