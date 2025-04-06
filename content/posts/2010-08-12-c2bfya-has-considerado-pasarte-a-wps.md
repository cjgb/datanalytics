---
author: Carlos J. Gil Bellosta
categories:
- varios
date: 2010-08-12 20:35:29+00:00
draft: false
lastmod: '2025-04-06T18:48:09.243909'
related:
- 2010-08-22-mas-sobre-el-caso-wps-vs-sas.md
- 2010-09-07-mas-sobre-migraciones-de-sas-a-wps.md
- 2010-08-24-cinco-consejos-que-nunca-leera-quien-debe.md
- 2010-08-27-c2bfcuanto-cuesta-una-licencia-de-sas.md
- 2010-03-20-leyendo-tablas-de-sas-sin-sas.md
tags:
- sas
- software
- wps
title: ¿Ya has considerado pasarte a WPS?
url: /2010/08/12/ya-has-considerado-pasarte-a-wps/
---

Ya no recuerdo si he hablado antes de [WPS](http://www.teamwpc.co.uk/products/wps) en este blog. Puede que lo haya hecho en algún otro. No estoy muy contento con esa empresa (con la que he tratado de manera inexplicablemente infructuosa de realizar algún tipo de negocio en el pasado) pero no está de más que los lectores de este blog tengan noticia de su existencia y naturaleza.

WPS es una pequeña compañía inglesa que comercializa un clon de SAS. Es decir, un intérprete alternativo de [código SAS](http://es.wikipedia.org/wiki/SAS_(lenguaje_de_programación)).

Alguien puede pensar que se trata de un robo de propiedad intelectual. El hecho es que ni siquiera SAS lo interpreta así. SAS ha demandado, por supuesto, a WPS. Pero no ha sido por ese motivo (al menos, de manera explícita). De hecho, un lenguaje de programación no se considera propiedad intelectual al uso y cualquiera puede escribir un intérprete/compilador de C, C++, Java, Python, SAS, S (o R), o Cobol. Igual que cualquiera es libre de implementar una hoja de cálculo, un editor de textos o un navegador de Internet.

La base de la demanda de SAS consistió en que WPS había utilizado una licencia de SAS (una versión para estudiantes) para copiar el funcionamiento del producto. Y el EULA de tal licencia parece restringir tal tipo de usos.

No obstante, la justicia le ha dado la razón finalmente a WPS. Los detalles de la sentencia son prolijos (véase para [una discusión](http://analisisydecision.es/david-gana-a-goliat-la-sentencia-del-caso-sas-frente-a-wps/) o [su texto completo](http://www.bailii.org/ew/cases/EWHC/Ch/2010/1829.html )) y se resumen en lo siguiente:


1. La legislación europea permite copiar el funcionamiento (aunque no el código) de un programa.
2. Las restricciones del EULA de SAS son nulas de derecho: la compañía que vende un producto no puede restringir arbitrariamente el uso que luego se haga de él. Por ejemplo, Renault no te puede vender un coche y prohibirte que con él viajes a Portugal; o Pascual leche pero bajo la condición de que no se la des a tu perro.

He probado WPS antes (de hecho, [se puede obtener una versión de evaluación gratuita durante un mes](http://www.teamwpc.co.uk/tryorbuy)) y no me ha parecido mal producto. Puede resultar una alternativa válida para empresas que trabajan fundamentalmente con SAS Base para acceder a bases de datos (los conectores a distintos gestores de bases de datos vienen incluidos de serie en WPS, a diferencia de los de SAS), generar informes, etc.

El soporte para métodos estadísticos es bastante reducido. Pero existe la posibilidad de utilizar WPS junto con R para solventar dicha restricción.

En definitiva, una buena opción para ciertos usuarios muy conveniente en los tiempos de crisis que corren y que podría contribuir a abrir un mercado patológica y monopolísticamente copado por una única compañía.

Y tú,[ ¿ya has considerado pasarte a WPS?](http://www.kdnuggets.com/2010/08/f-new-poll-sas-wps-switching.html)