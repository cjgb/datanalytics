---
author: Carlos J. Gil Bellosta
categories:
- r
date: 2010-08-28 17:24:29+00:00
draft: false
lastmod: '2025-04-06T19:12:54.664044'
related:
- 2017-03-16-todo-lo-que-sucede-en-r-es-una-llamada-a-una-funcion.md
- 2012-09-27-ejemplos-sobre-como-usar-r-desde-sas-a-traves-de-iml.md
- 2012-01-23-nueve-reinas-con-sas-y-r-tambien.md
- 2014-01-16-macros-sintacticas-con-r.md
- 2010-04-21-para-que-copien-peguen-y-disfruten.md
tags:
- r
- sas
title: La función ifelse "a la SAS"
url: /2010/08/28/la-funcion-ifelse-a-la-sas/
---

Una función muy útil de R es ifelse:

{{< highlight R >}}
val <- 0
var <- ifelse( val == 1, "uno", "cero" )
print( var )
{{< / highlight >}}



Un programador en SAS haría algo así como

{{< highlight sas >}}
%macro test(val);
    %if &val=1 %then %let var=one;
    %else %let var=zero;
    %put &var;
%mend;

%test(0);
{{< / highlight >}}



SAS, sin embargo, [recomienda hacerlo así](http://support.sas.com/kb/40/271.html):

{{< highlight sas >}}
%let val=0;
%let var=%sysfunc(ifc(&val=1,one,zero));
%put &var;
{{< / highlight >}}


Una línea, sí, pero una línea muy críptica. ¡Aunque para gustos están los colores!