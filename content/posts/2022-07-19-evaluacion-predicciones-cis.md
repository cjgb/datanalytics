---
author: Carlos J. Gil Bellosta
categories:
- estadística
date: 2022-07-19
description: Scorings para evaluar predicciones expresadas en términos de uno o varios
  CIs
lastmod: '2025-04-06T19:00:50.392419'
related:
- 2022-02-17-examenes-probabilisticos.md
- 2022-05-26-crps.md
- 2019-01-16-una-de-las-mil-maneras-malas-de-elegir-al-mejor-predictor.md
- 2019-01-23-reglas-de-scoring-impropias-un-ejemplo.md
- 2017-11-03-intervalos-de-confianza-creativos-que-excluyen-el-0.md
tags:
- scorings
- intervalos de confianza
title: '"Scorings" para evaluar predicciones expresadas en términos de CIs'
url: /2022/07/19/evaluacion-predicciones-intervalos-confianza/
---

Ya he escrito bastante sobre _scorings_ y métodos de evaluación de predicciones, particularmente las expresadas en términos probabilísticos. Los casos más habituales de estas últimas son:

- el binario, en el que la predicción es una $p \in [0,1]$;
- el continuo, en el que la predicción es una distribución de probabilidad.

Pero sucede en ocasiones que el predictor viene expresado por un intervalo de confianza (o varios, con niveles de significancia distintos).

¿Qué _scoring_ se puede aplicar entonces? Pues, por ejemplo, el que se describe en [_Evaluating epidemic forecasts in an interval format_](https://journals.plos.org/ploscompbiol/article?id=10.1371%2Fjournal.pcbi.1008618).
