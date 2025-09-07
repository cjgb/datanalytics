---
author: Carlos J. Gil Bellosta
categories:
- estadística
date: 2010-08-26 22:11:41+00:00
lastmod: '2025-04-06T19:04:23.646658'
related:
- 2010-05-09-datatables-tablas-con-busqueda-binaria-en-r.md
- 2011-09-28-datos-grandes-colas-largas.md
- 2010-05-19-c2bfen-que-se-parecen-oracle-y-teradata-a-excel-y-word.md
- 2012-03-08-varianza-explicada.md
- 2020-04-13-regresion-tradicional-vs-multinivel.md
tags:
- estadística
- modelos mixtos
- sql
title: Modelos lineales mixtos para la optimización de queries
url: /2010/08/26/modelos-lineales-mixtos-para-la-optimizacion-de-queries/
---

Hoy aprovecho que pasan dos pájaros por el cielo para pegar un tiro que, seguro, es del interés de mis lectores: voy a utilizar un modelo lineal mixto para estudiar los factores que afectan al rendimiento de una familia de _queries_ de SQL complejas.

El objetivo final es contar con criterios empíricos para la optimización de ciertas _queries_ (siento decir _optimización de queries_: me obliga a ello la voluntad de que los buscadores me indexen donde más búsquedas se vayan a realizar; por una vez, renegaré del talibán ortográfico que llevo dentro) e, indirectamente, ilustrar con datos distintos de los habituales esta técnica estadística.

La query tiene este aspecto:

{{< highlight sql >}}
select * from ( un carajal de tablas y subconsultas ) where
fecha = :fecha: and
unidad = :unidad: and
cuenta = :cuenta:
;
{{< / highlight >}}


Los dos factores que se consideran potencialmente críticos para el rendimiento de la _query_ son el número de filas correspondientes a una unidad dada (unit.size en lo sucesivo) en una de las tablas subyacentes y el número de filas correspondientes a una cuenta determinada en otra de dichas tablas (account.size).

Además, se observa que la carga de la base de datos varía mucho en función de factores externos (¿otros usuarios accediendo a ella?) fuera de nuestro control.

Por tanto, analizaremos los tiempos de ejecución de la _query_ en función de unit.size, account.size y, finalmente, de los factores no controlados. Para ello, se selecionamos 200 _queries_, es decir, 200 combinaciones de unidad, cuenta y fecha. Cada una de las queries se ejecuta 5 veces.

{{< highlight R >}}
n <- 20
unidades <- sample( unidades, n )
epigrafes <- sample( epigrafes, n )
fechas <- sample( fechas, n, replace = TRUE )
{{< / highlight >}}

Además, se aleatoriza con respecto al tiempo. Esto se hace para evitar que el efecto de las fluctuaciones de carga del servidor se confundan con el efecto de las distintas _queries_. Distribuyendo aleatoriamente en el tiempo el momento de la ejecución de una misma _query_ se reduce la posibilidad de que todas las iteraciones de una de ellas se realicen en periodos de carga anormalmente alta o baja (los puristas del diseño experimental nos aplaudirían en este punto sólo a medias).

{{< highlight R >}}
n.rep <- 5
iter.order <- sample( rep( 1:n, n.rep ) )
{{< / highlight >}}

Finalmente, se construye el conjunto de datos mediante

{{< highlight R >}}
salida <- do.call( rbind, sapply( iter.order, foo.sample, simplify = F ) )
{{< / highlight >}}

donde `foo.sample` es la función que ejecuta la _query_ contra la base de datos, cuenta el número de registros, etc.

Los datos resultantes pueden descargarse [aquí](/uploads/query_time_analysis.csv). Se trata de una tabla con cuatro columnas: el identificador de la _query_, el tiempo de ejecución, unit.size y account.size. (Debería ser ocioso decir aquí que el identificador está asociado al enunciado de la _query_ y no su ejecución puesto que cada una de ellas se repite 5 veces).


