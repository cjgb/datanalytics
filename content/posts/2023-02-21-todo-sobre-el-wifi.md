---
author: Carlos J. Gil Bellosta
date: 2023-02-21
title: 'Todo sobre la wifi'

url: /2023/02/21/todo-sobre-wifi/
categories:
- varios
tags:
- tecnología
- wifi
---

Voy a hacer una entrada un poco inusual dentro de lo que viene siendo la trayectoria de este blog por dos motivos: para dejar por escrito cosas que de otra manera se me olvidarán y para, con suerte, ayudar a otros. Sí, porque voy a escribir sobre la wifi, sus mitos, problemas y puede que hasta soluciones.

Muy rápidamente, unas cuantas cosas que todos sabemos: la wifi funciona en dos bandas (y próximamente en una tercera en los 6 GHz), la de 2.4 GHz y la de 5 GHz. Voy a centrarme en la de los 2.4 GHz, aunque todo lo que cuente se extrapola al resto. No creo que haya que mencionar tampoco las diferencias entre las bandas de 2.4 y 5 GHz en términos de ancho de banda (la segunda tiene más) y la distancia operativa: la de los 5.4 GHz tiene menos entre otros motivos porque atraviesa peor paredes y otros obstáculos. Lo cual no es del todo malo: te aísla de los vecinos de tus vecinos.

La banda de los 2.4 GHz se divide en 11, 12 o 13 canales, según el lugar, así:

