---
author: Carlos J. Gil Bellosta
categories:
- cortos
date: 2025-05-20
description: Unos cuantos apuntes sobre estadística, estadística bayesiana, gráficos
  estadísticos y cuestiones relacionadas con el análisis de datos.
lastmod: '2025-06-25T20:51:42.965395'
related:
- 2023-09-07-problema-modelos-bayesianos-identicabilidad.md
- 2025-04-22-cortos-stats.md
- 2022-03-03-error-sesgo-modelos-lineales.md
tags:
- estadística
- gráficos
- interacciones
- estadística bayesiana
title: Estadística vs aprendizaje automático y algunos asuntos más
url: /2025/05/20/cortos-estadistica/
---

Cuando comparo valores reales contra estimados/predichos, tengo la costumbre de colocar los valores observados en el eje horizontal y las predicciones en el vertical. Así puedo ver si yerro por exceso o por defecto (con respecto a la línea, típicamente roja, $y = x$). Sin embargo, tanto en [este artículo](https://www.sciencedirect.com/science/article/abs/pii/S0304380008002305) como en [esta entrada de blog](https://statmodeling.stat.columbia.edu/2025/05/11/plotting-truth-vs-predicted-value/), se argumenta en favor de lo contrario.

Hay una diferencia sustancial entre el bayesianismo abstracto y el aplicado (o computacional): el primero siempre habla de aprendizaje secuencial y de encadenamiento de posterioris: la posteriori de un primer estudio con unos datos parciales se convierte automáticamente en la priori de uno posterior con un conjunto de datos adicional. En la versión práctica, solo es posible en ciertos casos concretos (p.e., cuando hay distribuciones conjugadas) pero no en general. En general uno obtiene una _descripción_ de la posteriori en términos de una serie de muestras que no hay forma de utilizar después como priori. Sin embargo, pasan cosas como
[esta](https://statmodeling.stat.columbia.edu/2025/05/13/chaining-bayes-priors-from-posteriors/) o
[esta](https://statmodeling.stat.columbia.edu/2025/05/15/using-stan-to-do-sequential-bayesian-updating/.)

[Aquí](https://statmodeling.stat.columbia.edu/2025/03/20/why-i-use-the-term-forking-paths/), alguien propone una alternativa al término _caminos que se bifurcan_ (en inglés, _forking paths_). Uno de los argumentos que esgrime para dejar de usar la expresión es que solo _resuena_ en quienes han leído a Borges. Aquí nos gusta _particularmente_ por eso.

Una de mis obsesiones es el estudio de las interacciones en los modelos y todo lo que podemos aprender de ellas. Pero en [_Dear Political Scientists: The binning estimator violates ceteris paribus_](https://datacolada.org/123), los autores de DataColada muestran cómo en ciertas situaciones, la no-linealidad puede hacer aflorar interacciones espurias.

La regla general es no mostrar más dígitos que los verdaderamente significativos (creía haber tratado el tema previamente, pero parece que no). Sin embargo, [Dynomight discrepa](https://dynomight.substack.com/p/digits): quiere ver muchos dígitos para, en particular, ser capaz de detectar fraude (y, en general, de tener cierta evidencia acerca de las operaciones realizadas).

[Aquí](https://statmodeling.stat.columbia.edu/2023/01/14/bayesian-statistics-and-machine-learning-how-do-they-differ/) discute Gelman la diferencia entre análisis estadístico (y, en particular, bayesiano) y aprendizaje automático:
- Aprendizaje automático: para situaciones con muchos datos y mínima estructura (conocida).
- Estadística: estructura conocida y prioris fuertes.