---
author: Carlos J. Gil Bellosta
categories:
- estadística
- números
- r
date: 2012-08-13 08:57:36+00:00
draft: false
lastmod: '2025-04-06T18:57:06.295094'
related:
- 2012-08-06-un-paseo-por-el-paquete-microdatoses-y-la-epa-de-nuevo.md
- 2012-08-03-el-paquete-microdataes-para-microdatos-publicos.md
- 2018-06-13-el-mejor-formato-para-diseminar-microdatos.md
- 2016-10-05-barometros-del-cis-con-r.md
- 2015-02-09-ejercicios-de-mi-clase-de-r.md
tags:
- datos abiertos
- ine
- microdatoses
- r
- mortalidad
title: Fallecimientos y microdatos
url: /2012/08/13/fallecimientos-y-microdatos/
---

Hace un tiempo, un amigo me dijo que si en verano tiende a crecer la tasa de fallecimientos. Como de eso no sé y no hay manera de preguntarle a Google cuándo se muere más la gente, acudí a [quienes se encargan de recopilar ese tipo de datos](http://www.ine.es/prodyser/micro_mnp_defun.htm). Y construí en relativamente poco rato un gráfico parecido a

[![](/img/2012/08/fallecimientos_x_mes_2011.png#center)
](/img/2012/08/fallecimientos_x_mes_2011.png#center)

que echaba por tierra su hipótesis.

Ahora quiero retomar el asunto aprovechando que he anunciado el [paquete MicroDatosEs](https://datanalytics.com/2012/08/03/el-paquete-microdataes-para-microdatos-publicos/) para indicar cómo se pueden crear los tres ficheros de metadatos necesarios para leer ficheros de microdatos. En concreto, ese tipo de [ficheros de microdatos posicionales](http://publib.boulder.ibm.com/infocenter/dmndhelp/v6r1mx/index.jsp?topic=/com.ibm.wbit.610.help.config.doc/topics/rfixwidth.html) a los que tan aficionados son los institutos estadísticos españoles.

El [primero](https://r-forge.r-project.org/scm/viewvc.php/pkg/inst/metadata/defun_2011_mdat1.txt?view=markup&revision=4&root=microdataes) tiene cinco columnas (separadas por tabuladores):

* `var`, el nombre de la variable
* `start`, la posición en la que comienza el dato
* `end`, la posición en la que termina
* `width`, la anchura, que podría deducirse de los dos valores previos
* `descr`, la descripción de la variable

El [segundo](https://r-forge.r-project.org/scm/viewvc.php/pkg/inst/metadata/defun_2011_mdat2.txt?view=markup&revision=4&root=microdataes) es otro fichero de texto con cinco columnas también separadas por tabuladores:

* `var`, el nombre de la variable, que tiene que coincidir con el del fichero anterior, por supuesto
* `tipo`, el tipo de variable
* `nulo`, que no me acuerdo para qué lo creé y posiblemente no sirva para nada
* `llave`, el código que asigna el INE (p.e., "01")
* `valor`, el valor que corresponde al código (p.e., "mujer")

Los campos de tipo "N", numérico, no tienen ni llave ni valor. Los campos con llave y valor son de tipo "D", de diccionario. Es probable que haya más tipos contemplados y que hagan falta otros más en función del caso. Pero no me acuerdo bien de los detalles.

Finalmente, el [tercer fichero](https://r-forge.r-project.org/scm/viewvc.php/pkg/inst/metadata/defun_2011_mdat3.txt?view=markup&revision=4&root=microdataes) de metadatos no se usa realmente. Sirve para indicar qué valores corresponden a nulos en cada una de las columnas del fichero de metadatos y tiene _sintaxis SPSS_, cosa que aún no me queda claro qué es. Tengo que ponerme con ello todavía.

Una vez que construyes tus ficheros de metadatos puedes probarlos con la función [`test.metadata`](https://r-forge.r-project.org/scm/viewvc.php/pkg/R/test.metadata.R?view=markup&root=microdataes) (véase también `?test.metadata`) para verificar que funcionan adecuadamente.

Y una vez que funcionan, si eres yo, los puedes integrar en el paquete creando una función tal como [`defun2011`](https://r-forge.r-project.org/scm/viewvc.php/pkg/R/defun2011.R?view=markup&root=microdataes) y su correspondiente [fichero de ayuda](https://r-forge.r-project.org/scm/viewvc.php/pkg/man/defun2011.Rd?view=markup&root=microdataes). Si no eres yo, puedes ponerte en contacto conmigo, enviarme los ficheros de microdatos y los integraría en el paquete con mucho gusto y respetando _atribucionalmente_ tu autoría.

En tanto, ¿algún lector se anima a _partir_ el gráfico que he mostrado más arriba por grupos de edad?