---
author: Carlos J. Gil Bellosta
categories:
- estadística
date: 2016-02-05 09:13:42+00:00
draft: false
lastmod: '2025-04-06T18:54:32.536111'
related:
- 2017-11-27-mas-sobre-correlaciones-espurias-y-mas-sobre-correlacion-y-causalidad.md
- 2024-10-08-cortos-stats.md
- 2019-06-05-causalidad-atribucion-madrid-central.md
- 2015-12-07-contaminacion-y-restricciones-de-trafico-en-madrid-por-que-no-se-puede-ni-prevenir-ni-estimar.md
- 2019-10-18-el-modelo-son-las-conclusiones.md
tags:
- causalidad
- contaminación
- estadística
- prensa
title: Los resultados de esta investigación tienen puntos en común con la metodología
  científica aunque en ningún momento tendrán la misma validez ni tampoco es su intención
  que la tenga
url: /2016/02/05/los-resultados-de-esta-investigacion-tienen-puntos-en-comun-con-la-metodologia-cientifica-aunque-en-ningun-momento-tendran-la-misma-validez-ni-tampoco-es-su-intencion-que-la-tenga/
---

¡Olé!

Con la frase que titula esta entrada se cierra [este artículo](http://www.eldiario.es/madrid/alta-contaminacion-afecta-pulmones-Madrid_0_473502958.html) tan torero de eldiario.es.

El resto de lo que se publica me viene de perillas para ilustrar a mis alumnos del [máster de ciencia de datos de KSchool](http://kschool.com/cursos/madrid/master-en-data-science/) eso de la dependencia e independencia condicional.

Lo que el artículo argumenta, y que nadie pone en duda, es que altas concentraciones de óxidos de nitrógeno (A) y picos de hospitalizaciones por enfermedades respiratiorias (B), no son eventos independientes. Es decir, que $latex P(A \cap B) \neq P(A)P(B)$. En otros términos, que nuestro conocimiento de A nos permite refinar nuestra estimación de B. Todo correcto.

Sin embargo, ¿de ahí a _Los picos de contaminación **causan** un aumento radical en los ingresos hospitalarios_, que es como se titula el artículo en cuestión?

Podría argumentarse que hay una causa no contemplada en el artículo, el frío, que:

* Hace que se incremente la concentración de óxidos de nitrógeno (por ejemplo, [aquí](http://uk-air.defra.gov.uk/assets/documents/reports/aqeg/nd-summary.pdf) dice cómo _en invierno, cuanod el suelo está frío y no corre el viento, las emisiones quedan atrapadas cerca de la superficie_)
* Incrementa el impacto de las enfermedades respiratorias.

Podría incluso llegarse a dar el caso de que los dos eventos anteriores fuesen condicionalmente independientes con respecto a la temperatura, es decir, que aunque $latex P(A \cap B) \neq P(A)P(B)$, ocurriese que $latex P(A \cap B | C) = P(A|C)P(B|C)$. Expresado de otra manera, que una vez conocida la temperatura, podría desaparecer totalmente la correlación entre contaminación y hospitalizaciones.

Gráficamente, que en lugar de tener una relación causal como la que quiere dar a entender el artículo de la forma

![relacion_causal_trivial](/wp-uploads/2016/02/relacion_causal_trivial.png#center)

muy bien podría tenerse otra tal como

![relacion_causal_alternativa](/wp-uploads/2016/02/relacion_causal_alternativa.png#center)

Todos tenemos tentaciones de vez en cuando de sacrificar los principios del discurso racional (del que el método científico forma parte) en aras de un bien presuntamente superior; todos tenemos también de vez en cuando gases en el intestino. Nos llamamos civilización porque hemos aprendido a resolver esos problemas en el más estricto ámbito de  lo privado.