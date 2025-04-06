---
author: Carlos J. Gil Bellosta
categories:
- estadística
date: 2022-11-04
lastmod: '2025-04-06T18:47:52.279101'
related:
- 2017-03-08-reduccion-de-la-dimensionalidad-con-t-sne.md
- 2022-07-14-proximidad-distribuciones.md
- 2017-09-11-pues-los-svms-al-final-no-son-tan-exoticos.md
- 2012-01-12-localidad-globalidad-y-maldicion-de-la-dimensionalidad.md
- 2020-11-20-distancias-iv-la-solucion-rapida-y-sucia.md
tags:
- multidimensionalidad
- estadística
- umap
- tsne
title: UMAP, tSNE y todas esas cosas
url: /2022/11/04/umap-tsne/
---

Estaba repasando cosas sobre reducción de la dimensionalidad y, en concreto, UMAP y tSNE. Me ha parecido conveniente replantear las cosas sobre primeros principios para que todo se entienda mejor.

El problema es el siguiente:

* Tenemos $K$ puntos $x_i$ en un espacio de dimensión $N$.
* Buscamos su correspondencia con otros $K$ puntos $y_i$ en un espacio de dimensión $n << N$.
* De manera que las configuraciones de los $x_i$ y los $y_i$ sean _similares_ en el sentido de que la matriz de distancias $(d(x_i,x_j))$ sea _parecida_ a la $(d(y_i, y_j))$. Eso quiere decir que parejas de puntos próximos en el primer espacio deberían _mapearse_ en parejas de puntos próximos en el segundo; parejas de puntos alejados en parejas de puntos alejados, etc.

En concreto, se buscaría minimizar algo así como, en primera aproximación,

$$\sum_{ij} \left( d(x_i, x_j) - d(y_i, y_j) \right)^2$$

y en posibles refinamientos, otras expresiones análogas que den o quiten peso dependiendo de distintos factores. Por ejemplo,

$$\sum_{ij} \frac{\left| d(x_i, x_j) - d(y_i, y_j) \right|}{d(x_i, x_j)^2} $$

donde con respecto a la fórmula anterior se ha cambiad la distancia $L^2$ por la $L^1$ y se ha dado más peso a las parejas de puntos próximos que a las alejadas. Y si nos queremos volver aún más locos, podemos escribir algo así como

$$\sum_{ij} w(d(x_i, x_j)) f(d(x_i, x_j), d(y_i, y_j))$$

donde $w$ es un _peso_ (una función positiva y monótona) y $f$ es una función positiva, _creciente_ y que vale cero cuando sus argumentos son iguales.


Variaciones de lo anterior, infinitas y para todo tipo de gustos y colores. Faltaría, eso sí, implementar el proceso de optimización para identificar esos puntos $y_i$ que minimizan las correspondientes funciones de pérdida.

De todas las variaciones conceptualmente existentes del esquema previo, hay dos que por algún motivo han cautivado a los que se dedican a algunas disciplinas: UMAP y tSNE.

tSNE, primero. Según
[_How Exactly UMAP Works_](https://towardsdatascience.com/how-exactly-umap-works-13e3040e1668),
tSNE está basado en

![](/wp-uploads/2022/11/equations_tmap.png#center)

donde:

* $p_ij$, la ecuación (1), es $d(x_i, x_j)$.
* $q_ij$, la ecuación (3), es $d(y_i, j_j)$.
* En la distancia final, $p_ij$ es el _peso_ y $f(a,b) = log(a/b)$.

Todo lo demás es comentario.

Y con respecto a UMAP, la novedad consiste en que

* $d(x_i, x_j)$ se construye utilizando $\exp((d(x_i, x_j) - \rho) / \sigma_i)$.
* $d(y_i, j_j)$ es $(1 + a(y_i - y_j)^{2b})^{-1}$ (sic)
* La distancia final vuelve a ser una versión (larga de escribir) de todo lo escrito más arriba.

Los méritos de uno u otro algoritmo deben discutirse en términos de cómo la elección de las distancias y los pesos involucrados cumplen dos objetivos concretos:

1. Permiten una implementación eficiente del algoritmo, que pueda ejecutarse en un tiempo razonable con datos relativamente grandes.
2. Los resultados finales son coherentes con las expectativas; de hecho, el artículo enlazado más arriba es una comparación de UMAP y tSNE en esos términos precisos: viendo cuál de los dos procedimientos devuelve unos resultados más acordes con lo que sus usuarios potenciales pueden estar esperando.

## Nota final

Hay una incoherencia en mi argumentación de más arriba. En realidad, $f(x, y) = log(x/y)$ no es exactamente una de las funciones que cabe utilizar para medir la distancia entre $x$ e $y$. Pero llegado a este punto, pueden pasar dos cosas:

1. Si has podido captar el problema, estoy seguro de que también intuyes cuál es la solución y por qué la objeción, en el fondo, no es relevante.
2. Si no has captado el problema y das el argumento por bueno, habrás aplicado con éxito una de esas heurísticas provechosas que tanto gustan a los estudiosos de la [racionalidad limitada](https://en.wikipedia.org/wiki/Bounded_rationality).