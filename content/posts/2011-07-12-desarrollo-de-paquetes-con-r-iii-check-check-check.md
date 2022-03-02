---
author: Carlos J. Gil Bellosta
date: 2011-07-12 07:35:00+00:00
draft: false
title: 'Desarrollo de paquetes con R (III): check, check, check'

url: /2011/07/12/desarrollo-de-paquetes-con-r-iii-check-check-check/
categories:
- r
tags:
- r
- paquetes
- programación
---

Uno de los pasos más importantes en el desarrollo de un paquete es verificar que funciona correctamente. Un _check_ comprueba la estructura del paquete, la consistencia entre el código y la documentación, que no faltan secciones importantes en esta última, que los ejemplos pueden ejecutarse sin problemas, etc.

De ahí que sirva para para muchos propósitos. En particular, si uno elige los ejemplos que acompañan a la documentación de las funciones con buen criterio, éstos servirán no sólo para ilustrar el comportamiento de las funciones sino, también, para verificar el funcionamiento del paquete. Además, de usar [R-forge](http://r-forge.r-project.org), como el sistema realiza _checks_ en varias plataformas distintas, el elegir bien los ejemplos permite realizar comprobaciones multiplataforma del código.

Confieso no saber cómo hacer un _check_ sobre Windows, la verdad. Por eso me voy a limitar al entorno que uso, Linux ?aunque entiendo que el procedimiento es válido también para variantes de Unix, incluida la de Mac?. Normalmente, suelo desarrollar sobre el directorio `$HOME/src/r`. En él guardo diversos directorios con distintos proyectos relacionados con R. Al hacer



{{< highlight bash >}}
R CMD check mi_paquete
{{< / highlight >}}



R crea un directorio adicional, `mi_paquete.Rcheck`, en el directorio de trabajo. Por mantener limpio mi disco, suelo proceder así:


{{< highlight bash >}}
cd /tmp
ln -s $HOME/src/r/mi_paquete
R CMD check mi_paquete
{{< / highlight >}}


De esta manera, los directorios adicionales creados por R quedan en `/tmp` y se eliminan por sí solos al apagar el equipo.


