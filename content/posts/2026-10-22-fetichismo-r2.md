---
author: Carlos J. Gil Bellosta
categories:
- estadística
date: 2026-10-22
description: "Sobre cómo el fetichismod la R² puede sesgar los coeficientes de los modelos lineales mal usados en contextos causales."
tags:
- estadística
- regresión
- mínimos cuadrados
- r cuadrado
title: Fetichismo de la R²
url: /2026/10/22/fetichismo-r2/
---

[Se queja el maestro Juan Orduz del fetichismo de la R²](https://juanitorduz.github.io/no_r2/) a la hora de evaluar modelos de regresión lineal[^1]:

> He visto a muchos directivos elegir modelos en función de su R²: cuanto mayor, mejor. Muchos de ellos ni siquiera aceptarían un modelo con una R² inferior a 0.8. Estos responsables toman decisiones de millones de dólares [...] basándose en modelos con R² artificialmente infladas.

Cabe decir que lo mismo ocurre con cualquier otro indicador que se vuelve objetivo, como el AUC o el MSE. Goodhart siempre gana. Pero hoy toca [R^2, de nuevo](/tags/r-cuadrado/).

Orduz ya nos lo cuenta y lo que dice es totalmente cierto. Pero me voy a permitir reformular su crítica de una forma que algunos encontrarán menos críptica. Orduz se deja llevar muy a menudo de su querencia por el virtuosismo técnico hasta el extremo de volver opacas ideas simples para quienes somos menos perspicaces que él.

La crítica que formula al fetichismo de la R² se apoya en dos resultados bien conocidos:

- Introducir nuevas variables incrementa la R² necesariamente. La R² tiene que ver con el tamaño de los residuos y estos con el efecto de las variables no observadas. Obsérvense nuevas variables y el modelo ajustará «mejor».
- Si un modelo usa $X_1$ y un nuevo modelo introduce una variable adicional $X_2$, el coeficiente de $X_1$ cambiará casi necesariamente.

Orduz analiza un modelo del tipo

$$\text{Ventas} \sim \text{Publi} + \...,$$

Frecuentemente, estos modelos se interpretan en términos causales, como si la $\beta$ de `Publi` indicase en cuánto se incrementarían las ventas al aumentar el gasto en publicidad. Sin embargo, ese coeficiente depende crucialmente de las variables que acompañan a `Publi` en el modelo y, en última instancia, de la covarianza entre ellas y con la variable objetivo. Por sí solo, ese coeficiente no dice nada.

Dicho de otra manera, la distribución de

$$\text{Ventas} \vert \text{Publi}, M$$

es decir, la distribución de las ventas condicionada por el modelo concreto $M$ y el valor de `Publi` ---a través de su coeficiente--- no coincide necesariamente con

$$\text{Ventas} \vert \text{do(Publi)},$$

donde `do` es... el archifamoso operador `do`, por supuesto.

Orduz plantea un modelo hipotético en el que se conoce _la verdad_[^2] y observa el efecto introducir una variable _colisionadora_. En realidad, no es el único esquema en el que el coeficiente de `Publi` se aleja del _real_: se pueden pensar otras estructuras causales[^3] para obtener resultados similares.

La discusión apunta a un problema de fondo que ya he tratado alguna vez: los LLMs son demasiado simples para representar esquemas causales complejos. Mucha de la teoría de la causalidad se reduce a estudiar la manera menos mala de representar modelos complejos usando técnicas inadecuadas para ello. Es como cuando los geógrafos usan la proyección de Mercator y luego se quejan de que Groenlandia parece más grande que África. Al menos, los geógrafos tienen la excusa de que, para muchos fines, representar el globo terráqueo sobre una superficie plana tiene infinidad de usos prácticos. Sin embargo, el «Mercator causal» de usar OLS para estimar sistemas causales complejos es una de las muchas maneras de pegarse un tiro en el pie.

[^1]: Aunque los resultados que se discuten aquí se trasladan a sus extensiones.
[^2]: Es decir, donde se puede condicionar por $\text{do(Publi)}$.
[^3]: El caso de considerar una variable mediadora es un ejercicio muy recomendable ya sea para el autor o para un LLM de su elección.