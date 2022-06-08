---
author: Carlos J. Gil Bellosta
date: 2022-06-21
title: 'Matrices de confusión, sensibilidad, especificidad, curva ROC, AUC y todas esas cosas'
description: 'Una breve introducción a los conceptos de matriz de confusión, sensibilidad, especificidad, curva ROC y AUC'
url: /2022/06/21/matriz-confusion-sensibilidad-especificidad-etc/
categories:
- estadística
tags:
- ciencia de datos
- estadística
- sensibilidad
- especificidad
- curva roc
- auc
- matriz de confusión
---

Esta entrada es una breve introducción a los conceptos indicados en el título. Está motivada por una pregunta que se formuló en Twitter acerca de la existencia o no de lo que voy a escribir en español y a que ninguna de las respuestas aportadas me satisfizo.

Todos esos conceptos hacen referencia al estudio de la bondad de un modelo de clasificación (es decir, un modelo que trata de predecir una etiqueta (o una variable categórica, si se quiere) a partir de ciertos datos). Comenzaré por una descripción _exenta_ de esos conceptos y terminaré con una discusión desde la perspectiva de su aplicación práctica que, espero, sirva para ponerlos en su lugar.

## _Accuracy_

La _accuracy_ (¿existe alguna traducción universalmente aceptada del término?) es, si se quiere, el único número que mejor describe la bondad de un modelo de clasificación: es el porcentaje de aciertos. El siguiente bloque de código ilustra cómo calcularlo en un caso sencillo:

{{< highlight R >}}
library(party)
modelo <- ctree(Species ~ ., data = iris)
mean(iris$Species == predict(modelo))
# [1] 0.96
{{< / highlight >}}

La _accuracy_ de este modelo ---calculada, por brevedad, sobre el conjunto de entrenamiento; debería haberlo hecho sobre un conjunto de validación--- es del 96%; es decir, que da con la etiqueta correcta el 96% de las veces.

El problema de la _accuracy_ es la de todos los resúmenes con un solo número de una realidad compleja: se le escapan muchos detalles y hay situaciones en las que puede resultar engañoso. La crítica _de libro_ de la _accuracy_ es la siguiente: un modelo para identificar billetes falsos (imaginemos que solo lo son el 0.1% de ellos) que nunca prediga _falso_ ---es decir, un modelo trivial--- tendría una _accuracy_ del 99.9%.

## Matriz de confusión

Si la variable objetivo tiene $N$ categorías, la matriz de confusión es un resumen de la bondad del modelo que usa $N \times N$ números. Por lo tanto, es presumible ---y lo es, de hecho--- mucho más informativa que la _accuracy_.

La matriz de confusión para el ejemplo anterior se construye así:

{{< highlight R >}}
table(iris$Species, predict(modelo))

#             setosa versicolor virginica
#  setosa         50          0         0
#  versicolor      0         49         1
#  virginica       0          5        45
{{< / highlight >}}

La tabla (o matriz) anterior muestra los valores _reales_ en filas y los predichos en columnas. En particular, las 50 setosas fueron clasificadas como tales; sin embargo, 5 virgínicas fueron erróneamente clasificadas como versicolores, etc. Los _aciertos_ están en la diagonal; los fallos, fuera de ella.

La matriz de confusión puede interpretarse como una _ampliación_ de la _accuracy_ porque nos da más información sobre dónde se cometen los aciertos y los fallos. En la matriz de confusión anterior aprendemos, por ejemplo, que el modelo clasifica correctamente todas las observaciones de la clase `setosa` y que los errores son confusiones entre las etiquetas `versicolor` y `virginica`. Posiblemente, las observaciones de estas dos categorías son más similares entre sí y, por lo tanto, más difíciles de distinguir para el modelo.

## Matriz de confusión en problemas de clasificación binaria

Los problemas de clasificación más frecuentes son aquellos en los que hay dos clases (en lo sucesivo y por simplificar, `sí` y `no`). La matriz de confusión es $2 \times 2$ (es decir, contiene solo cuatro números). Supongamos que es

