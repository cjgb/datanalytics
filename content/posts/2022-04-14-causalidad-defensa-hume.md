---
author: Carlos J. Gil Bellosta
categories:
- causalidad
date: 2022-04-14
description: Es habitual hacer constar un defecto lógico en la definición de causalidad
  de Hume que aquí interpreto bajo una óptica distinta de la habitual
lastmod: '2025-10-06T19:04:22.878141'
related:
- 2022-03-30-nuevo-video-en-youtube-causalidad-carlos-madrid.md
- 2025-01-09-causalidad-sujeto-verbo-od.md
- 2020-10-20-como-asignar-probabilidades-simetria-y-universalidad.md
- 2024-09-10-causalidad.md
- 2011-04-20-causalidad-o-asociacion-indicios-de-la-primera.md
tags:
- filosofía
- hume
- bayes
title: 'Causalidad: en defensa de Hume'
url: /2022/04/14/causalidad-definicion-hume/
---

En 1748, Hume propuso la siguiente (archifamosa, archidiscutida y archicontrovertida) definición de causalidad:

> Podríamos definir una causa como un objeto seguido de otro donde todos los objetos similares al primero son seguidos por objetos similares el segundo. O, en otras palabras, donde, si el primer objeto no hubiese estado ahí, el segundo no habría existido.

Un ejemplo concreto: vemos que la gente que come muchas hamburguesas engorda. Según la primera definición, comer hamburguesas sería la causa de la obesidad. Pero eso no significa en absoluto que para no ser obeso baste con dejar de comer muchas hamburguesas.

Por tal motivo, la definición de causalidad de Hume ha sido reiteradamente denunciada: contiene una contradicción lógica. En efecto, la primera frase viene a afirmar que la causa es condición suficiente para el efecto ($C \Rightarrow E$, si se quiere), mientras que en la segunda, que es condición necesaria ($\neg C \Rightarrow \neg E$).

Mal, Hume, ¡mal!

Sin embargo, podemos conceder que Hume tenía en mente una definición más laxa que la de los lógicos de la implicación. Concedamos que por $C \Rightarrow E$ quería decir

$$P(E | C) > P(E | \neg C)$$

Entonces, es un pequeño ejercicio ---resta $1$ a cada término de la desigualdad anterior y poco más--- probar que también se cumple

$$P(\neg E | \neg C) > P(\neg E | C).$$

O, lo que es lo mismo, se cumple la condición $\neg C \Rightarrow \neg E$ en su interpretación laxa.

Es decir, bajo la interpretación laxa (o probabilística) de la implicación, suficiencia y necesidad son sinónimos y no quedaría otro remedio que concederle la razón a Hume. Y que si quieres evitar engordar, es recomendable comer menos hamburguesas.

**Coda:** Que suficiencia y necesidad son sinónimos es algo que toca desaprender cuando uno estudia una ciencia dura; luego, cuando uno se enfrenta al mundo real, toca desaprender lo aprendido para volver a tratarlos como sinómimos _sui generis_. Solo los muy empecinados siguen reprochando la confusión de los términos a la _población civil_.