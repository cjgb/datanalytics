---
author: Carlos J. Gil Bellosta
categories:
- estadística
date: 2014-06-09 07:15:06+00:00
draft: false
lastmod: '2025-04-06T19:09:03.084791'
related:
- 2014-06-05-minimos-cuadrados-con-restricciones.md
- 2024-02-01-optimizacion-generalizacion.md
- 2023-09-07-problema-modelos-bayesianos-identicabilidad.md
- 2017-09-11-pues-los-svms-al-final-no-son-tan-exoticos.md
- 2014-11-17-los-coeficientes-de-la-regresion-logistica-con-sobremuestreo.md
tags:
- constroptim
- estadística
- mínimos cuadrados
- modelos
- optimización
- predicción
title: El porqué de los mínimos cuadrados con restricciones
url: /2014/06/09/por-que-de-los-minimos-cuadrados-con-restricciones/
---

Avisé en mi entrada del otro día: [no me preguntéis por qué](https://datanalytics.com/2014/06/05/minimos-cuadrados-con-restricciones/) (imponer restricciones en un problema de mínimos cuadrados).

Pero cuanto más pienso sobre ello, menos claro lo tengo. ¿Por qué restricciones?

Primero, el contexto. O el casi contexto. Porque no es exactamente así. Pero sí parecido. Supongamos que queremos _predecir_ algo y construimos, p.e., 4 modelos. Se nos ocurre (y hay [buenas razones para ello](https://ieeexplore.ieee.org/document/5693450)) combinar los predictores.

Uno puede pensar en usar la media de las predicciones. O la mediana. O tratar de usar un peso revelado por los datos.

Para esto último puede hacerse lo siguiente: reservar una serie de observaciones (no usadas ni en entrenamiento ni en nada) y construir las predicciones $\hat{y}_1$, $\hat{y}_2$, $\hat{y}_3$ y $\hat{y}_4$ de $y$. Con eso se pueden hacer muchas cosas. Por ejemplo, usar un peso inversamente proporcional cierta distancia $\|y - \hat{y}_i\|$.

O, y a eso voy, buscar los pesos $\alpha_i$ que minimizan $\|y - \sum_i \alpha_i \hat{y}_i\|$ usando, p.e., la norma euclídea.

La pregunta es: ¿tiene sentido imponer $\alpha_i > 0$ y $\sum_i \alpha_i = 1$? Por un lado, no. Se supone que lo aprendido de los datos (eso nos cuentan algunos) es preferible a lo apriorístico. Pero entonces ¿cómo interpretar, por ejemplo, coeficientes negativos?

Por otro lado, sí. Los vectores $\hat{y}_i$ están muy correlacionados entre sí y los coeficientes son muy inestables. Tiene sentido tratar de acotar esa inestabilidad esperada introduciendo restricciones (¿no es así como funciona, p.e., [_lasso_](http://en.wikipedia.org/wiki/Regularization_(mathematics))?).

En definitiva, que hay argumentos a favor y en contra y sigo sin tener claro hasta qué punto es conveniente plantear restricciones. Y si habrá algún argumento teórico de peso detrás.

¿Alguien se anima a aportar al debate?