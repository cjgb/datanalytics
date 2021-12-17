---
author: Carlos J. Gil Bellosta
date: 2011-07-01 07:13:49+00:00
draft: false
title: Paquetes huérfanos de R

url: /2011/07/01/paquetes-huerfanos-de-r/
categories:
- r
tags:
- r
- paquetes
---

Ayer hablaba con Juan José Gibaja (al que finalmente conocí en persona) y me contaba cómo había usado un paquete de R —no recuerdo cuál— que misteriosamente había desaparecido de [CRAN](http://cran.r-project.org/web/packages/).

—¡Imposible! Los paquetes no desaparecen: quedan _huérfanos_.

Efectivamente, en la lista de paquetes de CRAN, abajo, se mencionan los llamados paquetes húerfanos. Según el _[README](http://cran.r-project.org/src/contrib/Orphaned/README)_, se trata de paquetes cuyos autores o mantenedores



* han decidido desentenderse del paquete o
* los mensajes que les envían desde CRAN rebotan o no son contestados.

Tales paquetes pasan al estado ORPHANED y se mantienen en CRAN mientras pasen los _checks_. Pero, conforme avanzan las versiones de R, puede que algunos de esos paquetes dejen de compilar y entonces son _archivados_. Existe una [lista de paquetes huérfanos archivados](http://cran.r-project.org/src/contrib/Orphaned/PACKAGES.csv) cuya última versión puede encontrarse [aquí](http://cran.r-project.org/src/contrib/Archive/).

Lo que igual puede interesar a mis lectores hoy es que pueden adoptar un paquete huérfano. De nuevo, de acuerdo con el README, basta con:



1. Descargar la última versión del paquete del archivo.
2. Realizar los cambios necesarios (respetando siempre el autor original y la licencia, claro)
3. Reenviar el paquete a CRAN indicando quién es el nuevo mantenedor en el fichero `DESCRIPTION `del paquete

¿Alguien se anima?
