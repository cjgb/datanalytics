---
author: Carlos J. Gil Bellosta
categories:
- consultoría
- estadística
- r
date: 2019-04-05 09:13:37+00:00
draft: false
lastmod: '2025-04-06T19:10:20.393439'
related:
- 2014-08-11-procesos-puntuales-una-primera-aproximacion.md
- 2014-08-08-procesos-de-poisson-no-homogeneos-la-historia-de-un-fracaso.md
- 2014-09-22-la-diapositiva-perdida-version-algo-mas-extendida.md
- 2019-01-08-modelos-de-conteos-con-sobredispersion-con-stan.md
- 2012-07-27-a-los-datos-mismos.md
tags:
- paquetes
- poisson
- procesos puntuales
- r
title: Simulación de procesos de Poisson no homogéneos y autoexcitados
url: /2019/04/05/simulacion-de-procesos-de-poisson-no-homogeneos-y-autoexcitados/
---

Fueron mis modelos favoritos un tiempo, cuando modelaba visitas y revisitas de usuarios a cierto malhadado portal.

Si las visitas fuesen _aleatorias_ (en cierto sentido), tendrían un aspecto no muy distinto del que se obtiene haciendo

{{< highlight R >}}
library(IHSEP)

suppressWarnings(set.seed(exp(pi * complex(imaginary = 1))))

tms <- simPois(int = function(x) .1, cens = 1000)
hist(tms, breaks = 100, main = "Proceso homogéneo de Poisson",
      xlab = "", ylab = "frecuencia")
{{< / highlight >}}

Es decir,

![](/img/2019/04/proceso_homogeneo.png#center)

o bien una distribución uniforme en el tiempo. Pero bien puede ocurrir que una visita incremente la probabilidad de otra inmediatamente después, por lo que las visitas tenderían a arracimarse en determinados momentos. Con el paquete `[IHSEP](https://cran.r-project.org/package=IHSEP)` de R pueden simularse (y ajustarse) este tipo de modelos. Por ejemplo,

{{< highlight R >}}
res <- simHawkes1(nu = function(x) .1,
    g = function(x) .5 * exp(-x), cens =1000)
hist(unlist(res), breaks = 100,
main = "Proceso autoexcitado",
      xlab = "", ylab = "frecuencia")
{{< / highlight >}}

proporciona

![](/img/2019/04/proceso_autoexcitado.png#center)

que es más realista. La magia es obra de la función `g`, que incrementa la probabilidad de nuevos eventos después de que ocurra alguno, aunque la estela que dejan decae exponencialmente (por construcción).

**Notas:**

* Los procesos anteriores tienen una base homogénea (la función de intensidad base se ha definido igual a .1), pero podría utilizarse una función de t arbitraria que los convertiría en procesos no homogéneos.
* El paquete también proporciona mecanismos para estimar tanto la función base como la de autoexcitación. Que no sé qué tal funcionarán. Y si lo harán en tiempo y forma.