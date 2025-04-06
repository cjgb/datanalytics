---
author: Carlos J. Gil Bellosta
categories:
- probabilidad
date: 2020-05-05 09:51:07+00:00
draft: false
lastmod: '2025-04-06T19:10:57.754925'
related:
- 2018-10-11-un-resultado-probabilistico-contraintuitivo-y-ii.md
- 2014-02-18-el-yuyuplot-en-perspectiva.md
- 2010-10-29-c2a1que-mala-suerte-tengo-con-las-anomalias.md
- 2024-02-29-letf.md
- 2023-02-07-numpyro-predictions.md
tags:
- bolsa
- hypermind
- probabilidad
- movimiento browniano
title: Movimientos brownianos y barreras
url: /2020/05/05/movimientos-brownianos-y-barreras/
---

En [Hypermind](https://predict.hypermind.com/dash/dash/dash.html?list=ECO) se está planteando esta cuestión:

![](/wp-uploads/2020/05/sp500.png#center)

A día de hoy, el S&P 500 está en 2830. La predicción está y viene estando aproximadamente alrededor de la regla de tres:

$$ \frac{s - 2000}{3000 - 2000} \times 100\%$$

donde $latex s$ es la cotización del índice.

Y aquí vienen dos preguntas/ejercicios para mis lectores:

* Suponiendo que el S&P 500 se comportase como un movimiento browniano (sin _drift_), ¿sería precisa la regla anterior?
* ¿Y si los saltos no fuesen normales sino, p.e., de acuerdo con una t de Student?