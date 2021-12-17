---
author: Carlos J. Gil Bellosta
date: 2017-09-13 08:13:29+00:00
draft: false
title: Trucos cutrebayesianos

url: /2017/09/13/trucos-cutrebayesianos/
categories:
- consultoría
- estadística
tags:
- estadística
- estadística bayesiana
- estimación
---

**El contexto**

Cada día $latex i$ ocurren eventos de cierta naturaleza (transacciones, fallecimientos, infartos, etc.) que interesa contar.

**El problema**

El número de eventos $latex n_i$ que ocurren el día $latex i$ no se conoce el día $latex i$ sino que va siendo conocido progresivamente los días $latex i+1, \dots$. Pero hace falta una estimación de $latex n_i$ antes del fin del mundo.

**Los datos**




	  * La distribución de los $latex n_i$ (basados en el histórico).
	  * La proporción (probabilidad) $latex p_\Delta$ de eventos del día $latex i$ que se conocen el día $latex i+\Delta$.


**La solución prebayesiana**

$latex \hat{n}_{i+\Delta} = \frac{1}{p_\Delta} \sum_{j=1}^\Delta n_{ij}$

donde $latex n_ij$ es el número de eventos correspondientes al día $latex i$ notificados $latex j$ días después.

**El problema de la solución prebayesiana**

Si $latex p_1 \sim 0.01$ y un buen día $latex n_{i1}$ es inhabitualmente alto, se sobreestima $latex n_i$ salvajemente.

**El truco cutrebayesiano**

$latex \hat{n}_{i+\Delta} = (1-p_{i\Delta})\mu + \sum_{j=1}^\Delta n_{ij}$

donde $latex \mu$ es la media de la distribución de los $latex n_i$.

**Ejercicio**

¿Qué carajos tiene esto que ver con el reverendo Bayes?

