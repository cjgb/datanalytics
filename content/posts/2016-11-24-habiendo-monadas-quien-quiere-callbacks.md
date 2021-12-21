---
author: Carlos J. Gil Bellosta
date: 2016-11-24 08:13:35+00:00
draft: false
title: Habiendo mónadas, ¿quién quiere callbacks?

url: /2016/11/24/habiendo-monadas-quien-quiere-callbacks/
categories:
- r
tags:
- future
- futuros
- paquetes
- programación
- programación funcional
- r
---

Nunca me he visto en la tesitura de tener que usar _callbacks_ porque no son mi guerra. Pero por lo que he oído de la gente que sabe mucho más que yo, son uno de esos infiernos de los que hay que huir con el mismo pavor que de los _fors_, los _ifs_, los _elses_ (¡argggg! ¡he escrito _else_!) y los _whiles_.

Una pequeña maravilla teórica que me ha hecho replantearme la absoluta inutilidad de aquello que estudié en Álgebra III (funtores y demás) son [las mónadas](https://medium.com/@sinisalouc/demystifying-the-monad-in-scala-cc716bb6f534#.yf91auwmu).

Y aunque

* haya discusión sobre si los futuros son o no son mónadas y
* en R no exista un `flatmap` propiamente dicho,

inspirado por todo lo anterior, el otro día escribí este pequeño bloque de código que, aun siendo mío, me maravilla:

{{< highlight R "linenos=true" >}}
library(magrittr)
library(future)

query.children <- function(x){
  future({
    tmp <- value(x)
    Sys.sleep(2)   # simulate waiting for resource
    tmp + 1
  })
}

query.node <- function(x){
  future({
    Sys.sleep(2)   # simulate waiting for resource
    x
  })
}

res <- query.node(1) %>% query.children %>% query.children
{{< / highlight >}}

Ahora, en serio, ¿quién quiere _callbacks_?