---
author: Carlos J. Gil Bellosta
categories:
- ciencia de datos
- estadística
date: 2011-12-19 06:58:54+00:00
draft: false
lastmod: '2025-04-06T19:11:35.003171'
related:
- 2022-02-15-mas-correlaciones-siglo-xxi.md
- 2019-08-29-la-multivarianza-total-de-la-distancia-no-implica-causalidad.md
- 2014-12-08-la-correlacion-ni-siquiera-implica-correlacion.md
- 2018-11-16-colinealidad-y-posterioris.md
- 2018-03-27-que-mas-se-supo-de-la-correlacion-del-s-xxi.md
tags:
- correlación
- estadística
- ciencia de datos
title: ¿La correlación "del siglo XXI"?
url: /2011/12/19/la-correlacion-del-siglo-xxi/
---

Bajo el título [Detecting Novel Associations in Large Data Sets](http://www.sciencemag.org/content/334/6062/1518.abstract) se ha publicado recientemente en Science un coeficiente alternativo a la correlación _de toda la vida_ para cuantificar la relación funcional entre dos variables.

El artículo (que no he podido leer: si alguien me pudiera pasar el pdf...) ha tenido cierto impacto, al menos momentáneo, en la red. Puede leerse [un resumen en esta entrada](http://francisthemulenews.wordpress.com/2011/12/16/se-publica-en-science-un-nuevo-coeficiente-matematico-para-el-estudio-de-correlaciones-no-lineales-entre-pares-de-datos/) u [otro bastante más cauto](http://andrewgelman.com/2011/12/mr-pearson-meet-mr-mandelbrot-detecting-novel-associations-in-large-data-sets/) en la de A. Gelman. Existe información adicional (e incluso código en R) en [esta página](http://www.exploredata.net/).


[![](/wp-uploads/2011/12/dibujo20111216_comparison_of_mic_to_existing_methods.png#center)
](/wp-uploads/2011/12/dibujo20111216_comparison_of_mic_to_existing_methods.png#center)


Las dos ideas motivadoras de este método son:



* Generalidad: poder detectar _cualquier_ tipo de relación funcional entre dos variables, no únicamente relaciones lineales (como el coeficiente de correlación).
* Homegeneidad: el estadístico debería ser similar cuando se comparen _configuraciones_ con una relación funcional distinta para un nivel de ruido análogo (véase la figura adjunta).

En muchos contextos, el análisis de un conjunto de datos comienza por el estudio de una matriz de correlaciones entre variables tal como

[![](/wp-uploads/2011/12/correlation_classic1.jpg)
](/wp-uploads/2011/12/correlation_classic1.jpg)

que resalta la relaciones de dependencia lineal entre conjuntos amplios de variables. Con el aporte de este nuevo artículo, tal vez podrían identificarse otro tipo de relaciones funcionales igualmente interesantes. Con tiempo, le echo un vistazo.