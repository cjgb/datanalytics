---
author: Carlos J. Gil Bellosta
date: 2015-12-14 08:13:35+00:00
draft: false
title: 'La combinación de observaciones y el método de mínimos cuadrados: una revisión
  histórica'

url: /2015/12/14/la-combinacion-de-observaciones-y-el-metodo-de-minimos-cuadrados-una-revision-historica/
categories:
- estadística
tags:
- estadística
- historia
- mínimos cuadrados
---

Sabemos y se sabe desde hace mucho que un sistema lineal de n ecuaciones con m incógnitas, cuando n > m (y especialmente cuando n >> m), muy probablemente no tenga solución. No obstante, sistemas así ocurren naturalmente: ahí está el modelo lineal.

En tiempos, al cálculo de los _mejores_ coeficientes para ajustar un conjunto de datos, cuando el número de observaciones excedía el de coeficientes se lo llamó _combinación de observaciones_. Desde muy pronto se observó que más observaciones conducían a mejores estimaciones. Pero se tardó mucho en establecer cómo.

Traduzco [de aquí](http://www.math.yorku.ca/SCS/seminar/chron-ls.txt) una breve cronología del problema:

**1632** Galileo Galilei, en el análisis de la supernova de Tycho Brahe's (1572) sugiere que todas las observaciones están sujetas a errores que están simétricamente distribuidos alrededor del cero y que los errores pequeños son más frecuentes que los grandes. Y propone que la mejor hipótesis es aquella con la menor suma de desviaciones absolutas desde el estimador.

**1714** El parlamento británico crea la [Junta de Longitud](https://es.wikipedia.org/wiki/Junta_de_Longitud), que ofrecía premios a avances en este campo.

**1722** Se publica póstumamente la regla de Cote para ubicar _el lugar más probable_ a partir de n observaciones usando medias ponderadas.

**1749** Leonhard Euler, en sus _Recherches sur la question des inégalités du mouvement de Saturne et de Jupiter_ intenta resolver ocho incógnitas que describen la órbita de Saturno a partir de 75 conjuntos de observaciones realizadas entre 1582 y 1745.

**1750** [Johann Tobias Mayer](https://es.wikipedia.org/wiki/Johann_Tobias_Mayer), en su estudio sobre la [libración](https://es.wikipedia.org/wiki/Libraci%C3%B3n) de la luna, desarrolla un método para resolver un sistema sobredeterminado de 27 ecuaciones lineales y 3 incógnitas. Además, da un límite en el error de la estimación de las incógnitas.

**1755-1770** [Roger Boskovich](https://es.wikipedia.org/wiki/Ru%C4%91er_Bo%C5%A1kovi%C4%87) propone los principios generales para resolver ecuaciones relacionadas con la forma de la tierra a partir de observaciones de la longitud de arco en distintas latitudes. En esencia, su método es el de las [mínimas desviaciones absolutas](https://en.wikipedia.org/wiki/Least_absolute_deviations).

**1787** Laplace extiende el método de Mayer al resolver conjuntos de ecuaciones lineales relacionadas con la órbita de Júpiter.

**1789-1797** Laplace proporciona una formulación algebraica del método de Boskovich's probando que minimiza la suma de errores absolutos. Además, lo extiende al problema de la minimización de una suma ponderada de errores absolutos. También propone minimizar el mayor valor absoluto ([minimax](https://en.wikipedia.org/wiki/Minimax#Minimax_for_individual_decisions)).

**1805** Legendre publica el método de los mínimos cuadrados en un apéndice de nueve páginas a un trabajo sobre la determinación de las órbitas de los cometas y lo aplica a las medidas de la longitud de arco de meridiano en París.

**1809** Gauss proporciona una justificación probabilística del método de los mínimos cuadrados de Legendre mostrando que es el de máxima verosimilitud [¿máxima verosimilitud hace 200 años?] cuando los errores son normales.

**1823** Gauss prueba el [teorema de Gauss-Markov](https://en.wikipedia.org/wiki/Gauss%E2%80%93Markov_theorem) según el cual, de todas las combinaciones lineales medidas para estimar una incógnita, el método de los mínimos cuadrados tiene la mínima varianza, independientemente de la distribución de los errores.

Curioso constatar cómo la norma L1 se usó antes que la L2.
