---
author: Carlos J. Gil Bellosta
date: 2022-04-14
title: "Causalidad: en defensa de Hume"
description: "Es habitual hacer constar un defecto lógico en la definición de causalidad de Hume que aquí interpreto bajo una óptica distinta de la habitual"
url: /2022/04/14/causalidad-definicion-hume/
categories:
- causalidad
tags:
- filosofía
- hume
- bayes
---

En 1748, Hume propuso la siguiente (archifamosa, archidiscutida y archicontrovertida) definición de causalidad:

>We may define a cause to be an object followed by another, and where all the objects, similar to the first, are followed by objects similar to the second. Or, in other words, where, if the first object had not been, the second never had existed.

Ha sido denunciada, entre otros motivos, por contener una contradicción lógica. En efecto, la primera frase viene a afirmar que la causa es condición suficiente para el efecto ($C \Rightarrow E$, si se quiere), mientras que en la segunda, que es condición necesaria ($\neg C \Rightarrow \neg E$).

Mal, Hume, ¡mal!

Sin embargo, podemos conceder que Hume tenía en mente una definición más laxa que la de los lógicos de la implicación. Concedamos que por $C \Rightarrow E$ quería decir

$$P(E | C) > P(E | \neg C)$$

Entonces, es un pequeño ejercicio ---resta $1$ a cada término de la desigualdad anterior y poco más--- probar que también se cumple

$$P(\neg E | \neg C) > P(\neg E | C).$$

O, lo que es lo mismo, se cumple la condición $\neg C \Rightarrow \neg E$ en su interpretación laxa.

Es decir, bajo la interpretación laxa (o probabilística) de la implicación, suficiencia y necesidad son sinónimos y no quedaría otro remedio que concederle la razón a Hume.

**Coda:** Que suficiencia y necesidad son sinónimos es algo que toca desaprender cuando uno estudia una ciencia dura; luego, cuando uno se enfrenta al mundo real, toca desaprender lo desaprendido para volver a tratarlos como sinómimos _sui generis_. Solo los muy empecinados siguen reprochando la confusión de los términos a la _población civil_.