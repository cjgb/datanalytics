---
author: Carlos J. Gil Bellosta
date: 2014-02-13 07:23:19+00:00
draft: false
title: Mi solución al otro problema del cumpleaños

url: /2014/02/13/mi-solucion-al-otro-problema-del-cumpleanos/
categories:
- probabilidad
- r
tags:
- cumpleaños
- r
---

Pues eso, que me piqué —y parte de la culpa la tiene [este sujeto](http://eliasron.com/)— con [el otro problema del cumpleaños](http://www.datanalytics.com/2014/02/05/el-otro-problema-del-cumpleanos/) y he aquí el código —exacto salvo redondeos, no mediante simulaciones— que he usado para _resolverlo_:








    f <- function(n, k = 365, v = NULL){

      if(<a href="http://inside-r.org/r-doc/base/is.null">is.null(v))
        v <- c(1, rep(NA, k))

      res <- 1

      for(j in (k-1):1){
        v[k-j] <- ifelse( is.na(v[k-j]), f(n, k-j, v), v[k-j])
        res    <- res - choose(k,j) * ((k-j)/k)^n * v[k-j]
      }

      res
    }

    f(2287)
    #0.5003708
    f(2286)
    #0.4994142








Lo que hay al final son los ensayos últimos de mi mecanismo de cutrebúsqueda binaria para acotar la solución usando la función `f`. Esta función calcula la probabilidad de que una distribución aleatoria de `n` bolas en `k` urnas no deje vacía nunguna de ellas.

La solución es recursiva y está basada en el hecho de que la probabilidad buscada es la complementaria de que: la distribución deje solo una urna vacía _xor_ la distribución deje solo dos urnas vacías _xor_, etc.

Y que la probabilidad de dejar solo m urnas vacías se reduce al problema anterior: hay que seleccionar las m urnas (el número combinatorio), forzar a que todas las bolas, n, caigan en las k-m urnas restantes y, finalmente, que no queden huecos dentro de las k-m urnas.

Y algebraicamente (para parecer un tipo serio y confundir todavía más a quienes leen [esto](http://www.datanalytics.com/2014/02/07/no-sin-evidencia/) y luego creen que lo hago de veras, veras):


$latex p_k^n=1-\sum_{j=1}^k\binom{k}{j}\left(\frac{k-j}{k}\right)^np_{k-j}^n$
