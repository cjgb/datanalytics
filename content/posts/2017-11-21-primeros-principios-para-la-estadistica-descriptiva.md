---
author: Carlos J. Gil Bellosta
date: 2017-11-21 08:13:50+00:00
draft: false
title: ¿Primeros principios para la estadística descriptiva?

url: /2017/11/21/primeros-principios-para-la-estadistica-descriptiva/
categories:
- estadística
tags:
- estadística descriptiva
- primeros principios
---

Hay disciplinas que parecen puras colecciones de anécdotas, recetarios _ad hoc_ y listas de contraejemplos. Tal se ha predicado, por ejemplo, de la [economía conductual](https://es.wikipedia.org/wiki/Econom%C3%ADa_conductual).

Pero, ¿pueden reconstruirse a partir de [primeros principios](https://es.wikipedia.org/wiki/Primer_principio)? Si [se ha ensayado con la economía conductual](https://mappingignorance.org/2017/10/23/towards-theory-behavioral-economics/), ¿por qué no intentarlo con nuestra modestísima estadística descriptiva?

Un caso particular: cuando de una variable aleatoria calculo y escribo o represento su media y su desviación estándar, de alguna manera estoy modelizándola como una distribución normal. Esta modelización puede ser explícita, aunque casi siempre es implícita. Si la variable aleatoria tiene una distribución muy alejada de la normal, habrá quien proteste: que si la media es engañosa, que si... Pero, ¿por qué habría de ser engañosa en _este_ caso y no en otro? Precisamente por la (incorrecta) modelización implícita: estaría usando _lo de la normal_ donde no aplica.

Presunto caso general: la adecuada representación de datos es condicional a su modelización. Esta debiera aparecer debidamente explicitada en algún momento y sitio. Elegido un modelo, la determinación de la representación de los datos sería un corolario.

Esto plantea algunas preguntas. Por ejemplo, la relación de lo que cuento con el EDA (i.e., análisis de datos exploratorio), que postula que es posible (e incluso convieniente) realizar análisis de datos usando herramientas puramente gráficas, sin el aparataje estadístico-matemático habitual.

Aunque creo que los partidarios del EDA (¡yo, yo, yo!) pecan del mismo vicio que esa gente que después de haber estudiado matemáticas durante mucho tiempo (¡yo, yo, yo!) van por ahí echando pestes de la educación matemática formal y tradicional (¡yo, yo, yo!) ignorando la pregunta fundamental: aquellos a quienes se liberase de esos lastres intelectuales, ¿estarían en disposición de utilizar las nuevas herramientas con el mismo grado de eficacia? ¿O descubriríamos tarde y entre lamentos que carecen de alguna habilidad fundamental de la que se les privó inadvertidamente?

Admito en cualquier caso estar adoptando un planteamiento inconsistentemente anti-EDA. Al menos, en su primera apariencia.

La segunda de las cuestiones que plantea mi propuesta tiene que ver con el conflicto que genera con el muy sensato consejo opuesto: graficar antes de modelar. Pero me parece fácilmente resoluble: existe una estadística descriptiva _de borrador_ y otra _en limpio_, que corresponden a las que se realizan en la consola de RStudio y en los _chunks_ de los .Rmd respectivamente. Creo que se me entiende.

La tercera cuestión es la más importante: ¿por qué es esta discusión relevante? Y como no consiga contestarla convincentemente, me odiarás por haberte hecho llegar hasta aquí en vano. En primer lugar, creo que es relevante porque en el ejercicio de la estadística descriptiva, uno se pregunta constantemente: ¿por qué así y no de otra manera? Una de las maneras más gallardas de responderlas es recurriendo a primeros principios cuya eficacia haya corroborado el uso.

En segundo lugar, creo que es relevante porque puede ayudar a replantear la enseñanza y la divulgación de los buenos usos en estadística descriptiva. Habrá siempre, por supuesto, un nivel básico con el que satisfacer las necesidades de alfabetización numérica elemental de la chusma. Pero puede servir para replantear y sentar sobre bases más sólidas otros programas formativos para quienes estén o pretendan llegar más allá.

Muy en particular, esta _ocurrencia_ me está haciendo considerar la conveniencia de a mover de sitio y reescribir casi por entero el capítulo relevante de mi protocurso de estadística para estadísticos.