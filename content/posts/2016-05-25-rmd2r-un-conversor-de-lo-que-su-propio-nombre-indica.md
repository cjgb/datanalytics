---
author: Carlos J. Gil Bellosta
categories:
- programación
- r
date: 2016-05-25 08:13:07+00:00
draft: false
lastmod: '2025-04-06T18:59:09.302054'
related:
- 2018-04-09-la-intrahistoria-de-mi-libro-de-r.md
- 2017-06-26-como-preambulais-vuestros-rmd.md
- 2010-04-21-para-que-copien-peguen-y-disfruten.md
- 2016-03-17-jupyter-me-quedo-con-rodeo-creo.md
- 2020-09-30-una-guia-breve-concisa-para-crear-codigo-y-proyectos-reproducibles.md
tags:
- github
- python
- r
- rmarkdown
title: 'Rmd2R: un conversor de lo que su propio nombre indica'
url: /2016/05/25/rmd2r-un-conversor-de-lo-que-su-propio-nombre-indica/
---

Mis clases de/con R suelen consistir en un guión que es un programa en R con muchos comentarios y ejercicios. Con el tiempo, estos últimos tienden a crecer hasta el punto de que se convierte casi en un fichero de texto comentado con aspersión —en su acepción no-DRAE de efecto— de líneas de código.

Mejor, me he dicho recientemente, usar Rmarkdown.

Pero Rmarkdown sirve para lo que sirve: como fuente para compilar ficheros pensados para ser leídos por seres humanos. Contiene demasiada información irrelevante —formato, etc.— para un guión.

Mantener dos referencias sincronizadas (.Rmd y .R) a mano es un gran NO.

¿La/mi solución? [Esta](https://github.com/cjgb/Rmd2R), que es un programa en Python que:

* Convierte el texto del .Rmd y parte del encabezamiento en comentarios
* Deja el código como tal
* Horrorizará a quienes tengan experiencia programando cosas que huelan a máquinas de estado finito; o, peor aún, les inspirarán condescendencia
* Pero que a mí me sobra