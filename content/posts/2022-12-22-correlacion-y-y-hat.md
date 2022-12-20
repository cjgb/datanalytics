---
author: Carlos J. Gil Bellosta
date: 2022-12-22
title: "Sobre la correlación entre Y y la predicción de Y"

url: /2022/12/20/correlacion-y-y-hat/
categories:
- estadística
tags:
- ciencia de datos
- correlación
- entrenamiento
- validación cruzada
- train-test
---

Supongamos que tenemos un modelo construido sobre unos datos $(x_i, y_i)$. Para cada $x_i$, el valor $y_i$ es una realización de una variable aleatoria $Y_i$ con distribución $F_i(y)$. Por simplificar, podemos suponer, además, que para el ajuste se utiliza el error cuadrático.

Entonces, lo mejor que puede hacer el modelo es encontrar la media $\mu_i$ de cada $Y_i$ ---bueno, en realidad, querría encontrar $\mu_x$ para cada $x$ potencial, pero hoy vamos a dejar esa discusión aparcada---.

Con la muestra $(x_i, y_i)$, el modelo asigna a $y_1$ la predicción $\hat{y_1}$, que es una aproximación a $\mu_i$. Supongamos que hubiésemos tenido una muestra algo distinta: mismos $x_i$, mismos $y_i$ si $i > 1$, e $y_1^\prime > y_1$. Entonces, cabe esperar que $\hat{y}_1^\prime \ge \hat{y}_1$.

De hecho, con 1-vecinos, $\hat{y}_1^\prime = y_1^\prime > y_1 = \hat{y}_1$. Es fácil probar un resultado parecido para el modelo lineal, los árboles, etc.

Eso quiere decir que existe una correlación entre $y_i$ e $\hat{y_i}$. El modelo, en entrenamiento, no solo aprende $\mu_i$ sino que también se contamina de la variabilidad de $Y_i$ alrededor de $\mu_i$.

Por eso, el error en entrenamiento es, en promedio, superior al error en validación:

* El error promedio en entrenamiento es la distancia media entre las variables aleatorias $Y$, con distribución $F$ e $\hat{Y}$, correlacionada con $Y$.
* El error promedio en validación es la distancia media entre las variables aleatorias $Z$, con distribución $F$ y $\hat{Y}$, independiente de ella.

Es fácil intuir que la diferencia entre los errores cometidos en entrenamiento y validación tienen por lo tanto algo que ver ---al menos, cuando los errores son cuadráticos--- con la covarianza entre $Y$ e $\hat{Y}$. Y, efectivamnte, es así: es algo que los lectores interesados encontrarán desarrollado en
[_Exceso de optimismo: La diferencia entre el error de test y el de entrenamiento_](https://verso.mat.uam.es/~joser.berrendero/caminos_aleatorios/posts/004-optimismo/index.html).