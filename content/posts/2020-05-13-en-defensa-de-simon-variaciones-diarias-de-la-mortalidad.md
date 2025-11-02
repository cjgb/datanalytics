---
author: Carlos J. Gil Bellosta
categories:
- estadística
- números
date: 2020-05-13 09:13:00+00:00
draft: false
lastmod: '2025-04-06T18:59:34.004587'
related:
- 2018-05-28-los-extranos-numeros-de-los-muertos-en-carretera-por-accidente.md
- 2012-04-30-contar-c2bffacil.md
- 2017-01-18-va-de-si-hay-una-o-dos-lambdas.md
- 2020-03-20-casos-de-coronavirus-en-madrid-provincia-un-modelo-un-poco-menos-crudo-basado-en-la-mortalidad-ii.md
- 2020-10-23-comentarios-varios-sobre-un-articulo-de-el-pais-sobre-momo.md
tags:
- coronavirus
- varianza
- estadística
title: 'En defensa de Simón: variaciones diarias de la  mortalidad'
url: /2020/05/13/en-defensa-de-simon-variaciones-diarias-de-la-mortalidad/
---

Qué cafres tenéis que ser para que tenga que salir yo ---precisamente yo, que tantas cosas no buenas tengo para decir del buen hombre--- en defensa de Simón. Tiene delito que de todo lo que se le pueda echar en cara os hayáis fijado en una intervención en la que os trataba de desasnar para que no le anduviéseis buscando tres pies a la varianza.

Es un tema que vengo tratando de antiguo en estas páginas y de ello dan fe:

* [Esta entrada](https://datanalytics.com/2012/03/07/esperanzador-no-varianzador/) de 2012 donde el INE confunde esperanza con varianza.
* [Esta entrada](https://datanalytics.com/2017/01/18/va-de-si-hay-una-o-dos-lambdas/) de 2017 sobre la _simonada_ anual de la DGT a cuenta de los accidentes de tráfico.
* [Esta](https://datanalytics.com/2020/04/02/pokemoneando-ruido/) más reciente donde acuño un neologismo por ver si con el cachondeíto refrenáis vuestros instintos apofénicos.

Y no hay manera.

Esta es la distribución de las variaciones diarias de las cifras de muertos en MoMo aun sin coronavirus:

![](/img/2020/05/variaciones_diarias.png#center)

De un día para otro puedes encontrar variaciones de esa magnitud a nivel nacional por motivos puramente causales. Tanta es la variabilidad que el accidente del metro de Valencia de 2006 ni se notaría. El del Spanair de 2008, a costa de un cuarto de dioptría. Etc.

El modelo _natural_ para la mortalidad (en primera aproximación) es el de Poisson, que, como _todo el mundo_ sabe, tiene la varianza igual a la media. Las variaciones diarias deberían estar típicamente en el rango de $\pm 2\sigma$ simplemente porque sí.

En fin, seguiremos insistiendo.