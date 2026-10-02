---
author: Carlos J. Gil Bellosta
categories:
- estadística
date: 2026-10-08
description: "Una cota superior e inferior al número de «conceptos» que caben en un espacio de «embeddings»."
tags:
- ia
- embeddings
- geometría
title: ¿Cuántos conceptos caben en un espacio de embeddings?
url: /2026/10/08/conceptos-embeddings/
---

Dicho brevemente, los _embeddings_ asocian direcciones en un espacio vectorial de dimensión alta a «conceptos». Cabe preguntarse cuánto «espacio semántico» hay realmente disponible, cuántos «conceptos» caben en un espacio vectorial. Así que hoy voy a realizar una estimación geométrica muy grosera inspirada en un par de entradas de [John D. Cook](https://www.johndcook.com), matizada luego por otra basada en el llamado problema del código esférico. Como referencia, el DRAE tiene unas 100k entradas y la Wikipedia en inglés, unos 7 millones. Esas cifras delimitan el orden de magnitud del número de «conceptos» que uno puede aspirar a registrar en el espacio de _embeddings_.

Si se considera únicamente la dirección de los vectores y no su longitud, cada concepto puede imaginarse como un punto de una esfera de dimensión $n-1$. De manera que la pregunta puede reformularse geométricamente así: ¿Cuántas direcciones _distinguibles_ ---es decir, separadas por un determinado margen para evitar colisiones--- caben en una esfera de alta dimensión?

El lugar geométrico de los vectores con una «similitud del coseno» $c = \cos\theta$ es un casquete esférico. La proporción de la superficie de dicho casquete con respecto al de la esfera [puede aproximarse](https://www.johndcook.com/blog/2026/09/15/simple-approximation-for-spherical-cap-area/) por

$$
P_n(c) = n^{-1/2}(1-c^2)^{(n-1)/2}
$$

por lo que «cabrían»

$$
N_n(c) \approx \frac{1}{P_n(c)} = \sqrt n \(1-c^2)^{-(n-1)/2}
$$

conceptos bajo la falsa premisa de la inexistencia de intersticios entre ellos. Es decir, el número anterior es una cota superior.

Motivado por un ejemplo concreto, John Cook [considera](https://www.johndcook.com/blog/2026/09/15/cosine-similarity/) un ángulo entre conceptos de $49^\circ$ y una dimensión de $n=200$. Aquí, sin embargo, se van a considerar casquetes con un radio angular de $30^\circ$, de modo que se asociarían a un mismo «concepto» vectores con una similitud del coseno superior a $c = \cos 30^\circ = \sqrt{3}/2 = .86$.

Para $n=200$, el número de «conceptos» quedaría acotado superiormente por $1.1\times 10^{61}$. (Es sabido que, en dimensiones altas, dos vectores elegidos al azar son casi siempre prácticamente perpendiculares.)

Pero es más interesante obtener una cota inferior. Ese [matemático particular que llevamos en el bolsillo](https://openai.com/index/navier-stokes-solution/) nos dice que el problema que se trata de resolver entonces es conocido ---«problema del código esférico», se llama--- y que la fórmula

$$
\frac{\cos \theta \sqrt{2\pi n}}{\sin^{n-1}\theta},
$$

atribuida a [Gilbert–Varshamov](https://en.wikipedia.org/wiki/Gilbert%E2%80%93Varshamov_bound_for_linear_codes), nos proporciona una cota inferior para el número de vectores. Con la salvedad de que, aquí, $\theta$ es la distancia angular entre los centros de cada par de casquetes, es decir, $60^\circ$.

La cota inferior obtenida es $9.6\times 10^{13}$.

Es decir, parece que, incluso con un espacio vectorial de una dimensión «moderada» de 200, contamos con espacio de sobra en nuestra libreta virtual para anotar todas las ideas que se nos puedan ocurrir.
