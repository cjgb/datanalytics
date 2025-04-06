---
author: Carlos J. Gil Bellosta
categories:
- r
date: 2019-08-05 09:13:50+00:00
draft: false
lastmod: '2025-04-06T18:59:44.717383'
related:
- 2014-03-25-totales-agregados-por-bloques-en-tablas.md
- 2010-09-06-tarea-lectores-resultados.md
- 2014-09-24-plyr-dplyr-data-table-que-opinas.md
- 2016-07-12-dos-nuevos-tutoriales-sobre-data-table-y-dplyr.md
- 2019-08-07-mas-sobre-factores-strings-y-ordenacion.md
tags:
- dplyr
- factorización
- r
title: dplyr parece que prefiere los factores
url: /2019/08/05/dplyr-parece-que-prefiere-los-factores/
---

Con datos bajados de [aquí](ftp://www.ine.es/temas/censopv/cen11/Microdatos_personas_nacional.zip):

{{< highlight R >}}
library(MicroDatosEs)
library(dplyr)
library(microbenchmark)
library(ggplot2)

censo <- censo2010("MicrodatosCP_NV_per_nacional_3VAR.txt")

censo_char <- as.data.frame(censo[,
    c("CPRO", "SEXO", "ECIVIL", "FACTOR")])
censo_factor <- censo_char
censo_factor$CPRO <- factor(censo_factor$CPRO)


foo <- function(x)
    x %>% group_by(CPRO) %>%
    summarise(res = sum((SEXO == "Mujer") *
        (ECIVIL == "Divorciado") * FACTOR) /
        sum(FACTOR) * 100)

res <- microbenchmark(
    char = foo(censo_char),
    factor = foo(censo_factor),
    times = 10
)

autoplot(res)
{{< / highlight >}}

Da:

![](/wp-uploads/2019/08/Rplot.png#center)

¿No es sorprendente? De hecho, `plyr` es más rápido que `dplyr` en este caso si no se usan factores.

Notas:

* El hilo de por qué es así en lugar de otra manera se pierde en código escrito en C++. Para otra vida (mía o de otro).
* Debo agradecer a [Diego Castro](https://www.linkedin.com/in/diego-castro-viadero-9192a278/) el intercambio de ideas, código y perplejidades que dieron pie a todo lo de arriba.