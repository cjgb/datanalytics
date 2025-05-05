---
author: Carlos J. Gil Bellosta
categories:
- artículos
- estadística
date: 2020-03-11 09:13:00+00:00
draft: false
lastmod: '2025-04-06T18:55:16.984918'
related:
- 2016-11-28-analisis-de-la-supervivencia-cuando-ningun-sujeto-ha-muerto.md
- 2020-12-02-analisis-de-eventos-recurrentes.md
- 2015-02-12-parametrizacion-de-modelos-de-supervivencia-parametricos.md
- 2019-07-03-modelizacion-de-retrasos-una-aplicacion-del-analisis-de-supervivencia.md
- 2017-10-20-he-tratado-de-contrastar-una-hipotesis-sin-exito-asi-que-solo-publico-el-subproducto.md
tags:
- artículos
- supervivencia
title: Análisis de la supervivencia cuando todas las observaciones están censuradas
url: /2020/03/11/analisis-de-la-supervivencia-cuando-todas-las-observaciones-estan-censuradas/
---

_[Retomando un [tema que dejé inconcluso](https://datanalytics.com/2016/11/28/analisis-de-la-supervivencia-cuando-ningun-sujeto-ha-muerto/) y que tampoco remataré hoy aquí.]_

Imagina que quieres saber cuánto le dura a la gente el portátil. Para eso preguntas por ahí cuándo se compraron el último.

Lo que obtienes es un conjunto de datos donde todas las observaciones están censuradas. Y no, el análisis de la supervivencia clásico no funciona.

Buscando en la literatura he encontrado, sin embargo, _[Survival Analysis of Backward Recurrence Times](https://www.researchgate.net/publication/254285502_Survival_Analysis_of_Backward_Recurrence_Times)_, donde se discute el problema y al que, bueno, otro día con menos penas volveré.