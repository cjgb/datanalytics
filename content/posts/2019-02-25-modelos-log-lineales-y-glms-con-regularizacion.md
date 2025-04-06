---
author: Carlos J. Gil Bellosta
categories:
- ciencia de datos
- estadística
date: 2019-02-25 08:13:14+00:00
draft: false
lastmod: '2025-04-06T19:06:14.937320'
related:
- 2019-12-02-sobre-los-coeficientes-de-los-glm-en-scikit-learn.md
- 2017-06-29-hoy-como-excepcion-gritare-y-justificare-malditos-logaritmos.md
- 2017-09-11-pues-los-svms-al-final-no-son-tan-exoticos.md
- 2020-02-14-lineal-o-logistica.md
- 2019-08-21-glms-con-coeficientes-0-p-e.md
tags:
- glm
- loglineal
- regularización
title: Modelos log-lineales y GLMs con regularización
url: /2019/02/25/modelos-log-lineales-y-glms-con-regularizacion/
---

Hace años tomé el curso de NLP de M. Collings en Coursera (¡muy recomendable!), uno de cuyos capítulos trataba de los llamados _[modelos loglineales](http://www.cs.columbia.edu/~mcollins/loglinear.pdf)_. En esto, Collings sigue una nomenclatura un tanto personal porque la mayor parte de la gente se refiere con ese nombre a algo que no es exactamente lo mismo (y dentro del mundo de las tablas de contingencia).

El otro día, sin embargo, me pensé que los modelos loglineales à la Collings me serían muy útiles para un problema de clasificación en el que estamos trabajando. Y repasándolos... me di cuenta de que eran versiones de algo ya conocido: GLMs multinomiales con regularización. Sí, como [estos](https://web.stanford.edu/~hastie/glmnet/glmnet_alpha.html).