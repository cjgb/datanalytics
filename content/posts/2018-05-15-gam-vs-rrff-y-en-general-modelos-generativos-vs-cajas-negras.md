---
author: Carlos J. Gil Bellosta
categories:
- consultoría
- estadística
date: 2018-05-15 08:13:29+00:00
draft: false
lastmod: '2025-04-06T18:56:21.880949'
related:
- 2024-09-12-cortos-stats.md
- 2016-11-07-las-dos-culturas-con-comentarios-de-2016.md
- 2018-07-11-las-tres-culturas.md
- 2017-12-19-mezcolanza-de-inla-a-gam-pasando-por-la-frenologia.md
- 2019-05-31-modelos-garch-o-no-me-cuentes-tu-vida-dame-el-p-modelo-generativo-y-ya.md
tags:
- breiman
- estadística
- gam
- random forests
- series temporales
title: gam vs rrff (y, en general, modelos generativos vs cajas negras)
url: /2018/05/15/gam-vs-rrff-y-en-general-modelos-generativos-vs-cajas-negras/
---

Para modelizar una serie temporal, y simplificándolo mucho, ¿gam o rrff? Como todo, depende. El otro día oí de un caso en el que los segundos vencían a los primeros claramente. Natural.

Hay contextos con una estructura matemática clara y potente. En particular, muchos en los que trabajo actualmente. ¿Para qué usar una herramienta genérica cuando cuento con una específica? Esos datos, mis datos, exigen estructura matemática.

Luego hay otros casos en los que uno se lanza al río. Luego uno siempre quiere invertir el proceso y ver qué carajos está ocurriendo con los datos (véase [esto](https://shiring.github.io/machine_learning/2017/04/23/lime)).

Resuenan ecos de las _dos culturas_ (último de los artículos citados [aquí](https://datanalytics.com/2012/01/25/limpieza-de-cartera-y-miscelanea-de-articulos/)) de Breiman. Y argumento que no son dos culturas sino dos tipos de problemas distintos que exigen tratamientos distintos. Más propiamente, dos extremos puros de los que participan en mayor o menos grado problemas concretos.

[Dicho lo cual, voy a coger el GAM que me trae medio crucificado y a estudiar vía rrff el efecto de una variable sobre los residuos para ver si transciendo de alguna manera la relación lineal, demasiado simple, entre cierta variable y el efecto de interés.]