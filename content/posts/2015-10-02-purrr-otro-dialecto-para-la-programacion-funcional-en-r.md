---
author: Carlos J. Gil Bellosta
categories:
- r
date: 2015-10-02 08:13:54+00:00
lastmod: '2025-04-06T19:04:13.691589'
related:
- 2014-05-14-y-sin-embargo-te-quiero.md
- 2010-11-24-programacion-funcional-en-r-filter.md
- 2011-01-20-nuevo-paquete-para-procesar-texto-en-r-stringr.md
- 2017-05-16-soy-un-dinosaurio-sobre-las-novedades-de-r.md
- 2017-03-16-todo-lo-que-sucede-en-r-es-una-llamada-a-una-funcion.md
tags:
- programación funcional
- purrr
- paquetes
- r
title: 'purrr: otro dialecto para la programación funcional en R'
url: /2015/10/02/purrr-otro-dialecto-para-la-programacion-funcional-en-r/
---

Acaba de publicarse [`purrr`](https://cran.r-project.org/web/packages/purrr/). Es un paquete del universo Wickham que ofrece funciones para desarrollar otro dialecto funcional sobre R.

R es un lenguaje oportunista: ni del todo funcional, ni del todo orientado a objetos, ni del todo procedural. Es como es porque nació con un objetivo muy concreto y fue adoptando cosas de aquí y de allá como cuando uno recorre el supermercado. Merece la pena traer a colación cómo el primerísimo R (cuando era S), durante los ochenta, antes de adoptar la forma actual a través de los diversos libros de colores de Chambers y compañía, estaba fuertemente inspirado por Lisp.

R continúa teniendo importantes elementos funcionales: de siempre ha contado con funciones como `apply` y sus amigas. Existen incluso `Reduce`, `Filter` y otras habituales en lenguajes funcionales puros. Los paquetes `plyr` y `dplyr` abundan en los aspectos funcionales del lenguaje.

El paquete `purrr` nos trae nuevas funciones, tales como `map` (y algunas derivadas, como `map_dbl` o `map_int`) y `zip`, más azúcar sintáctico y motivos adicionales para que nos pasemos —aunque algunos nos resistamos— el feísimo operador `%>%`. Hay más información [aquí](http://blog.rstudio.org/2015/09/29/purrr-0-1-0/).

Hay gente que me llama para que enseñe cursos de R. Dentro de muy poco tendré que responderles: ¿pero qué dialecto de R quieres aprender?