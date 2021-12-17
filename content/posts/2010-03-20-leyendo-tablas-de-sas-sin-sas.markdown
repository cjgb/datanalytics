---
author: Carlos J. Gil Bellosta
date: 2010-03-20 16:00:32+00:00
draft: false
title: Leyendo tablas de SAS... sin SAS

url: /2010/03/20/leyendo-tablas-de-sas-sin-sas/
categories:
- varios
tags:
- sas
---

No era atípico en aquella época en que SAS todavía se utilizaba como herramienta estadística que a uno le enviasen conjuntos de datos con la arcana extensión `.sas7bdat`, completamente imposibles de abrir con programa asequible alguno. Era una asombrosa manía dado que SAS (al igual que Excel) ni siquiera es compatible consigo mismo: los ficheros generados en SAS sobre Windows son incompatibles con los generados sobre UNIX, por ejemplo.

Existe la posibilidad de [exportar los datos desde SAS a un formato más abierto, interoperable y documentado](http://www.cpc.unc.edu/projects/china/data/documentation/sasxpt.html) que puede ser leído, por ejemplo, [desde R](http://gbi.agrsci.dk/~ejo/R/docs/SASImport.html). Pero para eso, de nuevo, hace falta tener acceso a SAS.

En teoría, uno podria utilizar [WPS](http://www.teamwpc.co.uk/products/wps), algo más barato pero tampoco gratuito. En tiempos encontré una herramienta que permitía extraer los contenidos de un fichero de SAS a texto pero que, de no pagar licencia, se saltaba una línea de cada 16.

Finalmente, hace no mucho, me llegó noticia de [dsread](http://www.oview.co.uk/dsread/), una aplicación de consola y para Windows (siempre licencias propietarias de por medio, carajo) capaz de volcar los contenidos de tablas SAS a ficheros CSV.
