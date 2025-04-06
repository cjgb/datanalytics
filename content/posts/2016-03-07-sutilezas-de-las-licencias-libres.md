---
author: Carlos J. Gil Bellosta
categories:
- r
date: 2016-03-07 09:13:12+00:00
draft: false
lastmod: '2025-04-06T18:48:04.943540'
related:
- 2010-08-05-un-ilustrador-problema-de-compatibilidad-de-licencias-libres.md
- 2010-07-19-que-hacer-y-no-hacer-con-los-bichitos-que-uno-encuentra.md
- 2010-04-21-para-que-copien-peguen-y-disfruten.md
- 2012-10-29-liberado-biostatfloss-una-coleccion-de-recursos-libres-para-la-bioestadistica-y-la-epidemiologia.md
- 2024-10-29-cortos-stats.md
tags:
- json
- r
- rjsonio
- ética
title: Sutilezas de las licencias libres
url: /2016/03/07/sutilezas-de-las-licencias-libres/
---

Leyendo por ahí, he encontrado un comentario sobre el paquete [`RJSONIO`](https://cran.r-project.org/web/packages/RJSONIO/index.html) de R en el que se recomendaba no usarlo por _no ser libre_.

El paquete, aparentemente, está liberado bajo [una licencia BSD](https://cran.r-project.org/web/licenses/BSD_3_clause). Pero su pecado es que dentro de uno de los ficheros que contiene, `src/JSON_parser.c`, dice

>The Software shall be used for Good, not Evil.

Más información, [aquí](https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=712159#22).

No sé qué pensar sobre toda esta historia.