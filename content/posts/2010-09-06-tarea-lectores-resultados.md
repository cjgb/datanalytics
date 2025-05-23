---
author: Carlos J. Gil Bellosta
categories:
- r
date: 2010-09-06 22:41:11+00:00
lastmod: '2025-04-06T19:10:31.055050'
related:
- 2010-08-17-una-tarea-para-mis-lectores.md
- 2013-05-09-data-table-ii-agregaciones.md
- 2013-05-02-data-table-i-cruces.md
- 2010-05-09-datatables-tablas-con-busqueda-binaria-en-r.md
- 2019-08-05-dplyr-parece-que-prefiere-los-factores.md
tags:
- r
- programación
title: 'Una tarea para mis lectores: ¡resultados!'
url: /2010/09/06/tarea-lectores-resultados/
---

El otro día dejé planteada[ una tarea para mis lectores](https://datanalytics.com/2010/08/17/una-tarea-para-mis-lectores/) (que han sido menos diligentes que yo, incluso). Trataba de una comparación entre varios métodos para acceder a diccionarios (o _hashes_) de datos desde R para tratar de identificar el más eficiente en términos de velocidad de acceso.

Acá van los resultados:

{{< highlight R >}}
n <- 100000
dat <- data.frame( id = paste( "id", 1:n, sep = "_" ),
    valor = rnorm( n ), stringsAsFactors = F )

n.sample <- 20000
seleccion <- sample( dat$id, n.sample )

### Con vectores:
system.time( res <- sapply( seleccion,
    function( x ) dat$valor[ dat$id == seleccion ] ) )

#  user  system elapsed
# 84.79    5.24   90.14

### Con listas:
mi.lista <- sapply( dat$valor, I, simplify = F )
names( mi.lista ) <- dat$id
system.time( res <- sapply( seleccion, function( x ) mi.lista[[x]] ) )

#  user  system elapsed
# 19.15    0.00   19.20

### Con entornos:
mi.entorno.0 <- new.env()
invisible( sapply( 1:n, function(i)
  assign( dat$id[i], dat$valor[i], env = mi.entorno.0 ) ) )
system.time( res <- sapply( seleccion, function( x ) mi.entorno.0[[x]] ) )

#  user  system elapsed
# 67.89    0.03   68.06

### Con el paquete data.table:
require( data.table )
tmp.dat <- dat
tmp.dat$id <- factor( tmp.dat$id )
mi.data.table <- data.table( tmp.dat )
setkey( mi.data.table, id )
system.time( res <- sapply( seleccion,
  function( x ) mi.data.table[ J(x) ]$valor ) )

#   user  system elapsed
# 371.07   25.91  400.39

### Con hashes:
mi.entorno.1 <- new.env( hash = T )
invisible( sapply( 1:n, function(i)
  assign( dat$id[i], dat$valor[i], env = mi.entorno.1 ) ) )
system.time( res <- sapply( seleccion,
    function( x ) mi.entorno.1[[x]] ) )

#  user  system elapsed
#  0.14    0.00    0.14
{{< / highlight >}}


Los números son tan concluyentes que me excusan de la necesidad de ofrecer explicaciones y distingos. Aunque para que mis lectores no tengan que ir subiendo y bajando por la entrada para realizar comparaciones, los resumo en un gráfico:


[![](/wp-uploads/2010/09/tiempos_busqueda_segundos.png#center)
](/wp-uploads/2010/09/tiempos_busqueda_segundos.png#center)