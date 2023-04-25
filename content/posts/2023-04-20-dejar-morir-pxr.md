---
author: Carlos J. Gil Bellosta
date: 2023-04-20
title: '¿Dejar morir pxR?'

url: /2023/04/20/dejar-morir-pxR/
categories:
- r
tags:
- r
- paquetes
- pxr
- estadística oficial
---

¿Dejar morir [`pxR`](https://cran.rstudio.com/web/packages/pxR/index.html)? He ahí la cuestión.

`pxR` es un paquete de R en CRAN en el que figuro como _mantenedor_. Es un subproducto de mis antiguas inclinaciones hacia el _procomún_. Me fue útil para alguna que otra actividad inútil.

El paquete sirve para importar a R datos en el [formato Px](https://www.scb.se/en/services/statistical-programs-for-px-files/px-file-format/). Este formato fue concebido en una época en la que aún no existían cosas mejores y mejor pensadas ---XML, JSON, datos _tidy_, etc.---, los ficheros se intercambiaban en disquette (¿se escribía así? ya no recuerdo bien) y casi todo el mundo usaba Windows. Era lo que había y hay que entenderlo; de otra manera, no se comprende casi ninguna de las decisiones de diseño del formato. Que, por otra parte, parece basado en la siguiente pareja de principios funcionales:

* Tiene formato Px todo fichero producido por el programa PxWin (¡Win!).
* Tiene formato Px todo fichero capaz de ser leído por el programa PxWin.

Pese a todo, fue adoptado por los menos espabilados de entre todos los servicios estadísticos nacionales de todo el mundo y, cómo no, por el INE y sus diecisiete microinstituciones satelitales. De la mala cabeza de algunos, deuda tecnológica, costes hundidos, e improductividad a tutiplén.

Como a la fuerza ahorcan, hará más de diez años, un pequeño grupo de voluntarios entre los que me contaba, desarrollamos `pxR` que lee y escribe datos en formato Px. Esta última, la de la escritura, fue una _funcionalidad_ que añadí a regañadientes: quería evitar que el paquete que co-programaba sirviese para aumentar el número de ficheros en dicho formato ---y creo que existe grabada por ahí una charla mía en que califiqué de _metástasis_ a esta expansión---. (Eso sí, tengo que indicar que esa función en particular me sirvió para vender un proyecto de formacion + consultoría en uno de esos institutos estadísticos de provincias que nunca se me habría ocurrido en la vida visitar _motu proprio_ y en la que, todo hay que decirlo, me trataron muy bien.)

Hasta la fecha, `pxR` ha subsistido en CRAN. La última noticia que tuve de que alguien lo usase para algo fue en 2015: dizque en el instituto estadístico de Groenlandia tenían un problema ---¡cómo no!--- con los _encondings_. (¡Nótese que Px es de la misma quinta que UTF-8!) Y nada desde entonces.

Así, hasta hace cuatro días. Ahora, a alguien se le ha roto algo y me ha estado escribiendo por ver si lo arreglo. Y me debato entre:

* Lo arreglo porque es mi _obligación moral_ como _mantenenedor_ oficial de la cosa.
* Lo dejo estar por ver si el tipo desiste y se hace el favor a sí mismo y, de paso, a todos los demás, y migra a otra cosa a la altura de los tiempos.

¡A saber qué haré!