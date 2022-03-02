---
author: Carlos J. Gil Bellosta
date: 2016-05-06 08:13:49+00:00
draft: false
title: Un corpus de textos en español para NLP

url: /2016/05/06/un-corpus-de-textos-en-espanol-para-nlp/
categories:
- nlp
tags:
- corpus
- nlp
- r
- thyssen
---

Mañana doy clase de NLP en el [máster de ciencia de datos de KSchool](http://kschool.com/cursos/madrid/master-en-data-science/). Para lo que necesito un corpus decente. Los hay en inglés a tutiplén, pero las hordas de lingüistas hispanoparlantes que se pagan los vicios a costa de tajadas de mi IRPF han sido incapaces de colgar ninguno en español que pueda ubicar y reutilizar.

Necesito una colección de textos en español con ciertas características:

* Tener un cierto tamaño (¿unas cuantas centenas de ellos?)
* Que no sean demasiado grandes (¿unos cuantos párrafos?)
* Ser medianamente homogéneos.
* Estar bien escritos, sin faltas de ortografía, etc.


Así que he decidido poner en valor otra de esas onerosas reliquias de la cultura analógica y de letras que es el Museo Thyssen; en particular, las descripciones que constan en las fichas de los cuadros. De hecho, corriendo esto:


{{< highlight R >}}
library(RCurl)
library(XML)
library(stringi)

base.url <- "http://www.museothyssen.org/thyssen/ficha_obra/"

# recorro los índices del 1 al 2000, aunque:
#   hay menos cuadros
#   hay huecos (p.e., el cuadro 1 no existe)

res <- lapply(1:2000, function(item){

  url <- paste0(base.url, item)
  tmp <- getURL(url, .encoding = "UTF-8")

  if (tmp == " "){
    print(paste(item, "vacio", sep = "\t"))
    return(list())
  }

  print(item)

  tmp <- htmlParse(tmp)
  ficha <- xpathSApply(tmp,
    "//div[@id='colCentralContenidosInt']//dl[@class='datosAutor']/dd",
    xmlValue)
  ficha <- stri_trim(ficha)

  texto <- stri_trim(xpathSApply(tmp,
    "//span[@id='contReader2']",
    xmlValue))

  list(ficha = ficha, texto = texto)

})

# elimino índices sin cuadro
thyssen <- Filter(function(x) length(x) > 1, res)
{{< / highlight >}}

En total, son unas 1100 fichas con autor, título, año y blablablá. Con el que se pueden hacer cosas como tratar de predecir la época del cuadro (de acuerdo con las palabras de la descripción), ver qué términos correlacionan más con, p.e., "dalí" (_spoiler_: son términos fundamentalmente apícolas) y otras cosas que averiguarán quienes pagaron la matrícula y tengan a bien madrugar un sábado.

![sueno_dali](/wp-uploads/2016/05/sueno_dali.jpg)

No sé qué licencia tienen los textos ni los términos de uso. Por una vez, por una santa vez que le saco partido tangible a algo _cultural_ que he pagado, repagado y vuelto a pagar, bonito estaría que me viniesen con mandangas.
