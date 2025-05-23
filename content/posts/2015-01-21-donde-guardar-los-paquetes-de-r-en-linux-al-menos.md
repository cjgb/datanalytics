---
author: Carlos J. Gil Bellosta
categories:
- r
date: 2015-01-21 07:13:02+00:00
draft: false
lastmod: '2025-04-06T19:13:23.661124'
related:
- 2011-06-30-desarrollo-de-paquetes-con-r-ii-primeros-pasos.md
- 2011-12-01-creacion-de-un-r-portable.md
- 2011-06-21-desarrollo-de-paquetes-con-r-i-c2bfpara-que.md
- 2010-10-22-tutorial-instalacion-de-la-extension-de-r-para-rapidminer.md
- 2011-06-08-gestion-de-proyectos-en-r.md
tags:
- linux
- paquetes
- r
- trucos
title: Dónde guardar los paquetes de R (en Linux, al menos)
url: /2015/01/21/donde-guardar-los-paquetes-de-r-en-linux-al-menos/
---

En todos mis Linux, desde el principio de los tiempos, R guardaba los paquetes en

* `/usr/lib/R/library`
* `/usr/lib/R/site-library` (¡a veces y no sé por qué!)
* `/usr/local/lib/R/site-library`

Bajo `/usr/lib` deberían instalarse solo aquellos que vienen _de serie_ con la instalación de R (o que se instalan usando el sistema de actualización de paquetes de la distribución de Linux) mientras que bajo `/usr/local` vivirían los instalados posteriormente por el usuario (véase [esto](http://www.linuxfromscratch.org/blfs/view/svn/introduction/position.html)).

Por supuesto, para escribir `/usr/local/lib/R/site-library` hacen falta permisos de superusuario y los paquetes ahí instalados están disponibles para todos los usuarios de la máquina. Pero de un tiempo a esta parte y por culpa, creo, de RStudio (tanto en versión de escritorio como de servidor), se me han comenzado a instalar paquetes en `~/R`, bajo mi directorio personal. ¡Anatema!

Pese a lo herético del asunto y por motivos que no vienen al caso, he decidido a partir de ahora almacenar los paquetes adicionales de R en ese último directorio, debajo de `/home`. Que cada cual haga sus cuentas.

Lo más importante, en cualquier caso, es el conocimiento de cómo ubica R los paquetes y cómo configurar esas opciones para poder disfrutar de la libertad de colocarlos donde a uno le plazca y no donde decidan poco democráticamente las opciones por defecto (y omito aquí deliberadamente una reflexión paternalista sobre la libertad y sus concomitancias):

* Primero, para saber cuáles son las rutas en que R busca e instala paquetes, úsese `.libPaths()`.
* Y segundo, para configurar dichas rutas (y en particular si uno quiere almacenar paquetes en su directorio personal), edítese `/etc/R/Renviron`.


Allá por el final del ese fichero (y si no, búsquese `LIBS` en él) aparecen las líneas

{{< highlight bash >}}
`R_LIBS_USER=${R_LIBS_USER-'~/R/x86_64-pc-linux-gnu-library/3.1'}
#R_LIBS_USER=${R_LIBS_USER-'~/Library/R/3.1/library'}`
{{< / highlight >}}

La primera es para usuarios de Linux. La segunda, para los pesados de la fruta. Coméntese y edítese a conveniencia.