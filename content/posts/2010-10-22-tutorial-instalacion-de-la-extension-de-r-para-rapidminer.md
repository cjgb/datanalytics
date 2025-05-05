---
author: Carlos J. Gil Bellosta
categories:
- r
date: 2010-10-22 22:59:24+00:00
draft: false
lastmod: '2025-04-06T18:53:55.517810'
related:
- 2010-08-31-anuncio-de-la-integracion-de-rapidminer-y-r.md
- 2013-01-30-tutoriales-de-rapidminer-en-youtube.md
- 2010-09-26-rutinas-de-c-en-r.md
- 2015-01-21-donde-guardar-los-paquetes-de-r-en-linux-al-menos.md
- 2013-11-20-rpython-ya-en-windows.md
tags:
- r
- rapidminer
title: 'Tutorial: instalación de la extensión de R para RapidMiner'
url: /2010/10/22/tutorial-instalacion-de-la-extension-de-r-para-rapidminer/
---

Por popular demanda, voy a explorar cómo de dificultoso es instalar el [puente entre R y RapidMiner](https://datanalytics.com/2010/09/08/mas-sobre-la-integracion-de-r-y-rapidminer/) en Windows y a dejar escrito cómo se hace. Lo instalé hace días en Linux (Ubuntu) sin mayor problema. Pero hay quien parece que haberlos tenido en la ubicua plataforma.

No sé mucho de Windows y las diferentes versiones y configuraciones que pueda tener. Sólo sé que que he probado los pasos de este tutorial sobre un Windows 7 Profesional (creo) de 32 bits.

Los pasos son los siguientes:


1. Descargar RapidMiner de esta [página](http://rapid-i.com/content/view/26/82/) e instalarlo _a la Windows_: doble click, aceptar, aceptar, etc.
2. Tal vez mientras tanto, instalar R y el paquete [rJava](http://cran.r-project.org/web/packages/rJava/index.html) (de no tener alguno de los dos instalados ya previamente).
3. Añadir el directorio en el que se encuentran R y R.dll a la [variable de entorno %PATH% de Windows](http://mikengel.com/java-jdk-configurar-variables-de-entorno-windows-7) para que RapidMiner pueda encontrarlos. En mi instalación son dos directorios distintos: C:/archivos de programa/r/r-2.12.0/bin para R y C:/archivos de programa/r/r-2.12.0/bin/i386 para R.dll.
4. Tener adecuadamente instalado Java en el ordenador. En particular, tener definida la variable de entorno JAVA_HOME apuntando al directorio que contenga un JRE. Es más que probable que sea necesario uno no demasiado antiguo. En mi sistema he usado éste que está en C:/archivos de programa/java/jre6. Hay otro en el directorio de instalación de RapidMiner que también debería funcionar.
5. Arrancar RapidMiner. Al iniciarse por primera vez, RapidMiner nos pregunta por el directorio donde ubicar el _repositorio_. Se puede crear uno para él. Inmediatamente se abre una ventana en la que RapidMiner indica que existen actualizaciones disponibles. Como se aprecia en la captura de pantalla, una de ellas es la extensión para R (imagino que quienes tengan ya instalado RapidMiner pueden acceder a la misma ventana de actualizaciones a través de los menús de la aplicación):


[![](/wp-uploads/2010/10/actualizaciones_rapidminer_r.png#center)
](/wp-uploads/2010/10/actualizaciones_rapidminer_r.png#center)



6. Tras seleccionar la extensión para R y confirmar la selección, aparece una ventana con instrucciones adicionales que se refieren, fundamentalmente, a Java (aunque realmente ya hemos hecho todo eso antes).
7. Reiniciar Rapidminer. Entonces éste pregunta por la ubicación del fichero jri.dll, que se encuentra dentro de la carpeta del paquete rJava de R. En particular, en mi sistema, está en C:/archivos de programa/r/r-2.12.0/library/rJava/jri.
8. Reininciar RapidMiner,... _et voilà_:



[![](/wp-uploads/2010/10/rapidminer_con_r.png#center)
](/wp-uploads/2010/10/rapidminer_con_r.png#center)