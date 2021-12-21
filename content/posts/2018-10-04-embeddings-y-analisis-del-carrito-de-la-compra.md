---
author: Carlos J. Gil Bellosta
date: 2018-10-04 08:13:34+00:00
draft: false
title: '"Embeddings" y análisis del carrito de la compra'

url: /2018/10/04/embeddings-y-analisis-del-carrito-de-la-compra/
categories:
- consultoría
- estadística
tags:
- arules
- embeddings
- factorización
- nmf
- paquetes
- r
---

Escribiendo la [entrada del otro día sobre _embeddings_](https://www.datanalytics.com/2018/10/03/de-que-matriz-son-los-embeddings-una-factorizacion/#comments), no se me pasó por alto que la fórmula


$$ \frac{P(W_i,C_i)}{P(W_i)P(C_i)}$$


que escribí en ella es análoga al llamado _lift_ (¿es el _lift_?) del llamado análisis del carrito de la compra, i.e., el estudio de productos que tienden a comprarse juntos (véase, por ejemplo, [esto](https://rpubs.com/Joaquin_AR/397172)).

Lo cual me lleva a sugerir mas no escribir una entrada en la que se rehagan este tipo de análisis usando _embeddings_: los _ítems_ como palabras, los _carritos_ como textos, etc. Si alguien tiene tiempo y le sale algo potable, que avise y lo enlazo aquí.

**Nota:** Para este tipo de análisis prefiero siempre la [factorización no negativa de matrices](https://www.datanalytics.com/2014/06/19/factorizaciones-positivas-de-matrices-igualmente-positivas/). Es otra factorización, sí, pero que tiene más estructura. Quien renuncia a la estructura, deja dinero encima de la mesa.
