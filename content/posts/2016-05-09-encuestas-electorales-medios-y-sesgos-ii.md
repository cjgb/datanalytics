---
author: Carlos J. Gil Bellosta
date: 2016-05-09 08:13:27+00:00
draft: false
title: 'Encuestas electorales: medios y sesgos (II)'

url: /2016/05/09/encuestas-electorales-medios-y-sesgos-ii/
categories:
- estadística
tags:
- elecciones
- encuestas
- encuestas electorales
- estadística
- lme4
- modelos mixtos
- r
---

[Aquí](https://www.datanalytics.com/2016/05/05/encuestas-electorales-medios-y-sesgos-i/) quedó pendiente hablar de datos y métodos. Los primeros proceden de [El Mundo](http://www.elmundo.es/grafico/espana/2015/10/15/561fe19422601dd7728b45ef.html). Solicité a [Marta Ley](https://twitter.com/leymarta), una coautora, los datos pero, antes de que contestase que sí (¡gracias!), me di cuenta de que [podía obtenerlos solito](https://spreadsheets.google.com/feeds/list/1vyVTJPr7ZpuQI4m17cekWl485cQ-Zh6O9Yb6zXkPpYI/od6/public/values?alt=json): basta con capturar la llamada que el javascript local hace al servidor.

¿Métodos? Mejorables: se suaviza la intención de voto (con _loess_) y se estima la diferencia con un modelo de efectos mixtos, i.e.,

{{< highlight R "linenos=true" >}}
modelo<- lmer(delta ~ 1 + (1 | medio),
    data = misdatos)
{{< / highlight >}}

¿Caveats? Veo dos: el primero, que _loess_ suaviza teniendo en cuenta también observaciones futuras. Los autores de las encuestas no ven la verdad: solo los resultados de las encuestas previas. Debería haber usado como referencia _la mejor predicción_ basada en observaciones pasadas. El segundo, que los porcentajes de los distintos partidos suman un total. Los sesgos no son independientes y yo los modelo como tales.

Y termino con el código completo:

{{< highlight R "linenos=true" >}}
library(rjson)
library(plyr)

raw <- fromJSON(readLines("https://spreadsheets.google.com/feeds/list/1vyVTJPr7ZpuQI4m17cekWl485cQ-Zh6O9Yb6zXkPpYI/od6/public/values?alt=json"))

dat <- raw$feed$entry

res <- ldply(dat, unlist)

res[, "id.$t"] <- res[, "updated.$t"] <- NULL
res$category.scheme <- res$category.term <- res$title.type <- NULL
res$`content.$t` <- res$link.href <- res$link.rel <- res$content.type <- NULL
res[, "title.$t"] <- res$link.type <- NULL

colnames(res) <- make.names(colnames(res))

res$gsx.casa..t <- NULL

res$fecha <- as.Date(res$gsx.fechaok..t, format = "%d/%m/%Y")
res$medio <- res$gsx.empresaymedio..t
res$margen.error <- as.numeric(gsub(",", ".", res$gsx.margendeerror..t))
res$tamano <- as.numeric(gsub("\\.", "", res$gsx.tamañomuestra..t))

res <- res[res$tamano < 1e6,]

hist(res$tamano)

res$int.pp <- as.numeric(gsub(",", ".", res$gsx.pp..t))
res$int.psoe <- as.numeric(gsub(",", ".", res$gsx.psoe..t))
res$int.cs <- as.numeric(gsub(",", ".", res$gsx.cs..t))
res$int.podemos <- as.numeric(gsub(",", ".", res$gsx.podemos..t))
res$int.iu <- as.numeric(gsub(",", ".", res$gsx.iu..t))

res <- res[, -grep("^gsx", colnames(res))]

library(ggplot2)
library(reshape2)

tmp <- melt(res, id.vars = c("fecha", "medio", "margen.error", "tamano"))

ggplot(tmp, aes(x = fecha, y = value)) + geom_smooth() + geom_point() + facet_wrap(~ variable)


library(lme4)
library(lattice)

## pp

tmp <- res
tmp$pred.pp <- predict(loess(int.pp ~ as.numeric(fecha), data = res))
tmp$delta.pp <- tmp$int.pp - tmp$pred.pp
mod.pp <- lmer(delta.pp ~ 1 + (1 | medio), data = tmp)
png("/tmp/sesgo_encuestas_pp.png", width = 600, height = 500)
dotplot(ranef(mod.pp, condVar = TRUE))
dev.off()


## psoe

tmp <- res
tmp$pred.psoe <- predict(loess(int.psoe ~ as.numeric(fecha), data = res))
tmp$delta.psoe <- tmp$int.psoe - tmp$pred.psoe
mod.psoe <- lmer(delta.psoe ~ 1 + (1 | medio), data = tmp)
png("/tmp/sesgo_encuestas_psoe.png", width = 600, height = 500)
dotplot(ranef(mod.psoe, condVar = TRUE))
dev.off()


## podemos

tmp <- res
tmp$pred.podemos <- predict(loess(int.podemos ~ as.numeric(fecha), data = res))
tmp$delta.podemos <- tmp$int.podemos - tmp$pred.podemos
mod.podemos <- lmer(delta.podemos ~ 1 + (1 | medio), data = tmp)
png("/tmp/sesgo_encuestas_podemos.png", width = 600, height = 500)
dotplot(ranef(mod.podemos, condVar = TRUE))
dev.off()


## ciudadanos

tmp <- res
tmp$pred.cs <- predict(loess(int.cs ~ as.numeric(fecha), data = res))
tmp$delta.cs <- tmp$int.cs - tmp$pred.cs
mod.cs <- lmer(delta.cs ~ 1 + (1 | medio), data = tmp)
png("/tmp/sesgo_encuestas_ciudadanos.png", width = 600, height = 500)
dotplot(ranef(mod.cs, condVar = TRUE))
dev.off()


## iu

tmp <- res
tmp$pred.iu <- predict(loess(int.iu ~ as.numeric(fecha), data = res))
tmp$delta.iu <- tmp$int.iu - tmp$pred.iu
mod.iu <- lmer(delta.iu ~ 1 + (1 | medio), data = tmp)
png("/tmp/sesgo_encuestas_iu.png", width = 600, height = 500)
dotplot(ranef(mod.iu, condVar = TRUE))
dev.off()
{{< / highlight >}}