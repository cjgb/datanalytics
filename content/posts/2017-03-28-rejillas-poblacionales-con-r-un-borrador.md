---
author: Carlos J. Gil Bellosta
date: 2017-03-28 08:13:06+00:00
draft: false
title: Rejillas poblacionales con R (un borrador)

url: /2017/03/28/rejillas-poblacionales-con-r-un-borrador/
categories:
- r
tags:
- demografía
- españa
- ggmap
- guadalajara
- ine
- mapas
- maptools
- r
- sp
---

![](/wp-uploads/2017/03/C719aiTXkAAzFqX.jpg)

me llegó ayer por Twitter (vía [@unnombrealazar](https://twitter.com/unnombrealazar)). En el mapa aparece representada la edad media de la población por provincia (y hoy voy a dar las cloropetas por buenas). Salta a la vista Guadalajara: tiene una edad media ¿sorprendentemente? baja. Tanto que tuve que comprobarlo en el INE. La explicación (siempre a posteriori) más obvia es

>[@gilbellosta](https://twitter.com/gilbellosta) [@unnombrealazar](https://twitter.com/unnombrealazar) inmigrantes que trabajan en el corredor del henares, familias con niños supongo
>
> -- jesus alfaro (@jesusalfar) [26 de marzo de 2017](https://twitter.com/jesusalfar/status/845991732726677504)

¿Será cierto? A saber. Seguramente. Pero, ¿podemos comprobarlo?

Es complicado obtener datos de edades por municipio. No obstante, se me ocurrió (y a esto va mi entrada) examinar una fuente de datos poco conocida: la de las rejillas poblacionales. Está cada vez más de moda estudiar la población no tanto por municipios sino en rejillas, como vienen haciendo históricamente los biólogos con las especies, en cuadros de un determinado tamaño. [El INE proporciona información en rejillas de 1 km de arista](http://www.ine.es/censos2011_datos/cen11_datos_resultados_rejillas.htm). Por un lado, los _shapefiles_ de las rejillas (solo de aquellas donde vive alguien) y, por el otro, algunos resúmenes estadísticos de quienes las habitan.

¿Cómo procesar esos datos? Con R. ¿Cómo procesarlos con R? Con dificultad. Ayer ensayé y no terminé nada presentable. Además, este asunto es muy tangencial a mis intereses más perentorios. No obstante, como es muy instructivo, toca muchos palos y por si a alguien le interesa profundizar en la cosa, copio debajo el código que me sirvió para hacer algo. Es un borrador vergonzante, aviso, y puede contener errores. Úsese con la debida precaución.

{{< highlight R "linenos=true" >}}
library(raster)
library(rgdal)
library(ggmap)

rejillas <- readOGR("mapa", "RJ_CPV_20111101_TT_02_R_INE")

#plot(rejillas)  ¡tarda!

tmp <- read.csv2("C2011_RejillaEU_Indicadores.csv", sep = ",")
dat <- merge(rejillas, tmp)

dat <- spTransform(dat, CRS("+proj=longlat"))

# véase el xls del INE con el diccionario de datos
#colnames(dat@data)

# zona de Guadalajara
newbbox <- dat@bbox
newbbox[,1] <- c(-4, -2.5)
newbbox[,2] <- c(40.25, 42)
tmp <- crop(dat, extent(t(newbbox)))

# como no tenemos edad media...
tmp$ratio_jovenes <- tmp$t3_1 / tmp$t1_1

#spplot(tmp, "ratio_jovenes", col = "transparent")

# ahora, con el mapa de Google por debajo
tmp2 <- fortify(tmp)
tmp3 <- data.frame(
    id = as.character(tmp$OBJECTID_1),
    ratio_jovenes = tmp$ratio_jovenes,
    stringsAsFactors = FALSE)
tmp2 <- merge(tmp2, tmp3)

centro <- geocode("Guadalajara, Spain")
mapa <- get_map(centro, zoom = 9)
ggmap(mapa) +
    geom_polygon(aes(
        fill = ratio_jovenes,
            x = long, y = lat,
            group = group),
        data = tmp2)
{{< / highlight >}}

**Addenda:** Véase [esto](https://www.datanalytics.com/2017/04/19/guadalajara-joven-guadalajara-inconclusa/).