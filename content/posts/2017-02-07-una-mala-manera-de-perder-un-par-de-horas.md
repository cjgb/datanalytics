---
author: Carlos J. Gil Bellosta
date: 2017-02-07 08:13:50+00:00
draft: false
title: Una mala manera de perder un par de horas

url: /2017/02/07/una-mala-manera-de-perder-un-par-de-horas/
categories:
- r
tags:
- bug
- r
---

Es esta:




    156.67 * 100
    # 15667
    as.integer(156.67 * 100)
    #15666




Claro, hay que leer `?as.integer` para enterarte de que, en realidad, la función que quieres usar es `round`.

Una mala manera de perder un par de horas.