---
author: Carlos J. Gil Bellosta
date: 2011-07-19 07:00:56+00:00
draft: false
title: 'Clústering (II): ¿es replicable?'

url: /2011/07/19/clustering-ii-es-replicable/
categories:
- ciencia de datos
- consultoría
- estadística
tags:
- clústering
- consultoría
- estadística
- márketing
- ciencia de datos
---

Sólo conozco un estudio ?y lo digo _bona fide_; si alguno de mis lectores conoce otro, le ruego que me lo indique? en el que las técnicas de _clústering_ hayan sido rectamente aplicadas. Se trata del artículo [_Molecular Classification of Cancer: Class Discovery and Class Prediction by Gene Expression Monitoring_](http://www.sciencemag.org/content/286/5439/531.short) de cuyo resumen extraigo y traduzco lo siguiente:


>Un procedimiento de detección de clases automáticamente descubrió la distinción entre la leucemia mieloide aguda (AML) y la leucemia linfoblástica aguda (ALL) sin conocimiento previo de las clases. Después se construyó un predictor de clases...


En esencia, los autores tomaron (dicen) unos datos, aplicaron técnicas de _clústering_ y encontraron dos clases. Supongo que validarían el experimento fehacientemente hasta tener cierta seguridad de que, efectivamente, había motivos para creer que los datos estaban escindidos en dos partes claramente diferenciadas. Y, posteriormente, fueron capaces de sustentar dichas diferencias utilizando información externa: efectivamente, los miembros de los grupos respondían a cuadros clínicos distintos.

Incluso en este caso, si los autores no sabían que en sus datos existían dos clases muy distintas, fue por que no preguntaron: la etiqueta se conocía desde el momento de la recopilación de los datos y las diferencias entre la leucemia mieloide y la linfoblástica son tan notorias (para un experto) como las que distinguen el día de la noche.

En todas las demás situaciones en las que he visto utilizar este tipo de métodos la situación ha sido muy distinta. (Salvo en los libros, claro. En los libros hacen trampa. En los libros plantean problemas _de laboratorio_ absolutamente irreales: bidimensionales, con variables sin ningún tipo de problema, con grupos que se ven perfectamente a ojo, etc. ¡Ni los mencionaré en esta serie!)

En todas las demás situaciones de las que tengo noticia, incluso en las que he participado y llevan mi firma, por las que, en algunos casos, y por las que se han pagado decenas de miles de euros, el análisis no ha sido en absoluto riguroso. Quiero subrayar en esta serie de entradas tres características sospechosas que definen este tipo de estudios:



1. No replicabilidad
2. Dependencia de las hipótesis de partida y del preprocesamiento de los datos
3. Falta de rigor a la hora de analizar la validez de las clases obtenidas

En la entrada de hoy trataré la primera de ellas. Las dos preguntas que me sugiere el problema son las que dan título a las dos secciones siguientes de esta entrada.


### Si los datos no tienen clases definidas, ¿las _encontramos_ aun así?


Mala será la replicabilidad del método cuando uno es capaz de encontrar clases aun cuando no existen. Tomemos el siguiente pedazo de código, que crea un conjunto de datos con `n.obs` observaciones en un espacio de dimensión `n.dim` y busca `n.clus` clases en él:







{{< highlight R >}}
library( cluster )
n.dim  <- 5
n.obs  <- 200
n.clus <- 4
my.dat <- matrix( rnorm( n.dim * n.obs ), n.obs )
res <- pam( my.dat, n.clus )
{{< / highlight >}}







¿Encuentra clases? ¿Se parecen a las que se obtienen al crear otro conjunto de datos con exactamente la misma distribución de partida?

Cierto que el paquete `cluster` proporciona herramientas para verificar hasta qué punto son _buenas_ las clases obtenidas. Pero si habéis trabajado en el negocio, ¿las habéis utilizado alguna vez? ¿Habéis advertido a vuestros superiores (o clientes) de que vuestro _clústering_ es sospechoso? En caso afirmativo, ¿qué os han respondido?


### Si los datos tienen clases definidas, ¿las encuentra el algoritmo?


De nuevo, podemos hacer otro experimento con el siguiente trozo de código, que es una versión del anterior.







{{< highlight R >}}
    library( cluster )
    n.dim  <- 5
    n.obs  <- 200
    n.clus <- 4
    sigma <- 0.3
    centers <- matrix( rnorm( n.dim * n.clus, 0, sigma ), n.clus )
    cluster.index <- sample( n.clus, n.obs, replace = T )
    my.dat <- matrix( rnorm( n.dim * n.obs ), n.obs )
    my.dat <- my.dat + centers[ cluster.index, ]
    res <- pam( my.dat, n.clus )
{{< / highlight >}}


Esta vez hemos fabricado `n.clus` clases distintas que serán más o menos distintas en función del parámetro `sigma`. Aun conociendo de antemano el número de clases en vuestro conjunto de datos, ¿sois capaces de recuperar las clases iniciales? ¿Se parecen en algo los centros de las clases obtenidas a los preespecificados? ¿Cómo de grande tiene que ser `sigma` para obtener resultados razonables y consistentes? ¿Seríais capaces de deducir el valor del parámetro crítico `n.clus` si no supiéseis su valor al crear los datos?


### Resumen


Los dos experimentos propuestos en esta entrada hacen referencia a dos _elemenos de sospecha_ que me obligan a replantearme ?y entiendo que muchos otros compañeros de faena les ocurrirá igual? la validez de los métodos de _clústering_ tal cual se usan en muchas aplicaciones: los resultados no son repetibles, incluso con los mismos (o una muestra de los mismos) datos.

Los resultados de un estudio de _clústering_ tienen que ser (y temo repetirme):


* Replicables bajo condiciones, submuestras e hipótesis diferentes.
* Tiene que ser posible encontrar una causa extra-algorítmica del motivo por el que los sujetos se arraciman de esa manera y no de otra.

Y si no hay replicabilidad, si no se cumplen las dos condiciones anteriores, no hay ciencia. A lo más, charlatanismo.
