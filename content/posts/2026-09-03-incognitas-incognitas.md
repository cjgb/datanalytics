---
author: Carlos J. Gil Bellosta
categories:
- estadística
date: 2026-09-03
description: 'El trabajo sobre la incertidumbre de Knight es anterior a la axiomatización
  de Kolmogorov y cabe preguntarse: ¿cómo se interpreta desde ella?'
lastmod: '2026-08-28T18:37:00.261062'
related:
- 2011-03-11-riesgo-e-incertidumbre.md
- 2021-10-28-dos-cuestiones-sobre-la-naturaleza-de-la-probabilidad-planteadas-por-keynes-en-1921-pero-que-siguen-hoy-igual-de-vigentes.md
- 2025-12-30-apuestas-vs-probabilidades.md
- 2022-10-04-bayesianismo-frecuentismo-teoria-decision-01.md
- 2022-04-26-redefinicion-probabilidades-subjetivas.md
tags:
- riesgo
- knight
- estadística
- probabilidad
title: Incógnitas incógnitas, una interpretación analítica de la incertidumbre de
  Knight
url: /2026/09/03/incognitas-incognitas/
---

Los libros nos enseñan que un espacio de probabilidad es una terna $(\Omega, \mathcal{F}, \mathbb{P})$ donde $\Omega$ es el conjunto de posibles eventos, $\mathcal{F}$ es una sigma-álgebra sobre $\Omega$ y $\mathbb{P}$ es una función de probabilidad ---un tipo muy especial de medida--- sobre $\Omega$. En lo que sigue sobreentenderemos $\mathcal{F}$ y consideraremos el par $(\Omega, \mathbb{P})$.

Si el par $(\Omega, \mathbb{P})$ es conocido, estamos hablando de teoría de la probabilidad. $\Omega$ pueden ser los números del 1 al 6, $\mathbb{P}(i) = 1/6$, etc. Entonces se pueden plantear y resolver con más o menos dificultad el tipo de problemas de índole deductivo que aparecen al final de los capítulos de los libros en la materia.

Creo que es sabido que en «El Cisne Negro», Taleb se queja de que en una reedición de uno de sus libros, el diseñador había decidido ilustrar la portada con unos dados. Para él, los dados representan algo que llama _aleatoriedad esterilizada_ y que, argumenta, ni se parece en nada a la aleatoriedad que uno encuentra en el mundo real, ni es la que discute en su obra.

En la práctica, es más habitual conocer únicamente $\Omega$ (y algunos indicios de $\mathbb{P}$, típicamente, en forma de muestra de elementos de $\Omega$). El problema que plantea esta situación es el de la estimación de $\mathbb{P}$ y la disciplina que estudia cómo se llama estadística.

La llamada incertidumbre de Knight ocurre cuando el desconocido es $\Omega$. Conocemos algún subconjunto suyo, pero del resto de él solo sabemos que contiene lo que seguramente no soy el primero en denominar en español incógnitas incógnitas (de _unknown unknowns_).

Una situación muy amena ocurre cuando la estadística crea un modelo que por construcción ---mala o interesada--- solo da peso a un subconjunto $\Omega^\prime \subset \Omega$. Luego, andando el tiempo, se observa $x \in \Omega \setminus \Omega^\prime$ y todo el mundo corre como pollo sin cabeza preguntándose: ¿cómo puede haber ocurrido tal cosa? (Como soy hijo de mi tiempo, mientras escribo lo anterior, no puedo dejar de acordarme de aquellos modelos econométricos pre-2008 en los que el precio de los pisos, por decisión de sus autores, solo admitía variaciones positivas).