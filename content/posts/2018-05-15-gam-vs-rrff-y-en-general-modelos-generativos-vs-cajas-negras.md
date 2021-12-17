---
author: Carlos J. Gil Bellosta
date: 2018-05-15 08:13:29+00:00
draft: false
title: gam vs rrff (y, en general, modelos generativos vs cajas negras)

url: /2018/05/15/gam-vs-rrff-y-en-general-modelos-generativos-vs-cajas-negras/
categories:
- consultoría
- estadística
tags:
- breiman
- estadística
- gam
- random forests
- series temporales
---

Para modelizar una serie temporal, y simplificándolo mucho, ¿gam o rrff? Como todo, depende. El otro día oí de un caso en el que los segundos vencían a los primeros claramente. Natural.

Hay contextos con una estructura matemática clara y potente. En particular, muchos en los que trabajo actualmente. ¿Para qué usar una herramienta genérica cuando cuento con una específica? Esos datos, mis datos, exigen estructura matemática.

Luego hay otros casos en los que uno se lanza al río. Luego uno siempre quiere invertir el proceso y ver qué carajos está ocurriendo con los datos (véase [esto](https://shiring.github.io/machine_learning/2017/04/23/lime)).

Resuenan ecos de las _dos culturas_ (último de los artículos citados [aquí](https://www.datanalytics.com/2012/01/25/limpieza-de-cartera-y-miscelanea-de-articulos/)) de Breiman. Y argumento que no son dos culturas sino dos tipos de problemas distintos que exigen tratamientos distintos. Más propiamente, dos extremos puros de los que participan en mayor o menos grado problemas concretos.

[Dicho lo cual, voy a coger el GAM que me trae medio crucificado y a estudiar vía rrff el efecto de una variable sobre los residuos para ver si transciendo de alguna manera la relación lineal, demasiado simple, entre cierta variable y el efecto de interés.]
