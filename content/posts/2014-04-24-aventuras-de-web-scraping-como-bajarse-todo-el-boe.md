---
author: Carlos J. Gil Bellosta
categories:
- r
date: 2014-04-24 07:47:56+00:00
draft: false
lastmod: '2025-04-06T19:11:00.751220'
related:
- 2010-04-21-para-que-copien-peguen-y-disfruten.md
- 2016-05-20-descarga-de-datos-del-ibex-35-y-otros-minuto-a-minuto-en-tiempo-casi-real.md
- 2017-10-20-he-tratado-de-contrastar-una-hipotesis-sin-exito-asi-que-solo-publico-el-subproducto.md
- 2014-11-12-descargar-ficheros-gz-detras-de-https-con-r.md
- 2014-04-30-embalses-en-espana-otro-ejercicio-inconcluso-de-web-scraping.md
tags:
- boe
- r
- webscraping
title: 'Aventuras de "web scraping": cómo bajarse todo el BOE'
url: /2014/04/24/aventuras-de-web-scraping-como-bajarse-todo-el-boe/
---

Rescato aquí para futura o ajena referencia un pedazo de código que utilicé un día para un proyecto que se abortó y que tenía que ver con el análisis del texto del BOE. Reza así:

{{< highlight R >}}
setwd("~/boe/boes")

library(RCurl)

h = getCurlHandle()

for( i in 1:3231){
  mi.url <- paste("http://www.boe.es/diario_boe/xml.php?id=BOE-A-2013-", i, sep = "")
  nom.fich <- paste("2013-A-",
    formatC(i, width = 6, format = "d", flag = "0"),  ".xml", sep = "")
  res <- getURI(mi.url, curl = h)
  cat(res, file = nom.fich)
}

for( i in 1:3212){
  mi.url <- paste("http://www.boe.es/diario_boe/xml.php?id=BOE-B-2013-", i, sep = "")
  nom.fich <- paste("2013-B-",
    formatC(i, width = 6, format = "d", flag = "0"),  ".xml", sep = "")
  res <- getURI(mi.url, curl = h)
  cat(res, file = nom.fich)
}
{{< / highlight >}}

No me preguntéis por qué el contador solo llega hasta tres mil doscientos y pico. O por qué no itero hasta que `getURI` devuelva un error.