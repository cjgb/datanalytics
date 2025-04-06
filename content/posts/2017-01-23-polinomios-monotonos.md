---
author: Carlos J. Gil Bellosta
categories:
- r
date: 2017-01-23 08:13:44+00:00
draft: false
lastmod: '2025-04-06T18:50:55.595997'
related:
- 2020-07-07-regresion-polinomica-vs-redes-neuronales.md
- 2023-01-18-modelo-poisson-numpyro.md
- 2017-10-23-modelos-directos-inversos-y-en-los-que-tanto-da.md
- 2022-03-03-error-sesgo-modelos-lineales.md
- 2023-01-24-funciones-enlace.md
tags:
- MonoPoly
- polinomios
- r
- regresión
title: Polinomios monótonos
url: /2017/01/23/polinomios-monotonos/
---

Recibí un mensaje el otro día sobre polinomios monótonos. Mejor dicho, sobre el ajuste de datos usando polinomios monótonos. Frente a un modelo del tipo `y ~ x` (`x` e `y` reales) donde la relación entre las dos variables es

* manifiestamente no lineal y
* necesariamente monótina, p.e., creciente (por consideraciones previas),

cabe considerar ajustar un polinomio monótono, i.e., realizar una regresión polinómica con la restricción adicional de que el polinomio de ajuste resultante sea monótono.

¿Cómo? [Así](http://www.tandfonline.com/doi/full/10.1080/00949655.2016.1139582). En el artículo se describe un procedimiento, implementado luego en el [paquete `MonoPoly` de R](https://cran.r-project.org/package=MonoPoly), que se basa en una caracterización de la condición de monotonía para polinomios. Por ejemplo, que un polinomio de orden par monótono en el intervalo $latex [a,b]$ tiene que ser la integral indefinida de otro de la forma

$$ p_1(x)^2 + (x-a)(b-x) p_2(x)^2$$

El resto del artículo se sigue de esa parametrización por las vías previsibles. Paz y después, gloria.

Pero, ¿son necesarios polinomios de grado 9 o 15 para ajustar modelos como los que siguen?

![](/wp-uploads/2017/01/gscs_a_1139582_f0001_c.jpeg)

El artículo no está mal, no miente, pero podríamos pensar que engaña: ¿por qué seguir la vía de incrementar el orden de los polinomios en lugar de utilizar _splines_? ¿Por qué no proponer al lector el uso de _splines_ monótonos?