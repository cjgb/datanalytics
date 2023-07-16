---
author: Carlos J. Gil Bellosta
date: 2023-07-25
title: 'Tutorial de numpyro (I): modelos probabilísticos'

url: /2023/07/25/tutorial-numpyro-modelos-probabilisticos/
categories:
- estadística
tags:
- numpyro
- estadística
- modelos
- modelos probabilísticos
---

### I.

Las distintas disciplinas estudian aspectos diferentes de la realidad. Para ello crean _modelos_. Un modelo es una representación teórica y simplificada de un fenómeno real. Por un lado, el territorio; por el otro, el mapa.

Los físicos modelan cómo oscila un péndulo y se permiten obviar cosas como el rozamiento del aire. Los economistas, la evolución del PIB o la inflación. Los biólogos, la absorción de una determinada sustancia por un tejido. Los ingenieros, el comportamiento aerodinámico de un prototipo. Etc.

Esos modelos se usan luego para realizar predicciones, estudiar relaciones causales, medir parámetros, etc.

La estadística ---entendida en sentido amplio--- hace lo mismo. La gran diferencia estriba en que muchos de los modelos en los que uno puede pensar son _deterministas_ y los que interesan a la estadística son _probabilísticos_.

Por supuesto, examinada la cuestión con cierto detalle, no existe una distinción categórica entre determinista y probabilístico. No hay modelo sin error aleatorio. Pero suceden dos cosas. La primera es que en muchos modelos la incertidumbre es tan pequeña (¿con qué precisión conocemos la constante de gravitación universal?) que son, de facto, deterministas. La otra que, por supuesto, muchos modelos de la física, la economía, la sicología, etc. son propiamente probabilísticos; por eso existen la econometría, la sicometría, la bioestadística, etc.

### II.

Cuando uno piensa en un modelo ---en sentido amplio---, piensa en una _función_, una expresión matemática que relaciona unas variables con otras. Por ejemplo, para oscilaciones pequeñas ---y esto de que un modelo valga en un rango pero no en general lo más habitual del mundo---, el péndulo se rige por la bien sabida ecuación

$$\theta(t) = \theta_0 \cos\left(\sqrt{\frac{g}{l}}t\right).$$

Los modelos probabilísticos, sin embargo, no relacionan números entre sí sino, más bien, variables aleatorias. Un ejemplo de modelo probabilístico ---que traté al hablar del modelo 3PL
[aquí](/2023/07/20/coeficientes-no-identificables/)---
es

$$r_{ij} \sim \text{Bernoulli}(p_{ij})$$
$$p_{ij} = p(a_i, d_j, ...)$$
$$a_i \sim N(0, 1)$$
$$d_j \sim N(0, 1)$$
$$\dots$$

que nos permite reconstruir el número de respuestas correctas e incorrectas ($r_{ij} \in \\{0, 1\\}$) en unos exámenes.

Desafortunadamente, el _álgebra_ de variables aleatorias no está tan desarrollada como la que aplica a magnitudes fijas. Es fácil trasladar el valor de un parámetro de un modelo determinista a otro: es un mero copiar y pegar. Pero en la práctica, no está claro cómo trasladar una distribución ---de la que tal vez solo se conozca una muestra--- de un modelo probabilístico a otro.

### III.

A pesar de las similitudes, existe una diferencia fundamental entre los modelos deterministas y los probabilísticos: la relevancia de la _inferencia_. La manera natural de operar con un modelo es la de generar unas salidas a partir de unas entradas. En la ecuación del péndulo, uno puede reemplazar $\theta_0$, $g$, $l$ y $t$ por ciertos valores y obtener una _predicción_ de $\theta(t)$. Pero a veces los modelos se usan _al revés_ para inferir el valor de parámetros a partir de observaciones. Así, el modelo del péndulo podría usarse ---como se ha sucedido históricamente--- para estimar el valor de $g$.

En los modelos probabilísticos la inferencia es prácticamente condición sine qua non. En el modelo probabilístico anterior, se está presumiendo ---pero nada más que eso--- que la dificultad $d_j$ de la pregunta $j$ del examen podría ser cualquier valor razonable de una $N(0, 1)$. Pero a la vista de los datos, se podría acotar esa incertidumbre y mejorar la precisión.

En eso consiste la inferencia.

### IV.

La inferencia puede interpretarse como un operador sobre modelos

$$I(M_0) = M_1.$$

Partiendo de un modelo genérico $M_0$, la inferencia permite crear otro específico $M_1$. Por ejemplo, en el caso del modelo 3PL, como se ha dicho arriba, se parte de un modelo en el que se asume un grado de dificultad genérico, $N(0, 1)$, para las distintas preguntas. A la vista de los datos, gracias a la inferencia, se ha generado un segundo modelo, el $M_1$, que ya permite _resolver_ cuestiones como ¿es la pregunta $1$ más difícil que la $7$?, ¿merece el estudiante $11$ una calificación mayor que el $56$?, etc.

El modelo genérico, obviamente, es incapaz de ello: asume que los alumnos proceden de una población en la que la habilidad tiene una distribución normal estándar, pero son todos indistinguibles entre sí.

La práctica totalidad de los problemas que estudia la estadística se reducen a:

1. Escribir el modelo probabilístico genérico $M_0$.
2. Realizar un proceso inferencial para convertirlo en otro específico $M_1$.
3. Usar $M_1$ para responder preguntas de interés.

(Aunque admito que este programa queda absolutamente ofuscado en los manuales académicos de la materia, proclives a plantear recetas para resolver directamente (3) omitiendo los pasos fundamentales (1) y (2).)

### V.

La entrada de hoy, la primera de un tutorial sobre numpyro, puede parecer atípica y extraña. Baste decir que numpyro es una de las herramientas más adecuadas para completar el programa (1)-(2)-(3) de la sección anterior por dos motivos: expresividad y eficiencia. Veráse.