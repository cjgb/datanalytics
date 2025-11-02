---
author: Carlos J. Gil Bellosta
categories:
- estadística
date: 2023-02-07
lastmod: '2025-04-06T18:57:28.784290'
related:
- 2023-01-18-modelo-poisson-numpyro.md
- 2022-07-26-hueco-termico.md
- 2022-09-08-regresion-perdida-asimetrica.md
- 2024-10-10-elbo.md
- 2023-10-19-errores-chatgpt.md
tags:
- python
- numpyro
- modelos bayesianos
- predicción
- mercados de predicciones
- hypermind
title: Ajuste de modelos lineales y predicción de valores con numpyro
url: /2023/02/07/modelo-lineal-prediccion-numpyro/
---

Una de mis aficiones más excusables es la de participar en el _mercado de predicciones_ de Hypermind. Una de las preguntas que se suele plantear anualmente ---y en la que, gracias a apostar contra el común/apocalíptico sentir, logré _pingües beneficios_ el año pasado--- tiene que ver con cuándo nos vamos a morir todos. De otra manera:

![](/img/2023/hypermind-arctic-00.png#center)

Este año también quiero participar, pero como no sabía por dónde empezar, he bajado los datos. En su perspectiva más relevante, tienen este aspecto:

![](/img/2023/hypermind-arctic-01.png#center)

Así que se me ha ocurrido ajustar una regresión lineal a esos datos y ver qué pinta pueden tener las predicciones del año que corre.

[_**Nota innecesaria:** Obviamente, el modelo linea no puede ser correcto o en 1000 años la capa de hielo del ártico tendría una superficie negativa. Pero sabemos qué son y para qué sirven los modelos, ¿no?_]

Por no aburrir, he subido los detalles [aquí](https://github.com/cjgb/datanalytics_code/blob/main/missing_data_prediction/missing_data_prediction.ipynb), pero rescato la parte, tal vez,  más importante:

{{< highlight python >}}
def curve_fit(year, value):
    a = numpyro.sample("a", dist.Normal(5.5, 2))
    b = numpyro.sample("b", dist.HalfNormal(1))
    σ = numpyro.sample("σ", dist.HalfNormal(1))

    with numpyro.plate("lm", len(year)):
        numpyro.sample("obs", dist.Normal(a - b * year, σ), obs = value)

    v2023 = numpyro.sample("v2023", dist.Normal(a - b * 23, σ))
{{< / highlight >}}

Dos notas al respecto:

- A los años les he restado 2000 para que _el cero_ quede como a mitad de la serie. Y también para irritar a los neuróticos que normalizan las equis porque lo leyeron en un libro muy de fiar.
- He introducido prioris ligeramente informativas. Entre la información metida _porque yo lo valgo_ está la tendencia negativa de la serie.

Del resultado he rescatado la distribución de la variable `v2023`, que tiene esta pinta:

![](/img/2023/hypermind-arctic-02.png#center)

Le he añadido los valores correspondientes al mínimo histórico y el valor del 2022. El resto son todo corolarios.

Espero no tener que arrepentirme de esta entrada allá para fines de septiembre.

Y sí, es posible que actualice esta entrada en unas semanas conforme avance el año y vea cómo utilizar la situación _presente_ para recalibrar las probabilidades.