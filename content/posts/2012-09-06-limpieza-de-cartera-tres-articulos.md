---
author: Carlos J. Gil Bellosta
categories:
- estadística
- nlp
- r
date: 2012-09-06 07:36:24+00:00
draft: false
lastmod: '2025-04-06T19:12:32.283664'
related:
- 2012-07-27-a-los-datos-mismos.md
- 2014-08-11-procesos-puntuales-una-primera-aproximacion.md
- 2014-08-08-procesos-de-poisson-no-homogeneos-la-historia-de-un-fracaso.md
- 2014-09-22-la-diapositiva-perdida-version-algo-mas-extendida.md
- 2023-01-18-modelo-poisson-numpyro.md
tags:
- estadística
- nlp
- r
title: 'Limpieza de cartera: tres artículos'
url: /2012/09/06/limpieza-de-cartera-tres-articulos/
---

Estoy limpiando mi cartera y antes de mandar unos cuantos legajos al archivador (o al contenedor de reciclaje) quiero dejar nota de sus contenidos para referencia mía y, quién sabe, si inspiración de otros.

El primer artículo es [_Tackling the Poor Assumptions of Naive Bayes Text Classifiers_](http://www.stanford.edu/class/cs276/handouts/rennie.icml03.pdf). Tiene esencialmente dos partes. La primera analiza críticamente el método de [clasificación bayesiano ingenuo](http://es.wikipedia.org/wiki/Clasificador_bayesiano_ingenuo) (_naive Bayes_) en el contexto de la minería de textos identificando una serie de deficiencias. En la segunda parte, los autores proponen una serie de modificaciones _ad hoc_ para crear un algoritmo de clasificación mejorado.

El segundo, [_Formulating State Space Models in R with Focus on Longitudinal Regression Models_](http://ideas.repec.org/a/jss/jstsof/16i01.html), trata sobre el paquete `[sspir](http://cran.r-project.org/web/packages/sspir/index.html)` de R. Sirve para ajustar modelos similares a los lineales generalizados pero que contienen términos que varían en el tiempo. Puede ser usado para modelar series temporales influenciadas por variables adicionales o estudiar el impacto de estas últimas sobre datos que tienen una estructura temporal subyacente. Uno de los casos de uso citados en el artículo, por ejemplo, es el del estudio del efecto de la obligatoriedad del uso del cinturón de seguridad en la serie  temporal de fallecidos en accidentes de tráfico.

El tercero, _[The origin of bursts and heavy tails in human dynamics](http://arxiv.org/abs/cond-mat/0505371 )_, se plantea un problema muy interesante. En la sección (a) de

[![](/wp-uploads/2012/09/human_dynamics.png#center)
](/wp-uploads/2012/09/human_dynamics.png#center)

se muestra una sucesión típica de sucesos generados por un [proceso de Poisson](http://es.wikipedia.org/wiki/Proceso_de_Poisson). En las secciones (b) y (c) se muestra el tiempo de espera entre sucesos consecutivos y su distribución. Sin embargo, en muchos procesos en que interviene el hombre, la distribución es más parecida a la que se muestra en (d). Por ejemplo, en el uso del correo electrónico: a periodos de mucho uso suelen seguir periodos de inactividad. El autor, Barabási, lista otra serie de ámbitos en los que se aprecian patrones similares. Y argumenta finalmente que este tipo de comportamiento es consistente con la coexistencia de varias _colas_ con distintos grados de prioridad.

Es el caso de una persona en su actividad diaria, que incluye revisar su correo electrónico, revisar documentación, realizar llamadas telefónicas, etc. Y cada una de esas colas tiene prioridades diferentes. La actividad observada resultante tiene un comportamiento no _poissoniano_.