|  | sí | no |
|:------------| :------- | :------ |
|**sí**|ss|sn|
|**no**|ns|nn|

donde, de nuevo, las filas corresponden a la realidad y las columnas, a las predicciones (y `ss`, etc. son números cuya etiqueta sigue un patrón obvio).

Existen varios indicadores que pueden hacerse de esa tabla que tienen más o menos importancia, como se discutirá después, según el contexto. Todos ellos no son otra cosa que lo que su propio nombre indica. Los más destacados son:

* Nuestra amiga la **_accuracy_**, que no es otra cosa que `(ss + nn) / (ss + sn + ns + nn)`.
* La **tasa de falsos positivos**: los _positivos_ son aquellos para los que el modelo predice sí. Por lo tanto, son `ss + ns`. De ellos, `ns` son _falsos_. ¿Qué más hay que añadir?
* La **tasa de falsos negativos**: no puede ser otra cosa que `sn / (sn + nn)`.
* La **sensibilidad**. Alguien es _sensible_ cuando es capaz de identificar o percibir un estímulo. Un modelo es sensible cuando es capaz de identificar los síes. Así que la sensibilidad no puede ser otra cosa que `ss / (ss + sn)`, es decir, los síes detectados entre los síes totales.
* La **especificidad**. Algo es específico cuando está indicado para un fin determinado. En nuestro contexto, un modelo sería específico cuando solo detecta los síes y no otra cosa. De ahí que la especificidad se defina como `nn / (ns + nn)`, es decir, la proporción de noes correctamente identificados como tal. Una alta especificidad, por lo tanto, garantiza que casi no hay noes entre los casos positivos. (O, si se quiere, la especificidad es la sensibilidad a los noes.)

En las películas de abogados, los testigos juran decir _la verdad, toda la verdad y nada más que la verdad_. Nuestros modelos aspiran a identificar los síes, todos los síes y nada más que los síes. Aquí, _todos los síes_ está relacionado con la sensibilidad y _nada más que los síes_, con la especificidad.

