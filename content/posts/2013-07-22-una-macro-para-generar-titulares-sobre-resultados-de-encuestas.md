---
author: Carlos J. Gil Bellosta
categories:
- estadística
date: 2013-07-22 07:28:00+00:00
draft: false
lastmod: '2025-04-06T18:49:07.682301'
related:
- 2013-02-11-voy-a-partir-una-lanza-a-favor-de-rosell-a-cuenta-de-la-epa.md
- 2012-10-08-las-cosquillas-de-los-sondeos-electorales.md
- 2015-09-16-asi-no-o-los-sesgos-de-las-encuestas-de-respuesta-voluntaria.md
- 2022-05-10-encuestas-electorales-cualitativas.md
- 2016-06-29-por-una-vez-accedo-a-hablar-de-algo-de-lo-que-no-se.md
tags:
- encuestas
- estadística
- periodismo de datos
title: Una macro para generar titulares sobre resultados de encuestas
url: /2013/07/22/una-macro-para-generar-titulares-sobre-resultados-de-encuestas/
---

Tropecé el otro día con [un artículo en el NYT](http://www.nytimes.com/2013/07/13/world/europe/spains-real-crisis-is-a-leadership-void-analysts-say.html) del que reproduzco (incluido el enlace) un párrafo:

>Only 23 percent of respondents would now vote for the Popular Party, according to [a telephone survey](http://blogs.elpais.com/metroscopia/2013/07/barometro-electoral-julio-2013.html) by Metroscopia, a pollster, and published by El País this month. That is near the lowest level since Mr. Rajoy came to power in November 2011. Meanwhile, 86 percent of those surveyed said that they did not trust Mr. Rajoy. The survey was based on interviews with 1,000 adults and has a margin of sampling error of plus or minus 3 percentage points.

Me parece un ejemplo magnífico de cómo deberían resumirse en prensa los resultados de una encuesta por los siguientes motivos:


* Ni oculta ni relega a un pie de foto con letras minúsculas la información técnica relevante de la encuesta. Dicho de otra manera, no le falta el respeto al lector, lo considera un individuo medianamente inteligente y le hace saber que se trata de una entrevista telefónica, realizada a 1000 adultos y con margen de error dado.
* No incurre en la tontería (o vicio de la sobreprecisión) de la que tanto se pagan _los técnicos_: aburrir con decimales.
* Utiliza la fórmula correcta (nótese el uso del condicional): _según X, Y obtendría..._ Contrástese la redacción con este titular vergonzante: [_El PP pierde la mayoría absoluta en el gran feudo de Madrid_](http://politica.elpais.com/politica/2013/05/01/actualidad/1367434896_034563.html). (Y contrástese también ese último con otro del mismo medio, [_ERC ganaría ahora las elecciones en Cataluña_](http://ccaa.elpais.com/ccaa/2013/06/07/catalunya/1370586945_315190.html).)

Solo le faltaría indicar más explícitamente quién paga el estudio: solo dice que aparece publicado en El País. Curiosamente, esa información, la más relevante, aparece muy pocas veces en las fichas técnicas. Así que mi humilde propuesta para la redacción de titulares relativos a encuestas es la siguiente _macro_:

>Según un estudio financiado por `%sujeto1%`, `%sujeto2%` `%verbo_en_condicional%` `%complementos%`