---
author: Carlos J. Gil Bellosta
date: 2020-07-07 09:13:00+00:00
draft: false
title: Regresión polinómica vs redes neuronales

url: /2020/07/07/regresion-polinomica-vs-redes-neuronales/
categories:
- artículos
- ciencia de datos
tags:
- artículos
- polinomios
- redes neuronales
---

Hace un tiempo se publicó un artículo, _[Polynomial Regression as an Alternative to Neural Nets](https://arxiv.org/abs/1806.06850)_, que se anunciaba como lo que anuncia su título: que usar redes neuronales (clásicas, al menos), equivalía a hacer regresión polinómica.

El quid de la cosa es cosa simple, de primeros de carrera. Solo que los autores solo lo desvelan después de haber puesto a prueba la perseverancia de los lectores con montañas de frases que aportan poco. Así que lo resumo aquí:

1. Caso particular: supóngase una red neuronal simple con dos variables, u y v; supóngase que la función de activación es $latex f(x) = x^2$. Entonces la primera capa es una función cuadrática de u y v. Si hay capas similares a continuación, se obtendrían expresiones polinómicas de grado 4, 6,... en las sucesivas.
2. Caso general: la función de activación ya no es polinómica. Puede ser relu, sigmoide, etc. Pero... se recurre al [teorema de aproximación de Weierstrass](https://es.wikipedia.org/wiki/Teorema_de_aproximaci%C3%B3n_de_Weierstrass) y ya.

Básicamente, que con polinomios se podría, al menos, teóricamente, aproximar cada capa con la precisión que se desee. Así que, todo lo que pueda hacer una red neuronal puede también hacerse usando regresión polinómica, tal vez ayudada de algún tipo de regularización.