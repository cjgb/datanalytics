---
author: Carlos J. Gil Bellosta
categories:
- estadística
- r
date: 2017-01-25 08:13:47+00:00
draft: false
lastmod: '2025-04-06T18:46:03.195171'
related:
- 2016-07-04-gestion-de-la-mendacidad-encuestoelectoral-los-numeros.md
- 2018-11-08-siguen-votando-igual-los-diputados.md
- 2016-05-09-encuestas-electorales-medios-y-sesgos-ii.md
- 2011-09-13-datos-patrimoniales-de-los-senadores.md
- 2019-05-07-elecciones-e-indice-supernaif-de-shapley.md
tags:
- cis
- estadística
- plyr
- r
- reshape2
- rvest
- zoo
title: El número efectivo de partidos
url: /2017/01/25/el-numero-efectivo-de-partidos/
---

El _número efectivo de partidos_ es el [nombre de una página de la Wikipedia](https://en.wikipedia.org/wiki/Effective_number_of_parties), que contiene la fórmula

$$ N = \frac{1}{\sum_i p_i^2}$$

y excipiente alrededor.

Aplicada a España (usando datos del CIS como _proxy_),

![](/img/2017/01/numero_efectivo_partidos.png#center)

Como casi siempre, el código:

{{< highlight R >}}
library(rvest)
library(rvest)
library(reshape2)
library(plyr)
library(zoo)

url <- "http://www.cis.es/cis/export/sites/default/-Archivos/Indicadores/documentos_html/sB606050010.html"

raw <- read_html(url)
tmp <- html_nodes(raw, "table")
tmp <- html_table(tmp[[2]], fill = TRUE)

colnames(tmp)[1] <- "partido"

tmp <- tmp[!is.na(tmp$partido),]
tmp <- tmp[1:30,]

tmp <- melt(tmp, id.vars = "partido")
tmp <- tmp[tmp$value != ".",]
tmp$value <- as.numeric(tmp$value)

tmp$variable <- gsub("ene", "01-", tmp$variable)
tmp$variable <- gsub("abr", "04-", tmp$variable)
tmp$variable <- gsub("jul", "07-", tmp$variable)
tmp$variable <- gsub("oct", "10-", tmp$variable)

tmp$variable <- gsub("-0", "-200", tmp$variable)
tmp$variable <- gsub("-1", "-201", tmp$variable)
tmp$variable <- gsub("-9", "-199", tmp$variable)

tmp$variable <- paste0("01-", tmp$variable)

tmp$variable <- as.Date(tmp$variable, format = "%d-%m-%Y")

dat <- tmp

dat <- ddply(dat, .(variable), transform, total = value / sum(value))
res <- ddply(dat, .(variable), summarize, enp = 1 / (sum(total^2)))

res <- zoo(res$enp, order.by = res$variable)

plot(res, main = "Número efectivo de partidos\nen España(1996-2016)",
        xlab = "", ylab = "número efectivo de partidos")
{{< / highlight >}}