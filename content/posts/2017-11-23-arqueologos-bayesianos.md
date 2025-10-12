---
author: Carlos J. Gil Bellosta
categories:
- estadística
- r
date: 2017-11-23 08:13:26+00:00
draft: false
lastmod: '2025-04-06T19:00:32.280312'
related:
- 2023-09-07-problema-modelos-bayesianos-identicabilidad.md
- 2016-01-18-el-problema-de-los-tanques-alemanes-y-de-la-maxima-verosimilitud-esquinada.md
- 2014-10-10-bootstrap-bayesiano.md
- 2022-09-13-errores-cierto-tipo-encuestas.md
- 2017-09-13-trucos-cutrebayesianos.md
tags:
- archeochron
- estadística bayesiana
- paquetes
- r
- arqueología
title: Arqueólogos bayesianos
url: /2017/11/23/arqueologos-bayesianos/
---

Se ve que hay arqueólogos bayesianos. Un problema con el que se encuentran es que tropiezan con cacharros antiguos y quieren estimar su antigüedad.

Así que prueban distintos métodos (¿químicos?), cada uno de los cuales con su precisión, y acaban recopilando una serie de estimaciones y errores. Obviamente, tienen que combinarlas de alguna manera.

El modelo más simple es

$$ M_i \sim N(\mu, \sigma_i)$$

donde $\mu$ es la antigüedad (desconocida) del artefacto y los $\sigma_i$ son las varianzas distintas de los distintos métodos de medida, que arrojan las estimaciones $M_i$.

Los hay más entretenidos, como


$$ M_{ij} \sim N(\mu_j, \sigma_{j(i)})$$
$$ \mu_j \sim(\mu, \lambda_j)$$

donde hay medidas repetidas (varios $i$) para cada uno de $j$ instrumentos de medida.

Y aún más para incluir la posibilidad de _outliers_, etc.

Para saber más, [esto](https://cran.r-project.org/web/packages/ArchaeoChron/index.html) y, sobre todo, [esto](https://hal.archives-ouvertes.fr/hal-01162404/document).

**Coda:** Este es otro de los problemas reales que no tengo muy claro cómo atacar con _deep lerning_, `xgboost`, etc.