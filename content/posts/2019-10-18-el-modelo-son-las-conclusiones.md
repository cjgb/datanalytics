---
author: Carlos J. Gil Bellosta
date: 2019-10-18 09:13:47+00:00
draft: false
title: El modelo son las conclusiones

url: /2019/10/18/el-modelo-son-las-conclusiones/
categories:
- ciencia de datos
- estadística
tags:
- contaminación
- modelos
- teoría
- valencia
---

El título es un tanto exagerado, tal vez tanto como el [aforismo de McLuhan](https://en.wikipedia.org/wiki/The_medium_is_the_message) que lo inspira. Pero no pudo dejar de ocurrírseme al ver el gráfico

![](/wp-uploads/2019/10/EG0RRhNXkAA9y9J-723x1024.jpeg)

acompañado del tuit

`Nota: la cuenta (y el tuit correspondiente) ya no existen`

Es increíble: un mapa de contaminación por NO2 con una enorme resolución tanto espacial (a nivel de manzana, prácticamente) como temporal (¡correla con la intensidad del tráfico!).

Pero la medición del NO2 es o barata o cara. Y si, barata, mala: los sensores bien calibrados son caros y exigen un mantenimiento técnico solo al alcance de los ayuntamientos más pudientes. Y cara es inviable a ese nivel de resolución. Así que el plano es necesariamente _mentira_ (nota: mentira en cursiva no es lo mismo que mentira sin cursiva; el distingo se realiza a continuación).

Afortunadamente, sabemos [de dónde salen los datos](https://valenciaperlaire.org/mapes-contaminacio/).  Allí aprendemos que no son promedios anuales sino de cuatro mediciones realizadas durante un determinado año. Y el número de puntos de cata, aunque elevado, es manifiestamente insuficiente para lograr esa resolución espacial. Además, el número de dispositivos para realizar las mediciones seguro que es pequeño, por lo que estas corresponden a horas distintas, etc.

Y a lo que voy (porque lo de que si en Valencia hay o no contaminación por NO2 y en qué partes de concentra es lo de menos): es probable que el plano se haya construido usando un modelo cuyas presuntas conclusiones (la correlación con la intensidad de tráfico, por ejemplo) eran precisamente sus hipótesis de partida.

Lo cual no es malo sino bueno. Los datos para construir este tipo de modelos son caros y difíciles de obtener. Sin embargo, contamos con una teoría sólida acerca de cómo y dónde se genera el NO2 y cómo decae en el espacio. Para eso, precisamente, hay gente teorizando. Así que podemos usar los datos para especificar dichos modelos teóricos porque, al fin y al cabo, datos y modelos teóricos tienen que ser compatibles.

Pero luego, y con esto cierro, la estructura del modelo es un ingrediente del mismo y no una conclusión. En este (casi seguro, porque desconozco los detalles) y en tantos otros, el modelo son sus conclusiones.