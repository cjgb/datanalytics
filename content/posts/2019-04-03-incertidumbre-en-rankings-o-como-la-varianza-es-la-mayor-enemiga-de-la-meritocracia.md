---
author: Carlos J. Gil Bellosta
categories:
- artículos
- estadística
date: 2019-04-03 19:27:36+00:00
draft: false
lastmod: '2025-04-06T19:07:59.663837'
related:
- 2012-06-13-rankings-de-colegios-problemas-y-alternativas.md
- 2020-02-06-model4you.md
- 2024-07-03-cortos-stats.md
- 2012-07-30-la-media-y-el-riesgo-de-nuevo.md
- 2012-07-06-el-precio-de-la-desigualdad-i-e-el-boson-de-higgs-y-fracciones.md
tags:
- mérito
- modelos mixtos
- rankings
- spiegelhalter
- varianza
title: Incertidumbre en ránkings (o cómo la varianza es la mayor enemiga de la meritocracia)
url: /2019/04/03/incertidumbre-en-rankings-o-como-la-varianza-es-la-mayor-enemiga-de-la-meritocracia/
---

Tengo por ahí leído y encolado el artículo _[League Tables and Their Limitations: Statistical Issues in Comparisons of Institutional Performance](http://www.bristol.ac.uk/media-library/sites/cmm/migrated/documents/statistical-issues-for-league-tables1.pdf)_ del perínclito Spiegelhalter que toma una serie de _ránkings_ (de colegios, de hospitales) y trata de medir cuánto tienen de sustancia y cuánto de ruido.

Hace cosas muy similares a las que escribí [aquí](https://datanalytics.com/2016/03/18/modelos-mixtos-para-preprocesar-de-datos-en-un-sistema-de-recomendacion-de-drogas/). Mi entrada, además, cuenta con la ventaja (que lo será solo para algunos) de usar la sintaxis y código de [`lme4`](https://cran.r-project.org/package=lme4) en lugar de la nomenclatura que más odio para describir los modelos mixtos utilizados.

A un nivel menos operativo, más conceptual y transportable a otros contextos, lo que trata el artículo tiene que ver con la dificultad de deslindar mérito de suerte (que es el nombre que reciben señal y ruido en ciertos contextos), que se desarrolla [aquí](https://datanalytics.com/2018/05/29/guasa-tiene-que-habiendo-tanto-economista-por-ahi-tenga-yo-que-escribir-esta-cosa-hoy/) y en sus enlaces, y que [mereció uno de esos seudonóbeles de economía](https://marginalrevolution.com/marginalrevolution/2016/10/performance-pay-nobel.html).