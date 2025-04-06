---
author: Carlos J. Gil Bellosta
categories:
- r
date: 2017-02-07 08:13:50+00:00
draft: false
lastmod: '2025-04-06T19:03:13.336544'
related:
- 2010-07-24-un-curioso-bug-de-r.md
- 2010-11-02-comportamiento-inesperado-c2bfsolo-por-mi.md
- 2017-12-11-cuidado-con-los.md
- 2010-04-21-para-que-copien-peguen-y-disfruten.md
- 2010-03-29-puedo-cambiar-mi-codigo-retroactivamente.md
tags:
- bug
- r
- trucos
title: Una mala manera de perder un par de horas
url: /2017/02/07/una-mala-manera-de-perder-un-par-de-horas/
---

Es esta:

{{< highlight R >}}
156.67 * 100
# 15667
as.integer(156.67 * 100)
#15666
{{< / highlight >}}

Claro, hay que leer `?as.integer` para enterarte de que, en realidad, la función que quieres usar es `round`.

Una mala manera de perder un par de horas.