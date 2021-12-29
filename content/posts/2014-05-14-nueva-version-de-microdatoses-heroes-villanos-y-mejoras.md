---
author: Carlos J. Gil Bellosta
date: 2014-05-14 07:00:28+00:00
draft: false
title: 'Nueva versión de MicroDatosEs: héroes, villanos y mejoras'

url: /2014/05/14/nueva-version-de-microdatoses-heroes-villanos-y-mejoras/
categories:
- r
tags:
- censo
- epa
- memisc
- microdatoses
- r
---

Ayer odié mucho a José Luis Cañadas —que sigue no obstante siendo amigo: véase más abajo— por esto:

>Nueva versión en CRAN de MicroDatosEs de [@gilbellosta](https://twitter.com/gilbellosta). Permite leer con [#rstats](https://twitter.com/search?q=%23rstats&src=hash) entre otros, los microdatos los de la EPA del INE.
>
> -- Jose Luis Cañadas (@joscani) [May 13, 2014](https://twitter.com/joscani/statuses/466120464788889600)

Hubiera preferido reservarme la primicia para todos sus usuarios y simpatizantes de la nueva versión del [paquete MicroDatosEs](http://www.datanalytics.com/tag/microdatoses/) recién subida a [CRAN](http://cran.ms.unimelb.edu.au/web/packages/MicroDatosEs/index.html) pero... en fin.

De todos modos José Luis no es el villano de la historia. El villano es el INE, que parió en la mañana del 29 de abril los nuevos resultados de la EPA con un cambio retroactivo de formato en los ficheros de microdatos que rompió mis funciones justo cuando más falta hacían. ¡Contento me tiene el INE! ¡Apañaos dejó a los usuarios mi paquete! ¿Sabéis cuántos correos desesperados recibí esa mañana?

(La parte positiva de la historia es que vine a conocer a unos cuantos usuarios de mi código, uno de los mayores placeres de quien programa alguna cosilla).

Sucedió además que la nueva codificación, al contrario del resto de los valores del fichero, es alfanumérica (y no estrictamente numérica, como hasta la fecha). Eso perjudicó enteramente las funciones que utilizo internamente, las del [paquete `memisc`](http://cran.r-project.org/web/packages/memisc/index.html). Su autor, en comunicación personal, me comentaba que aún no ha encontrado el tiempo necesario para incorporar a ellas el soporte a códigos no numéricos. Es decir, el terreno no podía ser más pantanoso.

Ahí apareció el héroe de la historia. Que es José Luis. Sí, José Luis de nuevo. Esta vez, como digo, vestido de héroe y no de aguafiestas como más arriba. Me mandó por correo un _oneliner_ que no habíamos olido ni Martin Elff (autor de `memisc`) ni yo.

Si hoy podéis calcular la tasa de paro por nivel educativo, es gracias a él.

Finalmente, las mejoras. Sabréis que allá por el 2010 se hizo un censo en España y que los datos, solo unas cuantas docenas de meses después, ya están disponibles. No sé bien desde cuándo. Ni de dónde se pueden bajar. Solo sé que los tengo y que he creado una función que permite leerlos dentro de mi paquete. Eso sí, una función modificada de manera que sea posible

* leer solo una selección de columnas y
* creo que también solo una selección de filas.

De esto último (paradójicamente, porque si alguien debería saberlo, ese soy yo) no estoy seguro. Y hoy ya es muy tarde para ponerme a comprobar si lo hice o no. De lo que si que me acuerdo meridianamente es de que con 8GB de RAM no hay manera de cargar el fichero completo. Lo conseguí en un tiempo razonable (unos pocos minutos) en una máquina de 24 GB y creo que no le hicieron falta más que dos terceras partes. Como veis, no vale cualquiera. Pero seleccionando las columnas necesarias de antemano y con que no sean demasiadas, con casi cualquier ordenador moderno debería bastar.
