---
author: Carlos J. Gil Bellosta
date: 2010-05-19 20:48:10+00:00
draft: false
title: ¿En qué se parecen Oracle y Teradata a Excel y Word?

url: /2010/05/19/en-que-se-parecen-oracle-y-teradata-a-excel-y-word/
categories:
- programación
tags:
- excel
- sql
---

Y, para el caso, Postgres y OpenOffice.

Pues en que quienes los diseñan piensan que los usuarios finales son, somos, abuelitas. Y por tanto, toman decisiones por nosotros (usar mayúsculas donde no se debe, cruzar tablas como les da la gana, empeñarse en que _incoar_ se escribe con hache intercalada, etc.). En particular, mi queja de hoy se refiere a lo estúpidos que pueden llegar a ser los presuntos _optimizadores_ de consultas en bases de datos y en un pequeño —aunque universal— método para doblegarlos a nuestra voluntad soberana.

Ya sé, ya sé que este tipo de problemas es consustancial a eso tan moderno que son los [lenguajes declarativos](http://es.wikipedia.org/wiki/Lenguaje_de_programaci%C3%B3n_declarativo), como lo es R, a los que soy tan afín: uno dice qué quiere y delega la tediosa labor de cómo hacerlo. Pero sus implementadores deberían mostrar algún grado de respeto hacia quienes hemos aprendido a no dispararnos en el pie gratuitamente.

Y paso a describir el problema de hoy (en Teradata, por centrar ideas). En primer lugar, presentemos nuestras tablas:

* **A** es una tabla enorme, del orden de 1.000 millones de filas (de ahí que su nombre esté en mayúsculas).
* **b** es una tabla de 250.000 filas que cruza con **A**
* **c** es una tabla pequeña, de 800 filas que cruza con **b**

El objetivo es cruzar **A**, **b** y **c** para después agregar por ciertos campos de **A** y **c**. Veamos la _query_ (simplificada en extremo):

{{< highlight sql >}}
select
     A.c1, A.c2, c.c3, c.c4, sum( A.c5 ) as c5
from
     A join b  on ( A.c1 = b.b1 and A.c2 = b.b2 )
          join c  on ( b.b1 = c.c3 and b.b3 = c.c6 ) 
group by
     1, 2, 3, 4
;
{{< / highlight >}}

Si llamamos (**a**,**b**) al operador que cruza las tablas **a** y **b**, entonces se sabe que:



* (**A**,**b**) es una tabla inmensísima, mucho mayor que **A**
* (**b**,**c**) es una tabla mucho menor que **b**

Es evidente que el plan de ejecución adecuado es (A, (**b**,**c**)), y no ( (**A**,**b**),**c**). Pero éste último es en el que se empeñaba el cretino del optimizador de Teradata independientemente del orden en que se escribiesen los cruces o el número de paréntesis en que se quisiese encerrar el cruce (**b**,**c**).

Quoi faire?

Existe un ardid, un ardid universal, un ardid ladino, que merece ser anotado en la primera página de todos los vademécums de ardides y que consiste en reescribir así la _query_:

{{< highlight sql >}}
select
     A.c1, A.c2, c.c3, c.c4, sum( A.c5 ) as c5
from
     A join b  on ( A.c1 = b.b1 and
                    A.c2 = b.b2 || substring (c.c3, 3, 0))
          join c  on (b.b1 = c.c3 and b.b3 = c.c6) 
group by
     1, 2, 3, 4
;
{{< / highlight >}}

¿En qué consiste? En el cruce de **A** con **b** se introduce subrepticiamente una dependencia con **c**. Es una dependencia, sí, porque involucra una columna de **c**. Y es subrepticia porque no altera para nada el valor de la columna de cruce real, la de **b**: no se le añade ningún caracter de la columna de **c**.

Alternativamente, para campos numéricos, se puede sumar a un valor de **b** cero por un valor de **c** o cosas similares. En eso la imaginación del lector habrá de ser ley.

Existen alternativas. Teradata, se ha demostrado hoy, las tiene. Existen mecanismos, como si heredados de la moderna pedagogía, que tratan de educar al optimizador: un adulto lo guía pacientemente proponiédole, a guisa de juegos con figuras de colores, estadísticas sobre combinaciones de variables. Con paciencia, a través de esas estadísticas que luego nunca nadie recrea cuando se debe, se puede lograr el deseado fin. Al menos, una vez, en desarrollo y con propósitos ilustrativos.

No sé cómo tomarme que este ardid —que paga la hipoteca de los yates de algunos afamados gurús de la optimización de consultas— haya sido saludado con un "tu (no es mío) truco (no es un truco: es una estrategia victoriosa) no es generalizable (dígame Vd. dónde pudiera no funcionar, señor valedor de una tecnología caduca)".

Lo importante es, no obstante, que [las estirpes de consultores condenados a cien años de _overtime_ disponen, por fin, de una alternativa sobre la faz de la tierra](http://www.nabarralde.com/es/eztabaida/3436-las-estirpes-condenadas-a-cien-anos-de-soledad).
