---
author: Carlos J. Gil Bellosta
date: 2023-11-30
draft: false
title: 'Aprendizaje por refuerzo: ¿Q o no Q?'

url: /2023/11/30/reinforcement-learning-q/
categories:
- ciencia de datos
tags:
- aprendizaje por refuerzo
- Q*
- ciencia de datos
---

Esta entrada está motivada por mis cavilaciones alrededor de un potencial futuro proyecto de Circiter. Es posible que por primera vez tengamos que recurrir a técnicas de aprendizaje por refuerzo y quiero aprovechar para dejar por escrito algunas cuestiones al respecto. En particular, algunas potenciales simplificaciones con respecto a la teoría general que, afortunadamente, aplicarían a nuestro caso particular.

En lo que sigue voy a dar por sabidos conceptos básicos sobre el aprendizaje por refuerzo que casi nadie conoce pero que
[están a un _click_ de distancia](https://en.wikipedia.org/wiki/Reinforcement_learning)
del cerebro de cualquiera.

Imaginemos las temperaturas en una habitación a lo largo del tiempo $S_i$ (uso $S_i$ y no $T_i$ porque en contextos generales, $S$ abrevia _estados_). Queremos mantenerlas en unos rangos determinados y para ello podemos aplicar determinadas acciones $a_i$: activar la calefacción, etc. La temperatura $S_{i+1}$ depende de $S_i$, de $a_i$ y de otras circunstancias aleatorias. De hecho, los $S_i$ son variables aleatorias en tanto que:

* Pueden no depender determinísticamente de $S_{i-1}$ y $a_{i-1}$.
* Las mismas acciones $a_i$ pueden no ser deterministas: pueden implicar elegir una acción al azar ---aunque con una ley de probabilidad dada--- entre una serie de opciones.

Los estados $S_i$ se evalúan según su adecuación y reciben una recompensa $r_i = R(S_i)$, que es, obviamente, otra variable aleatoria.

El siguiente gráfico, extraído de
[_Deep reinforcement learning to optimise indoor temperature control and heating energy consumption in buildings_](https://www.sciencedirect.com/science/article/abs/pii/S0378778820308963),
muestra el resultado de un ejercicio de aprendizaje por refuerzo en un contexto similar:

![](/wp-uploads/2023/rl-00.png#center)

El sistema recibe recompensas por mantener la temperatura en el rango verde entre las 7:00 y las 19:00 en tanto que, además, ahorra energía. Las $r_i$ son, entonces, simples y se maximizan:

* Manteniendo la temperatura en la zona baja de la franja verde entre las 7:00 y las 19:00.
* Apagando la calefacción a las 19:00.

Pero, obviamente, eso no es todo: ¿cuál es la acción ideal a las 6:59? Si uno atiende solamente a la $r_i$ correspondiente, la calefacción debería mantenerse apagada. Pero ¿qué ocurriría entonces a las 7:00? El problema es el de la heterogeneidad temporal de los $r_i$ que obliga al sistema a tener presentes tanto el siguiente $r_i$ como los sucesivos. De tal manera que a partir de las ~5:00 se ponga en marcha la calefacción para asegurar que a las 7:00 la temperatura se mantenga dentro de la franja verde (y que, de hecho, _oscule_ su esquinita inferior izquierda).

De ahí Q, la función Q. Que, merece la pena indicar, es la hermana pobre de la [famosa Q* de OpenAI](https://community.openai.com/t/what-is-q-and-when-we-will-hear-more/521343/2). La función $Q = Q(S_i, a_i)$ puede interpretarse como el _valor presente_ de los $r_i$ futuros para una determinada _tasa de descuento_, es decir, una manera de agregar lo que podría pasar en el futuro si se toma la acción $a_i$. El problema, claro está, consiste en cómo calcular ---es imposible--- o aproximar ---¿vía redes neuronales?--- dicha función.

Pero, ¿y si las $r_i$ son homogéneas en el tiempo? Si uno se enfrenta aun problema así ---por ejemplo, el de las temperaturas de la habitación donde estas _siempre_ tienen que estar en la franja verde--- cabe esperar que el valor presente de los $\{r_{i+j}\}$ futuros, que son todos _iguales_, sea igual ---o proporcional, que es lo mismo, para los efectos, que igual--- a $r_i$.

Lo cual simplificaría enormemente el problema, haría innecesario construir un arco de iglesia para estimar $Q$ y _nos llenaría a todos de orgullo y satisfacción_.