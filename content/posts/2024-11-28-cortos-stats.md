---
author: Carlos J. Gil Bellosta
date: 2024-11-28
title: 'Unas cuantas herramientas tecnológicas'
url: /2024/11/28/cortos-estadística
categories:
- cortos
tags:
- estadística
- tecnología
- bases de datos
- z3
- bm25
---

### Modelos directamente en base de datos

Sería muy cómodo poder correr modelos estadísticos directamente en la base de datos, sin tener que realizar costosas y problemáticas extracciones de datos. Rebuscando, he encontrado entradas de hace catorce años sobre el asunto en estas páginas ([esta](/2010/10/14/mas-sobre-lo-de-netezza/)), de la época en que a eso se lo llamaba _in-database analytics_ y se suponía que era el motivo de la entonces esperada fusión de SAS y Teradata.

Una nueva iteración sobre la misma idea es [`orbital`](https://muestrear-no-es-pecado.netlify.app/2024/11/orbital_entornos_hostiles.html), que se autodescribe así en CRAN:

> Convierte flujos de "tidymodels" en objetos que contienen la suficientes ecuaciones secuenciales como para realizar predicciones. Esos objetos más pequeños permiten realizar predicciones con menos dependencias localmente o directamente sobre bases de datos.

La historia nos enseña que hay modelos y operaciones que permiten ese tipo de integración de manera natural y otros en los que es prácticamnte imposible. O se limita uno a una estrecha selección de modelos cubiertos por la herramienta o... pasará lo mismo que con el resto de las iniciativas anteriores.

### Monitorización de modelos en produccióń

No lo he probado, pero eso es lo que dice la etiqueta de [`vetiver`](https://www.jumpingrivers.com/blog/vetiver-monitoring-mlops-deployment/).

### Z3

Si tienes tiempo, échale un vistazo a los [problemas que Z3 puede resolver](https://microsoft.github.io/z3guide/programming/Z3%20Python%20-%20Readonly/Introduction). Puede pasar que nunca te hayas enfrentado a ninguno de ellos y que pienses que no vale la pena indagar más. Pero es posible que descubras que pudiera haberte _salvado la vida_ en algún momento.


### Otro "santo grial" de la ciencia de datos

Además del del _in-database analytics_, otro de los _santos griales_ eternamente perseguidos por ciertos sectores de la ciencia de datos es el de la creación de un sistema al que se le echan datos y realiza análisis estadísticos automáticos con todas las de la ley/ciencia. [Lace](https://www.lace.dev/) es una nueva iteración de ese proyecto. Leí la documentación con cierto detenimiento pero aún no he podido averiguar qué modelo utiliza para construir la _verosimilitud_ de la que trata reiteradamente. Si alguien lo averigua, le agradecería que nos informase tanto a mí como al resto en los comentarios.

### BM25

[Aquí](https://emschwartz.me/understanding-the-bm25-full-text-search-algorithm/)
se explican las matemáticas del
[Okapi BM25](https://en.wikipedia.org/wiki/Okapi_BM25),
una fórmula usada para estimar la relevancia de los documentos obtenidos en una búsqueda y que tiene esta pinta:

![BM25](/wp-uploads/2024/bm25.png#center)