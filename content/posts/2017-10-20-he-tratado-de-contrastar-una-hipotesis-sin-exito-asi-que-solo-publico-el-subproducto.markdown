---
author: Carlos J. Gil Bellosta
date: 2017-10-20 08:13:02+00:00
draft: false
title: He tratado de contrastar una hipótesis sin éxito, así que solo publico el subproducto

url: /2017/10/20/he-tratado-de-contrastar-una-hipotesis-sin-exito-asi-que-solo-publico-el-subproducto/
categories:
- r
tags:
- periodismo
- r
- scraping
---

Inspirado por [esto](http://www.masalmon.eu/2017/10/02/guardian-experience/) he tratado de contrastar una hipótesis en otro contexto.

Las cosas, o se hacen bien, o no se hacen. Como mi análisis se ha complicado con casos y casitos particulares, aunque siga pensándo cierta (en caso de tener que apostar, como priori, claro) la hipótesis de partida, abandono su búsqueda.

Como subproducto, esto:




    library(xml2)
    library(stringr)
    library(plyr)
    library(lubridate)

    periodos <- expand.grid(anno = 2010:2017, mes = 1:12)
    periodos$ind <- periodos$anno * 100 + periodos$mes
    periodos <- periodos[periodos$ind < 201711,]
    periodos <- paste(periodos$anno, str_pad(periodos$mes, 2, pad = "0"), sep = "_")

    raw <- lapply(periodos, function(x){
      url <- paste0("http://www.eldiario.es/sitemap_contents_", x, ".xml")
      print(url)
      as_list(read_xml(url))
    })

    #df <- lapply(raw, function(y) ldply(y, function(x) as.data.frame(t(unlist(x)))))

    res <- lapply(raw, unlist)
    res <- lapply(res, function(x) t(matrix(x, 3, length(x) / 3)))
    res <- data.frame(url = res[,1], time = res[,2], stringsAsFactors = FALSE)

    res$time <- gsub("\\+.*", "", res$time)
    res$time <- strptime(res$time, "%Y-%m-%dT%H:%M:%S")

    res$titular <- gsub("_0_[0-9]*.html", "", res$url)
    res$titular <- gsub(".*/", "", res$titular)
    res$titular <- tolower(res$titular)

    res$year <- year(res$time)
    res$month <- month(res$time)




Igual le sirve a alguien para analizar palabras clave en titulares de ese u otro medio, su evolución por mes, etc.
