---
author: Carlos J. Gil Bellosta
date: 2012-05-21 07:01:29+00:00
draft: false
title: 'Desencriptando (I): el problema de un mal amigo'

url: /2012/05/21/desencriptando-i-el-problema-de-un-mal-amigo/
categories:
- estadística
- probabilidad
tags:
- criptografía
- estadística
- probabilidad
---

Tengo un muy mal amigo que, sabiendo cómo soy para esas cosas y de qué manera me quitan el sueño, quiso alterar mi solaz enviándome esto:

{{< highlight R "linenos=true" >}}
cadena <- c(
"s","u","t","k","r","k","b","s","w","f","s","t","s","u","z","k","q","x","p","k","s","r",
"t","z","z","a","s","r","f","q","z","u","s","r","w","z","u","t","g","f","s","b","k","y",
"z","y","s","v","y","g","s","e","f","s","m","p","s","d","s","e","p","w","u","u","z","c",
"z","c","k","s","w","f","g","z","r","s","e","j","g","w","t","s","r","z","u","z","e","s",
"w","f","s","w","v","k","z","t","s","u","v","z","e","g","z","f","s","r","z","b","p","w",
"s","s","w","u","z","e","j","r","g","h","k","c","z","e","s","u","s","v","v","k","g","w",
"s","e","z","p","f","g","w","g","c","k","v","z","e","z","f","r","z","d","s","e","t","s",
"u","d","g","f","g","z","u","z","g","j","v","k","g","w","t","s","u","z","k","q","x","p",
"k","s","r","t","z","z","a","s","r","f","q","z","u","s","f","s","b","k","y","z","y","s",
"v","y","g","j","a","u","k","v","z","p","w","z","v","z","r","f","z","z","f","r","z","d",
"s","e","t","s","p","w","z","j","z","b","k","w","z","l","s","a","t","s","z","j","g","o",
"g","z","e","p","v","z","p","e","z","e","p","e","v","r","k","f","z","s","w","w","g","c",
"a","r","s","t","s","u","g","e","v","k","w","v","g","v","g","w","t","s","w","z","t","g",
"e","s","w","s","e","f","s","v","z","e","g","s","u","c","k","e","c","g","o","z","n","z",
"k","s","q","e","z","a","k","z","b","z","g","w","k","z","z","v","k","w","f","g","r","i",
"z","k","f","q","g","t","r","k","b","p","s","q","o","k","r","s","w","z","a","z","u","s",
"f","z","p","w","t","k","z","t","s","e","j","p","s","e","t","s","u","z","w","g","f","k",
"n","k","v","z","v","k","g","w","t","s","u","n","z","u","u","g","t","s","u","r","k","a",
"p","w","z","u","p","j","r","s","c","g","x","p","s","y","z","r","s","a","z","m","z","t",
"g","t","s","t","k","s","q","z","e","s","k","e","z","w","g","e","o","c","s","t","k","g",
"e","p","v","g","w","t","s","w","z","o","u","z","t","s","k","s","q","e","z","a","k","z",
"b","z","o","t","s","g","v","y","g","z","e","s","k","e","z","w","g","e","u","z","e","t",
"s","u","r","s","e","f","g","t","s","s","w","v","z","p","e","z","t","g","e","u","u","k",
"t","s","r","t","s","u","z","z","w","f","k","b","p","z","z","f","z","e","p","w","z","r",
"s","e","j","g","w","e","z","a","k","u","k","q","z","t","s","u","z","e","s","w","f","s",
"w","v","k","z","z","u","g","e","s","w","s","c","k","b","g","e","t","s","u","z","j","z",
"q","s","w","f","r","s","u","g","e","x","p","s","v","k","f","z","z","u","j","r","s","e",
"k","t","s","w","f","s","t","s","u","g","a","k","s","r","w","g","z","r","k","z","w","g",
"z","m","g","o","z","u","e","s","v","r","s","f","z","r","k","g","b","s","w","s","r","z",
"u","t","s","u","u","n","r","s","t","g","s","r","s","q","p","a","z","u","v","z","a","z",
"o","z","u","j","r","s","e","k","t","s","w","f","s","t","s","u","d","z","e","v","g","w",
"f","g","w","k","g","z","e","z","b","g","k","f","k","f","s","b","k","e","g","e","f","k",
"s","w","s","x","p","s","s","e","f","g","e","t","k","r","k","b","s","w","f","s","e","j",
"g","u","k","f","k","v","g","e","e","s","g","j","g","w","s","w","z","u","z","j","z","q",
"j","g","r","x","p","s","w","g","f","k","s","w","s","w","z","b","s","w","t","z","j","z",
"r","z","s","u","u","z","o","e","s","e","s","w","f","k","z","w","v","g","c","g","t","k",
"e","k","c","z","c","s","w","f","s","k","w","e","f","z","u","z","t","g","e","s","w","s",
"u","s","e","x","p","s","c","z","z","w","f","k","f","s","r","r","g","r","k","e","f","z",
"x","p","s","u","s","e","j","s","r","c","k","f","k","z","g","v","p","u","f","z","e","p",
"d","s","r","t","z","t","s","r","z","w","z","f","p","r","z","u","s","q","z","z","w","f",
"k","t","s","c","g","v","r","z","f","k","v","z","r","s","j","z","r","s","c","g","e","v",
"g","w","t","s","u","s","k","f","s","u","z","c","z","e","r","s","n","k","w","z","t","z",
"t","s","u","z","e","r","s","e","j","p","s","e","f","z","e","t","s","c","g","v","r","z",
"f","k","v","z","e","y","z","b","z","c","g","e","x","p","s","j","g","r","j","r","k","c",
"s","r","z","d","s","q","s","w","u","z","y","k","e","f","g","r","k","z","s","u","k","w",
"t","s","j","s","w","t","s","w","f","k","e","c","g","t","k","e","j","p","f","s","v","g",
"w","z","u","f","z","e","j","g","e","k","a","k","u","k","t","z","t","s","e","t","s","z",
"u","v","z","w","q","z","r","u","z","d","k","v","f","g","r","k","z","u","z","e","j","r",
"g","h","k","c","z","e","s","u","s","v","v","k","g","w","s","e","d","z","e","v","g","w",
"b","z","t","z","e","y","z","j","r","g","j","p","s","e","f","g","s","u","t","k","r","k",
"b","s","w","f","s","z","a","s","r","f","q","z","u","s","s","w","v","z","r","v","s","u",
"z","t","g","s","w","u","z","j","r","k","e","k","g","w","t","s","g","b","r","g","w","g")
{{< / highlight >}}

