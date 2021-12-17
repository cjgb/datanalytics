---
author: Carlos J. Gil Bellosta
date: 2013-12-02 07:18:55+00:00
draft: false
title: Requisitos para mi taller de Hadoop + R en las V Jornadas de Usuarios de R

url: /2013/12/02/requisitos-para-mi-taller-de-hadoop-r-en-las-v-jornadas-de-usuarios-de-r/
categories:
- estadística
- r
tags:
- curso
- hadoop
- jornadas
- ciencia de datos
- r
---

El jueves 12 de diciembre impartiré un taller titulado [_Big data analytics: R + Hadoop_](http://r-es.org/Programa+de+las+V+Jornadas) en las [V Jornadas de Usuarios de R](http://r-es.org/V+Jornadas).

Va a ser un taller práctico y eso exige de los asistentes que quieran aprovecharlo disponer de una plataforma (¡no trivial!) sobre la que seguirlo y poder realizar los ejercicios. Además de poder seguir ahondando en el asunto después y por su cuenta.

Los requisitos son los siguientes:

**_Software_:**



	  * [VirtualBox](https://www.virtualbox.org/wiki/Downloads)
	  * ssh (via [putty](http://www.chiark.greenend.org.uk/~sgtatham/putty/download.html) en Windows)
	  * La [máquina virtual](http://datanalytics.com/uploads/hortonworks_sandbox_rstudio.zip) (¡3GB!)

Nótese que el tamaño de la máquina virtual (3GB) y del resto de los componentes hace imposible descargar todo el _software_ necesario el día de las jornadas. Hay que descargarlo de antemano.

**_Hardware_:**



	  * 4GB de RAM como mínimo; recomendado, +8GB
	  * Ordenador / OS de 64 bits

**Instrucciones:**



	  * Descarga la versión de VirtualBox (el enlace está arriba) adecuada para tu OS e instálalo.
	  * Descarga la máquina virtual y descomprírmela
	  * Abre VirtualBox y luego, `Machine > Add` (el fichero descomprimido)
	  * Arranca la máquina virtual (y comprueba que lo hace).
	  * De ocurrir algún problema:

	    *  Comprueba la lista de errores conocidos (más abajo).
	    * Busca el error en Google y soluciónalo.
	    *  Escríbeme con una descripción del problema.


**Acceso a la máquina virtual:**

**ssh: **`ssh -oPort=2222 rhadoop@localhost # pwd:rhadoop`

**root:** `pwd:hadoop`

**web:**



	  * rstudio:

	    * http://localhost:8787
	    * u/p: rhadoop/rhadoop

	  * hadoop job tracker:

	    * http://localhost:50030



**Problemas conocidos:**

La máquina virtual podría no arrancar (error de tipo VMR*) si tienes desactivada la virtualización en la BIOS. Los detalles de cómo solucionar el problema dependen de la máquina pero no es complicado identificar la opción que permite activar la virtualización.
