---
author: Carlos J. Gil Bellosta
categories:
- estadística
- r
date: 2016-07-13 08:13:39+00:00
draft: false
lastmod: '2025-04-06T18:54:10.352775'
related:
- 2016-04-25-discretizacion-de-variables-continuas-con-arboles.md
- 2024-01-23-arboles-olvidadizos.md
- 2021-10-07-como-aleatorizan-las-columnas-los-rrff-un-experimento-mental-y-una-coda-historica.md
- 2015-01-12-evtree-arboles-globales.md
- 2018-05-15-gam-vs-rrff-y-en-general-modelos-generativos-vs-cajas-negras.md
tags:
- árboles de decisión
- gigerenzer
- r
title: 'Rápido y frugal: una digresión en la dirección inhabitual'
url: /2016/07/13/rapido-y-frugal-una-digresion-en-la-direccion-inhabitual/
---

Siempre (aténganse los puristas al contexto) recomiendo comenzar con un árbol de decisión para, sobre esa base, ensayar métodos más potentes. Sobre todo si la precisión conviene más que la interpretabilidad.

En la dirección opuesta se sitúan los árboles _rápidos y frugales_. Un árbol rápido y frugal es un tipo de árbol de decisión tal como

![fast_frugal_tree](/wp-uploads/2016/07/fast_frugal_tree.png#center)

La restricción que satisface (a diferencia de los árboles de decisión más habituales) es que:

* Las decisiones son binarias (bueno, concedo que casi todos los tipos de árboles usuales son así)
* Cada variable se considera una única vez.
* Excepto en la última rama, o se llega a un nodo terminal o se sigue con el proceso de decisión; de la última rama, obviamente, cuelgan dos nodos terminales.

¿Por qué escribir sobre esto en lugar de hacerlo sobre otra cosa (o sobre ninguna)? Por tres motivos:


1. Que, aunque contraintuitivamente, modelos con restricciones a veces mejoran otros que no las tienen (lo mismo, igual de contraintuitivamente, sucede frecuentemente con la vida, sus restricciones, sus servidumbres y la felicidad).
2. Que [Gigerenzer ha escrito sobre ellos](http://library.mpib-berlin.mpg.de/ft/slu/SLU_Signal_2011.pdf).
3. Que desde hace nada están [disponibles en R](https://cran.r-project.org/web/packages/FFTrees/index.html).