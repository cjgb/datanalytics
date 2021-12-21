---
author: Carlos J. Gil Bellosta
date: 2018-06-13 08:13:04+00:00
draft: false
title: ¿El mejor formato para diseminar microdatos?

url: /2018/06/13/el-mejor-formato-para-diseminar-microdatos/
categories:
- estadística
tags:
- ine
- json-stat
- microdatos
- sdmx
---

A raíz de mi entrada de ayer, se han iniciado en mi derredor algunas discusiones sobre cuál podría ser el formato indicado para diseminar microdatos. En particular, los del INE. Y el asunto no es trivial.

Hasta la fecha, el procedimiento habitual era utilizar ficheros de ancho fijo con códigos, típicamente numéricos (p.e., 1-hombre; 6-mujer). Existían _diccionarios_ asociados con pares código-descripción que se distribuían en hojas de cálculo adjuntas; es decir, metadatos. El procedimiento tradicional, por lo tanto, equivalía a desnormalizar la información: una tabla maestra contenía claves externas y una miríada de tablas auxiliares, una por columna, resolvían esas claves a sus correspondientes descripciones.

Así que una propiedad deseable del formato de diseminación de datos es que pueda almacenar tanto códigos como sus descripciones. De usarse, p.e., CSV, habria que optar por unos u otros. O seguir manteniendo el sistema de tablas auxiliares.

Existen algunos formatos estandarizados para el intercambio de información estadística (tanto datos como sus metadatos) como [SDMX](https://sdmx.org/). Pero solo AEMET me cae lo suficientemente mal como para recomendarle usar dialectos de XML. Otra alternativa basada en JSON, que no sé qué tal funcionaría para microdatos, es [json-stat](https://json-stat.org/). Pero podría no ser tan popular y madura.

Si fuese el rey del mundo, obligaría a usar un formato de datos que:

1. incluyese tanto datos como metadatos,
2. evitase todo tipo de ambigüedades (desde los _encodings_ hasta las fechas, si procede)
3. estuviese medianamente estandarizado y, como consecuencia,
4. existiesen importadores en todos los sistemas de análisis estadístico razonables.

El problema es que no sé cuál sería. Pero igual algún lector tiene alguna idea con la que iluminarnos. Y si no, para aquellos que quieran contribuir al procomún y tengan algo de tiempo libre: ¿cómo se hace en el RU, Canadá, Francia, Alemania u Holanda?
