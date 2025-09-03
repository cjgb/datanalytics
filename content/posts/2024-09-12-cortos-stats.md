---
author: Carlos J. Gil Bellosta
categories:
- cortos
date: 2024-09-12
lastmod: '2025-04-06T18:49:52.038368'
related:
- 2020-04-13-regresion-tradicional-vs-multinivel.md
- 2014-03-07-victoria-o-diferencia-de-puntos-ahora-con-random-forests.md
- 2020-02-06-model4you.md
- 2020-03-16-interacciones-y-seleccion-de-modelos.md
- 2022-03-08-estadistica-ciencias-blandas.md
tags:
- estadística
- variables instrumentales
- estadística bayesiana
title: Comparaciones vs efectos y cuatro asuntos más
url: /2024/09/12/cortos-estadistica/
---

[Aquí](https://statmodeling.stat.columbia.edu/2024/08/06/he-wants-to-compute-the-effect-of-a-predictor-that-is-an-average-predictive-comparison-for-a-hierarchical-mixture-model-you-can-do-it-in-stan/) se lee:

> Preferimos el término “comparaciones” al de "efectos” en tanto que el primero es más general que el segundo. Una comparación es un efecto solo en aquellos casos en los que el modelo tiene una interpretación causal válida.

En [_Intrumental variable regression and machine learning_](https://www.brodrigues.co/blog/2019-11-06-explainability_econometrics/) se discute cómo aplicar la técnica de las variables instrumentales no con regresiones lineales sino con otro tipo de modelos más generales (y se ilustra con _random forests_).

Soy fan de la habitualmente olvidada _heterogeneidad de los efectos_. Así que si tropiezo con algo titulado [_Assessing Heterogeneity of Treatment Effect, Estimating Patient-Specific Efficacy, and Studying Variation in Odds ratios, Risk Ratios, and Risk Differences_](https://www.fharrell.com/post/varyor/), lo leo y lo recomiendo.

Has calculado una posteriori de acuerdo con algún modelo y algunos datos y ahora la quieres usar como priori en otro modelo distinto y otros datos distintos. Pero, ¿cómo? [Aquí](https://statisfaction.wordpress.com/2017/10/01/approximating-the-cut-distribution/) se discute el problema y se proponen tres alternativas con distinto grado de sofisticación.

A veces leo cosas como [_Reliable ABC model choice via random forests_](https://xianblog.wordpress.com/2014/10/29/reliable-abc-model-choice-via-random-forests/) y pienso: ¡las ciencias avanzan una barbaridad! Pero luego se me ocurre pensar: ¿quién y dónde se puede plantear usar ese método para ajustar un modelo? ¿Quién tiene el tiempo, la paciencia y un público que entienda de lo que habla y comparta su entusiasmo metodológico?
