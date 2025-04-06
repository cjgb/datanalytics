---
author: Carlos J. Gil Bellosta
categories:
- números
date: 2017-03-02 08:13:23+00:00
draft: false
lastmod: '2025-04-06T19:10:19.657937'
related:
- 2011-04-19-graficos-v-mapas.md
- 2020-04-29-la-lista-de-la-verguenza-los-municipios-con-registros-civiles-no-informatizados.md
- 2016-06-20-6602-767-km-alrededor-de-espana-para-visitar-todas-sus-capitales-de-provincia.md
- 2022-01-02-por-que-vivimos-espanoles-tanta-altitud.md
- 2013-08-16-mapas-mapas-mapas-y.md
tags:
- ggmap
- madrid
- r
- rgdal
- terrazas
title: '"Todas" las terrazas de Madrid'
url: /2017/03/02/todas-las-terrazas-de-madrid/
---

![](/wp-uploads/2017/03/terrazas_madrid.png#center)

es un mapa en el que, en rojo, figuran _todas_ (véase la coda) las terrazas de Madrid. Los datos están extraídos del [censo de locales, sus actividades y terrazas de hostelería y restauración](http://datos.madrid.es/sites/v/index.jsp?vgnextoid=66665cde99be2410VgnVCM1000000b205a0aRCRD&vgnextchannel=374512b9ace9f310VgnVCM100000171f5a0aRCRD) del ayuntamiento y están procesados con

{{< highlight R >}}
terrazas <- fread("http://datos.madrid.es/egob/catalogo/200085-17-censo-locales.txt")
terrazas$coordenada_x_local <- as.numeric(gsub(",", ".", terrazas$coordenada_x_local))
terrazas$coordenada_y_local <- as.numeric(gsub(",", ".", terrazas$coordenada_y_local))
tmp <- terrazas[terrazas$coordenada_x_local > 1000, ]
tmp <- terrazas[terrazas$coordenada_y_local > 3e6,]

# UTM a siglo XXI
library(rgdal)
terrazas.utm     <- SpatialPoints(
    cbind(tmp$coordenada_x_local,
    tmp$coordenada_y_local),
    proj4string=CRS("+proj=utm +zone=30"))
terrazas.latlong <- spTransform(terrazas.utm,
    CRS("+proj=longlat"))

library(ggmap)
madrid <- get_map("madrid", zoom = 12)
tmp <- as.data.frame(terrazas.latlong)
ggmap(madrid) + geom_point(
    aes(x = coords.x1, y = coords.x2),
    data = tmp, size = .5,
    col = "red", alpha = 0.3)
{{< / highlight >}}

Sobre las cursivas de _todas_:

* Había coordenadas que apuntaban al golfo de Guinea. Ha habido que filtrarlas.
* Según escribo, veo por la ventana una terraza que no figura en la lista. Habrá más, seguro.

En definitiva, ni están todas las que son, ni son todas las que están, ni son todas las que deberían serlo y las hay que no deberían ser pero que son y están. Hay que tener en cuenta de que para el ayuntamiento hay dos realidades:

* La administrativa (licencias y autorizaciones)
* La que se recoge _a puros efectos estadísticos_

Y luego, para la gente que tiene ojos en la cara, hay una tercera realidad:

* La que es

Pero que no tiene necesariamente que coincidir con ninguna de las anteriores.