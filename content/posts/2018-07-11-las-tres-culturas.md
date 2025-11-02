---
author: Carlos J. Gil Bellosta
categories:
- estadística
date: 2018-07-11 08:13:37+00:00
draft: false
lastmod: '2025-04-06T18:57:10.000440'
related:
- 2016-11-07-las-dos-culturas-con-comentarios-de-2016.md
- 2018-05-15-gam-vs-rrff-y-en-general-modelos-generativos-vs-cajas-negras.md
- 2019-07-16-abundando-en-la-discusion-sobre-matematicas-y-o-informatica.md
- 2014-02-27-d-hand-sobre-estadistica-y-mineria-de-datos.md
- 2019-03-27-sobre-la-necesaria-validacion-a-posteriori-de-modelos-de-caja-negra.md
tags:
- breiman
- estadística
- modelos generativos
- stan
title: Las tres culturas
url: /2018/07/11/las-tres-culturas/
---

Breiman habló de [las dos](https://datanalytics.com/2016/11/07/las-dos-culturas-con-comentarios-de-2016/). Dice, y tiene razón, que:

![](/img/2018/07/breiman_nature.png#center)

Según él, la estadística tradicional _rellena_ la caja negra con:

![](/img/2018/07/breiman_statistics.png#center)

¡Aburrido, aburrido, aburrido! Aburrido y limitado (aunque, hay que admitirlo, útil en ocasiones muy concretas). Breiman sugiere sustituir las cajas negras que encontramos en la naturaleza por otras cajas negras conceptuales:

![](/img/2018/07/breiman_ml.png#center)

Que es aún más aburrido y patrimonio, además, de toda suerte de _script kiddies_.

La tercera cultura reemplaza la caja negra por un modelo generativo que simula el comportamiento de la naturaleza (i.e., del sistema generador de números aleatorios pero con estructura). Y usa Stan (o sus alternativas) para estimar, predecir y, en última instancia, facilitar [decisiones informadas](https://datanalytics.com/2018/05/22/existira-algun-caso-de-uso-de-la-estadistica-que-no-sea-materia-prima-para-la-toma-de-decisiones-informadas/).