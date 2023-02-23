---
author: Carlos J. Gil Bellosta
date: 2011-11-25 07:01:42+00:00
draft: false
title: ¿Escalas logarítimicas? Puede, pero...

url: /2011/11/25/escalas-logaritimicas-puede-pero/
categories:
- gráficos
tags:
- gráficos
- logaritmos
- ejes
---

Encontré el otro día una [entrada en la bitácora de Bissantz](http://blog.bissantz.com/linear-vs-logarithmic-scales), una empresa alemana de herramientas de visualización y minería de datos que trataba sobre las ventajas y desventajas del uso de escalas lineales y logarítmicas en cierto tipo de gráficos. Y los ilustraba con un ejemplo que me hizo pensar si no habría _algo más_.

El gráfico _malo_, en escala lineal, es

[![](/wp-uploads/2011/11/pib_deuda_linear1.png#center)
](/wp-uploads/2011/11/pib_deuda_linear1.png#center)

que representa la evolución del PIB y la deuda estadounidense durante las últimas décadas y tiene una serie de carencias con respecto al gráfico de los mismos datos en escala logarítmica,

[![](/wp-uploads/2011/11/pib_deuda_log.png#center)
](/wp-uploads/2011/11/pib_deuda_log.png#center)[](/wp-uploads/2011/11/pib_deuda_linear.png#center)

El autor de la entrada indica cómo en la gráfica lineal apenas puede apreciarse la información de los primeros 25 años y algunas circunstancias sobre ciertos periodos significativos en que las gráficas parecen dar impresiones distintas. El autor juzga que la interpretación correcta es la que proporciona la escala logarítmica. Y yo creo que está en lo cierto, sin ser experto en la materia.

Pero pienso, además, ¿es el uso de la escala logarítmica en sí la que soluciona los problemas de interpretación o hay motivos que hacen que eso sea así?

Creo que la medida relevante para mostrar en el gráfico no son tanto los dólares nominales (de PIB y de deuda) como los dólares constantes o, incluso, los dólares constantes por estadounidense. Como tanto la pérdida de valor del dinero como la evolución de la población son (aproximadamente) exponenciales, la escala logarítmica corrige en gran medida el efecto distorsionador de la extrema diacronía de los datos. Pero no deja de ser una aproximación a la solución _correcta_.

Pero puestos a corregir, pienso yo, bien habría valido la pena aplicar los multiplicadores correspondientes para que las magnitudes resultasen comparablesa lo largo del tiempo .


