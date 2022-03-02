---
author: Carlos J. Gil Bellosta
date: 2017-04-19 08:13:24+00:00
draft: false
title: Guadalajara joven, Guadalajara inconclusa

url: /2017/04/19/guadalajara-joven-guadalajara-inconclusa/
categories:
- gráficos
- números
tags:
- demografía
- guadalajara
- mapas
- siane
---

Continuando con [mi serie sobre la Guadalajara demográfica](https://www.datanalytics.com/2017/03/28/rejillas-poblacionales-con-r-un-borrador/),

![](/wp-uploads/2017/04/jovenes_guadalajara.png#center)

que muestra la proporción de menores de 16 por municipio en la provincia.

No me habría atrevido a publicar nada tan en agraz si no fuese para dejar dos notas de potencial provecho para mis lectores. La primera que he usado los mapas que, dicen, son los de verdad de la buena. No los del INE, que son de amateur, sino [los del SIANE del Instituto Geográfico Nacional](http://centrodedescargas.cnig.es/CentroDescargas/catalogo.do?Serie=CAANE), que me cuentan los que saben de la cosa que son los que se recomienda utilizar.

Están muy bien hechos. Por gente, además, de la que ignora que lo perfecto es lo enemigo de lo bueno. No sé si los he usado bien y si he acertado ha sido gracias a una de esas felices alineaciones de la intuición y la casualidad. Pero el tema está exigiendo que alguien nos regale un tratadito sobre el uso de SIANE con R para provecho de todos.

El segundo tema es que Manuel Garrido [ha publicado](https://pybonacci.es/2017/04/17/como-hacer-un-mapa-muy-bonito-de-espana-en-ggplot2/)

![](/wp-uploads/2017/04/edad_media_espana.png#center)

en su blog y, habiéndome faltado el tiempo para fusilar su diseño, hago pender el testigo a la altura de los ojos por si alguien lo toma. Le servirá

{{< highlight R >}}
library(rgdal)
library(pxR)
library(plyr)
library(RColorBrewer)

raw <- readOGR("~/ign_siane/SIANE_CARTO_BASE_S_3M/historico",
                "se89_3_admin_muni_a_x")

edades <- read.px("00019002.px", encoding = "latin1")
edades <- as.data.frame(edades)
edades <- edades[edades$Nacionalidad..español.extranjero. == "Total",]
edades <- edades[edades$Sexo == "Ambos sexos", ]
edades <- edades[edades$Municipios != "Total",]

edades$Nacionalidad..español.extranjero. <- edades$Sexo <- NULL
edades <- dcast(edades, Municipios ~ Edad..grandes.grupos.)
edades$pct.jovenes <- edades[["Menores de 16 años"]] / edades$Total
edades <- edades[, c("Municipios", "pct.jovenes")]

edades$id_ine <- gsub("-.*", "", edades$Municipios)

dat <- merge(raw, edades, all.x = FALSE)

my.palette <- brewer.pal(n = 7, name = "Blues")
spplot(dat, "pct.jovenes",
        col.regions = my.palette, cuts = 6,
        col = "transparent")
{{< / highlight >}}