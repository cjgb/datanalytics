---
author: Carlos J. Gil Bellosta
date: 2010-04-18 19:43:28+00:00
draft: false
title: 'Los "mejores" paquetes de R (I): la red social de los participantes en r-help'

url: /2010/04/18/los-mejores-paquetes-de-r-i-la-red-social-de-los-participantes-en-r-help/
categories:
- estadística
- r
tags:
- estadística
- r
- redes sociales
---

Hace no mucho leí un [articulillo de SAS](http://support.sas.com/resources/papers/proceedings09/109-2009.pdf) sobre el impacto de ciertas marcas en determinadas [redes sociales](http://es.wikipedia.org/wiki/Red_social). Como este tema, así como sus posibles aplicaciones, siempre me ha intrigado, llevado de la curiosidad y del aburrimiento, decidí realizar un estudio análogo.

El artículo de SAS utiliza como materia prima resúmenes de publicaciones científicas que tratan de determinados medicamentos. A los autores les interesa conocer de qué marca de medicamentos escribe cada autor ponderando a éstos últimos en función de su _impacto_. El impacto lo miden a través de su peso en la red de colaboraciones científicas: tiene alto impacto un autor que ha escrito muchos artículos en colaboración con otros autores que también han escrito muchos artículos.

En defintiva, algo no muy distinto del famoso [PageRank](http://es.wikipedia.org/wiki/PageRank) de Google: una página tiene un peso que se calcula ponderando el peso de las páginas que apuntan a ella mediante un algoritmo que, al menos a primera vista, parece recursivo.

En esta entrada voy a describir la primera fase de mi pequeño experimento. Éste consiste en asignar pesos a los distintos paquetes de R en función de su _importancia_ en la lista de correo [r-help](https://stat.ethz.ch/mailman/listinfo/r-help). En la primera fase he asignado a los participantes en dicho foro un peso que mide su _nivel de impacto_. He aquí cómo:


### Descarga del histórico de correos de r-help


Es sencillo: para descargar todos los correos por mes desde abril de 1997, basta con ejecutar (¿tengo que decir que uso Linux?)


    wget -nd -r -l1 --accept gz https://stat.ethz.ch/pipermail/r-help/


Sacas la ropa de la lavadora, tiendes y, a la vuelta, ejecutas


    zcat *.gz > all_mails




### Preprocesamiento del fichero de correos


El fichero creado en el paso anterior ocupa 417MB (a fecha de hoy) y tiene [formato mbox](http://es.wikipedia.org/wiki/Mbox). Podría procesarse como un fichero de texto normal, pero Python, como en tantas ocasiones, acude en tu rescate. El [módulo _mailbox_](http://docs.python.org/library/mailbox.html) permite manipular este tipo de ficheros y en mi caso, con poco esfuerzo, crear dos tablas:


* Una contiene el ID de cada correo junto con el correo electrónico de su autor.
* Otra, la relación entre cada mensaje y el mensaje al que hace referencia, es decir, el mensaje del que es respuesta. En ella, obviamente, sólo se guardan los mensajes que son respuesta a otros mensajes anteriores.

La creación de estos ficheros, aunque conceptualmente simple, se complica por las excepciones, distintas configuraciones, etc. de los distintos sistemas de correo electrónico. Pero no son problemas que 20 líneas de código en Python no puedan solventar.


### Asignación del "r-help-rank" a los participantes de la lista


Dada la naturaleza de la lista, decidí no asignar pesos sino por respuestas a mensajes, no por iniciar una conversación. Dos participantes están conectados si participan en una misma discusión. El peso, _r-help-rank_, de un participante lo construí como la suma de los pesos de los participantes que intervienen en una conversación común. Más concretamente:


1. En un paso inicial, asigno un peso idéntico a cada uno de los 7177 participantes (más bien, _respondedores_) en la lista.
2. Para cada participante, identifico las conversaciones en las que ha tomado parte y sumo los pesos de los restantes participantes en ellas.
3. Normalizo los pesos (para que tengan suma 1) e itero el paso anterior hasta que el vector de pesos se estabiliza.

El algoritmo es similar al del cálculo por el [método de las potencias](http://es.wikipedia.org/wiki/M%C3%A9todo_de_las_potencias) del primer valor propio de la matriz cuya coordenada (i,j) cuenta el número de veces en que los miembros i y j de la lista participan en una misma conversación.


### And the winner is... Ripley!

![](http://upload.wikimedia.org/wikipedia/en/1/17/Ellen_ripley.jpg)



La tabla siguiente contiene los pesos de los 20 participantes con el  r-help-rank más alto (sólo muestro parte del correo electrónico):


|  usuario  | r-help-rank |
|:------------| -------: |
|ripley| 0.0421097|
|p.dalgaard| 0.0392726|
|ggrothendieck| 0.030767|
|murdoch| 0.0240318|
|maechler| 0.0162645|
|h.wickham| 0.0135003|
|tlumley| 0.0126393|
|waclaw.marcin.kusnierczyk| 0.0124556|
|spencer.graves| 0.0117397|
|jfox| 0.0087463|
|ligges| 0.0086564|
|dwinsemius| 0.0086503|
|bates| 0.007753|
|gunter.berton| 0.0077085|
|ted.harding| 0.0071535|
|f.harrell| 0.0066112|
|edd| 0.0060405|
|r.turner| 0.0057846|
|petr.pikal| 0.0056932|
|gb| 0.0056125|

Que conste que "gb" en la posición vigésima no soy yo. De hecho, yo aparezco en la posición 452 de la lista. Si alguien tiene curiosidad por encontrarse en ella, que me deje un mensaje. No voy a publicar los resultados completos por no hacer públicos correos electrónicos de terceros sin permiso.


### Caveats


Son muchas las objeciones que se le pueden realizar a este estudio. Soy consciente de muchas de ellas y es posible que, en función de la disponibilidad de tiempo, me disponga a resolver las que buenamente pueda. En tanto, estoy abierto (y de hecho, expectante) a atender comentarios y sugerencias de mis lectores.
