---
author: Carlos J. Gil Bellosta
date: 2013-06-24 07:27:52+00:00
draft: false
title: 'pqR: un R más rápido'

url: /2013/06/24/pqr-un-r-mas-rapido/
categories:
- estadística
- r
tags:
- r
- computación
---

Hace no mucho, [Radford Neal publicó pqR](http://radfordneal.wordpress.com/2013/06/22/announcing-pqr-a-faster-version-of-r/), una versión de R _más rápida_. Y algunos os preguntaréis qué es y de dónde salió esa reimplementación.

La respuesta breve es la siguiente: no hace tanto, cuando R iba por la versión 2.13, Neal sugirió una serie de modificaciones (_patches_) para mejorar el rendimiento de R en algunos aspectos. Creo recordar que eran catorce, aunque bien pudo haber habido otros posteriores. Los desarolladores de R, sin embargo, rechazaron algunos (si no todos) de ellos por motivos de diversa índole pero que se resumen en lo siguiente:

* Neal está interesado en la eficiencia.
* A los desarrolladores de R les preocupan también la estabilidad del sistema, la posibilidad de introducir errores que repercutan en otras partes del código, etc.

En fin, diríase por un lado que se trata de una _boutade_ de Neal. Pero por otra parte sí que pone de manifiesto el no excesivo celo del núcleo de los desarrolladores de R en convertirlo en un lenguaje más eficiente computacionalmente.

Como ejemplo de lo cual, igual un día de estos termino una entrada que tengo perpetuamente postergada comparando R con Javascript.
