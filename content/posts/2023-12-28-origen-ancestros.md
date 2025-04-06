---
author: Carlos J. Gil Bellosta
categories:
- probabilidad
date: 2023-12-28
draft: false
lastmod: '2025-04-06T18:50:20.949494'
related:
- 2014-07-28-60-generaciones.md
- 2022-09-06-problema-estadistica-frecuencias-naturales.md
- 2011-01-10-c2bfuna-caida-demasiado-drastica-de-la-varianza.md
- 2015-06-11-cuanta-gente-ha-habido-sobre-la-faz-de-la-tierra.md
- 2011-04-01-a-esa-gente-le-habia-hecho-falta-un-matematico.md
tags:
- probabilidad
- genética
title: ¿Cuántos ancestros tenemos realmente? ¿De dónde vienen?
url: /2023/12/28/origen-ancestros/
---

Es oportuno revisar la entrada
[_Where did your genetic ancestors come from?_](https://gcbias.org/2017/12/19/1628/),
que discute la cuestión de cuántos ancestros tenemos _realmente_ (respuesta breve: muchos menos de los que nos hace creer la cuenta que echamos en la servilleta), su diversidad geográfica (posiblemente, mucho menor de la esperada), etc.

El quid de la cuestión radica en la distinción entre ancestros genealógicos y genéticos. Todos tenemos $2^n$ ancestros genealógicos ---supuesto que no haya solapamientos--- en nuestra $n$-ésima generación precedente, pero solo son propiamente ancestros genéticos una pequeña fracción de ellos (cuando $n$ es lo suficientemente grande). En concreto,

![](/wp-uploads/2024/num_genetic_ancs.png#center)

¿Cuál es el motivo? Que nuestro ADN no es infinitamente divisible. Está, como la física cuando uno profundiza hacia lo atómico, _cuantizado_. Así, cabe esperar que en nuestro ADN solo queden trazas de la mitad de los 1024 ancestros teóricos que tuvimos hace diez generaciones. Dicho recurriendo a una alegoría probabilística muy inexacta y discutible, la distribución que rige la cantidad de material genético que heredamos de nuestros ancestos tiene más que ver con una Poisson que con una beta. Que, desde luego, tiene peso en el _estado absorbente_ cero.