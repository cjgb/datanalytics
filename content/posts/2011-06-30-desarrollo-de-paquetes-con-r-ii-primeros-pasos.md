---
author: Carlos J. Gil Bellosta
categories:
- r
date: 2011-06-30 07:36:54+00:00
draft: false
lastmod: '2025-04-06T19:04:01.637448'
related:
- 2011-07-12-desarrollo-de-paquetes-con-r-iii-check-check-check.md
- 2010-02-27-creando-paquetes-con-r-r-forge.md
- 2011-06-21-desarrollo-de-paquetes-con-r-i-c2bfpara-que.md
- 2011-06-08-gestion-de-proyectos-en-r.md
- 2022-06-02-orgamizacion-proyectos-datos.md
tags:
- r
- paquetes
- programación
title: 'Desarrollo de paquetes con R (II): primeros pasos'
url: /2011/06/30/desarrollo-de-paquetes-con-r-ii-primeros-pasos/
---

La segunda entrada en mi serie sobre la creación de paquetes con R cubre los primeros pasos en la creación de uno. Bastan para tener una primera versión de un paquete en minutos. Pero antes, unos consejos generales:



1. **Usar algún tipo de sistema operativo basado en Unix:** Linux, Mac OS, etc. o Cygwin en el peor de los casos. Tengo que confesar que yo comencé a usar Linux precisamente por este motivo: los procedimientos y herramientas que se utilizan para construir paquetes de R están influenciadas por la _tradición Unix_. Es cierto que se han creado herramientas para poder desarrollarlos desde Windows pero, después de haber trabajado en Linux, me parecen incómodas y antinaturales: pasar de Linux a Windows es como pasar del Ferrari al borriquillo.
2. **Registrar el proyecto en R-Forge**, [como ya hemos comentado previamente](https://datanalytics.com/2010/02/27/creando-paquetes-con-r-r-forge/). Dadas sus ventajas —siendo una de las principales permitir probar el paquete sobre varias plataformas distintas (Linux, Mac y Windows) automáticamente— sólo se me ocurre un motivo para no utilizarlo: como el código está públicamente disponible, no es válido para desarrollar aplicaciones cerradas y propietarias.
3. Utilizar [subversion](https://datanalytics.com/2011/06/13/minitutorial-de-subversion/) (o [git](http://git-scm.com/)). Si el proyecto se aloja en R-Forge, subversion es la opción por defecto. Utilizar subversion permite gestionar mejor el desarrollo del paquete y facilita la colaboración entre los diversos autores.

La manera en la que recomiendo comenzar a crear un paquete es partiendo de una serie de funciones ya desarrolladas previamente. Ni siquiera hace falta que estén terminadas ni que funcionen correctamente. Por ejemplo, podemos tener las dos funciones siguientes:







{{< highlight R >}}
foo <- function( x ) 2 * x
bar <- function( y ) 2 * y
{{< / highlight >}}







Si abrimos una nueva sesión de R —para que no haya funciones ni objetos adicionales en memoria (técnicamente, en el entorno global)— y cargamos esas funciones, podemos crear el _esqueleto _de nuestro paquete, al que llamaremos `mipaquete`, así:







{{< highlight R >}}
package.skeleton( "mipaquete" )
{{< / highlight >}}







Ese comando crea en el directorio actual el directorio mipaquete con la estructura básica de un paquete: el fichero `DESCRIPTION `y los directorios `R `(con el código de las funciones) y `man `(con el esquema básico de los ficheros de ayuda). Pero, ¡cuidado, sólo puede utilizarse una vez! En lo sucesivo, al añadir funciones adicionales hay que crear el correspondiente fichero `.Rd` a mano.

A partir de ese momento, basta con ir completando los detalles: esencialmente, editar y completar los ficheros `DESCRIPTION `y los `.Rd` del directorio `man`. Para ello, es útil tener en cuenta los siguientes consejos:



1. Crear cabeceras en los ficheros de código y, en general, seguir algún [criterio de estilo en el código](http://www.datanalytics.com/guia_estilo_r.html) y añadir comentarios en los lugares adecuados.
2. Consultar el [documento de creación de extensiones de R](http://cran.r-project.org/doc/manuals/R-exts.pdf) para los detalles concretos acerca de cómo debe completarse el fichero DESCRIPTION o qué secciones son necesarias en los ficheros .Rd.
3. Mantener la coherencia entre la definición de las funciones en su fichero `.R` y el correspondiente fichero de documentación `.Rd`: si no, será imposible crear el paquete porque R comprueba automáticamente que no existen discrepancias entre código y documentación.
4. Crear ejemplos en los ficheros `.Rd`: son muy útiles porque R comprueba que se ejecutan correctamente. Eso permite controlar que todo funciona correctamente de una manera automática.

El objetivo de esta fase es que el paquete pase un _check_. En un _check_, R comprueba la coherencia entre código y documentación, que los ejemplos puedan ejecutarse correctamente, que no faltan campos esenciales en los paquetes, etc. Pero de cómo realizar este check nos ocuparemos en la siguiente entrega de la serie.