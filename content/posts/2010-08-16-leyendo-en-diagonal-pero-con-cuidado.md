---
author: Carlos J. Gil Bellosta
categories:
- ciencia de datos
date: 2010-08-16 04:20:30+00:00
lastmod: '2025-04-06T18:49:22.964502'
related:
- 2013-09-05-donde-deberian-comenzar-los-ejes.md
- 2015-12-09-droga-dura-el-retorno-de-los-chamanes.md
- 2013-12-31-palabras-y-pelas-un-ejercicio-apenas-incoado.md
- 2012-07-11-otra-oximoron-notarios-y-estadisticas.md
- 2012-03-13-las-palabras-esenciales-del-diccionario.md
tags:
- nlp
title: Leyendo en diagonal (pero con cuidado)
url: /2010/08/16/leyendo-en-diagonal-pero-con-cuidado/
---

Un profesor mío de historia en primero de BUP nos confesó un día que para corregir exámenes leía en diagonal: pasaba la vista de la esquina superior izquierda de la hoja a la inferior derecha y según las palabras que entendía por el camino ponía una nota u otra.

Justo o no el procedimiento, es cierto que de un mero golpe de vista sobre un texto se pueden adivinar muchas cosas sobre su contenido. Andando los años, además, los ordenadores nos están comenzando a ayudar a realizar este tipo de lecturas superficiales. Si no, véase este gráfico publicado en El País que resume el discurso de Zapatero en el Debate del Estado de la Nación (del 2010):

[![](/wp-uploads/2010/08/1279115173-d44c125a0e942209b6fd646151b32421.jpg)
](/wp-uploads/2010/08/1279115173-d44c125a0e942209b6fd646151b32421.jpg)

Se supone que uno debiera hacerse idea de lo que trataba el discurso sin más que pasar la vista por la nube de palabras. Sin embargo, independientemente de nuestra opinión acerca de estos recursos de nuestra pereza para mantenernos en la superficie de las cosas, desde esta bitácora queremos realizar una lectura crítica de la técnica usada en este caso concreto (no del contenido, guárdenos Dios).

Crítica que resultará muy útil, espero, a los lectores que más tarde quieran incursionar en el nada trivial campo de la minería de texto. Porque ha de tenerse en cuenta que el punto de inicio de tal tipo de estudios es un correcto procesamiento del lenguaje. El que el español (en nuestro caso) sea un idioma tan flexible gramaticalmente no hace sino subrayar esta necesidad.

Es denunciable pues que en la nube aparezcan:

* "economía" y "Economía", cuando es elemental que antes de agregar frecuencias hay que ignorar las mayúsculas.
* _stop words_ genéricas como "ello", "respecto", "gran", "cuatro", "dos", "sino", "ahora", etc. que deberían haber sido filtradas previamente.
* _stop words _específicas, tales como "Señorías". Palabras de este tipo pueden resultar útiles para distinguir un tipo de discurso de otro, pero dentro del contexto de una intervención parlamentaria, "Señorías" se convierte en una redundancia, una palabra que descartar.
* "hecho", "hace" y "hacer"; independientemente de que el verbo hacer pueda ser o no considerado un _stop word_, hay que agregar las raíces (o infinitivos) de los verbos y no sus formas conjugadas.
* "mercados" y "mercado", que es una versión de lo anterior para el caso de los sustantivos.
* "Comunidades" y "Autónomas" por separado, cuando es más que probable que siempre apareciesen juntas y, de alguna manera, inseparables, en el discurso.

Éstos son, por supuesto, problemas extra-estadísticos: pertenecen al ámbito del procesamiento automático del lenguaje y resultan, reitero, especialmente complejos en un idioma tan flexible como el español.