---
author: Carlos J. Gil Bellosta
categories:
- estadística
date: 2023-01-31
lastmod: '2025-04-06T19:11:20.477202'
related:
- 2015-07-06-una-interpretacion-rapida-y-sucia-de-los-coeficientes-de-la-regresion-logistica.md
- 2017-06-29-hoy-como-excepcion-gritare-y-justificare-malditos-logaritmos.md
- 2014-11-17-los-coeficientes-de-la-regresion-logistica-con-sobremuestreo.md
- 2021-03-02-un-argumento-para-usar-la-normal-la-maximizacion-de-la-entropia.md
- 2011-11-25-escalas-logaritimicas-puede-pero.md
tags:
- regresión no lineal
- curva logística
- grados de libertad
title: Llevando la contabilidad de los grados de libertad
url: /2023/01/31/contabilidad-grados-libertad/
---

Esta entrada es una pequeña exégesis de esto:

![](/img/2023/ajuste-logistica.png#center)

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