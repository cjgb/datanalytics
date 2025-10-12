---
author: Carlos J. Gil Bellosta
categories:
- probabilidad
date: 2021-01-19 09:13:00+00:00
draft: false
lastmod: '2025-04-06T18:56:21.142106'
related:
- 2021-10-28-dos-cuestiones-sobre-la-naturaleza-de-la-probabilidad-planteadas-por-keynes-en-1921-pero-que-siguen-hoy-igual-de-vigentes.md
- 2022-12-01-eventos-conjuntos.md
- 2021-04-08-sobre-las-probabilidades-de-eventos-que-ocurren-una-unica-vez.md
- 2023-07-25-tutorial-numpyro-1-modelos-probabilisticos.md
- 2020-01-07-la-probabilidad-algo-subjetivo.md
tags:
- keynes
- hacking
- kolmogorov
- probabilidad
- fundamentos de probabilidad
title: Estos keynesianos ven el mundo de una manera muy, muy loca
url: /2021/01/19/estos-keynesianos-ven-el-mundo-de-una-manera-muy-muy-loca/
---

_[Y no, no me refiero (hoy) a los seguidores del Keynes de la "Teoría general del empleo, el interés y el dinero" sino a los de su "Tratado sobre probabilidades". Misma persona, distinto libro, distinta disciplina. Y excúseme el "clickbait": no podía no hacerlo.]_

Keynes escribió en 1921 su [Tratado de probabilidades](https://archive.org/stream/treatiseonprobab007528mbp#mode/2up), según la Wikipedia, _una contribución a las bases matemáticas y filosóficas de la teoría de la probabilidad_. Le falta añadir descabellada (aunque, como se verá después, tiene su punto), superada y felizmente olvidada. Forma parte de la llamada [interpretación lógica (o evidencial) de la probabilidad](https://plato.stanford.edu/entries/probability-interpret/#LogPro), de la que no pasa nada si no habéis oído hablar.

Dos características fundamentales de esta interpretación de la probabilidad son que:

* Da preeminencia a las probabilidades condicionales.
* Opera no sobre eventos (considerados como conjuntos de una sigma-álgebra), sino sobre _juicios lógicos_.

Un juicio lógico puede ser **a** = "_hoy es lunes y llueve_". Otro, **b** = "_hay atasco en la M-30_". En su libro, Keynes _opera_ sobre expresiones que representa como **b/a** y que miden de alguna manera la posibilidad de que ocurra **b** si **a** es cierto (**a** siempre es/se considera cierta en expresiones del tipo **b/a**), extendiendo las relaciones necesarias de la lógica tradicional (del tipo **a** $\Rightarrow$ **b**).

Nótese que muchas veces nos plantaemos si las probabilidades que operan en los casinos (o en tiradas de monedas), radicalmente _frecuentistas_, tienen o no algo que ver con otras más propias de las ciencias sociales en que la gente se pregunta si tal partido ganará o no ciertas elecciones. Parece ser que a Keynes le interesaban más este otro tipo de cuestiones y por eso construyó una teoría de la probabilidad _ad hoc_.

Nótese también que todas las probabilidades serían condicionales. Cosa que no deja de ser cierta en general. Incluso el conjunto total de Kolmogorov, $\Omega$ de $P(\Omega) = 1$ podría considerarse condicional, es decir, un  subconjunto de otro $\Omega^2$ más amplio que contenga eventos no contemplados en el original. Por ejemplo, al hablar de fútbol, el universo de eventos es el consabido 1-X-2 (y de ahí, para abajo, hasta llegar al aleteo de la mariposa en el Amazonas), pero excluye otros como la potencial colisión del meteorito exterminador.

Por otro lado, hay que advertir que los juicios lógicos operan al fin y al cabo como conjuntos: los operadores `AND` y `OR` no dejan de ser uniones e intersecciones. De modo que gran parte de la teoría habitual de la probabilidad que conocemos discurriría en paralelo a la de su vertiente logico-evidencial. No tengo tan claro, sin embargo, qué pasa en el infinito: así como las uniones de infinitos conjuntos son habituales en la teoría de la probabilidad y no producen escándalo alguno, no he visto nunca cadenas infinitas de `AND`s en lógica ni el tipo de paradojas _bichescas_ a las que pudieran dar lugar.

Y creo que no he dicho hasta la fecha que los _juicios lógicos_ no dejan de ser eventos en el sentido actual del término. Así que, en definitiva, llegó Kolmogorov en el 33, postuló sus axiomas y el libro del buen Keynes con todos sus distingos ha quedado para nivelar mesas que cojean y poco más.

**Coda:** Después de redactado todo lo anterior y por motivos meramente casuales, he venido a aprender:

1. Que es a Keynes (¿en ese libro?) a quien debemos el nombre de _[principio de indiferencia](https://en.wikipedia.org/wiki/Principle_of_indifference)_ para lo que antes se llamaba de la _razón insuficiente_.
2. Ian Hacking tiene un libro, _Probability and Inductive Logic_, nada menos que del 2001, en el que abunda sobre este tipo de aproximación a la probabilidad (aunque más bien, a la estadística).

**Postcoda:** Adentrándome en el libro de Hacking he venido a darme cuenta de la piadosa (y simpática) intención de la _lógica inductiva_ de la que Keynes es un antecedente: extender los silogismos lógicos, la lógica de lo necesario, al mundo de lo contingente. Igual que la lógica nos enseña a razonar sin incurrir en errores,  la lógica inductiva nos pretende enseñar a extraer conclusiones razonables en contextos de incertidumbre. Lo mismo de siempre, sin duda, pero tal vez más explícitamente expuesto.