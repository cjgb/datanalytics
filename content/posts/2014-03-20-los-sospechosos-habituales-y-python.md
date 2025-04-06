---
author: Carlos J. Gil Bellosta
categories:
- ciencia de datos
- estadística
- r
date: 2014-03-20 08:44:17+00:00
draft: false
lastmod: '2025-04-06T19:09:05.965754'
related:
- 2022-09-20-tools-etl-memory.md
- 2014-03-12-veinte-paquetes-de-r-para-cientificos-de-datos.md
- 2013-12-18-cuanta-gente-usara-r-vs-python-vs-otros-dentro-de-1000-anos.md
- 2011-11-28-r-en-la-ensenanza-unos-comentarios-a-los-comentarios.md
- 2015-12-11-pasando-data-frames-de-r-como-tablas-de-pandas-en-python-usando-rpython.md
tags:
- estadística
- ciencia de datos
- python
- r
title: Los sospechosos habituales y Python
url: /2014/03/20/los-sospechosos-habituales-y-python/
---

Llamo sospechosos habituales a esos programas y lenguajes para el análisis de datos distintos de R cuya decreciente popularidad nos parece tan natural a los partidarios de este último. Abundan los análisis de cuotas de mercado tales como [_What Analytic Software are People Discussing?_](http://r4stats.com/2013/02/12/what-analytic-software-are-people-discussing/)

¿Cuáles son estos sospechosos habituales? Pues SAS, SPSS y algún otro: Stata, Statistica, Minitab,...

Sin embargo, R tiene _competidores_ más serios a medio plazo. Uno de ellos, el más importante, es Python. Lo veo a mi alrededor: son muchos los físicos, los ingenieros, los informáticos que tienen experiencia en ese lenguaje y, sintiéndose cómodos en él —y les alabo el gusto— quieren [utilizarlo para analizar datos](http://www.talyarkoni.org/blog/2013/11/18/the-homogenization-of-scientific-computing-or-why-python-is-steadily-eating-other-languages-lunch/) cuando les toca.

Y para que mis lectores puedan hacerse una idea de cuáles son las herramientas disponibles para el análisis de datos con Python y cuál es el estado del arte, traigo a esta entrada una serie de enlaces comentados.

El primero habla sobre [pandas](http://wesmckinney.com/blog/?p=414), una extensión de Python que implementa estructuras de datos similares a los `data.frames` de R. Es precisamente la falta de una estructura de datos tabular la que ha dificultado el análisis de datos en otros lenguajes. Pandas suple esa carencia.

Un segundo aspecto que diferencia a R de muchos de sus competidores es la capacidad para generar gráficos. En Python se han podido hacer cosas normalitas (como [esta](http://alstatr.blogspot.ch/2014/03/python-numerical-description-of-data.html)), pero algunos proyectos más avanzados tienen buena pinta: [seaborn](http://stanford.edu/~mwaskom/software/seaborn/) quiere convertirse en `ggplot2`, [matplotlib](http://matplotlib.org/) es un proyecto maduro y [Bokeh ](http://bokeh.pydata.org/)podría dar que hablar en el futuro.

En cuanto a la parte dura, la estadística en sí misma, la comunidad de usuarios de Python ha trascendido nuestros viejos conocidos [`numpy`](http://www.numpy.org/) y [`scipy`](http://www.scipy.org/) y están apareciendo librerías de _machine learning_ promisorias tales como [`scikit-learn`](http://scikit-learn.org/stable/) o [`mlpy`](http://mlpy.sourceforge.net/). Tengo la sensación, sin embargo, que están más orientadas a la minería de datos que al análisis estadístico y no estoy seguro de si admiten esas _sutilezas_ a las que acostumbran los estadísticos: interacciones entre variables, factores, etc. Me da la impresión de que en ese sentido todavía están verdes.

Y por supuesto, tienen poco que ofrecer a quienes trabajan en áreas concretas y específicas de la estadística, p.e., encuestas complejas, que tienen mucho menos solapamiento con la minería de datos.

En otro orden de cosas, [`IPython`](http://ipython.org/) permite crear _cuadernos_, documentos parecidos a los que se pueden crear en R con `knitr `o `Sweave` integrando código, gráficos y texto.

Y termino con dos artículos que contienen enlaces a todavía más herramientas de Python para el análisis de datos: [este](http://datacommunitydc.org/blog/2013/05/stepping-up-to-big-data-with-r-and-python/) y [este](http://www.kdnuggets.com/2012/11/best-python-modules-for-data-mining.html).