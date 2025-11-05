---
tags:
- python
- scikit-learn
- regresión logística
author: Carlos J. Gil Bellosta
categories:
- estadística
date: 2025-10-07
description: La regresión logística en sklearn no es la regresión logística sino otra
  cosa
lastmod: '2025-10-13T17:16:06.417214'
related:
- 2019-12-02-sobre-los-coeficientes-de-los-glm-en-scikit-learn.md
- 2020-06-29-sobremuestreando-x-y-no-y.md
- 2014-11-17-los-coeficientes-de-la-regresion-logistica-con-sobremuestreo.md
- 2019-07-17-sobre-la-peculiarisima-implementacion-del-modelo-lineal-en-pseudo-scikit-learn.md
- 2021-02-16-hay-mil-motivos-para-criticar-una-regresion-trucha-pero-una-rc2b2-baja-no-es-uno-de-ellos.md
title: 'La regresión logística en sklearn no es la regresión logística sino otra cosa:
  el problema oculto'
url: /2025/10/07/regresion-logistica-sklearn/
---

La semana pasada [escribí](/2025/10/02/regresion-logistica-sklearn/) una entrada que constaba únicamente de la frase

> "La regresión logística en sklearn no es la regresión logística sino otra cosa."

repetida muchas veces. El _problema_ es que la implementación que hace scikit-learn de la regresión logística usa, por defecto, _l2-regularization_, es decir, _ridge_.

Lo cual, en principio, es preferible a la alternativa, es decir, no usar regularización en absoluto; pero usar regularización implica una serie de consideraciones y ajustes por parte del usuario que no siempre se tienen en cuenta.

Veamos un ejemplo en R. En primer lugar creo unos datos, ajusto una logística y predigo:

{{< highlight r >}}
x_km <- c(1, 1, 1, 10, 10, 10)
y <- c(1, 0, 0,  1,  1,  0)

m0 <- glm(y ~ x_km, family = binomial)
predict(m0, data.frame(x_km = 10), type = "response")
{{< / highlight >}}

A 10 km, hay 3 casos de los cuales 2 son positivos, así que la predicción debería dar, aproximadamente, 2/3. De hecho, da 0.6666667.

Pero ahora decido reexpresar la variable independiente en metros en lugar de kilómetros, así que hago

{{< highlight r >}}
x_m <- c(1000, 1000, 1000, 10000, 10000, 10000)

m1 <- glm(y ~ x_m, family = binomial)
predict(m1, data.frame(x_m = 10000), type = "response")
{{< / highlight >}}

y obtengo exactamente la misma predicción, 0.6666667. De hecho (y es un ejercicio que dejo planteado al lector), con el coeficiente de $x$ pasa lo que se espera: en uno de los modelos es 1000 veces el del otro. El modelo no se ve en absoluto afectado por la escala de las variables.

Pero si en lugar de R hubiese utilizado sklearn/python y hubiese hecho

{{< highlight python >}}
import numpy as np
from sklearn.linear_model import LogisticRegression

x_km = np.array([1, 1, 1, 10, 10, 10]).reshape(-1, 1)
y = np.array([1, 0, 0, 1, 1, 0])

m0 = LogisticRegression().fit(x_km, y)
print(m0.predict_proba([[10]])[:,1])

x_m = np.array([1000, 1000, 1000, 10000, 10000, 10000]).reshape(-1, 1)
m1 = LogisticRegression().fit(x_m, y)
print(m1.predict_proba([[10000]])[:,1])
{{< / highlight >}}

habría obtenido las predicciones 0.66116492 y 0.66666667 respectivamente, que no son iguales entre sí. El motivo es que _ridge_ penaliza más intensamente los coeficientes más grandes. Por eso, cuando uso la variable en metros, el coeficiente del modelo es, en principio, más pequeño (¡una milésima parte!) y la regularización lo achica menos. Por eso, en ese caso, la solución de sklearn es próxima, casi igual, a la de `glm`. Pero el tamaño de los coeficientes depende de la escala de las variables. Así que modificaciones aparentemente inocuas en los datos (p.e., reexpresar una variable en kilómetros en lugar de en metros) ¡tienen un efecto (muchas veces no pretendido e inesperado) en el modelo!

En definitiva:
1. Usar _ridge_ no es malo sino bueno, en general.
2. Pero usarlo implica escalar las variables de tal manera que la regularización tenga sentido. Lo cual implica cierto trabajo que no me quiero entretener en desarrollar hoy.

Aunque también hay que advertir que en un mundo poblado de paletos numéricos como el nuestro nadie te va a criticar en absoluto por usar las regresiones logísticas de scikit-learn como si fuesen esas que nos enseñan los libros e implementa la función `glm` en R (o, para evitar suspicacias, la función `GLM` de `statsmodels` en python).

## Coda

Los interesados en las matemáticas de la cosa, encontrarán una demostración/justificación matemática del fenómeno descrito más arriba (que _ridge_ penaliza más los coeficientes de mayor valor absoluto) en, por ejemplo, _The Elements of Statistical Learning_, si no recuerdo mal. Supongo que los LLMs decentes también estarán al tanto del argumento matemático.