---
author: Carlos J. Gil Bellosta
categories:
- estadística
- números
date: 2013-02-11 07:54:16+00:00
draft: false
lastmod: '2025-04-06T19:08:05.755254'
related:
- 2012-10-08-las-cosquillas-de-los-sondeos-electorales.md
- 2016-05-09-encuestas-electorales-medios-y-sesgos-ii.md
- 2022-05-10-encuestas-electorales-cualitativas.md
- 2013-07-22-una-macro-para-generar-titulares-sobre-resultados-de-encuestas.md
- 2012-09-20-como-votan-los-diputados.md
tags:
- epa
- estadística pública
- cis
title: Voy a partir una lanza a favor de Rosell a cuenta de la EPA
url: /2013/02/11/voy-a-partir-una-lanza-a-favor-de-rosell-a-cuenta-de-la-epa/
---

Voy a partir una lanza a favor de Rosell. Aunque algún colega luego me quiera fusilar. Espero que lo podamos discutir todo luego amigablemente sea acá o en otros foros igualmente civilizados.

Las encuestas tienen algo de mágico. Parecen una versión revivida de los antiguos oráculos. No deja de sorprender que sea posible conocer la opinión de millones de personas preguntando a un par de miles de ellas, ¿verdad?

Además, los resultados de muchas encuestas se agotan en sí mismos: qué porcentaje de la gente opina esto o lo otro. Y no tienen mayor trascendencia. Ni existe un patrón contra el que medir en qué medida yerran. A lo más, una escueta ficha técnica _ex-ante_.

Pero existe un tipo muy notable de encuestas (a las que [ya me he referido previamente](https://datanalytics.com/2012/10/08/las-cosquillas-de-los-sondeos-electorales/)) que se contrastan a los pocos días con _datos reales_: las electorales. Y no hace falta que abunde aquí sobre su éxito o falta de éxito predictivo. Ya se han ocupado otros del asunto, como por ejemplo [aquí](http://www.lavanguardia.com/politica/elecciones-catalanas/20121128/54355898809/fallos-encuestas-elecciones-catalanas.html) o [aquí](http://www.eldiario.es/piedrasdepapel/encuestas-Cataluna_6_75652435.html). (Tengo la impresión de que los profesionales de la cosa pasan dos de los años del ciclo electoral explicando por qué son tan _guays_ y los otros dos protestando los motivos de _fuerza mayor_ que les impidieron cumplir las expectativas que habían generado).

Claro: una cosa es decir a quién piensa uno votar y otra, votar. Son hechos distintos, obviamente, en cuya fundamental diferencia, quienes realizan los sondeos, no dejan de hacer hincapié siempre después de conocidos los recuentos oficiales.

Pero, qué pasa cuando la pregunta es _¿a quién votó Vd. en las elecciones pasadas?_ Aquí ya no deberían (¿o sí?) influir ese tipo de circunstancias (incluso meteorológicas) diferenciadoras. Véamoslo.

En el barómetro de enero de 2013 del CIS se tabulan las respuestas de 2483 personas (elegidas con criterio riguroso para que reflejen la _realidad_ de la sociedad española) a ciertas preguntas. Y la tabulación se realiza de acuerdo con su _recuerdo de voto_ en las últimas elecciones generales, las de 2011. Este recuerdo de voto debería ser mínimamente coincidente con los resultados reales en dichas elecciones, ¿verdad? Véamoslo. Haciendo en R

{{< highlight R >}}
options(digits = 2)

library(xtable)

cis <- c(663, 545, 153, 79, 50, 154)
reales <- c(10830693, 6973880, 1680810, 1140242, 1014263, 2299688)
names(reales) <- names(cis) <- c("PP", "PSOE", "IU",  "UPyD", "CiU", "Otros")

tmp <- data.frame( cis = 100 * cis / sum(cis), reales = 100 * reales / sum(reales))
tmp$diff <- tmp$cis - tmp$reales
tmp$diff.pc <- 100 * tmp$diff / tmp$reales

print(xtable(tmp), type = "html")
{{< / highlight >}}


se obtiene

|  cis  | reales | diff | diff (%) |
|:------------| -------: | ---------:| ---------:|
PP| 40.33| 45.24| -4.91| -10.86|
PSOE| 33.15| 29.13| 4.02| 13.80|
IU| 9.31| 7.02| 2.29| 32.55|
UPyD| 4.81| 4.76| 0.04| 0.89|
CiU| 3.04| 4.24| -1.20| -28.21|
Otros| 9.37| 9.61| -0.24| -2.49|

donde la primera columna corresponde a los porcentajes de votos obtenidos en la encuesta del CIS, la segunda a los reales (descontados en ambos casos los nulos y blancos) y las demás son las diferencias. Cierto, quedan sin computar los 55 sujetos que no recuerdan su voto y los 196 que se negaron a contestar esa pregunta. Pero a ti, lector, ¿te parece que las discrepancias están _dentro de rango_?

Ahora, el [tema Rosell](http://economia.elpais.com/economia/2013/02/07/actualidad/1360270022_879827.html). Viene el tal señor y critica la [EPA](http://www.datanalytics.com/tag/epa/). Dizque no es fiable. Que es una encuesta. Que no se cree los números que arroja. Que si en España no hay seis millones de parados. Etc.

Y se le responde _en masse_ con [esto](http://www.europapress.es/economia/laboral-00346/noticia-economia-ine-responde-rosell-epa-basa-metodologia-comun-ue-refrendada-propia-ceoe-20130208200315.html), [esto](http://www.eldiario.es/economia/INE-Rosell-EPA-UE-CEOE_0_99040709.html) o [esto](http://economia.elpais.com/economia/2013/02/08/actualidad/1360349971_964973.html). Salvo en algunos casos, como [este](http://www.eldiario.es/zonacritica/datos-EPA-fiables_6_99100105.html), la defensa de la EPA se realiza [_ad verecundiam_](http://es.wikipedia.org/wiki/Argumento_ad_verecundiam).

Rosell, que es empresario, tiene que y debe ser y actuar como Tony el Gordo, el personaje de El Cisne Negro de Taleb. Y como su _alter ego_ de la ficción, hace bien en cuestionarse números que se le dan hasta la cuarta cifra significativa como palabra de la OCDE, la UE y la OIT si no de Dios directamente.

Y es tarea del INE, de quienes se sientan irritados por esta entrada e [incluso de mí mismo](https://datanalytics.com/2012/11/28/coma-cero-dos-por-ciento-anda-ya/) explicar qué se puede y qué no se puede esperar de una encuesta, sus méritos y sus deméritos, sin caer en la [falacia de la reificación](http://es.wikipedia.org/wiki/Falacia_de_reificaci%C3%B3n).