---
author: Carlos J. Gil Bellosta
categories:
- consultoría
- estadística
date: 2017-09-13 08:13:29+00:00
draft: false
lastmod: '2025-04-06T19:05:17.729503'
related:
- 2019-07-03-modelizacion-de-retrasos-una-aplicacion-del-analisis-de-supervivencia.md
- 2011-01-10-c2bfuna-caida-demasiado-drastica-de-la-varianza.md
- 2014-08-11-procesos-puntuales-una-primera-aproximacion.md
- 2024-12-05-beta-binomial-deriva.md
- 2013-05-16-el-error-en-las-encuestas-cuentas-en-una-servilleta.md
tags:
- estadística
- estadística bayesiana
- estimación
title: Trucos cutrebayesianos
url: /2017/09/13/trucos-cutrebayesianos/
---

**El contexto**

Cada día $i$ ocurren eventos de cierta naturaleza (transacciones, fallecimientos, infartos, etc.) que interesa contar.

**El problema**

El número de eventos $n_i$ que ocurren el día $i$ no se conoce el día $i$ sino que va siendo conocido progresivamente los días $i+1, \dots$. Pero hace falta una estimación de $n_i$ antes del fin del mundo.

**Los datos**

* La distribución de los $n_i$ (basados en el histórico).
* La proporción (probabilidad) $p_\Delta$ de eventos del día $i$ que se conocen el día $i+\Delta$.

**La solución prebayesiana**

Consiste en estimar $\hat{n}_{i+\Delta}$ como

$$\frac{1}{p_\Delta} \sum_{j=1}^\Delta n_{ij}$$

donde $n_ij$ es el número de eventos correspondientes al día $i$ notificados $j$ días después.

**El problema de la solución prebayesiana**

Si $p_1 \sim 0.01$ y un buen día $n_{i1}$ es inhabitualmente alto, se sobreestima $n_i$ salvajemente.

**El truco cutrebayesiano**

Consiste en usar como estimación

$$(1-p_{i\Delta})\mu + \sum_{j=1}^\Delta n_{ij}$$

donde $\mu$ es la media de la distribución de los $n_i$.

**Ejercicio**

¿Qué carajos tiene esto que ver con el reverendo Bayes?