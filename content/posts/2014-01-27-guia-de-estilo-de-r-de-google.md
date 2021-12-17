---
author: Carlos J. Gil Bellosta
date: 2014-01-27 08:21:42+00:00
draft: false
title: Guía de estilo de R (de Google)

url: /2014/01/27/guia-de-estilo-de-r-de-google/
categories:
- r
tags:
- estilo
- programación
- r
---

R es un lenguaje de programación de alto nivel que se usa principalmente en aplicaciones estadísticas y para la generación de gráficos.
El objetivo de esta guía de estilo es que nuestro código sea más fácil de leer, compartir y analizar.
Las reglas de esta guía fueron consensuadas con la comunidad de usuarios de R en Google.



	  * **Resumen de las reglas de estilo**

	    1. Nombres de ficheros: tienen la extensión `.R`
	    2. Identificacores: `variable.name`, `FunctionName`, `kConstantName`
	    3. Longitud de línea: no más de 80 caracteres
	    4. Indentación: dos espacios, no tabuladores
	    5. Espacios
	    6. Llaves: el primero en la misma línea; el último, solo
	    7. Asignaciones: usar `<-`, no `=`
	    8. Puntos y comas: no usarlos
	    9. Distribución general y ordenación
	    10. Comentarios: todos los comentarios comienzan con `#` seguido de un espacio; los comentarios dentro del código necesitan dos espacios delante de `#`
	    11. Definiciones y llamadas a funciones
	    12. Documentación de funciones
	    13. Ejemplo de función
	    14. Estilo para los TODO: `TODO(username)`


	  * **Resumen de las reglas de programación**

	    1. `attach`: tratar de evitarlo
	    2. Funciones:
utilizar `stop()` para generar mensajes de error
	    3. Objetos y métodos: tratar de evitar el uso de objetos S4; no mezclar nunca S3 y S4




	  1. **Nomenclatura**

	    *


**Nombres de ficheros. **Los nombres de ficheros deben tener la extensión `.R` y, por supuesto, ser significativos.


BIEN: `predict_ad_revenue.R`
MAL: `foo.R`
	    *


**Identificadores. **No usar guiones bajos ( `_` ) o guiones ( `-` ) en los identificadores.


Los identificadores deben asignarse de acuerdo con los siguientes criterios:
Los nombres de variables deben ser palabras y letras en minúscula separadas por puntos (`.`);
los nombres de funciones deben ser palabras con su primera letra en mayúsculas y, las demás, en minúsculas y no se usarán puntos para separarlas (ejemplo: CapWords);
para las constantes se seguirá la misma convención que para las funciones aunque se utilizará el prefijo `k`.

	      * `variable.name `BIEN: `avg.clicks`

MAL: `avg_Clicks `, `avgClicks `
	      * `FunctionName `BIEN: `CalculateAvgClicks`

MAL: `calculate_avg_clicks `, `calculateAvgClicks`

Usa verbos como nombres de funciones.

_Excepción: al trabajar con objetos, el nombre de la función (constructor) y la clase deben coincidir (p.e., lm)._
	      * `kConstantName `




	  2. **Sintaxis**

	    *


**Longitud de línea. **No más de 80 caracteres.



	    *


**Indentación. **Usar dos espacios para indentar. Nunca mezclar espacios y tabuladores.


_Excepción: cuando la línea se corte dentro de unos paréntesis, hay que alinear la línea seguiente con el primer caracter dentro del los paréntesis._
	    *


**Espaciado **Usar espacios alrededor de todos los operadores binarios (`=`, `+`, `-`, `<-`, etc.).


_ Excepción: los espacios alrededor de `=` son opcionales en las llamadas a una función._

Usar espacios siempre después de las comas, pero nunca antes de ellas.

BIEN:


    <code>tabPrior <- table(df[df$daysFromOpt < 0, "campaignid"])
    total <- sum(x[, 1])
    total <- sum(x[1, ])</code>


MAL:


    <code><span style="color: red;">tabPrior <- table(df[df$daysFromOpt<0, "campaignid"])  # Necesita espacios alrededor de '<'

    tabPrior <- table(df[df$daysFromOpt < 0,"campaignid"])  # Necesita un espacio tras la coma

    tabPrior<- table(df[df$daysFromOpt < 0, "campaignid"])  # Necesita un espacio antes de <-

    tabPrior<-table(df[df$daysFromOpt < 0, "campaignid"])  # Necesita espacios alrededor de <-

    total <- sum(x[,1])  # Necesita espacio después de la coma

    total <- sum(x[ ,1])  # Necesita un espacio después de la coma, no antes</code>


