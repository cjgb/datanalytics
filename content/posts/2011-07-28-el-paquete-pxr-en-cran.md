---
author: Carlos J. Gil Bellosta
categories:
- r
date: 2011-07-28 06:54:45+00:00
draft: false
lastmod: '2025-04-06T19:03:51.492618'
related:
- 2023-04-20-dejar-morir-pxr.md
- 2012-08-03-el-paquete-microdataes-para-microdatos-publicos.md
- 2015-06-18-la-encuesta-de-presupuestos-familiares-en-microdatoses.md
- 2010-02-27-creando-paquetes-con-r-r-forge.md
- 2014-06-27-disponible-una-nueva-version-de-microdatoses.md
tags:
- r
- paquetes
- pxr
title: El paquete pxR, en CRAN
url: /2011/07/28/el-paquete-pxr-en-cran/
---

El 1 de junio [escribí en la lista de ayuda de R en español](https://stat.ethz.ch/pipermail/r-help-es/2011-June/002294.html) para ver si alguien se animaba a colaborar en la creación de un paquete de R para importar datos en [formato PC-Axis](http://www.scb.se/Pages/List____314011.aspx).

Este formato es usado por [gran número de institutos estadísticos](http://www.scb.se/Pages/List____313990.aspx), entre ellos el INE español, para difundir y pubicar datos en formato electrónico. Existe una herramienta gratuita pero cerrada para analizar este tipo de datos, pero clamaba al cielo que los usuarios de R no contásemos con una manera de importarlos directamente. Además, lo necesitaba para un pequeño proyecto (del que hablaré próximamente).

La diferencia esencial entre lo que debería ser un usuario de R y de otro tipo de _software_ estadístico es que el primero no se limita a resolver su problema: quiere también ayudar y facilitar la tarea de los demás. O eso piensa el autor de estas líneas en esos raros momentos en que se reconcilia con el género humano.

De ahí mi correo inicial a la lista. Y de ahí también, supongo, la avalancha de voluntarios: al final no sabía cómo decir que no.

Desde ese día, un pequeño grupo de usurios de R, eminentemente [Oscar Perpiñán](http://procomun.wordpress.com/), Francisco Viciana y quien suscribe, nos hemos puesto manos a la obra. Y desde hace unos pocos días podemos felicitarnos de tener una primera versión del paquete [pxR en CRAN](http://cran.r-project.org/web/packages/pxR/).

El lector interesado queda invitado a leer la página de [información de pxR](http://pxr.r-forge.r-project.org/), a probarlo ?cuanto más a cara de perro mejor? y a mandar todo tipo de sugerencias y avisos de error a los desarrolladores. ¡Lo agradecerá la comunidad!