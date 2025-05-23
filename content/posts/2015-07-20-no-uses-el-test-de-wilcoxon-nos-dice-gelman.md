---
author: Carlos J. Gil Bellosta
categories:
- estadística
date: 2015-07-20 08:13:59+00:00
draft: false
lastmod: '2025-04-06T18:49:42.693313'
related:
- 2022-06-28-que-hace-avanzar-la-estadistica.md
- 2019-02-11-auc-wilcoxon.md
- 2014-06-10-a-vueltas-con-el-t-test.md
- 2017-12-18-el-z-score-es-una-medida-inadecuada-de-la-perpejidad.md
- 2010-11-23-nuestro-mandato-ordenar-y-simplificar.md
tags:
- stan
- wilcoxon
- gelman
title: No uses el test de Wilcoxon, nos dice Gelman
url: /2015/07/20/no-uses-el-test-de-wilcoxon-nos-dice-gelman/
---

Andrew Gelman nos invita a [no usar más el test de Wilcoxon](http://andrewgelman.com/2015/07/13/dont-do-the-wilcoxon/).

El test de Wilcoxon reemplaza las observaciones obtenidas por sus rangos y construye un estadístico basado en estos últimos. Eso implica descartar información pero puede ayudar a ganar robustez en situaciones en que los datos se desvíen de la normalidad.

¿Qué sugiere Gelman? Que si realmente estamos dispuestos a descartar información, en lugar de reemplazar las observaciones originales por sus rangos, usemos _z-scores_ —los cuantiles de la normal estándar correspondientes a los cuantiles muestrales—, y usemos la teoría _normal_ (en su doble acepción).

De nuevo, según Gelman, la popularidad del test de Wilcoxon se debe a razones históricas. Es otra  consecuencia del hecho de que la estadística se conformase antes de que se popularizasen los ordenadores. Calcular los rangos es una operación mucho más sencilla que obtener cuantiles de la normal estándar si hay que hacerla a mano y consultando tablas en el apéndice de un libro.

Mi comentario: Supongo que algún día habrá que poner orden en el edificio de la estadística e ir enterrando recetas viejunas. Hoy en día se puede operar a partir de principios generales y dejar los detalles a los ordenadores. No es casualidad que esté publicando entradas sobre `stan` recientemente: basta con especificar el modelo probabilístico y lanzar una simulación. Sin embargo, soy consciente de que los recetarios son más fáciles de _enseñar_ y sobre todo, examinar. Morirán despaciosísimamente.