---
author: Carlos J. Gil Bellosta
categories:
- cortos
date: 2024-10-22
lastmod: '2025-04-06T19:08:44.912439'
related:
- 2024-03-05-sobreajuste-modelos-bayesianos.md
- 2024-02-01-optimizacion-generalizacion.md
- 2024-10-17-interpretacion-modelos.md
- 2012-01-12-localidad-globalidad-y-maldicion-de-la-dimensionalidad.md
- 2023-09-07-problema-modelos-bayesianos-identicabilidad.md
tags:
- modelos
- suavizado exponencial
- mmd
- heterogeneidad
- tests ab
- superviviencia
title: Cinco asuntos breves sobre modelización estadística
url: /2024/10/22/cortos-estadística
---

Hoy, cinco breves comentarios sobre dos temas distintos relacionados con la modelización estadística. Sobre el primero, técnicas _alternativas_ de modelización, tres enlaces:

1. [_What is elastic weight consolidation?_](https://statisticaloddsandends.wordpress.com/2024/06/26/what-is-elastic-weight-consolidation/), una técnica para afinar el entrenamiento de _modelos profundos_. Imagínese que a un LLM ya existente le queremos enseñar, por ejemplo, legislación penal española. En tanto que lo reentrenamos con el código penal, no queremos que olvide todo lo demás que aprendió penosamente. Una ténica que se emplea es la llamada _elastic weight consolidation_, donde, como en _elastic-net_, se penaliza el que los pesos se desvíen de un valor de referencia. En _elastic-net_, ese valor de referencia es el cero. En _elastic weight consolidation_, son los pesos del modelo inicial. Porque queremos pesos, obviamente, distintos de los iniciales pero no demasiado lejos de ellos. (Queda como eljercicio para el lector la reinterpretación bayesiana del párrafo precedente).
2. [_Universal estimation with Maximum Mean Discrepancy (MMD)_](https://youngstats.github.io/post/2022/01/13/universal-estimation-with-maximum-mean-discrepancy-mmd/) habla de cómo se puede usar _MMD_ como función de pérdida al ajustar modelos. El MMD es el método de los momentos de toda la vida, pero _a lo bestia_, es decir, aproximándolos todos ellos a la vez. Se puede ver una aplicación ---ya obsoleta por las nuevas IA generadoras de imágenes---  [aquí](https://github.com/cjgb/style-transfer-beyond-gram).
3. No tengo ninguna opinión particular sobre el uso de números complejos en el [suavizado exponencial](https://openforecast.org/2022/08/02/complex-exponential-smoothing/). No tengo claro qué se gana (¿algún grado de libertad?), pero dejo constancia de que alguien, en algún lugar, parece estar usándolo.

El segundo, sobre dos aspectos importantes de la modelización estadística:

1. El primero, [este](https://www.fharrell.com/post/varyor/), en el que Frank Harrell abunda sobre uno de esos temas que suelen olvidarse tan frecuentemente: que los efectos suelen ser ---desafortunadamente para quienes buscan respuestas sencillas--- heterogéneos.
2. El segundo, sobre cómo las pruebas más simples, como las pruebas A/B, pueden entenderse como aproximaciones demasiado simples a modelos más ricos y de los que se puede extraer más información. Lo habitual es tratarlos como versiones simplificadas de modelos lineales, pero [aquí](https://iyarlin.github.io/2024/07/10/better_ab_testing_with_survival/) se explora un caso en el que el modelo amplio es un modelo de supervivencia.