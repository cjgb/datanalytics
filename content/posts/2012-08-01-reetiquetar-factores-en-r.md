---
author: Carlos J. Gil Bellosta
categories:
- r
date: 2012-08-01 07:11:51+00:00
draft: false
lastmod: '2025-04-06T18:54:59.034077'
related:
- 2011-02-15-como-reordenar-niveles-de-factores-en-r.md
- 2018-01-08-recodificacion-de-variables-categoricas-de-muchos-niveles-ayuda.md
- 2014-09-19-primer-elemento-de-un-grupo-dentro-de-un-dataframe-de-r.md
- 2010-08-17-una-tarea-para-mis-lectores.md
- 2019-08-05-dplyr-parece-que-prefiere-los-factores.md
tags:
- r
- trucos
title: Reetiquetar factores en R
url: /2012/08/01/reetiquetar-factores-en-r/
---

La operación que voy a discutir hoy es una que plantea problemas a muchos programadores nuevos en R: cómo renombrar niveles de un factor. Un caso típico ocurre al leer una tabla que contiene datos no normalizados. Por ejemplo,

{{< highlight R >}}
mi.factor <- factor( c("a", "a", "b", "B", "A") )
{{< / highlight >}}

donde se entiende que a y A, b y B son la misma cosa. Otro caso similar ocurre cuando se quieren agrupar niveles poco frecuentes como en

{{< highlight R >}}
mi.factor <- factor(c(rep("a", 1000), rep("b", 500), letters[3:10]))
{{< / highlight >}}

Para homogeneizar la entrada se recomienda sustituir sobre `levels(mi.factor)` así:

{{< highlight R >}}
levels(mi.factor)[levels(mi.factor) %in% letters[3:10]] <- "otras"
{{< / highlight >}}

El lector interesado podrá comparar la velocidad de ejecución de este procedimiento con otros que se le ocurran (sobre un factor de un tamaño respetable).