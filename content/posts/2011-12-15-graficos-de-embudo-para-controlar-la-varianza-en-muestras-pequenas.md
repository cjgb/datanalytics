---
author: Carlos J. Gil Bellosta
date: 2011-12-15 06:43:13+00:00
draft: false
title: Gráficos de embudo para controlar la varianza en muestras pequeñas

url: /2011/12/15/graficos-de-embudo-para-controlar-la-varianza-en-muestras-pequenas/
categories:
- estadística
- gráficos
- números
- r
tags:
- estadística
- gráficos
- números
- r
- sas
- muestras pequeñas
---

Publiqué hace un tiempo una entrada en esta bitácora sobre el problema que representa la desigualdad de los tamaños muestrales a la hora de comprender cierto tipo de datos, como por ejemplo, los que trata de representar el gráfico


[![](/wp-uploads/2011/08/kidney_cancer_map.gif)
](/wp-uploads/2011/08/kidney_cancer_map.gif)


que muestra la incidencia del cáncer de riñón en distintas zonas de en EE.UU. Como indiqué entonces, los valores extremos se encuentran en zonas menos pobladas: [cuanto menor es la población, más probables son las proporciones inhabituales](http://www.datanalytics.com/2011/08/10/de-la-varianza-en-muestras-pequenas-y-el-problema-del-hospital/).

Los _gráficos de embudo_ son una alternativa pensada para evitar este tipo de sesgos. Por ejemplo

[![](/wp-uploads/2011/12/bowel-cancer-mortality-ra-007.jpg)
](/wp-uploads/2011/12/bowel-cancer-mortality-ra-007.jpg)

relaciona la proporción de casos de cáncer con el tamaño de la población añadiendo, si se me permite el término, curvas de _isosignificancia_ para facilitar la comparación entre entidades desiguales en tamaño.

El que quiera saber más al respecto, tiene un [artículo de Spiegelhalter sobre gráficos de embudo](http://medicine.cf.ac.uk/media/filer_public/2010/09/24/spiegelhalter_stats_in_med_funnel_plots.pdf). Además, existe la posibilidad de crearlos, cuando menos, con

* una [herramienta en línea](http://tools.erpho.org.uk/poisson.aspx),
* [R](http://blog.ouseful.info/2011/10/31/power-tools-for-aspiring-data-journalists-r/) e,
* incluso, [en SAS](http://blogs.sas.com/content/iml/2011/11/23/funnel-plots-for-proportions/) (usando SAS/IML).

