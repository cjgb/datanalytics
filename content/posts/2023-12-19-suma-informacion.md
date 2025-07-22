---
author: Carlos J. Gil Bellosta
categories:
- ciencia de datos
date: 2023-12-19
draft: false
lastmod: '2025-04-06T19:12:56.219553'
related:
- 2018-10-03-de-que-matriz-son-los-embeddings-una-factorizacion.md
- 2022-09-27-uso-abuso-embeddings.md
- 2024-05-07-cortos.md
- 2016-09-01-mezclas-de-vectores-i-casi-todas-las-matematicas-de-la-cosa.md
- 2024-07-18-cortos-llms.md
tags:
- ia
- información
- redes neuronales
- llms
title: Chocolatada informacional
url: /2023/12/19/informacion-posicional-transformers/
---

Supongamos que el vector $u$ codifica cierta información A y el vector $v$ (de la misma dimensión), la información B. Hay quien sostiene que, entonces, el vector $u + v$ codifica simultáneamente A y B. En esta entrada voy a _demostrar_ que la afirmación anterior es falsa. Luego, también, que es cierta. Terminaré explicando por qué el asunto es relevante.

Que es falsa es obvio: si $u$ y $v$ tienen dimensión 1, $u = 2$ y $v = 3$, a partir de la suma $u + v = 5$ es imposible recomponer los vectores originales.

Que es cierta es algo a lo que estamos inconscientemente acostumbrados. Un programa de radio _es_ una onda electromagnética que puede codificarse, muestreando adecuadamente, mediante un vector. Otro programa de radio simultáneo de otra emisora es otro vector. Lo que llega a mi casa es la suma de ambos (y de otras muchas emisiones e interferencias). Pero mi aparato de radio es capaz de reconstruir los vectores individualmente: puedo escuchar una u otra emisión indistintamente.

Pero, ¿por qué es relevante? En el mundo de los LLMs (y no solo), lo de sumar vectores para combinar fuentes de información es poco más o menos un truco rutinario que se aplica y ---se _explica_--- sin mayor cualificación. Por ejemplo, en el ya clásico [_Attention is all you need_](https://arxiv.org/pdf/1706.03762.pdf) se lee

![](/wp-uploads/2023/attention-all-you-need.png#center)

Notas:
* [Otros autores](https://www.youtube.com/watch?v=kCc8FmEb1nY) usan versiones distintas de lo anterior, p.e., ¡eliminando directamente las funciones trigonométricas!.
* Interesante la _demostración_ que se ofrece en el artículo, ¿no?

Lo que está sucediendo es algo como lo que se cuenta a continuación. Supongamos que en el contexto del LLM están los _tokens_ (en ese orden) $t_1, t_2, \dots, t_n$ con _embeddings_ asociados $v_1, v_2, \dots, v_n$. En el bloque de atención del decodificador (y también del codificador), lo que se procesa no son los vectores $v_1, v_2, \dots, v_n$ directamente, que no tienen _información posicional_ (es decir, sobre el orden en el que aparecen en el contexto) sino los vectores $v_1 + f(1), v_2 + f(2), \dots, v_n + f(n)$ para una cierta función $f$ de la posición que ocupa el _token_ en el contexto. Con la esperanza, _casualísimamente_ satisfecha, de que el vector resultante combine tanto la información semántica contenida en los _embeddings_ como la posicional aportada por el vector $f(i)$. O eso dicen.

En fin.