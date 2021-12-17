---
author: Carlos J. Gil Bellosta
date: 2019-03-29 09:13:11+00:00
draft: false
title: Mi semilla

url: /2019/03/29/mi-semilla/
categories:
- r
tags:
- r
- semilla
---

<code>suppressWarnings(set.seed(exp(pi * complex(imaginary = 1))))
    runif(1)
    #[1] 0.4866672
    set.seed(-1)
    runif(1)
    #[1] 0.4866672</code>






**Coda:** ¿De qué si no creéis que iba esto?



