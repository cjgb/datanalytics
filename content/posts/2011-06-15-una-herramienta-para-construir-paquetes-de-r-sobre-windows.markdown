---
author: Carlos J. Gil Bellosta
date: 2011-06-15 07:07:21+00:00
draft: false
title: Una herramienta para construir paquetes de R sobre Windows

url: /2011/06/15/una-herramienta-para-construir-paquetes-de-r-sobre-windows/
categories:
- r
tags:
- r
- paquetes
- windows
---

Construir paquetes multiplataforma con R supone todo un reto para quienes tenemos un acceso limitado o nulo a determinados sistemas operativos. En particular, a muchos nos resulta complicado acceder a una máquina Windows con todas las herramientas necesarias para crear y comprobar los paquetes.

Pero Uwe Ligges, el encargado de los paquetes binarios de Windows para CRAN ha puesto en funcionamiento un servicio para poder compilarlos. En la [página de información de este servicio](http://win-builder.r-project.org/) pueden consultarse las instrucciones para subir los paquetes y los _caveats_:



* El servicio no ofrece ningún tipo de garantías y el usuario tiene que saber que:

	* Podría haber problemas con virus
	* Los resultados positivos obtenidos al comprobar un paquete con este servicio pudieran no repetirse con una configuración de Windows distinta.


* El servicio no garantiza la privacidad o confidencialidad de los ficheros, aunque también es cierto que dada su arquitectura, es muy improbable que los contenidos puedan caer en manos de terceros.

Si desarrollar con Windows es una tortura, desarrollar para Windows es... Pero espero que este servicio contribuya a paliar estos males.

**Nota:** ¿he contado alguna vez que la razón última por la que dejé de usar Windows hace muchos años precisamente el poder trabajar con R debidamente?
