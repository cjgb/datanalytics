---
author: Carlos J. Gil Bellosta
categories:
- estadística
date: 2022-07-12
description: Un análisis del concepto de estilo en una imagen
lastmod: '2025-04-06T18:49:42.013081'
related:
- 2016-09-05-mezclas-de-vectores-iii-las-funciones-involucradas.md
- 2022-07-14-proximidad-distribuciones.md
- 2011-08-16-una-feliz-conjuncion-estadistico-algebraica-y-ii.md
- 2023-01-10-stable-diffusion-1d.md
- 2011-08-12-una-feliz-conjuncion-estadistico-algebraica.md
tags:
- momentos
- distribuciones
title: El estilo es la coocurrencia de patrones
url: /2022/07/12/transferencia-estilo-rrnn/
---

_[Aquí, entre otras cosas, se abunda una serie de tres que realicé hace seis años sobre el asunto y que puede consultarse [aquí](https://datanalytics.com/2016/09/05/mezclas-de-vectores-iii-las-funciones-involucradas/).]_

Esta entrada trata sobre cómo se puede caracterizar en términos matemáticos, medir y, en última instancia, operar sobre un concepto tal lábil como lo es el del estilo (o textura) de una imagen. Por ejemplo, lo que caracteriza a una pintura negra de Goya, un primer plano de un plato de macarrones o una viñeta de un cómic de Mortadelo.

![vector_x_hat](/img/2016/09/vector_x_hat.jpg)

En resumen, se puede decir que lo que caracteriza el estilo es la coocurrencia de patrones.

El resto de la entrada servirá para concretar la expresión anterior.

Una capa de una red neuronal convolucional mide la presencia de un patrón determinado en un entorno dado de un punto $ij$ de una foto. En particular, dicha capa consta de un diccionario de _micropatrones_ $\alpha_1, \dots$ y produce valores $x(i,j,k)$ que indican la medida en la que el patrón $\alpha_k$ está expresado en un entorno del punto $(i,j)$.

(Para desavisados: aquí, un patrón puede ser algo así como un determinado gradiente de color, etc. identificado en los píxeles que rodean al punto $(i,j)$.)

Por lo que parece, el _estilo_ está definido por las distribución conjunta de las variables aleatorias $X_k$ tales que $P(X_i \le p)$ es la proporción de valores $x(i,j,k) \le p$.

_[Nótese cómo, al definirlas de esa manera, las distribuciones pierden la información de dónde ocurren o dejan de ocurrir los patrones: solo es relevante su distribución y, examinadas de forma conjunta, su coocurrencia.]_

De hecho, para transferir eficazmente texturas de una imagen a otra, de acuerdo con
[este artículo](https://gcamp6f.com/2017/12/05/understanding-style-transfer/)
 (y todas sus referencias, que son muy buenas) basta con extraer de esa distribución la matriz de segundos momentos

$$a_{ij} = E(X_i X_j)$$

de la distribución en cuestión.

_[Es decir, dos imágenes cuyas matrices de segundos momentos sean similares tendrán texturas similares; y si uno es capaz de generar una imagen similar en aspecto a la primera de ellas pero con una matriz de segundos momentos similar a la de la segunda, habrá sabido transferir el estilo de esta a aquella.]_

Obviamente, no hay nada mágico en la matriz de segundos momentos (también conocida como matriz de Gram): cualquier otra caracterización eficaz de la distribución conjunta podría utilizarse en su lugar.

También es obvio que no cualquier red neuronal ---piénsese en una trivial--- da para detectar un nivel de detalle en los patrones suficiente como para caracterizar el estilo: hace falta una lo suficientemente compleja para ello.

Y termino con una observación recurrente cuando se discuten cuestiones relativas al aprendizaje profundo: no hay demostraciones. La verdad en esta disciplina no se demuestra sino que se ilustra con ejemplos que existen y funcionan.