---
author: Carlos J. Gil Bellosta
categories:
- estadística
- r
date: 2020-03-10 09:13:00+00:00
draft: false
lastmod: '2025-04-06T19:08:13.665526'
related:
- 2021-09-21-aun-mas-sobre-propagacion-de-errores-y-rv.md
- 2017-05-24-aquellos-que-ignoran-la-estadistica-etcetera.md
- 2020-02-03-el-metodo-delta-ahora-con-nimble.md
- 2020-01-22-siete-llaves-al-sepulcro-del-metodo-delta.md
- 2018-10-23-abc-2.md
tags:
- método delta
- paquetes
- propagate
- simulación
- error
title: 'Más sobre el "método delta": propagate'
url: /2020/03/10/mas-sobre-el-metodo-delta-propagate/
---

Por referencia y afán de completar dos entradas que hice hace un tiempo sobre el método delta, [esta](https://datanalytics.com/2020/01/22/siete-llaves-al-sepulcro-del-metodo-delta/) y [esta](https://datanalytics.com/2020/02/03/el-metodo-delta-ahora-con-nimble/), dejo constar mención al paquete [`propagate`](https://CRAN.R-project.org/package=propagate), que contiene métodos para la _propagación de la incertidumbre_.

Para desavisados: si $latex x \sim N(5,1)$ e $latex y \sim N(10,1)$, ¿cómo sería la distribución de $latex x/y$? Etc.