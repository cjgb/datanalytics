---
author: Carlos J. Gil Bellosta
categories:
- ciencia de datos
date: 2016-08-29 08:13:19+00:00
draft: false
lastmod: '2025-04-06T19:11:13.678482'
related:
- 2023-10-05-llms-historia.md
- 2015-04-29-una-curiosa-trasposicion-legal-hecha-manifiestamente-a-malagana.md
- 2016-05-09-encuestas-electorales-medios-y-sesgos-ii.md
- 2010-12-29-noticia-de-las-ii-jornadas-de-usuarios-de-r.md
- 2016-06-13-censura-a-la-izquierda-en-las-universidades-espanolas.md
tags:
- boe
- mxnet
- r
- rnn
title: La Consejería de Empleo de la Función General de la Comunidad Autónoma de Ordenación
  Provincia de la Audiencia Profesional
url: /2016/08/29/la-consejeria-de-empleo-de-la-funcion-general-de-la-comunidad-autonoma-de-ordenacion-provincia-de-la-audiencia-profesional/
---

Ese es el nombre agramatical de una nueva consejería pergeñada por una red neuronal recurrente que he ajustado usando [un año de BOEs](https://www.datanalytics.com/2014/04/24/aventuras-de-web-scraping-como-bajarse-todo-el-boe/).

El código, adaptado de [aquí](http://mxnet.readthedocs.io/en/latest/packages/r/CharRnnModel.html) y sustancialmente mejorado, es

{{< highlight R >}}
library(mxnet)

batch.size     <- 32
seq.len        <- 64
num.hidden     <- 128
num.embed      <- 8
num.lstm.layer <- 1
num.round      <- 1
learning.rate  <- 0.1
wd             <- 0.00001
clip_gradient  <- 1
update.period  <- 1

make.data <- function(dir.boe, seq.len = 32,
  max.vocab=10000, dic = NULL) {
  text <- lapply(dir(dir.boe), readLines)
  text <- lapply(text, paste, collapse = "\n")
  text <- paste(text, collapse = "\n")

  char.lst <- strsplit(text, '')[[1]]
  chars <- unique(char.lst)

  num.seq  <- floor(length(char.lst) / seq.len)
  char.lst <- char.lst[1:(num.seq * seq.len)]
  data <- matrix(match(char.lst, chars) - 1, seq.len, num.seq)

  dic <- as.list(1:length(chars))
  names(dic) <- chars

  lookup.table <- as.list(chars)

  return (list(data = data, dic = dic,
    lookup.table = lookup.table))
}


ret <- make.data(".", seq.len=seq.len)

X   <- ret$data
dic <- ret$dic
lookup.table <- ret$lookup.table

vocab <- length(dic)

train.val.fraction <- 0.9
train.cols <- floor(ncol(X) * train.val.fraction)

drop.tail <- function(x, batch.size) {
  nstep <- floor(ncol(x) / batch.size)
  x[, 1:(nstep * batch.size)]
}

get.label <- function(X)
  matrix(c(X[-1], X[1]), nrow(X), ncol(X))

X.train.data   <- X[, 1:train.cols]
X.train.data   <- drop.tail(X.train.data, batch.size)
X.train.label  <- get.label(X.train.data)
X.train        <- list(data=X.train.data, label=X.train.label)

X.val.data     <- X[, -(1:train.cols)]
X.val.data     <- drop.tail(X.val.data, batch.size)
X.val.label    <- get.label(X.val.data)
X.val          <- list(data=X.val.data, label=X.val.label)


model <- mx.lstm(X.train, X.val,
    ctx=mx.cpu(),
    num.round=num.round,
    update.period=update.period,
    num.lstm.layer=num.lstm.layer,
    seq.len=seq.len,
    num.hidden=num.hidden,
    num.embed=num.embed,
    num.label=vocab,
    batch.size=batch.size,
    input.size=vocab,
    initializer=mx.init.uniform(0.1),
    learning.rate=learning.rate,
    wd=wd,
    clip_gradient=clip_gradient)


get.sample <- function(n, start = "<", random.sample = TRUE){

  make.output <- function(prob, sample = FALSE) {
    prob <- as.numeric(as.array(prob))
    if (!sample)
      return(which.max(as.array(prob)))
    sample(1:length(prob), 1, prob = prob^2)
  }

  infer.model <- mx.lstm.inference(
      num.lstm.layer=num.lstm.layer,
      input.size=vocab,
      num.hidden=num.hidden,
      num.embed=num.embed,
      num.label=vocab,
      arg.params=model$arg.params,
      ctx=mx.cpu())

  out <- start
  last.id <- dic[[start]]

  for (i in 1:(n-1)) {
    ret <- mx.lstm.forward(infer.model, last.id - 1, FALSE)
    infer.model <- ret$model
    last.id <- make.output(ret$prob, random.sample)
    out <- paste0(out, lookup.table[[last.id]])
  }
  out
}

cat(get.sample(1000, start = "A", random.sample = T))
{{< / highlight >}}

Lo anterior genera cosas tales como:

>En el sector de la empresa, desemplado en el artículo 38 de la Ley 25/1988, de 28 de julio, por el que se encuentra el concepto de competencias para la medida de la publicación de trabajo y la persona de empleados en el desector de la cuenta de las actuaciones de esta resolución, en el plazo de constitucionalidad de la empresa en el artículo 1.1 del Real Decreto 122/2011, de 26 de julio, por el que se refiere el comercializador de la energía se ha presente el tercero o entrega el plan de desde la competencia de la Ley 17/1998, de 27 de noviembre, de Medidas para el procedimiento se encuentra para el concepto de planes de carácter precisa en el caso de un plazo de la retención de la comisión de las reglas necesidades de un procedimiento de desarrollar una concesión de la Comisión de la Comunidad Autónoma de Castilla y Secretaría de Empleo y del Estado.

Por supuesto, caracter a caracter. Sería más lo suyo comenzar generando árboles sintácticos e ir rellenándolos de contenido, pero esa es otra guerra.