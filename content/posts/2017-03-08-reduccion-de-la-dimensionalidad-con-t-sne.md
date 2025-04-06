---
author: Carlos J. Gil Bellosta
categories:
- estadística
- probabilidad
- r
date: 2017-03-08 08:13:41+00:00
draft: false
lastmod: '2025-04-06T19:13:17.694465'
related:
- 2022-11-04-umap-tsne-etc.md
- 2022-07-14-proximidad-distribuciones.md
- 2017-09-11-pues-los-svms-al-final-no-son-tan-exoticos.md
- 2012-01-12-localidad-globalidad-y-maldicion-de-la-dimensionalidad.md
- 2023-01-10-stable-diffusion-1d.md
tags:
- estadística
- multidimensionalidad
- probabilidad
- r
- t-sne
title: Reducción de la dimensionalidad con t-SNE
url: /2017/03/08/reduccion-de-la-dimensionalidad-con-t-sne/
---

Voy a explicar aquí lo que he aprendido recientemente sobre t-SNE, una técnica para reducir la dimensionalidad de conjuntos de datos. Es una alternativa moderna a [MDS](https://en.wikipedia.org/wiki/Multidimensional_scaling) o [PCA](https://www.datanalytics.com/2014/07/24/datos-antes-y-despues-del-pca/).

Partimos de puntos $latex x_1, \dots, x_n$ y buscamos otros $latex y_1, \dots, y_n$ en un espacio de menor dimensión. Para ello construiremos primero $latex n$ distribuciones de probabilidad, $latex p_i$ sobre los enteros $latex 1, \dots, n$ de forma que

$$ p_i(j) \propto d_x(x_i, x_j),$$

donde $latex d_x$ es una determinada distancia entre puntos en el espacio original. De la misma manera, construimos sendas distribuciones de probabilidad, $latex q_i$,


$$ q_i(j) \propto d_y(y_i, y_j),$$

donde $latex d_y$ es otra distancia entre puntos en el espacio de dimensión inferior.

Lo ideal sería encontrar puntos $latex y_1, \dots, y_n$ tales que cada $latex p_i$ sea lo más parecida posible a la correspondiente $q_i$. Por ejemplo, de entre todas las opciones posibles, de manera que la suma de las divergencias de Kullback-Leibler entre las parejas de distribuciones sea lo menor posible.

Minimícese esa suma, i.e., encuéntrense los puntos $latex y_1, \dots, y_n$ que la minimizan, y ya.

Más:

* [Detalles](http://jmlr.org/papers/volume9/vandermaaten08a/vandermaaten08a.pdf)
* [Ejemplos de uso.](http://blog.datascienceheroes.com/playing-with-dimensions-from-clustering-pca-t-sne-to-carl-sagan/)

**Nota curiosa:** creo que he usado el adjetivo distributivo _sendas_ por primera vez en la vida.

**Fe de errores:** donde arriba escribí _distancia_ debí haber escrito _similitud_. Una similitud es una función decreciente de la distancia. Obviamente, se busca una similitud estrictamente positiva (como por la que optaron los creadores del algoritmo).

**Nota para matemáticos:** aparte del problema de que el mínimo pueda ser local y no global, es obvio que si las similitudes están basadas en distancias euclídeas (como es el caso en la implementación de los autores) la solución no es única: dada una solución, lo serán también traslaciones y rotaciones suyas.