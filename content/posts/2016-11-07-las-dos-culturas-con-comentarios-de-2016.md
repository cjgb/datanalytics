---
author: Carlos J. Gil Bellosta
categories:
- estadística
date: 2016-11-07 08:13:03+00:00
draft: false
lastmod: '2025-04-06T18:59:49.006960'
related:
- 2018-07-11-las-tres-culturas.md
- 2021-07-21-quien-invento-los-random-forests.md
- 2016-09-30-sobre-ciencia-de-datos-en-unir-teoria-y-gente.md
- 2018-05-15-gam-vs-rrff-y-en-general-modelos-generativos-vs-cajas-negras.md
- 2014-01-23-en-recuerdo-de-leo-breiman.md
tags:
- breiman
- estadística
- ciencia de datos
title: Las dos culturas, con comentarios de 2016
url: /2016/11/07/las-dos-culturas-con-comentarios-de-2016/
---

En 2012 mencioné de pasada ese [artículo de Breiman](https://datanalytics.com/2012/01/25/limpieza-de-cartera-y-miscelanea-de-articulos/) al que hace referencia el título. Estaba bien, tenía su gracia.

![leo_breiman](/wp-uploads/2016/11/Leo_Breiman.jpg)

Lo he visto utilizar recientemente como punto de partida en discusiones sobre lo distinto o no que puedan ser la ciencia de datos y la estadística. Y espero que, efectivamente, se haya usado como punto de partida y no como otra cosa porque el artículo tiene 15 años (cerrad los ojos y pensad dónde estabais en 2001 y cómo era el mundo entonces).

Por eso escribí recientemente en un foro de discusión privado unas cuantas líneas que creo que merecen ser reproducidas en la ancha internet. Son:

>El artículo del bueno de Leo está muy bien, pero ya tiene sus años. Incluso, me atrevería a decir, ya era viejo cuando se escribió: Breiman fue un pionero y en el artículo se refiere a proyectos de sus años mozos: habla de algunos de los 60, 70, etc.
>
>Pero es viejo no solo por referirse a años en los que no solo no habíamos nacido, ni existía el PC, etc. sino porque no trata algunos de los desarrollos más interesantes sobre la materia que han venido a producirse en los últimos años.
>
>Por ejemplo:
>
>* El trabajo de síntesis de la _escuela de Stanford_ (Hastie, Tibshirani, etc.) que ha dado lugar al llamado Statistical Learning. Que viene a ser el trabajo de unos estadísticos clásicos que han analizado sin prejuicios esas cosas que hacían más o menos justificadamente los del ML. GBM y el archifamoso XGBoost son subproductos de esa escuela.
>* Los _métodos estadísticos_ a los que se refiere el artículo son los métodos estadísticos más clásicos. Que eran, posiblemente, excesivamente simples porque no había ordenadores. Hoy en día pueden usarse modelos generativos (en los que uno define la forma funcional de la respuesta) muy complejos y ajustarlos. Se me ocurren dos tipos de ellos: los modelos probabilísticos gráficos y los bayesianos.
>* En la dirección contraria, está cada vez más constatado cómo las cajas negras son superadas por modelos en los cuales se introduce estructura. Por ejemplo, una red neuronal convolucional es un tipo especial de red neuronal (en la que una serie de coeficientes son cero). Pero funcionan mejor en determinadas tareas. ¿Por qué un modelo concreto supera a uno genérico? ¿Por qué la máquina no ha colocado ceros donde correspondía? ¿Por qué las máquinas no han reinventado la convolución?