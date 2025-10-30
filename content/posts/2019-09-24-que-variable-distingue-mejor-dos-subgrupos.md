---
author: Carlos J. Gil Bellosta
categories:
- ciencia de datos
- consultoría
- python
- r
date: 2019-09-24 09:13:25+00:00
lastmod: '2025-10-26'
related:
- 2020-11-02-distancias-i-el-planteamiento-del-problema.md
- 2017-03-20-em-duro-a-mano-y-para-humanos.md
- 2020-11-06-distancias-iii-la-gran-pregunta.md
- 2011-08-03-clustering-iii-sobresimplificacion.md
- 2020-11-20-distancias-iv-la-solucion-rapida-y-sucia.md
tags:
- cluster
- emd
- python
- r
- wasserstein
title: ¿Qué variable distingue mejor dos subgrupos?
url: /2019/09/24/que-variable-distingue-mejor-dos-subgrupos/
---

Es una pregunta que surge reiteradamente. Por ejemplo, cuando se compara un _clúster_ con el resto de la población y uno busca las variables que mejor lo caracterizan. Y crear gráficos como

![](/wp-uploads/2019/09/clusters_pv.png#center)

(extraído de [aquí](http://www.eustat.eus/document/datos/ct_tipoen_analisia_i.pdf)) donde las variables están ordenadas de acuerdo con su _poder discriminador_.

Mi técnica favorita para crear tales indicadores es la EMD (_earth mover's distance_) y/o sus generalizaciones, muy bien descritas en [_Optimal Transport and Wasserstein Distance_](http://www.stat.cmu.edu/~larry/=sml/Opt.pdf) y disponibles en [R](https://cran.r-project.org/package=transport) y [Python](https://pot.readthedocs.io/en/stable/).