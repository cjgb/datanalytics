---
author: Carlos J. Gil Bellosta
categories:
- ciencia de datos
- estadística
date: 2017-10-17 08:13:05+00:00
draft: false
lastmod: '2025-04-06T19:09:24.040884'
related:
- 2016-10-11-el-rmse-es-dios-y-xgboost-su-profeta.md
- 2014-02-06-experimentos-con-el-paquete-gbm.md
- 2024-10-17-interpretacion-modelos.md
- 2024-02-01-optimizacion-generalizacion.md
- 2019-07-16-abundando-en-la-discusion-sobre-matematicas-y-o-informatica.md
tags:
- ciencia de datos
- estadística
- xgboost
title: Para esto que me da de comer no vale XGBoost
url: /2017/10/17/para-esto-que-me-da-de-comer-no-vale-xgboost/
---

Los físicos crean modelos teóricos. Los economistas crean modelos teóricos. Los sicólogos crean modelos teóricos. Todo el mundo crea modelos teóricos: epidemiólogos, sismólogos, etc.

Estos modelos teóricos se reducen, una vez limpios de la literatura que los envuelve, a ecuaciones que admiten parámetros (sí, esas letras griegas). Frecuentemente, esos parámetros tienen un significado concreto: son parámetros físicos (con sus unidades, etc.), son interpretables como el grado de influencia de factores sobre los fenómenos de interés, etc. Frecuentemente, casi toda la ciencia de la cosa reside en ellos.

Pero esos coeficientes y parámetros raramente se deducen en las ciencias experimentales. No son como $latex \pi$ o $latex e$. Al contrario, se miden al enfrentar los modelos con datos (experimentales en el mejor de los casos, observacionales si no queda otro remedio).

(De hecho, tal es el origen de las _-metrías_: _econo-_, _sico-_, etc.)

Algunos nos ganamos el pan últimamente (no, no teorizo; no, no soy un filósofo; me limito a extender lo que indico en la descripción de mis facturas) en calcular esos parámetros y hacer inferencia sobre los mismos: nos dan ecuaciones, nos dan datos y nos preguntan sobre, p.e., $latex \gamma$ y su distribución.

Pero no sé para qué demonios me sirve el dichoso XGBoost para eso. No sé en qué página de esos libros famosos de _ciencia de datos_ hay referencia alguna a ese problema. Aún no he visto la primera competición de Kaggle que trate el asunto.