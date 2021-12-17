---
author: Carlos J. Gil Bellosta
date: 2012-10-04 07:25:04+00:00
draft: false
title: Ley de Transparencia y anonimidad en ficheros de microdatos (II)

url: /2012/10/04/ley-de-transparencia-y-anonimidad-en-ficheros-de-microdatos-ii/
categories:
- estadística
- números
tags:
- anonimidad
- datos abiertos
- estadística
- estadística pública
- números
---

Escribí hace un tiempo sobre el asunto de la [transparencia y la privacidad](http://www.datanalytics.com/blog/2011/10/06/ley-de-transparencia-y-anonimidad-en-ficheros-de-microdatos/) y quiero retomar el tema. Comienzo reafirmando mi preferencia por y compromiso con la causa de la transparencia en las administraciones públicas, fe de lo cual da esta misma bitácora. Pero la serendipia me ha llevado a tropezar con un ciertas circunstancias que han sembrado de matices mi inicial entusiasmo. No son insalvables, convengo. Pero me siento en la obligación de, cuando menos —y, pensando que pueden no ser de universal conocimiento— dejar constancia escrita de ellas.

Comenzaré desde lejos afirmando que da la impresión de que lo abstracto es ajeno a la mente humana. Por eso, muy a menudo, realizamos inferencias apresuradas que tal vez nos conducen, en ocasiones, a afirmar cosas del tipo "todos los hombres son zapateros". Muchos de quienes abogan por la transparencia pueden verse tentados a realizar un salto epistemológico desde el "sería conveniente que esta, esta y esta otra información fuese pública" a, por ejemplo, los [_diez puntos_](http://www.proacceso.org/los-nueve-principios/) que articulan la propuesta de transparencia de ciertas organizaciones implicadas en la materia:



	  1. El derecho de acceso a la información es un derecho fundamental de toda persona
	  2. El derecho se aplica a todas las entidades públicas, a todos los poderes del Estado y a todas aquellas entidades privadas que realicen funciones públicas
	  3. El derecho de acceso a la información se aplica a toda la información elaborada, recibida o en posesión de las entidades públicas, sin importar cómo esté almacenada
	  4. Realizar solicitudes debe ser sencillo, rápido y gratuito
	  5. Los funcionarios tienen la obligación de ayudar a los solicitantes
	  6. Principio de publicidad de la información: el secreto y la denegación de la información son la excepción
	  7. Las denegaciones de acceso a la información deben ser limitadas y estar debidamente motivadas
	  8. Toda persona tiene el derecho a recurrir las denegaciones de acceso o la no contestación a las solicitudes realizadas
	  9. Las entidades públicas, a iniciativa propia, deben poner a disposición del público información básica y esencial sin que sea necesario realizar una solicitud
	  10. El derecho de acceso a la información debe ser garantizado por un órgano independiente


Podría tratar hoy cuestiones como el coste potencial asociado al punto 4 y hablar del coste marginal de cada _bit_ liberado por las administraciones públicas en términos de utilidad social. O cómo cumplir con el punto 9 podría convertirse en otro modo de construir aeropuertos sin aviones. Imagino que con la Ley de Transparencia en mano podré algún día solicitar los _logs_ del servidor de las páginas de información estadística del INE para ver cuánta gente lo está utilizando realmente. (Incluso algún _friqui_ de la recursividad podrá solicitar al Estado información sobre el coste de atender su consulta sobre el coste de atender su consulta sobre...).

Pero no. Más bien quiero hablar del punto 6. El punto 6 es delicado. Porque aunque no esté claro si el derecho a la información es o no un derecho fundamental —hay opiniones para todos los gustos y el borrador de la ley actual no lo contempla así— la Constitución sí que lo predica rotundamente del de _a la intimidad personal y familiar y a la propia imagen_. Y en ese punto ambos derechos entran en conflicto.

Y no es este ni baladí ni, mucho menos, trivial. El número de febrero de la [Revista BEIO](http://www.seio.es/BEIO/) traerá un artículo mío en el que trato algunos de estos asuntos desde una óptica técnica, matemática. Pero quiero traer a colación [tres casos notables](http://papers.ssrn.com/sol3/papers.cfm?abstract_id=1450006) que ilustran los peligros potenciales de un planteamiento naïf de transparencia a ultranza. Incluso cuando se hace con la mejor intención del mundo.

En el año 2006, AOL, llevado del encomiable afán de fomentar la investigación, hizo público el texto de veinte millones de consultas realizadas en su buscador de internet por 650000 de sus usuarios. Se eliminaron sus nombres, IPs, etc. del fichero para preservar la anonimidad, dado que algunas búsquedas ponían de manifiesto incluso las preferencias sexuales o las patologías de algunos de ellos y este tipo de información es merecedora del máximo grado de confidencialidad. Y no pasó mucho tiempo hasta que [el New York Times identificó al usuario número 4417749](http://www.nytimes.com/2006/08/09/technology/09aol.html?pagewanted=all&_r=0), que resultó ser una señora viuda de 62 años, dueña de un perro negro.

El segundo caso tal vez sea más conocido: el del [premio de Netflix](http://en.wikipedia.org/wiki/Netflix_Prize). Netflix, para mejorar su motor de recomendaciones, _anomimizó_ y divulgó datos de preferencias de sus usuarios. Premiaba con un millón de dólares a aquel que fuese capaz de crear un algoritmo que mejoraba el que ellos utilizaban hasta la fecha. El resultado fue [este artículo](http://www.netflixprize.com/assets/GrandPrize2009_BPC_BellKor.pdf) que describe la solución ganadora. Animados por el éxito de la primera convocatoria, Netflix propuso una reedición. Pero esta vez, el artículo _ganador_ fue _[Robust De-anonymization of Large Sparse Datasets](http://www.cs.utexas.edu/~shmat/shmat_oak08netflix.pdf)_ en el que se describe cómo reidentificar los usuarios del fichero y en el que se lee:



<blockquote>Privacy risks of publishing micro-data are well-known. Even if identifiers such as names and Social Security numbers have been removed, the adversary can use background knowledge and cross-correlation with other databases to re-identify individual data records.</blockquote>



Una [demanda posterior](http://blog.netflix.com/2010/03/this-is-neil-hunt-chief-product-officer.html) hizo que Netfix retirase la segunda competición.

El tercer caso está aún más directamente relacionado con la Ley de Transparencia. Los dos anteriores, al fin y al cabo, tuvieron que ver con empresas más o menos bienintencionadas que hacían públicos datos de sus usuarios. El tercero, ocurrido a mediados de los años 90, tiene que ver con una institución pública. Relato el caso usando el [testimonio original](http://dataprivacylab.org/dataprivacy/talks/Flick-05-10.html) (con mi traducción) de quien lo dio a conocer, Latanya Sweeney:



<blockquote>En Massachusetts, el GIC (Group Insurance Commission) está encargado de gestionar el seguro de salud de los empleados públicos. El GIC recopiló datos médicos detallados de 135000 ellos y sus familias. Todo tipo de identificadores, como el nombre, la dirección y el número de la seguridad social fueron eliminados, de forma que los datos fueran (aparentemente) anónimos y fueron entregados gratuitamente a investigadores y empresas interesados en ellos. Compré el censo electoral de Cambridge, Massachusetts, por veinte dólares y recibí la información en dos disquetes (actualmente, se puede comprar por internet y recibirla al instante). El censo incluía el nombre, dirección, código postal, fecha de nacimiento y sexo de cada votante. Mostré cómo los dos conjuntos de datos podían cruzarse por código postal, fecha de nacimiento y sexo, asociando de tal manera diagnósiticos, tratamientos y medicaciones a individuos concretos.

Había un caso relevante. William Weld era el gobernador de Massachusetts en aquella época y su historial médico estaba en los datos del GIC. Vivía en Cambridge. De acuerdo con el censo, seis personas habían nacido el mismo día que él, sólo tres eran hombres y él era el único en su código postal.</blockquote>



Poco hay que añadir.
