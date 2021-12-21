---
author: Carlos J. Gil Bellosta
date: 2018-03-09 08:13:25+00:00
draft: false
title: 'Brechas salariales: así las calcularía yo'

url: /2018/03/09/brechas-salariales-asi-las-calcularia-yo/
categories:
- estadística
tags:
- brecha
- economía
- ees
- estadística
---

He visto N estimaciones de las brechas salariales (_de género_) con resultados de lo más variado. En algunos casos he podido estudiar los métodos utilizados y, la verdad, dan grima (cosas con tufo _econométrico_ viejuno y demás).

Y me refiero, particularmente, a aquellos métodos que analizan la pregunta interesante: ¿hay igualdad de salario a igualdad de méritos? Hay publicaciones que llaman _brecha_ a otra cosa (masa salarial dividido por sujetos), que no merece ni ser comentada aquí.

Hace un tiempo pensé en una manera alternativa de medirlos. Creo que original. Da para un artículo de los buenos. Pero publicar y perecer si no lo consigo no es mi guerra. De hecho, yo perezco si publico y no produzco.

Aquí va mi idea:

* Tómense los microdatos de la Encuesta de Estructura Salarial (más sobre eso debajo)
* Selecciónense la mitad de los hombres.
* Constrúyase un modelo predictivo (sí, con los XGBoosts y esas cosas)
* Mídase el error cometido al predecir el salario del resto de los hombres.
* Predígase el salario de las mujeres.
* Compárese el sesgo que pudiera haber en las prediccines y su error con el error cometido con la otra mitad de los hombres.
* Finalmente, como complemento, estúdiese el sesgo (observado menos predicho) de las mujeres por sector, grupo de edad, etc.

 para encontrar información más fina que un numerico con que asustar a las viejas en un titular.

No lo he visto nunca. Lo he propuesto alguna vez sin éxito. Igual alguien coge el guante.

**Caveats:**

Todo el mundo usa la EES (la encuesta antes mencionada) para este fin. Esa encuesta no vale para medir lo que aquí se propone por razones muy obvias y ya [discutidas previamente](https://www.datanalytics.com/2015/03/09/unas-preguntas-incomodas/). Mientras siga dando la razón a los poderes fácticos, no habrá presión para reformarla. Así que ajo y agua.



