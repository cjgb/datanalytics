---
author: Carlos J. Gil Bellosta
date: 2021-10-07 09:13:00+00:00
draft: false
title: '¿Cómo aleatorizan las columnas los RRFF?: un experimento mental y una coda
  histórica'

url: /2021/10/07/como-aleatorizan-las-columnas-los-rrff-un-experimento-mental-y-una-coda-historica/
categories:
- ciencia de datos
tags:
- breiman
- historia
- random forests
---

**I. El experimento mental**

Tienes una variable binaria `y` y 100 variables predictoras de las cuales 99 son puro ruido y la última es igual a `y`. En código,

{{< highlight R "linenos=true" >}}
n <- 1000
y <- as.factor(rbinom(n, 1, .4))
x <- matrix(rnorm(n*100), n, 100)
x[,100] <- y
{{< / highlight >}}

El objetivo consiste, obviamente, en predecir `y` en función de `x`.

**II. RRFF**

Los RRFF, como es bien sabido, son conjuntos de `n` árboles construidos sobre los mismos datos. La predicción final se realiza por consenso. Obviamente, si todos los árboles se construyen sobre las mismas filas y las mismas columnas, el resultado es equivalente a construir un único árbol. Por eso, aleatorizan. Aleatorizan filas y columnas. Voy a obviar el asunto de las filas y me voy a concentrar en el de las columnas.

**III. Aleatorización por árboles**

La alternativa que antes se le ocurriría a uno sería construir cada árbol con un conjunto de columnas distinto, elegido al azar. Pero el experimento mental anterior demuestra que ese camino es incorrecto. En efecto, si cada árbol se construye con 10 columnas elegidas al azar (y 10, la raíz cuadrada del número total de columnas es una elección típica en los RRFF), el 90% de ellos estarían construidos sobre puro ruido y solo habría señal en el 10% restante. La predicción por consenso entre todos sería un pequeño desastre.

De hecho, si se tratan de estimar las probabilidades de las prediciones, se estarán consensuando un promedio del 10% de árboles con una probabilidad de asignación del 100% con un 90% de árboles con una probabilidad de asignación del 50% (ruido). Es decir, la probabilidad asignada a `pred = 1` cuando `y = 1` será de un $latex 0.1 \times 1 + 0.9 \times 0.5 = .55$, cuando debería ser del 100%.

(Nota: se puede simular lo anterior construyendo árboles de regresión (p.e., con `ranger`) que tengan una profundidad de 2. Luego se entenderá por qué.)

**IV. Aleatorización por cortes**

Una altarnativa a lo anterior consiste en aleatorizar por cortes. En cada corte de cada árbol se eligen al azar 10 columnas y entre ellas se elige la _óptima_. Eso es lo que hace `ranger`, `randomForest`, etc. El problema plantado por nuestro experimento mental prácticamente desaparece: las predicciones son correctas siempre con los argumentos estándar y las probabilidades de asignación son cercanas al 100%.

(De acuerdo con esto, usando árboles poco profundos, en el fondo, se está utilzando prácticamente la aleatorización por árboles en lugar de por cortes; eso explica la nota de la sección anterior.)

**V. Nota histórica**

Ha surgido recientemente una controversia artificial ---y cuya causa es perfectamente reconocible--- acerca de la paternidad de los RRFF. [Escribí  sobre ella recientemente](https://www.datanalytics.com/2021/07/21/quien-invento-los-random-forests/). Resulta que el método de la aleatorización por árboles es el de la neo-pretendida descubridora de los RRFF, Ho; la aportación fundamental del nunca suficientemente encomiado Breiman es la de la aleatorización por cortes, presente en todas las implementaciones modernas del algoritmo. Véase [esto](https://sebastianraschka.com/faq/docs/random-forest-feature-subsets.html) para mayor información.