---
author: Carlos J. Gil Bellosta
categories:
- números
date: 2012-03-13 07:49:13+00:00
draft: false
lastmod: '2025-04-06T19:06:42.497195'
related:
- 2010-08-16-leyendo-en-diagonal-pero-con-cuidado.md
- 2012-05-10-modelos-exponenciales-para-grafos-aleatorios-ii-modelo-probabilistico.md
- 2010-03-11-madre-teresa-patriotas-idiotas-y-queries-recursivas.md
- 2022-12-01-eventos-conjuntos.md
- 2011-03-15-metodologia-casuistica-y-tipologia.md
tags:
- números
- redes sociales
- nlp
- diccionario
- drae
title: Las palabras esenciales del diccionario
url: /2012/03/13/las-palabras-esenciales-del-diccionario/
---

Me he entretenido en los últimos tiempos tratando de responder una pregunta que, sin inquietarme, no dejaba de despertar mi curiosidad.

En la escuela nos enseñaron a definir palabras. Una de las primeras reglas de aquel juego era que el término definido no podía usarse en la definición: _casa_ no se puede utilizar para definir _casa_. Los niños lo entendíamos. Sin embargo, los mayores hacían trampa: en el DRAE, _construir_ se define en términos de _edificar_ y _edificar_, en términos de _construir_.

Efectivamente, cójase el diccionario. El DRAE, por antonomasia. Búsquese una palabra. Cualquiera. En su definición aparecen otras. Búsquense estas a su vez. Y continúese recursivamente. Pueden pasar dos cosas:

* Volver a tropezar con la palabra original.
* No volver nunca a tropezar con ella.

Supongo que esas palabras que aparecen en los ciclos tienen una importancia léxica distinta de las del resto. Uno podría llamarlas _palabras axiomáticas_, palabras cuyo significado debería conocer el hablante antes de consultar la herramienta que define, es decir, el diccionario.

Quizás uno pueda contemplar la discusión anterior de manera _euclídea_. Cada definición vendría a ser un teorema de la geometría euclidiana. La demostración de un teorema puede remitir a otros teoremas previos. Pero no indefinidamente: existen [cinco postulados](http://es.wikipedia.org/wiki/Postulados_de_Euclides) que se dan por buenos sin demostración, que se suponen ciertos de antemano.

Igualmente, en el diccionario, uno podría preguntarse cuáles son esos términos que se supone debieran darse por sabidos y que un diccionario euclídeo debiera abstenerse de definir. O, al menos, marcar explícitamente como tales.

Para conseguir mi objetivo he hecho lo siguiente:

1. Descargar la lista de palabras definidas en el DRAE, disponibles [aquí](http://dirae.es/static/lemario-20110414.txt) y [aquí](http://dirae.es/static/lemasnuevos23edicion-20110415.txt).
2. Consultar (programáticamente, por supuesto) en el DRAE cada una de ellas.
3. Buscar la raíz de los términos que aparecen en la definición usando _mi_ [lematizador](https://datanalytics.com/2011/12/13/un-lematizador-para-el-espanol-con-r-cutre-mejorable/).
4. Crear una tabla con tres columnas:

	* lema
	* raíz del término que aparece en la definición
	* número de veces que aparece en la definición


Luego he analizado este conjunto de datos utilizando métodos de análisis de redes sociales. En efecto, considero que las palabras del diccionario, unas 88000, forman una red social en la que A es _amiga_ de B si A aparece en la definición de B.

Y eso me permite responder una serie de preguntas. Por ejemplo, **¿cuántas palabras carecen de amigos?** Es decir, ¿cuántas no aparecen en la definición de ninguna otra? Pues de las 87654 palabras del DRAE, son, exactamente, 51506, es decir, un 58.76 %. Incluyen desde a-, aarónico, aaronita, aba, ababa y ababillarse hasta zurumbo, zurupeto, zutanejo, zutuhil, zuzar y zuzo.

Las restantes 36148 palabras se usan en las definiciones de otras y van desde a, ababol, abacá, abacal, abacería, y ábaco hasta zurribanda, zurriburri, zurrón, zutano, zutujil y zuzón.

El siguiente paso del análisis consiste en **eliminar aquellos términos que sólo entran en la definición de términos sin amigos** o, recursivamente, en la definición de términos eliminados en el paso anterior. Por ejemplo, si A es un término sin amigos y B es un término que se usa en la definición de A y no en ningún otro, lo filtraría en este paso. Tras este filtrado, quedan 24683 términos, un 28.15 % de los términos originales. Seguro que Euclides pensaría que demasiados.

Los 11465 términos que se caen van desde ababol, abacal, abada, abajar, abakuá y aballar hasta zurriago, zurribanda, zurriburri, zutano, zutujil y zuzón. Encuentro en la lista términos como tridimensional, tropecientos, sobreexplotar, rutherfordio, presuntamente y perversión junto a otros como zangolotear, podrigorio, segueta, tolmera o tósigo, de cuya existencia a cabo de tener noticia.

De entre los restantes 24683 términos encontramos dos tipos. Por un lado, 197 familias aisladas de términos que son amigos entre sí, pero que no son amigos de otros términos. Por ejemplo, forman parte de estas familias parejas como violonchelista y violonchelo o triplas como tabulador, tabuladora y tabular.

Pero existe **una familia de términos que comprende 24331 de ellos**, un 27.75 % del total, que forma un _clúster_ completo y que se extiende desde a, abacá, abacería, ábaco, abad y abadejo hasta zurdo, zuro, zurra, zurrador, zurrar y zurrón.

Quiero dejar constancia de que mis números son aproximados. Es posible que haya errores y, en efecto, he detectado algunos en el lematizador. Por ejemplo, este ha asignado a "nota" (musical) la raíz "notar" (verbo) en alguna ocasión. Etc.

No obstante, pienso que el número de términos en las definiciones es excesivo. ¿Debería la Academia esforzarse por reducir su número, por tratar de que la lista de _palabras axiomáticas_ fuese más corta? Puede. [Según algunos expertos](http://blog.classof1.com/how-many-words-should-you-know/), el número de palabras (en inglés) que utiliza activamente un hablante medio ronda las 20.000 y conoce (pasivamente) unas 40.000. Y estas cifras estarían dentro de los órdenes de magnitud que indico para el DRAE.

¿Cuál será, me pregunto, la opinión de mis lectores?