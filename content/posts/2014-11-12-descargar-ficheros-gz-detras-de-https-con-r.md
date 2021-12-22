---
author: Carlos J. Gil Bellosta
date: 2014-11-12 07:13:22+00:00
draft: false
title: Descargar ficheros .gz detrás de HTTPS con R

url: /2014/11/12/descargar-ficheros-gz-detras-de-https-con-r/
categories:
- r
tags:
- httr
- r
- webscraping
---

El problema consiste en leer, por ejemplo, `[https://stat.ethz.ch/pipermail/r-help-es/2012-August.txt.gz](https://stat.ethz.ch/pipermail/r-help-es/2012-August.txt.gz)`.

Desde Windows, por algún motivo, es sencillo: se puede usar [`download.file`](https://stat.ethz.ch/R-manual/R-devel/library/utils/html/download.file.html) y luego, `readLines` directamente (porque no sé si sabéis que esta y otras funciones similares saben leer directamente ficheros comprimidos con `gzip`).

En Linux parece algo más complicado: `download.file` se niega a bajar ficheros usando el protocolo `[https](http://en.wikipedia.org/wiki/HTTP_Secure)`. Lo mejor que he sabido hacer es

{{< highlight R "linenos=true" >}}
library(httr)
x <- GET("https://stat.ethz.ch/pipermail/r-help-es/2012-August.txt.gz")
tmp <- tempfile()
writeBin(content(x, "raw"), tmp)
res <- readLines(tmp)
unlink(tmp)
{{< / highlight >}}

que es feo, feo, feo.
