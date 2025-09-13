---
author: Carlos J. Gil Bellosta
categories:
- r
date: 2011-07-01 07:13:49+00:00
lastmod: '2025-04-06T19:12:29.453287'
related:
- 2011-06-21-desarrollo-de-paquetes-con-r-i-c2bfpara-que.md
- 2010-02-27-creando-paquetes-con-r-r-forge.md
- 2013-11-10-5000-paquetes-de-r-en-cran.md
- 2011-07-28-el-paquete-pxr-en-cran.md
- 2023-04-20-dejar-morir-pxr.md
tags:
- r
- paquetes
title: Paquetes huérfanos de R
url: /2011/07/01/paquetes-huerfanos-de-r/
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