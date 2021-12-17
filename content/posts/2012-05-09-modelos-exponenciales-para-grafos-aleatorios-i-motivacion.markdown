---
author: Carlos J. Gil Bellosta
date: 2012-05-09 06:58:00+00:00
draft: false
title: 'Modelos exponenciales para grafos aleatorios (I): motivación'

url: /2012/05/09/modelos-exponenciales-para-grafos-aleatorios-i-motivacion/
categories:
- estadística
tags:
- estadística
- redes sociales
---

Sea un colegio y $latex a_i$ sus alumnos. Sea $latex y_{ij} \in \{0,1\}$ el indicador de que el alumno _i_ es amigo del alumno _j_. Con eso tenemos montado un grafo (o, si se prefiere, una red social).

Muchos análisis que se hacen sobre este tipo de redes son meramente descriptivos pero, ¿es posible la inferencia sobre este tipo de conjunto de datos?

Por ejemplo, en el grafo que describo más arriba, cabría preguntarse si hay reciprocidad, es decir, si $latex P( y_{ij} = 1 | y_{ji} = 1 )$ es mucho mayor que $latex P( y_{ij} = 1 | y_{ji} = 0)$. O dicho de otro modo, si el que Juan sea amigo de Pedro incrementa notablemente la probabilidad de que Pedro también se considere amigo de Juan.

¿De qué modo puede medirse este tipo de características en una red? ¿Qué tipo de parámetro puede estimarse (preferiblemente con sus intervalos de confianza) que muestre que en el grafo existe una predisposición a la reciprodidad?

Aparte de este tipo de relaciones, existen otras muchas que los expertos buscan en sus conjuntos de datos. Por ejemplo, algunas de las siguientes:


[![](/wp-uploads/2012/05/configuraciones_grafos.png)
](/wp-uploads/2012/05/configuraciones_grafos.png)

A este tipo de preguntas aspiran a dar respueta los llamados modelos exponenciales para grafos aleatorios, cuyos rudimentos expondremos mañana.

