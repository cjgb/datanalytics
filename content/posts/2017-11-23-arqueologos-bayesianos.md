---
author: Carlos J. Gil Bellosta
date: 2017-11-23 08:13:26+00:00
draft: false
title: Arqueólogos bayesianos

url: /2017/11/23/arqueologos-bayesianos/
categories:
- estadística
- r
tags:
- archeochron
- estadística bayesiana
- paquetes
- r
- arqueología
---

Se ve que hay arqueólogos bayesianos. Un problema con el que se encuentran es que tropiezan con cacharros antiguos y quieren estimar su antigüedad.

Así que prueban distintos métodos (¿químicos?), cada uno de los cuales con su precisión, y acaban recopilando una serie de estimaciones y errores. Obviamente, tienen que combinarlas de alguna manera.

El modelo más simple es

$$ M_i \sim N(\mu, \sigma_i)$$

donde $latex \mu$ es la antigüedad (desconocida) del artefacto y los $latex \sigma_i$ son las varianzas distintas de los distintos métodos de medida, que arrojan las estimaciones $latex M_i$.

Los hay más entretenidos, como


$$ M_{ij} \sim N(\mu_j, \sigma_{j(i)})$$
$$ \mu_j \sim(\mu, \lambda_j)$$

donde hay medidas repetidas (varios $latex i$) para cada uno de $latex j$ instrumentos de medida.

Y aún más para incluir la posibilidad de _outliers_, etc.

Para saber más, [esto](https://cran.r-project.org/web/packages/ArchaeoChron/index.html) y, sobre todo, [esto](https://hal.archives-ouvertes.fr/hal-01162404/document).

**Coda:** Este es otro de los problemas reales que no tengo muy claro cómo atacar con _deep lerning_, `xgboost`, etc.