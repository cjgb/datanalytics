---
author: Carlos J. Gil Bellosta
categories:
- estadística
date: 2015-01-26 07:13:05+00:00
draft: false
lastmod: '2025-04-06T19:04:22.092765'
related:
- 2012-04-19-variables-instrumentales-con-r.md
- 2020-09-08-mas-sobre-variables-instrumentales-con-r.md
- 2022-03-03-error-sesgo-modelos-lineales.md
- 2019-07-19-un-truco-para-reducir-la-varianza-de-un-estimador.md
- 2017-10-17-para-esto-que-me-da-de-comer-no-vale-xgboost.md
tags:
- econometría
- estadística
- variables instrumentales
title: Cuando dicen que la variable x es exógena, quieren decir...
url: /2015/01/26/cuando-dicen-que-la-variable-x-es-exogena-quieren-decir/
---

Cuando los economistas dicen que la variable $latex x$ es exógena (con respecto a una variable de interés $latex y$) en realidad quieren decir que la función de verosimilitud $latex f(x,y)$ puede descomponerse de la forma $latex f(x,y) = f(y|x) g(x)$ y eso permite modelizar $latex y$ en función de $latex x$.

Cuando la descomposición no es posible (porque $latex x$ y $latex y$ se influyen mutuamente) dicen que $latex x$ es endógena. Obviamente, a la hora de (pretender) modelizar $latex y$ pueden considerarse variables endógenas y exógenas (y la correspondiente descomposición de la verosimilitud es un ejercicio para el lector).

Un truco que usan los economistas cuando topan con variables endógenas es usar lo que llaman variables instrumentales. Es una técnica que jamás he visto usar fuera de la econometría (¿algún lector sí?). Harto de descripciones vagas —con exceso de palabras, defecto de fórmulas y malos ejemplos— sobre lo que son y dejan de ser las variables instrumentales, escribí hace un tiempo [esto](http://www.datanalytics.com/2012/04/19/variables-instrumentales-con-r/).