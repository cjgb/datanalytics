---
author: Carlos J. Gil Bellosta
date: 2022-04-19
title: "El coste nivelado de la energía: la plantilla"
description: "Una plantilla para calcular el coste nivelado de la energía"
url: /2022/04/19/coste-nivelado-energia/
categories:
- varios
tags:
- economía
- energía
- electricidad
- lazard
---

A nadie se le escapa que los mercados energéticos viven tiempos convulsos. Sin embargo, a pesar de que el problema es fundamentalmente económico, la gentecilla blande argumentos de lo más variopinto (e, indefectiblemente, desencaminado).

Para paliar el general desconocimiento de los fundamentos económicos de la cosa, he creado [este cuadro de mandos](http://beta.circiter.es/shiny/levelized_cost_energy/).
Implementa dinámicamente las hojas de cálculo que subyacen al documento [_Levelized Cost of Energy Analysis (v. 15.0)_](
https://www.lazard.com/media/451905/lazards-levelized-cost-of-energy-version-150-vf.pdf)
de [Lazard](https://www.lazard.com/),
una empresa en cuya página web no explica claramente a lo que se dedica pero de la que podría deducirse que se dedica a la consultoría de alto vuelo.

En el cuadro de mando uno puede introducir los parámetros económicos de una nueva planta eléctrica (coste, estructura de capital, costes operativos, etc.) y el resultado fundamental es el precio al que debería venderse ---o poder venderse--- la electricidad para lograr la rentabilidad esperada. Por defecto, muestra los números relativos a un parque eólico (el mismo ejemplo que detalla el documento anterior), pero uno puede jugar y ver si, por ejemplo, el precio de la energía nuclear es tan descabellado como opina la gente con criterio ---y _skin in the game_--- o es tan barata como peroran ciertos _youtubers_.

Para terminar: nada impide que visitéis el cuadro de mando y lo utilicéis para poner a prueba vuestras ideas preconcebidas sobre el mundo.
