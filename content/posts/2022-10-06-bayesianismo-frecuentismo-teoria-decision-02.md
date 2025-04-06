---
author: Carlos J. Gil Bellosta
categories:
- estadística
date: 2022-10-06
lastmod: '2025-04-06T19:01:04.044377'
related:
- 2022-10-11-bayesianismo-frecuentismo-teoria-decision-03.md
- 2022-10-13-bayesianismo-frecuentismo-teoria-decision-04.md
- 2022-10-04-bayesianismo-frecuentismo-teoria-decision-01.md
- 2016-02-04-y-termino-con-lo-de-los-intervalos.md
- 2023-09-07-problema-modelos-bayesianos-identicabilidad.md
tags:
- teoría de la decisión
- frecuentismo
- bayesianismo
title: Bayesianismo y frecuentismo bajo la óptica de la teoría de la decisión, II
url: /2022/10/06/bayesianismo-frecuentismo-teoria-decision-02/
---

_[Esta es la segunda de una serie de tres o cuatro entradas sobre el tema que se anuncia en el título.]_

Terminó la [primera entrada](/2022/10/04/bayesianismo-frecuentismo-teoria-decision-01/)
de la serie reconociendo que aún no se había entrado en materia estadística, que para ello habría que hablar de datos. Y, en efecto, la estadística principia cuando, por decirlo de manera sugerente aunque breve e imprecisa, $\theta$ _genera_ unos datos $X$ que proporcionan _pistas_ sobre su naturaleza.

En particular, se obtienen unos datos $X \sim F(\theta)$ que pueden ser usados en la estimación de $\theta$, es decir, que $\hat{\theta}$ es función de $X$ (y, posiblemente, de más cosas). Por fijar ideas, ahora $\theta$ ya no es un valor sino tal vez un _procedimiento_ (p.e., tomar la media de los valores $X$) y la expresión

$$L(\hat{\theta}) = E_\theta[L(\theta, \hat{\theta})] = \int_\theta L(\theta, \hat{\theta}) p(\theta) d\theta$$

de la entrada anterior se convierte sea en

$$L(\hat{\theta}) = E_\theta[E_X[L(\theta, \hat{\theta})]]$$

o en

$$L(\hat{\theta}) = \int_\theta \int_X L(\theta, \hat{\theta}) p(X | \theta) p(\theta) dX d\theta,$$

cuyo mínimo he visto llamar en alguna ocasión _error de Bayes_ (aunque en su interpretación más habitual es otra cosa; y aunque en algunos casos, como los que veremos, ambas definiciones coinciden).

La peculiar manera en la que se resuelvan el anterior problema de minimización da lugar a las dos grandes perspectivas dentro de la estadística (y explica, además, por qué en cierto sentido solo puede haber dos; aunque también cómo y por qué pueden surgir perspectivas híbridas, tipo Bayes objetivo, los modelos de _efectos aleatorios_, etc.), la frecuentista y la bayesiana.