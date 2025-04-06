---
author: Carlos J. Gil Bellosta
categories:
- estadística
- r
date: 2016-03-18 09:13:34+00:00
draft: false
lastmod: '2025-04-06T19:02:51.397337'
related:
- 2016-05-09-encuestas-electorales-medios-y-sesgos-ii.md
- 2020-04-13-regresion-tradicional-vs-multinivel.md
- 2020-03-18-lme4-simulate.md
- 2010-08-26-modelos-lineales-mixtos-para-la-optimizacion-de-queries.md
- 2019-02-12-sr-python-muchas-gracias-por-su-candidatura-ya-le-llamaremos-cuando-tenga-modelos-mixtos.md
tags:
- drogas
- lme4
- modelos mixtos
- r
- recomendaciones
title: Modelos mixtos para preprocesar datos en un sistema de recomendación de drogas
url: /2016/03/18/modelos-mixtos-para-preprocesar-de-datos-en-un-sistema-de-recomendacion-de-drogas/
---

Sí, de drogas de las que mantienen despierto al lumpenazgo. Porque he encontrado ([aquí](http://slatestarcodex.com/2016/03/01/2016-nootropics-survey-results/)) un [conjunto datos](/uploads/recomendador_drogas.xlsx) muy interesante sobre la valoración que una serie de personas, unas 900, da a una serie de drogas más o menos legales que se llaman —me acabo de enterar— [nootrópicos](https://es.wikipedia.org/wiki/Nootr%C3%B3picos).

El gráfico

![nootropics_image1a](/wp-uploads/2016/03/nootropics_image1a.png#center)

extraído de la página enlazada más arriba resume parte de los resultados. No obstante, es sabido entre los que se dedican a los sistemas de recomendación que hay usuarios que tienden a valorar sistemáticamente por encima de la media y otros, por debajo. En los manuales de la cosa suelen recogerse mecanismos más o menos sofisticados para mitigar ese efecto y normalizar las valoraciones entre usuarios. Generalmente, solo exigen matemáticas de bachillerato. Y son meras aproximaciones que no tienen en cuenta circunstancias tales como que puede que un usuario da valoraciones bajas solo porque evalúa productos malos, etc.

[Aquí](https://matloff.wordpress.com/2015/11/15/partools-recommender-systems-and-more/) y en sus enlaces se habla de una manera más sofisticada de corregir ese sesgo: modelos mixtos. Tales como

{{< highlight R >}}
library(xlsx)
library(reshape2)
library(lme4)
library(plyr)
library(lattice)

download.file("/uploads/recomendador_drogas.xlsx",
    destfile = "recomendador_drogas.xlsx")
raw <- read.xlsx("recomendador_drogas.xlsx", 1)

# selección de las columnas de interés
dat <- raw[, c(8:40, 42, 48, 53)]

# limpieza de nombres
colnames(dat)[grep("Semax", colnames(dat))] <- "Semax"
colnames(dat)[grep("Selank", colnames(dat))] <- "Selank"
colnames(dat)[grep("Alpha.Brain", colnames(dat))] <- "Alpha.Brain"
colnames(dat)[grep("Epicor", colnames(dat))] <- "Epicor"
colnames(dat)[grep("LSD.Microdosing", colnames(dat))] <- "LSD.Microdosing"
colnames(dat)[grep("Adderall", colnames(dat))] <- "Adderall"
colnames(dat)[grep("Phenibut", colnames(dat))] <- "Phenibut"

# preparación de los datos
dat$id <- 1:nrow(dat)
dat <- melt(dat, id.vars = "id")
colnames(dat) <- c("usuario", "droga", "nota")
dat <- na.omit(dat)
dat$usuario <- as.character(dat$usuario)

# tabla que replica la publicada más arriba
ranking <- ddply(dat, .(droga), summarize, nota = mean(nota))
ranking <- ranking[order(-ranking$nota),]

# modelo mixto: incluye efectos aleatorios por usuario y por droga
modelo <- lmer(nota ~ 1 + (1|usuario) + (1|droga), data = dat)

dotplot(ranef(modelo, condVar = TRUE))
{{< / highlight >}}

que produce, entre otros, el gráfico

![nootropics_image_ci](/wp-uploads/2016/03/nootropics_image_ci.png#center)

Esencialmente, el orden se mantiene (salvo alguna excepción). Pero ahora se aprecian los intervalos de confianza (debidos a la desigual popularidad de los ítems).