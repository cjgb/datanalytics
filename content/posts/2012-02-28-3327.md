---
author: Carlos J. Gil Bellosta
date: 2012-02-28 08:02:29+00:00
draft: false
title: Julia, un nuevo lenguaje para la programación científica

url: /2012/02/28/julia-nuevo-lenguaje-programacion-cientifica/
categories:
- r
tags:
- julia
- r
- javascript
---

No sé si conocéis [Julia](http://julialang.org/), un lenguaje de programación orientado al cálculo científico. Os dejaré echarle un vistazo a su página.

¿Ya?

Bueno, pues estoy un poco enfadado con ellos. Me pasa un poco como a los catalanes que se quejaban de que en las fotos de ABC siempre sacaban a Jordi Pujol (todavía más) feo (de lo que por sí era): en las comparaciones no le hacen excesiva justicia a R. Me he tomado la molestia de reescribir el código para una de las comparaciones que realizan, `pi_sum`, utilizando código vectorizado.

El original es

{{< highlight R "linenos=true" >}}
library(R.utils)

assert = function(bool) {
    if (!bool) stop('Assertion failed')
}

timeit = function(name, f, ..., times=5) {
    tmin = Inf
    for (t in 1:times) {
        t = system.time(f(...))["elapsed"]
        if (t < tmin) tmin = t
    }
    cat(sprintf("r,%s,%.8f\n", name, tmin*1000))
}

pisum = function() {
    t = 0.0
    for (j in 1:500) {
        t = 0.0
        for (k in 1:10000) {
            t = t + 1.0/(k*k)
        }
    }
    return(t)
}

assert(abs(pisum()-1.644834071848065) < 1e-12);
timeit("pi_sum", pisum, times=1)
{{< / highlight >}}

y tarda 10760 milisegundos en mi máquina.

El código alternativo,

{{< highlight R "linenos=true" >}}
pisum.cjgb <- function() {
    for (j in 1:500)
        t <- sum( (1:10000)^(-2) )
    return(t)
}

assert(abs(pisum.cjgb()-1.644834071848065) < 1e-12);
timeit("pi_sum_cjgb", pisum.cjgb, times=1)
{{< / highlight >}}

tarda 510 milisegundos, veinte veces menos.

En cualquier caso, me viene sorprendiendo mucho la velocidad de JavaScript. ¿Recordáis mi [entrada sobre las ocho reinas](http://www.datanalytics.com/blog/2012/01/23/nueve-reinas-con-sas-y-r-tambien/)? La versión en JavaScript,

{{< highlight html "linenos=true" >}}
<body onload="javascript:cnt=0;

function backTrack(trial,next){
  if (trial.length==0){return true;}
  else {
    for (var i in trial){
      if (Math.abs(trial.length-i)==Math.abs(next-trial[i])){
        return false;
      }
    }
    return true;
  }
}

function perm(p,l){
  if (l.length==0){
    cnt++;document.write(cnt+'::'+p+'<br/>')
  }
  else {
    for (var i in l){
      if (backTrack(p,l[i])){
        perm(p.concat(l[i]),
        l.slice(0,l.indexOf(l[i])).concat(l.slice(l.indexOf(l[i])+1,l.length))
        );
      }
    }
  }
}

perm([],[1,2,3,4,5,6,7,8,9,10,11])">

</body>
{{< / highlight >}}

(cópiese el código anterior en un fichero `loquesea.html` y ábrase en el navegador) es notablemente más rápido que el equivalente en R.

¡Supongo que hay mucha más gente optimizando JavaScript —que, al fin y al cabo, es el instrumento que usa Google para entrar a tu cocina— que R!
