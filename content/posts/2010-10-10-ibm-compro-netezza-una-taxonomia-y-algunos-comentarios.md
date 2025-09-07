---
author: Carlos J. Gil Bellosta
categories:
- consultoría
date: 2010-10-10 23:22:35+00:00
lastmod: '2025-04-06T19:03:55.819197'
related:
- 2010-10-14-mas-sobre-lo-de-netezza.md
- 2011-09-28-datos-grandes-colas-largas.md
- 2010-05-19-c2bfen-que-se-parecen-oracle-y-teradata-a-excel-y-word.md
- 2010-12-30-c2bfes-cobol-tan-robusto-como-cuentan.md
- 2011-03-07-los-dinosaurios-y-r-dos-enlaces.md
tags:
- consultoría
- sql
- ibm
- netezza
title: 'IBM compró Netezza: una taxonomía y algunos comentarios'
url: /2010/10/10/ibm-compro-netezza-una-taxonomia-y-algunos-comentarios/
---

El primero tiene que ver con coches. En el ascensor, en las conversaciones que oigo en el ascensor, que es donde pulso los intereses de mis cotidianos coadláteres, soy mudo testigo de multitud de conversaciones. Las más tratan de coches. Es increíble cómo la gente está al día de marcas, modelos, motores y potencias. Aunque luego les preguntas _por lo de su oficio_ y te das cuenta de que, sorprendentemente, no saben por dónde les pega el aire. Así, nuestro teórico máximo sabedor sobre la base de datos con la que trabajamos ni siquiera estaba al corriente de que existía una _cosa_ llamada Postgres. (Le tuve que deletrear el nombre, lo apuntó en un papel y me dijo que lo buscaría en internet; cualquier día le pregunto hasta dónde lo ha llevado su afán de saber).

Escuchándolos, cualquiera diría que no existe otro DBMS que Oracle. Y Teradata, en nuestro peculiar contexto.

No me gustaría que los lectores de mi blog estuviesen tan intelectualmente desarmados como tanto consultor advenedizo y renuente y, para ello, les voy a regalar una mínima taxonomía de los DBMSs que abra su apetito, despierte su curiosidad y los anime a visitar la Wikipedia para consultar los detalles.

Del año 68 para acá impera —salvo un número sorprendentemente elevado de mentes retrógradas— el llamado modelo relacional. Los más de los DBMS _modernos_ siguen tal esquema. Aunque existe un reciente interés por paradigmas [noSQL](http://es.wikipedia.org/wiki/NoSQL), por no divagar, sobre ellos no añadiré cosa alguna más allá de unas frases copiadas de [aquí](http://outerthought.org/site/products/lily.html):


> Google, Facebook, Amazon, Digg and other vested web properties didn’t turn to classic enterprise technology (such as RDBMs) to address their non-classical challenges of availability and scalability. Instead, they turned towards the core of the problem, and invented novel theories, concepts and solutions to cope with their enormous growth and subsequent demand. These solutions are now becoming available in the software commons, such as column-oriented databases, messaging queues and highly scalable infrastructure management tools.


Por simplificar, los DBMS relacionales, se encuadran en cuatro grandes grupos:



* Los tradicionales, con una arquitectura diseñada hace treinta años o más y que funcionan decentemente en contextos más o menos típicos (conjuntos de datos pequeños o medianos). Entre ellos se cuentan los más conocidos de los diletantes:
	* MySQL —y sus _forks_, como MariaDB— que es el motor de, entre otros, este blog.
	* SQL Server, para los amigos de los productos de Microsoft.
	* Oracle, que se administra tan fácilmente como se resuelve un sudoku ninja. Y que no es particularmente barato.
	* Postgres y sus derivados, como EnterpriseDB, que podrían sustituir a Oracle en el 95% de las instalaciones generando únicamente el 10% de los dolores de cabeza que produce este último. Y gratis, claro.
	* Otros como DB2 y similares, que tienen un tufillo a sobaco de dinosaurio que echa para atrás.

* Los [orientados a columnas](http://en.wikipedia.org/wiki/Column-oriented_DBMS). Porque todos los anteriores almacenan información en tablas y en dichas tablas, los contenidos de una fila se almacenan de modo contiguo. Los orientados a columnas guardan de manera contigua los contenidos de las columnas. Es prácticamente como si almacenasen cada columna en un fichero distinto. Esta orientación a columnas les permite beneficiarse de una serie importante de ventajas técnicas: pueden leer únicamente un porcentaje de los datos en cada consulta (las columnas involucradas) obviando el resto, pueden incorporar mecanismos de compresión más avanzados y simples, etc. He visto alguna que otra comparación entre DBMS de ambos paradigmas (almacenamiento por filas y por columnas) y los primeros suelen ser más rápidos en operaciones de carga masiva, mientras que los segundos son mucho más rápidos a la hora de resolver consultas.
* Los DBMS MPP (_massively parallel processing_), aptos para instalaciones grandes. Entre ellos, se cuentan:
	* Teradata, que me hace sentir como todo un máster del universo cuando completa en dos minutos consultas que en otras instalaciones llevarían una tarde (o se caerían); o cuando ejecuta en unas horas 300.000 consultas que le lanzo —programáticamente, claro está— cuando me aburro y quiero jugar al gato y al ratón con los administradores.
	* Netezza, similar pero, aparentemente, más barata y recientemente adquirida por IBM.

* Finalmente, MPP y orientada a columnas, como Vertica, el DBMS emergente del que nunca han oído hablar nuestros _carlossainz_ de ascensor.

En este contexto se explica bien el interés que puede tener IBM en adquirir Netezza. No es, [como se lee en otros sitios](http://carlosal.wordpress.com/2010/09/22/ibm-compra-netezza/), que IBM haya de alguna manera traicionado a sus antiguos clientes de DB2 o que haya particular riesgo de que le haga dormir el sueño de los justos. Es, más bien, que hay tantos DBMS como problemas de negocio y que IBM quiere un trozo del pastel que ahora tan rica (en varias acepciones) y monopolísticamente está disfrutando Teradata en este país nuestro en el que reina, más que Juan Carlos I, además de una irritante pereza intelectual, una enervante inapetencia por lo nuevo.