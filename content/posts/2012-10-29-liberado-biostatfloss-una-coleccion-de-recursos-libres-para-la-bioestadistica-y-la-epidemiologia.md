---
author: Carlos J. Gil Bellosta
categories:
- estadística
- r
date: 2012-10-29 07:50:38+00:00
draft: false
lastmod: '2025-04-06T18:57:09.291941'
related:
- 2011-12-01-creacion-de-un-r-portable.md
- 2011-11-28-r-en-la-ensenanza-unos-comentarios-a-los-comentarios.md
- 2012-08-03-el-paquete-microdataes-para-microdatos-publicos.md
- 2010-02-27-creando-paquetes-con-r-r-forge.md
- 2011-07-28-el-paquete-pxr-en-cran.md
tags:
- bioestadística
- epidemiología
- r
- software
title: 'Liberado BioStatFLOSS, una colección de recursos libres para la bioestadística
  y la epidemiología '
url: /2012/10/29/liberado-biostatfloss-una-coleccion-de-recursos-libres-para-la-bioestadistica-y-la-epidemiologia/
---

Quiero publicitar hoy [BioStatFLOSS](http://www.sergas.es/MostrarContidos_N3_T01.aspx?IdPaxina=62658&idioma=es), una recopilación de _software_ (libre, como el propio nombre indica) para Windows, especialmente indicado a la hora de realizar trabajos en el campo de la bioestadística y la epidemiología (pero que también se puede utilizar para la realización de estudios estadísticos más generales).

El _software_ (que incluye R como _programa estrella_) ha sido _portabilizado_ —si no existía ya una versión _portable_, es decir, que no necesite instalación— y se ha creado un _lanzador_ común desde donde se puedan llamar a todos esos programas (véase la captura adjunta). Este lanzador está programado en [Lazarus (Free Pascal)](http://www.lazarus.freepascal.org/) y, en breve, se liberará el código fuente.

[![](/img/2012/10/Captura-300x201.jpg)
](/img/2012/10/Captura.jpg)

El _software_ está categorizado de la siguiente manera:

* R: R, RCommander, RStudio, Deducer, Red-R y Tinn-R (como editor)
* Bioestadística: Octave, PSPP, SOFA Statistics, SciLab, WinBUGS y FreeMat
* Epidemiología: Epidat 4, Epi Info 7 y OpenEpi
* Ofimática: LibreOffice, Firefox y Sunbird


La idea es conseguir que cualquiera pueda utilizar este tipo de programas en cualquier entorno bajo Windows. Al no necesitar instalación (simplemente se descarga el fichero, se descomprime y ya está listo para usar) está indicado para _entornos hostiles_ (que necesitan permisos de administrador para instalar software), aulas de formación (se puede descomprimir y ejecutar desde un pendrive, por ejemplo), etc.

Se puede descargar de [aquí](http://www.sergas.es/MostrarContidos_N3_T01.aspx?IdPaxina=62658&idioma=es ). Es un fichero comprimido de algo más de 1Gb. En esa página también aparece un correo de contacto para comentarios, sugerencias, etc.

(**Nota:** Esta entrada está basada en un correo de Miguel Ángel Rodríguez Muíños a la lista de correo [r-help-es](https://stat.ethz.ch/mailman/listinfo/r-help-es) y está redactado de manera que muchos considerarían plagio. Espero que nadie lo tome a mal.)