---
author: Carlos J. Gil Bellosta
categories:
- estadística
- r
date: 2020-12-02 09:13:00+00:00
draft: false
lastmod: '2025-04-06T18:58:14.966163'
related:
- 2020-03-11-analisis-de-la-supervivencia-cuando-todas-las-observaciones-estan-censuradas.md
- 2018-11-05-cuatro-paquetes-interesantes-de-r.md
- 2019-07-03-modelizacion-de-retrasos-una-aplicacion-del-analisis-de-supervivencia.md
- 2015-02-12-parametrizacion-de-modelos-de-supervivencia-parametricos.md
- 2020-05-28-sobre-la-funcion-de-riesgo-en-el-analisis-de-la-supervivencia.md
tags:
- bart
- paquetes
- r
- recurrente
title: Análisis de eventos recurrentes
url: /2020/12/02/analisis-de-eventos-recurrentes/
---

He sido fan del análisis de los eventos recurrentes desde antes incluso de saber que existía tal cosa formalmente.

Es una extensión del análisis de la supervivencia donde resucitas y vuelves a morirte a lo Sísifo. Es decir, en el análisis de la supervivencia, te mueres y ya; por eso, si quieres extender el análisis de la supervivencia a asuntos tales como compras de clientes  es necesario usar el calzador muy heterodoxamente.

Pero existen técnicas (véase
[esto](https://www.omicsonline.org/open-access/an-overview-of-statistical-models-for-recurrent-events-analysis-a-review-2327-4972-1000354-105753.html)
o [esto](https://bmcmedresmethodol.biomedcentral.com/articles/10.1186/s12874-017-0462-x)),
algunas de las cuales están [disponibles en R](https://cran.r-project.org/web/packages/BART/vignettes/the-BART-R-package.pdf), para modelar ese tipo de datos.

Creo que voy a tener pronto ocasión de verlas en funcionamiento y espero poder comentar pronto si están a la altura de las expectativas.