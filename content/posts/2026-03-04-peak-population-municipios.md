---
author: Carlos J. Gil Bellosta
categories:
- números
date: 2026-03-05
description: Un mapa del año del «peak population» por municipios en España usando
  la API del INE y R.
lastmod: '2026-03-02T13:19:47.565619'
related:
- 2017-03-28-rejillas-poblacionales-con-r-un-borrador.md
- 2018-02-27-estructura-poblacional-de-espana-2010-2050.md
- 2019-07-15-cartogramas-con-recmap.md
- 2024-03-12-dorling-cartograms.md
- 2017-04-19-guadalajara-joven-guadalajara-inconclusa.md
tags:
- demografía
- españa
- ine
- r
title: «Peak population» por municipios
url: /2026/03/05/peak-population-municipios/
---

El otro día me entretuve en crear

![Peak population municipios españa](/img/2026/peak-population-municipios-00.png#center)

tras ver

![Peak population municipios eeuu](/img/2026/peak-population-municipios-01.jpeg#center)

[en Twitter](https://x.com/paulg/status/2025327977471316030).

Muestra, municipio a municipio, el año (censurado por la izquierda en 1996) en el que se alcanzó la población máxima de acuerdo con los datos del padrón.

Notas:

- Como he dicho, la API del INE solo ofrece datos de los últimos 30 años. Los datos anteriores, quién sabrá dónde estarán.
- He usado el término _censura_ en su acepción estadística.
- No me he entretenido en representar Canarias. Lo siento.
- Gran parte del código ha sido desarrollado por Claude.
- Claude ha sabido, de hecho, identificar la llamada a la API del INE necesaria para bajar los datos correspondientes.
- El INE ha puesto a disposición de los usuarios un paquete, [`ineapir`](https://cran.r-project.org/web/packages/ineapir/index.html) que facilita la descarga de datos de sus APIs. Bien.
- Los límites de los municipios los he bajado en formato GeoJSON del portal del Instituto Geográfico Nacional.

Y el código, a continuación (por si alguien quiere seguir jugando con él).

```r
library(ineapir)
library(sf)
library(plyr)
library(ggplot2)

df <- get_data_table(
  idTable = 29005,
  tip     = "AM",
  nlast   = 100,
  verbose = TRUE
)

df_total <- df[grep("Total. Total habitantes. Personas.", df$Nombre),]
df_total <- df_total[sapply(df_total$Data, nrow) > 0,]

for (i in 1:nrow(df_total)) {
  df_total$Data[[i]]$Nombre <- df_total$MetaData[[i]]$Nombre[1]
  df_total$Data[[i]]$Codigo <- df_total$MetaData[[i]]$Codigo[1]
}

tmp <- do.call(rbind, df_total$Data)
tmp <- ddply(tmp, .(Nombre, Codigo), transform, rank = rank(-Valor, ties.method = "last"))
tmp <- tmp[tmp$rank == 1,]
tmp <- tmp[, c("Anyo", "Valor", "Nombre", "Codigo")]

colnames(tmp) <- c("year", "pop", "name", "CODIGOINE")

municipios <- st_read("Municipios_-7023933172321596289.geojson")

tmp <- merge(municipios, tmp)
tmp <- tmp[tmp$CODNUT1 != "ES7",]

ggplot(tmp) +
  geom_sf(aes(fill = year), color = NA) +
  scale_fill_viridis_c(name = "Año") +
  labs(
    title    = "Año en que los municipios españoles alcanzaron su población máxima",
    subtitle = "Excluyendo Canarias · Período 1996–2023",
    caption  = "Fuente: INE Padrón Municipal · Límites: IGN/CNIG CC-BY 4.0"
  ) +
  theme_void() +
  theme(
    plot.title    = element_text(size = 16, face = "bold", margin = margin(b = 6)),
    plot.subtitle = element_text(size = 11, color = "grey40", margin = margin(b = 10)),
    plot.caption  = element_text(size = 8,  color = "grey60", hjust = 0),
    plot.margin   = margin(10, 10, 10, 10)
  )
```