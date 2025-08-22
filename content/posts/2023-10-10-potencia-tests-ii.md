---
author: Carlos J. Gil Bellosta
categories:
- estadística
date: 2023-10-10
lastmod: '2025-04-06T19:08:22.692227'
related:
- 2023-09-28-potencia-tests.md
- 2017-07-13-gelmaneando.md
- 2019-12-04-p-valores-y-decisiones.md
- 2016-02-03-otra-vuelta-al-caso-del-test-que-rechaza-y-el-intervalo-que-contiene.md
- 2011-01-10-c2bfuna-caida-demasiado-drastica-de-la-varianza.md
tags:
- estadística
- prueba de hipótesis
- potencia
title: ¿Y si calculamos la potencia de un test a posteriori?
url: /2023/10/10/potencia-tests-estadisticos-ii/
---

Esta entrada continúa
[esta otra](https://datanalytics.com/2023/09/28/potencia-tests-estadisticos/)
y describe un cambio realizado en
[la _app_](http://shiny.datanalytics.com/test-power/)
para ilustrar qué ocurre ---_spoiler_: nada bueno--- cuando se calcula el poder de un test _a posteriori_, es decir, usando como estimaciones el efecto y su ruido los valores observados.

Como comprobará quien use la herramienta, puede ocurrir casi cualquier cosa. Y, en particular, para potencias de partida pequeña, la estimación de la potencia _a posteriori_ es una enorme sobreestimación de la real cuando la prueba es significativa.

¡Cuidado!
