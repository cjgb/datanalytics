---
author: Carlos J. Gil Bellosta
categories:
- estadística
- r
date: 2012-08-03 07:38:41+00:00
noindex: true
lastmod: '2025-04-06T18:45:42.569797'
related:
- 2012-08-06-un-paseo-por-el-paquete-microdatoses-y-la-epa-de-nuevo.md
- 2015-06-18-la-encuesta-de-presupuestos-familiares-en-microdatoses.md
- 2012-08-13-fallecimientos-y-microdatos.md
- 2014-06-27-disponible-una-nueva-version-de-microdatoses.md
- 2024-01-18-microdatoses-ultima-version.md
tags:
- datos abiertos
- estadística
- estadística pública
- microdatoses
- r
title: El paquete MicroDatosEs para microdatos públicos
url: /2012/08/03/el-paquete-microdataes-para-microdatos-publicos/
---

Comencé hace un tiempo un pequeño paquete de R, `MicroDataEs`, para importar automáticamente a R ficheros de microdatos distribuidos por los diversos organismos estadísticos (españoles, por acotar el ámbito). El objetivo es facilitar el análisis de este tipo de datos a los usuarios de R y como consecuencia:

* fomentar el uso de R entre aquellos que utilicen frecuentemente este tipo de información y
* hacer más accesibles estos datos a los usuarios de R.

Quien haya tratado de trabajar, por ejemplo, con los ficheros de [microdatos de la EPA que publica el INE](http://www.ine.es/prodyser/micro_epa.htm) comprenderá rápidamente el interés y alcance del paquete. Porque estos datos:

* se distribuyen en un fichero de texto posicional que sólo contiene códigos numéricos y
* la relación de valores correspondientes a dichos códigos y otros metadatos (como la posición de las columnas) están contenidas en unas [hojas de Excel](ftp://www.ine.es/temas/epa/disereg_epa0511.zip).

Cada usuario de R que quiera, por lo tanto, utilizar esta información tiene primero que (muy trabajosamente) trasladar a R los metadatos de las hojas de Excel, crear funciones que realicen la traducción, etc. Y estoy seguro de que más de uno (y más de cien) ya han malgastado horas de su vida en esos afanes.

El paquete `MicroDataEs` contiene dos partes:

* Una plataforma común y reutilizable para almacenar metadatos, leer ficheros, etc. y generar los `dataframes `correspondientes para, en principio, una clase amplia de ficheros de metadatos.
* Un catálogo de metadatos correspondientes a tipos de ficheros de microdatos generados por instituciones estadísticas.

Por el momento, el catálogo contiene únicamente información para la lectura de los datos de la EPA. Pero espero hacerlo crecer (y tal vez con tu ayuda: ¿me echas una mano?).

El paquete está [disponible en R-Forge](https://r-forge.r-project.org/projects/microdataes/) y puede instalarse en R haciendo

{{< highlight R >}}
install.packages("MicroDatosEs",
	repos="http://R-Forge.R-project.org")
{{< / highlight >}}

aunque tal vez sea necesario instalar alguna dependencia desde CRAN (si experimentan problemas en la instalación, hay que comprobar el mensaje de error para ver si se debe, efectivamente, a la falta un paquete). Se puede probar luego consultando `?epa2005`.

Y para terminar, insisto: si quieres colaborar en el paquete enriqueciendo el catálogo de ficheros (o, cuando menos, existe algún tipo de ficheros que te gustaría añadir a él), ponte en contacto conmigo y vemos qué podemos hacer al respecto.