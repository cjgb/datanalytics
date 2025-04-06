---
author: Carlos J. Gil Bellosta
categories:
- números
date: 2017-03-01 08:13:51+00:00
draft: false
lastmod: '2025-04-06T19:08:47.238920'
related:
- 2019-12-03-la-poblacion-envejece-pero-envejecen-tambien-los-grupos-de-edad.md
- 2018-01-31-mortalidad-y-tramos-de-edad-gordotes.md
- 2017-03-29-evolucion-de-la-edad-media-de-la-poblacion-por-provincias.md
- 2018-01-09-mortalidad-en-carretera-contada-de-una-manera-distinta.md
- 2018-07-23-suicidios-crisis-y-cambios-de-regimen-en-series-temporales.md
tags:
- ine
- mortalidad
- r
title: Sobre una poco conocida y para nada menguante "brecha de género"
url: /2017/03/01/sobre-una-poco-conocida-y-para-nada-menguante-brecha-de-genero/
---

Con [datos del INE](http://www.ine.es/jaxiT3/Tabla.htm?t=14817&L=0) sobre mortalidad he construido el gráfico

![](/wp-uploads/2017/02/tasas_mortalidad_edad.png#center)


que muestra las tasas de mortalidad relativas (la de hombres entre la de mujeres) desde 1975 para cada edad. Como no se aprecia debidamente el efecto que da pie a esta entrada, reorganizo los ejes (y promedio, ¡_glups_!, las tasas de mortalidad por grupos quinquenales de edad):

![](/wp-uploads/2017/02/tasas_mortalidad_anno.png#center)

Se observa una manifiesta tendencia creciente, uno de esos _gender gaps_, _brechas de género_ o como quiera que se llamen a estas cosa en neolengua que, lejos de menguar, crece y crece.

El fenómeno no es solo español: consúltese [este estudio sueco](https://ikashnitsky.github.io/2017/gender-gap-in-swedish-mortality/), de mucha mayor profundidad histórica o [este otro](https://www.nytimes.com/2015/11/03/health/death-rates-rising-for-middle-aged-white-americans-study-finds.html) sobre el mismo fenómeno en EE.UU. (que estudia ya no las tasas relativas sino las absolutas).

El código, salvo la descarga de los datos del INE (a ver si la próxima vez uso la [API JSON](http://www.ine.es/dyngs/DataLab/es/manual.html?&cid=45), que para eso está), aquí:

{{< highlight R >}}
library(pxR)
library(ggplot2)
library(reshape2)
library(plyr)

raw <- read.px("14817.px")
datos <- as.data.frame(raw)

datos$Periodo <- as.numeric(
    as.character(datos$Periodo))

datos$Totales.Territoriales <- NULL

datos <- datos[datos$Edad != "Total edades",]
datos$Edad <- as.character(datos$Edad)
datos$Edad[datos$Edad == "De 90 y más años"] <- "90 años"
datos$Edad <- as.numeric(gsub(" .*$", "", datos$Edad))

datos <- dcast(datos,
  Periodo + Edad ~ Sexo, value.var = "value")
datos$ratio <- datos$Hombres / datos$Mujeres

ggplot(datos, aes(x = Edad, y = ratio)) +
  geom_line() + facet_wrap(~Periodo) +
  ggtitle("Ratio de tasas de mortalidad (hombres/mujeres)") +
  xlab("edad") +
  ylab("ratio de tasas de mortalidad (hombres / mujeres)")

datos.agrupados <- datos
datos.agrupados$edad <- 5 * round(datos.agrupados$Edad / 5)

# estoy promediando tasas: ¡mil perdones!
datos.agrupados <- ddply(datos.agrupados,
  .(Periodo, edad),
  summarise, ratio = mean(ratio))

ggplot(datos.agrupados, aes(x = Periodo, y = ratio)) +
  geom_line() + facet_wrap(~edad) +
  ggtitle("Evolución del ratio (hombres/mujeres) de la tasa de mortalidad\npor grupos de edad") +
  xlab("año") +
  ylab("ratio de tasas de mortalidad (hombres / mujeres)")
{{< / highlight >}}