---
author: Carlos J. Gil Bellosta
categories:
- estadística
- r
date: 2020-02-19 09:13:00+00:00
draft: false
lastmod: '2025-04-06T19:12:23.831329'
related:
- 2016-03-03-mezclas-de-distribuciones-con-rstan.md
- 2020-03-10-mas-sobre-el-metodo-delta-propagate.md
- 2016-03-28-un-teorema-de-muestreo-que-no-se-si-existe.md
- 2020-05-11-agregar-antes-de-modelar.md
- 2018-11-05-cuatro-paquetes-interesantes-de-r.md
tags:
- mixexp
- paquetes
- r
title: Análisis estadístico de mezclas
url: /2020/02/19/analisis-estadistico-de-mezclas/
---

No es algo que ocurra habitualmente. Creo que conozco a alguien que me dijo que lo tuvo que hacer una vez. Pero podría ocurrir en algún momento que tuvieses que analizar mezclas, es decir, situaciones experimentales en las que lo importante es la proporción de ciertos ingredientes (con la restricción obvia de que dichas proporciones suman la unidad).

![](/img/2020/02/experimentos_mezclas.png#center)

Para más datos, _[Mixture Experiments in R Using `mixexp`](https://www.jstatsoft.org/article/view/v072c02)_, que describe el paquete de R [`mixexp`](https://CRAN.R-project.org/package=mixexp).