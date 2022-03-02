---
author: Carlos J. Gil Bellosta
date: 2011-09-16 07:23:33+00:00
draft: false
title: Otra sobre polígrafos, terrorismo y periodistas anuméricos

url: /2011/09/16/otra-sobre-poligrafos-terrorismo-y-periodistas-anumericos/
categories:
- estadística
- números
- r
tags:
- estadística
- números
- r
- anumerismo
---

Dice el diario El País que [_científicos británicos desarrollan un sistema que permite saber si alguien no está diciendo la verdad analizando su rostro_](http://www.elpais.com/articulo/sociedad/Mentiroso/cara/elpepusoc/20110914elpepusoc_1/Tes).

El aparato, según el artículo



>[...] podría ser utilizado para cuestiones de seguridad, como, por ejemplo, en los aeropuertos para identificar a potenciales criminales o terroristas.



Añade después que


>[...] el sistema será capaz de coger al 90 % de los que mienten, porcentaje similar al obtenido por el polígrafo



Lo único que parece evidente es que en El País no cuentan con un estadístico que pueda guiar a los periodistas cuando se meten en camisas de once varas. Pero desde aquí, y gratis, vamos a analizar la noticia como se debiera.

Supongamos que el sistema efectivamente atrapa al 90% de los terroristas. Pero supongamos, y muy generosamente, que también considera mentirosos —o terroristas— 0.1 % de quienes no lo son.

Supongamos que se hace pasar por el artilugio a un millón de personas. Y que, exagerando mucho, hay 100 terroristas entre ellos. Entonces podríamos utilizar el siguiente código


{{< highlight R >}}
N <- 1000000
terroristas <- 100
inocentes <- N - terroristas

efectividad.terroristas <- 0.9
error.1 <- 0.01

p.carcel <- c( efectividad.terroristas, error.1 )
tabla <- cbind( p.carcel, 1 - p.carcel )

tabla <- round( tabla * c( terroristas, inocentes ) )

colnames( tabla ) <- c( "carcel", "vuela" )
rownames( tabla ) <- c( "terroristas", "inocentes" )

tabla
{{< / highlight >}}


para obtener la siguiente tabla de contingencia:



{{< highlight R >}}
            carcel  vuela
terroristas     90     10
inocentes     1000 998900
{{< / highlight >}}



Es decir, incluso en condiciones generosísimas, 1000 inocentes irían a la cárcel. Y si el error en el conjunto de los viajeros inocentes fuese del 1%, serían casi 10000.

Hay cosas que no entiendo:



* Que todo el mundo que inventa un cacharrillo o algoritmo lo juzgue utilísimo para afrontar un problema, el del terrorismo, que [causa en EE.UU. menos muertes que los ciervos](http://www.datanalytics.com/2011/05/10/1989/).
* Que un periódico que se considera tan serio sea incapaz de ofrecer un análisis más completo e inteligente de lo que publica y se limite a copiar del teletipo.

