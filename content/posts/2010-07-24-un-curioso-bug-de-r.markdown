---
author: Carlos J. Gil Bellosta
date: 2010-07-24 15:24:19+00:00
draft: false
title: Un curioso bug de R

url: /2010/07/24/un-curioso-bug-de-r/
categories:
- r
tags:
- r
---

A vueltas con los _bugs_, el otro día leí sobre uno [bastante curioso de R](http://r.789695.n4.nabble.com/Table-vs-unique-td2297029.html). En resumen:

{{< highlight R "linenos=true" >}}
> a <- c(1,2, sqrt( 2) ^ 2 )
> table(a)
a
1 2
1 2
> unique(a)
[1] 1 2 2
{{< / highlight >}}


¿El motivo? La función `unique` compara el valor numérico de los valores del vector de manera que le afectan los errores de redondeo. Sin embargo, la función `table` compara los valores de acuerdo con su representación como cadena de caracteres.

{{< highlight R "linenos=true" >}}
> 2 - sqrt(2) ^ 2
[1] -4.4409e-16
> as.character(c(2, sqrt(2)^2))
[1] "2" "2"
{{< / highlight >}}


Los entusiastas de R pueden comprobar todo lo anterior examinando (¡que es una buena costumbre!) el código de ambas funciones.
