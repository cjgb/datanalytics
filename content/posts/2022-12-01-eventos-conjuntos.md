---
author: Carlos J. Gil Bellosta
categories:
- probabilidad
date: 2022-12-01
lastmod: '2025-04-06T19:11:02.205371'
related:
- 2021-04-08-sobre-las-probabilidades-de-eventos-que-ocurren-una-unica-vez.md
- 2021-01-19-estos-keynesianos-ven-el-mundo-de-una-manera-muy-muy-loca.md
- 2020-01-07-la-probabilidad-algo-subjetivo.md
- 2021-10-28-dos-cuestiones-sobre-la-naturaleza-de-la-probabilidad-planteadas-por-keynes-en-1921-pero-que-siguen-hoy-igual-de-vigentes.md
- 2024-10-17-interpretacion-modelos.md
tags:
- eventos
- kolmogorov
title: ¿Por qué son los eventos (en probabilidad) conjuntos y no otra cosa?
url: /2022/12/01/eventos-conjuntos/
---

## I. Tidyverse (como ejemplo a no seguir)

Uno de los grandes problemas del _`tidyverse`_ en R es que para él, todo son tablas. Existe solo una manera de agrupar información: las tablas. Fuera de ese estrecho marco, existen otras estructuras de datos: árboles, listas, diccionarios, tablas _hash_, vectores, tuplas, listas _linkadas_, listas doblemente _linkadas_, etc. Todo aquello, en definitiva, que en otros lenguajes de programación se explica en el capítulo "Colecciones" del manual.

Estas otras colecciones tienen su aplicación: existen tipos de problemas que de alguna manera, exigen el uso de algún tipo concreto de estructuras de datos. _`tidyverse`_ aplica una política fordiana a rajatabla:

> A customer can have a car painted any color he wants as long as it’s black.

Es decir,

> Puedes meter tus datos en la estructura de datos que quieras, con tal de que sea una tabla.

Ford popularizó ---democratizó, se dice--- el uso del coche. _`tidyverse`_, a costa de _esepeseseizarlo_, popularizó el de R haciéndolo asequible a mentes de reducidas dimensiones.

Pero sigue en vigor la regla de que, dada la necesidad de modelar un tipo concreto de datos, merece la pena encontrar el objeto que permite operacionalizarlo más adecuadamente.

(Vale, en general, no me gusta usar palabras tan largas como la que he escrito en el párrafo anterior. Así que quiero dejar constancia que lo hago muy conscientemente para que quede más clara la relación entre lo que escribo y [esto](https://plato.stanford.edu/entries/operationalism/).)


## II. Llega Kolmogorov.

Kolmogorov se encuentra con el caos que era la teoría de la probabilidad allá por principios de los 1930, se sienta en su silla y dice: de todos los objetos que me ofrecen las matemáticas, ¿cuál es el más adecuado para modelar esa cosa que la gente que estudia la probabilidad llama evento? (Y no solo evento, sino también "variable aleatoria", "muestra", "juego", "ganancia de un jugador", etc. y otros "objetos" o "subterfugios lingüísticos" que se estaban usando a falta de un fundamento sobre el que construir más seguro).

Un evento nunca puede ser un objeto atómico. No puede ser algo asimilable a un punto en el espacio. Porque un evento siempre se puede escindir: evento es que gane el Real Madrid el domingo; pero también que lo haga 2-1; o que lo haga 2-1 gracias a un gol de córner en el penúltimo minuto; etc.

El objeto matemático que mejor puede representar el concepto de evento es el de conjunto ---nótese que lo anterior no es un teorema: es una proposición de índole empírico es histórico muy lejos de ser falsada. Los conjuntos son perfectamente divisibles y gracias a la teoría de la medida que estaba siendo asentada en los años previos, podían asignárseles pesos (o probabilidades) de una manera adecuadamente fundamentada.

¿Son los conjuntos la única solución? En realidad, no. Existieron otras propuestas alternativas a las de Kolmogorov basadas en otro tipo de objetos (véase, p.e.,
[_Randomness and Foundations of Probability: von Mises' Axiomatisation of Random Sequences_](https://www.jstor.org/stable/4355955))
que ensayaron sin éxito vías alternativas.

No quiero dejar de mencionar que existen otras fundamentaciones alternativas de la teoría de la probabilidad que no hacen uso directo de los conjuntos (por ejemplo, todas las relacionadas con la extensión de la lógica tradicional, de Keynes en adelante). Pero que, en el fondo, por mucho que adviertan y lo condenen sus propulsores, no dejan de tener una relación implícita con ellos.


## III. Lo contraintiutivo de los eventos como conjuntos

Entender los eventos como conjuntos tiene muchas ventajas, pero un pequeño problema. Nuestra intuición de conjuntos es la de un contenedor de elementos. Nuestros eventos son conjuntos y podemos unirlos, intersecarlos, comprobar si están contenidos en otros, etc. Pero, ¿cuáles son sus _elementos_? Si $A$ es un evento, ¿cuáles son los $x$ tales que $x \in A$? ¿Qué son, qué naturaleza tienen, esos $x$ elementales?

Uno puede decir: vale, tengo mi variable aleatoria "moneda", que define un espacio donde los únicos eventos posibles son $\emptyset$, $\{H\}$, $\{T\}$ y $\Omega$. Vale, pero uno siempre puede ensancharlo a voluntad: que caiga cara habiendo tirado la moneda con la mano izquierda muy fuerte; y de ahí, de vuelta, hasta el infinito.

En matemáticas tenemos una manera muy cómoda de salir del apuro: llamar $X$ al espacio y definir los eventos como una familia de conjuntos que cumplen una serie de propiedades dadas (que sean lo que se conoce como una $\sigma$-álgebra), sin entrar a debatir qué son los $x \in X$.

Hay unos que dicen que el mundo es una especie de plato sostenido a lomos de un elefante que se apoya a su vez, en una tortuga gigante. Pero, ¿en qué se apoya la tortuga? ¿En otra tortuga tal vez?

![](/img/2022/12/tortugas-hasta-abajo.jpeg#center)

Igual los eventos son eso: eventos dentro de eventos, dentro de eventos, y así sucesivamente hasta donde se pierde la vista.