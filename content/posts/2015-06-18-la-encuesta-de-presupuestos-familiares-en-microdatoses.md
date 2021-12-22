---
author: Carlos J. Gil Bellosta
date: 2015-06-18 08:13:10+00:00
draft: false
title: La encuesta de presupuestos familiares, en MicroDatosEs

url: /2015/06/18/la-encuesta-de-presupuestos-familiares-en-microdatoses/
categories:
- r
tags:
- epf
- ine
- microdatoses
- r
---

Hoy he subido una nueva versión del paquete `MicroDatosEs` a [r-forge](https://r-forge.r-project.org/R/?group_id=1377) que incluye herramientas para cargar los datos de la [Encuesta de Presupuestos Familiares](https://es.wikipedia.org/wiki/Encuesta_Continua_de_Presupuestos_Familiares).

Aún no está en CRAN, pero estáis invitados a probarla instalando la versión de desarrollo mediante

{{< highlight R "linenos=true" >}}
install.packages("MicroDatosEs", repos="http://R-Forge.R-project.org")
{{< / highlight >}}


La parte del paquete que se encarga de la EPF es obra de Diego Paniagua, que es uno de los estudiantes del [Experto en _Data Science_ de la UTAD](https://www.u-tad.com/estudios/experto-en-data-science/). La aportación a este paquete es, de hecho, parte de su proyecto final.

Como siempre, estáis invitados a probar el paquete y a avisar si encuentras un error.

**Nota:** El INE tiene a bien cambiar el formato de los ficheros de microdatos de vez en cuando. Incluso retroactivamente y sin previo aviso. El paquete es capaz de leer ficheros con el formato que, se ve, impera desde el 2011.

**Otra nota:** Si tu correo electrónico acaba en `ine.es`, mira a ver si puedes interceder por quienes creamos herramientas que usan datos vuestros y nos avisáis con tiempo para poder actualizar el código antes de que cambiéis el formato de los ficheros. Todos (nosotros, los usuarios, vosotros incluso) lo agradeceríamos enormemente.

