---
author: Carlos J. Gil Bellosta
date: 2021-04-08 09:13:00+00:00
draft: false
title: Sobre las probabilidades de eventos que ocurren una única vez

url: /2021/04/08/sobre-las-probabilidades-de-eventos-que-ocurren-una-unica-vez/
categories:
- probabilidad
tags:
- kolmogorov
- probabilidad
---




La probabilidad se predica de eventos de muy distintas características. Existe un arco entero de casos en cuyos extremos opuestos podemos encontrar los eventos:





  * Obtener cara al lanzar _esta_ moneda.  * Que X gane las elecciones que ocurrirán en un mes.





La principal diferencia, por si alguien lo lo ha advertido, es que el primer tipo de evento puede repetirse cuantas veces se desee mientras que _esas_ elecciones ocurrirán una única vez. Existen muchas interpretaciones de la probabilidad bajo las que pueden entenderse ambos problemas y todas (¡o casi!), al final, son compatibles de alguna manera con los axiomas de Kolmogorov: podría decirse que se trata de dos modelos distintos para un mismo formalismo, el de Kolmogorov.







Pero se me va a permitir añadir a todo lo discutido al respecto algunas consideraciones que me han rondado la cabeza últimamente. Porque, en el fondo, Heráclito diría que ambos tipos de eventos, en el fondo, no son distintos: ninguna tirada de monedas es, en el fondo, igual que la anterior, todas son tan irrepetibles como las elecciones.







Sin embargo, una tirada de moneda concreta, irrepetible en el fondo, podría _descomponerse_ como una tirada de una moneda ideal más una componente específica que convierte a la primera en _esta_ tirada concreta. Solo que en este caso, la componente específica es prácticamente residual, irrelevante en la práctica.







Esta descomposición, que apenas aporta nada en el caso de la moneda, es más útil en otros casos. El evento de las elecciones puede _descomponerse_ de cierta forma como una combinación de eventos _ideales_ de los que sí que existe un histórico sobre el que estimar frecuencias: el que un candidato que actualmente ostenta el poder gane las elecciones; que un candidato de ciertas características gane si la economía tiene el aspecto que presenta la actual; que gane si las encuestas a un mes vista le dan una intención de voto determinada, etc. Y, finalmente, a todo lo anterior se le suma una capa de aleatoriedad adicional por sus características específicas.







Obviamente, todo lo anterior no pretende ser una semántica formal del modelo probabilístico (aunque tal vez sí un esbozo), pero con todos sus defectos, tiene dos virtudes innegables:





  * Pone en un mismo plano eventos repetibles y no repetibles: sus diferencias ya no son intrínsecas, sino de grado.   * La descomposición en _eventos repetibles_ de los _no repetibles_ sigue, en el fondo, las recomendaciones para estimar probabilidades de este tipo de eventos que hacen los pronosticadores más o menos profesionales (tal como se describe en libros como [este](https://www.goodreads.com/book/show/23995360-superforecasting), por ejemplo).





Dicho de otra manera, tal vez imprecisa, de una tirada de una moneda a otra, _casi todo se repite_. En unas elecciones, aunque solo se vayan a realizar una vez, se pueden encontrar muchos elementos que son casos de una serie histórica, que en el fondo, se repiten de alguna manera.







Obviamente, todo lo anterior enlaza con una cuestión habitual en nuestra profesión. El que la señora A compre o no un producto B la próxima semana entra dentro de la categoría de eventos similares al de las elecciones. Sin embargo, tenemos modelado el evento de la forma, por ejemplo,







$latex y_i = a_0 + \sum_i a_i x_i + \epsilon_i,$







que es una versión muy concreta de la descomposición a la que se hacía referencia más arriba.



