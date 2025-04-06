---
author: Carlos J. Gil Bellosta
categories:
- r
date: 2010-07-24 15:24:19+00:00
draft: false
lastmod: '2025-04-06T18:45:19.599642'
related:
- 2017-12-11-cuidado-con-los.md
- 2012-01-12-cosa-prodigiosa-sin-palabras-i.md
- 2015-09-09-cosas-de-r-que-tal-vez-alguien-sabra-explicar.md
- 2014-09-19-primer-elemento-de-un-grupo-dentro-de-un-dataframe-de-r.md
- 2020-01-29-x.md
tags:
- r
title: Un curioso bug de R
url: /2010/07/24/un-curioso-bug-de-r/
---

A vueltas con los _bugs_, el otro día leí sobre uno [bastante curioso de R](http://r.789695.n4.nabble.com/Table-vs-unique-td2297029.html). En resumen:

{{< highlight R >}}
> a <- c(1,2, sqrt( 2) ^ 2 )
> table(a)
a
1 2
1 2
> unique(a)
[1] 1 2 2
{{< / highlight >}}


¿El motivo? La función `unique` compara el valor numérico de los valores del vector de manera que le afectan los errores de redondeo. Sin embargo, la función `table` compara los valores de acuerdo con su representación como cadena de caracteres.

{{< highlight R >}}
> 2 - sqrt(2) ^ 2
[1] -4.4409e-16
> as.character(c(2, sqrt(2)^2))
[1] "2" "2"
{{< / highlight >}}


Los entusiastas de R pueden comprobar todo lo anterior examinando (¡que es una buena costumbre!) el código de ambas funciones.