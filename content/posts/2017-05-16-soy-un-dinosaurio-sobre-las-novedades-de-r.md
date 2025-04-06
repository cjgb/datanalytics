---
author: Carlos J. Gil Bellosta
categories:
- r
date: 2017-05-16 08:13:51+00:00
draft: false
lastmod: '2025-04-06T19:08:58.352337'
related:
- 2022-09-20-tools-etl-memory.md
- 2018-04-09-la-intrahistoria-de-mi-libro-de-r.md
- 2015-01-28-la-profesionalizacion-de-r.md
- 2016-11-15-una-fina-tenue-somera-capa-de-sintaxis.md
- 2011-11-28-r-en-la-ensenanza-unos-comentarios-a-los-comentarios.md
tags:
- r
- tidyverse
- dplyr
- magriter
title: ¿Soy un dinosauRio? Sobre las novedades de R
url: /2017/05/16/soy-un-dinosaurio-sobre-las-novedades-de-r/
---

Trato de estar abierto a _lo nuevo_. Tantos años soportando dinosaurios me han vacunado contra el conservadurismo tecnológico. De hecho, me produce arcadas. La experiencia, no obstante, me ha hecho permeable al [efecto Lindy](https://en.wikipedia.org/wiki/Lindy_effect), lo que me da ocasión de saludar a mis amigos _emaqueros_.

Las cosas cambian y en R estamos viviendo una especie de revolución. Mi argumento, para impacientes, es que:

 * Es más superficial que sustancial: es azúcar sintáctico.
 * En ciertos aspectos, no es positiva y mina ciertos principios valiosos que hicieron de R un lenguaje popular.

Cuento todo esto a raíz de una [reseña](http://blog.revolutionanalytics.com/2017/05/technical-foundations-of-informatics.html) a un novedoso [curso de R](https://info201-s17.github.io/book/index.html). Lo es en tanto que, dicen:

* Ignora los procedimientos clásicos (_old-school_) de manipulación de datos en R e introduce directamente `dplyr`.
* Llega a `ggplot2` sin pasar por `plot`.

Nunca he sido particularmente partidario de `dplyr` por varios motivos:

* Llegó para solucionar problemas que ya no teníamos (gracias a `plyr` y `data.table`).
* No te permite hacer cosas nuevas; pero te obliga a hacerlas de una manera distinta.
* ¿Es algo más que un poco de azúcar sintáctico?

Ocultar al neófito todo lo que hubo tiene ciertas ventajas (las conozco) pero también un grave inconveniente: esa gente no sabrá leer código ajeno, código anterior. Creo que es mejor enseñar el canon y luego, una vez que alguien sabe escribir

{{< highlight R >}}
a <- foo(b)
{{< / highlight >}}

advertirle que hay gente que también escribe, y que es lo mismo,

{{< highlight R >}}
a <- b %>% foo
{{< / highlight >}}

O que una vez que hace suya la operación (abstracta) _groupby_, decirle que no hay más remedio que asumir que hay tres o cuatro maneras distintas de transcribirla en R. Que la sintaxis, en definitiva, es una añadidura tan superficial y sutil como la diferencia entre el teclado español y el estadounidense. Que en programación hay que ser chomquista, pensar en la [gramática universal](https://en.wikipedia.org/wiki/Universal_grammar) y teclear en la sintaxis que toque.

¿Y sobre los gráficos? Bien, los de `ggplot2` son resultones. Concedido. Pero muchos no usamos R (solo) para hacer gráficos chulos. Usamos R para analizar datos. Y queremos poder inspeccionar la columna `edad` con un brevísimo

{{< highlight R >}}
hist(dat$edad)
{{< / highlight >}}

(¿ocho golpes de tecla?) para entender rápidamente su distribución sin enredarnos en toda la gramática de los gráficos del Sr. Wilkinson.

R no es un lenguaje de programación. R es un entorno para el análisis estadístico y gráfico de datos que también es un lenguaje de programación. Lenguajes de programación hay muchos y de todo pelaje. Entornos para analizar datos, muchos menos y casi todos pésimos. Por eso tenemos que ser cuidadosos en los cambios y sopesar bien lo que se gana y lo que se pierde y, por encima de todo, saber qué somos y a dónde queremos llegar.