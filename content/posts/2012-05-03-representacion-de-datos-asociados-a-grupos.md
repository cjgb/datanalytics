---
author: Carlos J. Gil Bellosta
date: 2012-05-03 06:42:51+00:00
draft: false
title: Representación de datos asociados a grupos

url: /2012/05/03/representacion-de-datos-asociados-a-grupos/
categories:
- gráficos
tags:
- dotplots
- graficaca
- gráficos
---

Tropezó precisamente con este problema un compañero mío: ¿cuál es la manera más efectiva de representar 6 o 7 valores numéricos asociados a otros tantos grupos? Es sorprendente que en ninguno de los largos años que uno pasa educándose no le ayuden a resolver ese tipo de problemas (y en cambio sí a saltar un potro o pintar el archifamoso círculo cromático con témperas).

Así que para referencia de todos, dejo aquí un enlace a [un artículo](https://solomonmg.github.io/post/visualization-series-insight-from-cleveland-and-tufte-on-plotting-numeric-data-by-groups/) que encontré el otro día sobre este asunto del que extraigo y traduzco las observaciones fundamentales a la hora de representar conjuntos de datos tales como los que aparecen representados en el siguiente gráfico (en el que se usa un [_dotplot_](http://www.datanalytics.com/2011/07/27/diagramas-de-puntos-dotplots/)):

[![](/wp-uploads/2012/04/primarydot15.png)
](/wp-uploads/2012/04/primarydot15.png)

Los consejos son:

* Nunca uses representaciones en dos o tres dimensiones si una basta.
* Nunca uses tartas, tartas en tres dimensiones, barras apiladas o barras en tres dimensiones.
* Reduce la _[graficaca](http://www.datanalytics.com/tag/graficaca/)_ al mínimo: sombras, bordes, etc.
* Trata de representar el ruido presente en los datos usando intervalos de confianza o similares.
* Para representar un mismo conjunto de datos en varios grupos distintos, usa gráficos multipanel. Sobre todo si el sobreimprimir los gráficos crea confusión.
* Trata de eliminar la leyenda: casi nunca es necesaria.

