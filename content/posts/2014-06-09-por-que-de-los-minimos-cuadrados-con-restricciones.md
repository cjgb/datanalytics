---
author: Carlos J. Gil Bellosta
date: 2014-06-09 07:15:06+00:00
draft: false
title: El porqué de los mínimos cuadrados con restricciones

url: /2014/06/09/por-que-de-los-minimos-cuadrados-con-restricciones/
categories:
- estadística
tags:
- constrOptim
- estadística
- mínimos cuadrados
- modelos
- optimización
- predicción
---

Avisé en mi entrada del otro día: [no me preguntéis por qué](http://www.datanalytics.com/2014/06/05/minimos-cuadrados-con-restricciones/) (imponer restricciones en un problema de mínimos cuadrados).

Pero cuanto más pienso sobre ello, menos claro lo tengo. ¿Por qué restricciones?

Primero, el contexto. O el casi contexto. Porque no es exactamente así. Pero sí parecido. Supongamos que queremos _predecir_ algo y construimos, p.e., 4 modelos. Se nos ocurre (y hay [buenas razones para ello](http://ieeexplore.ieee.org/xpl/login.jsp?tp=&arnumber=5693450&url=http%3A%2F%2Fieeexplore.ieee.org%2Fxpls%2Fabs_all.jsp%3Farnumber%3D5693450)) combinar los predictores.

Uno puede pensar en usar la media de las predicciones. O la mediana. O tratar de usar un peso revelado por los datos.

Para esto último puede hacerse lo siguiente: reservar una serie de observaciones (no usadas ni en entrenamiento ni en nada) y construir las predicciones $latex \hat{y}_1$, $latex \hat{y}_2$, $latex \hat{y}_3$ y $latex \hat{y}_4$ de $latex y$. Con eso se pueden hacer muchas cosas. Por ejemplo, usar un peso inversamente proporcional cierta distancia $latex \|y - \hat{y}_i\|$.

O, y a eso voy, buscar los pesos $latex \alpha_i$ que minimizan $latex \|y - \sum_i \alpha_i \hat{y}_i\|$ usando, p.e., la norma euclídea.

La pregunta es: ¿tiene sentido imponer $latex \alpha_i > 0$ y $latex \sum_i \alpha_i = 1$? Por un lado, no. Se supone que lo aprendido de los datos (eso nos cuentan algunos) es preferible a lo apriorístico. Pero entonces ¿cómo interpretar, por ejemplo, coeficientes negativos?

Por otro lado, sí. Los vectores $latex \hat{y}_i$ están muy correlacionados entre sí y los coeficientes son muy inestables. Tiene sentido tratar de acotar esa inestabilidad esperada introduciendo restricciones (¿no es así como funciona, p.e., [_lasso_](http://en.wikipedia.org/wiki/Regularization_(mathematics))?).

En definitiva, que hay argumentos a favor y en contra y sigo sin tener claro hasta qué punto es conveniente plantear restricciones. Y si habrá algún argumento teórico de peso detrás.

¿Alguien se anima a aportar al debate?
