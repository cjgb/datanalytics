---
author: Carlos J. Gil Bellosta
categories:
- estadística
- números
date: 2018-06-12 08:13:24+00:00
draft: false
lastmod: '2025-04-06T19:12:30.179381'
related:
- 2024-01-18-microdatoses-ultima-version.md
- 2019-03-21-encuesta-de-estructura-salarial-y-r-propedeutica.md
- 2018-06-13-el-mejor-formato-para-diseminar-microdatos.md
- 2014-05-14-nueva-version-de-microdatoses-heroes-villanos-y-mejoras.md
- 2013-01-14-algunos-resultados-de-la-encuesta-trimestral-de-coste-laboral.md
tags:
- ees
- ine
- salarios
title: ¡Un aplauso para el INE!
url: /2018/06/12/un-aplauso-para-el-ine/
---

Decían que la ciencia avanzaba de entierro en entierro. Diríase que el INE avanza de jubilación en jubilación y que el efecto de la savia nueva comienza a manifestarse.

Lo hace, por ejemplo, en los [microdatos de la Encuesta de Estructura Salarial de 2014](http://www.ine.es/dyngs/INEbase/es/operacion.htm?c=Estadistica_C&cid=1254736177025&menu=resultados&secc=1254736195110&idp=1254735976596). El fichero actual contiene, cosa inaudita, código para importarlos a SPSS, SAS y R. De verdad. Y eso merece nuestro aplauso. Particularmente, para el funcionario que haya tenido que pelear con la caverna para que las cosas no siguiesen siendo igual que siempre. Le debemos cervezas todos.

Comentarios adicionales:

* Se  agradece particularmente la vocación de servicio público que manifiesta el que se proporcione el código. Antes el INE liberaba los microdatos como quien echa de comer a los cochinos.
* No obstante, es un tanto pleonástico liberar datos en un formato, el que sea, y luego código para leerlo en diversos lenguajes. Es mejor liberarlos en un formato estándar y adecuado para la transferencia de datos (JSON es una buena opción) y que luego, cada cual se busque la vida.
* El punto anterior no significa que el mecanismo anterior de liberación de datos fuese bueno: el formato usado era todo menos estándar y adecuado para la transferencia de datos.