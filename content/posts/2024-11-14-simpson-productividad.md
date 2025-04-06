---
author: Carlos J. Gil Bellosta
categories:
- estadística
date: 2024-11-14
lastmod: '2025-04-06T18:53:46.098956'
related:
- 2011-08-25-ubi-ratio-ibi-paradoxa-simpsorum.md
- 2022-01-04-la-altura-media-animales-zoo-madrid.md
- 2021-01-28-simpson-sobre-la-desigualdad.md
- 2013-08-13-suben-o-bajan.md
- 2016-11-23-el-ipt-y-la-paradoja-de-simpson.md
tags:
- estadística
- economía
- productividad
- paradoja de simpson
title: La paradoja (de Simpson) detrás de ciertos argumentos en pro de una subida
  generalizada de salarios
url: /2024/11/14/productividad-simpson
---

Trae El Confidencial un artículo de Javier Jorrín ---según Jesús Fernández-Villaverde,
[_el mejor periodista económico ahora mismo en España_](https://blogs.elconfidencial.com/economia/la-mano-visible/2024-07-13/futuro-derecha-espana_3922679/)---, titulado [_La mejora de la productividad permitirá a las empresas prolongar la subida de salarios_](https://www.elconfidencial.com/economia/2024-11-02/mejora-productividad-permitira-seguir-subiendo-salarios_3995494/). El artículo se resume en tres enunciados que, así, en frío, según se verá, son contradictorios:

1. Ha aumentado la productividad (PIB por hora trabajadda) en España.
2. Eso da margen para que suban los salarios.
3. El incremento de la productividad se debe a que ganan peso los sectores económicos más productivos.

La problemática relación entre (1) y (2) se la dejo a los economistas. Se pueden elaborar experimentos mentales en los que (2) se sigue de (1) y otros en los que no. Evaluar su pertinencia no es materia de estas páginas.

Lo que sí es, es lo que concierne a la relación de (1) y (2) con (3). Hay que señalar, primero, que urge indicar por qué parece haber aumentado la productividad por hora trabajada. Cualquiera que sostenga que ha habido incrementos de productividad tiene que justificarlo muy fehacientemente porque el consenso, lo que se da por hecho, es su secular empantanamiento. De hecho, la historia conocida de la economía española (y no solo española) durante los últimos 20 o 30 años es la contraria a la que se relata en el artículo: a pesar de todas esas pretendidas revoluciones tecnológicas que nos han regalado los últimos años, la productividad parece estancada si se la compara con la de décadas previas. Es más, si miro alrededor y veo a carniceros, maestros, policías, médicos, funcionarios, camareros, etc., concretos, se me hace muy difícil adivinar qué tipo de tecnología puede haber incrementado su productividad en los últimos dos años: mi impresión es que siguen haciendo exactamente lo mismo que antes. Por eso es tan relevante (3): nos enseña que no es tanto que _cada_ trabajador sea más productivo _ahora_, sino que, más bien, hay menos trabajadores en los sectores menos productivos y más trabajadores en los sectores más productivos.

Es decir, parece que la causa más importante detrás del incremento de la productividad es lo que unos llaman "efecto composición" y otros "paradoja de Simpson", que tiene que ver con la relación entre las tres fracciones siguientes:

$$\frac{A_1}{B_1},  \~\~ \frac{A_2}{B_2},  \~\~ \frac{A_1 + A_2}{B_1 + B_2}$$

En particular, es posible que varíen los valores $A_i$ y $B_i$ de manera que las dos primeras se mantengan igual en valor pero que varíe la tercera, que es lo que parece dar a entender Jorrín.

Si la tercera fracción es la productividad de una economía (PIB en el numerador; horas trabajadas en el denominador) en la que hay dos sectores económicos con productividades dadas por las dos primeras fracciones, no se sigue del crecimiento de la productividad de la economía que haya un incremento de la pruductividad en los dos sectores que la componen y, como consecuencia, en tal caso, no habría margen para la subida de salarios.

Otra cosa es que ---calienta, [Baumol](https://es.wikipedia.org/wiki/Efecto_salarial_de_Baumol), que sales--- que se orqueste un sistema de subvenciones cruzadas por las que se achiquen los salarios de los sectores más productivos con respecto al que sería su salario de equilibrio (i.e., la productividad marginal del trabajo) para financiar incrementos salariales por encima del equilibrio en los sectores menos productivos. Pero eso no va a ocurrir porque es, me dicen, una imposibilidad metafísica.

### Coda: un ejemplo numérico

Puede que haya quien encunetre demasiado abstracta mi discusión sobre las fracciones de más arriba. Para ellos el siguiente ejemplo simple:

- Situación original:

$$\frac{A_1}{B_1} = \frac{2}{2} = 1, \~\~ \frac{A_2}{B_2} = \frac{2}{1} = 2,  \~\~ \frac{A_1 + A_2}{B_1 + B_2} = \frac{4}{3} = 1.33$$

- Situación en la que cambian los pesos relativos (se achica el sector menos productivo y crece mucho el más productivo):

$$\frac{A_1}{B_1} = \frac{1}{1} = 1, \~\~ \frac{A_2}{B_2} = \frac{20}{10} = 2, \~\~ \frac{A_1 + A_2}{B_1 + B_2} = \frac{21}{11} = 1.91$$