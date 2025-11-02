---
author: Carlos J. Gil Bellosta
categories:
- r
date: 2020-03-26 09:13:00+00:00
draft: false
lastmod: '2025-04-06T18:47:43.799433'
related:
- 2018-03-01-kriging-con-stan.md
- 2020-02-24-to-irls-or-not-to-irls.md
- 2020-09-24-un-decepcionante-metodo-de-inferencia-robusta-para-glms-de-poisson.md
- 2022-11-04-umap-tsne-etc.md
- 2016-03-03-mezclas-de-distribuciones-con-rstan.md
tags:
- artículos
- ash
- densidad
- kernsmooth
- logspline
- paquetes
- r
title: Densidades unidimensionales en R
url: /2020/03/26/densidades-unidimensionales-en-r/
---

Es un asunto tangencial que, además, se soluciona las más de las veces con `density`. Pero parece que tiene mucha más ciencia detrás.

Por algún motivo, acabé un día en la página del paquete [`logspline`](https://CRAN.R-project.org/package=logspline), que ajusta densidades usando _splines_. Su promesa es que puede realizar ajustes de densidades tan _finos_ como

![](/img/2020/03/logspline.png#center)

que está extraído de _[Polynomial Splines and their Tensor Products in Extended Linear Modeling](https://www.jstor.org/stable/2959054?seq=1)_, el artículo que le sirve de base teórica. El algoritmo subyacente es capaz, como da a entender el gráfico anterior, de graduar la resolución en la determinación de la densidad para representar debidamente tanto las zonas con detalles finos sin difuminarlos como las regiones más aburridas sin crear irregularidades espurias.

Es curioso, además, que una técnica para el ajuste de funciones de densidad venga incluida en un artículo sobre _ajustes lineales extendidos_.

De todos modos, para tener una visión más panorámica y con criterio de las técnicas para el ajuste de densidades disponibles en R (y tal vez hace  ya demasiados años) merece la pena echar un vistazo a _[Density estimation in R](https://vita.had.co.nz/papers/density-estimation.pdf)_, que habla de este y otros paquetes y parece decantarse, al final, por `[ash](https://cran.r-project.org/web/packages/ash/)` y `[KernSmooth](https://cran.r-project.org/web/packages/KernSmooth/)`.