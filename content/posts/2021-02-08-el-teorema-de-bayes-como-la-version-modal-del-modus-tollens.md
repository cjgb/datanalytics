---
author: Carlos J. Gil Bellosta
date: 2021-02-08 09:13:00+00:00
draft: false
title: El teorema de Bayes como la versión modal del modus tollens

url: /2021/02/08/el-teorema-de-bayes-como-la-version-modal-del-modus-tollens/
categories:
- probabilidad
tags:
- lógica
- probabilidad
- teorema de bayes
- fundamentos de probabilidad
- estadística bayesiana
- jaynes
---

El otro día alguien [argumentaba](https://www.lesswrong.com/posts/cWmiWPHyHaqpAYwas/what-s-the-big-deal-about-bayes-theorem) (de una manera que no voy a adjetivar):

* La lógica (proposiciona, de primer orden) es importante (si lo que se pretende es actuar racionalment), la probabilidad no tanto.
* El teorema de Bayes es solo un resultado trivial dentro de una disciplina mucho menos relevante que la lógica.
* Ergo, ¿por qué tanto _coñacito_ con el dichoso teorema de Bayes?

Como había alguien equivocado en internet, sonaron todas las alarmas que tengo colocadas en casa y tuve que acudir a enderezar el tuerto. Así, respondí algo así como que:

* La teoría de la probabilidad puede considerarse una extensión de la lógica (y ahí me llevé de regalo la recomendación de otro [librito](https://www.goodreads.com/book/show/151848.Probability_Theory) más, de 722 páginas nada menos, que leer).
* Que el teorema de Bayes es fundamental (sin mayor explicación o abundamiento) al respecto.

La pregunta es: siendo tan importante, ¿se puede decir solo que lo es? Y siéndolo, ¿qué es? Supongo que a estas alturas de la entrada ya sabéis la respuesta: lo dice su título. Es la versión no binaria (_modal_, para los _finorris_) del _[modus tollendo tollens](https://es.wikipedia.org/wiki/Modus_tollendo_tollens)_, tan viejo que hasta tiene nombre en latín.

El modus tollens dice, esencialmente que de $latex A \Rightarrow B$ y $latex \neg B$, se sigue $latex \neg A$.

Es decir, que del conocimiento de la implicación extraemos información sobre la premisa. Que no es otra cosa que lo que viene a hacer el teorema de Bayes.