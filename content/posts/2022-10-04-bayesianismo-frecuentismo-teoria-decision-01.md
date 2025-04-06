---
author: Carlos J. Gil Bellosta
categories:
- estadística
date: 2022-10-04
lastmod: '2025-04-06T18:51:03.193490'
related:
- 2022-10-11-bayesianismo-frecuentismo-teoria-decision-03.md
- 2022-10-06-bayesianismo-frecuentismo-teoria-decision-02.md
- 2022-10-13-bayesianismo-frecuentismo-teoria-decision-04.md
- 2016-02-04-y-termino-con-lo-de-los-intervalos.md
- 2018-10-10-un-resultado-probabilistico-contraintuitivo-parte-i.md
tags:
- teoría de la decisión
- frecuentismo
- bayesianismo
title: Bayesianismo y frecuentismo bajo la óptica de la teoría de la decisión, I
url: /2022/10/04/bayesianismo-frecuentismo-teoria-decision-01/
---

_[Esta es la primera de una serie de tres o cuatro entradas sobre el tema que se anuncia en el título.]_

$\theta$ es un valor desconocido. Por algún motivo, necesitamos encontrar un valor $\hat{\theta}$ ---que podríamos llamar de cualquier manera, pero que, por lo que sigue, será podemos convenir en denominar _estimación de_ $\theta$--- tal que minimicemos una determinada función de error

$$L(\theta, \hat{\theta}).$$

Por fijar ideas, un ejemplo: alguien nos puede haber dicho que ha pensado un número (entero) entre el 1 y el 10, $\theta$ y que nos dará un premio si lo acertamos, es decir, si proporcionamos un $\hat{\theta}$ y resulta que $\theta = \hat{\theta}$. Una función de error aplicable sería:

* $L(a, a) = 0$
* $L(a, b) = 1$ si $a \ne b$.

O podría darnos un premio proporcional a la cercanía entre $\theta$ y $\hat{\theta}$, en cuyo caso podría definirse $L(a, b)= |a - b|$.

Etc.

La pregunta entonces es: ¿cómo elegir $\hat{\theta}$? Hay varias aproximaciones al problema: minimizar la pérdida máxima, maximizar la pérdida mínima, etc. Pero en esta entrada y las que siguen se va a optar por una mucho más polémica de lo que podría parecer en un principio: minimizar la pérdida media. Es decir, se va a suponer que $\theta$ tiene una determinada distribución de probabilidad y que $\hat{\theta}$ se va a elegir como el mínimo de

$$L(\hat{\theta}) = E_\theta[L(\theta, \hat{\theta})] = \int_\theta L(\theta, \hat{\theta}) p(\theta) d\theta.$$

El planteamiento, en principio inocente anterior, es polémico porque, como se verá y por si alguien no la ha reconocido ya, $p(\theta)$ acabará indentificándose como la _priori_ de $\theta$ y habrá quien entre en distingos acerca de si es o no subjetiva, etc. Lo de siempre. Pero en esta serie de entradas dejaremos esa polémica aparcada a un lado, reconociendo que para los agentes que han de tomar la decisión (p.e., nuestro jugador), es dato positivo.

[Ni que decir tiene que, así planteadas las cosas, con la función de pérdida $L(a, b)= |a - b|$, el jugador haría bien en apostar en la mediana de los valores $1, 2, \dots, 10$.]

Y esta entrada termina señalando que, de momento, no se ha hablado para nada de estadística propiamente dicha. Se hará en la siguiente, cuando entren en juego los datos.