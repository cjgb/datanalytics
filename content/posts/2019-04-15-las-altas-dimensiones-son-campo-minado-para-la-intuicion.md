---
author: Carlos J. Gil Bellosta
date: 2019-04-15 09:13:16+00:00
draft: false
title: Las altas dimensiones son campo minado para la intuición

url: /2019/04/15/las-altas-dimensiones-son-campo-minado-para-la-intuicion/
categories:
- estadística
tags:
- bolas
- estadística bayesiana
- multidimensionalidad
- posteriori
---




Las dimensiones altas son un campo minado para la intuición. Hace poco (y he perdido la referencia) leí a un matemático que trabajaba en problemas en dimensiones altas decir que le gustaba representar y pensar en las _bolas_ (regiones del espacio a distancia <1 de 0) en esos espacios usando figuras cóncavas, como las que aparecen a la izquierda de





![](/wp-uploads/2019/04/bolas_metricas_alt.png)






precisamente porque una de las propiedades más fructíferas de las bolas en altas dimensiones es que apenas tienen interior. De hecho, es trivial probar que la proporción del volumen de una bola a distancia mayor que $latex \epsilon$ de su borde tiende a cero con la dimensión.







Si tienes $latex n$ variables continuas, el número de cuadrantes del espacio en el que viven es $latex 2^n$. Con 20 variables, son un millón (aproximado) de cuadrantes. ¡Una muestra de menos de un millón de datos ni siquiera podría explorarlos todos!







Por  eso, cuando se usa MCMC en dimensiones altas, [no tiene mucho sentido decir que el proceso muestrea la ](https://statmodeling.stat.columbia.edu/2019/03/25/mcmc-does-not-explore-posterior/)_[posteriori](https://statmodeling.stat.columbia.edu/2019/03/25/mcmc-does-not-explore-posterior/)_. Lo que ocurre es otra cosa distinta. Útil, sí, pero distinta.



