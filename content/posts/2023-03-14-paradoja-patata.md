---
author: Carlos J. Gil Bellosta
categories:
- números
date: 2023-03-14
lastmod: '2025-04-06T19:10:23.384556'
related:
- 2023-06-22-paradoja-lord.md
- 2015-01-14-rarezas-estadistica-algebraica.md
- 2014-10-13-los-tests-de-hipotesis-son-los-macarrones-con-cosas-de-la-nevera.md
- 2024-10-17-interpretacion-modelos.md
- 2015-07-06-una-interpretacion-rapida-y-sucia-de-los-coeficientes-de-la-regresion-logistica.md
tags:
- estadística
- sofística
- funciones no lineales
title: De la paradoja de la patata a los neo-Protágoras de la estadística
url: /2023/03/14/paradoja-patata/
---

## I

X tiene un 100 kilos de patatas. Las patatas tienen un 99% de agua y las deja orear hasta que tengan solo un 98% de agua. Cuando eso suceda, ¿cuánto pesarán las patatas?

Piénsalo...

Sigue...

¿Seguro?

Hummmm...

Te te lo voy a contar enseguida, pero merece la pena que trates de calcularlo por ti mismo.

Venga...

Vale, te lo digo.

## II

Son 50 kilos. Efectivamente,

$$\frac{1}{100 - x} = .02 = \frac{2}{100} = \frac{1}{50}$$

exige que $x = 50$.

## III

Este resultado es tan antiintuitivo que se lo conoce, se ve, como la paradoja de las patatas. Pero, ¿qué le confiere esa propiedad?

Habría que preguntar a algún sicólogo, pero tengo la sensación de que tiene que ver con la no linealidad de la función

$$f(x) = \frac{1}{100 - x}.$$

La gente, más o menos, sabe operar con relaciones lineales. No hay paradojas relacionadas con la regla de tres. Pero con relaciones no lineales, de manera pretenda o fortuita, surgen casos de apariencia paradójica. La gente ---en sentido amplio--- tiene problemas para procesar no-linealidades; logaritmos, _odds ratios_, tipos del IRPF ---no lineales por mandato constitucional---,
[tolerancias del ICP](/2023/03/07/consumo-electrico-tiempo-real/),
etc., se procesan habitualmente recurriendo a heurísticas grotescas y desencaminadas.

## IV

Tengo que pensar más en esos asuntos y ver si hay literatura al respecto para ver cómo estos sesgos pueden servir a un sofista de la estadística para convencer a su audiencia de lo que más le interesa. A él, claro (y menos, a ella, a la audiencia).