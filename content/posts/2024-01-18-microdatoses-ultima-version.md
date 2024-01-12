---
author: Carlos J. Gil Bellosta
date: 2024-01-18
title: "Nueva (y espero que última) versión de MicrodatosEs"
url: /2024/01/11/microdatoses-ultima-version/
categories:
- r
tags:
- microdatos
- paquetes
- microdatoses
- estadística pública
---

El otro día visité el museo de ciencias naturales de Madrid. Constaté que aún no he perdido mi extraño interés por esas pocas especies que dizque convivieron con los dinosaurios. [`MicrodatosEs`](https://cran.r-project.org/web/packages/MicroDatosEs/index.html) es casi una criatura de esa época. No tanto, pero casi.

Me sorprende, de hecho, que tuviese algún usuario; que este, además, encontrase un _bug_ y que, finalmente, diese noticia de él. La versión que lo soluciona es la que ahora figura y ocupa espacio en CRAN.

Cuando se creó `MicrodatosEs`, el INE ---la principal fuente de datos que ayuda a leer en R--- hacía públicos ficheros en el que parece el formato estándar de las administraciones públicas: ancho fijo con códigos numéricos. Una reliquia que ya entonces sonaba jurásica. El paquete era una máquina del tiempo que los transportaba de los setenta a los (dos mil) diez. Hoy en día, es parecido: los ficheros de ancho fijo siguen ahí, fosilizados, pero para casi todos ellos el INE proporciona código en R ---hermanado en estética, estilo y eficacia con el javascript de Renfe--- para leerlos.

`MicrodatosEs` debería estar, a estas alturas del siglo, _plusquamdeprecado_. Debería haber sido sustituido por otras cosas mejores, tal vez lejanamente inspiradas en él, tal vez de nueva planta, pero no debería tener que ser usado hoy en día. Que exista, que alguien lo utilice y que yo me vea obligado a actualizarlo es indicio inequívoco de un fracaso colectivo.