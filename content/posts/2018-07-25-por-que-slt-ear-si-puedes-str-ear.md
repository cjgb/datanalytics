---
author: Carlos J. Gil Bellosta
categories:
- estadística
- r
date: 2018-07-25 08:13:42+00:00
lastmod: '2026-01-03'
related:
- 2018-11-05-cuatro-paquetes-interesantes-de-r.md
- 2017-12-19-mezcolanza-de-inla-a-gam-pasando-por-la-frenologia.md
- 2024-03-11-cortos-01.md
- 2024-04-17-cortos.md
- 2016-11-16-detras-de-la-deteccion-de-anomalias-en-series-temporales.md
tags:
- paquetes
- r
- series temporales
- stl
- estacionalidad
title: ¿Por que slt-ear si puedes stR-ear?
url: /2018/07/25/por-que-slt-ear-si-puedes-str-ear/
---

La función `stl` (véase [aquí]/2018/07/23/suicidios-crisis-y-cambios-de-regimen-en-series-temporales/) un ejemplo de su uso) es fundamental en el estudio de las series temporales con R. Pero tiene sus limitaciones.

El paquete [`stR`](https://cran.r-project.org/web/packages/stR/vignettes/stRvignette.html) la extiende y permite, entre otras cosas, introducir distintos tipos de estacionalidades (p.e., anuales y semanales). ¡Sea bienvenido!
