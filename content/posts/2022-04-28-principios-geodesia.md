---
author: Carlos J. Gil Bellosta
date: 2022-04-28
title: 'Principios de geodesia'
description: 'Principios de geodesia'
url: /2022/04/28/principios-geodesia/
categories:
- varios
tags:
- geodesia
---

[Estas son notas que tenía guardadas para mí en mi Obsidian particular pero que he decidido hacer públicas con una edición mínima por si a alguien les pueden resultar útiles. Seguro que les chirriarán a los muy expertos en el tema. Pero la culpa es suya por no expresarse con claridad y obligarnos a los diletantes a tratar de hacerlo.]

Si tienes un conjunto de datos que representan puntos ---o segmentos, o polígonos, o...--- sobre la superficie terrestre puedes representarlos sin problemas usando las técnicas habituales. La cosa cambia cuando tienes dos fuentes de datos cartográficas y quieres combinarlas de alguna manera (p.e., una puede ser un conjunto de puntos y otra, un mapa base sobre el que representarlos): un mismo punto sobre la esfera terrestre admite representaciones distintas en distintos _sistemas de coordenadas_ y para combinar fuentes de datos cartográficas distintas es necesario alinear dichos sistemas de referencia.

En esta entrada no se abundará en el cómo sino en, más bien, qué son y cómo están organizados dichos sistemas de referencia.

Para empezar, las coordenadas pueden ser geográficas (grados) o proyectadas (metros). En cualquiera de los dos casos se utiliza un _sistema de coordenadas_ determinado que recibe el nombre específico de [_sistema de referencia geodésico_](https://en.wikipedia.org/wiki/Geodetic_datum).

Un sistema de referencia es una función que asocia a cada punto del globo un par de números. Dicha función admite una serie de parámetros (que definen el elipsoide, el tipo de proyección, etc.). Así que, en principio, hay infinitos sistemas de referencia.

No obstante, algunos de ellos han sido estandarizados. Hay sistemas de referencia específicos que han sido optimizados para determinadas regiones, como el NAD83 (Norteamérica), OSGB36 (Islas Británicas) o el ETRS89 (Europa continental). El ED50 S&P es el antiguo sistema oficial español, que fue reemplazado por el ETRS89.

Los sistemas de referencia más usuales tienen su código [EPGS](https://en.wikipedia.org/wiki/EPSG_Geodetic_Parameter_Dataset). Por ejemplo, el ETRS89 es el [EPSG 4258](https://epsg.io/4258).

[Todos los sistemas que permiten trabajar con datos cartográficos tienen algún tipo de función que permite transformar coordenadas de un EPGS en otro; el problema muchas veces consiste en averiguar cuál es el EPGS correspondiente a unos datos: demasiadas veces, los _expertos_ dan por hecho muchas cosas. Me los imagino pensando: ¿en cuál creéis que va a estar?]

Google Maps (y otros servicios _online_) usan el sistema EPSG 3857 para proyectar coordenadas geográficas EPSG 4326 en píxeles sobre la pantalla. Prima la sencillez sobre la exactitud (véase [esto](https://en.wikipedia.org/wiki/Web_Mercator_projection#Formulas)) y por eso es denostado por los expertos/puristas de la cosa.

Otro sistema de referencia muy usado es el WSG84 (EPSG 4326), que es el que utiliza, por ejemplo, el GPS. En realidad, tanto da usar WSG84 que ETRS89: las diferencias entre ambos está en el orden de los milímetros (según [esto](https://mapcol.blogspot.com/2008/09/diferencias-entre-etrs89-wgs84-y-ed50-s.html)).

Uno de los parámetros de un sistema de referencia es el elipsoide, es decir, la figura geométrica que se utiliza como aproximación a la forma de la tierra. En la práctica se utilizan o se han utilizado apenas unos cuantos distintos y los más famosos son el WSG84 y el GRS80. Obviamente, el sistema de referencia WSG84 utiliza el elipsoide homónimo (no sé si para confundir o para todo lo contrario) mientras que el europeo, el ETRS89 el GRS80.

Finalmente, está el _carajal_ de las _coordenadas UTM_. La mejor manera de describir las coordenadas UTM es considerarlas una familia concreta de sistemas de referencia (tanto en uso como en desuso). Por ejemplo,

- EPSG 23029: es la proyección UTM ED50 Huso 29 N (en desuso)
- EPSG 25829: es la proyección UTM ETRS89 Huso 29 N (en uso)

Las coordenadas UTM son todas proyectadas (metros, no grados). Usan internamente un sistema de referencia geográfico (grados), como en los ejemplos anteriores (donde se usa el ED50, en desuso, o el ETRS89, en uso) y están asociadas a determinados _husos_ o regiones preestablecidas fuera de las cuales se producen distorsiones considerables (recuérdese: la tierra no es plana) y sobre los que se puede saber más [aquí](https://en.wikipedia.org/wiki/Universal_Transverse_Mercator_coordinate_system).
