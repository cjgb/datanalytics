---
author: Carlos J. Gil Bellosta
categories:
- estadística
- r
date: 2018-10-02 13:09:10+00:00
draft: false
lastmod: '2025-04-06T18:52:52.246105'
related:
- 2018-11-05-cuatro-paquetes-interesantes-de-r.md
- 2012-09-18-rdatamining-un-paquete-para-mineria-de-datos-con-r.md
- 2011-06-21-desarrollo-de-paquetes-con-r-i-c2bfpara-que.md
- 2020-05-22-optimizacion-estocastica.md
- 2020-12-02-analisis-de-eventos-recurrentes.md
tags:
- estadística bayesiana
- paquetes
- r
title: Planes de búsqueda y rescate con R
url: /2018/10/02/planes-de-busqueda-y-rescate-con-r/
---

Existe un paquete muy curioso en CRAN, [`rSARP`](https://cran.r-project.org/package=rSARP) para diseñar, optimizar y comunicar la evolución de planes de búsqueda y/o rescate (p.e., de un niño desaparecido en un monte).

Es particularmente interesante porque este tipo de problemas lo tienen todo: desde distribuciones a priori (sobre dónde es más probable encontrar lo que se busca) hasta la decisión final (explórese tanto aquí y tanto allá) teniendo en cuenta restricciones de tiempo y recursos.

Ninguno vamos a trabajar nunca en eso, pero [la viñeta del paquete](https://cran.r-project.org/web/packages/rSARP/vignettes/rSARP.pdf) está llena de ideas interesantes (así como de innumerables atentados a la ortotipografía, pero esa es otra cuestión).