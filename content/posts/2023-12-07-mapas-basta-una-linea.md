---
author: Carlos J. Gil Bellosta
categories:
- r
date: 2023-12-07
draft: false
lastmod: '2025-04-06T18:59:38.305032'
related:
- 2012-09-10-graficos-estadisticos-y-mapas-con-r-un-analisis.md
- 2019-07-15-cartogramas-con-recmap.md
- 2013-03-19-mapas-realmente-necesarios.md
- 2022-04-28-principios-geodesia.md
- 2017-03-02-todas-las-terrazas-de-madrid.md
tags:
- gráficos
- mapas
- cartografía
- proyecciones
title: Basta una línea para mejorar tus mapas; pero, ¿cuál?
url: /2023/12/07/r-mapas-proyecciones/
---

A la vista de los mapas

![](/img/2023/mapas-proyecciones.png#center)

pocos habrán que no prefieran el de la derecha. Los mapas están extraídos de la entrada
[_Improve your maps in one line of code changing map projections_](https://ikashnitsky.phd/2023/map-proj/index.html),
cuyo título ha sido elegido muy acertadamente en tanto que los mapas han sido construidos usando

{{< highlight R >}}
gd_n2_main_laea <- gd_n2_main %>%
    st_transform(crs = 3035)

a <- gd_n2_main %>%
    ggplot() +
    geom_sf(fill = "#F48FB1", color = NA)+
    geom_sf(data = bord, color = "#C2185B", size = .5)+
    coord_sf(crs = 3857)

b <- gd_n2_main_laea %>%
    ggplot() +
    geom_sf(fill = "#DCE775", color = NA)+
    geom_sf(data = bord, color = "#AFB42B", size = .5)

library(patchwork)

a + b + plot_annotation(tag_levels = "A")
{{< / highlight >}}

y, por lo tanto, solo difieren en la línea

{{< highlight R >}}
gd_n2_main_laea <- gd_n2_main %>%
    st_transform(crs = 3035)
{{< / highlight >}}

que transforma _adecuadamente_ el sistema de referencia (de coordenadas).

Pero, para usos concretos, ¿qué CRS hay que usar? Echo de menos ---¿existirá?--- una plantilla ---análoga a esas que circulan por ahí y que recomiendan maneras de representar gráficos en función de su naturaleza--- que sugiera una lista de CRS apropiados según el tipo de mapa que uno quiera representar.

Nota: Vale, admito que, al igual que pasa con los gráficos, no está de más ensanchar el conocimiento propio en los CRS más comunes y sus usos habituales y recomendados. Pero, ¿qué hacemos los que tenemos muchas otras cosas que hacer y nos conformamos con lo bueno sin pretensiones de alcanzar lo perfecto?