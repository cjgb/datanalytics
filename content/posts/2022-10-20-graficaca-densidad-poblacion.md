---
author: Carlos J. Gil Bellosta
categories:
- gráficos
date: 2022-10-20
lastmod: '2025-04-06T18:49:52.701171'
related:
- 2017-05-12-me-too-me-too.md
- 2013-03-19-mapas-realmente-necesarios.md
- 2017-03-28-rejillas-poblacionales-con-r-un-borrador.md
- 2019-05-06-elecciones-mapas-y-mi-favorito.md
- 2014-08-12-tienen-sentido-las-tasas-municipales-de-desempleo.md
tags:
- graficaca
- mapas
- demografía
title: ¡Cuidado con las discontinuidades (subrepticias o no) en las escalas de color!
url: /2022/10/20/graficaca-densidad-poblacion/
---

El tema de hoy es el mapa

![](/img/2022/10/densidad_poblacion_graficaca.png#center)

distribuido de forma no irónica vía Twitter por algún desavisado al que no merece la pena apuntar con el dedo.

Podemos aceptar que, en primera aproximación, _pasa el fitro_. Existen desde hace un tiempo datos estadísticos ya no por regiones administrativas sino por [_rejillas_](/2017/03/28/rejillas-poblacionales-con-r-un-borrador/) de 1 km² y en este gráfico se han limitado a representar esos datos.

Uno de los problemas asociados a este tipo de datos (en rejillas) es que donde no vive nadie no hay una rejilla con el dato asociado `pop = 0`, sino que, directamente, no hay rejilla. Es decir, que donde falta rejilla, uno no sabe si hay un lago, el mar, o los Monegros. Para entender esto, merece la pena echar un vistazo al aspecto de las rejillas en la zona de Salzburgo:

![](/img/2022/10/densidad_poblacion_salzburgo.png#center)

La consecuencia de todo lo anterior es que usando la escala de colores propuesta en el primer gráfico, hay un salto excesivamente abrusco entre las las rejillas _casi_ despobladas y las _totalmente_ despobladas. En Eurostat, de hecho, han aplicado una escala de colores más natural y el resultado es

![](/img/2022/10/densidad_poblacion_corregido.png#center)

que tiene, sin duda, una lectura mucho menos dramática.