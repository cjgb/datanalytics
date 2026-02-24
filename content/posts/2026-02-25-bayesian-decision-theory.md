---
author: Carlos J. Gil Bellosta
categories:
- estadística bayesiana
date: 2026-02-25
description: Un problema de la teoría de la decisión bayesiana usando NumPyro para
  medir la incertidumbre asociada a la decisión.
lastmod: '2026-02-24T10:35:49.473535'
related:
- 2024-10-10-elbo.md
- 2019-10-14-pyro.md
- 2023-07-25-tutorial-numpyro-1-modelos-probabilisticos.md
- 2023-07-04-modelo-3pl.md
- 2023-01-18-modelo-poisson-numpyro.md
tags:
- estadística bayesiana
- numpyro
- stan
title: Teoría de la decisión bayesiana con NumPyro
url: /2026/02/25/teoria-decision-bayesiana-numpyro/
---

Daniel Saunders tiene una entrada en su blog, [_A Bayesian decision theory workflow_](https://daniel-saunders-phil.github.io/imagination_machine/posts/a-bayesian-decision-theory-workflow/) en el que utiliza PyTensor para resolver un problema de teoría de la decisión bayesiana (¿es _realmente_ necesario el apellido?) y cuya solución es $3.291507977689139$. El maestro Juan Camilo Orduz ---de quien no se puede dejar nunca de aprender--- lo replicó en [_A Bayesian Decision Theory Workflow: Port to NumPyro_](https://juanitorduz.github.io/bayesian_decision_theory_workflow_numpyro/) para obtener $3.27928950$ como solución. Yo ahora recojo el guante y, por lo de bayesiano, llego a

![Bayesian Decision Analysis](/img/2026/bayesian-decision-analysis.png#center)

que trata de recoger la incertidumbre asociada a los parámetros en lugar de estimar un único valor central. Cosa que no se debe hacer nunca en consultoría, habida cuenta de la alergia que ineludiblemente sufren los clientes a la menor insinuación de incertidumbre. Carreras largas en consultoría correlacionan ---me atrevería a decir aún más, que son consecuencia necesaria--- de soluciones con tantos dígitos que no quepan en la diapositiva.

El problema que se trata de resolver es el siguiente:

- A partir de unos datos, reconstruir una curva de demanda (demanda en función del precio).
- Conocidos los costes, calcular el beneficio según el precio.
- Obtener el precio óptimo maximizando la función.

Si se asume que la demanda tiene la (inveterada) forma $d(p) = a b^p$ (donde $a$ y $b$ son parámetros desconocidos) y el coste por unidad es $c$, el precio óptimo es (derivando, etc.) $bc / (1 + b)$ (que, además, no depende de $a$).

La parte fundamental del código de Orduz es el bloque

```python
def model(price: Float[Array, " n"]) -> Float[Array, " n"]:
    mu_a = 100.0
    sigma_a = 40.0
    concentration_a = (sigma_a / mu_a) ** 2
    rate_a = mu_a / sigma_a**2

    a = numpyro.sample("a", dist.Gamma(concentration=concentration_a, rate=rate_a))
    b = numpyro.sample("b", dist.Normal(loc=0, scale=1))

    sigma = numpyro.sample("sigma", dist.HalfNormal(scale=1))
    mu = numpyro.deterministic("mu", a * price**b)
    numpyro.sample("sales", dist.Normal(loc=mu, scale=sigma))

    return mu
```

que define el modelo. A partir de él extrae muestras de $b$, toma su valor medio y, usando la fórmula de más arriba, el precio óptimo.

Pero es posible modificar el bloque anterior para que genere muestras del precio óptimo también:

```python
def model(price: Float[Array, " n"]) -> Float[Array, " n"]:
    mu_a = 100.0
    sigma_a = 40.0
    concentration_a = (sigma_a / mu_a) ** 2
    rate_a = mu_a / sigma_a**2

    a = numpyro.sample("a", dist.Gamma(concentration=concentration_a, rate=rate_a))
    b = numpyro.sample("b", dist.Normal(loc=0, scale=1))
    sigma = numpyro.sample("sigma", dist.HalfNormal(scale=1))

    mu = numpyro.deterministic("mu", a * price**b)

    optimal_price =numpyro.deterministic("optimal_price", (b * cost) / (1 + b))

    numpyro.sample("sales", dist.Normal(loc=mu, scale=sigma))

    return mu
```

La línea adicional

```python
optimal_price =numpyro.deterministic("optimal_price", (b * cost) / (1 + b))
```

permite extraer el precio óptimo asociado a cada estimación de $b$ (y, por lo tanto, construir la gráfica mostrada más arriba).

Más en general, es incluso posible sustituir la línea anterior por otra más genérica,

```python
optimal_price =numpyro.deterministic("optimal_price", find_optimal_price(a, b))
```

para aquellos casos en los que la fórmula del precio óptimo no sea analítica y fácilmente operativizable. E incluso podría utilizarse optimización numérica:

```python
def my_profit(price, a, b, cost = 0.3):
    sales = a * price**b
    return (price - cost) * sales

def find_optimal_price(a, b, cost=0.3):

    def neg_profit(price):
        return -my_profit(price, a, b, cost)

    result = minimize_scalar(neg_profit, bounds=(cost + 0.01, cost * 100), method='bounded')

    return result.x
```

Lo que pretende subrayar esta entrada es que al ajustar modelos usando PPLs, no es necesario conformarse con estimar los parámetros del modelo: es posible también generar lo que en la terminología de Stan se denominan `generated quantities`, variables derivadas de las del modelo que no están involucradas en su ajuste. Con la ventaja de que se obtienen estimaciones de su variabilidad a costa, a lo sumo, de un poco más de tiempo de cómputo.