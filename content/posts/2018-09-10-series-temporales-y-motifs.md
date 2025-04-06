---
author: Carlos J. Gil Bellosta
categories:
- r
date: 2018-09-10 08:13:53+00:00
draft: false
lastmod: '2025-04-06T18:45:22.357639'
related:
- 2020-09-17-una-herramienta-para-el-analisis-no-parametrico-de-series-temporales.md
- 2016-11-16-detras-de-la-deteccion-de-anomalias-en-series-temporales.md
- 2024-03-11-cortos-01.md
- 2012-06-25-para-los-expertos-en-series-estadisticas-ii.md
- 2018-07-25-por-que-slt-ear-si-puedes-str-ear.md
tags:
- motif
- paquetes
- r
- series temporales
title: Series temporales y "motifs"
url: /2018/09/10/series-temporales-y-motifs/
---

Un _motif_ es un patrón que se repite en una serie temporal:

![](/wp-uploads/2018/09/motif.png#center)

Para saber más sobre ellos, p.e., [_Finding Motif Sets in Time Series_](https://arxiv.org/pdf/1407.3685.pdf). Y para identificarlos con R, [`STMotif`](https://cran.r-project.org/package=STMotif).