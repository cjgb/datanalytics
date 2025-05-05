---
author: Carlos J. Gil Bellosta
categories:
- consultoría
- estadística
date: 2018-10-04 08:13:34+00:00
draft: false
lastmod: '2025-04-06T18:54:40.854723'
related:
- 2014-06-19-factorizaciones-positivas-de-matrices-igualmente-positivas.md
- 2018-10-03-de-que-matriz-son-los-embeddings-una-factorizacion.md
- 2014-07-16-dos-descomposiciones-positivas-de-tablas-de-contingencia.md
- 2015-09-14-nmf-una-tecnica-mergente-de-analisis-no-supervisado.md
- 2022-09-01-tf-idf.md
tags:
- arules
- embeddings
- factorización
- nmf
- paquetes
- r
title: '"Embeddings" y análisis del carrito de la compra'
url: /2018/10/04/embeddings-y-analisis-del-carrito-de-la-compra/
---

Escribiendo la [entrada del otro día sobre _embeddings_](https://datanalytics.com/2018/10/03/de-que-matriz-son-los-embeddings-una-factorizacion/#comments), no se me pasó por alto que la fórmula


$$ \frac{P(W_i,C_i)}{P(W_i)P(C_i)}$$


que escribí en ella es análoga al llamado _lift_ (¿es el _lift_?) del llamado análisis del carrito de la compra, i.e., el estudio de productos que tienden a comprarse juntos (véase, por ejemplo, [esto](https://rpubs.com/Joaquin_AR/397172)).

Lo cual me lleva a sugerir mas no escribir una entrada en la que se rehagan este tipo de análisis usando _embeddings_: los _ítems_ como palabras, los _carritos_ como textos, etc. Si alguien tiene tiempo y le sale algo potable, que avise y lo enlazo aquí.

**Nota:** Para este tipo de análisis prefiero siempre la [factorización no negativa de matrices](https://datanalytics.com/2014/06/19/factorizaciones-positivas-de-matrices-igualmente-positivas/). Es otra factorización, sí, pero que tiene más estructura. Quien renuncia a la estructura, deja dinero encima de la mesa.