Se trata de una cadena de 1144 caracteres que, aparentemente, encerraban algún tipo de mensaje. De hecho, era probable que se tratase de un mensaje codificado con una técnica que, dicen, ya empleaba Julio César en la campaña de las Galias y que [describí en otra ocasión](http://www.datanalytics.com/2011/12/02/grandes-avances-criptograficos-segun-el-pais/): a saber, mediante una permutación de letras.

Desencriptar supone, por lo tanto, encontrar una permutación inversa. En mi autocita de más arriba cuento cómo Sherlock Holmes utilizó la frecuencia relativa de las letras para encontrar el significado oculto tras unos símbolos que parecían garabatos de niño. Sin embargo, yo usé una técnica algo más sofisticada y que dará pie a varias entradas que irán apareciendo en los próximos días según refine el método y establezca vínculos que no todos esperaréis. En particular, usé una técnica probabilística bastante conocida:

1. Asociar a cada permutación de caracteres una determinada probabilidad de ocurrencia
2. Buscar aquella permutación que maximiza dicha probabilidad; es decir, la de la _máxima verosimilitud_.

Si _s_ es una permutación dada de letras, le asigné la _probabilidad_ de ocurrencia

$$ P(s) = \prod_i M( s(c_i), s(c_{i+1}) )$$

donde $latex c_i$ son los caracteres que conforman la cadena que quería desencriptar y $latex M$, una _matriz de transición_. (Nota: abusaré del lenguaje y diré que $latex P$ es una probabilidad aun cuando no lo es propiamente: debería dividir por una constante normalizadora para que la suma $latex \sum_s P(s)=1$; pero el que no sea posible o práctico calcular dicha constante no altera para nada el resto de la exposición).

En efecto, en español, dada una letra, existe una probabilidad dada de que le siga una letra determinada. Por ejemplo, a la _q_ casi siempre (si no siempre) le sigue la _u_. Después de una hache suele haber una vocal. Etc. Combinaciones como _zy_ o _bf_ son mucho menos probables que _za_ o _ba_ respectivamente.

Con mi definición de probabilidad, penalizo aquellas permutaciones que dan lugar a concatenaciones _exoespañolas_ (es decir, inhabituales en el discurso en español).

Para construir $latex M$ utilicé un texto que tenía a mano, el Quijote, y lo procesé de la siguiente manera:

{{< highlight R "linenos=true" >}}
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
{{< / highlight >}}

El objeto `res` que crea es dicha matriz de transiciones (mirad la fila _q_, por ejemplo).

Para calcular la probabilidad asociada a una cadena utilicé la función

{{< highlight R "linenos=true" >}}
m <- res

markov <- function(x, m){
    sum(log(m[ cbind(x[-length(x)], x[-1])]))
}

p.0 <- markov( cadena, m )
{{< / highlight >}}

En muchos contextos, existen vías ya muy transitadas para maximizar probabilidades: piénse en los mínimos cuadrados en problemas de regresión, etc. En nuestro caso, tendríamos que explorar el universo de permutaciones, calcular la probabilidad asociada a cada una de ellas, etc. No existe método de Newton-Raphson o similar en este caso. Pero sí que se puede utilizar una técnica no particularmente recomendable pero suficiente en este caso:

1. Comenzar con una permutación
2. Construir otra a partir de la anterior
3. Comparar las probabilidades de ocurrencia de ambas
4. Descartar la menos probable e iterar

En particular, a partir de una determinada permutación, se puede generar otra seleccionando al azar dos posiciones de la permutación e intercambiándolas. Así se puede _navegar_ el espacio de permutaciones en busca de la, con suerte, _óptima_.

Esto es lo que hace el siguiente pedazo de código (no particularmente bien pulido):

{{< highlight R "linenos=true" >}}
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

Y si alguien se molesta en ejecutarlo verá cómo al cabo de unos segundos aparece en su pantalla un texto relativamente legible y cuyo contenido, realmente, es irrelevante para los más de nosotros.

Sorprendente, ¿verdad?
