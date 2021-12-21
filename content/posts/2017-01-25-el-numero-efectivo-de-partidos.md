---
author: Carlos J. Gil Bellosta
date: 2017-01-25 08:13:47+00:00
draft: false
title: El número efectivo de partidos

url: /2017/01/25/el-numero-efectivo-de-partidos/
categories:
- estadística
- r
tags:
- cis
- estadística
- plyr
- r
- reshape2
- rvest
- zoo
---

El _número efectivo de partidos_ es el [nombre de una página de la Wikipedia](https://en.wikipedia.org/wiki/Effective_number_of_parties), que contiene la fórmula

$$ N = \frac{1}{\sum_i p_i^2}$$

y excipiente alrededor.

Aplicada a España (usando datos del CIS como _proxy_),

![](/wp-uploads/2017/01/numero_efectivo_partidos.png)

Como casi siempre, el código:

{{< highlight R "linenos=true" >}}
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