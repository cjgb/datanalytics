---
author: Carlos J. Gil Bellosta
date: 2022-07-19
title: '"Scorings" para evaluar predicciones expresadas en términos de CIs'
description: 'Scorings para evaluar predicciones expresadas en términos de uno o varios CIs'
url: /2022/07/19/evaluacion-predicciones-intervalos-confianza/
categories:
- estadística
tags:
- scorings
- intervalo de confianza
---

Ya he escrito bastante sobre _scorings_ y métodos de evaluación de predicciones, particularmente las expresadas en términos probabilísticos. Los casos más habituales de estas últimas son el binario (en el que la predicción es una probabilidad en $[0,1]$) y el continuo en el que la predicción es una distribución de probabilidad.

Pero sucede en ocasiones que el predictor viene expresado por un intervalo de confianza (o varios, con niveles de significancia distintos).

¿Qué _scoring_ se puede aplicar entonces? Pues, por ejemplo, el que se describe en [_Evaluating epidemic forecasts in an interval format_](https://journals.plos.org/ploscompbiol/article?id=10.1371%2Fjournal.pcbi.1008618)