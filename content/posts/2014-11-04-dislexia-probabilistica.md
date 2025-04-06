---
author: Carlos J. Gil Bellosta
categories:
- números
- probabilidad
date: 2014-11-04 07:13:14+00:00
draft: false
lastmod: '2025-04-06T18:56:17.244219'
related:
- 2015-12-30-por-que-el-empate-de-la-cup-es-mas-raro-de-lo-que-parece-y-de-lo-que-yo-mismo-digo.md
- 2013-02-11-voy-a-partir-una-lanza-a-favor-de-rosell-a-cuenta-de-la-epa.md
- 2012-10-08-las-cosquillas-de-los-sondeos-electorales.md
- 2016-06-29-por-una-vez-accedo-a-hablar-de-algo-de-lo-que-no-se.md
- 2013-05-16-el-error-en-las-encuestas-cuentas-en-una-servilleta.md
tags:
- estadística bayesiana
- falacias
- números
- podemos
- probabilidad
title: Dislexia probabilística
url: /2014/11/04/dislexia-probabilistica/
---

Esta entrada trata de cuadrados. Tales como estos

[![cuadros_separados](/wp-uploads/2014/11/cuadros_separados.png#center)
](/wp-uploads/2014/11/cuadros_separados.png#center)

Son dos cuadrados de area 10 y 2.

En realidad, mi entrada trata de una configuración de cuadrados solo marginalmente más complicada, esta:

[![cuadros_solapados](/wp-uploads/2014/11/cuadros_solapados.png#center)
](/wp-uploads/2014/11/cuadros_solapados.png#center)

Todo el mundo podría decir (y es cierto) que el área de la intersección de los cuadrados es el 3.3% de la del mayor y el 16.5% de la del menor. Son dos afirmaciones ambas ciertas y, por supuesto, compatibles.

Escrito de otra manera, es perfectamente posible que $latex P(A|B)=0.033$ y que $latex P(B|A)=0.165$.

Sin embargo, hay quienes parecen confundir $latex P(A|B)$ y $latex P(B|A)$. Verbigracia,

[![podemos_pp](/wp-uploads/2014/11/podemos_pp.png#center)
](/wp-uploads/2014/11/podemos_pp.png#center)

Hay varios entuertos que enderezar en lo que afirma el párrafo anterior. Menor y hasta perdonable, confundir votar _en el pasado_ al PP con haberlo votado únicamente en 2011. Grave como para ser incluida en una antología de falacias probabilísticas, [que se confundan las probabilidades condicionales](http://en.wikipedia.org/wiki/Confusion_of_the_inverse).

Invertirlas como Bayes manda me obligaría a disponer de información de la que no dispongo (véase la nota con la que cierro). Entre otras cosas, de estimaciones razonables de esos cuadrados con los que abría. Y ese es el quid de muchas más cuestiones—y mucho más importantes— de las que se ventilan aquí.

Si tuviese que decantarme por algo, diría que es probablemente exagerado el porcentaje alegado por Podemos. Lo diría (yo) porque pienso (yo) que a Podemos le interesa ufanarse de un porcentaje lo mayor posible. Tiene un incentivo, pienso, para ello y pienso también que la gente tiende a responder a ellos. De ahí a que CIS en mano pueda refutarse categóricamente dicha afirmación, media un mundo.

Pero como ejemplito de la falacia en cuestión, ¿no me diréis que no me viene que ni pintado para el blog?

Y para acabar, dos notas.

* La primera es que suponiendo que votar en el pasado al PP equivalga a haberlo votado en el 2011, [ateniéndonos al último barómetro publicado por el CIS, el de julio de 2014](http://www.cis.es/cis/export/sites/default/-Archivos/Marginales/3020_3039/3033/cru3033votog2011.html) (aunque Podemos pudiera estar refiriéndose a otras encuestas distintas, que para gustos hay colores), y haciendo suposiciones no necesariamente válidas (p.e., que los [coeficientes de elevación](http://es.wikipedia.org/wiki/Muestreo_(estad%C3%ADstica)) de los encuestados son prácticamente iguales), uno podría llegar a una cifra de exvotantes del PP que votarían a Podemos de alrededor del 6%. Pero esto ni prueba ni refuta la afirmación —difícilmente falsable, por otro lado— de Podemos.
* La segunda, que debo el tema de la entrada a mi colega Daniel Taboas: él me ha puesto sobre la pista de esta que llama _burrada monumental_.