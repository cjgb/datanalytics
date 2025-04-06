---
author: Carlos J. Gil Bellosta
categories:
- ciencia de datos
- consultoría
- estadística
date: 2011-08-03 07:04:20+00:00
draft: false
lastmod: '2025-04-06T19:00:39.818936'
related:
- 2011-08-26-clustering-iv-una-digresion-real-como-la-vida-misma.md
- 2011-07-19-clustering-ii-c2bfes-replicable.md
- 2011-07-11-clustering-i-una-pesadilla-que-fue-real.md
- 2015-07-13-casillas-puede-ser-un-portero-mediocre-pero-quienes-analizan-sus-numeros-lo-son-aun-mas.md
- 2022-12-15-raking.md
tags:
- clústering
- consultoría
- estadística
- márketing
- ciencia de datos
- quetelet
title: 'Clústering (III): sobresimplificación'
url: /2011/08/03/clustering-iii-sobresimplificacion/
---

¿Quién fue el segundo hombre en pisar la luna? ¿Y el tercero? Aunque a veces pareciese lo contrario, ¿sabe que hay futbolistas que no son ni Ronaldo ni Messi? ¿Y otros ciclistas además de Contador e Induráin? ¿Y que la Fórmula 1 no se reduce a un tal Alonso?

Diríase que por razones sicológicas, nuestro cerebro tiende a sobresimplificar, se siente cómodo con una representación escueta de la realidad, es reacio a los distingos y grises. Le pirran las etiquetas: dígame de qué partido político _es_ Vd. y enseguida crearé mis propias certezas sobre su opinión acerca de la Guerra de Irak, la visita del Papa a Madrid y el bikini de Leire Pajín.

En esa tendencia a etiquetar y sobresimplificar se basa gran parte del éxito de las técnicas de _clústering_. Así, cuando a Quetelet le bastaba un único _homme moyen_ hace casi doscientos años, nuestros estadísticos de hoy parecen encantados con media doceneja.

Pero Quetelet, en el fondo, estaba interesado en aquellas desviaciones de los individuos con respecto a su ideal _homme moyen_: si Quetelet estableció el [índice de masa corporal](http://es.wikipedia.org/wiki/%C3%8Dndice_de_masa_corporal) no fue tanto para caracterizar las características antropométricas de su hombre medio sino para poder mejor detectar y cuantificar las desviaciones, tanto por exceso como por defecto, en individuos reales. Hoy en día estas distinciones les resultan odiosas. Al fin y al cabo, no es lo que los clientes de nuestros consultores quieren oír.

¿Prueba de lo anterior? Tómese cualquier presentación _comercial_/_profesional_ en la que se describan los resultados de un análisis de este tipo. ¿Cómo se describen los _clústers_? Medias. Se resumen en listas de enunciados del tipo: la media de la variable X en el grupo Y es Z. A lo más, ofrecen una comparación entre la media de una variable dada en un grupo determinado y la media global de la población entera.

Traté en tiempos, cuando trabajaba en una consultora, de crear algún tipo de procedimiento honesto para visualizar _clústers_. Mi propuesta —manifiestamente perfectible por otro lado— quedó totalmente eclipsada por la de un colega que decidió que bastaba (y era _cool_) representar las medias de todos los grupos en un gráfico de araña con tantos radios como variables en el que cada _clúster_ venía representado por un color distinto. ¡Nunca antes había visto la necesidad de usar la lupa —existe, ¿eh?— de Windows! Pero era un gráfico que escondía los indicios de sospecha y evitaba de antemano todo tipo de preguntas odiosas por parte de los clientes.

Pero, ¿y la variabilidad dentro de cada _clúster_? ¿Algún comentario sobre las zonas grises? ¿Cuáles son las observaciones que pertenecen al _clúster_ A y no al B por _un pelín de gato_?

Hemos visto en una entrada anterior que los centros (o centroides) de los _clústers_ son, habitualmente, irreproducibles. Que es decir poco menos que arbitrarios. Además, la asignación de los sujetos a cada uno de ellos, bien mirada, también es cuestionable.

El siguiente código —y supongo que las mejoras que a él realicen los lectores— permite cuantificar una serie de aspectos que uno nunca verá planteados ni en libros de _investigación de mercados_ ni en los caveats de las consultoras. Permite ver cómo la distancia entre los sujetos de los grupos y sus centros crece al aumentar el número de variables. Es decir, cuantas más variables se utilicen para realizar un _análisis clúster_, mayor será la diferencia o distancia entre un sujeto y el individuo prototípico que lo representa.



{{< highlight R >}}
    av.dist <- function( n.dim, n.iter ){
           a <- b <- rep( 0, n.dim )
           a[1] <- 0.5
           b[1] <- -0.5

           calcular.distancias <- function( ){
                   x <- 2 * runif( n.dim ) - 1
                   sqrt( c( sum( ( x - a )^2 ), sum( x - b )^2 ) )
           }
           distancias <- replicate( n.iter, calcular.distancias() )
    }

    foo <- function( n.dim ){
           tmp <- av.dist( n.dim, 1000 )
           median( pmin( tmp[,1], tmp[,2] ) )
    }
    foo( 2 )
    foo( 20 )
    res <- sapply( 1:100, foo )
{{< / highlight >}}


Queda como ejercicio para mis lectores estimar el tamaño —en proporción del número total de sujetos— que quedan en la zona gris entre ambos centroides según aumenta el número de dimensiones.

En resumen, el éxito del llamado análisis clúster responde en muchos casos y aplicaciones a una inercia sicológica que empuja al ser humano a la sobresimplificación. Dejada aparte la irreproducibilidad, sus efectos distorsionadores aumentan con el número de variables. Y, finalmente, muchos profesionales que aplican este tipo de estudios hacen dejación de sus responsabilidades —o las ignoran— cuando soslayan la variabilidad de los sujetos alrededor de sus prototipos y pasan or encima del problema que suponen las zonas grises.

Y la semana que viene, más.