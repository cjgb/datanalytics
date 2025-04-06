---
author: Carlos J. Gil Bellosta
categories:
- gráficos
- r
date: 2020-10-13 09:13:00+00:00
draft: false
lastmod: '2025-04-06T18:49:01.066415'
related:
- 2018-05-04-leaflet-con-capas-wms-de-coreos-catastro-etc.md
- 2011-04-19-graficos-v-mapas.md
- 2019-07-15-cartogramas-con-recmap.md
- 2015-06-08-una-de-las-cosas-que-me-irritan-de-r.md
- 2013-03-05-ggmap-mapas-con-r.md
tags:
- gráficos
- ign
- mapas
- r
- leaflet
title: IGN + R + leaflet
url: /2020/10/13/ign-r-leaflet/
---

Iba a escribir una entrada técnica al respecto, pero resulta que [ya la había hecho hace un tiempo](https://www.datanalytics.com/2018/05/04/leaflet-con-capas-wms-de-coreos-catastro-etc/) y no me acordaba.

Solo quiero abundar en el tema para recordaros que si os interesa mostrar mapas de España vía [`leaflet`](https://rstudio.github.io/leaflet/), en lugar de usar las capas por defecto, que vaya a saber uno de dónde las sacan, uno siempre puede tirar de la [cartografía oficial](https://www.ign.es/web/ign/portal/ide-area-nodo-ide-ign).

Uno de los motivos puede ser que el mapa forme parte de una aplicación _seria_. Y las (o ciertas) capas por defecto de `leaflet` muestran hasta los puticlús,

![](/wp-uploads/2020/10/leaflet_atocha.png#center)

y eso puede hacer arquear alguna ceja. De hecho, en una reciente aplicación [nuestra](https://www.circiter.es), tuvimos problemas porque alguien, movido tal vez por el aburrimiento, hizo zum, zum, zum y arrastró y arrastró el mapa hasta un remoto confín. Y como quiera que advirtió que no mostraba los altos del Golán —o vaya uno a saber qué otro atribulado rincón del mundo— de acuerdo a como los da por buenos la sin par la diplomacia española, se armó un cristo de padre y muy señor mío.