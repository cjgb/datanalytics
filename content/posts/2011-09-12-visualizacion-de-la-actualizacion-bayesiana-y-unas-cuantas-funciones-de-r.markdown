---
author: Carlos J. Gil Bellosta
date: 2011-09-12 07:02:03+00:00
draft: false
title: Visualización de la actualización bayesiana (y unas cuantas funciones de R)

url: /2011/09/12/visualizacion-de-la-actualizacion-bayesiana-y-unas-cuantas-funciones-de-r/
categories:
- estadística
- r
tags:
- estadística
- estadística bayesiana
- gráficos
- r
---

Me ha llegado noticia de una entrada en un _blog_, [Visualizing Bayesian Updating](http://bayesianbiologist.wordpress.com/2011/09/10/visualizing-bayesian-updating/), en el que se muestra visualmente cómo se actualiza la distribución a posteriori conforme aumenta el número de ensayos en un problema bayesiano simple. Explica también los fundamentos estadísticos del asunto.

Yo me limitaré a ofrecer una nueva versión del código —que no funcionaba copiando y pegando sin más— en el que he introducido ciertas modificaciones. Es el siguiente:


{{< highlight R "linenos=true" >}}
sim.bayes <- function(p=0.5, N=10, y.lim=15)
{
  plot( 1, xlim = c(0,1), ylim = c(0, y.lim),
        xlab = 'p', ylab = 'Posterior Density',
        type = "n" )
  legend('topright',
      legend=c('Prior','Updated Posteriors','Final Posterior'),
      lty=c(2,1,1),col=c('black','black','red'))

  exitos <- cumsum( rbinom( N, 1, p ) )

  foo <- function( exitos, n.pruebas, col = "black", lwd = 1, lty = 1 ){
    curve( dbeta( x, exitos + 1, n.pruebas - exitos + 1 ),
            add = TRUE, col = col, lwd = lwd, lty = lty )
    print( paste(exitos, "éxitos y ", n.pruebas - exitos, "fracasos") )
  }

  foo( 0, 0, lty = 2 )
  mapply( foo, exitos, 1:N )
  foo( exitos[N], N, col='red', lwd = 2 )
}

sim.bayes(p = 0.6, N = 20, y.lim = 5)
{{< / highlight >}}


Quiero pensar que mis lectores encontrarán útil el ejemplo de uso de la función `mapply` (para recorrer dos vectores simultáneamente), `curve` (para representar gráficamente funciones).
