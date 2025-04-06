---
author: Carlos J. Gil Bellosta
categories:
- r
date: 2011-12-09 06:50:57+00:00
draft: false
lastmod: '2025-04-06T18:52:53.567850'
related:
- 2011-04-18-teradata-r-y-las-iii-jornadas-de-usuarios-de-r.md
- 2010-05-19-c2bfen-que-se-parecen-oracle-y-teradata-a-excel-y-word.md
- 2010-05-09-datatables-tablas-con-busqueda-binaria-en-r.md
- 2010-11-22-c2bfotro-bug-de-teradata.md
- 2011-03-07-los-dinosaurios-y-r-dos-enlaces.md
tags:
- r
- sql
- teradata
title: Bajo el capó de teradataR
url: /2011/12/09/bajo-el-capo-de-teradatar/
---

Me gustaría haber podido indagar bajo el capó de teradataR, el [paquete de R desarrollado por Teradata](http://developer.teradata.com/applications/articles/in-database-analytics-with-teradata-r) que permite que R realice lo que llaman por ahí _in database analytics _utilizando dicha plataforma propietaria.

Ya [lo probé hace un tiempo](http://www.datanalytics.com/2011/04/18/teradata-r-y-las-iii-jornadas-de-usuarios-de-r/) con resultados bastante desiguales y que distaban muy mucho de mis expectativas originales, habida cuenta de las muchas bondades del gestor relacional. Durante mucho tiempo he tenido la intención de desentrañar los secretos del paquete, pero me contuvieron los términos desacostumbradamente restrictivos de la licencia:


>License Restrictions: No license rights to the Software will be implied. You are responsible for the installation of the Software, as well as for providing parallel and backup operations. You will not sell, copy, rent, loan, modify, transfer, disclose, embed, sublicense, distribute, or create derivative works of the Software, in whole or in part, without Teradata's prior written consent. You will not disclose the results of any testing or evaluation, including any benchmarks, performed by you insofar as it relates to the Software without Teradata's prior written consent. You will not reverse-assemble, reverse compile or reverse-engineer the Software for purposes of illegally obtaining the Software's source code. The Software, which includes all copies thereof whether in whole or in part, is and remains the exclusive property of Teradata and its licensors.


El paquete contiene muchas llamadas a funciones (`median`, `mean`, `summary`, etc.) que calculan determinados estadísticos (y test estadísticos) sobre tablas de Teradata directamente, sin _bajarlas_ a R. Pero nunca supe cómo: ¿existirían sofisticadas funciones en Teradata para realizar tales cómputos? Nunca lo sabría porque yo soy sumamente licencioso —que me tomo muy en serio las licencias creo que significa eso—.

Pero un día tuve la buena suerte de que mi gato se paseó por encima del teclado y hete aquí lo que se ve que la bestia dio por componer:


{{< highlight R >}}
summary.td.data.frame
teradataR:::.td.genmedian
{{< / highlight >}}


¡Ahí se descubrió el bollo! Porque, efectivamente, apareció en pantalla el código de ambas funciones. La primera, se conoce, calcula determinados estadísticos sobre cada una de las columnas de una tabla. La segunda, utilizada junto a muchas otras análogas por la primera, es una función no exportada del paquete que genera una consulta SQL para calcular la mediana de una columna (numérica) determinada.

La consulta que genera `td.genmedian` es algo así como:

{{< highlight R >}}
SELECT "median"
FROM (
  SELECT
    SUM(CAST(1 AS DECIMAL(18,0)))
      OVER( ORDER BY col ROWS UNBOUNDED PRECEDING)
      AS "xrnk",
    SUM(CAST(1 AS DECIMAL(18,0)))
      OVER( ROWS BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING)
      AS "gcnt",
    SUM(CAST(col AS FLOAT))
      OVER( ORDER BY col ROWS 1 PRECEDING) AS "xsum2",
    CASE WHEN "gcnt" MOD 2 = 0 THEN "xsum2" / 2 ELSE col END
      AS "median"
  FROM mitabla WHERE col IS NOT NULL
) T1
WHERE ("xrnk" + "xrnk" = "gcnt" + 2 AND "gcnt" MOD 2 = 0) OR
("xrnk" + "xrnk" = "gcnt" + 1 AND "gcnt" MOD 2 = 1)
{{< / highlight >}}


La consulta se entiende mejor si se ejecuta la subconsulta `T1` sobre una tabla chiquita. Así, para una tabla con un número par de registros construye una tabla con el mismo número de registros y un aspecto similar a

[![](/wp-uploads/2011/12/teradata_median_par.png#center)
](/wp-uploads/2011/12/teradata_median_par.png#center)

mientras que para tablas con un número impar de registros, construye, análogamente

[![](/wp-uploads/2011/12/teradata_median_impar.png#center)
](/wp-uploads/2011/12/teradata_median_impar.png#center)

Gracias pues a la deambulación de mi gato pude por tanto averiguar por qué teradataR era incapaz de satisfacer mis expectativas iniciales, es decir, que con su concurso pudiera calcular estadísticos relevantes en tablas inmensas: se limita a lanzar series de consultas SQL sobre las tablas y estas, además, están no lo suficientemente bien diseñadas.

En efecto, la consulta anterior falla sobre una tabla con unos cuantos cientos de millones de registros. Y con razón: gran parte del coste computacional se consume en dirimir si el número de registros de la tabla es o no es par y aplicar una u otra _versión_ de la mediana según el caso.

Y, seamos serios, señores de Teradata: una vez que el tamaño de las tablas excede cierto umbral —precisamente el umbral a partir del cual estaríamos interesados en utilizar su producto— realmente da igual que su número de registros sea par o impar.

La verdad sea dicha, con datos _tan_ grandes no hay una manera canónica —por no decir única— de calcular la mediana: depende de si en la columna tiene muchos o pocos valores repetidos, etc. Y en cada caso, la consulta adecuada sería otra.

Además, tengo la sospecha de que la estrategia adecuada para extender los conceptos estadísticos a _entornos big data_ va a tener más que ver por el uso inteligente del muestreo y técnicas análogas que en el de la fuerza bruta.

En fin, que espero que no demanden a mi gato...