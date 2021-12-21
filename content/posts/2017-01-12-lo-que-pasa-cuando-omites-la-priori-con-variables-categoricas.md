---
author: Carlos J. Gil Bellosta
date: 2017-01-12 08:13:32+00:00
draft: false
title: Lo que pasa cuando omites la priori con variables categóricas

url: /2017/01/12/lo-que-pasa-cuando-omites-la-priori-con-variables-categoricas/
categories:
- r
tags:
- r
- stan
- stan
- variables categóricas
---

Stan. Modelo multinivel. Variable categórica. Codificación con ceros y unos. Matriz. Coeficiente `vector[n_ccaa] Cccaa`. Sin _priori_.

Catástrofe:

![](/wp-uploads/2017/01/coefs_sin_prior.png)


(Coeficientes hasta 15000. Sin tasa, con tiempo. Los valores desorbitados, en ceros de la `dummy`).

Priori.

`
for (i in 1:n_ccaa)
    Cccaa[i] ~ cauchy(0, 20);
`

¿Por qué no?

Tachán:

![](/wp-uploads/2017/01/coefs_con_prior.png)


(¿Para qué verbos?)
