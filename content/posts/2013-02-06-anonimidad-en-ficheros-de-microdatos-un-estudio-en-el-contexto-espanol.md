---
author: Carlos J. Gil Bellosta
categories:
- estadística
date: 2013-02-06 07:49:29+00:00
draft: false
lastmod: '2025-04-06T19:05:31.143636'
related:
- 2019-08-27-mas-sobre-la-anonimidad-y-reidentificacion-en-ficheros-de-microdatos.md
- 2011-10-06-ley-de-transparencia-y-anonimidad-en-ficheros-de-microdatos.md
- 2010-10-09-c2bfes-realmente-posible-la-anonimizacion.md
- 2011-09-22-anonimidad-y-cantidad-de-informacion.md
- 2012-10-04-ley-de-transparencia-y-anonimidad-en-ficheros-de-microdatos-ii.md
tags:
- anonimidad
- datos abiertos
- estadística pública
title: 'Anonimidad en ficheros de microdatos: un estudio en el contexto español'
url: /2013/02/06/anonimidad-en-ficheros-de-microdatos-un-estudio-en-el-contexto-espanol/
---

Estos días ha salido publicado un artículo mío, [_Microdata and k-anonymity: a quantitative approach in the Spanish context_](https://www.seio.es/beio/BEIOVol29Num1.pdf) en la Revista BEIO. Trata de algunos temas de los que ya nos hemos ocupado antes en estas páginas: la [anonimidad](http://www.datanalytics.com/tag/anonimidad/) que cabe esperar en ficheros de microdatos. Y, en este caso, cuando hacen referencia a personas que viven en España.

Supongamos que se hacen públicos unos ficheros de datos en los que se han eliminado los identificadores (nombre, DNI, etc.) pero muestra ciertos datos de individuos (población de residencia, fecha de nacimiento, sexo, etc.) y otros datos (enfermedades padecidas, si ha estado en la cárcel, etc.). Es posible que haya invidiuos únicos en el fichero, es decir, que exista solo uno con esos atributos. Eso los hace reidentificables. Por ejemplo, es probable que en Ólvega (provincia de Soria) solo resida una señora nacida en una fecha determinada de los años cincuenta.

Por eso se utiliza como medida de la anonimidad la llamada k-anonimidad: cuántos individuos comparten determinados atributos en los ficheros de datos. Y uno de los resultados de mi artículo es que, conocidos el municipio de residencia, la fecha de nacimiento completa y el sexo de una persona, el 42.38% de los individuos (en España), casi veinte millones, son reidentificables, es decir, 1-anónimos.

De hecho, sabidos el municipio, el sexo y de la fecha ya sea solo el año, el año y el mes o año, mes y día, el grado de k-anonimidad viene dado por la siguiente tabla:

[![](/img/2013/02/k_anonimidad_espana.png#center)
](/img/2013/02/k_anonimidad_espana.png#center)

(Nota: `n` se refiere a la población total y está expresado en miles).

En realidad, incluida la demostración del lema que contiene el artículo, este es un ejercicio que podría tildarse de producto del aburrimiento. Y tal vez acertadamente.

Pero creo que tiene también una lectura que puede llamar a la precaución a la hora de exigir transparencia hasta el punto de liberar y liberar conjuntos de datos referidos a personas: entre aquellos que actualmente custodian dichos datos y el público en general —y, muy en particular, algunos sujetos dentro de ese público en general que albergan intenciones nada benignas— es de rigor que existan guardianes que mantengan lo debidamente elevado el índice de anonimidad.

(Otra nota: debo agradecer a [Gregorio Serrano](http://www.grserrano.es/) y [Emilio Torres Manzanera](https://directo.uniovi.es/catalogo/DetalleProfesor.asp?idprofesor=28365) el haberse prestado cordialmente a revisar los primeros manuscritos del artículo y a enriquecerlo con sus sugerencias).