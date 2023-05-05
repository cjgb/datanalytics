---
author: Carlos J. Gil Bellosta
date: 2023-04-27
title: 'Siete problemas matemáticos que plantea el "deep learning"'

url: /2023/04/27/problemas-matematicos-deep-learning/
categories:
- ciencia de datos
tags:
- ciencia de datos
- deep learning
- matemáticas
---

La emergencia (y el éxito) del llamado aprendizaje profundo (_deep learning_) plantea innumerables cuestiones matemáticas. Algunos algoritmos _funcionan_ (y otros muchos que han quedado en los cajones no, obviamente) y no está muy claro por qué. He aquí una lista de siete problemas que el aprendizaje profundo ha colocado enfrente de la comunidad matemática:

1. ¿Cuál es el papel de la profundidad en las redes neuronales? (En el fondo, una red neuronal no deja de ser una función que aproxima otra desconocida; en matemáticas abundan los procedimientos y resultados para aproximaciones _planas_ (p.e., combinaciones lineales de funciones); pero la composición de funciones...)
2. ¿Qué aspectos de la arquitectura de una red neuronal impactan en su desempeño? (Porque, admitámoslo, los _expertos_ en redes neuronales, en lo concerniente a la arquitectura, no son muy distintos de aquellos [artesanos del Pacífico Sur](https://piensoluegohesobrevivido.es/2022/quien-construye-cosas/)).
3. ¿Por qué el SGD converge a mínimos locales _buenos_ a pesar de la no-convexidad del problema de optimización? (¡Ah! En este punto, la intriga se mezcla con la envidia: no sabéis lo difícil que es optimizar funciones no lineales más o menos genéricas y las horas que he invertido en ese tipo de problemas.)
4. ¿Por qué no sobreentrenan las redes neuronales? (¿No lo hacen?)
5. ¿Por qué funcionan bien en altas dimensiones?
6. ¿Qué tipo de patrones de los datos son susceptibles de ser aprendidos por las redes neuronales?
7. ¿Podrían llegar las redes neuronales a reemplazar a los algoritmos teóricos y numéricos especializados que se utilizan en las aplicaciones de las matemáticas?

Estas cuestiones ---obviamente, sin soluciones--- junto con alguna discusión adicional más, se discuten menos brevemente que aquí en
[este enlace](https://arxiv.org/abs/2203.08890).