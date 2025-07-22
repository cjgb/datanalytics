---
author: Carlos J. Gil Bellosta
categories:
- estadística
date: 2023-03-02
lastmod: '2025-04-06T19:07:50.871672'
related:
- 2024-02-01-optimizacion-generalizacion.md
- 2024-10-17-interpretacion-modelos.md
- 2024-03-05-sobreajuste-modelos-bayesianos.md
- 2012-01-12-localidad-globalidad-y-maldicion-de-la-dimensionalidad.md
- 2022-03-03-error-sesgo-modelos-lineales.md
tags:
- predicción
- predicción conforme
- errores
- varianza
title: Breve introducción crítica a la llamada "predicción conforme"
url: /2023/03/02/prediccion-conforme/
---

Pensé que había hablado antes de la llamada predicción conforme. Lo habré soñado. Así que me pongo con ello.

Me retrotraigo a hace unos cuantos años, antes de la explosión del _deep learning_, a la época en la que aún tenía vida social. Uno de los pioneros de esas técnicas me contaba un día en un restaurante cómo funcionaban. Por ejemplo, para clasificar, creaban unas funciones muy complejas cuya salida era un vector (largo) de números positivos que sumaban uno. Cuando todos esos números eran casi cero y uno de ellos, el que correspondía a la etiqueta "conejo", era casi uno, el modelo decía: "conejo". Etc.

La pregunta es muy obvia: ¿qué pasa si tienes configuraciones distintas? ¿Qué pasa si la componente más alta del vector resultante es pequeña? ¿Qué pasa si tienes un 0.5, un 0.4 y un montón de otros números pequeños? Etc. Pero aquel experto no estaba todavía en condiciones de darme una respuesta convincente.

Han pasado los años y ahora existe la llamada _predicción conforme_. Hay mucho escrito por ahí y, de hecho, hace unos pocos días salió
[un libro](https://leanpub.com/conformal-prediction/c/zFAwIlcHZhk0)
que podría hacer el tema más asequible al interesado fundamentalmente por sus aplicaciones.

El problema al que la llamada predicción conforme trata de dar respuesta es el de cuantificar la incertidumbre en las predicciones (esencialmente, de los modelos propios del _deep learning_). Algo que, obviamente, no es en absoluto desconocido en la estadística tradicional; aunque, por lo que parece, sí entre un número suficiente de científicos de datos de la nueva ola. En concreto, los proponentes de la predicción conforme fijan una confianza, ---o probabilidad, o como quiera que lo denominen--- del, digamos, 90% y:

* En problemas de _regresión_ tratan de construir intervalos que capturen el valor real del indicador predicho en el 90% de los casos.
* En problemas de _clasificación_, tratan de listar todas las posibles categorías cuyas probabilidades sumen aproximadamente ese 90%.

Es decir, se pasa de predecir etiquetas/números a colecciones de etiquetas/rangos de números con una alta _probabilidad_ de contener el valor _real_. Obviamente, tratando de que esas colecciones e intervalos sean lo más pequeños posibles. Se podría plantear incluso en términos similares al de la programación lineal: extraer el conjunto de etiquetas de la mínima cardinalidad de manera que la suma de las probabilidades de sus elementos sume más del 90%.

En problemas de clasificación, el principal problema que encuentra el proyecto anterior es que las salidas del modelo no tienen por qué ser verdaderas probabilidades. Son meros _scorings_ que, de alguna manera hay que convertir en ---o hacer pasar por--- verdaderas probabilidades. En los problemas de regresión, por su parte, es que se desconoce la distribución del error. Y se proponen técnicas basadas en ---cómo no--- remuestreos para estimarlo y construir así intervalos de predicción.

La clave en ambos casos ---quiero advertir a quien se sienta tentado en profundizar en la literatura de estos métodos--- es lo que se postula y lo que no. Y, claro está, si es razonable en cada aplicación concreta. Porque en estadística se hace lo mismo: se parte, p.e., de un modelo del que se dice: tiene error normal de varianza constante para toda $x$. Lo cual puede o no ser sostenible en ese caso concreto. Además, luego, se estima esa varianza del error a partir de los datos de entrenamiento.

En la predicción conforme, en la forma particularísima en que plantea el problema de estimación del error, también, sumergido en los algoritmos, se encuentran una serie de postulados más o menos gratuitos que permiten estimar el error. Es el usuario el que tiene que pararse a pensar si da por hecho que el error no varía con $x$, etc. Para, de nuevo, preguntarse si se tiene o no de pie en el problema en cuestión.

_[Eh, aunque igual, si usas predicción conforme, siendo cosa nueva y guay, nadie va a cuestionar los resultados. Y, entonces, tampoco merece la pena escuadriñar las condiciones bajo las que el método funciona y no. Si alguien pone algún pero, siempre puedes defenderte recurriendo a las técnicas de razonamiento espurio habituales.]_

Así que, como siempre, ¡caveat, emptor!