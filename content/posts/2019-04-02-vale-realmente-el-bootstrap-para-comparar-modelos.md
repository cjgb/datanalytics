---
author: Carlos J. Gil Bellosta
date: 2019-04-02 09:13:36+00:00
draft: false
title: ¿Vale realmente el "bootstrap" para comparar modelos?

url: /2019/04/02/vale-realmente-el-bootstrap-para-comparar-modelos/
categories:
- ciencia de datos
- estadística
tags:
- bootstrap
- ciencia de datos
- estadística
- harrell
- validación cruzada
---

Es una pregunta legítima ---en el sentido de que ignoro la respuesta--- que tengo. Para plantearla en sus debidos términos:

**Contexto:**

Tenemos modelos y queremos compararlos. Queremos que funcionen en el _universo_, pero solo disponemos de él una _muestra_.

**Acto 1:**

Para desatascar el nudo lógico, recurrimos a técnicas como:

* Entrenamiento y validación,j
* _jackknife_ y sobre todo,
* su popular evolución, la validación cruzada.

Todas ellas bien sabidas y discutidas en todos los manuales.

**Acto 2:**

Llega Frank Harrell y dice que la validación cruzada, a pesar de su popularidad, es inferior a otra técnica más arraigada en la teoría estadística clásica, el _bootstrap_. (Porque, recuérdese, el principio director del _bootstrap_ es que muestras con reemplazamiento de una muestra operan ---¿casi?--- como muestras independientes del universo). El _bootsrap_ para la comparación de modelos viene en tres sabores, cuando menos:

* El básico: se realizan muestreos con remplazamiento de los datos originales, se construye el modelo sobre ellos y se evalúa el error en el original.
* El de `caret`: como el anterior, pero se evalúa el error usando no el conjunto de datos original sino solo aquellas observaciones del original que no pasan a la muestra.
* El _avanzado_, propuesto también por Harrell y que trata de medir el _optimismo_ de evaluar el error en la muestra de entrenamiento mediante el algoritmo descrito, entre otros sitios, [aquí](http://thestatsgeek.com/2014/10/04/adjusting-for-optimismoverfitting-in-measures-of-predictive-ability-using-bootstrapping/).

**Acto 3:**

Tirios y troyanos comienzan a publicar sobre la superioridad de unos y otros (más que por cuestiones de sesgo, por cuestiones de estabilidad, da la impresión).  Los pro-bootstrap publican, por ejemplo, [esto](http://www.fharrell.com/post/split-val/). Los pro validación cruzada, cosas como [esta](http://appliedpredictivemodeling.com/blog/2014/11/27/08ks7leh0zof45zpf5vqe56d1sahb0).

**Inconclusión**

No tengo ni idea de si lo del _bootstrap_ es una boutade de don Frank (tipo _el 11M fue cosa de ETA_). Me gustaría que no fuese así, me gustaría ir y poder decir: eso de la validación cruzada es una técnica _ad hoc_ que inventaron unos advenedizos, pero quienes sabemos usamos _bootstrap_ porque para eso hemos _estudiao_. Pero me da que...

Así que, ¿me saca alguien de mi inconclusión?