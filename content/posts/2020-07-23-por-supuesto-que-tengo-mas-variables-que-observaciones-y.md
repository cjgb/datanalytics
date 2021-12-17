---
author: Carlos J. Gil Bellosta
date: 2020-07-23 09:13:00+00:00
draft: false
title: Por supuesto que tengo más variables que observaciones... ¿y?

url: /2020/07/23/por-supuesto-que-tengo-mas-variables-que-observaciones-y/
categories:
- estadística
- r
tags:
- efectos aleatorios
- gam
- mgcv
- modelos jerárquicos
- paquetes
- r
---




He intentado replicar los resultados de la [entrada de ayer](https://www.datanalytics.com/2020/07/22/aun-mas-sobre-la-presunta-sobredispersion-en-modelos-de-poisson/) con GAM (vía `[mgcv](https://CRAN.R-project.org/package=mgcv)`) así (véase el enlace anterior para la definición de los datos):







    library(mgcv)
    modelo_gam <- gam(
        y ~ x + s(id, bs = "re"),
        data = datos,
        method = "REML",
        family = "poisson")







Y nada:







    Error in gam(y ~ x + s(id, bs = "re"), data = datos, method = "REML",  :
      Model has more coefficients than data







Sí, ya sé que tengo más variables que observaciones. Pero, ¿no es para eso que estoy usando [efectos aleatorios](https://stat.ethz.ch/R-manual/R-patched/library/mgcv/html/gamm.html)?







En fin...



