---
author: Carlos J. Gil Bellosta
categories:
- estadística
date: 2024-05-02
lastmod: '2025-04-06T19:12:35.825988'
related:
- 2022-03-03-error-sesgo-modelos-lineales.md
- 2022-03-10-diagramas-causales-hipersimples-1-errores.md
- 2022-03-08-estadistica-ciencias-blandas.md
- 2020-07-17-mas-sobre-la-presunta-sobredispersion-en-el-modelo-de-poisson.md
- 2021-02-16-hay-mil-motivos-para-criticar-una-regresion-trucha-pero-una-rc2b2-baja-no-es-uno-de-ellos.md
tags:
- falacia ecológica
- estadística
- paradoja de simpson
- causalidad
title: Aún más sobre la falacia ecológica
url: /2024/05/02/falacia-ecologica-aun-mas
---

#### I.

Voy a retomar un hilo perdido en mi discusión del otro día
[sobre la falacia ecológica](/2024/4/30/falacia-ecologica/)
para abundar en una cuestión que tiende a obviarse a pesar de su gran importancia.

En aquella entrada fusilé/usufructé el siguiente gráfico:

![](/wp-uploads/2024/falacia-ecologica.png#center)

En él se representan individuos (las elipses de colores) sobre los que hay medidas repetidas (las nubes de puntos que contienen) de cierto fenómeno cuantitativo. Lo relevante del gráfico es que:
- $y$ decrece con $x$ globalmente pero, a la vez,
- $y$ crece con $y$ para cada individuo.

La relación de $x$ e $y$ se invierte según se tenga o no en cuenta la variable de agrupación `individuo`.


#### II.

Tratemos de reconstruir en seudocódigo ese gráfico. Necesitamos:

- Ubicar a los individuos; para ello hace falta:
    - Una recta (decreciente) con sus parámetros $a_g$ y $b_g$
    - Un error $\sigma_g$
- Luego, obtener los indicadores para cada individuo. Cada uno de ellos tiene asociada:
    - Una recta con pendiente $a_i$ (positiva)
    - Una dispersión $\sigma_i$.
- Una serie de hipótesis sobre los $a_i$ y los $\sigma_i$. Las alternativas más habituales son:
    - Los $a_i$ y los $\sigma_i$ son (respectivamente) iguales.
    - Los $a_i$ y los $\sigma_i$ siguen una determinada distribución (p.e., $a_i \sim N(1, .25)$).

Con eso y un poco de código en R, uno puede reproducir el gráfico de más arriba.


### III.

¿Qué sería _modelar_? Modelar consistiría en obtener estimaciones de los parámetros de interés $a_g$, $\sigma_g$, $a_i$, $\sigma_i$. Con eso, no habría lugar a paradojas (de Simpson), falacias (ecológicas), _variables confusoras_ ni nada por el estilo.

El problema que tantos ríos de tinta produce aparece cuando se estudia el problema a través de un modelo _insuficiente_ (p.e., del tipo `lm(y ~ x)`). Que lo es porque no representa adecuadamente el proceso de generación de datos. En muchos casos, un modelo _insuficiente_ no es particularmente malo: las variables omitidas incrementan el error, achican la $R^2$ y ya. Pero en muchos otros casos, subvierten la interpretación del fenómeno.


### IV.

Me dio por pensar que en un modelo (de regresión lineal o similar) con una $R^2$ baja hay más margen para que _quepan_ variables _subversivas_. Aunque una $R^2$ baja, en principio, no invalida un modelo, sí que podría hacerle a uno pensar que la varianza inexplicada puede enmascarar alguna variable crítica (en el sentido de la discusión anterior).

Por supuesto, la idea anterior no es un teorema: se pueden elegir convenientemente los parámetros del sistema descrito en II para que el modelo engañoso `lm(y ~ x)` tenga una $R^2$ arbitrariamente alta. No obstante, sospecho que como principio (y no como final), puede ser una  herramienta útil.