---
author: Carlos J. Gil Bellosta
categories:
- cortos
date: 2025-04-22
description: Una serie de apuntes sobre modelos estadísticos AUC, calibración, variables
  binarias, series temporales, XGBoost,...
lastmod: '2025-06-02T11:23:39.413444'
related:
- 2012-01-12-localidad-globalidad-y-maldicion-de-la-dimensionalidad.md
- 2024-02-01-optimizacion-generalizacion.md
- 2024-03-05-sobreajuste-modelos-bayesianos.md
- 2023-09-07-problema-modelos-bayesianos-identicabilidad.md
- 2023-07-25-tutorial-numpyro-1-modelos-probabilisticos.md
tags:
- término independiente
- incertidumbre
- teoría de la decisión
- variables binarias
- auc
- calibración
- series temporales
- dlm
title: Una serie de apuntes sobre modelos estadísticos
url: /2025/04/22/cortos-modelizacion/
---

Andrew Gelman se pregunta periódicamente por la obsesión generalizada en [involucrar a Jesucristo con los modelos lineales](https://statmodeling.stat.columbia.edu/2025/03/11/what-does-jesus-have-to-do-with-linear-regression/). Versión corta: si el año se modela _tal cual_ (p.e., 2025), el término independiente nos aporta información sobre el hipotético estado de las cosas en el año en el que nació. En general, es conveniente parametrizar las variables de manera que el término independiente de un GLM tenga un mínimo contenido informativo.

Un [artículo muy raro de Manuel Hidalgo](https://nadaesgratis.es/manu-hidalgo/el-desorden-en-la-economia-medir-y-actuar-en-un-contexto-de-incertidumbre) en NadaEsGratis que incluye todas las palabras que hacen que dejes de leer algo: _cuántico_, _entropía_, _desorden_ (como sinónimo de incertidumbre), etc. Lo relevante de la cosa no parece ser tanto lo que cuenta (ya sabemos que hay incertidumbre en el mundo, ya sabemos que nuestra visión del mundo está marcada por la incertidumbre, etc.) sino poder constatar que a ciertos segmentos de la población hay que recordarles estas cuestiones y que puede que incluso se sorprendan cuando se las cuentan.

En [¿Qué significa que la inteligencia es heredable en un 50 %?](https://derechomercantilespana.blogspot.com/2025/01/que-significa-que-la-inteligencia-es.html) hay una discusión _para legos_ sobre el concepto de la _varianza explicada_ y de las maneras y dificultades que tenemos los unos para explicarnos y los otros para entendernos. Aunque, como es bien sabido, el concepto de _varianza explicada_ tiene el recorrido que tiene y no más.

La entrada [_Adjudication and Statistical Efficiency_](https://www.fharrell.com/post/pdx/) de Frank Harrell tiene que ver con el proceso de asignar (adjudicar) casos a variables más o menos binarias, particularmente cuando dicha asignación no está del todo clara. Sugiere utilizar los _grises_ de distintas maneras: aleatorizar los casos dudosos, utilizar escalas, etc. evitando en la medida de lo posible _categorizaciones categóricas_ y problemáticas.

Creo que voy a invertir un tiempo en el material del curso [_Prediction for (Individualized) Decision-making_](https://archive.is/gXf9X). Creo que aún no sé lo suficiente de lo que media entre lo que los modelos nos cuentan y las decisiones que podemos tomar en función de ellos.

Acerca de la toma de decisiones, de vez en cuando, merece la pena recordar que [el AUC es una métrica muy deficiente](https://www.elderresearch.com/blog/auc-a-fatally-flawed-model-metric/). En el enlace anterior se discute el asunto y se enlaza (¡cómo no!) con la asimetría de costes a la hora de tomar decisiones. Que los modelos estén (o parezcan) bien calibrados puede todavía encerrar diversos problemas, como los que se discuten
[aquí](https://statmodeling.stat.columbia.edu/2024/11/01/calibration-is-sometimes-sufficient-for-trusting-predictions-what-does-this-tell-us-when-human-experts-use-model-predictions/) o
[aquí](https://statmodeling.stat.columbia.edu/2024/08/14/when-is-calibration-enough/).

En [este artículo](https://rworks.dev/posts/arima-note/), el autor tropieza con una aparente paradoja al tratar de ajustar modelos con `auto.arima y similares: obtiene distintos modelos con distintas interpretaciones que ajustan los datos de manera parecida. Que es algo de lo que ya hablé [aquí](/2025/04/10/diversidad-explicaciones/).

Finalmente, dos sobre métodos de esos que pueden ser útiles a veces:
1. Uno sobre [cómo ajustar modelos de supervivencia bayesianos usando _splines_ penalizados](https://www.rdatagen.net/post/2025-03-04-a-bayesian-proportional-hazards-model-with-splines/).
1. Otro sobre los [DLM](https://medium.com/@kylejones_47003/distributed-lag-models-in-dynamic-model-time-series-ba66e3d1432a) (_Distributed Lag Models_), sobre los que tantas vueltas di en la época en que me dediqué a la epidemiología. Tratan sobre cómo modelizar _retrasos_ en el impacto de una causa sobre un efecto.