---
author: Carlos J. Gil Bellosta
categories:
- estadística
date: 2019-01-18 08:13:51+00:00
draft: false
lastmod: '2025-04-06T18:46:22.674905'
related:
- 2018-11-16-colinealidad-y-posterioris.md
- 2012-06-25-para-los-expertos-en-series-estadisticas-ii.md
- 2020-09-08-mas-sobre-variables-instrumentales-con-r.md
- 2019-05-31-modelos-garch-o-no-me-cuentes-tu-vida-dame-el-p-modelo-generativo-y-ya.md
- 2022-03-03-error-sesgo-modelos-lineales.md
tags:
- cointegración
- series temporales
- stan
title: 'Cointegración: un modelo generativo'
url: /2019/01/18/cointegracion-un-modelo-generativo/
---

_[Esta entrada tiene que ver con una nueva manía que he adquirido con la edad: construir modelos generativos para esos modelos explicados siempre de una manera sumamente críptica.]_

La cointegración es una relación muy particular entre dos (o más) series temporales. Una de ellas, $x_t$ puede ser cualquiera. Tanto da. Vamos a construir la cointegrada, $y_t$. Para ello, primero, necesitamos una serie más, una serie estacionaria, p.e., $\nu_t$. Puede ser un ruido blanco, pero también una serie ARMA cualquiera (aunque siempre estacionaria). Por ser estacionaria, la serie $\nu_t$ no se aleja nunca demasiado de su valor medio, que podemos suponer cero.

Para valores $a$ y $b$ cualesquiera, la serie $y_t = a + bx_t+ \nu_t$ está, se dice, cointegrada con $x_t$. En particular, si $b = 1$, las series se moverían casi en paralelo.

Los interesados tienen [aquí](http://tharte.github.io/mbt/mbt.html#sec-4) un estudio sobre la cointegración (o no) de dos series temporales usando Stan y un par de atajos que el autor espera que aceptemos sin arquear las cejas (el primero, ¿por qué OLS?; el segundo, de todas las posibles especificaciones para al serie de diferencias, ¿por qué AR(1)?).