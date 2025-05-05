---
author: Carlos J. Gil Bellosta
categories:
- gráficos
date: 2016-10-13 08:13:39+00:00
draft: false
lastmod: '2025-04-06T19:08:02.098833'
related:
- 2014-05-07-graficos-de-mosaico-si-o-no.md
- 2014-12-01-graficos-e-interactividad-una-ocasion-desaprovechada.md
- 2011-03-29-graficos-ii-herramientas.md
- 2011-07-27-diagramas-de-puntos-dotplots.md
- 2012-09-10-graficos-estadisticos-y-mapas-con-r-un-analisis.md
tags:
- gráficos
- mondrian
- eda
title: 'Dos técnicas fundamentales para gráficos dinámicos de datos: "linking" y "brushing"'
url: /2016/10/13/dos-tecnicas-fundamentales-para-graficos-dinamicos-de-datos-linking-y-brushing/
---

El otro día me tocó enseñar algo de lo que no sé mucho: gráficos interactivos con R. Hay [muchos paquetes](https://datanalytics.com/2016/04/27/graficos-interactivos-con-r-un-resumen/) que vienen a hacer más o menos lo mismo. Es tentador limitarse a eso, a exponerlas. O más bien, a exponer unas vías de entrada, a establecer unas cabezas de playa desde las cuales el interesado pueda avanzar autónomamente.

Tanto (tentador) que uno pasa por alto la razón de ser misma de querer incorporar interactividad a los gráficos. Por el camino, dos técnicas fundamentales y muy útiles para tal fin: _linking_ y _brushing_.

![linking](/wp-uploads/2016/10/linking.png#center)

El _linking_ (dejadme que lo llame _enlazado_) vincula observaciones a través de distintas representaciones gráficas (o perspectivas) simultáneas de los gráficos. Permite trazar la posición de un punto (o grupo de puntos) seleccionados en una de las perspectivas a través del resto. Como en la figura anterior, en la que se han seleccionado las observaciones con el atributo `Satisfaction = High` y podemos ver cómo se distribuyen de acuerdo con el resto de las variables representadas.

El _brushing_ (¿cómo lo llamo?) es similar, solo que a escala: atribuye colores a, por ejemplo, las barras de un diagrama de ídem o una escala a las observaciones de un histograma (de menor a mayor) y traslada esos colores al resto de las perspectivas.

![brushing](/wp-uploads/2016/10/brushing.png#center)

La misma razón de ser de los gráficos interactivos es que el usuario pueda efectivamente interactuar con ellos en busca de patrones interesantes. No (al menos desde la perspectiva del análisis) para añadirles un botón de `Play` con el que mostrarlos como si fuesen dibujos animados (con el agravante de que las imágenes, al sobreimponerse, se tapan las unas a las otras). El enlazado y el _brushing_, usados convenientemente, sin embargo, permiten ahondar en la estructura de los datos.

Y termino con una cuña publicitaria para una diminuta pero magnífica herramienta de visualización de datos, [Mondrian](http://www.theusrus.de/Mondrian/), con la cual (y de sus autores, fundamentamente) aprendí todas estas cosas. Las imágenes mostradas en esta entrada son, de hecho, capturas de pantalla de Mondrian en acción.