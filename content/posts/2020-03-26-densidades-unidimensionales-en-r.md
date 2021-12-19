---
author: Carlos J. Gil Bellosta
date: 2020-03-26 09:13:00+00:00
draft: false
title: Densidades unidimensionales en R

url: /2020/03/26/densidades-unidimensionales-en-r/
categories:
- r
tags:
- artículos
- ash
- densidad
- kernsmooth
- logspline
- paquetes
- r
---

Es un asunto tangencial que, además, se soluciona las más de las veces con `density`. Pero parece que tiene mucha más ciencia detrás.

Por algún motivo, acabé un día en la página del paquete [`logspline`](https://CRAN.R-project.org/package=logspline), que ajusta densidades usando _splines_. Su promesa es que puede realizar ajustes de densidades tan _finos_ como

![](/wp-uploads/2020/03/logspline.png)

que está extraído de _[Polynomial Splines and their Tensor Products in Extended Linear Modeling](https://www.jstor.org/stable/2959054?seq=1)_, el artículo que le sirve de base teórica. El algoritmo subyacente es capaz, como da a entender el gráfico anterior, de graduar la resolución en la determinación de la densidad para representar debidamente tanto las zonas con detalles finos sin difuminarlos como las regiones más aburridas sin crear irregularidades espurias.

Es curioso, además, que una técnica para el ajuste de funciones de densidad venga incluida en un artículo sobre _ajustes lineales extendidos_.

De todos modos, para tener una visión más panorámica y con criterio de las técnicas para el ajuste de densidades disponibles en R (y tal vez hace  ya demasiados años) merece la pena echar un vistazo a _[Density estimation in R](https://vita.had.co.nz/papers/density-estimation.pdf)_, que habla de este y otros paquetes y parece decantarse, al final, por `[ash](https://cran.r-project.org/web/packages/ash/)` y `[KernSmooth](https://cran.r-project.org/web/packages/KernSmooth/)`.