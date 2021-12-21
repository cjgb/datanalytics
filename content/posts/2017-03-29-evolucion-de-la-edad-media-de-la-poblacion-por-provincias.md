---
author: Carlos J. Gil Bellosta
date: 2017-03-29 08:13:44+00:00
draft: false
title: Evolución de la edad media de la población por provincias

url: /2017/03/29/evolucion-de-la-edad-media-de-la-poblacion-por-provincias/
categories:
- estadística
- r
tags:
- demografía
- españa
- guadalajara
- ine
- pxR
- r
---

Abundo en la [entrada de ayer](https://www.datanalytics.com/2017/03/28/rejillas-poblacionales-con-r-un-borrador/). Lo hago para mostrar

![](/wp-uploads/2017/03/evolucion_edad_media_provincias.png)

En el gráfico anterior se muestra la evolución de la edad media de la población de las provincias españolas como diferencia con respecto a una _evolución media_ calculada como la regresión lineal de todas las edades medias con respecto al año. Es decir, algo así como evolución relativa.

Se aprecian claramente los rejuvenecimientos relativos de Guadalajara y, en menor medida, Toledo. Especialmente acusados durante este siglo.

Los [datos son del INE](http://www.ine.es/jaxiT3/Tabla.htm?t=3199) y descargados en formato PC-Axis. El código,

{{< highlight R "linenos=true" >}}
library(pxR)
library(ggplot2)

pob <- read.px("3199.px")
pob <- as.data.frame(pob)
pob$Sexo <- NULL

pob$Periodo <- as.numeric(as.character(pob$Periodo))

# ggplot(pob, aes(x = Periodo, y = value)) +
#   geom_line() + facet_wrap(~ Provincias)

modelo <- lm(value ~ Periodo, dat = pob)

pob$pred <- predict(modelo, pob)
pob$diff <- pob$value - pob$pred

tmp <- pob[pob$Periodo == max(pob$Periodo),]
tmp$Provincias <- reorder(tmp$Provincias, tmp$diff, max)
pob$Provincias <- factor(pob$Provincias, levels = levels(tmp$Provincias))
#pob$Provincias <- reorder(pob$Provincias, pob$diff, max)

pob$fecha <- as.Date(paste0(pob$Periodo, "-12-31"))

ggplot(pob, aes(x = fecha, y = diff)) +
  geom_hline(aes(yintercept = 0, col = "red", alpha = 0.5)) +
  geom_line() + facet_wrap(~ Provincias, ncol = 4) +
  theme(legend.position="none")
{{< / highlight >}}
