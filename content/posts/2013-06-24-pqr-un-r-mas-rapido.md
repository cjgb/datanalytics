---
author: Carlos J. Gil Bellosta
categories:
- estadística
- r
date: 2013-06-24 07:27:52+00:00
draft: false
lastmod: '2025-04-06T18:53:21.165552'
related:
- 2011-03-16-parentesis-corchetes-y-rendimiento-en-r.md
- 2012-02-28-julia-nuevo-lenguaje-programacion-cientifica.md
- 2014-04-11-no-hay-motivo-para-no-actualizar-tu-r-a-la-ultima-version.md
- 2012-06-04-la-prehistoria-de-r-segun-patrick-burns.md
- 2010-10-06-matlab-es-mas-rapido-que-r-c2bfy.md
tags:
- r
- programación
title: 'pqR: un R más rápido'
url: /2013/06/24/pqr-un-r-mas-rapido/
---

Hace no mucho, [Radford Neal publicó pqR](http://radfordneal.wordpress.com/2013/06/22/announcing-pqr-a-faster-version-of-r/), una versión de R _más rápida_. Y algunos os preguntaréis qué es y de dónde salió esa reimplementación.

La respuesta breve es la siguiente: no hace tanto, cuando R iba por la versión 2.13, Neal sugirió una serie de modificaciones (_patches_) para mejorar el rendimiento de R en algunos aspectos. Creo recordar que eran catorce, aunque bien pudo haber habido otros posteriores. Los desarrolladores de R, sin embargo, rechazaron algunos (si no todos) de ellos por motivos de diversa índole pero que se resumen en lo siguiente:

* Neal está interesado en la eficiencia.
* A los desarrolladores de R les preocupan también la estabilidad del sistema, la posibilidad de introducir errores que repercutan en otras partes del código, etc.

En fin, diríase por un lado que se trata de una _boutade_ de Neal. Pero por otra parte sí que pone de manifiesto el no excesivo celo del núcleo de los desarrolladores de R en convertirlo en un lenguaje más eficiente computacionalmente.

Como ejemplo de lo cual, igual un día de estos termino una entrada que tengo perpetuamente postergada comparando R con Javascript.
