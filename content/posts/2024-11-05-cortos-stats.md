---
author: Carlos J. Gil Bellosta
categories:
- cortos
date: 2024-11-05
lastmod: '2025-04-06T18:44:55.610916'
related:
- 2024-07-03-cortos-stats.md
- 2024-07-10-cortos-stats.md
- 2024-10-10-elbo.md
- 2016-02-29-los-tres-contraargumentos-habituales.md
- 2025-02-11-cortos-llms.md
tags:
- estadísica
- stan
- gpus
- bmi
- left
- redondeo
title: Un argumento en contra del redondeo y cuatro breves asuntos más
url: /2024/11/05/cortos-estadistica
---

1. Ahora se pueden correr Stan en el navegador (vía WebAssembly) [aquí](https://stan-playground.flatironinstitute.org/).
1. En [este artículo relacionado](https://statmodeling.stat.columbia.edu/2024/10/29/what-makes-an-mcmc-sampler-gpu-friendly/) se preguntan sobre la problemática relación entre MCMC y las GPUs. La respuesta es, esencialmente, que no: el MCMC es iterativo y no se presta al _paradigma SIMD_ (_single instruction, multiple data_). Los únicos casos en los que he visto alguna ganancia son esos ---rarísimos--- en los que el modelo involucra algún tipo de red neuronal que sí que puede aprovechar el paralelismo.
1. En [este artículo](https://www.johndcook.com/blog/2024/09/07/body-roundness-index/), John D. Cook se suma los críticos del BMI ---que no es novedad--- y sugiere reemplazarlo ---esto sí--- por algún tipo de índice de redondez (del cuerpo del sujeto).
1. Un problema de los [LEFTs](/2024/02/29/letf/) es que la volatilidad diaria socava gravemente su rentabilidad. Para evitar ese problema, se han lanzado [LEFTs que _cierran_ semanal o mensualmente](https://www.prnewswire.com/news-releases/tradr-etfs-transforms-leveraged-trading-by-launching-industrys-first-monthly-and-weekly-reset-etfs-302236554.html).
1. Una recomendación habitual es evitar la sobreprecisión en los números publicados (p.e., $p = 0.0421942). Sin embargo, en [_Please, show lots of digits_](https://dynomight.net/digits/) argumenta en contra: esos números no redondeados aportan información adicional que puede permitir realizar ingeniería inversa y revelar cifras y procedimientos no explícitamente mostrados en los artículos.
