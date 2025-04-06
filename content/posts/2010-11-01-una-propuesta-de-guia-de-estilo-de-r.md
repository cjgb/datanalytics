---
author: Carlos J. Gil Bellosta
categories:
- r
date: 2010-11-01 20:16:39+00:00
draft: false
lastmod: '2025-04-06T19:11:03.794574'
related:
- 2014-01-27-guia-de-estilo-de-r-de-google.md
- 2011-03-08-c2bfcomo-mejorar-tu-estilo-de-programacion-en-r.md
- 2011-06-30-desarrollo-de-paquetes-con-r-ii-primeros-pasos.md
- 2011-06-21-desarrollo-de-paquetes-con-r-i-c2bfpara-que.md
- 2015-09-04-guias-de-estilo-para-programar-en-r.md
tags:
- r
- google
title: Una (propuesta de) guía de estilo de R
url: /2010/11/01/una-propuesta-de-guia-de-estilo-de-r/
---

Síntoma del creciente interés por R es el hecho de que Google haya elaborado y publicado [una guía de estilo para R](http://google-styleguide.googlecode.com/svn/trunk/google-r-style.html). Me he tomado la libertad de [traducirla](http://www.datanalytics.com/2014/01/27/guia-de-estilo-de-r-de-google/). Espero que a Google no le importe.

Es conveniente (Google, yo y, seguramente, muchos otros lo creemos así) atenerse a un código de estilo a la hora de programar. No es éste foro en el que enumerar las ventajas que se derivan de ello: si habéis desarrollado código codo con codo con otros, sabréis a qué me refiero; si no, haced caso al consejo de quienes os precedieron y ahorraréis tiempo y dinero.

Las guías de estilo tienen algo de meteorológico: nunca llueven a gusto de todos. _Mi_ código de estilo de R se parece en ciertas cosas al de Google. En otras no. Algunas son cuestión de opinión y consenso. Otras, algo menos. Yo repensaría algunas de las normas de la guía de Google. He aquí cuáles; he aquí por qué:



* Globalmente, se echa de menos una recomendación importante: crear **paquetes** siempre que sea posible. Crear paquetes permite (y obliga a) mantener las funciones, etc., propiamente documentadas. De hecho, el apartado de la guía de estilo concerniente a la documentación de funciones sería innecesario si se recurriese sistemáticamente a la paquetización.
* También se echa en falta una serie de recomendaciones sobre cómo disponer el **código dentro de un paquete**.
* **Nomenclatura de funciones**: se nota que en Google hay mucho _javero_. Google recomienda que las funciones tengan nombres de la forma `HacerEstaCosa` o `CalcularAquelParametro`. Es decir: usar verbos, palabras completas con mayúscula sólo en la primera letra y nunca puntos para separarlas. No me parece del todo mal, salvo que no hay forma de crear métodos (S3) con ese criterio (tendrían que llamarse ImprimirTablaPorFecha.data.frame, por ejemplo). Pienso, además, que este tipo de nomenclatura para funciones resulta algo pesado (¿qué es mejor, `sin` o `CalculateSinOfAngle`?).
* No estoy seguro de si debería distinguirse el nombre de los _dataframes _de otro tipo de estructuras de R. Hay quienes prefieren dar a los _dataframes_ nombres que comiencen con una letra mayúscula. Y quien habla de _dataframes_ habla de otras estructuras complejas habituales en R.

En general, la guía de Google representa un paso importante (y con un marchamo de peso) en la dirección necesaria. Pero lo creo mejorable en las dos direcciones principales en que se resumen mis comentarios anteriores:

* Desarrollo de paquetes como mecanismo de documentación.
* Elaboración de las recomendaciones desde R y para R mejor que tratando de trasladar las que rigen en otros lenguajes de programación de manera que se eliminen algunas inconsistencias y completen algunos huecos.