---
author: Carlos J. Gil Bellosta
date: 2010-02-27 19:58:01+00:00
draft: false
title: 'Creando paquetes con R: r-forge'

url: /2010/02/27/creando-paquetes-con-r-r-forge/
categories:
- estadística
- r
tags:
- estadística
- r
- programación
---

Hace poco no asistí a una conferencia del profesor [Campo Elías Pardo](http://www.docentes.unal.edu.co/cepardot/) en la Universidad Nacional de Colombia sobre la creación de paquetes de R. Me penó no poder asistir porque sospeché primero y corroboré después que se había obviado en ella una herramienta muy útil para la creación de paquetes con R: la _[forja oficial](http://r-forge.r-project.org/)_.

La conferencia trababa esencialmente de cómo crear paquetes bajo Windows. Windows es un sistema operativo del que sé poco y siempre me han parecido excesivamente arcanos los liturgias y herramientas necesarias para compilar los paquetes. Especialmente cuando uno cuenta con Linux. Pero ésa es otra historia.

¿Por qué es conveniente utilizar r-forge? Por infinidad de motivos de entre los cuales:

* **Acceso al código.** El código del paquete queda accesible remotamente, permitiendo la colaboración en su desarrollo distintos ordenadores, por distintas personas incluso desde ubicaciones distintas, etc.
* **Control de versiones.** El código del paquete queda gestionado bajo [subversion](http://es.wikipedia.org/wiki/Subversion). Versiones, conflictos, ediciones simultáneas, actualizaciones, etc. se gestionan automáticamente.
* **Distribución.** El paquete, aunque no esté alojado en los servidores de CRAN, queda disponible para su instalación por parte de cualquier usuario de R. Basta con descargarlo del enlace correspondiente.
* **Facilidad para publicar en CRAN.** El paquete, una vez maduro, puede subirse a los repositorios de CRAN con sólo completar un pequeño formulario (y ser, también, aprobado por los administradores de CRAN, por supuesto).
* **Tests.** r-forge comprueba diariamente el paquete en tres plataformas distintas y bajo dos versiones diferentes de R (producción y desarrollo). Uno puede no disponer de una máquina Windows, pero en r-forge compilan tu paquete con ella y uno recibe un informe de errores que puede utilizar para eliminar errores de programación, documentación, etc.
* **No derecho de admisión.** Uno puede desarrollar un paquete _tonto_, que entienda no tiene cabida en CRAN, pero, aun así, utilizar r-forge para ponerlo a distribución de la comunidad. Iba a poner como ejemplo un paquete para la gestión de peceras de mi buen amigo Xabi pero como he usado la palabra tonto más arriba y para que no me malinterprete, omitiré la referencia.
* **Publicidad.** r-forge proporciona una página web en la que uno puede publicar información relativa a su paquete que excede la contenida en sus ayudas y [viñetas](http://cran.r-project.org/doc/manuals/R-exts.html#Writing-package-vignettes).

Animo a los usuarios de R a paquetizar y publicar su código en R. Y a simplificar su vida utilizando r-forge para tal fin.
