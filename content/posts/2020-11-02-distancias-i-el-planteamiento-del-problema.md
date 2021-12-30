---
author: Carlos J. Gil Bellosta
date: 2020-11-02 09:13:00+00:00
draft: false
title: 'Distancias (I): el planteamiento del problema'

url: /2020/11/02/distancias-i-el-planteamiento-del-problema/
categories:
- consultoría
- estadística
tags:
- consultoría
- distancia
---

Me han pedido (vía Twitter) que desarrolle cosas que tengo por ahí desperdigadas (p.e., en las notas de esos cursos que ya no daré y puede que en algunas entradas viejunas de este blog) sobre distancias.

**¿Por qué son importantes las distancias?** Por un principio que no suele ser explicitado tanto como merece en _ciencia de datos_: si quieres saber algo sobre un sujeto, busca unos cuantos parecidos y razona sobre ellos.

**¿Algunos ejemplos del uso de distancias en _ciencia de datos_?** P.e., al aplicar técnicas de _clústering_, en los (muy habitualmente infraestimados) _k-vecinos_. Aunque también en lugares insospechados (corolarios del principio enunciado en el párrafo anterior) tales como [este](https://medium.com/responsibleml/whats-new-in-dalex-and-dalextra-a75e5cebff0e), donde para medir la bondad de, explicar y entender una predicción (construida con cualquier tipo de modelo), sugieren crear gráficos tales como

![Image for post](https://miro.medium.com/max/3600/1*nuIA9zWQHEy_IzvK_VTm-Q.png#center)

donde se compara de cierta manera (que no ha lugar desarrollar aquí) la observación de interés con _sus 50 vecinos_.

**¿Dónde radica el principal problema del uso de distancias en _ciencia de datos_?** Sin duda ninguna, en cómo se enseña el asunto, que no tiene prácticamente nada que ver con cómo emerge luego en las aplicaciones. No hay fuente que conozca que no introduzca el asunto usando puntos en el plano (y usando la distancia euclídea) y pocos van algo más allá.

Ese caso de uso tiene cierto interés en algún tipo de aplicaciones (con imágenes, supongo) no centrales en lo que suele consistir la práctica de la _ciencia de datos_. Por dos motivos relacionados:

* Porque las/esas distancias son distancias (matemáticas).
* Por la homogeneidad (y más: invariancia frente a rotaciones, traslaciones, etc.) de ese tipo de datos.

Dejo el asunto aquí y en una siguiente entrada trataré el asunto de por qué las distancias (que encontramos en la práctica) no son distancias (de las que nos hablan los libros).