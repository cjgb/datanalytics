---
author: Carlos J. Gil Bellosta
date: 2024-01-23
title: "El discreto encanto de los árboles olvidadizos"
url: /2024/01/11/oblivious-trees/
categories:
- ciencia de datos
tags:
- árboles
- ciencia de datos
- árboles olvidadizos
- gbm
- catboost
---

### I.

A mediados de los ochenta, hubo un momento _fundacional_ en la historia del _aprendizaje automático_: la aparición de los árboles de decisión. El artículo de Breiman sobre
[las dos culturas](http://localhost:1313/2016/11/07/las-dos-culturas-con-comentarios-de-2016/)
puede entenderse así: existe ---o existía en esa época--- la cultura de los que usan métodos estadísticos _tradicionales_ y la de los que usan árboles de todo tipo.

Herramientas de _minería de datos_ de entonces, tales como las que vendían SAS o IBM, no encerraban debajo del capó otra cosa ---u otra cosa novedosa--- que árboles de decisión propietarios. Por todo lo anterior había mucho interés en conseguir _mejores_ árboles, árboles que permitiesen crear _mejores_ modelos ---en el sentido, claro está, de cometer errores pequeños---.

Pero las limitaciones de los árboles son sistémicas: son modelos demasiado pequeños como para poder almacenar toda la información necesaria para resolver un problema: apenas almacenan unos cuantos bits. El mundo del aprendizaje automático derivó por tanto hacia modelos _grandes_, más _memoriosos_, capaces de combinar la información de múltiples modelos flojos (típicamente, árboles). El resultado es conocido: _random forests_, diversas versiones del _boosting_, etc.


### II.

Pero una vez que combinas _modelos flojos_ ya no es estrictamente necesario que tu modelo flojo sea el menos flojo de entre todos ellos. Además, otras propiedades de segundo orden de los árboles comienzan a cobrar importancia.

Por ejemplo, supongamos que tenemos dos tipos de árboles, el A y el B. Sistemáticamente, se ha demostrado que el A tiene un error (pensemos en el RMSE) ligeramente mejor que el B en una amplia clase de problemas. Supongamos también que el A tarda un 50% más de tiempo en ajustar que el B, que es más simple. Entonces, en un mundo sin _boosting_, el modelo A sería preferible al B. Pero puede que modelos de _boosting_ basados en B funcionen mejor que los basados en A: efectivamente, el _boosting_ se encarga de mejorar la capacidad predictiva de los modelos, mientras que el coste computacional adicional de A se traslada al modelo global con creces.

Dicho de otra manera:

- En un mundo sin _boosting_ (o _random forests_, etc.), el factor limitante es el error.
- En un mundo con _boosting_ (y _random forests_, etc.), los factores limitantes son otros, como la velocidad, el tamaño del modelo, la simplicidad (que permita algunas optimizaciones _ad hoc_ en el modelo superior), etc.


### III.

Cuando la pura minimización del error deja de ser el condicionante único (como pasaba, por otros motivos con los
[_árboles frugales_](/2016/11/18/diapositivas-de-modelos-rapidos-y-frugales-mi-charla-en-databeers/))
surgen muchas opciones que pueden ser más o menos adecuadas para un fin concreto.

Y aquí entra [`catboost`](https://catboost.ai/en/docs/), una de las variantes del _boosting_ más populares. `catboost` usa
[_árboles olvidadizos_](https://cdn.aaai.org/Workshops/1994/WS-94-01/WS94-01-020.pdf) que funcionan más o menos así:

0. Se parte de un conjunto de datos D y unas variables $x_i$.
1. Para el primer corte, se selecciona una variable (como en los árboles normales) y un punto de corte; con ellos se crean las subramas $D_1$ y $D_2$.
2. Para el segundo corte, se selecciona una única variable (¡no una en cada subrama!), un punto de corte y este se aplica a las subramas $D_1$ y $D_2$ (aunque existe una variante, que no es la que usa `catboost`, en la que los puntos de corte dependen de la subrama).
3. Se elige una única variable y un único punto de corte para partir las cuatro subramas del punto anterior.
4. Etc.

Obviamente, este algoritmo es mucho más simple que CART, por ejemplo. Es necesario, además, que funcione peor en términos de la minimización del error: es el mismo salvo que con restricciones ---en cada nivel se usa una única variable de corte--- adicionales. Y habría caído necesariamente en lo que su nombre indica ---el olvido--- de no haber sido rescatado para conformar el motor de `catboost`.


### IV.

¿Por qué es todo esto relevante? Entre otros motivos, por el interés en entender este algoritmo, `catboost`, tan popular. Hay cosas escritas sobre él, como
[el tratamiento que hace de las variables categóricas](https://muestrear-no-es-pecado.netlify.app/2023/06/09/categoricas_a_lo_catboost_pensamientos/index.html),
que no tienen sentido salvo que se entienda que se aplican a árboles olvidadizos y no a los habituales.






