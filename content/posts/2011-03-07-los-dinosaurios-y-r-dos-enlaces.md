---
author: Carlos J. Gil Bellosta
categories:
- r
date: 2011-03-07 09:59:38+00:00
draft: false
lastmod: '2025-04-06T18:58:39.503164'
related:
- 2011-10-27-oracle-r-enterprise.md
- 2011-04-18-teradata-r-y-las-iii-jornadas-de-usuarios-de-r.md
- 2011-02-07-c2bfun-torpedo-bajo-la-linea-de-flotacion-de-sas.md
- 2010-03-01-r-en-the-economist.md
- 2011-12-09-bajo-el-capo-de-teradatar.md
tags:
- r
- sas
- sql
title: 'Los dinosaurios y R: dos enlaces'
url: /2011/03/07/los-dinosaurios-y-r-dos-enlaces/
---

Quiero compartir con mis lectores dos enlaces relacionados. Puede que a alguno le interese su sustancia misma. A mí no tanto. A mí me interesan en cuanto que ilustran la emergencia de R y el papel protagónico que está asumiendo en el _universo de las cosas analíticas_. Tan protagónico que hasta dos viejos dinosaurios pasan voluntariamente por su aro.

Tradicionalmente, para analizar grandes bases de datos empresariales, se realizaba en primer lugar una extracción masiva de datos. Luego se procesaban con herramientas específicas (SAS, por ejemplo). En muchas ocasiones los resultados eran volcados nuevamente en el sistema de partida.

El proceso es manifiestamente mejorable: ¿qué necesidad existe de realizar tantas extracciones e importaciones de datos? ¿No podría realizarse el análisis en el mismo entorno? Además, en tal caso, los desarrolladores de sistemas de bases de datos podrían depredar el lucrativo nicho de las empresas que ofrecen soluciones de análisis de datos.

A este voluntarista proyecto le dieron incluso un nombre (en inglés, claro): _in database analytics_.

De hecho, por eso estuvieron tan cerca SAS y [Teradata](http://es.wikipedia.org/wiki/Teradata) —que vende unos gestores de bases de datos ridículamente caros a empresas cuyos directivos se preocupan más de dejarse invitar a congresos _chachiguays_ que de sus accionistas— de fusionarse. Y puede que también por eso lo desestimasen.

Lo que es cierto es que Oracle, Teradata y otras empresas del ramo han desarrollado sus propios algoritmos de minería de datos. Y ahora —ahora llegan mis dos anunciados enlaces— nos brindan una interfaz a dichos algoritmos desde R:



* Así, Teradata ha desarrollado el paquete [paquete TeradataR](http://developer.teradata.com/applications/articles/teradatar-enables-in-database-analytics-with-r).
* Y Oracle, que lleva años desarrollando [sus propios algoritmos de minería de datos](http://en.wikipedia.org/wiki/Oracle_Data_Mining) —desarrollados a partir del trabajo original de [Thinking Machines](http://en.wikipedia.org/wiki/Thinking_Machines_Corporation)— ha desarrollado y liberado [RODM](http://cran.fhcrc.org/web/packages/RODM/index.html).

A pesar del escepticismo que muestra el empresariado patrio frente a la emergencia de R, el que dos dinosaurios corporativos hayan pelado sus barbas puede ser el indicio de que telefónicas, santanderes, bebeuveás y demás tienen que ir poniendo las suyas a remojar.