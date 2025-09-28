---
author: Carlos J. Gil Bellosta
categories:
- estadística
date: 2024-10-17
lastmod: '2025-04-06T19:10:05.815961'
related:
- 2023-07-25-tutorial-numpyro-1-modelos-probabilisticos.md
- 2024-02-01-optimizacion-generalizacion.md
- 2023-03-02-conformal-prediction.md
- 2016-02-04-y-termino-con-lo-de-los-intervalos.md
- 2022-10-13-bayesianismo-frecuentismo-teoria-decision-04.md
tags:
- modelización
- interpretación
- posmodernismo
title: 'Interpretación de modelos: el elefante en el salón'
url: /2024/10/17/interpretacion-modelos/
---

Hay mucha teoría sobre interpretación de modelos (estadísticos, de _machine learning_ y, ahora, de _deep learning_). Hay muchos métodos y herramientas para ello; de algunas he hablado en el pasado por aquí. Hay también mucha demanda de ello, en gran medida por motivos legales y regulatorios. Pero en toda la literatura al respecto apenas nadie se toma la molestia de advertir que hay un elefante en el salón.

Este elefante tiene que ver con la imposibilidad material de la tarea en cuestión. Todo lo que se hace, como se discutirá a continuación, es aplicar meros paños calientes, hacer como que se hace, pero evadiendo el meollo (de cuatro toneladas, grandes orejas y trompa descomunal).

El contexto en el que se plantea la cuestión de la interpretación de los modelos es este:

- Existe ---existe, de hecho, en la naturaleza--- una función desconocida y compleja $f$ que relaciona un parámetro de interés con una serie de variables observadas. Por fijar ideas, este parámetro puede ser la probabilidad de sufrir un accidente y las variables, las que dispone una compañía aseguradora de sus clientes.
- Merece la pena insistir en que $f$ es **desconocida** y sumamente **compleja**.
- De $f$, no obstante, se conocen ciertos aspectos más o menos cualitativos. Cosas como que la siniestralidad, como función de la edad, "tiene forma de U" (aunque esa forma concreta puede cambiar según el sexo, la provincia, etc.). Esos aspectos cualitativos, además, no son directamente _operativizables_.
- Aunque la forma concreta de $f$ es desconocida, se cuenta con cierto número de valores suyos: la información histórica. Esta información histórica suele presentar problemas de todo tipo (¿está obsoleta la que es demasiado vieja?, ¿está contaminada por algún tipo de sesgo?, etc.). Todos ellos son sobradamente conocidos y han sido discutidos hasta la saciedad en otros sitios, así que no voy a abundar sobre ellos aquí.

Lo que hacen los modelos es aproximar esa función desconocida por otra _artificial_ $f^\prime$ computable.

![](/wp-uploads/2024/noise-approximation.png#center)

Esta función artificial $f^\prime$, en tanto que aproxima una función compleja $f$, tiene que ser también, necesariamente, compleja. No es una función cuya forma pueda ser fácilmente descrita. Una decisión fundada en el valor de $f^\prime$ no tiene una _justificación_ en términos de su descripción porque $f^\prime$ no se puede describir sin reproducirla en su totalidad. Podría decirse, abusando del lenguaje, que está definida más que por comprensión, por [extensión](https://es.wikipedia.org/wiki/Definici%C3%B3n_extensional). Pueden discutirse, efectivamente, las hipótesis y métodos usados para construir $f^\prime$, los datos utilizados para ello, etc. Pero no se puede razonar alrededor de los valores concretos de $f^\prime$ más allá de indicar que es la mejor aproximación obtenida a $f$ bajo una serie de condicionantes.

Muchos métodos de _interpretación de modelos_ están basados en el principio de que es posible (y lo es) crear una función sencilla $f^{\prime\prime}$ que aproxime $f^\prime$ ---y, por tanto, $f$--- en el entorno de un punto de interés determinado $x$. Pero que esa función $f^{\prime\prime}$ sea fácilmente de describir ---y aquello que dé a entender su descripción--- no justifica ni explica el valor $f^{\prime}(x)$ sobre el que se basa la decisión. A lo más, el estudio de $f^{\prime\prime}$ permite valorar si en las inmediaciones de $x$ $f^{\prime}$ se comporta o no de acuerdo con las intuiciones previas que se tiene sobre $f$: que existiese una discrepancia sustancial podría poner la aproximación $f^{\prime}$ en cuestión. Pero nada más.

Una alternativa muy socorrida a todo lo anterior consiste en reemplazar la aproximación compleja $f^{\prime}$ de $f$ por una función muy simple ---analítica, etc., algo así como un baremo o _scoring_---, $g$, que pueda ser evaluada cualitativamente y que reciba un parabién regulatorio. Es una práctica muy a la altura de los tiempos que corren, en los que la realidad, $f$, es mucho menos importante que los discursos $g$ que se realicen sobre ella, independientemente de lo débiles que resulten los nexos que los vinculen. (De ahí la etiqueta `posmodernismo` que gasto en esta entrada).