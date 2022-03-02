---
author: Carlos J. Gil Bellosta
date: 2011-12-20 06:29:25+00:00
draft: false
title: p, n y mi moneda de la suerte

url: /2011/12/20/p-n-y-mi-moneda-de-la-suerte/
categories:
- estadística
tags:
- estadística
- p-valores
---

Tengo una moneda de la suerte. Es una moneda de cinco duros, del mundial 82. No es tanto de la suerte (en esta bitácora somos gente seria, carajo) como —tengo razones para sospechar— una moneda sesgada.

De hecho, el otro día hice un experimento: la tiré al aire 20 veces y obtuve 14 caras. De acuerdo con R,

{{< highlight R >}}
1 - pbinom( 14, 20, 0.5 )
[1] 0.02069473
{{< / highlight >}}

puedo rechazar la hipótesis de que es una moneda cabal con un nivel de confianza (p-valor) de 0.021.

Pero mi gato dijo que 20 era poco y, como es gato y tiene más tiempo libre que yo, repitió el experimento lanzándola al aire 2000 veces. Y obtuvo 1045 caras. Como

{{< highlight R >}}
1 - pbinom( 1045, 2000, 0.5 )
[1] 0.020921
{{< / highlight >}}

también rechazó la hipótesis de equiprobabilidad con prácticamente el mismo nivel de confianza, 0.021.

Lo cual dio lugar a una discusión la mar de interesante y que no sé cómo zanjar. Porque el muy ladino de mi gato me vino con que si había leído que

>[A] given p-value in a large trial is usually a stronger evidence that the treatments really differ than the same p-value in a small trial of the same treatments would be

en un artículo de Peto et al. (_Design and analysis of randomized clinical trials requiring prolonged observation of each patient_, 1976). Sin embargo, mi vecina del segundo comenta que cuando era moza y festejaba, leyó en alguna parte que

>It is not true . . . that valid conclusions cannot be drawn from small samples; if accurate methods are used in calculating the probability [the p value], we thereby make full allowance for the size of the sample, and should be influenced in our judgement only by the value of probability indicated

Creo que se refería a la página 182 de _Statistical methods for research workers_, de Ronald Fisher. Y por si fuera poco, el chino que regenta el que fuera el Mesón Cascorro en mi barrio, me viene con que si un tal Bakan dejó escrito en 1966 en un artículo que se llama _Test of significance in psychological research_ que cuando los p-valores son iguales, los estudios con menor número de sujetos aportan más evidencia contra la hipótesis nula.

Señores lectores de esta bitácora: estoy hecho un lío. ¿A quién damos la razón: a mi gato, a la vecina del segundo o al chino del ex Mesón Cascorro?