Usa un espacio delante del paréntesis izquierdo, salvo en llamadas a funciones.

BIEN: `if (debug)`

MAL: `if(debug)`

El espacio adicional en una línea (más de uno en una fila) es permisible si mejora la alineación del código.


    <code>plot(x    = xCoord,
         y    = dataMat[, makeColName(metric, ptiles[1], "roiOpt")],
         ylim = ylim,
         xlab = "dates",
         ylab = metric,
         main = (paste(metric, " for 3 samples ", sep="")))
    </code>


No usar espacios alrededor de código en paréntesis o corchetes.

_ Excepción: Usar espacio siempre antes de una coma._

BIEN:


    <code>if (debug)
    x[1, ]</code>


MAL:


    <code><span style="color: red;">if ( debug )  # No hay que colocar espacios alrededor de "debug"
    x[1,]  # Hace falta un espacio tras la coma</code>



	    *


**Llaves. **Una llave nunca se abre en una línea nueva; sin embargo, siempre se cierran en una línea nueva.Las llaves pueden omitirse cuando encierren una única expresión; sin embargo, esta regla debe seguirse de manera _consistente_.





    <code>
    if (is.null(ylim)) {
      ylim <- c(0, 0.06)
    }</code>


xor (no los dos a la vez)


    <code>
    if (is.null(ylim))
      ylim <- c(0, 0.06)</code>


Hay que comenzar el cuerpo de un nuevo bloque en una línea nueva.

MAL:

` if (is.null(ylim))
ylim <- c(0, 0.06)`

` if (is.null(ylim))
{ylim <- c(0, 0.06)} `
	    *


**Asignaciones. **Usar `<-`, no `=`, para realizar asignaciones.


BIEN: ` x <- 5 `
MAL: ` x = 5`
	    *


**Puntos y comas. **No terminar las líneas con puntos y comas. No utilizar puntos y comas para escribir más de una expresión en la misma línea. Nótese que los puntos y comas no son necesarios y que se omiten por consistencia con otras guías de estilo de Google.





	  3. **Organización**

	    *


**Distribución general y organización. **Si todos siguen los mismos proncipios, podremos leer y entender el código de los demás más rápidamente.




	      1. Copyright
	      2. Autor
	      3. Descripción del fichero, incluyendo la finalidad del programa, sus entradas y sus salidas
	      4. Comandos `source()` y `library()`
	      5. Definición de las funciones
	      6. Resto del código, si es aplicable (p.e., ` print`, `plot`)

Los tests unitarios deberían incluirse en un fichero aparte llamado `originalfilename_unittest.R`.
	    *


**Comentarios. **Usa comentarios en el código. Las líneas que consistan en comentarios deben comenzar por `#` seguido de un espacio.Los comentarios breves pueden ubicarse tras el código, separados de éste por dos espacios, un `#` y un espacio más.





    <code># Crear histograma de frecuencias de campañas según porcentaje del presupuesto
    hist(df$pctSpent,
         breaks = "scott",  # método para elegir el número de buckets
         main   = "Histogram: fraction budget spent by campaignid",
         xlab   = "Fraction of budget spent",
         ylab   = "Frequency (count of campaignids)")
    </code>



	    *


**Funciones: definiciones y llamadas. **La definición de las funciones debe contener primero los argumentos sin valores por defecto.


En la definición y llamadas a funciones se permiten múltiples argumentos por línea. Las nuevas líneas sólo deben separar asignaciones.
BIEN:


    <code>PredictCTR <- function(query, property, numDays,
                           showPlot = TRUE)
    </code>


MAL:


    <code><span style="color: red;">PredictCTR <- function(query, property, numDays, showPlot =
                           TRUE)
    </code>


Idealmente, las pruebas unitarias deberían servir como ejemplo de llamadas a funciones (para rutinas de librerías compartidas).
	    *


**Documentación de funciones. **Las funciones deberían tener una sección de comentarios inmediatamente debajo de la línea de definición de la función. Tales comentarios deberían consistir en una frase que definiese la función, una lista de los argumentos de la función precedida por `Args:` con una descripción de cada uno de ellos, incluido su tipo y una descripción del valor devuelto por la función precedido por `Returns:`. Los comentarios deberían ser lo suficientemente descriptivos como para que un usuario pudiera utilizar la función sin tener que leer su código.



	    *


