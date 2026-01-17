---
author: Carlos J. Gil Bellosta
categories:
- estadística
date: 2024-10-31
lastmod: '2025-04-06T18:44:40.843340'
related:
- 2018-07-16-consecuencias-indeseadas-de-la-falta-de-humildad.md
- 2015-12-07-contaminacion-y-restricciones-de-trafico-en-madrid-por-que-no-se-puede-ni-prevenir-ni-estimar.md
- 2023-03-28-se-iguales.md
- 2022-09-29-ensembles-meteorologicos-probabilisticos-o-no.md
- 2022-06-09-el-modelo-es-y.md
tags:
- predicciones
title: Los estadísticos, hasta cierto momento, no hicieron más que interpretar de
  diversos modos el mundo; luego, cuando quisieron transformarlo, se encontraron con
  una serie de problemas que no anticiparon
url: /2024/10/31/efectividad-alertas/
---

A veces los estadísticos analizan datos. Desde fuera del mundo, dan su visión sobre hechos pasados. Fin de la historia.

Desde cierto tiempo para acá, a los estadísticos (y colegas de profesiones anejas) se les piden no solo interpretaciones sobre el mundo sino, también, predicciones, consejos, ingredientes para la toma de ciertas decisiones, etc. Eso los inserta hasta las zancas en el mundo. Esas predicciones que hacen, operan sobre el mundo del que se extrajeron los datos y, al hacerlo, lo alteran. Como consecuencia, esas predicciones contienen un germen de contradicción; alguien puede querer leer [esto](https://www.lesswrong.com/posts/SwcyMEgLyd4C3Dern/the-parable-of-predict-o-matic) al respecto.

Una de las decisiones probabilísticas que se toman de vez en cuando ---y ahí quería llegar--- son los avisos por mal tiempo, precipitaciones, etc. Tanto si son oportunos y precisos como si no, en tanto que se les preste atención, tendrán un efecto. Dejo al lector como ejercicio trazar una cadena causal por la que incluso las mejores de las alertas acabarán necesariamente teniendo un efecto distinto del pretendido: nótese, en particular, cómo un verdadero positivo frente al que se actúa eficazmente es prácticamente indistinguible de un falso positivo.

Por concretar, hubo un tiempo en el que trabajaba en una institución que generaba "alertas" por determinados fenómenos meteorológicos. El criterio último para esos avisos estaba basado en la probabilidad de que se alcanzase cierta cota de incremento de la tasa de mortalidad. Pero si nuestras alertas hubiesen sido verdaderamente efectivas, las poblaciones afectadas hubiesen tomado las medidas oportunas y, a medio plazo, habría dejado de haber coyunturas en las que se incrementase la tasa de mortalidad. Como consecuencia, ¡dejarían de generarse alertas! Los economistas se preguntarán cuál es la condición de equilibrio en este sistema y todos tendrán que conceder que es necesario aceptar cierto grado de ineficacia de los avisos.