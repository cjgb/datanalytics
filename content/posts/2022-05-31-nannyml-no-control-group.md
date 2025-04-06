---
author: Carlos J. Gil Bellosta
categories:
- estadística
date: 2022-05-31
description: Evaluando NannyML y la promesa de que estima la bondad de un modelo sin
  necesidad de un grupo de control
lastmod: '2025-04-06T19:05:10.818831'
related:
- 2023-03-02-conformal-prediction.md
- 2022-03-03-error-sesgo-modelos-lineales.md
- 2019-12-04-p-valores-y-decisiones.md
- 2022-12-22-correlacion-y-y-hat.md
- 2023-10-19-errores-chatgpt.md
tags:
- modelización
- nannyml
- grupo de control
title: 'NannyML: ¿estima realmente la bondad de un modelo sin grupo de control?'
url: /2022/05/31/nannyml/
---

Imaginemos que tenemos un modelo para resolver un problema de clasificación binaria. Supongamos, sin pérdida de generalidad (cámbiese lo que haya de cambiarse), que se trata de un árbol.

Ese árbol se entrena con datos Madrid y define $K$ grupos (nodos terminales) $G_1, \dots, G_K$ donde la probabilidad _de acertar_ ---estimada usando algún conjunto de validación--- es $p_1, \dots, p_K$. Además, se conoce el tamaño $n_i$ de los grupos $G_i$ en Madrid.

Con esa info, es trivial estimar el error cometido (_accuracy_) por el modelo (en Madrid). Será

$$ \frac{\sum n_i p_i}{\sum n_i}.$$

Ahora nos preguntan: ¿es posible estimar el error qu cometería el modelo en Zaragoza sin necesidad de utilizar un grupo de validación? La respuesta es que sí de cumplirse:

1. Damos por bueno que el modelo se comporta igual en Madrid y en Zaragoza. Es decir, que las $p_i$ son iguales en ambas ciudades (o, expresado con más palabras, que si una observación de Zaragoza cae en el nodo $G_i$, su probabilidad _de éxito_ es la misma que si fuese de Madrid).
1. Que, de cambiar algo, entre Madrid y Zaragoza, es solo el tamaño relativo de los grupos $G_i$.

En tal caso, la estimación del error cometido en Zaragoza podría estimarse mediante

$$ \frac{\sum n^\prime_i p_i}{\sum n^\prime_i}$$

donde $n^\prime_i$ es el tamaño del grupo $G_i$ en Zaragoza.

[Es obvio en este punto que la elección de árboles para ilustrar el argumento anterior puede relajarse sustancialmente pero que la discusión y la notación usadas más arriba habrían resultado mucho más oscuras. Pero confío en la madurez del lector para realizar las modificaciones conceptuales necesarias para hilar un argumento general.]

A esta trivialidad se la conoce como
[_Confidence-based Performance Estimation_](https://nannyml.readthedocs.io/en/main/how_it_works/performance_estimation.html), forma parte de una libraría innecesaria de Python llamada
[NannyML](https://nannyml.readthedocs.io/en/main/index.html)
y nos la han querido vender en
[_Predict Your Model’s Performance (Without Waiting for the Control Group)_](https://towardsdatascience.com/predict-your-models-performance-without-waiting-for-the-control-group-3f5c9363a7da)
como un mecanismo para medir el error cometido por los modelos sin usar ningún tipo de conjunto de control.

### Coda

Admito que el artículo anterior puede tener muchas lecturas. Además, que unas pueden ser más caritativas que otras. Tengo la sospecha ---y resultados experimentales con $n = 1$--- de que busca premeditadamente atraer la atención de gente nueva en la profesión ávida de trucos para evaluar modelos obviando el enojoso trámite del conjunto de control. En el peor de los casos, además, para llevar la contra a otros más sabidos con aquello de que _pues vi en internet que..._. En previsión de tales males y por si puede servir de ayuda a otros, dejo escrito todo lo anterior.

### Nota final

Esta entrada fue motivada por una discusión al respecto con José Luis Cañadas, que escribió su propia _versión de los hechos_ [aquí](https://muestrear-no-es-pecado.netlify.app/2022/05/29/no-mentir-s/). Nos preocupa a ambos el haber contribuido a difundir el conocimiento de esta técnica entre quienes, nos consta, la van a usar mal. Pero, ¿qué se le va a hacer?