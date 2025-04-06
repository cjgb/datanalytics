---
author: Carlos J. Gil Bellosta
categories:
- estadística
- números
- r
date: 2013-01-24 13:50:39+00:00
draft: false
lastmod: '2025-04-06T18:53:15.498566'
related:
- 2012-11-28-coma-cero-dos-por-ciento-anda-ya.md
- 2014-07-17-facetas-para-entender-tal-vez-la-evolucion-del-paro.md
- 2014-08-12-tienen-sentido-las-tasas-municipales-de-desempleo.md
- 2012-08-06-un-paseo-por-el-paquete-microdatoses-y-la-epa-de-nuevo.md
- 2015-05-14-cualquier-parecido-con-la-realidad-es-pura-coincidencia.md
tags:
- epa
- estadística pública
- microdatoses
- r
title: Tu tasa de paro personal
url: /2013/01/24/tu-tasa-de-paro-personal/
---

En el pasado nos hemos ocupado en estas páginas del [desempleo](http://www.datanalytics.com/tag/epa/). Hoy, día en el que se han anunciado los datos de la EPA del último trimestre de 2012, sale a la luz [TTParo.es](http://tutasadeparo.es/), un proyecto en el que he colaborado (aunque en el que todo lo que se ve es obra de [Kaleidos](http://kaleidos.net/)) y que permite calcular _tu tasa de paro personal_.

Por ejemplo, en

[![](/wp-uploads/2013/01/mi_tasa_paro_personal.png#center)
](/wp-uploads/2013/01/mi_tasa_paro_personal.png#center)

puedo ver la evolución de la tasa de paro de aquellos que _son como yo_ desde el 2005 y compararla con la general.

Desde hace mucho tiempo vengo repitiendo que la forma en la que se informa de los resultados trimestrales de la EPA tiene un sesgo administrativo (por provincias o comunidades autónomas) con reminiscencias de la sección de deportes (el equipo de mi ciudad es mejor que el de la tuya). Pero provincia, comunidad autónoma y, en cierta medida, el sexo, no son las variables determinantes que nos afectan a la hora de buscar empleo: existen otras más importantes que nos encajan en segmentos relativamente estancos y en los que, en definitiva, nos movemos.

Y la información sobre este fenómeno con una _dimensión micro_ tan humana debería, creo yo, reflejar mejor estas circunstancias.

(Y sí, hemos usando subterráneamente R y el paquete [MicroDatosEs](http://www.datanalytics.com/tag/microdatoses/)).