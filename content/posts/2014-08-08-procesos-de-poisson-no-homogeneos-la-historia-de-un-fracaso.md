---
author: Carlos J. Gil Bellosta
date: 2014-08-08 07:13:03+00:00
draft: false
title: 'Procesos de Poisson no homogéneos: la historia de un fracaso'

url: /2014/08/08/procesos-de-poisson-no-homogeneos-la-historia-de-un-fracaso/
categories:
- estadística
tags:
- estadística
- party
- poisson
- r
---

Partamos el tiempo en, p.e., días y contemos una serie de eventos que suceden en ellos. Es posible que esos recuentos se distribuyan según un proceso de Poisson de parámetro $latex \lambda$, que es un valor que regula la intensidad.

Si los días son _homogéneos_, i.e., no hay variaciones de intensidad diaria, estimar $latex \lambda$ (por máxima verosimilitud), es tan fácil como calcular la media de los sucesos por día. Pero puede suceder que la intensidad varíe en el tiempo (p.e., se reduzca los fines de semana). O que fluctúe de cualquier manera. O que haya periodos de gran intensidad y otros de calma. Es decir, que el proceso no sea homogéneo y que $latex \lambda$ varíe en el tiempo.

Estos días me he encontrado con la necesidad de estudiar si determinados procesos que bien pudieran ser de Poisson tienen periodos de alta intensidad. Y detectarlos, claro.

Hay algunos procedimientos para hacerlo. Sin ir más lejos, véanse las referencias de [esto](http://en.wikipedia.org/wiki/Inhomogeneous_Poisson_process). Pero he querido ser original y quiero compartir con mis lectores mi fracaso.

Lo que he hecho se parece mucho a

{{< highlight R >}}
library(<a href="http://inside-r.org/packages/cran/party">party)

enes <- c(rpois(10, 7), rpois(20, 1), rpois(10, 5))
fechas <- 1:length(enes)

datos <- data.frame(enes = enes, fechas = fechas)

modelo <- mob(enes ~ 1 | fechas, data = datos, family = poisson(),
                control = mob_control(bonferroni = FALSE))
{{< / highlight >}}

que es algo que cualquiera que lea la documentación de las funciones empleadas podría jurar y perjurar que tendría que funcionar. Y lo hace sí, salvo que `plot(modelo)` no funciona (¿_bug_?). Pero `mob` parece ser demasiado poco sensible.

Sustituyendo arriba la línea relevante por algo como

{{< highlight R >}}
enes <- c(rpois(10, 70), rpois(20, 1), rpois(100, 50))
{{< / highlight >}}

para obtener unas zonas muy claramente definidas... pues sí, las detecta. Pero mis señales no son tan manifiestas.

En definitiva, el subterfugio/ocurrencia no me va a ser útil. Pero tal vez a otro sí.