![](/wp-uploads/2023/2.4ghz-channels.png#center)

Pero merece la pena ver primero qué pasaría

## Si solo existiese un canal

Imaginemos que solo hubiese un canal habilitado para la wifi compartido por todos los dispositivos wifi. En un lugar concreto coexistirían varios routers y varios dispositivos conectados a ellos.

La manera en la que el protocolo administra el espectro está basado en el principio de la _collision avoidance_ (evitar colisiones), parecido a otro, el _collision detection_ (detectar colisiones), que:

- se usa en conexiones cableadas
- porque en conexiones cableadas se puede escuchar a la vez que se emite
- y eso permite detectar cuando otro dispositivo está emitiendo
- y entonces se pueden tomar medidas para evitar el uso simultáneo del cable;
- pero un dispositivo inalámbrico no puede emitir y escuchar a la vez
- por lo que le toca implementar un procedimiento distinto.

En esencia, los routers se coordinan mutuamente y coordinan los dispositivos conectados a ellos preguntándoles cíclicamente si quieren emitir algo. Digamos que les van cediendo la palabra y estos pueden o no usarla.

_[Nota: el protocolo aquí descrito tiene un pequeño problema: un dispositivo podría ver dos routers R1 y R2 que no se ven entre sí (por lo que no están coordinados). Entonces, si R1 le da la venia para emitir mientras R2 está emitiendo...]_

Así las cosas:

- Si hay diez dispositivos y todos están bajando datos masivamente, cada uno de ellos tendrá a su disposición solo una décima parte del tiempo. Y la velocidad de bajada será una décima parte de la potencial.
- Pero si hay diez dispositivos y nueve de ellos están inactivos, el décimo tiene la práctica totalidad del ancho de banda disponible.

Por eso no es _tan_ preocupante compartir canales con otros routers/dispositivos. En el lugar donde se tomó la siguiente imagen (la salida típica de un _wifi analyzer_)

![](/wp-uploads/2023/2.4ghz-channels-overlap.webp#center)

los dispositivos que operan en el canal 6 se coordinan para usarlo y sí, puede haber momentos en que la velocidad de la conexión se vea afectada, pero no tiene por qué pasar siempre. Es decir, ese canal 6 no tiene que ser necesariamente malo a pesar de que en él coincidan varios routers (mostrados por el analizador wifi) y dispositivos (no mostrados). Solo lo será si todos están bajando películas o instalando la nueva versión de Ubuntu a la vez.

La información que proporcionan los analizadores wifi dista de ser suficiente para evaluar la bondad del canal. Es un problema al que se volverá más abajo.

## Y ahora, con varios canales

En la práctica, existen varios canales. Los canales 1, 6 y 11, como en la figura anterior, no se _solapan_ (es decir, no crean interferencias entre ellos). Lo más típico ---como ocurre en mi casa--- es que el _wifi analyzer_  muestre algo parecido a:

![](/wp-uploads/2023/2.4ghz-channels-capullo.jpg#center)

Los dispositivos que comparten canal se coordinan mutuamente ---como se ha indicado en la sección anterior--- pero sufren la interferencia de los que usan canales que se solapan con el suyo.

La siguiente imagen muestra a unos cuantos de los que yo llamo capullos gilipollas:

![](/wp-uploads/2023/2.4ghz-channels-capullo-gilipollas.jpg#center)

Son capullos gilipollas todos los que no están emitiendo en los canales 1, 6 u 11. En particular:

- Son capullos porque están produciendo interferencias a los sí que los usan.
- Son gilipollas porque están sufriendo las interferencias de los canales 1, 6 y/u 11.

_[Nota: comprueba la configuración de tu router, no vayas a ser tú un capullo gilipollas sin saberlo.]_

## Interferencias

Además de la distancia y los obstáculos, dos fenómenos limitan la calidad de la conexión wifi: el uso de los otros dispositivos del canal y las interferencias. Las interferencias pueden ser provocadas por:

- Wifis emitiendo en canales aledaños.
- Otras fuentes (dispositivos Bluetooth, microondas, etc.)

No sé mucho al respeto, pero entiendo que si un dispositivo wifi emite un paquete y hay ruido en el canal ---debido a las interferencias--- el router puede no llegar a recibirlo adecuadamente ---se pierde--- y le toca volver a transmitirlo. Es decir, que el síntoma del ruido se manifestaría en la proporción de paquetes _perdidos_ en la comunicación. Pero no he visto en ningún sitio ningún tipo de baremo que relacione nivel de ruido (¿en qué unidades? porque, además, es variable en el tiempo) y calidad de la conexión. Tampoco me queda claro hasta qué punto le conviene a un capullo gilipollas seguir siéndolo y sufrir las interferencias del resto en lugar de compartir un canal con ellos. Supongo que habría que realizar mediciones locales/contextuales.

## ¿Es _bueno_ un determinado canal?

Esta es la pregunta relevante y que pone en valor la discusión anterior. La información que proporcionan los analizadores wifi, como se ha discutido, es insuficiente: solo nos indica que existen ciertos routers, el canal en el que emiten y la potencia. Pero nada sobre el tráfico. Tampoco nada sobre las interferencias.

De ambas podrían obtenerse medidas más o menos indirectas estudiando la velocidad de transmisión y el porcentaje de paquetes perdidos. La ecuación vendría a ser algo así como:

$$V = C - S - T$$

donde

- $V$ es la velocidad de transmisión (medible),
- $C$ es la capacidad máxima del canal (teóricamente conocida),
- $S$ es el uso que del canal hacen los otros dispositivos y
- $T$ se podría en principio estimar en términos del número de paquetes perdidos.

Pero, ¿se puede realmente _escuchar_ el tráfico en el espectro? No directamente con las tarjetas de wifi habituales, pero sí con dispositivos específicos ---analizadores de espectro con capacidad de estudiar el de las frecuencias de la wifi--- con precios que rondan entre lo caro y lo carísimo. De todos modos, al interesado en la cosa le recomiendo [este vídeo](https://www.youtube.com/watch?v=tr0AfBO1O20) en el que se muestra:

- cómo usar uno de ellos (mil dólares entre _hardware_ y _software_, según el vídeo)
- ver las interferencias que producen distintos dispositivos y
- visualizar la huella del uso de distintos tipos de usos de la wifi (videojuegos, vídeos, etc.).

Algún día, algún día me hará menos duelo que hoy.

## Consejos finales

- Usa (también) la banda de los 5 GHz. Suele estar menos congestionada; entre otras cosas, porque es más local.
- En la banda de los 2.5 GHz, usa uno de los canales 1, 6 u 11.
- Yo, a falta de un analizador de espectro, suelo elegir el que presumo menos congestionado de entre ellos. Esencialmente, aplico el minimax: aquel en el que es menor la máxima de las potencias de emisión ajenas.
- Los dispositivos _fijos_ y _cañeros_, usa cable, no wifi.
- No seas un capullo gilipollas.
- Enteráte de cuáles son tus vecinos capullos y gilipollas y mételes una noche la cabeza de un caballo muerto en la cama.
- Cómprate una hucha y guarda en ella las vueltas del café. Igual en cuatro o cinco años te da para un analizador de espectro _pro_.