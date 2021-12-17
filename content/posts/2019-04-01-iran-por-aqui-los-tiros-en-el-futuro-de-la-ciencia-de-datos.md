---
author: Carlos J. Gil Bellosta
date: 2019-04-01 09:13:27+00:00
draft: false
title: ¿Irán por aquí los tiros en el futuro de la "ciencia de datos"?

url: /2019/04/01/iran-por-aqui-los-tiros-en-el-futuro-de-la-ciencia-de-datos/
categories:
- artículos
- ciencia de datos
- computación
- estadística
tags:
- big data
- estadística bayesiana
---




Para muchos, el futuro de la llamada ciencia de datos seguirá la estela dejada por







![](/wp-uploads/2019/03/theverge.jpg)








y sus continuadores usando cosas _deep_. Pero a la vez, sin tanto estruendo y con una mucho menor cobertura mediática, otros están trazando una ruta alternativa que ilustran artículos como _[Bayes and Big Data: The Consensus Monte Carlo Algorithm](https://ai.google/research/pubs/pub41849)_ (atención todos a lo que hace uno de sus coautores, [Steven L. Scott](https://sites.google.com/view/stevethebayesian/), que convierte en oro todo lo que toca). Como abrebocas, su resumen (con mi subrayado):







<blockquote>A useful definition of ``big data'' is data that is too big to comfortably process on a single machine, either because of processor, memory, or disk bottlenecks. Graphics processing units can alleviate the processor bottleneck, but memory or disk bottlenecks can only be eliminated by splitting data across multiple machines. Communication between large numbers of machines is expensive (regardless of the amount of data being communicated), so there is a need for algorithms that perform distributed approximate Bayesian analyses with minimal communication. Consensus Monte Carlo operates by **running a separate Monte Carlo algorithm on each machine, and then averaging individual Monte Carlo draws across machines**. Depending on the model, the resulting draws can be nearly indistinguishable from the draws that would have been obtained by running a single machine algorithm for a very long time. Examples of consensus Monte Carlo are shown for simple models where single-machine solutions are available, for large single-layer hierarchical models, and for Bayesian additive regression trees (BART).
>
> </blockquote>



