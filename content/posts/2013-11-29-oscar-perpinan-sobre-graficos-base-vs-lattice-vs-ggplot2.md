---
author: Carlos J. Gil Bellosta
categories:
- gráficos
- r
date: 2013-11-29 06:58:02+00:00
draft: false
lastmod: '2025-04-06T18:58:17.206597'
related:
- 2011-02-10-1440.md
- 2012-09-10-graficos-estadisticos-y-mapas-con-r-un-analisis.md
- 2010-06-28-graficos-en-r-con-simbolos-arbitrarios-codigo-comentarios-y-fin.md
- 2011-09-21-facetas-en-ggplot2-al-hilo-de-otra-gananada.md
- 2011-07-27-diagramas-de-puntos-dotplots.md
tags:
- ggplot2
- gráficos
- lattice
- r
- trellis
title: Óscar Perpiñán sobre gráficos base vs. lattice vs ggplot2
url: /2013/11/29/oscar-perpinan-sobre-graficos-base-vs-lattice-vs-ggplot2/
---

Óscar Perpiñán es alguien a quien tenéis que conocer necesariamente si os interesan, entre otras cosas, temas como la [visualización de datos espaciotemporales](http://oscarperpinan.github.io/spacetime-vis/). Y tiene un [blog muy recomendable](http://procomun.wordpress.com/).

Recientemente me ha dado permiso para reproducir aquí una respuesta suya en un hilo planteado en [r-help-es](https://stat.ethz.ch/mailman/listinfo/r-help-es) sobre los distintos mecanismos existentes en R para generar gráficos. Lo hago a continuación con mínimos retoques tipográficos:

La ventaja esencial de los gráficos _grid_ (`lattice` y `ggplot2`) frente a los gráficos _base_ es su mayor flexibilidad para añadir o modificar el contenido. Un gráfico _grid_ es un objeto más en R y, como tal, puede ser manipulado con los métodos que cada paquete define. Existen dos librerías fundamentales en el mundo _grid_, `lattice` y `ggplot2`.

`lattice` es una implementación de los gráficos Trellis propuestos por Cleveland y otros (una matriz rectangular de paneles). Usa una interfaz basada en las fórmulas de R para especificar la relación entre las variables que componen el gráfico. Por ejemplo, `y ~ x | g1 * g2 `representa la variable `y` frente a `x` condicionada a las variables `g1 `y `g2`. Cada combinación de estas variables `g1` y `g2` determina un subconjunto de `x` e `y`, y por tanto el contenido de cada panel de la matriz del gráfico Trellis. Por ejemplo, el siguiente código representa la variable `wt` frente a `mpg` usando los niveles de la variable `cyl` para controlar el color y la variable `am` para definir
los paneles:

{{< highlight R >}}
xyplot(wt ~ mpg | am, data = mtcars, groups = cyl)
{{< / highlight >}}

En cierto sentido, este enfoque puede ser algo rígido para algunos gráficos, sobre todo cuando se necesita superponer capas diferentes en un mismo panel con datos que provienen de contenedores diferentes. Aquí merece la pena destacar el paquete `latticeExtra`. Con él es posible definir capas (_layer_) y superponer objetos trellis completos o capas con la función `+.trellis` con mucha flexibilidad.

`ggplot2` es una implementación de "La gramática de los gráficos" propuesta por Wilkinson en 1999. Este esquema divide un gráfico en componentes tales como escalas y capas. Por tanto, la definición de un gráfico con este enfoque se realiza combinando varias funciones que proporcionan la definición de cada componente implicado. Normalmente un gráfico se construye de forma incremental a partir de la función `ggplot` usando el operador `+` para añadir capas al objeto definido con `ggplot`. Por ejemplo, para representar el mismo gráfico anterior (la variable `wt` frente a `mpg` usando los niveles de la variable `cyl `para controlar el color y la variable `am` para definir los paneles) se usa este código:

{{< highlight R >}}
ggplot(mtcars, aes(mpg, wt)) +
geom_point(aes(colour=factor(cyl))) +
facet_grid(. ~ am)
{{< / highlight >}}

Como decía, la elección entre `lattice` o `ggplot2` depende de los gustos de cada uno para un rango muy amplio de aplicaciones. No me refiero a los gustos estéticos sino de manejo (fórmula frente a definición incremental). En general, salvo detalles muy específicos y de uso poco frecuente, sabiendo usar adecuadamente los recursos que cada paquete ofrece, los resultados gráficos son prácticamente idénticos y con la misma calidad estética.

Las dos únicas diferencias relevantes que he encontrado son (específicas de mi trabajo particular con R):

* Muchos paquetes definen métodos para gráficos _base_ y `lattice`, pero con menor frecuencia y sofisticación para `ggplot2`. En esos casos esto obliga a elaborar código propio y usar funciones auxiliares (`fortify`) para transformar clases de ese paquete en `data.frame `convencionales antes de usar `ggplot`.
* En su implementación actual, `ggplot2` es sustancialmente más lento para generar gráficos con contenedores de datos **muy** grandes. Esto es destacable en el caso de datos espaciales y, sobre todo, cuando hay que realizar el paso de conversión mencionado en el punto anterior.

Termino: hay una serie de artículos (algo antiguos pero igualmente ilustrativos) que comparan código y resultados (sin optimizar) de `lattice` y `ggplot2` para una variedad amplia de gráficos ([ejemplo](http://learnr.wordpress.com/2009/06/28/ggplot2-version-of-figures-in-lattice-multivariate-data-visualization-with-r-part-1/)).

En la variedad está el gusto :-)