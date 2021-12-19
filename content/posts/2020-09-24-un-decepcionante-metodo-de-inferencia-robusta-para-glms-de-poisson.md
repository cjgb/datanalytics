---
author: Carlos J. Gil Bellosta
date: 2020-09-24 09:13:00+00:00
draft: false
title: Un decepcionante método de "inferencia robusta" para GLMs de Poisson

url: /2020/09/24/un-decepcionante-metodo-de-inferencia-robusta-para-glms-de-poisson/
categories:
- estadística
tags:
- estadística robusta
- glm
- poisson
- sobredispersión
---

_[Quod si sal evanuerit in quo sallietur ad nihilum valet ultra nisi ut mittatur foras et conculcetur ab hominibus_._]_

Vuelvo con mi monotema de los últimos días: cómo hacer GLMs de Poisson robustos. Encuentro la tesis _[Robust Inference for Generalized Linear Models: Binary and Poisson Regression](https://infoscience.epfl.ch/record/135622/files/EPFL_TH4386.pdf)_ y pienso: ajá, será cuestión de copipegar.

Nada más lejos de la realidad. El método propuesto en la tesis está basado en asignaciones de pesos a las observaciones usando _kernels_ con centros y anchuras basadas respectivamente en

$$ m = \frac{1}{n} \sum_i y_i$$

y

$$ s = \frac{1}{n} \sum_i (y_i - m)^2$$

Por lo que la anchura de los _kernels_ es fija. Pero en mi problema hay zonas donde las $latex  y_i$ son del entorno de 1000 y otras donde oscilan entre 0 y 1.

Muy afortunadamente para la autora de la tesis, ese problema no existe en los datos que usa de ejemplo. ¡Qué suerte la suya!