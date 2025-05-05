---
author: Carlos J. Gil Bellosta
categories:
- estadística
- números
- r
date: 2012-03-29 07:41:32+00:00
draft: false
lastmod: '2025-04-06T19:05:12.302334'
related:
- 2014-07-17-facetas-para-entender-tal-vez-la-evolucion-del-paro.md
- 2010-09-29-huelga-el-titulo-hoy.md
- 2022-07-26-hueco-termico.md
- 2012-09-05-los-principales-problemas-de-espana.md
- 2018-01-09-mortalidad-en-carretera-contada-de-una-manera-distinta.md
tags:
- estadística
- números
- r
- huelgas
title: Otra de huelgas
url: /2012/03/29/otra-de-huelgas/
---

Hoy, por motivos evidentes, e igual que en [septiembre de 2010](https://datanalytics.com/2010/09/29/huelga-el-titulo-hoy/), voy a hablar de huelgas. De la misma fuente que entonces he descargado [este fichero](/uploads/pcaxis-623612450.px). Y he ejecutado

{{< highlight R >}}
library(pxR)
library(reshape)
library(ggplot2)

dat <- read.px("pcaxis-623612450.px")
dat <- as.data.frame(dat)

dat.mes <- cast(dat, Periodo ~ series)
colnames(dat.mes) <- c("mes", "n.huelgas", "n.trabajadores", "n.jornadas")

p <- ggplot(data = dat.mes) + geom_line(aes(x = mes, y = n.huelgas, group = rep(1, nrow(dat))))
p
ggsave("huelgas_por_mes.png")

dat.anno <- dat

tmp <- strsplit(as.character(dat.anno$Periodo), "M")
dat.anno$Periodo <- sapply(tmp, function(x) x[1])

dat.anno <- cast(dat.anno, Periodo ~ series, fun.aggregate = sum)
colnames(dat.anno) <- c("anno", "n.huelgas", "n.trabajadores", "n.jornadas")

p <- ggplot(data = dat.anno, aes(x = anno, y = n.huelgas, group = rep(1, nrow(dat.anno)))) + geom_line()
p <- p + geom_point(aes(size = n.jornadas))
p <- p + scale_x_discrete("año") + scale_y_continuous("número de huelgas")
p
ggsave("huelgas_por_anno.png")

p <- ggplot(data = dat.anno, aes(x = anno, y = n.trabajadores/n.huelgas, group = rep(1, nrow(dat.anno)))) + geom_line()
p <- p + scale_x_discrete("año") + scale_y_continuous("número de trabajadores por huelga")
p
ggsave("trabajadores_huelga_por_anno.png")

p <- ggplot(data = dat.anno, aes(x = anno, y = n.jornadas /n.huelgas, group = rep(1, nrow(dat.anno)))) + geom_line()
p <- p + scale_x_discrete("año") + scale_y_continuous("número de jornadas por huelga")
p
ggsave("jornadas_huelga_anno.png")
{{< / highlight >}}

para obtener, por un lado, el número de huelgas por mes desde enero de 1995 a noviembre de 2011:


[![](/wp-uploads/2012/03/huelgas_por_mes.png#center)
](/wp-uploads/2012/03/huelgas_por_mes.png#center)


El número de huelgas por año, con el número de jornadas afectadas por las huelgas indicado por el diámetro de punto:

[![](/wp-uploads/2012/03/huelgas_por_anno.png#center)
](/wp-uploads/2012/03/huelgas_por_anno.png#center)

El número de trabajadores que siguieron cada huelga en cada año:

[![](/wp-uploads/2012/03/trabajadores_huelga_por_anno.png#center)
](/wp-uploads/2012/03/trabajadores_huelga_por_anno.png#center)

Finalmente, el número de jornadas afectadas por las huelgas en cada año.

[![](/wp-uploads/2012/03/jornadas_huelga_anno.png#center)
](/wp-uploads/2012/03/jornadas_huelga_anno.png#center)

Es relativamente fácil ubicar la huelga general del 2002. La que hubo en septiembre de 2010... no lo tengo tan claro.

Finalmente, ¿podría decirse que aunque parece aumentar el número de huelgas, estas afectan cada vez a menos trabajadores y restan mejos jornadas de trabajo? ¿Se ve esa tendencia? ¿Es una tendencia o una mera ilusión sensorial?

De ser tendencia, (y sólo de ser tendencia) ¿podría aventurarse alguna causa? ¿Huelgas más locales? ¿O menos interés y seguimiento por parte de los trabajadores?

Finalmente, ¿nos satisface la información sobre huelgas que publica el INE? ¿Existen fuentes más completas? ¿Alguien las tiene ubicadas? ¿Son accesibles? ¿Permitiría la nueva ley de transparencia acceder a ellas?