---
author: Carlos J. Gil Bellosta
date: 2011-02-17 09:22:41+00:00
draft: false
title: Enredando con el paquete googleVis de R

url: /2011/02/17/enredando-con-el-paquete-googlevis-de-r/
categories:
- r
tags:
- gráficos
- r
- paquetes
---

Si el otro día denuncié [un gráfico engañabobos](http://www.datanalytics.com/2011/01/31/un-grafico-enganabobos/) (y algún otro me explayaré muy constructivamente sobre el intercambio de correos que mantuve con sus autores), hoy he querido reproducirlo con el [paquete googleVis de R](http://cran.r-project.org/web/packages/googleVis/index.html).

Habedlo:

[cf]googleViz[/cf]




El código utilizado para generarlo es:




{{< highlight R "linenos=true" >}}
library(googleVis)
library(reshape)

a <- read.csv("http://datanalytics.com/uploads/serie_bde_1.csv")[,1:2]
b <- read.csv("http://datanalytics.com/uploads/serie_bde_2.csv", header = F)[,1:2]

colnames(a) <- c("fecha", "privado")
colnames(b) <- c("fecha", "público")

fechas <- data.frame(fecha = a$fecha, orden = 1:nrow(a))

goo.dat <- merge(merge(a, b), fechas)
goo.dat <- goo.dat[order(goo.dat$orden),]

goo.dat$privado <- goo.dat$privado / 10^9
goo.dat$público <- goo.dat$público / 10^9

goo.dat <- subset(goo.dat, select = c(privado, público))
goo.dat$date <- seq(as.Date("1962-01-01"), by = "month", length = nrow(goo.dat))
goo.dat <- melt(goo.dat, id.vars = "date")


goo.tl <- gvisAnnotatedTimeLine(goo.dat, datevar = "date",
            numvar = "value", idvar = "variable")
{{< / highlight >}}

Finalmente, hay que advertir que no es inmediato el publicar estas visualizaciones en bitácoras como ésta (que utiliza Wordpress). Los detalles de cómo hacerlo, [en este enlace](http://extats.blogspot.com/2011/02/inserting-google-visualizations-in.html).
