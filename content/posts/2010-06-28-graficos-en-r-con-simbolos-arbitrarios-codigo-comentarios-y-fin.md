---
author: Carlos J. Gil Bellosta
categories:
- r
date: 2010-06-28 22:36:10+00:00
draft: false
lastmod: '2025-04-06T19:09:02.376131'
related:
- 2010-06-18-graficos-en-r-con-simbolos-arbitrarios.md
- 2012-10-10-graficos-en-r-a-la-xkcd.md
- 2012-09-10-graficos-estadisticos-y-mapas-con-r-un-analisis.md
- 2013-11-29-oscar-perpinan-sobre-graficos-base-vs-lattice-vs-ggplot2.md
- 2011-12-29-graficos-de-pares-de-variables-mejorados-con-r.md
tags:
- gráficos
- r
- paquetes
title: 'Gráficos en R con símbolos arbitrarios: código, comentarios y fin'
url: /2010/06/28/graficos-en-r-con-simbolos-arbitrarios-codigo-comentarios-y-fin/
---

Prometí el otro día revelar los secretos (pensaba que no lo eran tanto) del gráfico que mostré en esta [entrada](https://datanalytics.com/2010/06/18/graficos-en-r-con-simbolos-arbitrarios/). Los impacientes tienen [aquí](/uploads/grafico_banderas.zip) todo lo que necesitan. Tienen que ejecutar primero el guión `svg2ps.sh` que invoca inkscape para transformar los ficheros svg (incluidos en la descarga) de las banderas (obtenidos de la Wikipedia) en ficheros _postscript_.

El programa `src.R` genera entonces el gráfico utilizando dos paquetes de R: [grImport](http://cran.r-project.org/web/packages/grImport/index.html) y [lattice](http://cran.r-project.org/web/packages/lattice/index.html). El primero permite convertir _postscript_ en xml y posteriormente en objetos de la clase _picture_.

La magia la proporciona la función `grid.symbols` dentro del siguiente pedazo de código (que utiliza la función `xyplot` del paquete `lattice`):

{{< highlight R >}}
xyplot( ppa ~ func_pct,
    groups = pais, data = dat,
    xlab = "% funcionarios", ylab = "renta per cápita",
    main = "Funcionarios y renta per cápita",
    panel = function( x, y, subscripts, groups, col ){
        panel.fill( col = "gray")
        for( i in 1:length( groups[subscripts] ) ){
            symbol <- get(as.character(groups[subscripts][i]))
            grid.symbols(symbol,
                x[i], y[i],
                units = "native",
                size = unit(5, "mm"))
        }
    }
)
{{< / highlight >}}

Algún día, prometo, aprenderé a formatear el código en Wordpress para que no se parezca al que escribía la preclara conchi77 (los que no sepan quién es y no puedan refrenar su curiosidad, que me pregunten en privado: no quiero demandas).