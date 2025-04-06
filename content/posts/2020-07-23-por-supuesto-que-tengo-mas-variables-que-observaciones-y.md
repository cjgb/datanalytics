---
author: Carlos J. Gil Bellosta
categories:
- estadística
- r
date: 2020-07-23 09:13:00+00:00
draft: false
lastmod: '2025-04-06T19:04:07.759944'
related:
- 2014-02-06-experimentos-con-el-paquete-gbm.md
- 2020-07-22-aun-mas-sobre-la-presunta-sobredispersion-en-modelos-de-poisson.md
- 2019-01-08-modelos-de-conteos-con-sobredispersion-con-stan.md
- 2020-07-16-no-tus-datos-no-tienen-sobredispersion-es-que-el-gato-de-nelder-se-ha-merendado-la-epsilon.md
- 2018-05-10-gam-bam-admiten-efectos-aleatorios.md
tags:
- efectos aleatorios
- gam
- mgcv
- modelos jerárquicos
- paquetes
- r
title: Por supuesto que tengo más variables que observaciones... ¿y?
url: /2020/07/23/por-supuesto-que-tengo-mas-variables-que-observaciones-y/
---

He intentado replicar los resultados de la [entrada de ayer](https://www.datanalytics.com/2020/07/22/aun-mas-sobre-la-presunta-sobredispersion-en-modelos-de-poisson/) con GAM (vía [`mgcv`](https://CRAN.R-project.org/package=mgcv)) así (véase el enlace anterior para la definición de los datos):

{{< highlight R >}}
library(mgcv)
modelo_gam <- gam(
    y ~ x + s(id, bs = "re"),
    data = datos,
    method = "REML",
    family = "poisson")
{{< / highlight >}}

Y nada:

`Error in gam(y ~ x + s(id, bs = "re"), data = datos, method = "REML",  : Model has more coefficients than data`

Sí, ya sé que tengo más variables que observaciones. Pero, ¿no es para eso que estoy usando [efectos aleatorios](https://stat.ethz.ch/R-manual/R-patched/library/mgcv/html/gamm.html)?

En fin...