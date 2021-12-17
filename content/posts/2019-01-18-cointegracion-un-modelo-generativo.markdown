---
author: Carlos J. Gil Bellosta
date: 2019-01-18 08:13:51+00:00
draft: false
title: 'Cointegración: un modelo generativo'

url: /2019/01/18/cointegracion-un-modelo-generativo/
categories:
- estadística
tags:
- cointegración
- series temporales
- stan
---




_[Esta entrada tiene que ver con una nueva manía que he adquirido con la edad: construir modelos generativos para esos modelos explicados siempre de una manera sumamente críptica.]_







La cointegración es una relación muy particular entre dos (o más) series temporales. Una de ellas, $latex x_t$ puede ser cualquiera. Tanto da. Vamos a construir la cointegrada, $latex y_t$. Para ello, primero, necesitamos una serie más, una serie estacionaria, p.e., $latex \nu_t$. Puede ser un ruido blanco, pero también una serie ARMA cualquiera (aunque siempre estacionaria). Por ser estacionaria, la serie $latex \nu_t$ no se aleja nunca demasiado de su valor medio, que podemos suponer cero.







Para valores $latex a$ y $latex b$ cualesquiera, la serie $latex y_t = a + bx_t+ \nu_t$ está, se dice, cointegrada con $latex x_t$. En particular, si $latex b = 1$, las series se moverían casi en paralelo.







Los interesados tienen [aquí](http://tharte.github.io/mbt/mbt.html#sec-4) un estudio sobre la cointegración (o no) de dos series temporales usando Stan y un par de atajos que el autor espera que aceptemos sin arquear las cejas (el primero, ¿por qué OLS?; el segundo, de todas las posibles especificaciones para al serie de diferencias, ¿por qué AR(1)?).



