---
author: Carlos J. Gil Bellosta
categories:
- estadística
date: 2022-02-17
lastmod: '2025-04-06T18:49:31.093987'
related:
- 2019-01-23-reglas-de-scoring-impropias-un-ejemplo.md
- 2019-01-16-una-de-las-mil-maneras-malas-de-elegir-al-mejor-predictor.md
- 2023-03-02-conformal-prediction.md
- 2022-06-21-matriz-confusion-sensibilidad-etc.md
- 2019-12-04-p-valores-y-decisiones.md
tags:
- exámenes
- scorings
- brier
title: Exámenes probabilísticos
url: /2022/02/17/examenes-probabilisticos/
---

**I.**

Es habitual tener dos modelos $m_1$ y $m_2$ y querer compararlos. Supongamos que son modelos de clasificación binaria ---aunque nada de lo que sigue cambia realmente si son de clasificación categórica en un sentido más amplio---; vamos a suponer también que son modelos probabilísticos, en el sentido de que no producen directamente una predicción sino una probabilidad que puede luego convertirse en una predicción de acuerdo con cierta regla (p.e., predecir la categoría más probable).

¿Cómo se evalúan los modelos? Se toma un conjunto de datos, se los pone a predecir y se comparan los resultados usando _scorings_.

**II.**

Existen muchos tipos de _scorings_, pero las taxonomías habituales distinguen dos categorías generales: los propios y los impropios. Los _scorings_ impropios fomentan el comportamiento estratégico (i.e., que el modelo estime una probabilidad pero _publique_ otra más conveniente, como [aquí](/2019/01/21/scorings-interpolando-y-extrapolando-entre-el-de-brier-y-el-lineal/)) y pueden hacer que un modelo inferior parezca superior (véase, por ejemplo, [esto](/2019/01/23/reglas-de-scoring-impropias-un-ejemplo/)).

Uno de los _scorings_ más populares es el _accuracy_, o proporción de aciertos. Desafortunadamente, no es un _scoring_ propio.

**III.**

Los defensores del _accuracy_ argumentan lo siguiente (p.e., [aquí](https://stats.stackexchange.com/questions/208529/when-is-it-appropriate-to-use-an-improper-scoring-rule)):

* Al final, lo importante es la predicción; si un modelo predice sistemáticamente mejor que otro, es _mejor_.
* El que dichas predicciones puedan estar basadas en probabilidades sesgadas es irrelevante si a uno le da igual la inferencia clásica (o la _explicabilidad_ del modelo).

Y tienen cierta razón.

**IV.**

Sin embargo, es útil contar con la confianza de las predicciones: una predicción con una confianza baja podría ser analizada específicamente en un caso de uso real. Porque no es lo mismo que te digan _tienes una fisura en la rótula_ que _podría ser que tuvieses una fisura en la rótula_; en el segundo caso, es probable que acaben realizando una radiografía adicional, por ejemplo.

![](/wp-uploads/2022/02/image_prediction_confidence.png#center)

Así que querríamos que nuestros modelos:

* Proporcionasen la confianza de sus predicciones.
* Asignasen una probabilidad alta a sus predicciones cuando acertasen.
* Errasen con una confianza relativamente baja.


**V.**

Un examen de respuesta múltiple (o binaria) no es otra cosa que un procedimiento como el indicado al principio para comparar _modelos_ (o estudiantes). A estos se les pone delante un conjunto de datos nuevo y se les pide que realicen predicciones. Dichas predicciones se suelen evaluar usando un _scoring_ impropio: el _accuracy_.

¿No tendría más sentido usar un _scoring_ propio?


**Notas finales:**

1. El hecho de que tendría más sentido usar un _scoring_ propio nos lo revela, además, el hecho de que en muchos exámenes de respuesta múltiple se penaliza más el error que el dejar la respuesta en blanco. ¡Es una manera rudimentaria de evitar los problemas que plantea que el _accuracy_ sea impropio!
2. Seguro que no soy el primero al que se le ha ocurrido la idea y que de adentrarme en la literatura sobre la cosa encontraría muchas referencias a resultados empíricos acerca de por qué mi propuesta no funcionaría. Pero no, no voy a convertirme en abogado de una quimera; me interesa más la discusión sobre los _scorings_ propios e impropios que sus presuntas aplicaciones a este o aquel problema particular.
3. Quizás a alguien le interese probar algunos de los ejercicios que aparecen en [_A List of Probability Calibration Exercises_](https://www.lesswrong.com/posts/LdFbx9oqtKAAwtKF3/list-of-probability-calibration-exercises). Son enlaces a _exámenes_ de cultura más o menos general donde uno puede indicar la confianza con que elige una u otra opción. No son propiamente ejercicios de calibración (el título es, pues, engañoso) sino de evaluación propiamente dicha. La calibración es otra cosa: una predicción que predijese siempre la respuesta A con una confianza del 50% estaría bien calibrada pero no valdría para un carajo (en la mayoría de los casos de uso que se me ocurren ahora).