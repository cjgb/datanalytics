---
author: Carlos J. Gil Bellosta
categories:
- r
date: 2011-04-08 07:26:41+00:00
draft: false
lastmod: '2025-04-06T18:48:37.488494'
related:
- 2010-09-01-el-paquete-multicore-de-r.md
- 2011-09-30-dont-be-loopy-iii-jackknife-y-paralelismo.md
- 2015-06-15-paralelismo-en-r-memorandum.md
- 2014-05-15-r-en-paralelo.md
- 2014-06-06-validacion-cruzada-en-paralelo.md
tags:
- r
- programación
- paquetes
- paralelización
title: Paralelización de bucles con foreach
url: /2011/04/08/paralelizacion-de-bucles-con-foreach/
---

Parcialmente en agradecimiento a [Revolution Analytics](http://www.revolutionanalytics.com/) por haber concedido una subvención a las [III Jornadas de usuarios de R](http://usar.org.es/) voy a discutir en esta entrada cómo paralelizar bucles usando los paquetes `foreach` y `doMC` desarrollados por dicha empresa.

El paquete `foreach` contiene, esencialmente, una única función, `foreach`, que, en su forma más básica, permite ejecutar bucles con una sintaxis un tanto peculiar:


{{< highlight R >}}
foreach( i = 1:3 ) %do% log( i )
{{< / highlight >}}


Volveré sobre algunas operaciones interesantes y bastante útiles que permite realizar esta función porque, de todas ellas, hoy me ocuparé sólo de una: la que abre la puerta de una manera sencilla a la paralelización de bucles.

Pero no lo haré sin antes explicar la singularidad de la notación de la construcción anterior y el papel de la partícula `%do%`: en ella, `foreach( i = 1:3 )` construye un objeto de la clase `foreach`, como puede comprobarse si uno ejecuta


{{< highlight R >}}
class( foreach( i = 1:3 ) )
{{< / highlight >}}


Por otro lado, `log( i )` es una expresión de R. La partícula `%do%` que media entre ellos no representa sino un operador binario que acepta como parámetros un objeto de la clase `foreach` y una expresión de R (al igual que el operador binario `%*%` acepta como parámetros matrices de una determinada dimensión y las multiplica). Este operador no hace otra cosa que ejecutar la expresión de R en la sucesión de `environments` que crea el objeto `foreach`.

Pero además de `%do%`, que opera secuencialmente, existe `%dopar%`, que lo hace en paralelo. Como el ejemplo


{{< highlight R >}}
foreach( i = 1:3 ) %dopar% log( i )
{{< / highlight >}}


sería poco ilustrativo, utilizaremos más bien


{{< highlight R >}}
    foreach( i = 1:3 ) %dopar% { Sys.sleep( i ); i }
{{< / highlight >}}


Desgraciadamente, puede comprobarse que no basta con utilizar `%dopar%`:


{{< highlight R >}}
    > system.time( foreach( i = 1:3 ) %dopar% { Sys.sleep( i ); i } )
       user  system elapsed
      0.010   0.030   6.027
    Warning message:
    executing %dopar% sequentially: no parallel backend registered
{{< / highlight >}}



A pesar de utilizar `%dopar%`, R no paraleliza. Esto sucede porque es necesario _registrar_ un _motor de paralelización_. Existen varios y en mi caso utilizaré el que proporciona el paquete `doMC`, un _envoltorio_ del paquete `multicore` de Simon Urbanek. Así obtengo:


{{< highlight R >}}
    library( doMC )   # carga el paquete multicore (MC)
    registerDoMC( 2 ) # registra MC y le informa de que
                      #   dispongo de dos núcleos
    system.time( foreach( i = 1:3 ) %dopar% { Sys.sleep( i ); i } )
    #   user  system elapsed
    #  0.030   0.010   4.044
{{< / highlight >}}


Y, efectivamente, he conseguido paralelizar mi trivial operación.

Me es obligado advertir que el paquete `multicore` y, por lo tanto `doMC` que depende de él, no están disponibles en Windows. Mis lectores usuarios de tal SO (si no están avergonzados de reconocerlo en público, claro) podrán contarnos a los demás qué otro motor de paralelización pueden utilizar en él. ¡Se lo dejo de tarea!