## Análisis estadístico


Descargamos y normalizamos en primer lugar los datos:


{{< highlight R >}}
dat <- read.table( url(
    "http://www.datanalytics.com/uploads/query_time_analysis.csv" ),
    header = T )

normalize <- function( x ) ( x - mean( x ) ) / sd( x )

dat$unit.size <- normalize( dat$unit.size )
dat$account.size <- normalize( dat$account.size )
dat$id <- factor( dat$id )
{{< / highlight >}}

(La normalización se hace especialmente para facilitar la interpretación del modelo que se plantea más abajo). A continuación, creamos un objeto de la clase `groupedData`,

{{< highlight R >}}
library( nlme )
dat <- groupedData( query.time ~ unit.size + account.size  | id, data = dat )
{{< / highlight >}}

que viene a ser un data.frame con información sobre cómo ciertas filas están asociadas entre sí. De forma que si uno hace

{{< highlight R >}}
plot( groupedData( query.time ~ 1 | id, data = dat ) )
{{< / highlight >}}

se obtiene el siguiente gráfico:

[![](/wp-uploads/2010/08/grouped_data.png#center)
](/wp-uploads/2010/08/grouped_data.png#center)Se aprecia en él cómo la varianza de los tiempos de ejecución crece con éstos. Además, por consideraciones relativas a la construcción de los datos —un cruce de varias tablas de cada una de las cuales se extrae un número variable de filas— hay razones para intuir una estructura multiplicativa en los datos. Eso nos hace considerar el uso de logaritmos. De hecho,

{{< highlight R >}}
plot( groupedData( log(query.time) ~ 1 | id, data = dat ) )
{{< / highlight >}}

que produce la gráfica

[![](/wp-uploads/2010/08/grouped_log_data.png#center)
](/wp-uploads/2010/08/grouped_log_data.png#center)

que tiene mejor aspecto. No es todo lo bueno que uno quisiera, pero tiene mejor aspecto. Nótese además, cómo el que los datos aparezcan ordenados en la figura puede hacer sobreestimar el efecto de la dispersión de la varianza. En realidad, más adelante, se plantea como ejercicio verificar de una manera más canónica cómo el tomar logaritmos no deja de tener sentido.

Finalmente, planteamos el modelo mixto usando la función lme del paquete nlme:

{{< highlight R >}}
    modelo <- lme( log2( query.time ) ~ unit.size + account.size,
       random = ~1 | id , data = dat )
{{< / highlight >}}

El modelo consta términos fijos (`unit.size` y `account.size`) y de una parte aleatoria, `~1 | id`. La parte aleatoria, de acuerdo con el consejo recurrente de mi colega Olivier Núñez en [r-help-es](https://stat.ethz.ch/mailman/listinfo/r-help-es), comprende aquellos términos del modelo que variarían de realizarse de nuevo el experimento. Y, efectivamente, la próxima vez que se ejecute una _query_, es improbable que ésta sea una de las 200 seleccionadas más arriba. El enunciado particular de la _query_ es, por lo tanto, variable (o aleatorio, en nuestro contexto).

Alternativamente, usando modelos no mixtos, podría plantearse el modelo _equivalente_

{{< highlight R >}}
modelo.lm <- lm( log2( query.time ) ~
    id + unit.size + account.size, data = dat )
{{< / highlight >}}

que haría aparecer 200 (técnicamente, 199 porque no se ha eliminado el término independiente del modelo) coeficientes nuevos que representarían la variación en los tiempos de ejecución atribuida a cada enunciado de query en particular (variación que puede deberse a la distinta distribución de la filas correspondientes a distintas unidades o cuentas en el disco, etc.). Obviamente, estos coeficientes no son de mayor interés en sí mismos. A lo más, interesa saber si existen variaciones sustanciales entre las distintas queries que pudieran ser indicativas de algún fenómenono tenido en cuenta.

Mediante

{{< highlight R >}}
summary( modelo )
{{< / highlight >}}

se obtiene:

{{< highlight R >}}
Linear mixed-effects model fit by REML
Data: dat
AIC    BIC  logLik
3259.9 3284.4 -1625.0

Random effects:
Formula: ~1 | id
(Intercept) Residual
StdDev:  0.00029632   1.2220

Fixed effects: log2(query.time) ~ unit.size + account.size
Value Std.Error  DF t-value p-value
(Intercept)  0.70249  0.038644 800 18.1785  0.0000
unit.size    0.19907  0.038665 197  5.1486  0.0000
account.size 0.11006  0.038665 197  2.8465  0.0049
Correlation:
(Intr) unt.sz
unit.size    0.000
account.size 0.000  0.008

Standardized Within-Group Residuals:
Min       Q1      Med       Q3      Max
-1.82818 -0.82791 -0.23734  0.70098  3.63443

Number of Observations: 1000
Number of Groups: 200
{{< / highlight >}}

De la salida anterior interesan varios valores:


* En la sección correspondiente a los efectos aleatorios, la desviación estándar del término independiente, 0.00029632, que parece indicar que apenas hay variación entre las distintas _queries_.
* En la misma sección, el valor relativamente elevado, 1.2220, del residuo. Eso indica que existe una variación importante entre ejecuciones distintas de la misma _query_ debidas, probablemente, a las distintas condiciones de carga del servidor en el momento de la ejecución. ¡Muy sintomático!
* En la sección de los términos fijos, el término independiente, de valor 0.7 y altamente significativo, debido a la peculiar normalización de los datos, indicaba un tiempo medio de ejecución de 2^0.7 = 1.62 segundos.
* En dicha sección los coeficientes de unit.size y de account.size, también altamente significativos, auguraban un rendimiento desigual de las consultas, posiblemente inaceptablemente desigual.

Finalmente, puede verse un gráfico de diagnóstico del modelo haciendo

{{< highlight R >}}
plot( modelo )
{{< / highlight >}}

que produce

[![](/wp-uploads/2010/08/residuos.png#center)
](/wp-uploads/2010/08/residuos.png#center)

y que muestra cómo la varianza de los residuos no parece variar apreciablemente con el tamaño predicho del tiempo de ejecución.


## Colofón


En primer lugar, quiero dejar planteados varios ejercicios que serán sin duda de sumo provecho para los más inquietos e interesados de mis lectores:

* Generar y analizar el gráfico de diagnóstico para el modelo análogo en el que no se toman logaritmos de la variable objetivo.
* Calcular la varianza de los coeficientes asociados a cada una de las _queries_ del modelo no mixto modelo.lm y compararla con la del término independiente de la parte aleatoria del modelo mixto.
* Reconstruir el modelo sin normalizar las variables previamente y analizar (comparativamente) los resultados.

Finalmente, doy respuesta a lo que más de uno se estará preguntando: todo esto, ¿para qué? Puede parecer, y alguno así me lo ha manifestado, un ejercicio ocioso. Pero, la verdad, los números muestran varios indicios fundamentales:

* El primero, que parece necesario identificar ventanas temporales en las que el servidor esté desocupado para realizar pruebas de rendimiento: dos desviaciones estándar de _ruido intra-query_ multiplican los tiempos de ejecución en un factor de 5.4264 (=2^(2*1.22) ). Es algo que se intuía pero no se cuantificaba. Y que ponía en entredicho pruebas de rendimiento realizadas anteriormente.
* El segundo, que las dependencias del tiempo de ejecución con respecto al tamaño de las _subqueries_ no son, como se suponía un tanto cándidamente, O(1). Más bien, son O(n*m). Y esto sugirió [alterar el orden de los cruces de las tablas](https://datanalytics.com/2010/05/19/¿en-que-se-parecen-oracle-y-teradata-a-excel-y-word/) para lograr un plan de ejecución alternativo más rápido y robusto (que, de hecho, se encontró).