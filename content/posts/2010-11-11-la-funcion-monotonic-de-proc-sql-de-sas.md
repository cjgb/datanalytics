---
author: Carlos J. Gil Bellosta
date: 2010-11-11 09:55:58+00:00
draft: false
title: La función monotonic de PROC SQL de SAS

url: /2010/11/11/la-funcion-monotonic-de-proc-sql-de-sas/
categories:
- varios
tags:
- sas
- computación
- trucos
---

Previamente he hablado en este blog de las ventajas que ofrece PROC SQL en SAS sobre otros métodos más propiamente SAS de realizar ciertas manipulaciones de datos. Existen no obstante cierto tipo de manipulaciones que exigen _pasos data_: gran parte de las que hacen uso de la _variable automática_ `n`.

No obstante, existe una función no documentada de SAS que permite implementar con SQL muchas operaciones de este tipo: monotonic.

He aquí [un ejemplo](http://www.amadeus.co.uk/sas-technical-services/tips-and-techniques/a-to-z-of-data-step-functions/the-monotonic-function/):


{{< highlight sql "linenos=true" >}}
proc sql;
  create table results as
    select
      monotonic() as sequence,
      *,
      case
        when (monotonic()=1) then 'First'
        else 'Not First'
      end as text
    from sashelp.class
  ;
quit;
{{< / highlight >}}


He aquí otro de mi factura para muestrear la cuarta parte de las observaciones de una tabla:


{{< highlight sql "linenos=true" >}}
proc sql;
  create table muestreo as
    select *
    from sashelp.class
    where mod( monotonic(), 4 ) = 0
  ;
quit;
{{< / highlight >}}


Estoy seguro de que mis lectores encontrarán otras aplicaciones. ¿Será que alguno querrá compartirlas a través de estas páginas, quizás, para ilustración de todos?
