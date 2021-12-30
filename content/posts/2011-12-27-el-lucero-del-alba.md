---
author: Carlos J. Gil Bellosta
date: 2011-12-27 06:39:02+00:00
draft: false
title: El lucero del alba

url: /2011/12/27/el-lucero-del-alba/
categories:
- finanzas
- r
tags:
- anumerismo
- bolsa
- finanzas
- r
---

Puede que algunos de mis lectores sepan que el [lucero del alba](http://es.wikipedia.org/wiki/Lucero_del_alba) es el nombre con que se conoce al planeta Venus cuando es visible en el cielo al amanecer.

En contextos menos poéticos se conoce por tal nombre a esto:

[![](/wp-uploads/2011/12/cierre2012.png#center)
](/wp-uploads/2011/12/cierre2012.png#center)

Es decir, una determinada configuración de los precios de apertura y cierre de tres días de cotización (bursátil, por ejemplo) de forma que:



* El primer día hay una bajada
* El tercer día hay una subida
* Los precios de apertura y cierre del segundo día son inferiores a los del cierre del primero y apertura del segundo.

Se ve que eso es cosa _güena._ De El Economista [extraigo](http://www.eleconomista.es/mercados-cotizaciones/noticias/3616786/12/11/El-Ibex-35-cede-terreno-pero-mantiene-los-8200-puntos-.html) el siguiente párrafo atribuido a un tal Joan Cabrero:


>Después del fallido intento que protagonizaron los alcistas ayer, hoy la presión compradora sí ha conseguido dominar la sesión de principio a fin, y mucho tendrían que cambiar las cosas para que al cierre de Wall Street los futuros europeos no consigan desplegar un patrón triple de velas que es conocido en el argot técnico oriental como lucero del alba y que sería otro elemento más que apoyaría el giro alcista señalado


Efectivamente, un [lucero del alba](http://www.hablandodebolsa.com/2009/05/morning-star-lucero-del-alba-o-estrella-de-la-manana-y-morning-doji-star.html) parece ser indicio de subidas bursátiles.

Y uno se pregunta: ¿en serio? Y si es verdad, ¿por qué? Y como ya somos mayorcitos para no creer todo lo que se nos cuenta, vamos a Yahoo Finance y bajamos las [cotizaciones históricas de Telefónica](http://finance.yahoo.com/q/hp?s=TEF.MC&a=00&b=3&c=1990&d=11&e=20&f=2011&g=d) (desde el 2000), por ejemplo, y ejecutamos lo siguiente:







{{< highlight R "linenos=true" >}}
tef <- read.table( "table_tef.csv", sep = ",", header = T )
tef <- tef[ order( tef$Date ), ]

morning.star <- function( block ){

	if( nrow( block ) < 23 ) return( NULL )

	apertura <- block$Open
	cierre   <- block$Close

	if( !(
		apertura[1] > cierre[1] &
		apertura[3] < cierre[3] &
		max( apertura[2], cierre[2] )
			< min( apertura[3], cierre[1] )
		)
	) return( c( 0, rep( 0, 20 ) ) )

	else return( c( 1, ( cierre[4:23] - cierre[3] ) / cierre[3] ) )
}

tmp     <- sapply( 1:nrow( tef ),
		function( i )
			morning.star( tef[ i:nrow( tef ), ] ) )

res.all <- do.call( rbind, tmp )
res.ms  <- res.all[ res.all[,1] == 1, ]
{{< / highlight >}}







El resultado muestra cómo en los 10 últimos años ha habido 48 luceros del alba. ¿Y qué pasó un mes después? Lo indica el histograma siguiente:


[![](/wp-uploads/2011/12/lucero_del_alba.png#center)
](/wp-uploads/2011/12/lucero_del_alba.png#center)


Y en 20 años de cotización del IBEX 35, ¿cuáles serían los resultados? Helos:







{{< highlight R "linenos=true" >}}
ibex    <- read.table( "table_ibex.csv", sep = ",", header = T )
ibex    <- ibex[ order( ibex$Date ), ]
tmp     <- sapply( 1:nrow( ibex ),
					function( i ) morning.star( ibex[ i:nrow( ibex ), ] ) )
res.all <- do.call( rbind, tmp )
res.ms  <- res.all[ res.all[,1] == 1, ]
{{< / highlight >}}







Y al cabo de un mes de los 78 luceriles prodigios ocurridos desde el 92, la rentabilidad acumulada por el IBEX 35 fue la indicada en el siguiente histograma:


[![](/wp-uploads/2011/12/lucero_alba_ibex.png#center)
](/wp-uploads/2011/12/lucero_alba_ibex.png#center)



Ah, Joan, Joan, ¿cuánto te pagarán por no decir nada (útil)?
