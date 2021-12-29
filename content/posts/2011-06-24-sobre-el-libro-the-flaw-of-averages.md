---
author: Carlos J. Gil Bellosta
date: 2011-06-24 07:19:27+00:00
draft: false
title: Sobre el libro "The flaw of averages"

url: /2011/06/24/sobre-el-libro-the-flaw-of-averages/
categories:
- consultoría
- estadística
- probabilidad
tags:
- consultoría
- estadística
- media
- probabilidad
- libros
- savage
---

Leí hace un tiempo [_The flaw of averages_](http://www.flawofaverages.com/), un libro poco convencional que recomiendo a mis lectores. Su objetivo último es encomiable: conseguir que personas sin mayor preparación matemática o estadística pero obligadas a tomar decisiones frente a la incertidumbre apliquen el sentido común y entiendan claramente unos principios mínimos.

Para lograrlo, asume una postura tal vez anti-intelectualista, tal vez herética. Piensa el autor —¿con motivo?— que, a ciertas personas, conceptos tales como varianza, media, teorema central del límite o función de densidad les dificultan, más que facilitan, la comprensión de lo que la incertidumbre realmente es y de cómo puede afectarlos. ¡Cuánta gente se conforma con conocer la media (p.e., de una estimación)!

El libro se resume en el siguiente gráfico:

[![](/wp-uploads/2011/06/summary_flaw_averages.png)
](/wp-uploads/2011/06/summary_flaw_averages.png)

Son apenas cinco ideas.  De la primera, la[ diferencia entre riesgo e incertidumbre](http://www.datanalytics.com/2011/03/11/riesgo-e-incertidumbre/),  ya hablé en estas páginas hace un tiempo. La segunda es que un valor incierto es una _forma _que no puede resumirse mágicamente en un único valor (la _infausta_ media). De hecho, el autor propone la creación de un tipo especial de dato, que denomina DIST, que pueda utilizarse en hojas de cálculo, bases de datos, etc. para representar la distribución de una cierta magnitud, una especie de histograma que cupiese en una única casilla.

La tercera es la que de nomina la forma débil del _flaw of averages_:  al combinar de alguna manera valores inciertos, lo que se obtiene es otro número incierto, otra _forma_, de acuerdo con ciertas reglas. Lo asocia al efecto de la **diversificación** (ilustrado con aplicaciones en el ámbito de las inversiones financieras e industriales). El autor se decanta por la **simulación** a la hora de entender cómo se combinan _formas_ básicas. Y, para facilitarlo y automatizarlo, propone la creación de un **entorno de cálculo probabilístico** que sepa procesar objetos del tipo DIST con la misma facilidad que una hoja de cálculo opera con números.

De la cuarta, la forma fuerte de ese principio intraductible, se refiere a los planes que uno puede hacer sobre números inciertos. Lo ilustra con la metáfora del borracho que avanza haciendo eses en medio de una carretera. En tanto que se mantiene en su centro, está a salvo; pero apenas abandona ese lugar, puede ser atropellado. Quien quiera tomar decisiones en situación de incertidumbre, debería tener en cuenta no sólo qué sucedería en el caso típico —o promedio— sino también en caso de desviaciones frente a dicho valor. Insiste por tanto el autor en la necesidad de ir mucho más allá del uso indiscriminado de la media y estudiar realmente el efecto de la incertidumbre en las decisiones que se tomen.  ¡Es un tema que también resultará [familiar a los asiduos a estas páginas](http://www.datanalytics.com/blog/2011/05/26/el-problema-de-la-media-el-problema-con-la-media/)!

El último gran tema es el de cómo combinar magnitudes inciertas abandonando la medida reduccionista de la correlación y utilizando sin miedo gráficos de dispersión.

En resumen, una lectura recomendable, refrescante y que irritará a más de un dogmático.
