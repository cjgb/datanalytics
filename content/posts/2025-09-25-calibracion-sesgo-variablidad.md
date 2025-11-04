---
author: Carlos J. Gil Bellosta
categories:
- estadística
date: 2025-09-25
description: Un modelo puede estar bien calibrado y aun así tener sesgo. Ejemplo simple
  con monedas para entender calibración, sesgo y variabilidad en predicciones.
lastmod: '2025-10-06T17:52:18.773436'
related:
- 2022-02-17-examenes-probabilisticos.md
- 2012-01-12-localidad-globalidad-y-maldicion-de-la-dimensionalidad.md
- 2020-02-26-algoritmos-y-acatarrantes-definiciones-de-justicia.md
- 2024-03-05-sobreajuste-modelos-bayesianos.md
- 2025-04-17-auc-vs-dispersion-p.md
-tags:
- sesgo
- calibración
title: Sesgo, calibración y variabilidad
url: /2025/09/25/sesgo-calibracion-variabilidad/
---

Tenemos una población con dos grupos, 50% de cada. Por simplificar, nuestra población son monedas que son de dos tipos:
- A, con probabilidad de cara del 25%.
- B, con probabilidad de cara del 75%.

Construimos un modelo que predice siempre 50%. Entonces:

1. El modelo está bien calibrado: para aquellos para los que el modelo predice el 50% (que son todos), la probabilidad promedio de cara es del 50%.
2. El modelo tiene sesgo: si nos fijamos en los A, el modelo sobreestima; si nos fijamos en los B, infraestima.

El problema es la (falta de) variabilidad.

Para saber más, [_Calibration of clinical prediction rules does not just assess bias_](https://www.jclinepi.com/article/S0895-4356(13)00237-0/abstract).

Y ahora:

1. En algunas aplicaciones, la calibración es suficiente: globalmente, nos basta con que el fenómeno de interés ocurra en un $x$% de los sujetos para los que predecimos $P = x$.
2. En otras ---en realidad, casi siempre--- nos gustaría que la propensión real de un sujeto X para el que $P(X = x)$ sea, efectivamente, $x$.