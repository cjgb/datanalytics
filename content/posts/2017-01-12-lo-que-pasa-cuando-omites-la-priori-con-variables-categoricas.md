---
author: Carlos J. Gil Bellosta
categories:
- r
date: 2017-01-12 08:13:32+00:00
draft: false
lastmod: '2025-04-06T19:03:18.644239'
related:
- 2023-09-07-problema-modelos-bayesianos-identicabilidad.md
- 2016-07-06-glms-con-prioris-casi-a-voluntad.md
- 2018-10-23-abc-2.md
- 2020-05-22-optimizacion-estocastica.md
- 2018-11-16-colinealidad-y-posterioris.md
tags:
- r
- stan
- stan
- variables categóricas
title: Lo que pasa cuando omites la priori con variables categóricas
url: /2017/01/12/lo-que-pasa-cuando-omites-la-priori-con-variables-categoricas/
---

Stan. Modelo multinivel. Variable categórica. Codificación con ceros y unos. Matriz. Coeficiente `vector[n_ccaa] Cccaa`. Sin _priori_.

Catástrofe:

![](/img/2017/01/coefs_sin_prior.png#center)

(Coeficientes hasta 15000. Sin tasa, con tiempo. Los valores desorbitados, en ceros de la `dummy`).

Priori.

{{< highlight R >}}
for (i in 1:n_ccaa)
    Cccaa[i] ~ cauchy(0, 20);
{{< / highlight >}}

¿Por qué no?

Tachán:

![](/img/2017/01/coefs_con_prior.png#center)


(¿Para qué verbos?)