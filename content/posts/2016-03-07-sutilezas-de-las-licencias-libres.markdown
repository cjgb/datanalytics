---
author: Carlos J. Gil Bellosta
date: 2016-03-07 09:13:12+00:00
draft: false
title: Sutilezas de las licencias libres

url: /2016/03/07/sutilezas-de-las-licencias-libres/
categories:
- r
tags:
- json
- r
- rjsonio
---

Leyendo por ahí, he encontrado un comentario sobre el paquete [`RJSONIO`](https://cran.r-project.org/web/packages/RJSONIO/index.html) de R en el que se recomendaba no usarlo por _no ser libre_.

El paquete, aparentemente, está liberado bajo [una licencia BSD](https://cran.r-project.org/web/licenses/BSD_3_clause). Pero su pecado es que dentro de uno de los ficheros que contiene, `src/JSON_parser.c`, dice



<blockquote>The Software shall be used for Good, not Evil.</blockquote>



Más información, [aquí](https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=712159#22).

No sé qué pensar sobre toda esta historia.
