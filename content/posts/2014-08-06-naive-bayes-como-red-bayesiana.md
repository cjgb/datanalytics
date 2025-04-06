---
author: Carlos J. Gil Bellosta
categories:
- estadística
date: 2014-08-06 07:13:12+00:00
draft: false
lastmod: '2025-04-06T19:11:02.979116'
related:
- 2012-02-01-la-frontera-bayesiana-en-problemas-de-clasificacion-simples.md
- 2012-05-10-modelos-exponenciales-para-grafos-aleatorios-ii-modelo-probabilistico.md
- 2011-09-19-linked-de-barabasi-capitulo-i.md
- 2014-07-31-combinacion-de-probabilidades.md
- 2018-02-26-lda-para-dummies-y-con-un-ejemplo.md
tags:
- estadística
- estadística bayesiana
- naive bayes
- redes bayesianas
title: Naive Bayes como red bayesiana
url: /2014/08/06/naive-bayes-como-red-bayesiana/
---

Una red bayesiana es [algo de lo que ya hablé](http://www.datanalytics.com/2013/11/19/la-red-asia/) (y que me está volviendo a interesar mucho últimamente). En esencia, es un modelo probabilístico construido sobre un [grafo dirigido acíclico](http://es.wikipedia.org/wiki/Grafo_ac%C3%ADclico_dirigido).

Que, a su vez, es algo parecido a

[![Directed_acyclic_graph](/wp-uploads/2014/08/Directed_acyclic_graph.png#center)
](/wp-uploads/2014/08/Directed_acyclic_graph.png#center)

que es un grafo (obviamente), dirigido (tiene flechas) y acíclico porque siguiéndolas no se llega nunca al punto de partida. Se puede construir modelos probabilísticos sobre ellos. Basta con definir para cada nodo $latex x$ la probabilidad condicional $latex P(x|A(x))$, donde $latex A(x)$ son sus padres directos. Con estas probabilidades condicionales (y un poco de esfuerzo) se puede construir la función de probabilidad completa, $latex P(x_1, \dots, x_n)$.

Los que no sepáis que es eso del [naive Bayes](http://es.wikipedia.org/wiki/Clasificador_bayesiano_ingenuo) estáis de enhorabuena porque os lo voy a contar: es una red bayesiana que tiene esta pinta:

[![naive_bayes](/wp-uploads/2014/08/naive_bayes.png#center)
](/wp-uploads/2014/08/naive_bayes.png#center)

Pensad en $latex y$ como en la variable que indica si un mensaje es _spam_ o no y en $latex x_i$ como en un indicador de si el mensaje contiene alguna palabra clave (p.e., viagra). El hecho de que un mensaje sea o no _spam_ modifica la probabilidad de ocurrencia de dichas palabras. $latex P(x_i | y)$, valor que puede estimarse a partir de una muestra de mensajes.

El hecho de que no haya flechas entre los $latex x_i$ significa que son independientes entre sí (condicionalmente con respecto a $latex y$). Esto es normalmente (siempre) mentira; pero la aproximación es a menudo tolerable.
La probabilidad total de la red es

$$ P(y, x_1,\dots, x_n) = P(x_1,\dots, x_n| y) P(y) = \prod P(x_i | y) P(y).$$

Y lo más importante de todo, conocidos los _indicios_ $latex x_i$, puede estimarse la probabilidad de $latex y$ así:

$$ P(y | x_1,\dots, x_n ) = P(y, x_1,\dots, x_n) / P(y) = \prod P(x_i | y)$$,

que es la fórmula que aparece por doquier y a la que se puede llegar también desde otros puntos de partida alternativos.