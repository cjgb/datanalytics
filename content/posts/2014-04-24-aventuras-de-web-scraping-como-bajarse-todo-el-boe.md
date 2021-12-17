---
author: Carlos J. Gil Bellosta
date: 2014-04-24 07:47:56+00:00
draft: false
title: 'Aventuras de "web scraping": cómo bajarse todo el BOE'

url: /2014/04/24/aventuras-de-web-scraping-como-bajarse-todo-el-boe/
categories:
- r
tags:
- boe
- r
- scraping
---

Rescato aquí para futura o ajena referencia un pedazo de código que utilicé un día para un proyecto que se abortó y que tenía que ver con el análisis del texto del BOE. Reza así:



    setwd("~/boe/boes")

    library(<a href="http://inside-r.org/packages/cran/RCurl">RCurl)

    h = getCurlHandle()

    for( i in 1:3231){
      mi.url <- paste("http://www.boe.es/diario_boe/xml.php?id=BOE-A-2013-", i, sep = "")
      nom.fich <- paste("2013-A-", formatC(i, width = 6, format = "d", flag = "0"),  ".xml", sep = "")
      res <- getURI(mi.url, curl = h)
      cat(res, file = nom.fich)
    }

    for( i in 1:3212){
      mi.url <- paste("http://www.boe.es/diario_boe/xml.php?id=BOE-B-2013-", i, sep = "")
      nom.fich <- paste("2013-B-", formatC(i, width = 6, format = "d", flag = "0"),  ".xml", sep = "")
      res <- getURI(mi.url, curl = h)
      cat(res, file = nom.fich)
    }



No me preguntéis por qué el contador solo llega hasta tres mil doscientos y pico. O por qué no itero hasta que `getURI` devuelva un error.
