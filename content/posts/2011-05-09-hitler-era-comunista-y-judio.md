---
author: Carlos J. Gil Bellosta
categories:
- nlp
date: 2011-05-09 07:07:57+00:00
draft: false
lastmod: '2025-04-06T18:54:04.371777'
related:
- 2023-10-05-llms-historia.md
- 2018-09-19-ocurrencias-cuotas-de-gente-de-letras-en-la-ciencia-de-datos.md
- 2016-09-30-sobre-ciencia-de-datos-en-unir-teoria-y-gente.md
- 2015-07-24-mis-respuestas-en-una-entrevista-sobre-big-data-periodismo-de-datos-etc.md
- 2018-03-02-reflexiones-bayesianas-al-hilo-del-manido-independientemente-de-su-ideologia-los-economistas-suelen-estar-de-acuerdo-en-que.md
tags:
- nlp
title: Hitler era comunista y judío
url: /2011/05/09/hitler-era-comunista-y-judio/
---

O así nos cuenta Google. Y me explico rápidamente para que no me demande nadie.

Uno de los servicios de Google con los que he topado recientemente es [Google Squared](http://www.google.com/squared), un buscador muy particular —y que parece funcionar sólo en inglés— que devuelve tablas: uno puede buscar _[nikon lenses](http://www.google.com/squared/search?q=nikon+lenses)_, o _[statistical software](http://www.google.com/squared/search?q=statistical+software)_ y obtendrá lo que verá al pinchar en los correspondientes enlaces: tablas en las que las filas corresponden a lentes de Nikon o paquetes estadísticos y las columnas a atributos. Es increíble que Google adivine que los relevantes para las lentes son, entre otros, la distancia focal o la apertura mientras que para el _software_ estadístico lo son la licencia o el desarrollador.

Pero, ¿qué pasa si uno quiere la lista de los [comunistas](http://www.google.com/squared/search?q=communists) más prominentes? En la fecha de la publicación de esta entrada, junto a Lenin, Marx, Stalin y Trotsky, aparecen Ronald Reagan y Hitler. Y de éste último se dice que es judío (y es digno de mención, además, que en lugar de su foto aparece la del Che).


[![](/wp-uploads/2011/05/hitler_comunista_y_judio.png#center)
](/wp-uploads/2011/05/hitler_comunista_y_judio.png#center)


El motivo de este problema reside en la naturaleza de los algoritmos típicamente usados en minería de textos. Mi primer contacto con la disciplina ocurrió en 2004, cuando era empleado de SAS. Un potencial cliente quería un sistema automático de clasificación de sentencias judiciales y SAS había adquirido recientemente una empresa que desarrollaba algoritmos de minería de textos. Como se trataba de un proyecto _raro_ dentro de los muy de andar por casa de la empresa, acabaron asignándomelo.

Y mi primera reacción al estudiar la naturaleza de los algoritmos que se empleaban fue de infinito asombro. Omitiendo los detalles, los análisis partían del estudio de las frecuencias de las distintas palabras en el texto: cada sentencia acababa transformada en un vector de recuentos. Suficiente, entiendo, para distinguir homicidios de cohechos, pero no tanto para reconstruir, aunque fuese esquemáticamente, qué ocurrió.

De las 30.000 palabras de las que consta la entrada sobre Hitler en la Wikipedia (en inglés), alrededor de 60 tienen que ver con el judaísmo y alrededor de 30 con el comunismo. Intuyo que estas yuxtaposiciones ocurren en muchos otros textos sobre dicho señor. E intuyo también que muchos métodos de predicción siguen basándose en los mismos métodos de preproceso para _matematizar_ o _vectorizar_ los textos, aplanando así la riqueza y sutileza del lenguaje.

No deja de sorprenderme lo que es posible lograr incluso de esta manera: incluso en este ejemplo que cito, es admirable que una máquina _tonta_, que no _sabe_ (en nuestro sentido de _saber_) qué puede ser eso del comunismo, asocie esa cadena de caracteres a otras que identifican a un individuo que todos sabemos que algo tuvo que ver con eso.

También es cierto que experiencias como las de [Watson](http://en.wikipedia.org/wiki/Watson_(computer)), el ordenador de IBM que venció a los campeonísimos de Jeopardy!, un popular juego de preguntas y respuestas de la TV estadounidense; los traductores automáticos de textos como el de Google (que admiro tremendamente) y el mismo Google Squared parecen indicar que habrá progresos.

Pero en tanto llega el futuro, se me ocurren, entre los muchísimos que pudieran hacerse, dos comentarios. El primero: ¿estaremos [delegando demasiadas decisiones en máquinas](http://www.datanalytics.com/2011/01/04/las-maquinas-la-ai-que-controlan-la-economia/)? A la vista de los errores que pueden llegar a cometer, ¿podemos fiarnos demasiado de que puedan gestionar, como apunta el anterior enlace, actividades tan importantes como nuestros ahorros e inversiones?

Y el segundo, tal vez relacionado con el anterior, ¿nos vamos a ver obligados a _escribir para las máquinas_? El hecho de que algunos de los _lectores_ más importantes de cuanto escribimos sean ordenadores, ¿acabará haciéndonos adecuar nuestro lenguaje a su capacidad y limitaciones de comprensión? En particular, ¿debería yo en esta bitácora escribir como me diera la gana? ¿O me convendría más usar un lenguaje más romo para que Google entendiese mejor qué cuento para que me generase más visitas y fuese capaz de mostrar publicidad contextual más relevante?

¿Dictarán las limitaciones de los ordenadores el criterio para _escribir correctamente_ en el futuro?