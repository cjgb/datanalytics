---
author: Carlos J. Gil Bellosta
date: 2019-09-19 09:13:55+00:00
draft: false
title: Factorización matricial con nulos

url: /2019/09/19/factorizacion-matricial-con-nulos/
categories:
- computación
tags:
- álgebra lineal
- gradiente
- matrices
- optimización
- recomendaciones
---

_In illo tempore_ me llamaba mucho la atención encontrar métodos de ciencia de datos basados en factorización de matrices cuando la matriz a factorizar tenía nulos. Ocurre, por ejemplo, en sistemas de recomendación (cuando un usuario no ha visto o no nos ha dicho si le gusta determinada película).

Y claro, con un nulo en la cosa, te comes los apuntes de álgebra lineal con papas.

¿Cómo se hace? Si buscas $latex U$ y $latex V$ tales que $latex Y = UV^\prime$:

* Consideras los valores de $latex U$ y $latex V$ variables desconocidas.
* Buscas minimizar (deslizándote por el tobogán del gradiente, por ejemplo) la suma de los términos $latex \left(y_{ij} - \sum_k u_{ik} v_{jk}\right)^2$ donde $latex y_{ij}$ no es nulo.

No es lo que nos contaron en álgebra de primero, pero funciona y escala.

Más detalles, [aquí](http://gradientdescending.com/use-more-of-your-data-with-matrix-factorisation/).