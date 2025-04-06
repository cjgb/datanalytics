---
author: Carlos J. Gil Bellosta
categories:
- r
- varios
date: 2017-04-05 08:13:07+00:00
draft: false
lastmod: '2025-04-06T18:56:13.084095'
related:
- 2012-05-28-desencriptando-ii-la-avaricia-es-mala.md
- 2010-04-21-para-que-copien-peguen-y-disfruten.md
- 2011-12-02-grandes-avances-criptograficos-segun-el-pais.md
- 2012-01-23-nueve-reinas-con-sas-y-r-tambien.md
- 2018-01-29-donde-estan-las-letras.md
tags:
- permutaciones
- r
- varios
title: Etsa es una edntara a pubrea de roreetcs cnctoaumes
url: /2017/04/05/etsa-es-una-edntara-a-pubrea-de-roreetcs-cnctoaumes/
---

Psandeno en cómo ebiisrcr a pbruea de roceetrs plaigoaris couetmacns rodecré [esto](http://www.mrc-cbu.cam.ac.uk/people/matt.davis/Cmabrigde/rawlinson/) y lo he idepmneatlmo en R.

No sé si ertéaiss o no de adeurco en que fncniuoa o no, es dicer, que los ttoexs son rloeincboecs si se faijn la pmirera y úmtila lerta de cada pabrala y se puertma el retso. Lo que sí que es ctireo es que añade a cdaa txeto una mcraa catstaícirerca que decnniua su pdcionereca. Lo mlao sreía que el rtecor, cosiape la ieda, el cgiódo que cipoo djeabo, psermuate las pcmtanorieeus y qesudae como un señor.

(Otra atrltneiava monrdea de eóancriicptn de mireatal aémadccio es [esiriclrbo en aoéargns](http://semarasoc.wixsite.com/blog/single-post/2017/03/05/Laragon%C3%A9s-y-lo-catal%C3%A1n-en-lactualidat-ya-se-puede-consultar)).

El cdógio, cmoo pormíeta,

{{< highlight R >}}
texto <- "Pensando en cómo escribir a prueba de rectores
plagiarios contumaces recordé esto y lo he implementado
en R.

No sé si estaréis o no de acuerdo en que funciona o no,
es decir, que los textos son reconocibles si se fijan
la primera y última letra de cada palabra y se
permuta el resto. Lo que sí que es cierto es que añade
a cada texto una marca característica que denuncia su
procedencia. Lo malo sería que el rector, copiase la idea,
el código que copio debajo, permutase las permutaciones y
quedase como un señor.

(Otra alternativa moderna de encriptación de material académico
es escribirlo en aragonés).

El código, como prometía,"

letras <- c(letters, LETTERS, "á", "é", "í", "ó", "ú")
texto.partido  <- strsplit(texto, "")[[1]]
mascara.letras <- texto.partido %in% letras

alterar <- function(x){
  n <- length(x)
  if (n <= 2)
    return(x)
  c(x[1], sample(x[2:(n-1)], n-2), x[n])
}

palabra <- character()

for (i in 1:length(texto.partido)){
  if (mascara.letras[i]){
    palabra <- c(palabra, texto.partido[i])
  } else {
    if (length(palabra) == 0)
      next
    texto.partido[(i - length(palabra)):(i-1)] <- alterar(palabra)
    palabra <- character()
  }
}

paste(texto.partido, collapse = "")
{{< / highlight >}}