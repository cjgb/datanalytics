---
author: Carlos J. Gil Bellosta
categories:
- estadística
- probabilidad
date: 2012-05-10 06:46:30+00:00
draft: false
lastmod: '2025-04-06T19:05:02.265581'
related:
- 2012-05-09-modelos-exponenciales-para-grafos-aleatorios-i-motivacion.md
- 2012-05-18-modelos-exponenciales-para-grafos-aleatorios-y-iii-inferencia.md
- 2011-09-19-linked-de-barabasi-capitulo-i.md
- 2016-02-26-hay-una-epidemia-en-mi-grafo.md
- 2014-08-06-naive-bayes-como-red-bayesiana.md
tags:
- estadística
- probabilidad
- redes sociales
- grafos
title: 'Modelos exponenciales para grafos aleatorios (II): modelo probabilístico'
url: /2012/05/10/modelos-exponenciales-para-grafos-aleatorios-ii-modelo-probabilistico/
---

Ayer dejamos abierto el [problema de la inferencia en grafos](https://datanalytics.com/2012/05/09/modelos-exponenciales-para-grafos-aleatorios-i-motivacion/). La idea fundamental es la de suponer que un grafo determinado no es tanto _un grafo en sí_ como una realización de un proceso aleatorio de generación de aristas entre un determinado número de nodos.

El planteamiento es análogo al que se hace con las series temporales: no es tan importante la serie en sí como el hecho de que pueda probarse que obedece a un modelo autorregresivo, ARIMA, etc.

Una serie amplia de modelos de grafos aleatorios caen dentro de los llamados modelos exponenciales. Fijado el número de vértices, la probabilidad de observar el grafo $latex y$ (puede suponerse que) es

$$ P(Y = y) = c \exp \left( \sum_A \eta_A g_A(y) \right)$$

donde $latex c$ es una constante normalizadora, $latex \eta_A$ es un parámetro (similar al de las regresiones) y $latex g_A(y) \in \{0,1\}$ indica si la _configuración_ A está o no presente en el grafo.

Una configuración es... un patrón. El concepto se comprende mejor a través de ejemplos. Y el más simple es el de una arista (que podría representar un vínculo de amistad entre Juan y Pedro). O un triángulo (Juan, Pedro y Tomás son mutuamente amigos). O cualquiera de los que aparecen en el siguiente gráfico:

[![](/wp-uploads/2012/05/configuraciones_grafos.png#center)
](/wp-uploads/2012/05/configuraciones_grafos.png#center)

El modelo probabilístico para un grafo en el que cada arista $latex y_{ij}$ tiene una probabilidad dada de ocurrir sería, por lo tanto,

$$ P(Y = y) = c \exp \left( \sum_{ij} \eta_{ij} I_{ij} \right)$$

donde $latex I_{ij}$ indica si existe o no la arista entre los nodos _i_ y _j_. Si cada arista tiene la misma probabilidad, quedaría, todavía de manera más simple,

$$ P(Y = y) = c \exp \left( \eta L(y) \right)$$

donde $latex L(y)$ es el número de aristas. Si se quiere estudiar si el grafo tiene tendencia a organizarse creando triángulos (es decir, que el amigo de mi amigo tiene cierta propensión a ser también mi amigo), pueden plantearse modelos del tipo

$$ P(Y = y) = c \exp \left( \eta L(y) + \theta T(y) \right)$$

donde $latex T(y)$ es el número de triángulos que aparecen en el grafo.

Una vez planteado el marco probabilístico, queda plantearse la estimación de los parámetros y la inferencia, que permite encontrar resupuestas a preguntas del tipo:

* ¿muestra mi grafo una tendencia significativa a las relaciones recíprocas?
* ¿tiende mi grafo de una manera significativa a crear triángulos, i.e., relaciones transitivas?

Queda pendiente para una futura entrada.