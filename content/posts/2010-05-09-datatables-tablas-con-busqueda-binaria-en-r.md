---
author: Carlos J. Gil Bellosta
date: 2010-05-09 15:28:47+00:00
draft: false
title: 'Datatables: tablas con búsqueda binaria en R'

url: /2010/05/09/datatables-tablas-con-busqueda-binaria-en-r/
categories:
- r
tags:
- r
- sql
- paquetes
- data.table
---

No hace mucho me enfrenté con un problema en el trabajo. Quería cruzar dos tablas, una de algunos miles de millones de registros y otra de algunos cientos de miles para, simplemente, contar el número de filas finales que aparecían por fecha.

Cada una de las tablas tenía algunos filtros y agregaciones; el cruce final se realizaba sobre las subconsultas resultantes. El gestor de bases de datos que utilizamos, Teradata (sin comentarios), no podía con el cruce: las decisiones que tomaba internamente el presunto optimizador de consultas conducían inexorablemente a un error de espacio.

Decidí comprobar si esta tarea que una instalación de Teradata de varios millones de euros de precio era incapaz de realizar podía llevarse a cabo en mi pequeño ordenador con el _software_ adecuado. Así que realicé las dos subconsultas independientemente, volqué los resultados a sendos ficheros de texto (de 5 y 367MB respectivamente, que corresponden a 150k y 12M de filas) y los cargué en R.

Tras algunas modificaciones en los datos (cambios de tipos y nombres de las columnas, etc.) obtuve dos _dataframes_:

{{< highlight R >}}
> head(epi)
    cta prtda
1 8301 77920
2  476 45526
3 5350 65100
4  878 46057
5 6614 80059
6 8470 78830
{{< / highlight >}}


de 150.000 filas que asigna a cada cuenta, `cta`, una serie de partidas, `prtda`, y

{{< highlight R >}}
> head( saldos )
 fec cta ofi
[1,]   1   4  40
[2,]   1   4  70
[3,]   1   4   1
[4,]   1   4  11
[5,]   1   4  21
[6,]   1   4  31
{{< / highlight >}}

de 12 millones de filas que para cada fecha, fec, y oficina, ofi, lista los correspondientes tipos de cuenta, cta, existentes.

Estas tablas cruzan por el campo cta, cuenta. A cada cuenta le corresponde una partida y el objetivo final era saber para cada fecha (fec), cuántas combinaciones de oficina (ofi) y partida existían. Un `merge` directo requería más memoria de la disponible, así que fabriqué el cruce a mano mediante el siguiente código:

{{< highlight R >}}
foo <- function( prtda ){
    tmp <- epi$cta[ epi$prtda == prtda ]
    unique(subset(saldos, cta %in% tmp, select = c(fec, ofi)))
}

tmp <- sapply(unique(epi$prtda), foo, simplify = F)
table(do.call(rbind, tmp)$fec)
{{< / highlight >}}

El código aplica a cada partida la función foo que hace lo siguiente:

1. Selecciona las cuentas que la tienen asociada en la tabla epi.
2. Devuelve una subtabla de saldos que contiene las fechas y oficinas en las que existe esa cuenta.

Finalmente, estas subtablas se apilan y la función table cuenta el número de filas por fecha.

Aunque tal vez no sea la manera más rápida de hacerlo, se trata de la implementación manual del método de los _bucles anidados_ para realizar cruces de tablas. Que es, de hecho, el más robusto (en el sentido de que utiliza la mínima cantidad posible de memoria) y, aunque no siempre sea el óptimo, no suele estar nunca muy alejado de él. [Eso dice,al menos, la teoría](http://oreilly.com/catalog/9780596005733).

Para implementar correctamente el algoritmo de los bucles anidados uno debe recorrer la tabla más pequeña y buscar las coincidentes, una a una, en la más grande. Y para que el proceso no se eternice, el acceso a esta última debe realizarse a través de un índice.

En R no hay índices y, de hecho, casi todo el tiempo de ejecución se consume en

{{< highlight R >}}
    subset(saldos, cta %in% tmp, select = 1:2)
{{< / highlight >}}

Recordemos que saldos tiene 12 millones de líneas y ese comando implica:

1. Ver cuáles de las cuentas de un vector de longitud 12 millones están contenidas en el vector tmp (de longitud media 15).
2. Seleccionar dichas filas de una tabla de longitud 12 millones.

Aunque esas operaciones son muy rápidas para tablas pequeñas (para las que R fue concebido originalmente, téngase presente), 12 millones es un número lo suficientemente elevado como para que O(n) —el tiempo que consume una búsqueda lineal, que es la que hace subset en un data.frame— sea significativamente superior a O(log n) —el de una búsqueda binaria.

Pero el paquete data.table enriquece R con una nueva estructura de datos, las data.tables, que vienen a ser data.frames indexados. Usando dicho paquete, se puede hacer

{{< highlight R >}}
saldos <- data.table( saldos )
setkey( saldos, cta )
foo <- function( prtda ){
     tmp <- epi$cta[ epi$prtda == prtda ]
   unique( data.frame( saldos[ J(tmp), j = c( "fec", "ofi" ),
        mult = "all", with = FALSE ] ) )
}
{{< / highlight >}}

La primera línea transforma saldos de un data.frame en un data.table. La segunda, lo indexa por la columna cta. La única diferencia en la función es que para filtrar por tmp se utiliza la expresión

{{< highlight R >}}
saldos[ J(tmp), j = c( "fec", "ofi" ), mult = "all", with = FALSE ]
{{< / highlight >}}

que busca en saldos utilizando el índice sobre cta. El porqué de esta sintaxis, tal vez poco intuitiva, puede consultarse en las ayudas del paquete.

Los tiempos de ejecución para la primera alternativa son de

{{< highlight R >}}
> system.time( kk <- sapply( unique( epi$prtda ), foo, simplify = F ) )
 user  system elapsed
5566.15  873.94 7088.15
{{< / highlight >}}

mientras que para la segunda quedan en:

{{< highlight R >}}
> system.time( tmp <- sapply( unique( epi$prtda ), foo, simplify = F ) )
 user  system elapsed
    994.96   18.63 1776.70
{{< / highlight >}}

Aunque los tiempos reales (_elapsed_) son muy elevados hay que tener en cuenta que, en mi prueba, están exagerados por las circuntancias de la ejecución: simultáneamente en una misma máquina, con restricciones de memoria y, por lo tanto, algo de paginación. En cualquier caso, lo verdaderamente relevante son los ratios entre ambos procedimientos, muy favorables para las data.tables con respecto a los data.frames originales.

En resumen, gracias al trabajo de Matthew Dowle, [disponemos de un nuevo paquete, data.table](http://cran.r-project.org/web/packages/data.table/index.html), que va a conseguir que nuestro código en R vuele cuando tengamos que realizar búsquedas en tablas grandes.
