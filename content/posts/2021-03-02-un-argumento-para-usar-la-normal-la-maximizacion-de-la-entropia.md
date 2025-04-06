---
author: Carlos J. Gil Bellosta
categories:
- probabilidad
date: 2021-03-02 09:13:46+00:00
draft: false
lastmod: '2025-04-06T19:03:32.328386'
related:
- 2022-10-11-bayesianismo-frecuentismo-teoria-decision-03.md
- 2022-10-13-bayesianismo-frecuentismo-teoria-decision-04.md
- 2016-05-31-el-extrano-caso-de-la-media-empirica-menguante.md
- 2021-02-23-tres-teoremas-que-son-casi-ciertos.md
- 2022-01-20-peor-pagina-taleb.md
tags:
- distribuciones
- entropía
- probabilidad
- jaynes
title: 'Un argumento para usar la normal: la maximización de la entropía'
url: /2021/03/02/un-argumento-para-usar-la-normal-la-maximizacion-de-la-entropia/
---

Llegaré a la normal. Antes, algo sobre la entropía.

Nos interesa saber y medir el grado de concentración de una distribución. Por ejemplo, si **X** es una variable aleatoria con función de densidad $latex f(x)$ y $latex x_1, \dots, x_n$ es una muestra de **X**, entonces, la expresión

$$ \frac{1}{n} \sum_i f(x_i)$$

da una idea de la concentración vs dispersión de **X**:

* Si es grande, muchos de los $latex x_i$ procederán de lugares donde $latex f$ es grande; en un caso discreto, que tal vez ayude a mejorar la intuición sobre la cosa, habría muchos valores repetidos.
* Si es pequeño, muchos de los $latex x_i$ procederán de puntos de baja probabilidad; en un caso discreto, aparecerían muchos valores $latex x_i$ diversos y de probabilidad baja.

La expresión anterior converge a

$$ \int f^2(x) dx,$$

que todavía no es _nuestra_ entropía, pero que mide, esencialmente, la misma cosa. Lo es, sin embargo, de los economistas, que llaman a lo anterior [índice de Hirschman](https://es.wikipedia.org/wiki/%C3%8Dndice_de_Herfindahl).

No hay impedimento en usar $latex \phi(f(x))$ para obtener un resultado con una interpretación similar con tal de que $latex \phi$ sea una función creciente, como $latex \phi(x) = x^2$ o $latex \phi(x) = \log(x)$.

Es tradición en probabilidad usar esa última opción (aunque con un signo menos delante, que invierte aunque no desnaturaliza la interpretación dada más arriba). La ventaja del uso del logaritmo son:

1. sus propiedades algebraicas, que convierten productos en sumas;
2. que los productos de funciones de densidad están relacionados con la propiedad de independencia de variables aleatorias;
3. que el  (menos) logaritmo es convexo, lo que permite aplicar desigualdades tipo Jensen por todas partes.

_[Obviamente, la conjunción de las propiedades 1 y 2 es material para postular y probar teoremas a tutiplén; pero son teoremas más buscados que encontrados: la definición primera de entropía venía a exigir que se cumpliesen esos resultados matemáticos, tan aptos para caer en los exámenes de la cosa.]_

Entonces, por fijar ideas, la expresión

$$ -\int f(x) \log f(x) dx,$$

que es el límite de

$$ \frac{-1}{n} \sum_i \log f(x_i)$$

mide el grado de dispersión de una variable aleatoria. Nótese, además, que, tal como está definido la expresión anterior, cuanto mayor sea esta, mayor será la dispersión.

Ahora, supóngase que de una variable aleatoria solo se sabe que, por ejemplo, es positiva y que su media es 10. De tener que elegir una (por ejemplo, como priori en un tinglado bayesiano), lo más natural sería optar por la menos informativa  (o con mayor dispersión) dentro de aquellas que cumplan dichas condiciones. [La Wikipedia nos dice que es la exponencial](https://en.wikipedia.org/wiki/Maximum_entropy_probability_distribution).

¿Y entre las que tienen media y varianza dadas? A nadie sorprenderá que se trate de la normal. De hecho, la normal, como _promedio_ (vía el teorema central del límite) de variables aleatorias de cualquier pelaje, es precisamente aquella distribución con media y varianza dadas que ha perdido las _características informativas_ de las variables aleatorias que la _integran_.

Y, para cerrar, un resultado desasosegante. El contexto es el de la modelización bayesiana, de nuevo, con prioris informativas. Lo de la media y la varianza, que justificaría el uso de la normal, está entrañablemente _demodé_. Un usuario te puede decir: habitualmente, **X** está entre a y b. Lo cual se puede interpretar como que **X** es normal con media (a + b) / 2 y aquella varianza tal que los cuantiles 0.025 y 0.975 sean a y b; o alternativamente como que **X** debería ser aquella distribución de máxima entropía tal que sus cuantiles correspondientes son a y b.

Desafortunadamente, esa distribución sería constante entre a y b y fuera de ese intervalo... no está claro. Unos dirían que si una uniforme degenerada (¿cuánto?) y otros más prudentes recomendarían utilizar una exponencial. En cualquier caso, un engendro de padre y muy señor mío.