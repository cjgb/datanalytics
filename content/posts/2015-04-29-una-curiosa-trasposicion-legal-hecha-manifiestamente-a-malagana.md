---
author: Carlos J. Gil Bellosta
date: 2015-04-29 08:13:04+00:00
draft: false
title: Una curiosa trasposición legal (hecha, manifiestamente, a malagana)

url: /2015/04/29/una-curiosa-trasposicion-legal-hecha-manifiestamente-a-malagana/
categories:
- nlp
- r
tags:
- nlp
- r
- reutilización
---

El parlamento de la Unión Europea aprueba [directivas](http://es.wikipedia.org/wiki/Directiva_%28Derecho_de_la_Uni%C3%B3n_Europea%29). Los parlamentos nacionales las _trasponen_, es decir, las convierten en leyes nacionales (véase el enlace anterior).

No sé hasta qué punto la trasposición tiene que ser literal. La única experiencia seria que tengo es con [esta](http://en.wikipedia.org/wiki/Capital_Requirements_Directive) y sus trasposiciones nacionales a España y el RU. Y era notorio cómo cada país, aprovechando las ambigüedades del texto original, arrimaba el ascua a su sardina.

He perdido el rato comparando la ley de reutilización de datos del sector público con la directiva que traspone (los enlaces, debajo). Que se parecen, por cierto, como un huevo a una castaña. En particular, la ley española añade provisiones que no aparecen en la directiva para asegurarse de que las administraciones públicas no se obligan ni comprometen a nada. Por lo que si en lugar de haber ley, no la hubiera, las cosas no cambiarían en absoluto. Pero esa es otra historia.

La que me ocupa hoy es la de ver si automáticamente (y cómo) uno puede detectar diferencias entre ambas. El código que sigue implementa la siguiente idea: descargar el texto de ambas normas, tabular las palabras y estudiar (vía `prop.test`) cuáles aparecen con distinta frecuencia en ambos textos:

{{< highlight R "linenos=true" >}}
    library(XML)
    library(<a href="http://inside-r.org/packages/cran/tm">tm)

    procesar.html <- function(url){
      tmp <- htmlParse(url)
      tmp <- xpathApply(tmp, "//div[@id='DOdocText']/*/p", xmlValue, encoding = "UTF-8")
      tmp <- tolower(paste(unlist(tmp), collapse = " "))
      tmp <- gsub("[[:punct:]]", " ", tmp)
      tmp <- gsub("\\n", " ", tmp)
      tmp <- as.data.frame(table(strsplit(tmp, " ")[[1]]))
      tmp
    }

    directiva <- procesar.html("http://www.boe.es/buscar/doc.php?id=DOUE-L-2003-82244")
    ley       <- procesar.html("http://www.boe.es/diario_boe/txt.php?id=BOE-A-2007-19814")

    res <- merge(directiva, ley, by.x = "Var1", by.y = "Var1", all = T)

    colnames(res) <- c("palabra", "n.directiva", "n.ley")

    res$n.directiva[is.na(res$n.directiva)] <- 0
    res$n.ley[is.na(res$n.ley)] <- 0

    res <- res[!res$palabra %in% stopwords("es"),]
    res <- res[res$palabra != "",]
    res <- res[nchar(as.character(res$palabra)) > 2,]

    n.directiva <- sum(res$n.directiva)
    n.ley       <- sum(res$n.ley)

    res$p.value <- mapply(function(a,b)
      prop.test(c(a,b), n = c(n.directiva, n.ley),
                alternative = "less")$p.value,
      res$n.directiva, res$n.ley)

    res <- res[order(-res$p.value),]

    head(res[order(res$p.value),], 20)
    # palabra n.directiva n.ley      p.value
    # 1408              ley           0    52 5.675306e-13
    # 1139 administraciones           0    42 1.032037e-10
    # 1487         previsto           0    16 8.555007e-05
    # 1402         jurídico           0    12 7.332989e-04
    # 929           régimen           4    20 1.063194e-03
    # 1434        normativa           0    10 2.181090e-03
    # 1392     infracciones           0     8 6.597088e-03
    # 1479          precios           0     8 6.597088e-03
    # 1587            tasas           0     8 6.597088e-03
    # 1598           título           0     8 6.597088e-03
    # 896          públicas           3    14 7.511123e-03
    # 868     procedimiento           1    10 7.831983e-03
    # 899          públicos           1     9 1.328995e-02
    # 153        aplicación           3    12 1.918311e-02
    # 217          carácter           3    12 1.918311e-02
    # 1358           graves           0     6 2.048236e-02
    # 1536       resolución           0     6 2.048236e-02
    # 1568          sentido           0     6 2.048236e-02
    # 618       información          23    40 2.102190e-02
    # 17               1992           1     8 2.255991e-02

    head(res[order(-res$p.value),], 20)
    # palabra n.directiva n.ley   p.value
    # 403   directiva          45     3 1.0000000
    # 716    miembros          26     1 0.9999982
    # 1030    tarifas          11     0 0.9987211
    # 852    presente          34    13 0.9982876
    # 898     público          88    56 0.9955184
    # 343        debe          11     1 0.9953266
    # 344       deben          18     5 0.9938776
    # 24         2001           7     0 0.9883289
    # 248   comunidad           7     0 0.9883289
    # 847   prácticas           7     0 0.9883289
    # 274     consejo           9     1 0.9865824
    # 798  parlamento           9     1 0.9865824
    # 903      pueden           9     1 0.9865824
    # 593  importante           6     0 0.9793747
    # 638    interior           6     0 0.9793747
    # 502     europeo          10     2 0.9783636
    # 711     mercado          10     2 0.9783636
    # 972      sector          67    45 0.9772597
    # 784   organismo          17     7 0.9670106
    # 801  particular           9     2 0.9647799
{{< / highlight >}}

Diferencias apreciables:

* Ya he dicho que la ley española trata de no obligar a la administración: _Debe_ y _deben_ abundan en la directiva pero no en la ley. Aunque a lo mejor, simplemente, formulan la obligación de otra manera. No obstante, aunque tal fuese el caso, compárense las frases "[l]os Estados miembros **alentarán** a todos los organismos del sector público a que utilicen las licencias modelo" con "[l]as Administraciones y organismos del sector público **podrán** facilitar licencias-tipo para la reutilización de documentos[...]" y que juzgue el lector por sí mismo.
* La directiva habla de tarifas y la ley de tasas. Pequeña cosa.
* La directiva habla del mercados y en la ley parece importar más las administraciones; pero eso era adivinable: ¡estamos es España y quienes redactaron la ley crecieron viendo [esto](https://www.youtube.com/watch?v=Pqd6Ue44X94) en la tele!
* En la ley aparece una sección de infracciones. La palabra grave, de hecho, se refiere ellas. ¡Por supuesto! Los ciudadanos tenemos que exigir que la administración persiga y castigue a los perversos reutilizadores de información pública que aviesamente omitan la fecha de última actualización de esos datos encasquetándoles una infracción (leve en este caso), con multa asociada de 1000 a 10000 euracos.

