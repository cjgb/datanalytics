---
author: Carlos J. Gil Bellosta
date: 2016-06-17 08:13:56+00:00
draft: false
title: Evolución histórica de la deuda del ayuntamiento de Madrid

url: /2016/06/17/evolucion-historica-de-la-deuda-del-ayuntamiento-de-madrid/
categories:
- números
- r
tags:
- datos abiertos
- datos públicos
- ggplot2
- números
---

Una de las cosas de las que me acuerdo de cuando leía es un parrafito de _Mi idolatrado hijo Sisí_ en el que Delibes ponía en la boca no sé si de alguno de sus protagonistas o del narrador en el que se daba cuenta de la anormalidad histórica que supuso el tiempo de la II República: de repente, la gente hacía cosas que nunca había hecho y que nunca había vuelto a hacer: hablar a todas horas y con todo el mundo de política. La política entraba en los círculos de amigos, en la sobremesa de las familias, etc.

Sea para lo bueno o para lo malo, vivimos tiempos que en eso se parecen a aquellos. Y como ha salido publicado [esto](http://www.europapress.es/madrid/noticia-deuda-ayuntamiento-cae-197-situa-4729-millones-primer-trimestre-20160615114856.html) y alguien me lo va a sacar a colación pronto, me curo en salud y acumulo una url con la que contestar, i.e., la que apunta a esta página.

He bajado [datos del Banco de España](http://www.bde.es/webbde/es/estadis/infoest/htmls/cdp.html), he extraído penosamente la información relativa a la deuda de Madrid y con



    library(ggplot2)
    library(<a href="http://inside-r.org/packages/cran/plyr">plyr)

    <a href="http://inside-r.org/r-doc/graphics/rect">rect <- data.frame(xmin=<a href="http://inside-r.org/r-doc/base/as.Date">as.Date("2015-05-24"),
                       xmax=max(deuda.madrid$fecha),
                       ymin=-Inf, ymax=Inf)

    ggplot(deuda.madrid, aes(x = fecha, y = deuda / 1e3)) + geom_line() +
      geom_rect(data=<a href="http://inside-r.org/r-doc/graphics/rect">rect,
                aes(xmin=xmin, xmax=xmax,
                    ymin=ymin, ymax=ymax),
                color="grey20",
                alpha=0.3,
                inherit.aes = FALSE) +
      ylab("deuda en millones de euros")



he construido

![deuda_bruta_madrid](/wp-uploads/2016/06/deuda_bruta_madrid.png)


y con



    incr.deuda.madrid <- data.frame(fecha = deuda.madrid$fecha[-1], deuda = diff(deuda.madrid$deuda) / 1000)
    incr.deuda.madrid$mes <- months(incr.deuda.madrid$fecha)

    ggplot(incr.deuda.madrid, aes(x = fecha, y = deuda)) + geom_line(alpha = 0.6) +
      geom_smooth() +
      geom_rect(data=<a href="http://inside-r.org/r-doc/graphics/rect">rect, aes(xmin=xmin, xmax=xmax, ymin=ymin, ymax=ymax),
                color="grey20",
                alpha=0.3,
                inherit.aes = FALSE)

    ggplot(incr.deuda.madrid, aes(x = fecha, y = deuda)) + geom_line(alpha = 0.6) +
      #geom_smooth() +
      geom_rect(data=<a href="http://inside-r.org/r-doc/graphics/rect">rect, aes(xmin=xmin, xmax=xmax, ymin=ymin, ymax=ymax),
                color="grey20",
                alpha=0.3,
                inherit.aes = FALSE) +
      facet_grid(mes~.)


,

![deuda_ayto_madrid_incr](/wp-uploads/2016/06/deuda_ayto_madrid_incr.png)


y

![deuda_ayto_madrid_incr_trim](/wp-uploads/2016/06/deuda_ayto_madrid_incr_trim.png)


Afortunadamente, no tengo que editorializar porque no sabría qué decir. Solo, si acaso, lo que no decir si uno quiere creerse sano de apofenia: que ha habido grandes y sustanciales cambios dentro del cuadrante gris.
