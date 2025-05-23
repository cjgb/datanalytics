---
author: Carlos J. Gil Bellosta
categories:
- ciencia de datos
- estadística
- r
date: 2019-11-04 09:13:16+00:00
draft: false
lastmod: '2025-04-06T18:48:30.821910'
related:
- 2020-09-17-una-herramienta-para-el-analisis-no-parametrico-de-series-temporales.md
- 2016-11-16-detras-de-la-deteccion-de-anomalias-en-series-temporales.md
- 2012-06-25-para-los-expertos-en-series-estadisticas-ii.md
- 2014-08-08-procesos-de-poisson-no-homogeneos-la-historia-de-un-fracaso.md
- 2024-03-11-cortos-01.md
tags:
- paquetes
- predicción
- r
- series temporales
- tsintermittent
title: Análisis y predicción de series temporales intermitentes
url: /2019/11/04/analisis-y-prediccion-de-series-temporales-intermitentes/
---

Hace tiempo me tocó analizar unas series temporales bastante particulares. Representaban la demanda diaria de determinados productos y cada día esta podía ser de un determinado número de kilos. Pero muchas de las series eran esporádicas: la mayoría de los días la demanda era cero.

Eran casos de las llamadas series temporales _intermitentes_.

Supongo que hay muchas maneras de modelizarlas y, así, al vuelo, se me ocurre pensar en algo similar a los modelos con inflación de ceros. Es decir, modelar la demanda como una mixtura de dos distribuciones, una, igual a 0 y otra >0, de manera que la probabilidad de la mixtura, $latex p_t$, dependa del tiempo y otras variables de interés.

O uno puede probar el paquete [`tsintermittent`](https://cran.r-project.org/package=tsintermittent), tal vez no sin antes consultar [esto](https://kourentzes.com/forecasting/2014/06/23/intermittent-demand-forecasting-package-for-r/) y los enlaces que contiene.

**Nota:** Me da que en casi todos los problemas relacionados con este tipo de series temporales es mucho menos relevante la predicción en sí (entendida en términos del RMSE) como una descripción de la distribución resultante y posiblemente una estimación más o menos gruesa de ciertos cuantiles relevantes.