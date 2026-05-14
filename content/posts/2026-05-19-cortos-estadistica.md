---
author: Carlos J. Gil Bellosta
categories:
- cortos
date: 2026-05-19
description: 'Un recorrido por las últimas tendencias en estadística: desde la credibilidad
  de los datos en India hasta modelos bayesianos en R y el debate sobre métricas de
  ajuste.'
lastmod: '2026-05-14T16:15:53.901121'
related:
- 2026-04-07-cortos.md
- 2025-11-20-estadistica.md
- 2025-04-22-cortos-stats.md
- 2026-02-23-cortos.md
- 2024-12-26-cortos-stats.md
tags:
- estadística
- estadística oficial
- predicción
- supervivencia
- crps
- validación cruzada
- r cuadrado
- r
- modelización
title: 'Notas (21): Predicciones, métricas y el rigor de los datos: un recorrido por
  la actualidad estadística'
url: /2026/05/19/cortos-estadistica/
---

A veces hay en el mundo una variable aleatoria $X$ que distintos agentes tratan de predecir. Pero en otras ocasiones hay una variable aleatoria $X$, ciertos agentes crean predicciones $Y$ de $X$ y otros están interesados en la predicción de $Y$, tal como describe Matt Levine en [_Weather Prediction Prediction_](https://www.bloomberg.com/opinion/newsletters/2026-03-26/weather-prediction-prediction).

[_The Economist_](https://www.economist.com/asia/2026/04/26/making-indias-numbers-count-again) describe los esfuerzos de la India por recuperar la credibilidad de sus estadísticas nacionales tras años de interferencia política.

Asterisk trae un artículo sobre la [historia de la aplicación de la teoría de la supervivencia a la ingeniería industrial](https://asteriskmag.substack.com/p/forecasting-the-death-of-machines).

[Andrew Gelman sobre «Lotto Champ»](https://statmodeling.stat.columbia.edu/2026/04/01/this-evil-lottery-scam-appears-to-be-aided-and-abetted-by-google-apple-yahoo-morningstar-msn-etc-etc/), una herramienta de IA para «ayudar» a los jugadores de la lotería a «jugar más informadamente».

[«Una encuesta de YouGov que mostraba un aumento significativo en la asistencia a la iglesia en partes del Reino Unido ha sido retirada tras descubrirse que algunos de los encuestados eran fraudulentos.»](https://www.theguardian.com/world/2026/mar/26/yougov-withdraws-survey-church-attendance-christianity-young-people-england-wales)

[¿Qué se puede aprender en un estudio con $N = 12$ que no se puede aprender en un estudio con $N = 1$ o $2$?](https://statmodeling.stat.columbia.edu/2026/04/14/how-to-report-a-n12-study/)

[Cremieux abunda sobre los problemas de la hiperconfianza en los controles estadísticos](https://www.cremieux.xyz/p/think-about-control-variables) (es decir, la confianza ciega en que las variables de control efectivamente controlan la variabilidad).

Acerca de la bondad de ajuste de modelos, varios enlaces:

- El muy ecléctico William M. Briggs insiste en que la medida más importante de la calidad de un modelo es la [utilidad específica para el usuario](https://wmbriggs.substack.com/p/most-important-measure-of-model-goodness) y el concepto de [«habilidad»](https://wmbriggs.substack.com/p/the-most-neglected-concept-in-modeling) para resolver sus problemas concretos.
- Juan Camilo Orduz escribe sobre el [CRPS](https://juanitorduz.github.io/crps/), una métrica poco usada (entre otras cosas, porque exige predicciones probabilísticas, algo no particularmente frecuente).

Data Colada escribe en pro del uso de los [errores estándar robustos](https://datacolada.org/133). También escribe sobre unos rarísimos [$R^2$ negativos](https://datacolada.org/134) que aparecen en determinadas aplicaciones poco cuidadosas de la validación cruzada (¿el modelo lo hace peor que la media? ¿en serio?).

Siempre se aprende mucho del semianónimo autor de [FreeRangeStats](https://freerangestats.info/). En particular, de su [predicción del desempleo](https://freerangestats.info/blog/2019/07/28/unemployment-forecasts) en Australia (que concluye que los modelos univariantes simples pueden superar a los que incorporan variables externas (cuando estas tienen pinta de ser consecuencia y no causa del fenómeno en cuestión)).

En cuanto a novedades en R:

- [`bdlnm`](https://r-posts.com/new-r-package-bdlnm-released-on-cran-bayesian-distributed-lag-non-linear-models-in-r-via-inla/) para la estimación de modelos bayesianos con «rezagos», es decir, variables que impactan en la variable objetivo a lo largo del tiempo. Me habría sido muy útil en mi época de estimación del impacto de las olas de calor en la mortalidad.
- [`TabPFN`](https://blog.ephorie.de/the-magic-of-in-context-learning-icl-when-your-model-already-knows-your-data), que es una de esas novedades que lo dejan a uno patidifuso. Pero que parte del principio de que «esa tabla concreta que tienes entre manos» es simplemente un caso particular de un universo (una subvariedad, probablemente) de posibles configuraciones de datos que una IA ya se sabe de memoria.