---
author: Carlos J. Gil Bellosta
date: 2010-12-29 09:43:31+00:00
draft: false
title: Noticia de las II Jornadas de Usuarios de R

url: /2010/12/29/noticia-de-las-ii-jornadas-de-usuarios-de-r/
categories:
- r
tags:
- r
---

Hace un año, al acabar las I Jornadas de Usuarios de R, [escribí un pequeño resumen](http://analisisydecision.es/noticias-del-congreso-de-usuarios-de-r/) de lo habido en ellas en el blog de mi compañero de penas y oficios Raúl Vaquerizo. Este año, con cierta demora (justificada documentalmente) me dispongo a hacer lo mismo con lo que vivimos hace unos días en las [II Jornadas en Mieres](http://epm.uniovi.es/actividades/-/asset_publisher/0012/content/ii-jornadas-de-usuarios-de-r-en-castellano).

Es obligado en primer lugar agradecer a la Escuela Politécnica de Mieres por haberlas acogido y muy en particular a Belén Prendes, quien desde el primer momento impulsó este proyecto. También hay que agradecer la presencia de quienes, desafiado las dificultades planteadas por la nieve y el plantón laboral de los controladores aéreos, acudieron a la cita.

Creo que vuelve a estar vigente lo que escribí hace un año:


>[...] uno de los principales beneficios que extrajimos de las jornadas fue el de poder establecer contacto real, físico, con gente y grupos a los que ya conocíamos directa o indirectamente.


Este año volvieron a predominar los participantes procedentes del ámbito universitario, aunque contamos también con otros (yo uno de ellos, claro) que venimos del mundo de la empresa. Cabe subrayar que predominaban los ingenieros. Tal vez porque jugaban en casa.

Tras los consuetudinarios saludos, encuentros, reencuentros, charlas de pasillo e introducciones de rigor, dieron propiamente comienzo las jornadas con la primera de las conferencias, _R y RExcel como herramienta en la docencia de la Estadística en Ingeniería_ de Salvador Naya (de la Universidad de La Coruña) que tuvo dos partes bien distintas. En la primera comentó su experiencia en la enseñanza de R en los estudios de estadística dentro de las carreras de ingeniería y, en particular, usando Excel (vía [RExcel](http://en.wikipedia.org/wiki/RExcel)) como interfaz. Faltaría este narrador a su aspiración de relatar de manera veraz y completa lo que entonces ocurrió si omitiese subrayar las encendidas diatribas que entre los más vehementes zelotes del _software_ libre desencadenó la mención a la hoja de cálculo del maligno enemigo.

En la segunda repasó algunos ejemplos muy golosos de estudios aplicados a problemas de ingeniería reales (construcción naval y otros) usando R.

En la segunda sesión, Marco Giannitrapani (al que después de varios correos y una larga conversación telefónica acabé conociendo personalmente) nos describió una plataforma basada en R que tienen implantada en su empresa, Novartis, para la predicción del la evolución de ventas de productos farmacéuticos. De nuevo, la presentación constaba de dos partes diferenciadas: una, la relativa a la interfaz, construida usando el [paquete rpanel](http://cran.r-project.org/web/packages/rpanel) y que permitía a los usuarios de la aplicación interactuar con R sin necesidad de c_onocimientos exóticos_. La segunda, los detalles técnicos sobre cómo realizar ajustes primero y predicciones después de un modo más o menos automático de infinidad de series temporales. Es un tema candente, que puede poner nervioso a muchos estadísticos (por lo de automático) y sobre el que me explayaré en otra ocasión. (Sólo mencionaré de pasada que unos días más tarde, casi 20.000 kms más lejos,  volví a tropezar con este problema (y con los ubícuos productos Hacendado): comí con alguien que había trabajado en la implementación de algo parecido en Mercadona).

Le siguió Pelayo Izquierdo, de la Universidad de Oviedo, y responsable de su centro de estudios estadísticos, es decir, de alguna manera, mi competencia. Nos describió su infraestructura de software para afrontar los estudios que realizan y cómo R, junto con Sweave, resulta fundamental para la creación de, entre otras cosas, la redacción automatizada de series de informes que realizan, etc.

Y la última de las intervenciones de la mañana vuelve a merecer el mismo comentario que realicé el año pasado: de ella sólo puedo hablar maravillas, dado que fue la mía. En ella traté mi solución al problema de la predicción del tráfico (rodado) en Varsovia que mereció el [premio del que ya han oído hablar los lectores de este blog](http://www.datanalytics.com/blog/2010/09/08/datanalytics-segunda-posicion-en-la-competicion-internacional-de-mineria-de-datos/) y del que muy próximamente (y por eso la excuso aquí) tendrán noticia más completa también en estas páginas.

Tras la comida, Carlos Enrique Carleos Artime de la U. de Oviedo nos describió un sistema para generar y corregir automáticamente exámenes aleatorizados montados sobre una plataforma Web usando [CGIwithR](http://cran.r-project.org/web/packages/CGIwithR/index.html).

Miguel Ángel Rodríguez Muiños, un veterano de las jornadas, fue sustituido en el último momento por otro, Xavi de Blas, a causa, por una vez, de una feliz circunstancia: acababa de ser padre. Xavi nos habló de una aplicación que está desarrollando para extraer información y características de saltos (sí, saltos que se hacen con las piernas) grabados en vídeo y procesados con un programa de detección de patrones. Cada salto se convierte en una especie de serie temporal multivariada (que recoge la evolución temporal de algunos indicadores de posición a lo largo del salto) que se analiza con R para detectar propiedades características del mismo (como por ejemplo, si en éste la flexión de las piernas ha llegado o no a ser de 90 grados, cosa, al parecer, de suma importancia).

Finalmente, en la última de las presentaciones, Arnau Mir Torres y Margaret Miró Julià describieron otro sistema, R-QUEST, para generar y corregir automáticamente pruebas de evaluación de conocimiento de R que están utilizando en la Universidad de las Islas Baleares.

A estas presentaciones siguieron dos talleres. El primero, el introductorio, lo impartió Antonio Maurandi, de la Universidad de Murcia, responsable también del que se hizo el año pasado en las I Jornadas. Trató de asuntos que iban desde la instalación de R, la importación de datos de otros programas y la creación de gráficos sencillos hasta ejemplos de simulación estadística y un caso de uso de RCommander. (Tengo que confesar que quien suscribe hizo novillos: se fue al bar con Emilio Torres, de la U. de Oviedo, a beber cerveza y a urdir benéficos planes de cara a la eventual realización de las III Jornadas).

El otro motivo de mi ausencia era que me encargaba yo, después del primero, de segundo de los talleres ---el material puede bajarse de [aquí](/uploads/ii_jornadas_material_tutorial.zip)--- de R que iban a tener lugar en las Jornadas, el que se adjetivó en un primer momento con el exagerado epíteto de avanzado y que traté de concretar como un paseo por tres paquetes relativamente nuevos de R y que parecen estar de moda: `reshape`, `plyr` y `ggplot2`. Como he de tratar estos asuntos con tiempo y detenimiento en estas páginas, sólo añadiré que mi elección se debió al hecho de que estos paquetes resuelven problemas transversales, comunes a usuarios independientemente de su interés particular en R: manipulación de datos y gráficos. Y he de añadir que el resultado fue un tanto catastrófico porque no tuve forma ni de proyectar con mi ordenador en la sala (¡ufa!) ni pudieron los asistentes descargarse los paquetes en cuestión a los ordenadores de la sala a causa de un problema en la conexión a Internet de la escuela. ¡Los problemas del directo!

Con eso, y ya tarde, acabaron los eventos del primer día. El segundo, que amaneció alfombrado de nieve, comenzó con la presentación de Emilio Torres (mi compañero de novillos al que aludo más arriba) que discutió aspectos relacionados con el uso de Emacs y [ESS](http://ess.r-project.org/) para el habitual uso de R así como consideraciones relativas a otras herramientas análogas con sus ventajas y sus desventajas.

Después, Joaquín Orideres Meré, de la Universidad Politécnica de Madrid, nos hizo una presentación del trabajo que está realizando su equipo en el paquete AROMA, una implementación de un tipo de redes neuronales, y de algunas de sus aplicaciones industriales. El hecho de que mencionase que en su hoja de ruta consta el reescribir parte de la interfaz usando clases S4 ameritó la reedición (en pequeño) de una [discusión que ya hubo en la lista de usuarios de R](https://stat.ethz.ch/pipermail/r-help-es/2010-November/001531.html) en su día. ¡Ingenieros!

Xavier de Pedro, viejo conocido de quienes frecuentamos la lista de R y voluntarioso (y poco reconocido, desgraciadamente) _webmaster_ de la comunidad, nos presentó una plataforma para ejecutar R en remoto que sirve de base para dos aplicaciones distintas. La primera está relacionado con la enseñanza (o más bien, evaluación) de los estudiantes usando una [herramienta](http://cochise.bib.ub.es) más o menos automática. El segundo, la creación de una plataforma de colaboración para investigadores de manera que puedan ejecutar código de R en remoto, etc. En sus propias palabras,
Aunque el análisis y visualización de datos con el software R se está volviendo muy popular, es muy frecuente que se busquen _interficies_ gráficas vía web para los usuarios que tienen que interactuar con los programas escritos en R, además de para los propios equipos de desarrollo de aplicaciones.

En la charla, Xavier [describió la plataforma](http://estbioinfo.stat.ub.es/wp-content/uploads/2010/12/RJ-II-Jornadas-R-ES-XavierdePedro.pdf) que han creado usando el [CMS](http://es.wikipedia.org/wiki/Sistema_de_gesti%C3%B3n_de_contenidos) [Tiki](http://tiki.org), incluyendo un módulo que ha creado para la ejecución de scripts de R.

Tras el café y a modo de clausura tuvimos una mesa redonda en la que se discutieron tres asuntos de interés común. El primero, promovido por José Antonio Palazón, de la U. de Murcia, tenía que ver con la conveniencia de crear unas certificaciones para los usuarios de R que les permitiesen acreditar su dominio de la herramienta estableciendo un programa y unas pruebas de nivel homogéneas. Estoy seguro de que volveremos a oír hablar del tema pronto.

El segundo fue continuación del que cerró las I Jornadas: el avanzar hacia la creación de una organización estable que coordine las actividades relacionadas con R en España y, en particular y como paso previo (o paralelo) con la creación de un portal de internet que centralice de alguna manera información relevante para la comunidad, albergue proyectos, permita la coordinación de grupos de interés, etc. Es sabido que han existido a lo largo del 2010 dos grupos de trabajo paralelos desarrollando de manera manifiestamente descoordinada esta labor: [un portal](http://r-es.org/) del que nada se vio luego de su anuncio y, por otra parte, [el desarrollado por Xavier de Pedro](http://r-help-es.ourproject.org), ya disponible, en continua mejora y que busca una casita (servidor) más acogedora (veloz).

El último (y con eso se cerraron las jornadas) fue una discusión sobre su continuidad: ¿dónde y cuándo celebrar las III Jornadas? Propuse (con una motivación estrictamente logística) que se buscase una sede en Madrid para promover una asistencia masiva. El parecer, aunque no unánime, fue del agrado de los más. Decidido pues que al gato se le habría de colgar un cascabel, quedó sólo el hacerlo. Y la noticia de lo que dio de sí esa iniciativa habrá de discutirse (¡y todo apunta que felizmente!) en otra ocasión.

Y con eso y una última comida (esta vez sí hubo fabada; el tiempo, además, invitaba a ella) dimos por concluidas las jornadas.

Una vez más se puso de manifiesto el valor que tiene el reunir a usuarios y entusiastas de R en un ambiente distendido y propicio para el intercambio de ideas. Se descubrieron muchos solapes entre iniciativas distintas y es de esperar que, tal vez fruto de la fructífiera virtud de la pereza, acaben fructificando en colaboraciones duraderas. Lo hay en el desarrollo de esas plataformas de evaluación automatizada de ejercicios, claro, pero también en el mucho más rico asunto del ajuste automático de series temporales con vistas a la predicción.

Y acabo la noticia de estas II Jornadas lamentando que la distancia, lo complicado de las fechas y las dificultades meteorológicas hayan impedido que fuesen más multitudinarias. Esperemos que sí lo sean las terceras.
