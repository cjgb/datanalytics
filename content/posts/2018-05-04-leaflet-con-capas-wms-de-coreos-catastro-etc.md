---
author: Carlos J. Gil Bellosta
categories:
- r
date: 2018-05-04 08:13:55+00:00
draft: false
lastmod: '2025-04-06T19:04:18.254405'
related:
- 2020-10-13-ign-r-leaflet.md
- 2019-07-15-cartogramas-con-recmap.md
- 2017-04-10-pues-si-puede-fabricarse-uno-para-espana.md
- 2018-02-19-podeis-probarme-le-catastro-porfa.md
- 2016-04-15-ahora-cartociudad-encuentra-informacion-administrativa-relativa-a-un-punto.md
tags:
- catastro
- correos
- ine
- leaflet
- mapas
- r
title: Leaflet con capas WMS de Correos, Catastro, etc.
url: /2018/05/04/leaflet-con-capas-wms-de-coreos-catastro-etc/
---

Esta entrada es un subproducto del trabajo que pocería que he realizado estos días en [`caRtociudad`](https://github.com/rOpenSpain/caRtociudad).

`caRtociudad` permite generar mapas estáticos al estilo de `ggmap`. Iba a poner algún ejemplo, pero los dejo para otro día.

La cosa es que mejorando `caRtociudad::get_cartociudad_map`, se me ha pasado por la cabeza la posibilidad de realizar la integración no ya con `ggmap` sino con `leaflet`. Y así (¡probadlos!), para los códigos postales,

{{< highlight R >}}
library(leaflet)

leaflet() %>% addTiles() %>%
  setView(-3.703399, 40.41688, zoom = 14) %>%
  addWMSTiles(
  "http://www.ign.es/wms-inspire/ign-base",
  layers = "codigo-postal",
  options = WMSTileOptions(format = "image/png",
    transparent = TRUE),
  tileOptions(tms = TRUE),
  attribution = "")
{{< / highlight >}}


Para las secciones censales,

{{< highlight R >}}
leaflet() %>% addTiles() %>%
  setView(-3.703399, 40.41688, zoom = 14) %>%
  addWMSTiles(
    "http://servicios.internet.ine.es/WMS/WMS_INE_SECCIONES_G01/MapServer/WMSServer",
    layers = "2018_Secciones",
    options = WMSTileOptions(format = "image/png",
      transparent = TRUE),
    tileOptions(tms = TRUE),
    attribution = "")
{{< / highlight >}}


Para los distritos censales,

{{< highlight R >}}
leaflet() %>% addTiles() %>%
  setView(-3.703399, 40.41688, zoom = 14) %>%
  addWMSTiles(
    "http://servicios.internet.ine.es/WMS/WMS_INE_SECCIONES_G01/MapServer/WMSServer",
    layers = "2018_Distritos",
    options = WMSTileOptions(format =
    "image/png", transparent = TRUE),
    tileOptions(tms = TRUE),
    attribution = "")
{{< / highlight >}}


Y para las/ciertas cosas catastrales,

{{< highlight R >}}
leaflet() %>% addTiles() %>%
  setView(-3.703399, 40.41688, zoom = 14) %>%
  addWMSTiles(
    "http://ovc.catastro.meh.es/Cartografia/WMS/ServidorWMS.aspx",
    layers = "PARCELA",
    options = WMSTileOptions(format = "image/png",
      transparent = TRUE),
    tileOptions(tms = TRUE),
    attribution = "")
{{< / highlight >}}

Se pueden añadir otras capas a estos últimos mapas cambiando lo que haya que cambiar después de leer [esto](http://www.catastro.minhap.gob.es/documentos/nuevowms_porcapas.pdf).