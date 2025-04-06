---
author: Carlos J. Gil Bellosta
categories:
- ciencia de datos
- estadística
- r
date: 2020-03-16 15:41:00+00:00
draft: false
lastmod: '2025-04-06T19:05:30.436378'
related:
- 2020-03-18-k-vecinos-lmer.md
- 2017-01-10-repensando-la-codificacion-por-impacto.md
- 2023-11-02-origen-interacciones.md
- 2024-09-12-cortos-stats.md
- 2020-03-18-lme4-simulate.md
tags:
- ciencia de datos
- interacciones
- k-vecinos
- modelo lineal
- modelos mixtos
- lme4
- r
- random forests
title: Interacciones y selección de modelos
url: /2020/03/16/interacciones-y-seleccion-de-modelos/
---

Desafortunadamente, el concepto de interacción, muy habitual en modelización estadística, no ha penetrado la literatura del llamado ML. Esencialmente, el concepto de interacción recoge el hecho de que un fenómeno puede tener un efecto distinto en subpoblaciones distintas que se identifican por un nivel en una variable categórica.

El modelo lineal clásico,

$$ y \sim x_1 + x_2 + \dots$$

no tiene en cuenta las interacciones (aunque extensiones suyas, sí, por supuesto).

El  motivo de esta entrada es ofrecer cierta intuición sobre qué modelos son más adecuados para modelar un fenómeno en función de la importancia esperada de las interacciones. O mejor dicho, de cómo de heterogéneo es el modelo en categorías distintas de la población. Voy a establecer tres niveles:

* Nivel _`lm`_: Pocas interacciones y fáciles de intuir. Se introducen en el modelo a mano. (Obviamente, _`lm`_ es una etiqueta que puede extenderse a cantidad de generalizaciones suyas, de los GLMs, a los GAM, a los...).
* Nivel _random forest_: Nivel intermedio de interacciones, imposibles de predeterminar. Los árboles son modelos que, esencialmente, detectan interacciones entre variables y funcionan mal con efectos aditivos. Todas sus extensiones entran en esta categoría.
* Nivel _k-vecinos_: Esencialmente, todo es interacción y para qué crear _ramas_ usando árboles cuando cada observación define de alguna manera, la suya.

La distinción entre los dos últimos niveles es sutil y depende entre otras consideraciones, del número de niveles de las variables categóricas que definen los cortes. Además, gran parte del _software_ para ajustar rrff hace tonterías con las variables categóricas (sí, el llamado _one hot encoding_ es un  tiro en el pie).

Y esto viene al caso de unos modelos que estoy haciendo en el que trato de combinar _k-vecinos_ para seleccionar una submuestra relevante y [`lmer`](https://www.rdocumentation.org/packages/lme4/versions/1.1-21/topics/lmer) para rematar la faena. A ver.