Los falsos positivos y los falsos negativos por un lado y la sensibilidad y la especificidad por otro, son conceptos _ligados_ en un sentido muy específico: como se verá en la sección siguiente, existen maneras de mejorar uno a costa de empeorar el otro. Es un [NFL](https://en.wikipedia.org/wiki/No_free_lunch_theorem).


## Curva ROC y AUC

En las secciones anteriores se está asumiendo que ya existe una regla de decisión tomada que asigna las etiquetas sí y no automáticamente. Discutir la curva ROC y el AUC requiere echar un paso atrás prestar atención a los _scorings_. Muchos modelos de clasificación binaria ---¿todos?--- no producen una etiqueta sino un valor, un _scoring_ a partir del cual se determina la decisión final (p.e., asignar sí cuando el scoring es $\ge .78$).

El _scoring_ nos permite representar la información necesaria para nuestro problema de clasificación así:

![](/wp-uploads/2022/06/roc_curve_00.png#center)

En esa gráfica se muestra la distribución del _scoring_ tanto para las observaciones etiquetadas (verdaderamente) como sí y como no. También se muestra el punto de corte de una hipotética regla de clasificación como una recta vertical. Los falsos positivos estarían en la cola derecha (a la derecha de la línea vertical) del histograma ¿rosa? y los falsos negativos, las de la cola izquierda del histograma ¿azul?

En un modelo _óptimo_ ambos histogramas estarían separados; en uno _pésimo_, sobreimpresos. Lo habitual es tener cierto grado de solapamiento y medir la bondad del ajuste del modelo equivale a medir de alguna manera dicho grado de solapamiento.

De todas las posibles manera de hacerlo se ha optado tradicionalmente por una de las peores y más confusas: la curva ROC y el AUC. Es una de las decisiones colectivas que, seguramente, y junto con las gráficas 3D, más perjuicios hayan causado en nuestra profesión. Lo más suave que se puede decir de ellas es que fueron la ocurrencia, como se verá, de un tarado.

Acabada la digresión, vuelvo a la curva ROC y el AUC. Si se moviese el punto de corte a otro valor cambiarían las entradas de la matriz de confusión (seguro que alguien ha creado una animación o alguna aplicación interactiva al respecto: que me avise y la enlazo), así como la tasa de falsos positivos, la tasa de falsos negativos, la sensibilidad y la especificidad. De hecho, si se mueve la línea al extremo izquierdo ---es decir, el modelo siempre predice sí---, el modelo tendría una alta sensibilidad y una especificidad nula; en el extremo derecho pasaría lo contrario: nula sensibilidad y especificidad del 100%.

Si uno representa cómo varían la especificidad y la sensibilidad al ir moviendo la recta vertical en un gráfico, obtiene la curva ROC:

![](/wp-uploads/2022/06/roc_curve_01.png#center)

Idealmente, uno querría alta especificidad y alta sensibilidad, por lo que cuanto más alejada esté la curva del origen, tanto mejor será el modelo. El lector puede plantearse como ejercicio pensar cómo sería la curva ROC tanto del modelo perfecto como del pésimo.

[Vale, en este punto, la gran mayoría de mis lectores estarán bufando porque lo que yo llamo curva ROC no es lo que el tarado que inventó la curva ROC llamó curva ROC. Pero hay que ser muy tarado para representar en el eje horizontal no la especificidad sino 1 - especificidad y así, además, _privilegiar_ el punto (1, 0) (en lugar del mucho más natural (0,0)).]

Así las cosas, si se comparan dos modelos y la curva ROC del primero _engloba a_ (queda por fuera de) la del segundo, el primer modelo será preferible al segundo: para un mismo nivel de sensibilidad tendrá más especificidad, etc.

Sin embargo, un gráfico no es un buen resumen de la bondad de un modelo y en muchas situaciones se requiere (o exige) un número (que es más fácil de comunicar y comparar). De esa necesidad surge el AUC (o área bajo la curva) que es la integral de la curva ROC. El AUC del modelo perfecto, por lo tanto, será 1 y la del _pésimo_, 0.5.

El binomio curva ROC/AUC presenta varios problemas de entre los que destaco dos:

* Resume información sobre puntos de corte potenciales distintos del que acabaría usándose en la regla de decisión final.
* Modelos muy buenos para un determinado problema concreto pueden tener valores del AUC muy bajos y a la inversa. Son indicadores que solo sirven para discriminar entre modelos aplicados a un mismo problema. Pero puede suceder que en una industria haya gente construyendo modelos con un AUC de alrededor del 90% y, en otra, del 60% sin que de ahí pueda edificarse juicio de valor alguno.

## Todo lo anterior, en la práctica

Uno de los motivos por los que la discusión de los temas anteriores resulta confusa en un aula o en un libro es porque se estudian de manera exenta, al margen de las circunstancias específicas de las aplicaciones concretas. Uno lee sobre estos temas y queda sumido en la duda: ¿le doy más importancia a los falsos positivos o a la sensibilidad?, ¿a cuál de estos indicadores hay que prestar más atención?, ¿por qué?, ¿de qué depende?

La respuesta está en los costes. Más bien, en la asimetría de costes entre incurrir en falsos positivos y falsos negativos. Que es algo que, por ejemplo, no _ve_ la _accuracy_.

Por poner un ejemplo e interpretando el sistema judicial como un _modelo_ que predice culpabilidad, en un estado de derecho habría que tratar de minimizar los falsos positivos (inocentes declarados culpables); pero un régimen policial menos benevolente podría estar más preocupado de los falsos negativos.

El lector aquí llegado debería plantearse una serie de contextos (p.e., detección de fraude, detección de enfermedades, predicción de la criminalidad, selección de personal, selección de destinatarios de una campaña publicitaria por correo electrónico, etc.) en los que podrían aplicarse modelos y determinar ---haciendo uso del sentido común, por supuesto--- a qué indicador de la bondad del ajuste debería prestársele más atención en cada uno de ellos.

