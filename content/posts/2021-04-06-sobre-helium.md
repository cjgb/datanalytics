---
author: Carlos J. Gil Bellosta
date: 2021-04-06 09:13:00+00:00
draft: false
title: 'Sobre Helium: ¿un esquema piramidal?'

url: /2021/04/06/sobre-helium-esquema-piramidal/
categories:
- varios
tags:
- criptomonedas
- helium
- economía
- iot
---

Por motivos que no vienen al caso, he estado investigando estos días de reojo [Helium](https://www.helium.com/), una cosa muy críptica y cuya página web no ayuda en gran medida a clarificar y cuyas deficiencias esta entrada mía contribuya a rectificar. Esta entrada va a ser larga, dividida en varias secciones y con varias de propedéutica antes de entrar en materia.

Vaya en todo caso por delante que existen varias páginas, además de la de Helium, que describen el sistema muy bien, mucho mejor de lo que podría hacerlo yo, desde el punto de vista técnico (como [esta](https://www.disk91.com/2020/technology/internet-of-things-technology/first-steps-with-helium-iot-network/)). Yo, en todo caso, me voy a centrar más en la dimensión económica de la cosa.

**IoT**

El IoT consiste en que en algún momento del _futuro_ ---a mis casi 50 años ya estoy viviendo en el futuro de cuando aprendí lo que significa esa palabra, así que se me va a permitir que, irónicamente, use la cursiva--- los cacharros comunicarán cosas a quien le concierna:

* Soy el collar de un perro y estoy en tal sitio, por si el que me lleva se ha perdido.
* Soy un huerto y alguien debería regarme porque estoy seco.
* Soy la farola de la calle tal con tal y estoy apagada en estos momentos.
* Etc.

**LoRa[WAN]**

LoRa (o [LoRaWAN](https://es.wikipedia.org/wiki/LoRaWAN)) es la tecnología que da soporte al IoT. Puede entenderse como una versión de la WiFi que conocemos, solo que:

* Tiene un alcance en el orden de magnitud de centenares de metros (a diferencia de la WiFi, que la tiene de metros).
* Tiene un ancho de banda en el orden de bytes/s (a diferencia de la WiFi, que lo tiene en MB/s).
* Los dispositivos (routers, etc.) de esta tecnología tienen un consumo muy bajo: pueden funcionar meses, años, con una pila.
* Usa una región del espectro radioeléctrico abierta (como el de la WiFi), 868 Mhz, a diferencia de la WiFi, que usa 2.4/5 Ghz.

Así que los dispositivos IoT utilizan esta frecuencia y tecnología para transmitir información a antenas que estén escuchando y que la transmitan después a una base de datos o lo que sea menester.

**Modelo de negocio estándar**

El modelo de negocio estándar sería que un cliente (el que coloca dispositivos en los collares de los chuchos o en los huertos) pagase una suscripción a una empresa de telecomunicaciones que tuviese distribuidas una serie de antenas por el territorio.

El pago podría descomponerse en dos partes:

* Un pago fijo por capacidad/cobertura, para contribuir a sufragar los gastos fijos de la red.
* Un pago variable por cantidad de información transmitida.

(Esencialmente, lo mismo que sucede con las suscripciones a internet, con la salvedad de que desde hace un tiempo la capacidad de estas es tal que el coste de cada MB adicional transmitido es cero y ahora se pagan solo tarifas planas, es decir, la parte de la cobertura. Es también el mismo modelo del pago por la electricidad: una parte fija para contribuir al mantenimiento de la red (y de cosas muy acatarrantes en España) y otro asociado al consumo  real de electricidad.)

Los actores naturales de este negocio son las empresas de telefonía movil con antenas. Podrían añadir antenas LoRa a sus instalaciones actuales para cubrir el territorio dar servicio a sus clientes.

**TTN**

[The Things Network](https://www.thethingsnetwork.org/) es una red de friquis que ponen antenas en sus balcones/tejados, etc. para proporcionar cobertura LoRa por todo el mundo por amor al arte. Seguro que son casi todo tipos y que alguna periodista de [Verne](https://verne.elpais.com/) va a escribir otro de sus habituales artículos hipersesudos denunciándolo muy minuciosamente.

Hay gente usando esa red para conectar su cafetera, transmitir la temperatura de su salón u otras cosas con las que matar el rato y entretenerse de manera más o menos productiva.

**Helium**

[Helium](https://www.helium.com/) es un proveedor de servicio para IoT alternativo a TTN, alternativo a las empresa de telecomunicaciones estándar, etc. Es una especie de TTN con ánimo de lucro: la gente pone antenas en sus balcones, tejados, etc. con la espectativa de ser recompensada económicamente por ello. Además, la recompensa tiene la forma de [HNT](https://coinmarketcap.com/currencies/helium/), una criptomoneda.

Adviértase cómo la coexistencia de los términos IoT y criptomoneda en el _elevator pitch_ de Helium puede incrementar el interés por la cosa.

En el futuro, a medio/largo plazo, la rentabilidad de Helium (y la de quienes contribuyan routers y electricidad al sistema) viene determinada por el uso que los clientes finales hagan del sistema. Actualmente, la tarifa especificada por la empresa es de 10 microdólares por cada paquete de 24 bytes (o fracción); dicho de otro modo, con cada dólar puedes mandar 2.4 MB.

Por referencia, según [esto](https://explorer.helium.com/blocks), la red ha enviado durante el último mes poco más de un GB de datos, que viene a ser una facturación mensual de unos 500 dólares a repartir entre los 25k routers (i.e.,, señores que tienen un router en el tejado) de los que actualmente consta la red. Así que, salvo que el _futuro_ devenga futuro, el negocio es una ruina caracolera.

Sin embargo, actualmente existe gente que está facturando cientos de euros mensuales gracias a sus nodos de Helium. Que es algo que exige explicación.

Helium retribuye a sus nodos, esencialmente, por dos conceptos:

* Transmitir información por la red, un porcentaje del coste que pagan los clientes una vez descontado la tajada de la empresa detrás del tinglado.
* Por mantener la integridad de la red.

Mantener la integridad de la red consiste en verificar que los nodos que dicen estar en un sitio:

1. Están efectivamente en ese sitio.
2. Están activos.

Lo que hace el sistema es elegir nodos al azar, hacerles emitir una señal y ver si otros nodos próximos la reciben. Si el proceso se realiza con éxito, todos participantes en la verificación reciben unas fracciones de la criptomoneda. Verificar que los nodos están levantados es, en esta criptomoneda, _minar_.

**Nota técnica:** el proceso hace más cosas, como penalizar nodos muy próximos (para que nadie tenga dos en la misma casa, por ejemplo), y algunas cosas más con el objetivo de mallar el espacio con antenas que tengan sentido técnico y económico.

Ese desmesurado (e insostenible) beneficio económico que produce actualmente el proceso de verificación de la red (o minado) es el que ha atraído el interés de muchos a esta red/criptomoneda. Un análisis económico ---basado, como no puede ser de otra manera, en el valor presente de los flujos de caja futuros--- daría como resultado una cotización próxima a cero del valor del HNT. Sin embargo, está actualmente por encima de los 10 dólares.

_[Otra nota: la mejor inversión a medio plazo sería ponerse corto de HNT; no sé si alguien sabe cómo se puede hacer eso.]_

Tengo que señalar que no sé qué es lo que está empujando al alza el valor del HNT. Realmente, no hay motivo para comprarlo: solo, tal vez, si te interesase pagar para transmitir información por la red; pero como he indicado más arriba, apenas hay tráfico. Tengo la sospecha de que la subida del precio tiene que ver con una compra oculta de HNT que se realiza a la hora de colocar un nodo nuevo en la red. Los nuevos nodos tienen que tener un _hardware_ especial y nada barato (i.e., muy por encima del precio por separado de los componentes que incluyen: la antena, la tarjeta LoRa, una Raspberry Pi, etc.), que incluye un pago de unos 50-100 dólares por derechos de enganche y que sospecho que se transforman en compras implícitas de HNT.

**Esquema piramidal**

Helium es otro esquema piramidal. Al esquema entra dinero de dos sitios distintos:

* Clientes que lo usan para transmitir información. Que, como se ha indicado, es una cosa marginal.
* Los derechos de enganche de los nuevos nodos, implícitos en la adquisición del _hardware_ del nodo.

Este dinero va a parar a:

* La empresa detrás de Helium, que por diseño se queda un porcentaje importante de todo lo anterior.
* Los primeros en poner nodos a _minar_, en tanto que hayan tenido la prevención de permutar por dólares antes del previsible colapso de la cotización del HNT.

Quienes entren después tras haber adquirido el hardware de un nodo por unos 400 dólares habrán contribuido un porcentaje sustancial de ellos al beneficio de los sujetos arriba señalados y, como consolación, dispondrán de un dispositivo que, por piezas, apenas vale 100 dólares (una antena, una tarjeta LoRa y una Raspberry Pi de última generación).