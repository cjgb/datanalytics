---
author: Carlos J. Gil Bellosta
categories:
- estadística
date: 2014-04-02 07:50:42+00:00
draft: false
lastmod: '2025-04-06T18:47:08.403159'
related:
- 2014-04-07-analisis-factorial-e-ideas-que-se-resisten-a-morir.md
- 2014-06-19-factorizaciones-positivas-de-matrices-igualmente-positivas.md
- 2020-04-13-regresion-tradicional-vs-multinivel.md
- 2020-06-29-sobremuestreando-x-y-no-y.md
- 2011-08-12-una-feliz-conjuncion-estadistico-algebraica.md
tags:
- análisis factorial
- componentes principales
- estadística
- varianza
- varimax
title: 'Varimax: lo que se gana, lo que se pierde'
url: /2014/04/02/varimax-lo-que-se-gana-lo-que-se-pierde/
---

Hoy hablaremos de [_exploratory factorial analysis_](http://en.wikipedia.org/wiki/Exploratory_factor_analysis) y en particular aprovecharé para dejar constancia de que dejo resuelta una duda que siempre me ha dado pereza resolver: qué se pierde —lo que se gana ya nos lo han contado por doquier— al realizar una [rotación varimax](http://en.wikipedia.org/wiki/VARIMAX).

Comencemos. Primero, voy a realizar un análisis factorial (exploratorio) basándome en `?varimax`:

{{< highlight R >}}
fa <- factanal( ~., 2, data = swiss, rotation = "none")
fa

# Call:
#   factanal(x = ~., factors = 2, data = swiss, rotation = "none")
#
# Uniquenesses:
#   Fertility      Agriculture      Examination        Education         Catholic Infant.Mortality
# 0.420            0.492            0.270            0.005            0.061            0.960
#
# Loadings:
#   Factor1 Factor2
# Fertility        -0.674   0.356
# Agriculture      -0.648   0.297
# Examination       0.713  -0.471
# Education         0.997
# Catholic         -0.178   0.953
# Infant.Mortality -0.104   0.169
#
# Factor1 Factor2
# SS loadings      2.419   1.373
# Proportion Var   0.403   0.229
# Cumulative Var   0.403   0.632
#
# Test of the hypothesis that 2 factors are sufficient.
# The chi square statistic is 20.99 on 4 degrees of freedom.
# The p-value is 0.000318
{{< / highlight >}}


Usando `factanal` he creado dos factores sobre el conjunto de datos `swiss` y he optado por no usar nigún tipo de rotación.

Dos notas al respecto. La primera es que `factanal` no utiliza PCA internamente para obtener los factores. Existe cierta confusión entre el análisis factorial y el de los componentes principales (véase [esto](http://en.wikipedia.org/wiki/Factor_analysis#Exploratory_factor_analysis_versus_principal_components_analysis) al respecto) a la que pudiera haber contribuido el hecho de que en SPSS (o al menos, ciertas versiones) el análisis de componentes principales es un _modo_ (al menos, está en el mismo menú y bajo el epígrafe _factores_) del análisis factorial. De hecho, [en SPSS un análisis factorial con las opciones por defecto es un PCA](http://www.unt.edu/rss/class/Jon/SPSS_SC/Module9/M9_PCA/SPSS_M9_PCA1.htm).

El segundo es que en el análisis factorial los factores son ortogonales por definición y construcción. Aunque bien es cierto que existen técnicas de _rotación_ no ortogonales que hacen que los factores finales pierdan esa siempre conveniente propiedad.

Retomando el asunto de la entrada y abundando en la segunda nota, una vez obtenidos los resultados anteriores, es posible plantearse el _rotar_ los factores obtenidos. En efecto, los factores obtenidos son únicos salvo por rotaciones. Dicho de otro modo, cualquier rotación de los obtenidos es un conjunto de factores _igual de válido_ que el original. Cómo no, cierta gente las utiliza de oficio —en ocasiones subrepticiamente: incluso en R, la función _factanal_ rota los factores si no se indica explícitamente lo contrario... ¡y qué no harán SPSS, SAS y demás!— para aliñar su ensalada de factores.

(Otra nota: invito a mis lectores a sopesar los efectos de las rotaciones subrepticias sobre la reproducibilidad, esa propiedad tan deseable de los análisis estadísticos).

Rotaciones como las que produce varimax facilitan la _interpretabilidad_ de los factores. Tienden a aplastar los coeficientes pequeños y a hacer crecer los grandes de manera que sus _perfiles_ pueden asociarse más fácilmente a un subconjunto concreto de variables. Estos subconjuntos de variables más involucradas en un factor determinado permiten intuir un significado y, esto es muy importante en ciertos ámbitos, asociarles un nombre.

Pero, ¿qué se pierde? Veámoslo:

{{< highlight R >}}
varimax(loadings(fa), normalize = FALSE)
# $loadings
#
# Loadings:
#   Factor1 Factor2
# Fertility        -0.650   0.398
# Agriculture      -0.628   0.337
# Examination       0.681  -0.515
# Education         0.997
# Catholic         -0.117   0.962
# Infant.Mortality          0.176
#
# Factor1 Factor2
# SS loadings      2.297   1.495
# Proportion Var   0.383   0.249
# Cumulative Var   0.383   0.632
#
# $rotmat
# [,1]        [,2]
# [1,] 0.99796647 -0.06374102
# [2,] 0.06374102  0.99796647
{{< / highlight >}}

Los coeficientes de los factores han cambiado. El artefacto —de impredecibles consecuencias— consistente en omitir los coeficientes menores en valor absoluto que 0.1 oculta el de la variable `Infant.Mortality` en el segundo caso (y da la impresión, errónea por otro lado, de que el primer factor no depende de ella). Etc. Por otro lado, la varianza explicada acumulada no ha variado: 63.2%.

Entonces, ¿qué se ha perdido? La varianza explicada por el primer factor, 40.3% ha descendido al 38.3%. Los factores principales ya no se orientan en las direcciones (en orden descendiente) de máxima variación sino que se reorientan en función de otros objetivos que el algoritmo original no tenía en cuenta y esta se distribuye más homogéneamente entre todos los factores.

Y acabo con una reflexión: ¿cómo afecta la rotación al _screeplot_? Y dado que este puede usarse como criterio para seleccionar el número de factores relevantes, ¿cómo estarán afectando en la práctica las rotaciones (subrepticias en muchas ocasiones) a la selección del número de factores que conservar? ¿Tiene sentido estudiar el _screeplot_ después de efectuada la rotación?

Nota: Me he basado en [este artículo](http://sites.stat.psu.edu/~ajw13/stat505/fa06/17_factor/13_factor_varimax.html) pero he preferido escribir aquí mi propio código reproducible gratuitamente.