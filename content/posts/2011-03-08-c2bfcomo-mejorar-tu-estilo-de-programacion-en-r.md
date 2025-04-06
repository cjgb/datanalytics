---
author: Carlos J. Gil Bellosta
categories:
- r
date: 2011-03-08 09:59:28+00:00
draft: false
lastmod: '2025-04-06T18:49:17.655530'
related:
- 2010-11-01-una-propuesta-de-guia-de-estilo-de-r.md
- 2014-01-27-guia-de-estilo-de-r-de-google.md
- 2015-09-04-guias-de-estilo-para-programar-en-r.md
- 2011-05-13-consejos-para-utilizar-r-en-produccion.md
- 2011-06-21-desarrollo-de-paquetes-con-r-i-c2bfpara-que.md
tags:
- r
- programación
title: ¿Cómo mejorar tu estilo de programación en R?
url: /2011/03/08/como-mejorar-tu-estilo-de-programacion-en-r/
---

En un hilo reciente en la lista de desarrollo de R ha habido una discusión interesante acerca de [buenas prácticas a la hora programar con R](http://r.789695.n4.nabble.com/Request-Suggestions-for-quot-good-teaching-quot-packages-esp-with-C-code-td3307289.html) y concretamente, para desarrollar paquetes que contuviesen llamadas a código desarrollado en C/C++.

En particular, el autor del primer mensaje del hilo criticaba varios usos que consideraba inadecuados a la hora de programar en R:

1. El uso de _variables misteriosas_ surgidas de la nada. En particular, el uso de variables que aparecen en el cuerpo de la función pero que no han pasado como argumentos.
2. El uso de `<<-`
3. El uso de bucles for cuando el código podía haberse vectorizado.
4. El uso de `return` al final de una función
5. Código desordenado y antiestético. En particular, el no dejar que respire mediante el uso de espacios.

Al respecto, Hadley Wickham, recomendó leer los [consejos que ha recogido en su wiki](https://github.com/hadley/devtools/wiki). Gabor Grothendieck recomendó una [discusión en Stackexchange](http://stats.stackexchange.com/questions/5418/first-r-packages-source-code-to-study-in-preparation-for-writing-own-package).

El lector interesado podría también echar un vistazo a la muy mejorable [guía de estilo para la programación en R](http://www.datanalytics.com/2010/11/01/una-propuesta-de-guia-de-estilo-de-r/) de la que ya hablamos en otra ocasión.