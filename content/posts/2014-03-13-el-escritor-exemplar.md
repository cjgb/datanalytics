---
author: Carlos J. Gil Bellosta
date: 2014-03-13 07:45:27+00:00
draft: false
title: El escritor exemplar

url: /2014/03/13/el-escritor-exemplar/
categories:
- nlp
- r
tags:
- markov
- nlp
- r
---

>El escritor exemplar es un experimento de escritura automática realizado por [Molino de Ideas](http://www.molinodeideas.com/) sobre una idea de [Mario Tascón](https://twitter.com/mtascon) y con la colaboración de [Carlos J. Gil Bellosta](https://twitter.com/gilbellosta) en conmemoración por los 400 años de la publicación de Las Novelas Ejemplares.

Eso reza el pie de página de [El escritor exemplar](http://onomateca.com/exemplar.php) un artilugio que a veces crea frases tales como

[![escritor_exemplar](/wp-uploads/2014/03/escritor_exemplar.png)
](/wp-uploads/2014/03/escritor_exemplar.png)

que debieran ser aleatorias, no muy distintas en estilo de las Novelas Ejemplares y, con muchísima suerte, inspiradoras.

Hay más detalles sobre el proyecto [aquí](http://blogs.molinodeideas.com/cronicas/el-escritor-exemplar-un-experimento-sobre-las-novelas-ejemplares/).

El motor que las genera, que es producto de mi cacumen —por lo que a él y solo a él cabe culpar de los deméritos de la cosa—, muestrea una cadena de Markov de segundo orden construida a partir de secuencias de palabras que figuran en las Novelas Ejemplares.

Debí haberlo refinado en su día porque, en particular, la transición de la primera a la segunda palabra incurre en ocasiones en el anacoluto.

Finalmente, un vídeo que explica mucho mejor de cómo lo podría hacer yo la matemática subyacente:

{{< youtube 3pRR8OK4UfE >}}
