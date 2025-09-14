---
author: Carlos J. Gil Bellosta
categories:
- probabilidad
- r
date: 2012-05-28 07:07:51+00:00
draft: false
lastmod: '2025-04-06T19:01:51.272540'
related:
- 2017-04-05-etsa-es-una-edntara-a-pubrea-de-roreetcs-cnctoaumes.md
- 2014-04-29-todo-el-mundo-habla-de-cadenas-de-markov.md
- 2010-09-04-paquetes-estadisticos-una-anecdota-sin-moraleja.md
- 2014-07-04-vectorizacion-en-r-un-contraejemplo.md
- 2011-12-13-un-lematizador-para-el-espanol-con-r-c2bfcutre-c2bfmejorable.md
tags:
- criptografía
- probabilidad
- r
title: 'Desencriptando (II): la avaricia es mala'
url: /2012/05/28/desencriptando-ii-la-avaricia-es-mala/
---

El otro día propuse y [resolví un problema de encriptación con R](https://datanalytics.com/2012/05/21/desencriptando-i-el-problema-de-un-mal-amigo/). Utilizaba uno de los llamados métodos _avariciosos_ (o _greedy_) para hallar el máximo de una función (que era, en esencia, la función de verosimilitud de una determinada permutación de caracteres dentro del espacio probabilístico de todas ellas).

Este método funcionó con una cadena relativamente larga para desencriptar pero falla con otras más cortas. Por ejemplo, con

{{< highlight R >}}
cadena <-c("u","r","i","b","y","r","l","g","m","h","e","r","y",
"b","g","m","a","c","p","y","c","m","d","r","h","z","y",
"r","e","i","c","l","r","i","n","e","c","t","d","t","c","z",
"c","y","c","v","r","o","d","y","s","e","r","q","c","y","c",
"n","g","q","c","i","g","m","r","y","d","i","v","r")
{{< / highlight >}}

Si ejecuto el código que presenté el otro día,

{{< highlight R >}}
quijote <- readLines( "http://www.gutenberg.org/cache/epub/2000/pg2000.txt", encoding = "UTF-8" )
tmp <- sapply( quijote, function(x) strsplit(x, ""))
tmp <- do.call( c, tmp )
tmp <- tolower(tmp)

tmp[ tmp == "á" ] <- "a"
tmp[ tmp == "é" ] <- "e"
tmp[ tmp == "í" ] <- "i"
tmp[ tmp == "ó" ] <- "o"
tmp[ tmp == "ú" ] <- "u"

tmp <- tmp[tmp %in% letters]
names(tmp) <- NULL

b <- as.factor(tmp)

b.from <- b[-length(b)]
b.to   <- b[-1]

res <- tapply( b.to, b.from, table )
res <- do.call( rbind, res ) + 1

res <- res / rowSums(res)

m <- res

markov <- function( x, m ){
  sum(log( m[ cbind(x[-length(x)], x[-1] ) ] ) )
}

p.0 <- markov( cadena, m )


while( TRUE ){
  cadena.alt <- factor( cadena )
  cambiar <- sample( nlevels(cadena.alt), 2 )
  levels.alt <- levels( cadena.alt )

  char.tmp <- levels.alt[cambiar[1]]
  levels.alt[cambiar[1]] <- levels.alt[ cambiar[2] ]
  levels.alt[cambiar[2]] <- char.tmp

  levels( cadena.alt ) <- levels.alt

  cadena.alt <- as.character( cadena.alt )

  p.1 <- markov( cadena.alt, m )

  if( p.1 > p.0 ){
    print( c(p.0, p.1) )
    cadena <- cadena.alt
    p.0 <- p.1
    print( cadena ); flush.console()
  }
}
{{< / highlight >}}

obtengo

{{< highlight R >}}
hostrocunylortunzagranioyprolsacosqlabibaparadovirelomaraqumasunorisdo
{{< / highlight >}}


que es, ciertamente, bastante ininteligible. Nótese, sin embargo, que casi puede leerse en español: respeta de alguna manera la secuencia de caracteres habituales en nuestra lengua. Pero no significa realmente nada.

Nota: ciertamente, por diseño, el código no termina propiamente, pero uno puede observar que se acaba estabilizándose en esa cadena. no termina (no tiene condición de fin porque no me entretuve en eso) pero que saca por pantalla las progresivas versiones cada vez más probables de cuál pudo ser la cadena original, al cabo de un rato se detiene en la bastante ininteligible

Lo que propongo hoy es una pequeña modificación del algoritmo del otro día para que, en lugar de buscar un óptimo, navegue por entre las permutaciones más probables con la esperanza de que la óptima (y, probablemente, la original) sea una de ellas. El código queda así:

{{< highlight R >}}
quijote <- readLines( "http://www.gutenberg.org/cache/epub/2000/pg2000.txt", encoding = "UTF-8" )
tmp <- sapply( quijote, function(x) strsplit(x, ""))
tmp <- do.call( c, tmp )
tmp <- tolower(tmp)

tmp[ tmp == "á" ] <- "a"
tmp[ tmp == "é" ] <- "e"
tmp[ tmp == "í" ] <- "i"
tmp[ tmp == "ó" ] <- "o"
tmp[ tmp == "ú" ] <- "u"

tmp <- tmp[tmp %in% letters]
names(tmp) <- NULL

b <- as.factor(tmp)

b.from <- b[-length(b)]
b.to   <- b[-1]

res <- tapply( b.to, b.from, table )
res <- do.call( rbind, res ) + 1

res <- res / rowSums(res)

m <- res

markov <- function( x, m ){
  exp(sum(log( m[ cbind(x[-length(x)], x[-1] ) ] ) ))
}

intercambiar.dos.letras <- function(cadena){
  cadena.alt <- factor( cadena, levels = letters )
  cambiar <- sample( nlevels(cadena.alt), 2 )
  levels.alt <- levels( cadena.alt )

  char.tmp <- levels.alt[cambiar[1]]
  levels.alt[cambiar[1]] <- levels.alt[ cambiar[2] ]
  levels.alt[cambiar[2]] <- char.tmp
  levels( cadena.alt ) <- levels.alt
  as.character( cadena.alt )
}

p.0 <- markov( cadena, m )
contador <- numeric(0)


for (i in 1:100000){
  cadena.alt <- intercambiar.dos.letras(cadena)

  p.1 <- markov( cadena.alt, m )
  azar <- runif(1)

  if( p.1 > p.0 | azar < p.1 / p.0 ){
    cadena <- cadena.alt
    p.0 <- p.1
    a <- paste(cadena, collapse ="")
    print( c(p.0, p.1) ); print(a)
    contador[a] <- ifelse( is.na(contador[a]), 1, contador[a] + 1)
  }
}

sort(contador)
{{< / highlight >}}

Las cadenas más probables (las asociadas a un contador más elevado), son

{{< highlight R >}}
fermueviclteumichaquacoelbuetraverstayoyabauadegountejauasijariceuorde
wentrelosmuertosyagrasiembreunalenpuacicabaradevirqueharapohanoserinde
gentrecospuertosyabrasieplreunacenmuavivalaradefirqueharamohanoserinde
wentrelosmuertosfagrasiembreunalenpuacicabaradevirqueharapohanoserinde
yentrecosmuertoshafrasiembreunacenpuadidabarajevirquelarapolanoserinje
bentrelosmuertosyafrasiempreunalenguacicaparadevirqueharagohanoserinde
ferilemosnteliospaylasuenzletramerctabubazaladequlgtehalacoharoselurde
kentrelosmuertosyabrasiempreunalencuagigaparadevirqueharacohanoserinde
jentrelosmuertosyabrasiempreunalenguacicaparadevirqueharagohanoserinde
{{< / highlight >}}

y no sé si mis lectores reconocerán en ellas una frase de Galdós que aparecía en tiempos en los billetes de 1000 pesetas.

Dista de ser perfecto, pero como que, más o menos, podemos sentirnos satisfechos con la desencriptación.

En la próxima entrega de esta serie daré un pequeño rodeo y dejaré para la última la teoría de la cosa.