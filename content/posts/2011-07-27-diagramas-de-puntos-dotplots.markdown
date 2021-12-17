---
author: Carlos J. Gil Bellosta
date: 2011-07-27 07:07:36+00:00
draft: false
title: Diagramas de puntos (dotplots)

url: /2011/07/27/diagramas-de-puntos-dotplots/
categories:
- gráficos
- r
tags:
- dotplots
- gráficos
- r
---

Aunque los diagramas de puntos fueron introducidos por [Cleveland ](http://www.stat.purdue.edu/~wsc/) en los años ochenta, a pesar de sus ventajas, no gozan de la popularidad de otros métodos de representación gráfica.

Leí hace poco un artículo de Naomi Robbins en el que se proponían los [gráficos de puntos como alternativa a los de barras](http://www.b-eye-network.com/view/2468). Encuentra en aquéllos tres ventajas:



* Una representación más limpia y con menos _tinta inútil_.
* Permite resolver el problema de la representación de varias observaciones por sujeto más elegantemente que yuxtaponiendo barras, como ilustra el gráfico que aparece debajo.
* Y  una tercera que encuentro más dudosa: que resuelven el problema de los [diagramas de barras truncados](http://www.malaprensa.com/2010/10/los-truncadistas-han-tomado-el-abc.html): el no representar el trazo que une el origen con los valores representados —dice la autora—, el efecto perceptualmente distorsionador de truncar la gráfica no es tan acusado. Aunque yo mantengo mis reservas al respecto.

[![](/wp-uploads/2011/07/dotplot.jpg)
](/wp-uploads/2011/07/dotplot.jpg)

¿Y cómo podemos crear diagramas de puntos con R? Existen varios mecanismos. El más básico lo proporciona la función `dotchart`. La función `dotchart2` del paquete `Hmisc `es una versión mejorada de la anterior:







{{< highlight R "linenos=true" >}}
require(Hmisc)
example(dotchart2)
{{< / highlight >}}






Y quienes necesiten realizar diagramas de puntos más sofisticados —con varios paneles, etc.— cuentan con  las funciones `dotplot` del paquete `lattice` y varias de `ggplot2`, que compara entre sí el autor de [este artículo](http://learnr.wordpress.com/2009/07/02/ggplot2-version-of-figures-in-lattice-multivariate-data-visualization-with-r-part-4/).

Finalmente, quien quiera profundizar en el tema, puede echarle un vistazo a [_The dot plot: a graphical display for labeled quantitative values_](http://polisci.msu.edu/jacoby/research/dotplots/ms/Jacoby,%20Dotplots,%205-27-06.pdf) de W.G. Jacoby.
