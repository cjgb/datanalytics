---
author: Carlos J. Gil Bellosta
date: 2017-11-08 08:13:09+00:00
draft: false
title: Todo sobre bitcoin (y por qué he decidido cogerle manía)

url: /2017/11/08/todo-sobre-bitcoin-y-por-que-he-decidido-cogerle-mania/
categories:
- varios
tags:
- bitcoin
- criptomonedas
---

Esencialmente, un usuario de _bitcoin_ puede hacer las mismas operaciones que un cliente bancario: ver su saldo, recibir _bitcoins_, transferir _bitcoins_. En ese aspecto, nada nuevo bajo el sol. Lo particular del caso es que, a diferencia del sistema bancario, sumamente centralizado, en el mundo del _bitcoin_ operan multitud de agentes sin necesidad de una autoridad central.

En lo siguiente, al hablar del _sistema_, me estaré refiriendo a una red de computadoras que corren un _software_ protocolizado (este protocolo es la _ley_, i.e., el conjunto de reglas, que rige _bitcoin_). Cualquier computadora conectada a internet y con el _software_ adecuado puede sumarse al _sistema_ si necesidad de otra certificación.

Los _bitcoins_ del monedero de un usuario han nacido en algún momento y lugar (luego veremos cómo). Es posible trazar la ruta completa que realizaron desde que se originaron: está escrita en un _libro_. Ese libro [ocupa actualmente unos 150GB](https://www.statista.com/statistics/647523/worldwide-bitcoin-blockchain-size/). Si te interesa no te será difícil encontrar la manera de descargarlo.

Este libro está compuesto de bloques de 1MB de tamaño (aunque verás que hay discusiones sobre la posibilidad de incrementarlo). Cada bloque contiene unas 1000 transacciones. El sistema está diseñado, como veremos, para que se genere un nuevo bloque cada 10 minutos.

(¿Cuál es el número máximo de transacciones por hora que admite Bitcoin? ¿Cómo se compara con el de operaciones en bolsa, transacciones de tarjeta de crédito, etc.?)

Puedes ver los últimos bloques generados [aquí](https://blockchain.info/blocks). Esa página indica su número de orden dentro del libro (o _altura_), a qué hora se generó, quién lo generó (más sobre eso después), su tamaño y su _hash_. Si accedes a la página de uno de los bloques, verás las transacciones que contiene además de una serie de datos adicionales sobre los que volveremos.

Los usuarios de _bitcoin_ envían transacciones al sistema que quedan en un limbo antes de ser confirmadas, i.e., escritas en el _libro_. Se pueden consultar el _stream_ de transacciones que llegan al sistema y el número de las pendientes de confirmación en, p.e., [aquí](https://blockchain.info/unconfirmed-transactions), una página que será del agrado de los estudiosos de la teoría de colas.

Los _mineros_ se encargan de crear nuevos bloques. Los mineros tienen un incentivo natural y primario del que derivan otros: ganar dinero. Originariamente, en forma de _bitcoins_, claro. Así que tienen muy claro que no tienen ningún interés en subvertir el sistema. En particular, no tienen ningún interés en dar por buena ninguna transacción inválida (p.e., que alguien transfiera un _bitcoin_ que no posee); mucho menos, en dar por buena una transacción inválida que pueda haber sido introducida subrepticia y dolosamente por otros mineros.

Es importante subrayar el asunto de los incentivos, que es en el fondo lo que hace que todo funcione correctamente. Por muy egoístas y malintencionados que sean los mineros, está en su interés seguir las reglas. Son una suerte de mano invisible, esa de la que algunos conomistas predican extravagantemente que es invisible simplemente porque no existe. Tal vez debieran reconsiderar su postura ante el evidente contraejemplo sintético que constituye el _bitcoin_. En todo caso, el tramposo pierde tiempo y dinero; su pecado se convierte en su misma penitencia. Luego veremos ejemplos.

A la vista del libro _actual_ y de las transacciones pendientes de registrar, los distintos mineros se lanzan a una carrera para construir el siguiente bloque. Su incentivo consiste en:



 	  1. Empaquetar el mayor número posible de transacciones pendientes dentro del límite máximo de 1MB.
 	  2. Utilizar solo transacciones válidas (o el bloque sería rechazado).
 	  3. Priorizar aquellas transacciones que proporcionen mayores comisiones. En efecto, al realizar una transferencia, los usuarios sugieren una comisión para inducir a los mineros a tenerla en cuenta: a mayor comisión, mayor probabilidad de inclusión en el siguiente bloque.
 	  4. Capturar un premio de 12.5 _bitcoins_ que el minero puede anotarse como recompensa por los servicios prestados. (Nota: actualmente son 12.5 _bitcoins_; antes fueron más y llegará un momento en que serán menos. La recompensa [se reduce a la mitad cada cierto número de ciclos](http://www.bitcoinblockhalf.com/) de manera que el número final de _bitcoins_ en circulación nunca exceda los 21 millones).

En dinero contante y sonante, sumando la compensación y las comisiones, el premio por publicar exitosamente un bloque es actualmente, con el _bitcoin_ en la órbita de los 7000 dólares, de unos cien mil euros.

Pero las condiciones anteriores, por sí solas, no bastan. En apenas unos milisegundos, miles de mineros de todo el mundo propondrían sus propios bloques y el sistema se colapsaría. Para evitarlo contempla un mecanismo muy ingenioso de gestión de la concurrencia.

Pero el problema de la concurrencia es un viejo conocido en el mundo de la informática y existen varias técnicas para gestionarlo: cerrojos, semáforos, etc. _Bitcoin_ implementa una similar a la que (y describo de memoria) utiliza _ethernet_. Cuando en _ethernet_ se producen interferencias porque dos tarjetas utilizan el canal simultáneamente, el protocolo establece que ambas tienen que abstenerse de emitir durante un periodo aleatorio de tiempo. Así hay una alta probabilidad de que cuando venza el plazo de la tarjeta a la que le correspondió el más breve, encuentre el cable expedito.

En el caso de _bitcoin_, los mineros se obligan a solo aceptar un bloque cuando exista prueba fehaciente de que permanecido congelado durante un tiempo aleatorio. Este tiempo aleatorio no puede ser asignado por una (inexistente) autoridad central; obviamente, los nodos tampoco pueden autoasignarse un tiempo de espera aleatorio porque, a diferencia de las tarjetas de _ethernet_ que, se supone, cooperan, juegan en bandos enfrentados, i.e., compiten, y tienen todo el incentivo del mundo para que su espera sea, oh casualidad, siempre cero.

Para obligar a esperar a los nodos, estos reciben problema computacional cuyo tiempo de resolución es aleatorio. El primero en resolverlo publicará su bloque y la solución para dejar constancia de juego limpio. El resto, una vez validado, se lamerá las heridas, desistirá en su empeño, lo considerará añadido al _libro_ y probará fortuna con el siguiente bloque.

El problema en cuestión, en forma simplificada, consiste en encontrar una solución para la desigualdad


$latex f(B_{n-1}, B_n, N) < d$


donde:



 	  * $latex f$ es una función positiva que involucra _hashes_ (estilo [SHA-256](https://es.wikipedia.org/wiki/SHA-2)) de sus argumentos. De hecho, es un _hash_ de sumas de los _hashes_ de sus argumentos. Así que la manera más simple de describir el problema anterior vendría a ser algo así como _encontrar un valor cuyo hash sea menor que cierto valor dado_. O, incluso, sacrificando la precisión en aras de la concisión, _invertir un hash_.
 	  * $latex B_n$ es el candidato a bloque $latex n$-ésimo que se busca proponer de acuerdo con las condiciones indicadas más arriba.
 	  * $latex B_{n-1}$ es el bloque anterior. Esto es importante por un motivo y fundamental por otro. Importante porque impone la secuencialidad en el libro, i.e., impide que se ramifique. Pero es fundamental porque es la clave del _consenso_ del sistema. La forma positiva que tiene el acto de aceptación de un bloque es, precisamente, que una mayoría de los mineros lo incorporan a sus cálculos. Un minero mohicano podría empeñarse en seguir minandon una cadena ajena al consenso, pero sería ignorado por el resto y los _bitcoins_ que se asignase en su empeño solipsista valdrían solo para su autocontemplación.
 	  * $latex N$ es un número, conocido en la jerga como el _nonce_, que puede ser elegido libremente por el minero.
 	  * $latex d$, la _dificultad_, es un parámetro especificado por el sistema que gradúa la complejidad del problema para [mantener estable el tiempo de búsqueda](https://en.bitcoin.it/wiki/Difficulty) independientemente de la capacidad de cálculo del sistema. Obviamente, a menor $latex d$, mayor complejidad.

Y eso es esencialmente todo en una primera aproximación. No obstante, quiero añadir la respuesta que he encontrado a algunas preguntas razonables que me surgieron mientras leía sobre el asunto y cuya discusión más arriba habrían roto el hilo del discurso.

**¿Es matemáticamente posible encontrar siempre una solución al problema de los _hashes_?**

No neceariamente. Aventuraría que no. Desde luego, fijados $latex B_{n-1}$ y $latex B_n$ en la expresión $latex f(B_{n-1}, B_n, N)$ no porque $latex N$ tiene 4 bytes (un detalle no indicado antes) y el conjunto de imágenes es pequeño. De hecho, los mayores mineros, con una capacidad global de decenas de TH/s (_terahashes_), pueden explorar hoy en día, para $latex B_{n-1}$ y $latex B_n$ fijos todos los valores $latex f(B_{n-1}, B_n, N))$ en menos de un segundo. El hecho de que sigan tardando alrededor de diez minutos significa que se ven obligados a modificar el bloque candidato $latex B_n$ bastantes veces.

**¿Puede haber todavía problemas de concurrencia?**

Sí, y de hecho, los hay. En ocasiones se publican [dos bloques válidos casi simultáneamente](https://blockchain.info/es/orphaned-blocks). Pero el interés por el consenso hace que el sistema se decante rápidamente por uno de los dos y el otro quede _huérfano_. Recuérdese que los mineros tienen incentivo para mantener una única _libro_.

**¿Puede atacarse o _crackearse_ _bitcoin?**

Busca en internet y verás una lista de posibles ataques (p.e., [esta](https://btc-hijack.ethz.ch/)), desde los de denegación de servicio hasta los que intentan introducir transacciones espurias. El menos preocupante de todos parece ser el del 51%, i.e., que un mismo minero controle la mayor parte de la capacidad de cálculo, con la intención de sabotearlo. Por razones puramente económicas, además: destruiría el valor del _bitcoin_, pasaría a controlar un sistema de valor exactamente cero.

**¿Quiénes son los mineros?**

Cualquiera puede minar _bitcoins_. Sin embargo, debido a la enorme capacidad de cálculo necesaria para garantizar una mínima probabilidad de éxito, los mayores actores del mercado y los que [efectivamente se lo reparten](https://blockchain.info/pools), son los llamados _pools_. Los _pools_ sindican la capacidad de cálculo de actores individuales, trocean la carga computacional y reparten las ganancias obtenidas entre los participantes.

**¿Cómo es una mina de _bitcoins_?**

Supongo que no todas son así, pero merece la pena leer [esto](https://qz.com/1054805/what-its-like-working-at-a-sprawling-bitcoin-mine-in-inner-mongolia/).

Increíble lugar… pero eso consume mucha energía, ¿verdad?

Y que lo digas. _Bitcoin_ produce una recompensa de unos cien mil euros cada 10 minutos. Para lograrla, los participantes del mercado queman la electricidad equivalente a [la que produce un país como Nigeria](https://cryptovest.com/news/bitcoin-mining-is-burning-enough-electricity-to-power-nigeria/).

Justo por eso he decidido cogerle manía.
