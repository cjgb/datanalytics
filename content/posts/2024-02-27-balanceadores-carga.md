---
author: Carlos J. Gil Bellosta
categories:
- programación
- probabilidad
date: 2024-02-27
lastmod: '2025-04-06T18:50:32.290064'
related:
- 2011-09-28-datos-grandes-colas-largas.md
- 2014-02-13-mi-solucion-al-otro-problema-del-cumpleanos.md
- 2012-07-27-a-los-datos-mismos.md
- 2019-01-08-modelos-de-conteos-con-sobredispersion-con-stan.md
- 2010-09-01-el-paquete-multicore-de-r.md
tags:
- computación
- probabilidad
- balanceadores de carga
- distribución uniforme
title: Un truco probabilístico para balanceadores de carga
url: /2024/02/27/probabilidad-balanceadores-carga/
---

Tienes N servidores y un _balanceador de carga_. Las peticiones de trabajo llegan al balanceador y este las enruta hacia un servidor que se encarga de procesarlas. El objetivo del balanceador es tratar de conseguir un reparto más o menos uniforme de las tareas para que ningún servidor esté sobrecargado mientras otros permanecen ociosos. En términos probabilísticos, tratar de obtener una distribución uniforme (de la carga de trabajo).

Un mecanismo rudimentario de balanceo que parece que se usa por ahí es asignar las tareas al azar. Es simple y es en el fondo como muestreamos la distribución uniforme. Pero no todas las distribuciones _uniformes_ son iguales. Por muchos motivos, son interesantes versiones de la distribución uniforme más _uniformes_; para convencerse de ello uno puede leer lo que Wikipedia cuenta sobre las [_sucesiones de Sobol_](https://en.wikipedia.org/wiki/Sobol_sequence) o [aquí sobre los ruidos azules](https://acko.net/blog/stable-fiddusion/). Con los balanceadores de carga pasa lo mismo. Así, al parecer, [debe de ser una gran innovación](https://twitter.com/grantslatton/status/1754912113246798036) hacer lo siguiente:

1. Que el balanceador interrogue a dos servidores al azar.
2. Que le mande la tarea al menos ocupado de los dos.

Con ese truco se consiguen distribuciones uniformes _mejor repartidas_.

Y se me ocurre pensar:

- ¿Realmente es mejor mandar tareas a servidores al azar que recorrerlos cíclicamente? Casi seguro que no.
- Supongo que no es viable que el balanceador interrogue a todos los servidores.
- Y también imagino que la regla de consultar solo dos servidores habrá que replanteársela (e interrogar a más) cuando N sea grande. Al fin y al cabo, si el problema consiste en descubrir servidores con poca carga, si N es grande, aun interrogando de dos en dos, es fácil que no se acaben descubriendo máquinas con poca carga. Supongo que alguien podrá calcular el f(N) óptimo de acuerdo con algún criterio razonable de éxito.
