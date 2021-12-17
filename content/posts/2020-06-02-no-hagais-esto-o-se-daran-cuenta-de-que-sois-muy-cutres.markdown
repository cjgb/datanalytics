---
author: Carlos J. Gil Bellosta
date: 2020-06-02 09:13:00+00:00
draft: false
title: No hagáis esto o se darán cuenta de que sois muy cutres

url: /2020/06/02/no-hagais-esto-o-se-daran-cuenta-de-que-sois-muy-cutres/
categories:
- estadística
tags:
- estadística
- modelos
- p-valor
---




Lo que no hay que hacer nunca si no quieres que se enteren de que eres inmensamente cutre es escribir código en las líneas del siguiente seudocódigo:







    ...
    m = model(y ~ a + b + c)
    if (modelo.p_value(a) > .05)
        m = model(y ~ b + c)
    ...







¡No, no, no, no, **NO**!









