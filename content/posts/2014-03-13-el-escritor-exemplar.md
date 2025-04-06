---
author: Carlos J. Gil Bellosta
categories:
- nlp
- r
date: 2014-03-13 07:45:27+00:00
draft: false
lastmod: '2025-04-06T18:47:31.571892'
related:
- 2014-04-29-todo-el-mundo-habla-de-cadenas-de-markov.md
- 2014-10-03-lengua-y-markov-en-martinacocina-este-sabado.md
- 2017-04-05-etsa-es-una-edntara-a-pubrea-de-roreetcs-cnctoaumes.md
- 2013-05-13-charla-un-lematizador-probabilistico-con-r.md
- 2012-05-28-desencriptando-ii-la-avaricia-es-mala.md
tags:
- markov
- nlp
- r
title: El escritor exemplar
url: /2014/03/13/el-escritor-exemplar/
---

>El escritor exemplar es un experimento de escritura automática realizado por [Molino de Ideas](http://www.molinodeideas.com/) sobre una idea de [Mario Tascón](https://twitter.com/mtascon) y con la colaboración de [Carlos J. Gil Bellosta](https://twitter.com/gilbellosta) en conmemoración por los 400 años de la publicación de Las Novelas Ejemplares.

Eso reza el pie de página de [El escritor exemplar](http://onomateca.com/exemplar.php) un artilugio que a veces crea frases tales como

[![escritor_exemplar](/wp-uploads/2014/03/escritor_exemplar.png#center)
](/wp-uploads/2014/03/escritor_exemplar.png#center)

que debieran ser aleatorias, no muy distintas en estilo de las Novelas Ejemplares y, con muchísima suerte, inspiradoras.

Hay más detalles sobre el proyecto [aquí](http://blogs.molinodeideas.com/cronicas/el-escritor-exemplar-un-experimento-sobre-las-novelas-ejemplares/).

El motor que las genera, que es producto de mi cacumen —por lo que a él y solo a él cabe culpar de los deméritos de la cosa—, muestrea una cadena de Markov de segundo orden construida a partir de secuencias de palabras que figuran en las Novelas Ejemplares.

Debí haberlo refinado en su día porque, en particular, la transición de la primera a la segunda palabra incurre en ocasiones en el anacoluto.

Finalmente, un vídeo que explica la matemática subyacente mucho mejor que como lo podría hacer yo:

{{< youtube 3pRR8OK4UfE >}}