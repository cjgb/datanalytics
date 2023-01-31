---
author: Carlos J. Gil Bellosta
date: 2023-01-31
title: 'Llevando la contabilidad de los grados de libertad'

url: /2023/01/31/contabilidad-grados-libertad/
categories:
- estadística
tags:
- regresión no lineal
- curva logística
- grados de libertad
---

Esta entrada es una pequeña exégesis de esto:

![](/wp-uploads/2023/ajuste-logistica.png#center)

Lo que se ve es el resultado del ajuste de una curva logística de cuatro parámetros a una serie de datos. En particular, voy a discutir qué es eso de la logística de cuatro parámetros, por qué el ajuste es bueno y qué tienen que ver los grados de libertad en todo esto.

La función logística de cuatro parámetros es la [función logística](https://en.wikipedia.org/wiki/Logistic_function) de toda la vida,

$$f(x) = a + \frac{b - a}{1 + \exp(c(d - x))}$$

que lleva apareciendo por todas partes desde hace 200 años. Tiene una zona de crecimiento _exponencial_ que acaba saturando. Sus cuatro parámetros corresponden cualitativamente a:

- la asíntota inferior,
- la asíntota superior,
- el punto de inflexión y
- la _pendiente_

¿Por qué el ajuste anterior es _tan bueno_? Tenemos 11 datos para ajustar cuatro parámetros; pero los primeros ocho solo nos informan ---no estrictamente pero sí prácticamente--- sobre la asíntota inferior. Quedan tres parámetros _libres_ para los tres puntos adicionales.

Es relevante indicar que la discusión sobre este ajuste me ha llegado porque el usuario, el _dueño_ de los datos, quiso fijar por algún motivo el nivel de la asíntota superior en 100. Y si fijas la asíntota superior y los ocho primeros puntos fijan la inferior, solo quedan disponibles dos grados de libertad a repartir entre tres observaciones. Cualquier cosa puede pasar ---en particular, cuando es usa algún tipo de ajuste robusto--- y todas son igualmente indefendibles.

### Coda

Este artículo es relevante en tanto que ilustra cómo incluso en estos tiempos de _big data_, llevar con los dedos el debe y el haber de los grados de libertad ayuda a desentrañar los misterios de ciertos casos que le llegan a uno al correo.



