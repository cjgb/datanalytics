---
author: Carlos J. Gil Bellosta
date: 2016-10-05 08:13:46+00:00
draft: false
title: Barómetros del CIS con R

url: /2016/10/05/barometros-del-cis-con-r/
categories:
- estadística
- r
tags:
- barómetros
- cis
- datos abiertos
- datos públicos
- microdatos
- r
---

El CIS realiza [barómetros](http://www.cis.es/cis/opencm/ES/11_barometros/index.jsp) todos los meses menos uno. Pasado un tiempo (es octubre y el último publicado es de julio) coloca los microdatos en su [banco de datos](http://www.cis.es/cis/opencm/ES/11_barometros/depositados.jsp).

Aparte de ficheros .pdf que lo explican todo (pero que no dejan de ser .pdf), publica dos ficheros. Uno de datos en ancho fijo (prefijo DA) y otro con código SPSS (prefijo ES) con los consabidos (¿lo son? ¡felicidades si no!) encabezados DATA LIST, VARIABLE LABELS, VALUE LABELS, y MISSING VALUES.

Problemas de estos datos:



	  * Las variables, los códigos y las etiquetas cambian de barómetro en barómetro: aunque hay unas cuantas preguntas que se repiten en todos, cada barómetro se dedica a un tema distinto.
	  * Los datos no son planos: según lo que el entrevistado respondió en aquí, se le pregunta otra cosa allá.

![elige-tu-propia-a-ventura-1](/wp-uploads/2016/10/Elige-tu-propia-a-ventura-1.jpg)


	  * Aunque el paquete `memisc` de R es capaz de leer ficheros de ancho fijo con metadatos _en SPSS_ (busca `spss.fixed.file` [aquí](https://cran.r-project.org/web/packages/memisc/memisc.pdf)), no puede con todos: el formato tiene atajos y excepciones (además del asunto de las respuestas condicionales) que `memisc` no contempla.


No obstante, por el momento, tenemos opciones solo parcialmente satisfactorias:

	  * Leer el fichero de datos como de ancho fijo. Si al final solo te interesan unas pocas variables, puede sobrarte. Les asignas los códigos a mano y ya. Si tienes suerte, además, no serán de las de respuesta condicional (lo probé, lo sé).
	  * Usar PSPP, como [aquí](http://griverorz.net/blog/2013/10/20/leer_datos_cis.html) (no la he probado).
	  * Usar SPSS (hummmmm...)
	  * Usar ingeniería social (i.e., engañar a alguien que tenga SPSS).


De todos modos, me consta que dentro del CIS hay gente si no trabajando en el asunto (es decir, exportar datos de barómetros a algo que pueda ser importado en R fácilmente) dando guerra para que se haga.

En cualquier caso y por terminar: si el CIS me llama, les implemento la cosa gratis. Gratis total.
