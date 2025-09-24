---
author: Carlos J. Gil Bellosta
categories:
- r
date: 2010-09-16 23:24:46+00:00
lastmod: '2025-04-06T18:52:04.732687'
related:
- 2012-05-03-representacion-de-datos-asociados-a-grupos.md
- 2014-11-19-dime-que-quieres-comparar-con-que.md
- 2013-12-27-tres-articulos-curiosos-sobre-graficos.md
- 2011-09-21-facetas-en-ggplot2-al-hilo-de-otra-gananada.md
- 2018-02-14-diagramas-de-cajas-lo-que-hay-que-saber-y-muchas-otras-cosas-que-no-hacen-tanta-falta-pero-que-son-entretenidas.md
tags:
- gráficos
- r
title: Representando gráficamente conjuntos de datos pequeños
url: /2010/09/16/representando-graficamente-conjuntos-de-datos-pequenos/
---

Últimamente me están llegando conjuntos de datos para analizar con muy pocos registros. He aquí un subconjunto de uno de ellos (de hoy y debidamente anonimizado):

{{< highlight R >}}
nivel.proteina <- c( 11.56, 10.43, 11.00, 10.92, 10.08, 9.98, 10.35,
  9.55, 9.19, 7.00, 6.72, 6.43, 7.43, 7.26, 6.67,  7.49, 8.03, 8.17,
  6.79, 7.68, 7.01, 7.51, 6.90, 7.27, 7.56, 8.61, 8.16, 7.12 )
grupo <- c(0,0,0,0,0,0,0,0,0,
  1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1)
datos <- data.frame( nivel.proteina, grupo )
{{< / highlight  >}}


Le he estado dando vueltas a la manera de representar gráficamente este tipo de conjunto de datos de la manera en que deben hacerse estas cosas: que con un mero golpe de vista pueda hacerse uno con ellos.

Sin pensar demasiado, a uno se le ocurre utilizar diagramas de cajas mediante un —posiblemente demasiado— espartano

{{< highlight R >}}
boxplot( nivel.proteina ~ grupo, dat = datos )
{{< / highlight  >}}

que genera esto:[![](/wp-uploads/2010/09/boxplot.png#center)
](/wp-uploads/2010/09/boxplot.png#center)

Pero para conjuntos de datos tan pequeños, las cajas no acaban de satisfacerme: sustituyen —tal vez demasiado _filosóficamente_— el dato mismo por una representación conceptual suya: es como llamar bosque a un conjunto de tan sólo 18 árboles. Así que utilizando unos gráficos que vi en el [libro de Pinheiro y Bates](http://stat.bell-labs.com/NLME/MEMSS/index.html), hice

{{< highlight R >}}
library(nlme)
datos.agrupados <- groupedData(nivel.proteina ~ 1 | grupo, data = datos )
plot(datos.agrupados)
{{< / highlight  >}}

para obtener


[![](/wp-uploads/2010/09/grouped.png#center)
](/wp-uploads/2010/09/grouped.png#center)




¿A alguien le parece más claro?




¿Conocerá alguno de mis lectores alguna ruta menos intrincada para crear un gráfico análogo?