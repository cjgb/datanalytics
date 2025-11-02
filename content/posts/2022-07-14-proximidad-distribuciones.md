---
author: Carlos J. Gil Bellosta
categories:
- estadística
date: 2022-07-14
description: Una introducción al MMD
lastmod: '2025-04-06T18:52:12.045688'
related:
- 2022-11-04-umap-tsne-etc.md
- 2018-03-01-kriging-con-stan.md
- 2022-07-07-lmomentos.md
- 2017-03-08-reduccion-de-la-dimensionalidad-con-t-sne.md
- 2021-03-02-un-argumento-para-usar-la-normal-la-maximizacion-de-la-entropia.md
tags:
- momentos
- distribuciones
- ciencia de datos
- similitud
- kernel trick
- mmd
title: Medidas de similitud entre distribuciones
url: /2022/07/14/similitud-distribuciones-mmd/
---

Por motivos que quedarán claros en entradas futuras, he estado investigando sobre medidas de proximidad entre distribuciones de probabilidad. En mi caso concreto, además, multidimensionales (y de dimensión alta, en $R^N$, con $N$ del orden de docenas o centenas).

Supongamos que tenemos dos variables aleatorias $X, Y \in R^N$ y queremos ver estudiar en qué medida son próximas sus distribuciones. Idealmente, además, utilizando un método que pueda utilizarse a través de muestras de dichas variables.

![](/img/2022/07/high_dimensiona_distribution.png)

Una cosa que uno trataría de comprobar es la diferencia de medias entre ambas distribuciones, es decir, $\Vert E(X) - E(Y) \Vert$. Obviamente, incluso aunque esa distancia sea cero, no hay garantías de que las distribuciones coincidan, pero es un primer paso. Lo es en la siguiente dirección: si $\phi$ es una función de $R^N$ en $R^M$ (donde, posiblemente, $M > N$ o, habitualmente, $M \gg N$), entonces cabe estudiar $\Vert E(\phi(X)) - E(\phi(Y)) \Vert$.

Por ejemplo, si $M = N \times N$ y $\phi(X)_{(i-1) \times N + j} = X_i X_j$, entonces $E(\phi(X))$ es el vector de segundos momentos de $X$ y $\Vert E(\phi(X)) - E(\phi(Y)) \Vert$ estaría midiendo la distancia entre ellos. (Nota: generalmente, el vector de segundos momentos se compacta en una matriz que recibe el nombre de matriz de Gram.) De nuevo, la igualdad de segundos momentos no garantiza la igualdad de distribuciones, pero este es solo un segundo paso.

Concatenando la igualdad con la $\phi$ del párrafo anterior se puede construir una nueva $\phi$ sobre $R^{N + N^2}$ que permitiría medir la discrepancia en primeros (medias) y segundos momentos. Es evidente cómo complicando $\phi$ uno puede comparar más y más aspectos de las distribuciones de $X$ e $Y$. Incluso existen funciones $\phi$ que permitirían _mapear_ $R^N$ en un espacio de dimensión infinita donde poder comprobar la discrepancia en, p.e., todos los momentos (y sabemos que distribuciones cuyos momentos son todos iguales tienen que ser la misma).

Desgraciadamente, la aproximación anterior es más teórica que práctica. Sin embargo, las matemáticas llegan al rescate porque, efectivamente,

$$\Vert E(\phi(X)) - E(\phi(Y)) \Vert^2 = \langle E(\phi(X)) - E(\phi(Y)), E(\phi(X)) - E(\phi(Y))\rangle =$$

$$\langle E(\phi(X)),  E(\phi(X)) \rangle + \langle E(\phi(Y)), E(\phi(Y))\rangle - 2 \langle E(\phi(X)), E(\phi(Y))\rangle$$ =

$$E\left( \langle \phi(X),  \phi(X) \rangle + \langle \phi(Y), \phi(Y)\rangle - \langle \phi(X), \phi(Y)\rangle \right)$$

y es posible ---¿es posible? ¿siempre? yo sabía de estas cosas pero ya no; la cuestión relevante aquí es que sucede así al menos para los casos notables de más interés--- encontrar una función $k$ tal que

$$\langle \phi(x), \phi(y) \rangle = k(x,y)$$

(aunque el resultado se tiende a usar al revés: se define $k$ y luego se comprueba cuál sería la $\phi$ correspondiente) que permite escribir

$$\Vert E(\phi(X)) - E(\phi(Y)) \Vert^2 = E\left( k(X, X) + k(Y, Y) -2 k(X, Y) \right),$$

que es una expresión trivial de aproximar mediante muestras de $X$ e $Y$.

¿Qué funciones $k$ se pueden usar y para qué? La gente usa, por ejemplo, $k(x, y) = xy$ (en dimensión $N =1$) para comparar las medias (el ejemplo con el que he abierto la entrada) y, más en general, (siguiendo en dimensión $N = 1$ por no complicar la notación) $k(x, y) = (1 + xy)^2$ para comparar los primeros y segundos momentos y, aún más en general, $k(x, y) = (1 + xy)^n$ para comparar momentos hasta orden $n$.

Pero es posible usar cosas como $k(x,y) = \exp(- \Vert x - y\Vert / \sigma^2)$ (ahora sí en dimensión arbitraria $N$) para comparar _todos_ los momentos.

Nota: es complicado ---y cuando no, al menos, cansado--- reconstruir la $\phi$ que corresponde a una determinada $k$ de interés. Pero para casi todas las aplicaciones que se me ocurren, basta con saber que existiría y ciertas propiedades cualitativas de ella de alto nivel para entender bien qué características de las distribuciones en cuestión se están comparando.

Y eso es todo por hoy. Otro día tengo que contar dónde y cómo me fue útil todo esto ---lo prometo: es una de esas cosas tan interesantes que a casi nadie interesan--- y, entre tanto, recomiendo al lector interesado en saber más sobre lo que he escrito hoy que busque _kernel trick_ y _maximum mean discrepancy_ en Google.

Nota final: La imagen que adorna ---por decir algo--- esta entrada es la interpretación de DALL·E de una _distribución de probabilidad sobre un espacio de dimensión muy alta_.