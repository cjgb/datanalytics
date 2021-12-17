---
author: Carlos J. Gil Bellosta
date: 2020-09-17 09:13:00+00:00
draft: false
title: Una herramienta para el análisis no paramétrico de series temporales

url: /2020/09/17/una-herramienta-para-el-analisis-no-parametrico-de-series-temporales/
categories:
- r
tags:
- paquetes
- r
- series temporales
---




Sí, es un ejemplar de mi colección de rarezas estadísticas, técnicas que no entran dentro del currículo estándar pero que pudieran resultar útiles en algún momento, para algún caso particular.







Hoy, [_perfiles matriciales_ para series temporales](https://cran.r-project.org/web/packages/tsmp/vignettes/press.html), una técnica que sirve esencialmente, para identificar _formas que se repiten_ en series temporales, como







![](/wp-uploads/2020/09/MP_penguin_data.jpg)








Entiendo además que, como consecuencia, también para señalar aquellos ciclos en que se produzcan perfiles anómalos, para su evaluación. Pero dejo que consultéis la información en, por ejemplo, [aquí](https://cran.r-project.org/web/packages/tsmp/index.html) y [aquí](https://www.cs.ucr.edu/~eamonn/MatrixProfile.html).







No puedo dar una opinión más personal y directa del uso y aplicaciones de estas técnica: no la he usado nunca. El tipo de series que se ve que analizan se parecen poco a las que he trabajado o estoy trabajando ahora. En particular, tendría que ver cómo operar con series que tienen una tendencia natural.







La procedencia declarada de los usuarios satisfechos cuyos comentarios sobre estas técnicas publica la [página del proyecto](https://www.cs.ucr.edu/~eamonn/MatrixProfile.html) apunta en esa dirección: es gente que trabaja en campos mucho más cíclicos (cadenas de producción, por ejemplo) que los míos. Pero ahí queda.



