---
author: Carlos J. Gil Bellosta
categories:
- estadística
date: 2022-06-07
description: Una introducción a los generalized random forests
lastmod: '2025-04-06T19:01:36.110779'
related:
- 2021-10-07-como-aleatorizan-las-columnas-los-rrff-un-experimento-mental-y-una-coda-historica.md
- 2010-06-16-algoritmos-geneticos-para-la-caracterizacion-de-maximos-en-random-forests.md
- 2022-03-10-diagramas-causales-hipersimples-1-errores.md
- 2014-03-07-victoria-o-diferencia-de-puntos-ahora-con-random-forests.md
- 2015-07-06-una-interpretacion-rapida-y-sucia-de-los-coeficientes-de-la-regresion-logistica.md
tags:
- random forests
- generalized random forests
- ciencia de datos
- causalidad
title: '"Generalized random forests": una introducción'
url: /2022/06/07/generalized-random-forests/
---

Los _generalized random forests_ (GRF en lo sucesivo) han cobrado cierta relevancia recientemente porque una de sus potenciales variantes son los llamados _causal forests_: RRFF _adaptados_ para medir el tamaño de una _intervención causal_.

Lo que voy a contar aquí es un resumen de lo que aprendí echándole un vistazo al [artículo relevante de la cosa](https://arxiv.org/pdf/1610.01271.pdf).

[Nota: voy a simplificar un poco con respecto a lo que aparecen en el artículo por aligerar la introducción; recuérdese: este es un mapa del territorio y el territorio en sí mismo.]

Cuesta entender el artículo hasta que uno se percata de que los GRF no son RRFF. Es más fructífero entenderlos como _modelos locales_ donde los pesos, en lugar de utilizar _kernels_ tradicionales ---que al final, están basados en algún tipo de distancia--- utilizan un criterio distinto (y al que volveremos).

En un GRF, a cada punto $x_i$ no se le asocia un escalar $y_i$ ---como sucede con los no generalizados--- sino un vector de datos $D_i$. La predicción del GRF en un punto $x$ es el valor $\theta$ ---que puede ser un vector--- que minimiza la expresión

$$\sum_i \alpha_i(x) L(D_i, \theta)$$

donde:

- $\alpha_i(x)$ es el peso de $x_i$ en la predicción de $x$ (y que depende de la _distancia_ entre $x$ y $x_i$).
- $L$ es una función de pérdida determinada.

Por ejemplo, si $D_i = (y_i)$ y $L(D_i, \theta) = (y_i - \theta)^2$, el mínimo se obtendría en la media (local) de los valores $y_i$ y tendríamos un modelo de regresión al uso. Análogamente, si $L(D_i, \theta) = \|y_i - \theta \|$, el GRF estaría tratando de estimar la mediana (local) de los $y_i$.

Pero imaginemos que $D_i = (y_i, z_{i1}, \dots, z_{ik})$ y que

$$L(D_i, \theta) = (y_i - \theta_0 - \theta_1 z_{i1} - \dots - \theta_k z_{ik})^2.$$

Entonces los $\theta = (\theta_0, \dots, \theta_k)$ serían los coeficientes de una regresión lineal local (en el entorno de cada $x$).

Antes de continuar, dos notas:

1. En realidad, en el artículo, $\theta$ tiene dos partes: $\theta$ propiamente dicha, que es la variable de interés, y $\nu$, una serie de valores que forman parte de la minimización pero que no son de interés para el usuario (y que no intervienen en la definición de la _distancia_).
2. Los bosques causales son precisamente casos en los que $L(D_i, \theta) = (y_i - \theta_0 - \theta_1 T_{i})^2$ donde $T$ es una variable que indica si el sujeto $i$ ha recibido o no el tratamiento en cuestión. Es, por tanto, la regresión $y \sim T$ ajustada _localmente_ y un caso particular del descrito más arriba. En este caso, además, solo interesa realmente el valor $\theta_1$, el tamaño del efecto, y $\theta_0$, el término independiente, sería la componente _ignorable_, $\nu$, discutida en la nota anterior.

Lo peculiar de los GRF ---y que los distingue de otros métodos de ajuste local de modelos--- es cómo se calculan los pesos $\alpha_i(x)$: son la proporción de nodos terminales de los árboles de un RRFF en los que $x$ y $x_i$ coinciden. Así, $x_i$ y $x$ estarán próximos si muchos de los árboles del RRFF tienden a colocarlos en el mismo nodo terminal y lejos si pasa lo contrario.

Con lo cual hemos llegado al punto en el que la pescadilla se muerde la cola: se necesita un RRFF para poder evaluar la función objetivo; pero, a la vez, el RRFF tiene que haberse construido conforme a dicha función objetivo para que corte el espacio de forma consistente con ella.

El truco que utilizan los GRF consiste, como no puede ser de otra manera, en cambiar la función objetivo en la construcción del RRFF. En primer lugar, los árboles del RRFF ignoran los pesos y solo tienen en cuenta la diferencia entre $\theta_{\text{izda}}$ y $\theta_{\text{dcha}}$ ---estimados, se insiste, sin pesos--- para identificar los _cortes óptimos_ de los árboles. Luego, además, y según el artículo, tampoco resuelven exactamente $\theta_{\text{izda}}$ y $\theta_{\text{dcha}}$ ---piénsese en lo costoso que resultaría computacionalmente--- sino que utilizan aproximaciones a sus diferencias basadas en resultados cuyos detalles, creo, nos interesan a pocos.

El resultado final podría haber sido una catástrofe, pero parece que, al final, los errores que introducen las aproximaciones por todas partes no parecen agregarse perniciosamente en una serie de ejemplos de uso de la cosa y el algoritmo parece que aguanta derecho las inclemencias de las aplicaciones reales. Al menos, de momento, nadie parece haberse quejado mucho, si es que eso es garantía de algo.