---
author: Carlos J. Gil Bellosta
categories:
- estadística
date: 2018-07-17 08:13:10+00:00
draft: false
lastmod: '2025-04-06T18:58:50.962377'
related:
- 2016-03-03-mezclas-de-distribuciones-con-rstan.md
- 2015-06-25-diferencia-de-medias-a-la-bayesiana-con-salsa-de-stan.md
- 2019-01-08-modelos-de-conteos-con-sobredispersion-con-stan.md
- 2018-03-01-kriging-con-stan.md
- 2018-10-23-abc-2.md
tags:
- cursos
- estadística bayesiana
- stan
- mezclas
title: 'Curso de estadística aplicada con Stan: ejercicio 1'
url: /2018/07/17/curso-de-estadistica-aplicada-con-stan-ejercicio-1/
---

A primeros de julio impartí un [curso de estadística bayesiana aplicada con Stan](https://datanalytics.com/2018/05/09/curso-mio-de-estadistica-bayesiana-aplicada-con-stan-en-bcn/). Tengo que examinar a los alumnos y he aquí el primero de los ejercicios:

En un país, se extrae una muestra de 2000 hombres y mujeres con la siguiente distribución:

{{< highlight R >}}
men   <- 170 + 3 * rt(1000, 6)
women <- 160 + 2 * rt(1000, 5)
heights <- c(men, women)
{{< / highlight >}}


Ajusta una distribución (una mezcla de dos distribuciones de Student) usando los datos anteriores, i.e., `heights`. Puedes suponer conocidos:

* Los pesos de la mezcla (0.5) cada uno.
* Que los grados de libertad de las t's están entre 3 y 8 aproximadamente.
* Experimenta con otros tamaños muestrales y comenta los resultados obtenidos (y los tiempos de ejecución).

_**Nota:** este problema está motivado por una aplicación real: el ajuste de distribuciones de pérdida en banca y seguros. Típicamente, se mezclan dos distribuciones, una para la cola de la distribución y otra para el cuerpo. Hay técnicas frecuentistas (p.e., [EM](https://datanalytics.com/2017/03/20/em-duro-a-mano-y-para-humanos/)) para resolver estos problemas. Pero me parecen menos naturales y menos flexibles que la ruta 100% bayesiana._