---
author: Carlos J. Gil Bellosta
date: 2020-06-10 09:13:00+00:00
draft: false
title: Sobre "Predicción, estimación y atribución"

url: /2020/06/10/sobre-prediccion-estimacion-y-atribucion/
categories:
- ciencia de datos
- estadística
tags:
- artículos
- efron
- estimación
- p-valores
- predicción
---

Subrayo hoy aquí tres cuestiones que considero importantes del reciente artículo _[Prediction, Estimation, and Attribution](https://www.tandfonline.com/doi/pdf/10.1080/01621459.2020.1762613?needAccess=true)_ de B. Efron (para otra visión, véase [esto](https://muestrear-no-es-pecado.netlify.app/2020/06/07/predicci%C3%B3n-estimaci%C3%B3n-atribuci%C3%B3n/)).

La primera es que existe una _cadena de valor_ en la modelización estadística que va del producto más ordinario, la predicción, a la estimación y de este, al más deseable, la atribución. En la terminología de Efron,

* estimación consiste en la determinación de los parámetros subyacentes (e importantes) del modelo; específicamente se refiere a la estimación puntual;
* atribución tiene que ver con intervalos de confianza, p-valores, etc. de esos parámetros.

La segunda es que la predicción es un problema fácil, mientras que la estimación (y la atribución) son mucho más complicados. Lo ilustra con un ejemplo sencillo: comparando la eficiencia de dos modelos, uno el óptimo y otro ligeramente inferior para:

* Identificar el valor $latex \mu$ de una serie de 25 muestras de una $latex N(\mu, 1)$ (el problema de estimación).
* Predecir el valor 26 de la serie.

[_Spoiler_: el modelo óptimo es sustancialmente mejor que el otro en el problema de estimación pero apenas superior en el de predicción.]

La tercera cuestión es la defensa que hace Efron de la importancia de los que llama problemas de _superficie + ruido_. Que son modelos en los que se considera explícitamente un modelo generativo en el que los valores observados son resultado de una estructura (la superfie) y un ruido añadido.

Podemos descartar esas consideraciones y tratar simplemente de predecir, efectivamente. Pero, argumenta Efron, tratar de discernir la forma de esa _superficie_ (el problema de la estimación) genera de alguna manera un conocimiento superior, digno del calificativo de _científico_.
