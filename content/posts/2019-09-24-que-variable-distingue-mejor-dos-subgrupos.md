---
author: Carlos J. Gil Bellosta
date: 2019-09-24 09:13:25+00:00
draft: false
title: ¿Qué variable distingue mejor dos subgrupos?

url: /2019/09/24/que-variable-distingue-mejor-dos-subgrupos/
categories:
- ciencia de datos
- consultoría
- python
- r
tags:
- cluster
- emd
- python
- r
- wasserstein
---




Es una pregunta que surge reiteradamente. Por ejemplo, cuando se compara un _clúster_ con el resto de la población y uno busca las variables que mejor lo caracterizan. Y crear gráficos como





![](/wp-uploads/2019/09/clusters_pv.png)






(extraído de [aquí](http://www.eustat.eus/document/datos/ct_tipoen_analisia_i.pdf)) donde las variables están ordenadas de acuerdo con su _poder discriminador_.







Mi técnica favorita para crear tales indicadores es la EMD (_earth mover's distance_) y/o sus generalizaciones, muy bien descritas en _[Optimal Transport and Wasserstein Distance](http://www.stat.cmu.edu/~larry/=sml/Opt.pdf)_ y disponibles en [R](https://cran.r-project.org/package=transport) y [Python](https://pot.readthedocs.io/en/stable/).



