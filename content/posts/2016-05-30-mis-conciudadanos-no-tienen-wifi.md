---
author: Carlos J. Gil Bellosta
categories:
- r
date: 2016-05-30 08:13:01+00:00
lastmod: '2026-01-23'
related:
- 2015-01-08-tres-libros-mas-una-biblioteca-menos.md
- 2017-03-21-asi-se-calculan-los-logaritmos-de-zaragoza-se-ve-y-una-reflexion.md
- 2019-06-04-feria-del-libro-2019.md
- 2010-12-22-mahoma-su-proverbial-montana-y-la-wikipedia.md
- 2012-07-11-otra-oximoron-notarios-y-estadisticas.md
tags:
- bibliotecas
- nlp
- r
- tm
- nubes de palabras
title: ¿Mis conciudadanos no tienen wifi?
url: /2016/05/30/mis-conciudadanos-no-tienen-wifi/
---

A alguien leí el otro día que decía que en un bar de carretera habían colocado un cartel diciendo: "Hemos quitado el periódico y hemos puesto wifi". Viene esto a cuento de

{{< highlight R >}}
library(rvest)
library(<a href="http://inside-r.org/packages/cran/tm">tm)
library(wordcloud)

res <- sapply(1:17, function(i){
  url <- paste("https://decide.madrid.es/participatory_budget/investment_projects?geozone=all&page=",
  i, "&random_seed=0.28", sep = "")
  tmp <- html_nodes(
    read_html(url),
    xpath = "//div[starts-with(@id, 'spending_proposal')]/div/div/div[1]/div/h3/a/text()")

  as.character(tmp)
})

tmp <- unlist(res)

tmp <- Corpus(VectorSource(tmp))
tmp <- tm_map(tmp, stripWhitespace)
tmp <- tm_map(tmp, content_transformer(tolower))
tmp <- tm_map(tmp, removeWords, stopwords("spanish"))

wordcloud(tmp, scale=c(5,0.5),
  max.words=100,
  random.order=FALSE,
  rot.per=0.35, use.r.layout=FALSE,
  colors=brewer.pal(8, "Dark2"))
{{< / highlight >}}

que hace lo que dice, es decir,

![presupuestos_participativos](/img/2016/05/presupuestos_participativos.png#center)

a partir de los títulos de las propuestas de los [presupuestos participativos del ayuntamieto de Madrid](https://decide.madrid.es/participatory_budget).

¡Bibliotecas! Conciudadanos míos, ¿no tenéis una maldita wifi a mano? Que si por mí fuese, haría como el hostelero de carretera: fuera bibliotecas y a leer a Gerónimo Stilton a la @½#@ wifi.