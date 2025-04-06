---
author: Carlos J. Gil Bellosta
categories:
- estadística
date: 2023-01-18
lastmod: '2025-04-06T18:47:02.420102'
related:
- 2020-07-22-aun-mas-sobre-la-presunta-sobredispersion-en-modelos-de-poisson.md
- 2020-07-17-mas-sobre-la-presunta-sobredispersion-en-el-modelo-de-poisson.md
- 2019-01-08-modelos-de-conteos-con-sobredispersion-con-stan.md
- 2014-08-11-procesos-puntuales-una-primera-aproximacion.md
- 2023-01-24-funciones-enlace.md
tags:
- estadística
- python
- numpyro
- regresión de poisson
- glms
- splines
title: Una regresión de Poisson casi trivial con numpyro
url: /2023/01/18/regresion-poisson-numpyro/
---

El otro día hubo, parece, cierto interés por modelar la siguiente serie histórica de datos:

![](/wp-uploads/2023/exercise_numpyro_00_01.png#center)

Notas al respecto:

1. El eje horizontal representa años, pero da igual cuáles.
2. El eje vertical son números naturales, conteos de cosas, cuya naturaleza es poco relevante aquí, más allá de que se trata de eventos independientes.
3. Se especulaba con un posible cambio de tendencia debido a una intervención ocurrida en alguno de los años centrales de la serie.

Lo que se ve es el resultado del ajuste de un modelo de Poisson casi trivial. Es _casi trivial_ porque utiliza el tipo más simple de _splines_ para modelar una tendencia quebrada en un punto desconocido, uno de los parámetros del modelo.

Las bandas representan intervalos de confianza al 50% y 90% respectivamente. Que nos dan a entender que el ajuste no es demasiado allá dado que:

1. En el primer bloque de la serie parece haber más dispersión de la esperada.
2. Y menos, en el segundo.
3. Es raro que ningún punto quede fuera de las bandas.

Por referencia, el modelo descrito más arriba es:

{{< highlight python >}}
def model02(t, datos):
  knot = numpyro.sample("knot", dist.Normal(len(t)/2, len(t)/4))

  a0 = numpyro.sample("a0", dist.Normal(60, 5))
  b0 = numpyro.sample("b0", dist.Normal( 0, 1))

  b1 = numpyro.sample("b1", dist.Normal(0, 1))

  λ = a0 + t * b0 + jnp.where(t > knot, (t - knot) * b1, 0)

  with numpyro.plate("data", len(t)):
    numpyro.sample("obs", dist.Poisson(λ), obs=datos)
{{< / highlight >}}

Y la distribución a posteriori del _nudo_ en el cual se produce el cambio de tendencia postulado es

![](/wp-uploads/2023/exercise_numpyro_00_02.png#center)

El código completo puede verse [aquí](https://github.com/cjgb/datanalytics_code/blob/main/exercise_numpyro_00.ipynb).