---
author: Carlos J. Gil Bellosta
date: 2018-05-04 08:13:55+00:00
draft: false
title: Leaflet con capas WMS de Correos, Catastro, etc.

url: /2018/05/04/leaflet-con-capas-wms-de-coreos-catastro-etc/
categories:
- r
tags:
- catastro
- correos
- ine
- leaflet
- mapas
- r
---

Esta entrada es un subproducto del trabajo que pocería que he realizado estos días en [`caRtociudad`](https://github.com/rOpenSpain/caRtociudad).

`caRtociudad` permite generar mapas estáticos al estilo de `ggmap`. Iba a poner algún ejemplo, pero los dejo para otro día.

La cosa es que mejorando `caRtociudad::get_cartociudad_map`, se me ha pasado por la cabeza la posibilidad de realizar la integración no ya con `ggmap` sino con `leaflet`. Y así (¡probadlos!), para los códigos postales,

{{< highlight R "linenos=true" >}}
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

{{< highlight R "linenos=true" >}}
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

{{< highlight R "linenos=true" >}}
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

{{< highlight R "linenos=true" >}}
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
