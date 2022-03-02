---
author: Carlos J. Gil Bellosta
date: 2011-09-19 07:23:49+00:00
draft: false
title: Linked, de Barabasi, capítulo I

url: /2011/09/19/linked-de-barabasi-capitulo-i/
categories:
- probabilidad
- r
tags:
- r
- redes sociales
---

No sé si seguir leyendo libros. Sus autores los llenan de letras. Y es un lujo poder disponer del tiempo de leerlas todas.

Uno de esos libros llenos de letras es [Linked](http://portal.educ.ar/debates/sociedad/sociedad-conocimiento/sobre-la-ciencia-de-las-redes-y-el-linked-de-barabasi.php), de Barabasi. Es un libro estupendo y recomendable. Pero podría ocupar 20 páginas si el autor fuese un poco más escueto y no se empeñase de llenarlo todo de anécdotas y colores.

Su primer capítulo trata sobre las redes sociales aleatorias, también conocidas como redes de Poisson o de Erdös-Rényi. Una de tales redes aleatorias es una colección de _n_ nodos y enlaces entre ellos de manera que la probabilidad de que dos nodos _x_ e _y_ al azar estén unidos es _p_.

Dos propiedades matemáticas de ellas cita Barabasi. Hoy discutiré esas dos y una más.

La primera es que el [grado](http://es.wikipedia.org/wiki/Centralidad#Grado) de los nodos sigue una distribución de Poisson —y de ahí el nombre—. Efectivamente, la probabilidad de que un nodo tenga grado _k_ tiene una [distribución binomial](http://es.wikipedia.org/wiki/Binomial) B(_n_,_p_) y siempre que _z_ = _np_ sea pequeño, puede aproximarse por una [distribución de Poisson](http://es.wikipedia.org/wiki/Distribuci%C3%B3n_de_Poisson) de parámetro _z_.

El código







{{< highlight R >}}
    n.nodos <- 1000

    build.network <- function( n.nodos, n.enlaces ){
      rs <- matrix( sample( n.nodos, 2 * n.enlaces, replace = T),
                    nrow = n.enlaces, ncol = 2  )
      rs <- subset( rs,  ! rs[,1] == rs[,2] )

      if( nrow( rs ) < n.enlaces )
        return( rbind( rs , build.network( n.nodos, n.enlaces - nrow( rs ) ) ) )

      rs
    }

    link.x.node <- function( z, n.nodos = 1000 ){
      p <- z / n.nodos

      n.enlaces.potenciales <- n.nodos * ( n.nodos - 1 ) / 2

      # cuantos enlaces existen?
      n.enlaces <- rbinom( 1, n.enlaces.potenciales, p )
      kk <- build.network( n.nodos, n.enlaces )
      kk <- table( table( kk ) )
      cbind( z, as.numeric( names( kk )), kk )
    }

    node.dist <- function( z, n.iter ){
      res <- replicate( n.iter, link.x.node(z, n.nodos = n.nodos) )
      res <- mapply( cbind, res, 1:n.iter )
      res <- data.frame( do.call( rbind, res ) )
      colnames( res ) <- c( "z", "n.enlaces", "count", "iter" )

      boxplot( res$count ~ res$n.enlaces )
      tmp <- unique( res$n.enlaces )
      lines( tmp, n.nodos * dpois( tmp, lambda = z ), col = "red" )

      res
    }

    res <- node.dist( 5, 100 )
{{< / highlight >}}







crea 100 redes aleatorias con `n.nodos` nodos y _z_ = 5. Luego cuenta cuántos nodos tienen grado _k_ y, finalmente, crea una gráfica similar a

[![](/wp-uploads/2011/09/poisson_distr_degree.png#center)
](/wp-uploads/2011/09/poisson_distr_degree.png#center)

que es un diagrama de cajas del grado sobre el que se superpone el número esperado de nodos de grado _k_ si se acepta que su distribución es de Poisson. Como puede apreciarse, coinciden. Pero ya lo sabíamos porque conocíamos de viejo la relación entre las distribuciones de Poisson y la binomial.

La segunda propiedad de este tipo de redes es más enjundiosa. Tiene que ver con lo siguiente: en una red aleatoria, ¿existirán varias componentes inconexas? ¿o todos los nodos acabarán unidos a todos los nodos?

Supongamos que existe una _componente gigante_ _G_. ¿Cuál será la probabilidad _q_ de que alguno de los nodos _x_ no pertenezca a ella? Si $latex x$ es un nodo con _k_ vecinos $latex x_1, \dots, x_k$, entonces


$$q = P( x \not\in G ) = P( x_1, \dots, x_k \not\in G)$$


y dizque (yo no tengo aún claro el motivo: no acabo de ver por qué son sucesos independientes)


$$P( x_1, \dots, x_k \not\in G) = \prod P( x_i \not\in G ) = q^k $$


Si un nodo no pertenece a _G_, tampoco lo harán ninguno de sus vecinos. De ahí q sea igual a


$$q=\sum_{k=0}^\infty q^k p_k$$


y que, en general,


$$q = \sum_{k=0}^\infty q^k z^k e^{-z} / k! = e^{-z} \sum_{k=0}^\infty (qz)^k / k! = e^{-z} e^{zq}.$$


De ahí se obtiene la ecuación $latex q = \exp^{-z( 1-q )}$ y si $latex s = 1-q$ es la probabilidad de que un nodo pertenezca a _G_, se obtiene $latex s = 1 - \exp^{-zs}$.

¿Tiene soluciones esta ecuación entre 0 y 1? ¿Para qué valores de _z_? Existe una raíz trivial _s_ = 0: en tal caso el término de la izquierda y el de la derecha valen 0. En 1, el término de la izquierda vale 1 y el de la derecha, menos de uno.

La siguiente figura ilustra la situación:

[![](/wp-uploads/2011/09/roots_equation.png#center)
](/wp-uploads/2011/09/roots_equation.png#center)

En ella se representa el término de la izquierda,


{{< highlight R >}}
curve( I, 0, 1, xlab = "", ylab = "" )
{{< / highlight >}}


como una línea negra sólida y luego el término de la derecha con los valores _z_ = 2


{{< highlight R >}}
curve( 1 - exp( - 2 * x), add = T, lty = 2 )
{{< / highlight >}}


y _z_ = 0.5


{{< highlight R >}}
curve( 1 - exp( - 0.5 * x), add = T, lty = 2 )
{{< / highlight >}}


con líneas punteadas. Como podrá comprobar quién aún se derivan funciones, la derivada del término de la derecha en 0 es mayor o menor que uno dependiendo de si _z_ es mayor o menor que 1 y eso obliga a que haya o no raíz de la ecuación en (0,1).

En resumen, cuando _z_ < 1 no existe componente gigante y la red es una especie de sopa de letras. Pero si _z_ > 1, aparece una supercomponente que contiene un porcentaje de los nodos dado por la solución de la ecuación anterior. Raíz que puede obtenerse con R así:


{{< highlight R >}}
foo.optim <- function( x, z = 3 ) ( x - 1 + exp( -z * x) )**2
optimize( foo.optim, z = 2, interval = c(0,1))$minimum
optimize( foo.optim, z = 1.5, interval = c(0,1))$minimum
{{< / highlight >}}


Para terminar esta larga entrada, vamos a ver si podemos fiarnos o no de Erdös. Porque una cosa es que este hombre nos diga que el tamaño de la componente grande es _s_ y otra distinta, que lo sea.

Para eso vamos a crear muchas redes aleatorias con distintos valores de _z_ y calcular el tamaño de la componente más grande para después compararlo con el calculado teóricamente. Y efectivamente, corriendo


{{< highlight R >}}
library( igraph )

prop.giant.component <- function( z, n.nodos = 1000 ){
  p <- z / n.nodos
  n.enlaces.potenciales <- n.nodos * ( n.nodos - 1 ) / 2
  n.enlaces <- round( n.enlaces.potenciales * p )
  my.graph <- build.network( n.nodos, n.enlaces )
  my.graph <- graph.data.frame( my.graph )

  kk <- max( clusters( my.graph )$csize )
  kk / n.nodos
}

# prop.giant.component( 2 )

foo <- function( z, n.iter = 100 )
  replicate( n.iter, prop.giant.component( z ) )

zetas <- seq( 0.1, 5, by = 0.2)

res <- sapply( zetas, foo )

kk <- data.frame( res = as.numeric( t( res ) ), zetas = zetas )

plot( kk$zetas, kk$res, xlab = "", ylab = "" )

zetas <- unique( kk$zetas )
zetas <- zetas[ zetas > 1 ]

foo.optim <- function( x, z = 3 ) ( x - 1 + exp( -z * x) )**2
foo <- function( zeta ) optimize( foo.optim, z = zeta, interval = c(0,1))$minimum
theorical.sizes <- sapply( zetas, foo )

lines( zetas, theorical.sizes, col = "red")
{{< / highlight >}}


se obtiene

[![](/wp-uploads/2011/09/giant_component_size.png#center)
](/wp-uploads/2011/09/giant_component_size.png#center)

con lo que nos damos por satisfechos y aguardamos a disponer de otro ratillo de asueto para sacarle la miga al capítulo II.
