---
-tags:
- estadística bayesiana
- bayesianismo
- epistemología
author: Carlos J. Gil Bellosta
categories:
- estadística bayesiana
date: 2025-06-05
description: El bayesianismo como instrumento epistemológico tiene problemas prácticos serios para integrar la deriva de la información.
lastmod: '2025-07-12T13:46:22.002727'
related:
- 2024-12-05-beta-binomial-deriva.md
- 2022-10-11-bayesianismo-frecuentismo-teoria-decision-03.md
- 2011-01-10-c2bfuna-caida-demasiado-drastica-de-la-varianza.md
- 2016-02-04-y-termino-con-lo-de-los-intervalos.md
- 2022-10-04-bayesianismo-frecuentismo-teoria-decision-01.md
title: La gestión de la deriva como problema fundamental del bayesianismo
url: /2025/06/05/problemas-bayesianismo-epistemologia/
---

Esta entrada no versa propiamente sobre estadística bayesiana (aunque también) sino sobre el bayesianismo entendido ---exageradamente, a veces--- como la columna vertebral de la epistemología. De acuerdo con tal visión, solo podemos conocer las cosas ---concedido: no todas--- con cierto grado de certeza y tanto este conocimiento como la incertidumbre van adaptándose a la información adicional que llega de acuerdo con un criterio: la regla de Bayes.

Pensemos en el ejemplo clásico del lanzamiento de monedas. No sabemos nada a priori sobre la probabilidad $p$ de cara, por lo que nuestro conocimiento sobre el asunto puede modelarse con una beta $B(1,1)$, una distribución uniforme sobre el intervalo $[0,1]$. Conforme observamos lanzamientos, de ser racionales, iremos modificando esa distribución. Si al cabo de $n$ lanzamientos observamos $c$ caras y $n-c$ cruces, nuestro conocimiento sobre $p$ estará recogido en una $B(c+1, n-c+1)$. Esa distribución estará _típicamente_ centrada alrededor del valor real de $p$ y tendrá una dispersión que decrecerá con $n$. (En otra versión, hay un primer conjunto de datos, se obtiene una posteriori y dicha posteriori se convierte en la priori de un análisis ulterior cuando se observa un conjunto de datos adicional).

Pero, ¿y si la moneda tiene una deriva y $p$ varía con el tiempo? Sucederán dos cosas:
- La media de la distribución tendrá un sesgo: no se actualizará en tiempo real hacia el valor _actual_ de $p$ sino que irá acercándose a él.
- Pero la dispersión seguirá decreciendo con el tiempo y el observador tendrá falsas garantías de certeza. De hecho, esa _certeza_ se ha construido a partir de información que fue cierta pero que ya no lo es.

Este problema tiene dos dimensiones: una práctica en el ejercicio del análisis estadístico y otra más filosófica en tanto que afecta al principio bayesiano subyacente a la epistemología.

En la dimensión práctica, uno puede encontrar, en lugar de una moneda, la propensión de un cliente a adquirir un producto que se le ofrece. Esa propensión puede variar estacionalmente o ir decreciendo en el tiempo conforme el producto pasa de moda o es reemplazado por otro. Se está estimando una variable que varía con el tiempo y es tan importante actualizar los estimadores con la nueva información que entra como determinar cuál es la información caduca para ir descartándola. Es decir, no se puede aprender sobre la totalidad de la historia $x_1, \dots, x_n$ sino únicamente de una ventana $x_{n-w-1}, \dots, x_n$ de muy problemática longitud $w$.

En la dimensión epistemológica, quien quiera actuar racionalmente, tendrá que determinar ---y con criterios no bayesianos, obviamente--- cuál es la información pretérita que tiene que descartar para que su conocimiento actual de las cosas no resulte sesgado. Me tienta, lo reconozco, hacer referencia a asuntos de la actualidad política en España para ilustrar este punto, pero voy a abstenerme para evitar _clicks_ que ni quiero ni necesito.
