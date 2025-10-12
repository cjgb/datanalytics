---
author: Carlos J. Gil Bellosta
categories:
- estadística
- r
date: 2014-06-10 07:28:17+00:00
draft: false
lastmod: '2025-04-06T19:06:23.695449'
related:
- 2023-09-19-curtosis-t-test.md
- 2021-02-25-sobre-sumas-de-cuadrados-de-normales-con-varianzas-desiguales.md
- 2017-04-12-experimentos-con-extremely-small-data-la-media-muestral-de-pocas-betas.md
- 2021-02-23-tres-teoremas-que-son-casi-ciertos.md
- 2015-06-25-diferencia-de-medias-a-la-bayesiana-con-salsa-de-stan.md
tags:
- chi cuadrado
- estadística
- r
- student
- t-test
title: A vueltas con el t-test
url: /2014/06/10/a-vueltas-con-el-t-test/
---

Me gustaría no tener que hacer más _t-tests_ en la vida, pero no va a ser el caso.

El problema al que me refiero le surgió a alguien en una galaxia lejana y, de alguna manera, me salpicó y me involucró. Es, simplificándolo mucho, el siguiente.

Tiene una muestra $X = x_1, \dots, x_n$ y quiere ver si la media es o no cero. ¿Solución de libro? El t-test. Pero le salen cosas raras e inesperadas. De ahí lo del salpicón.

La cosa es que la distribución de los $x_1, \dots, x_n$ no es para nada normal. Tiene todas las características que afean una distribución: larga cola, muchos valores igual a cero, etc.

Yo soy de la opinión de que el t-test no es aplicable. Aparte de por los consabidos motivos (falta de normalidad, etc.) por otros que me alejarían del asunto. Me gustaría, por ejemplo, indagar sobre el modelo que genera esos datos y ver cómo podría parametrizarlo. Pero esa discusión, reitero, es para otro día.

Pero alguien va y dice lo siguiente: fíjese Vd. que lo que hay en el numerador del estadístico del t-test, que viene a ser

$$ \sqrt{n} \frac{\mu_X}{\sigma_X}$$

es una media y, por tanto, aplicando el teorema central del límite (¿aplica?), lo que ve es una normal.

¡Puf! Vale, concedo que $\sqrt{n} \mu_X$ podría seguir una normal. Pero, ¿tiene el denominador una distribución que pueda parecerse a una chi-cuadrado con n-1 grados de libertad? Ni jarto de vino. El que quiera convencerse de ello, que ejecute

{{< highlight R >}}
foo <- function(n, m){
  res <- c(rep(0,n), abs(rcauchy(m)))
  var(res)
}
 
res <- replicate(10000, foo(1000, 10))
qqplot(res, rchisq(10000, 1010))
abline(a=0, b=1)
{{< / highlight >}}

En fin, he visto argumentos variados en pro de la prueba de Student. Pero el de que la normalidad es irrelevante (al menos, cuando n es bastante grande) porque el teorema central del límite aplica... me tiene descolocado.