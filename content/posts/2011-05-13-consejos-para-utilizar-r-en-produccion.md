---
author: Carlos J. Gil Bellosta
date: 2011-05-13 07:58:02+00:00
draft: false
title: Consejos para utilizar R "en producción"

url: /2011/05/13/consejos-para-utilizar-r-en-produccion/
categories:
- consultoría
- r
tags:
- consultoría
- r
- programación
---

El otro día di con una entrada en una bitácora con [cinco consejos para utilizar R en producción](http://erehweb.wordpress.com/2011/02/02/r-in-production-systems/). Cuatro de ellos son razonables:



* Crear un sistema de validación, monitorización y alertas. Y, en particular, desarrollar un mecanismo para que R notifique los problemas encontrados por correo electrónico. En la entrada original hay código que puede utilizarse para tal fin.
* Usar la función `sink` para facilitar la detección y corrección de los errores.
* Usar Linux de 64 bits con mucha, mucha memoria. Aunque el autor de la entrada que comenta no lo diga, añado yo de mi cosecha que es conveniente utilizar `rm` y `gc` explícitamente cuando dejen de utilizarse objetos voluminosos para eliminarlos más satisfactoriamente y facilitar labor del [recolector de basura](http://es.wikipedia.org/wiki/Recolector_de_basura).
* Usar sentencias `tryCatch`.

El último de los consejos del autor es más cuestionable: utilizar —más bien se refiere a reescribir— tus propias funciones. Pone como ejemplo la función `glm`, que [no tiene mucho éxito de crítica](http://www.stat.columbia.edu/~cook/movabletype/archives/2010/09/the_future_of_r.html), al parecer.

En mi experiencia, cuando uno tropieza con algo mejorable, suele ser más productivo contactar con el autor de la función o el paquete y proponerle un cambio. Muchos, los más, son receptivos. De hecho, lo agradecen. Sólo dos —omitiré los nombres— me han respondido de malas maneras.

Porque, al fin y al cabo —y que conste que no soy ni buenista ni ñoño—, somos una comunidad de usuarios: ésa es la fuerza, ahí reside el valor de R. Y, en el fondo, por eso nos gusta.
