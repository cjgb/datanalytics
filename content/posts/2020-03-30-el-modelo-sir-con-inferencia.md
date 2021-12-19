---
author: Carlos J. Gil Bellosta
date: 2020-03-30 10:32:56+00:00
draft: false
title: El modelo SIR con inferencia

url: /2020/03/30/el-modelo-sir-con-inferencia/
categories:
- estadística
tags:
- epidemiología
- odes
- sir
- stan
---

El [modelo SIR](https://freakonometrics.hypotheses.org/60482) es deductivo: dados una serie de parámetros, plantea una ecuación diferencial cuya solución es perfectamente limpia y determinista, tal como gusta a matemáticos y físicos:

![](/wp-uploads/2020/03/SIR1-1024x556.png)

Pero, ¿quién y cómo le pone al gato el cascabel de determinar los parámetros más adecuados para el modelo? Los parámetros son inciertos, ruidosos y producto de los datos que el modelo mismo quiere representar. Lo suyo sería enlazar la ecuación diferencial

![](/wp-uploads/2020/03/sir_ode.png)

con los datos observados

![](/wp-uploads/2020/03/sir_ode_stan.png)

y modelar todo conjuntamente. Como [aquí](https://arxiv.org/pdf/1903.00423.pdf).