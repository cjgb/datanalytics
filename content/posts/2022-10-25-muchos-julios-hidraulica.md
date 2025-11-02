---
author: Carlos J. Gil Bellosta
categories:
- números
date: 2022-10-25
lastmod: '2025-04-06T18:53:05.921054'
related:
- 2022-09-08-regresion-perdida-asimetrica.md
- 2023-06-06-energia-coches-particulares.md
- 2017-03-27-datos-abiertos-y-farolas-solares-mas-motivos-para-el-escepticismo.md
- 2021-11-18-sobre-el-almacenamiento-industrial-de-la-energia-electrica.md
- 2022-07-26-hueco-termico.md
tags:
- energía
- energía hidráulica
- españa
- david mackay
title: 2.551879e+18 julios anuales
url: /2022/10/25/potencial-hidraulico-total-espana/
---

La entrada de hoy es un ejercicio intrascendente inspirado en cálculos similares, pero aplicados al RU, en el octavo capítulo del muy recomendable librito
[_Sustainable Energy — without the hot air_](http://www.withouthotair.com/). En él se calcula cuál podría llegar a ser la potencia hidroeléctrica instalada máxima en RU bajo la hipótesis de que se aprovecha la totalidad de la energía potencial de cada gota de agua llovida en aquella desventurada tierra.

El número _gordo_ correspondiente a España es ese con el que rotulo la entrada: 2.551879e+18 julios anuales. Que, como todo el mundo sabe, corresponde a la energía necesaria para iluminar un campo de fútbol en lo que cuesta pasar por agua todos los huevos puestos por gallina desde los tiempos de Nabucodonosor II.

El autor del libro, el malhadado David JC MacKay, estima en unos 0.02 W/m² la energía que puede llegar a extraerse de lo que llama las _tierras bajas_ de Gran Bretaña y hasta 0.24 W/m² en las _tierras altas_ de Escocia. A mí me salen 0.16 W/m² para España (sin Canarias) ---por aquello de que la altura media compensa la falta de precipitación--- distribuidos de esta singular manera:

![](/img/2022/10/hidroelectrica-vatios-m2.png#center)

Dado que potencia por m² es una medida que le será ajena a quien no se haya familiarizado con el libro antes citado y lo de las gallinas y los campos de fútbol es referencia solo para lectores de cierta prensa madrileña, voy a buscar maneras alternativas de aterrizar esas magnitudes.

2.551879e+18 julios anuales son:

* 708855.3 GWh anuales, o
* 80.9 GWh cada hora o, para los que se han dado cuenta de que esta línea es de coña,
* 80.9 GW de potencia instalada.

Que quiere decir que cubriría tres veces la actual demanda de electricidad y sería equivalente a más de 10 veces la potencia nuclear actualmente instalada. Como se dice en el libro,

> si la evaporación estuviese prohibida por ley y cada gota de agua fuese aprovechada perfectamente.

Y termino con la parte previsiblemente más util de esta entrada: el código. Es:

{{< highlight R >}}
library(terra)
library(ggplot2)

precip <- vect("datos_precipitacion/se89_6m5_clima_precipmedianual_a_x_19811215-20101215.shp")
rprep  <- rast(precip, nrows = 1000, ncols = 1000)
rprep_inf  <- rasterize(precip, rprep, "val_inf")
rprep_sup  <- rasterize(precip, rprep, "val_sup")

raltitud <- rast("../SIANE_CARTO_BASE_S_RASTER/slcp_300_orog_gebco08_r_19w48n10e31n_20100927.tif")
raltitud <- project(raltitud, crs(rprep_inf))

tmp <- crop(raltitud, ext(rprep_inf))
tmp <- resample(tmp, rprep_sup)
raltitud <- tmp

rarea <- cellSize(rprep_inf)

# altitudes
alts <- data.frame(
  alt = values(raltitud)[,1],
  mask = is.na(values(rprep_inf))[,1],
  weight = values(rarea)[,1])
alts <- alts[!alts$mask,]

ggplot(alts, aes(x = alt, weight = weight)) +
  xlab("altitud (m)") + ylab("") +
  ggtitle("Distribución de las altitudes en España (sin Canarias)") +
  geom_histogram(bins = 100, fill = "skyblue2") +
  theme_bw() +
  theme(axis.ticks.y = element_blank(), axis.text.y = element_blank())

vatios_m2 <- rprep_sup * 9.8 * raltitud / 365 / 24 / 3600
plot(vatios_m2)

ep_sup <- rarea * rprep_sup * 9.8 * raltitud
ep_sup <- sum(values(ep_sup), na.rm = T)

julios_yr <- ep_sup
gwh_yr <- julios_yr / 1e9 / 3600
gw <- gwh_yr / 365 / 24

vatios_m2_promedio <- julios_yr / sum(values(rarea), na.rm = T) / (365 * 24 * 3600)
vatios_m2_promedio
{{< / highlight >}}

Poco aprovechará a quien no disponga de los datos, que fueron bajados del [centro de descargas del CNIG](https://centrodedescargas.cnig.es/CentroDescargas/buscador.do), donde el interesado habrá de buscarlos y, con suerte, logrará encontrarlos.