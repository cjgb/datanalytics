---
author: Carlos J. Gil Bellosta
categories:
- estadística
date: 2019-01-15 08:13:22+00:00
draft: false
lastmod: '2025-04-06T18:48:17.055582'
related:
- 2019-01-16-una-de-las-mil-maneras-malas-de-elegir-al-mejor-predictor.md
- 2019-01-17-mejores-predictores-un-ejemplo-el-de-brier.md
- 2023-09-05-superforecasting.md
- 2018-10-10-un-resultado-probabilistico-contraintuitivo-parte-i.md
- 2024-12-19-promediar-predicciones.md
tags:
- predicción
- scorings
title: ¿Quién será el mejor predictor? ¿Cómo se podrá medir?
url: /2019/01/15/quien-sera-el-mejor-predictor-como-se-podra-medir/
---

He tropezado con un problema nuevo y sobre el que escribiré más estos días. Hoy y aquí solo lo formulo.

Existe una serie de eventos dicotómicos $X_i$ que pueden ocurrir o no ocurrir, cada uno de ellos con su probabilidad real (pero desconocida) de ocurrencia $q_i$. Antes de que ocurran o no, a dos expertos se les preguntan las probabilidades de ocurrencia de dichos eventos y producen predicciones $p_{1i}$ y $p_{2i}$.

Y las preguntas interesantes son: ¿Quién es el mejor predictor? ¿Qué criterio puede usarse para compararlos? En definitiva, ¿qué ciencia existe detrás de este problema?