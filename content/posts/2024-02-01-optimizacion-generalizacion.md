---
author: Carlos J. Gil Bellosta
categories:
- estadística
date: 2024-02-01
lastmod: '2025-04-06T18:53:23.835252'
related:
- 2024-03-05-sobreajuste-modelos-bayesianos.md
- 2023-09-07-problema-modelos-bayesianos-identicabilidad.md
- 2022-03-03-error-sesgo-modelos-lineales.md
- 2019-04-16-sobre-el-error-de-generalizacion-porque-a-veces-se-nos-olvida.md
- 2023-03-02-conformal-prediction.md
tags:
- modelos
- generalización
- validación cruzada
- estadística bayesiana
- optimización
title: 'Ajuste de modelos: Optimización vs generalización'
url: /2024/02/01/model-generalization/
---

He escrito esta entrada como una introducción a lo que se cuenta
[aquí](https://www.lesswrong.com/posts/6g8cAftfQufLmFDYT/you-re-measuring-model-complexity-wrong),
[aquí](https://www.lesswrong.com/posts/gq9GR6duzcuxyxZtD/approximation-is-expensive-but-the-lunch-is-cheap) y
[aquí](https://www.lesswrong.com/posts/uG7oJkyLBHEw3MYpT/generalization-from-thermodynamics-to-statistical-physics)
sobre el asunto de la relación entre la optimización (como parte del proceso de ajuste de modelos) y la generalización (o su capacidad para aprender sobre el mundo y no solo sobre los datos de entrenamiento). En los enlaces, el lector encontrará planteadas una serie de cuestiones sobre cómo y por qué generalizan los (o cierto tipo de) modelos en lugar de, simplemente, no hacerlo.

Desafortunadamente (para muchos de nosotros), en las discusiones sobre esos asuntos abundan los físicos. Los físicos, al tratar conceptos relacionados con la ciencia de datos (o, más en general, la estadística) tienen singular tendencia a explicarlos en función de sus pretendidas similitudes con algún concepto físico, típicamente extraído de la termodinámica: que si tal cosa es la entropía, que si aquello es la _energía libre_, etc. Cuando el resto de los mortales operamos al revés: cuando tenemos el buen gusto ---¡recomendable!--- de echarle un vistazo a un librito sobre termodinámica, tendemos a entender los conceptos que allí aparecen como casos particulares de aquellas ideas generales a las que ya venimos expuestos a través de la estadística.

### I.

Al plantear un modelo muy simple, como una regresión lineal con una única variable, uno está pensando que la relación entre dos variables $x$ e $y$ puede aproximarse mediante una relación casi trivial, $y = a x + b$ y, a partir de una colección de pares $(x, y)$, intenta determinar los valores concretos de los coeficientes mediante un proceso de optimización matemática: los coeficientes _son_ aquellos valores que minimizan el, p.e., error cuadrático.

Que el modelo _generaliza_ es casi una hipótesis de partida: se presupone ---porque se ha constatado empíricamente, p.e.--- que la relación entre ambas variables existe y es aproximadamente lineal.

Incluso en esos casos simples puede haber problemas de _generalización_, salvo que, como se verá, se los conoce con otro nombre. Si en los datos hay, por ejemplo, _outliers_, los coeficientes pueden estar sesgados. Al estar sesgados, el modelo construido de manera _naïf_ no _generalizará_: hará malas predicciones. Pero uno no dice "mi modelo no generaliza" sino, más bien, que el mínimo obtenido no corresponde al valor buscado por culpa de un problema de datos y uno puede plantearse mecanismos para _sesgar_ la estimación en la dirección esperada. Para ello, puede o bien eliminar las observaciones problemáticas, usar métodos robustos, etc.

### II.

Conforme uno usa modelos más complejos, el problema de la generalización se vuelve endémico. Los parámetros que devuelve el óptimo, los que minimizan el error en el ajuste, no son habitualmente tal buenos como otros construidos de otra manera. Hay parámetros _sesgados_ (es decir, que no corresponden con ese óptimo antes mencionado) que funcionan mejor _en el mundo_ (_off sample_).

Hay muchas maneras de sesgar los coeficientes.

Por ejemplo, uno puede pensar en introducir prioris sobre los parámetros del modelo. Ciertos estadísticos bayesianos alegarán motivos más o menos abstractos sobre por qué es la forma adecuada de plantear modelos, pero en la práctica, lo que uno busca es:

* Reducir los grados de libertad del modelo introduciendo restricciones más o menos fuertes (prioris más o menos informativas).
* Sesgar los coeficientes que se obtendrían mediante la minimización pura de la verosimilitud en una dirección más o menos razonable.
* Obtener, en consecuencia de lo anterior, mejores modelos, modelos que funcionan mejor en el mundo.

Otra alternativa relacionada con la anterior es la de la regularización (piénsese en, p.e., _lasso_). Añadiendo unos términos adicionales a la función de error que se quiere minimizar, se sesgan los coeficientes obtenidos (típicamente hacia el cero) y, como por arte de magia, los modelos resultantes funcionan mejor.

O uno puede proceder por una vía más directa (y un poco, como se verá, a ciegas). Uno puede usar validación cruzada (o similares) para seguir el error de validación en paralelo al de entrenamiento y detener el proceso cuando aquel alcanza un mínimo. Imaginemos que el proceso de optimización sobre el conjunto de entrenamiento va trazando (p.e., según _desciende sobre el gradiente) un camino

$$\theta_0, \theta_1, \theta_2, \dots, \theta_\infty$$

donde $\theta_0$ es el vector de parámetros inicial y $\theta_\infty$ es el mínimo (idealmente, global). La promesa de este tipo de procedimientos es que alguno de los $\theta_i$ intermedios, por algún motivo, ---hay que fijarse que la _ruta_ que siguen los parámetros es _desconocida_---, mágicamente, es superior al resto (de nuevo, en términos de generalización).

De nuevo, es un procedimiento que sirve para sesgar (de una manera no controlada porque uno no sabe a priori por dónde irá saltando el algoritmo de optimización por el espacio de parámetros) el óptimo.

En todo caso, en este contexto (el de la sección), incluso el mínimo del entrenamiento puede ser un modelo decente. La generalización se obtiene sesgando de manera más o menos explícita, más o menos controlada, la optimización.


### III.

Pero hoy en día se estilan modelos mucho más grandes. Tanto que, como se indica en uno de los enlaces con los que abría la entrada, es posible construir redes neuronales que ajustan perfectamente los datos de entrenamiento. En ese enlace remiten al artículo [_Understanding deep learning requires rethinking generalization_](https://arxiv.org/abs/1611.03530), que dice algo fácil de intuir (porque los polinomios del bachillerato ya hacían cosas parecidas):

> [...] simple depth two neural networks already have perfect finite sample expressivity as soon as the number of parameters exceeds the number of data points as it usually does in practice.

Lo relevante del hecho, en todo caso, es que en el mundo de los modelos _enormes_ existe una disociación completa entre optimización y generalización. Lo que venía a ser lo mismo con modelos simplísimos, aquí se desdobla completamente. En primer lugar, deja de ser relevante la optimización pura: que la función de pérdida de una red neuronal tenga o no un mínimo global y que pueda alcanzarse o no es intrascendente; de hecho, casi seguro, _no_ queremos ese mínimo global para nada: ese modelo, en el mundo, podría incluso ser puro ruido.

Queda pues pendiente entender el concepto de la generalización no como algo que viene impuesto externamente (como en el caso de la regresión lineal simple), sino que emerge de cierta manera de las propiedades matemáticas de las funciones que llamamos redes neuronales. Y eso es lo que discuten los enlaces cuya lectura sugiero arriba.