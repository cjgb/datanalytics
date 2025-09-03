---
author: Carlos J. Gil Bellosta
categories:
- programación
date: 2025-02-27
lastmod: '2025-04-06T19:11:56.859679'
related:
- 2023-02-14-sicologia-programacion.md
- 2025-03-25-cortos-llms.md
- 2024-07-18-cortos-llms.md
- 2015-11-03-esta-tarde-doy-un-curso-abierto-y-gratuito-de-introduccion-a-la-programacion.md
- 2020-06-04-programacion-lineal-de-nuevo.md
tags:
- programación
- ensamblador
- llms
- python
title: ¿Acabaremos programando todos en ensamblador?
url: /2025/02/27/programacion-ensamblador/
---

Un lenguaje de programación es un lenguaje que media entre el que nos es familiar a los humanos y el que reconocen las computadoras. Los lenguajes de alto nivel nos resultan más cómodos; los de bajo nivel, más crípticos. Todos conocemos, pienso, el _trade-off_.

Ahora todo el mundo programa en Python. Pero los hay que lo hacen de una manera rara:

> Hay un nuevo tipo de programaciónn que llamo [Andrej Karpathy] "programación de vibraciones", en la que te entregas por completo a las vibraciones, adoptas exponenciales y te olvidas de que el código existe. Es posible porque los LLM (por ejemplo, Cursor Composer con Sonnet) se están volviendo demasiado buenos. Además, solo hablo con Composer con SuperWhisper, por lo que apenas toco el teclado. Pido las cosas más tontas como "reducir el relleno en la barra lateral a la mitad" porque soy demasiado vago para buscarlo. "Acepto todo" siempre, ya no leo los _diffs_. Cuando recibo mensajes de error, simplemente los copio y pego sin comentarios; generalmente, eso lo soluciona. El código crece más allá de mi comprensión habitual, tendría que leerlo realmente durante un tiempo. A veces, los LLM no pueden corregir un error, así que simplemente busco alternativas o pido cambios aleatorios hasta que desaparece. No está tan mal para proyectos de fin de semana intrascendentes, pero sigue siendo bastante divertido. Estoy desarrollando un proyecto o una aplicación web, pero en realidad no es programación: solo veo cosas, digo cosas, ejecuto cosas y copio y pego cosas, y en general funciona.

En el momento que, como Karpathy hoy, lo humanos nos olvidemos de que el código existe, ¿para qué necesitaremos que los LLMs generen Python?, ¿por qué no C o, ya puestos, ensamblador directamente?

Más. El otro día, en una charla sobre el asunto, el ponente argumentaba que la primera víctima de los LLMs que programan son las herramientas "no-code". Pero recordemos que los lenguajes de programación no son otra cosa que herramientas "no ensamblador".