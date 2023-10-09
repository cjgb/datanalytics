---
author: Carlos J. Gil Bellosta
date: 2023-10-10
title: '¿Y si calculamos la potencia de un test a posteriori?'

url: /2023/09/28/potencia-tests-estadisticos-ii/
categories:
- estadística
tags:
- estadística
- test de hipótesis
- potencia
---

Esta entrada continúa
[esta otra](https://www.datanalytics.com/2023/09/28/potencia-tests-estadisticos/)
y describe un cambio realizado en
[la _app_](http://shiny.circiter.es/test-power/)
para ilustrar qué ocurre ---_spoiler_: nada bueno--- cuando se calcula el poder de un test _a posteriori_, es decir, usando como estimaciones el efecto y su ruido los valores observados.

Como comprobará quien use la herramienta, puede ocurrir casi cualquier cosa. Y, en particular, para potencias de partida pequeña, la estimación de la potencia _a posteriori_ es una enorme sobreestimación de la real cuando la prueba es significativa.

¡Cuidado!