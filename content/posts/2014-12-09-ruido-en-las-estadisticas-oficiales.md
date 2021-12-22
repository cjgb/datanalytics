---
author: Carlos J. Gil Bellosta
date: 2014-12-09 07:13:20+00:00
draft: false
title: Ruido en las estadísticas oficiales

url: /2014/12/09/ruido-en-las-estadisticas-oficiales/
categories:
- estadística
tags:
- epa
- estadística pública
- pib
- varianza
---

Hacía tiempo que no hablaba de este tema. Pero han salido de mi LIFO de artículos potencialmente interesantes dos a los que merece la pena echar un ojo. El primero, [este](http://www.voxeu.org/article/uncertainty-official-statistics), arranca con

>Government statistical agencies commonly report official economic statistics as point estimates. Agency documents describing data and methods may acknowledge that estimates are subject to error, but they typically do not quantify error magnitudes. News releases present estimates with little if any mention of potential error.

e incluye un ejemplo estupendo de buenas prácticas:

[![Manski_figure1](/wp-uploads/2014/12/Manski_figure1.png)
](/wp-uploads/2014/12/Manski_figure1.png)

Se trata de un gráfico elaborado por el Banco de Inglaterra en el que las cifras del PIB incluyen bandas de error no solo en las proyecciones sino también en los valores históricos (y _observados_). Pero eso ya lo saben los históricos de estas páginas porque [aquí](http://www.datanalytics.com/2010/05/07/%C2%BFhemos-salido-de-la-recesion-%C2%A1queremos-nuestros-intervalos-de-confianza/) hablé de ello.

El [segundo](http://www.nytimes.com/2014/05/02/upshot/how-not-to-be-misled-by-the-jobs-report.html) es más entretenido e ilustra el discurso con una animación de la que capturo esto:

[![JobReportSim](/wp-uploads/2014/12/JobReportSim.png)
](/wp-uploads/2014/12/JobReportSim.png)

La animación muestra cómo podrían ser las evoluciones mensual de cierto indicador económico de los EE.UU., el _Job Report_, si los valores verdaderos (¡desconocidos!) tuviesen una determinada forma (aumento constante del número de empleos en el ejemplo anterior).

Por eso, cuando en sitios como [este](http://nadaesgratis.es/?p=40846) veo que publican gráficos tales como

[![epa_fp](/wp-uploads/2014/12/epa_fp.png)
](/wp-uploads/2014/12/epa_fp.png)

en los que se opera sobre las dos series de estimadores puntuales para construir un gráfico "de base 100" pienso: ¡animalicos! Si alguien tiene tiempo, lo animo a construir una animación cómo podría fluctuar ese último gráfico en función de los valores recogidos en EPAs alternativas.