**Ejemplo de función**





    <code>
    CalculateSampleCovariance <- function(x, y, verbose = TRUE) {
      # Computes the sample covariance between two vectors.
      #
      # Args:
      #   x: One of two vectors whose sample covariance is to be calculated.
      #   y: The other vector. x and y must have the same length, greater than one,
      #      with no missing values.
      #   verbose: If TRUE, prints sample covariance; if not, not. Default is TRUE.
      #
      # Returns:
      #   The sample covariance between x and y.
      n <- length(x)
      # Error handling
      if (n <= 1 || n != length(y)) {
        stop("Arguments x and y have invalid lengths: ",
             length(x), " and ", length(y), ".")
      }
      if (TRUE %in% is.na(x) || TRUE %in% is.na(y)) {
        stop(" Arguments x and y must not have missing values.")
      }
      covariance <- var(x, y)
      if (verbose)
        cat("Covariance = ", round(covariance, 4), ".\n", sep = "")
      return(covariance)
    }
    </code>



	    *


**Estilo para los TODO. **Usa un estilo consistente para los TODO en el código.


`TODO(username): Descripción de lo que tiene que hacerse`


	  4. **Lenguaje**

	    *


**Attach. **El uso de `attach` puede producir muchos errores. Evítalo.



	    *


**Funciones. **Usar `stop()` para lanzar mensajes de error.



	    *


**Objetos y médotos. **El lenguaje S tiene dos tipos de sistemas de clases, S3 y S4, disponibles en R. Los métodos S3 son más interactivos y flexibles, mientras que los S4 son más formales y rigurosos.


(Para una ilustración de los dos sistemas, véase "Programmer's Niche: A Simple Class, in S3 and S4" in R News 4/1, 2004, pgs. 33 - 36:[
http://cran.r-project.org/doc/Rnews/Rnews_2004-1.pdf](http://cran.r-project.org/doc/Rnews/Rnews_2004-1.pdf) por Thomas Lumley.)

Usa objetos y objetos S3 a no ser que exista una razón poderosa para usar los del tipo S4.
Una justificación para usar objetos S4 sería la de poder manipularlos directamente desde C++.
Para usar métodos S4, sería poder despachar en función de dos argumentos.

Evita mezclar métodos S3 y S4: los métodos S4 ignoran la herencia de los S3 y a la inversa.


	  5. **Excepciones. **Las convenciones expresadas más arriba deberían ser seguidas de no haber un buen motivo para seguir otro criterio: por ejemplo, al usar código antiguo o de terceras partes.
	  6. **Consideraciones finales**

Usa el sentido común y SÉ CONSISTENTE.

Si estás editando código, tómate unos minutos para mirar alrededor y determinar cuál es el estilo del código. Si los autores originales usaban espacios alrededor de sus comandos `if `, deberías hacerlo tambén.

Si sus comentarios tienen cajas o estrellas alrededor, úsalas también.

El objetivo de tener un código de estilo es el usar un vocabulario común para poder concentrarse en lo que estás diciendo más que en cómo lo estás diciendo.
Al presentar unas reglas globales de estilo intentamos que se use un vocabulario común. Pero el estilo local es importante. Si el código que añades a un fichero sigue una convención distinta, la discontinuidad provocará el rechazo de quienes lo hereden. Trata de evitar eso.

Bien, y una vez finalizada la tarea sobre cómo escribir código, podemos comenzar a escribirlo, que es mucho más interesante. ¡Disfrutémoslo!
	  7. **Referencias**

[R Coding Conventions](http://www.maths.lth.se/help/R/RCC/)
[Para usuarios de emacs](http://ess.r-project.org/)
[Guía de estilo de R de Google](https://google.github.io/styleguide/Rguide.xml) (en inglés)
	  8. **Notas**

Esta guía de estilo de R es una traducción literal de [la de Google](http://google-styleguide.googlecode.com/svn/trunk/google-r-style.html) que he tomado la libertad de traducir para referencia y discusión propia y ajena. Datanalytics se hace responsable de todos los errores de traducción. Por otra parte, no se arroga (explícita o implícitamente) ningún tipo de derecho de copiright, autoría o similares: todos pertenecen a Google.

