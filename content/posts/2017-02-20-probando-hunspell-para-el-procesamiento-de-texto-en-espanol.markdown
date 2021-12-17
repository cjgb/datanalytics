---
author: Carlos J. Gil Bellosta
date: 2017-02-20 08:13:50+00:00
draft: false
title: Probando hunspell para el procesamiento de texto en español

url: /2017/02/20/probando-hunspell-para-el-procesamiento-de-texto-en-espanol/
categories:
- nlp
- r
tags:
- hunspell
- nlps
- paquetes
- r
---

El [paquete `hunspell` de R](https://cran.r-project.org/package=hunspell) permite procesar texto utilizando como soporte la infraestructura proporcionada por [Hunspell](http://hunspell.github.io/), el corrector ortográfico que subyace a muchas aplicaciones en R.

Existe una [viñeta](https://cloud.r-project.org/web/packages/hunspell/vignettes/intro.html) que ilustra el uso del paquete pero, como siempre, en inglés. En español las cosas son parecidas pero, como siempre, nunca exactamente iguales. En esta entrada, por lo tanto, voy a repasar partes de la viñeta aplicándolas a nuestra tan frecuentemente maltratada mas por ello no menos querida por algunos como yo (pausa) lengua.

Cargamos el paquete:




    library(hunspell)




`hunspell` utiliza los diccionarios de Hunspell. Por efecto, el paquete usa los diccionarios correspondientes a `en_US`, pero nosotros utilizaremos el `es_ES`. Si están instalados, todo podría funcionar (luego veremos que  no) haciendo




    esp <- dictionary("es_ES")




Ese comando define el diccionario que usaremos después. El paquete es listo y sabe ubicar a partir de su argumento-indicio los ficheros correspondientes del disco duro, que en mi caso son




    /usr/share/hunspell/es_ES.aff
    /usr/share/hunspell/es_ES.dic




Desafortunadamente, ese diccionario para mi distribución está codificado en ISO-8859 (¿por qué? ¿por qué? ¿por qué?) pero mis locales son UTF-8. Para curarse en salud, es mejor descargar [versiones en UTF-8 del diccionario](https://github.com/titoBouzout/Dictionaries). No lo hagas y ta arrepentirás mucho si mezclas codificaciones.

Tras descargarlos, defino mi diccionario así:




    esp <- dictionary("/home/carlos/Downloads/hunspell_es_ES/Spanish.dic")




Y, ahora sí, a triunfar:




    words <- c("albañil", "piscina", "veníamos", "escojió")
    correct <- hunspell_check(words, dict = esp)
    correct
    #[1]  TRUE  TRUE  TRUE FALSE








    hunspell_suggest(words[!correct], dict = esp)
    #[[1]]
    #[1] "escorió"  "escoció"  "escolió"  "escomió"  "escogió"  "escondió"




También es posible extraer lemas de términos o etiquetarlos gramaticalmente:




    words <- c("casas", "quería", "patrañas")
    hunspell_stem(words, dict = esp)
    # [[1]]
    # [1] "casa"  "casar"
    #
    # [[2]]
    # [1] "querer"
    #
    # [[3]]
    # [1] "patraña"

    hunspell_analyze(words, dict = esp)
    # [[1]]
    # [1] " st:casa fl:S"  " st:casar fl:E"
    #
    # [[2]]
    # [1] " st:querer fl:X"
    #
    # [[3]]
    # [1] " st:patraña fl:S"




Estos análisis también pueden realizarse sobre frases completas (es decir, el sistema incluye un _tokenizador_):




    bad <- hunspell("hay gente que escribe escojer porque es gañana", dict = esp)
    bad[[1]]
    # [1] "escojer" "gañana"

    hunspell_suggest(bad[[1]], dict = esp)
    # [[1]]
    # [1] "escocer"  "escomer"  "escoger"  "escotero"
    #
    # [[2]]
    # [1] "gañan"   "galana"  "mañana"  "gaña na" "gaña-na" "gañan a" "Añana"   "gaña"    "gana"




O, incluso, documentos completos en diversos formatos, entre ellos, el PDF:




    const1812 <- pdftools::pdf_text("http://www2.uca.es/grup-invest/lapepa/pdf/constituciones/cons_1812.pdf")
    bad_words <- hunspell(const1812, dict = esp)
    # tokenizador
    palabras  <- hunspell_parse(const1812, dict = esp)




Etc.

Vale.
