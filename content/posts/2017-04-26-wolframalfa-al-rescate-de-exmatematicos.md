---
author: Carlos J. Gil Bellosta
categories:
- estadística
date: 2017-04-26 08:13:37+00:00
draft: false
lastmod: '2025-04-06T19:07:40.091673'
related:
- 2015-05-05-intervalos-de-credibilidad-para-la-beta-una-alternativa.md
- 2017-10-16-modelos-no-lineales-directos-e-inversos.md
- 2010-09-04-paquetes-estadisticos-una-anecdota-sin-moraleja.md
- 2015-01-14-rarezas-estadistica-algebraica.md
- 2020-11-20-distancias-iv-la-solucion-rapida-y-sucia.md
tags:
- beta
- ecuaciones
- matemáticas
- wolfram
title: WolframAlfa al rescate de exmatemáticos
url: /2017/04/26/wolframalfa-al-rescate-de-exmatematicos/
---

Tengo el sistema


$$ m = \frac{a}{a+b}$$
$$ v = \frac{ab}{(a+b)^2 (a+b+1)}$$

en los que alguien descubrirá cosas relativas a la [distribución beta](https://en.wikipedia.org/wiki/Beta_distribution).

Interesa despejar $latex a$ y $latex b$. Pero solo soy un exmatemático perezoso, disléxico y con déficit de tiempo y atención. Así que [tacacata](https://www.wolframalpha.com/input/?i=x+%2F(x%2By)+%3D+m,+x*y+%2F((x%2By)*(x%2By)+*(x+%2B+y+%2B1))+%3D+v) y...


$$ a = \frac{-m^3 + m^2 - mv}{v}$$
$$ b = \frac{m^3 - 2m^2 + mv + m -v}{v}$$