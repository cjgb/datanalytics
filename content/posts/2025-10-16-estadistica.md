---
author: Carlos J. Gil Bellosta
categories:
- cortos
date: 2025-10-16
description: 'Descubre avances en modelado estadístico: ruido vs sobreajuste, falacia
  NAXALT, mala ciencia, censos fallidos y estadística bayesiana con JAX.'
lastmod: '2025-10-28T00:18:29.397957'
related:
- 2025-04-22-cortos-stats.md
- 2024-03-05-sobreajuste-modelos-bayesianos.md
- 2023-09-07-problema-modelos-bayesianos-identicabilidad.md
- 2022-03-03-error-sesgo-modelos-lineales.md
- 2025-03-11-cortos-causalidad.md
tags:
- estadística
- ridge
- regresión
- ruido
- censos
- epistemología
- hhm
- markov
- estadística bayesiana
- jax
- stan
- numpyro
title: Unas cuantas notas sobre estadística
url: /2025/10/16/cortos-estadiistica/
---

Uno de los _metaprincipios_ de la construcción de modelos estadísticos es que la calidad de los modelos es función de la cantidad de información que hay en los datos de entrenamiento. No existe el _bootstrap_ en el sentido etimológico del término: no puede uno levantarse en el aire tirando hacia arriba de los cordones de los zapatos. Pero al hilo de una noticia reciente, [Gelman discute si añadir ruido a los datos permite reducir el sobreajuste](https://statmodeling.stat.columbia.edu/2025/10/03/adding-noise-to-the-data-to-reduce-overfitting-how-does-that-work/). Además, en la discusión al respecto, alguien cita el artículo de 1995 [_Training with Noise is Equivalent to Tikhonov Regularization_](https://www.microsoft.com/en-us/research/wp-content/uploads/2016/02/bishop-tikhonov-nc-95.pdf), una especie de penalización en el tamaño de los coeficientes al modo de la regresión _ridge_.

Un artículo de Asterisk discute los [problemas existentes en muchos países para elaborar censos de población fiables](https://asteriskmag.com/issues/11/why-governments-cant-count). Otro más en la serie acerca de la decreciente calidad de las estadísticas públicas. Aunque en este caso afecte principalmente a países muy perfectibles.

La falacia NAXALT:

![](/img/2025/falacia-naxalt.jpeg#center)

Realmente no tiene tanto que ver con la estadística como con la epistemología (torcida de tanta gente), pero...

La figura

![](/img/2025/inverted-u.png#center)

está extraída de un artículo convenientemente titulado _Competition and Innovation: An Inverted-U Relationship_ coescrito por uno de los últimos agraciados por el premio Nobel. [Aquí](https://statmodeling.stat.columbia.edu/2025/10/15/questions-about-statistical-claims-in-paper-from-recent-nobel-prize-winners/) y, especialmente, [aquí](https://statmodeling.stat.columbia.edu/2025/10/21/reanalysis-of-that-nobel-prizewinning-study-of-patents-and-innovation/), se abunda sobre el asunto.

A una entrada de ya hace bastante tiempo de Gelman, [_No vehicles in the park_](https://statmodeling.stat.columbia.edu/2025/04/14/no-vehicles-in-the-park-a-multilevel-model-computing-saga/), se le puede sacar punta de muchas maneras. Por un lado, Gelman realiza un análisis completo de unos datos que, aparte de curiosos por su misma naturaleza, tienen algunas peculiaridades estadísticas interesantes. Luego, el texto detalla todas las idas y venidas estadísticas, todos los trucos que Gelman va incorporando a su análisis, todas las resistencias que estos le ofrecen y todas las contramedidas que toma para irlas solventando. Finalmente, produce cierto desasosiego: parte de los problemas a los que se enfrenta tienen un origen y una solución enteramente extraestadística y, hasta cierto punto, computacional. Nos recuerda cómo podemos estar haciendo todo correctamente desde el punto de vista estadístico y, aun así, metiendo la pata por una _minucia_ sintáctica. Bueno, realmente no es tal minucia: apunta a un problema que ocurre con cierta frecuencia y que no debería sorprender demasiado a quienes tienen experiencia en esos asuntos. Pero que nos invita a recordar que las herramientas estadísticas actuales no nos permiten desacoplarnos del nivel computacional inmediatamente inferior (como tal vez la medicina no puede desacoplarse de la biología y esta, a su vez, de la química).

Algún día tengo que sacar tiempo para estudiar las posibles aplicaciones de los artículos mencionados en [_Two New Preprints on Multilevel Hidden Markov Models_](https://jonashaslbeck.com//mlHMM_papers/) en las cosas que hago hoy en día.

Escribe Frank Harrell, en su libro _Regression Modeling Strategies_:

> Las relaciones entre las variables casi nunca son lineales [...]. Muchos de los que no han estudiado en profundidad los problemas del sesgo y la eficiencia creen que la presencia de relaciones no lineales se remedia tramificando las variables continuas en intervalos. Es lo más desastroso que pudiere hacerse.

Finalmente, unas cuantas notas sobre estadística bayesiana:
- [_7 reasons to use Bayesian inference!_](https://statmodeling.stat.columbia.edu/2025/10/11/7-reasons-to-use-bayesian-inference/), algunas de las cuales no son las habituales, como la posibilidad de ajustar modelos mucho más sofisticados de los que permite la estadística frecuentista de manera natural.
- [_Bayesian Thinking_](https://hbiostat.org/talks/bthink.html) contiene las diapositivas de una charla de Frank Harrell sobre (las partes más relevantes de) la historia y los fundamentos de la estadística bayesiana.
- [_It’s a JAX, JAX, JAX, JAX World_](https://statmodeling.stat.columbia.edu/2025/10/03/its-a-jax-jax-jax-jax-world/) trata sobre cómo construir lenguajes probabilísticos sobre plataformas que no sean JAX es nadar contracorriente. NumPyro se va a comer a Stan irremisiblemente.