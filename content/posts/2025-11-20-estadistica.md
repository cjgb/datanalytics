---
author: Carlos J. Gil Bellosta
categories:
- cortos
date: 2025-11-20
description: 'Resumen de lecturas sobre ML y estadística: intervalos conformes, tamaños
  muestrales, modelos de Markov, robustez, visualización y sesgos en datos.'
lastmod: '2025-11-16T23:32:11.441896'
related:
- 2025-04-22-cortos-stats.md
- 2025-10-16-estadistica.md
- 2012-01-12-localidad-globalidad-y-maldicion-de-la-dimensionalidad.md
- 2016-02-04-y-termino-con-lo-de-los-intervalos.md
- 2024-12-03-cortos-stats.md
tags:
- estadística
- intervalos de confianza
- medidas de centralidad
- seudomediana
- encuestas
- mapas
- r
- datos espaciales
- ia
- teoría de la decisión
title: Unas cuantas notas sobre estadística, teoría y de la decisión y otras cuestiones
url: /2025/11/20/cortos-estadistica/
---

Un artículo sobre [cómo crear intervalos de predicción _conformes_ en modelos de ML](https://datageeek.com/2025/08/09/conformal-prediction-intervals-of-xgboost-model-bitcoin-peaks-amid-coinbases-earnings-struggle/), en particular con modelos basados en XGBoost. Y otro, [este](https://www.johndcook.com/blog/2025/09/08/inferring-sampling-size/), sobre cómo inferir el tamaño muestral a partir de su anchura.

También de John D. Cook, [_ODE to Fisher’s transform_](https://www.johndcook.com/blog/2025/10/18/fishers-transform/). Aparentemente, para _normalizar_ el coeficiente de correlación se puede aplicar una transformación en la que interviene `atanh` y cuya derivación exige resolver una ecuación diferencial ordinaria. Por su parte, la ecuación diferencial surge de igualar el desarrollo de la curtosis a cero.

[_Be Mindful of the Time_](https://rworks.dev/posts/5-state-ctmc-model/) construye modelos que voy a intentar aplicar en proyectos que tengo entre manos cuando encuentre la ocasión. Brevemente, se trata de unos modelos de Markov con transiciones entre varios estados a lo largo del tiempo. Que viene a ser casi cualquier cosa que merezca la pena analizarse.

En [_Measures of Central Tendency for an Asymmetric Distribution, and Confidence Intervals_](https://www.fharrell.com/post/aci/), Frank Harrell compara medidas de centralidad robustas (como la media) para distribuciones asimétricas y concluye que la seudomediana (o [estimador de _Hodges–Lehmann_](https://en.wikipedia.org/wiki/Hodges%E2%80%93Lehmann_estimator)) es la ganadora. Leyendo lo anterior descubrí, además, el artículo [_New distribution-free quantile estimator_](https://academic.oup.com/biomet/article-abstract/69/3/635/221346?), que me habría venido bastante bien cuando trabajaba con menos datos que ahora.

Estoy investigando qué puedo rascar de [_Minimal-Assumption Estimation of Survival Probability vs. a Continuous Variable_](https://www.fharrell.com/post/kmove/) para resolver un problema que tengo encima de la mesa: la calibración de modelos a partir de una única variable continua. Creo que Harrell --aunque su problema es más ambicioso--- y yo transitamos las mismas ideas (aunque, ¿hay más?)

[_Question 1: why are questionnaires in trouble?_](https://www.economist.com/britain/2025/10/19/question-1-why-are-questionnaires-in-trouble) discute la creciente ineficacia de los cuestionarios. Aunque envuelto en referencias eruditas, el núcleo de la discusión es que la gente está dejando de responderlos. Relacionado con lo anterior: en [_The war on data, 2025 edition:_](https://statmodeling.stat.columbia.edu/2025/10/18/the-war-on-data-2025-edition-2/), Andrew Gelman actualiza un artículo que escribió tiempo atrás sobre el mismo tema y en el que hace un repaso sobre el estado de la cosa en 2025. No es optimista al respecto.

Hay un [nuevo libro sobre visualización de datos espaciales en R](https://geocompx.org/post/2025/tmap-bp1/) usando el paquete `tmap`.

Jessica Hullman anuncia y describe el contenido detallado de un nuevo curso sobre teoría de la decisión (en el que se menciona la _inteligencia artificial_ varias veces)
[aquí](https://statmodeling.stat.columbia.edu/2024/12/06/new-course-prediction-for-individualized-decision-making/).

El _sesgo húmedo_ (o [_wet bias_](https://en.wikipedia.org/wiki/Wet_bias)) consiste en la sobrestimación de la probabilidad de lluvia en las predicciones meteorológicas. Parece intencionado y tiene el objetivo de hacer las predicciones más _conservadoras_ y _útiles_.