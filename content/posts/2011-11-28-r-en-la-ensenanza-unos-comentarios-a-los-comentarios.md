---
author: Carlos J. Gil Bellosta
categories:
- estadística
- r
date: 2011-11-28 07:07:46+00:00
draft: false
lastmod: '2025-04-06T19:01:03.223071'
related:
- 2018-04-09-la-intrahistoria-de-mi-libro-de-r.md
- 2015-01-28-la-profesionalizacion-de-r.md
- 2014-10-27-noticia-de-las-vi-jornadas-de-usuarios-de-r.md
- 2021-07-14-mi-apuesta-para-el-larguisimo-plazo-julia.md
- 2010-02-26-febrero.md
tags:
- estadística
- r
- sas
- enseñanza
- universidad
title: 'R en la enseñanza: unos comentarios a los comentarios'
url: /2011/11/28/r-en-la-ensenanza-unos-comentarios-a-los-comentarios/
---

Iba a responder a los comentarios de [mi entrada sobre las Jornadas de R](https://datanalytics.com/2011/11/21/iii-jornadas-de-usuarios-de-r-algunas-reflexiones/) y, muy en particular a los de Fernando Fernández, uno de los más fieles lectores de esta bitácora, y me he extendido tanto que he acabado convirtiéndola en una nueva. Pido excusas por haber tal vez abusado de mis prerrogativas para auparme de esta manera.

Tanto a él como a otros les chirrió que escribiese _comenzamos una nueva época que en el plazo de tres o cuatro años nos va a conducir, con casi total seguridad, a un escenario en el que [...] R se use de manera casi exclusiva en la enseñanza de la estadística en los niveles universitarios_.

Conste en primer lugar que es una frase cosecha mía y no sé cuántos, si alguno, estarán de acuerdo conmigo. Y se trata de una mezcla de visión y de deseo. Es cierto que llamadas a la uniformidad —y a la _inmersión lingüística_— pueden provocar sentimientos de rechazo. También es cierto que se trata de una sola frase que compendia muy sucintamente horas de reflexiones, conversaciones y experiencias y que me deja, por lo tanto, expuesto a malinterpretaciones extremas. Yo mismo los sentí al escribir la frase y me obligó a releerla. ¿Me atrevería a dejarla tal cual?

Me concedí finalmente la venia para no cambiarle una coma obligándome en contrapartida a fundamentarla debidamente. Y esta es la ocasión propicia para hacerlo.

Fernando dice que _considera importante un esfuerzo por trabajar al menos con dos herramientas distintas_ y estoy de acuerdo con él. Creo que, de hecho, uno de los objetivos estratégicos (transcenciendo los contenidos de cada una de las asignaturas de la carrera de estadística) debería ser **que los alumnos aprendiesen a programar**.

He estudiado estadística en dos universidades. En la una, la estadística era esencialmente teórica y jamás usamos ordenador para ningún fin. En la otra sólo había SAS. Hace mucho que dejé la universidad y temo equivocarme. Pero sí que conozco a muchos recién licenciados, he tenido ocasión de haber hablado con algunos profesores, etc. Y me da la impresión de que el recién licenciado medio no sabe programar. En el mejor de los casos, lo han expuesto a R en dos asignaturas, a Gretl en la de series temporales, a WinBUGS si hizo un máster especializado, a SPSS en quién sabe qué y, a lo más, hizo un curso de SAS de 20 horas. Pero le pides, aquí y ahora, un gráfico y abre Excel; y le pides una regresión y pulsa la tecla del hiperespacio (la del juego _Asteroids_) para evadirse a un dimensión remota.

No hablo desde una perspectiva, si se me permite, mini-max —un mínimo entre las exigencias máximas— sino max-mini: a la vista de las circunstancias actuales, presento una perspectiva más deseable.

Si se me concede que un objetivo de mínimos es lograr que todo recién licenciado en estadística (y áreas afines) domine un, al menos un, lenguaje de programación, —e insisto, sin perjuicio de que algunos sean también expertos en otros— la siguiente pregunta que se plantea es ¿cuál?

Y creo que ahora, en este año, aunque las cosas pudieran cambiar dentro de cinco o diez más, debiera ser R. Por muchos motivos:



* Porque R puede instalarse en _cualquier_ plataforma, usarse en cualquier momento, para cualquier fin y gratuitamente: se es estadístico 24x7, no 8x5.
* Porque expone a los estudiantes a herramientas y métodos de primera línea de investigación.
* Porque se usa para resolver problemas reales.
* Porque es un lenguaje (relativamente) moderno: está orientado a objetos, contiene aspectos funcionales, etc. que facilitan el aprendizaje de otros lenguajes tales como Python, Java, etc.
* Porque —en contraposición a herramientas propietarias— no obliga a universidades (muchas de ellas públicas) a hacer el trabajo _sucio_ de formación por cuenta de unos señores que tienen un negocio de venta de _software_.
* Porque introduce a los estudiantes en el mundo del _software_ libre y les da la oportunidad de conocer un modo muy valioso de hacer cosas —ciencia y software, entre otras— y divulgar conocimiento.
* Porque su uso desincentiva la piratería de _software_.

Y, seguro, me dejo muchos otros.

Si se me pregunta por alternativas y por SAS en concreto, resulta que:

* SAS no se usa apenas en estadística: basta con revisar la [agenda del último SAS Forum España](http://www.sas.com/reg/offer/es/sfe2011?page=agenda) para darse cuenta de que la empresa está en otra cosa.
* Gran parte de los programadores en SAS no han llamado jamás a PROC MIXED, PROC PHREG, etc. Son puros trasladadores de datos. Y yo doy fe: he pagado la hipoteca de un apartamento traslandando datos de aquí para allá con SAS.
* SAS no enseña nada que valga la pena ser aprendido hoy en día en cuanto a técnicas de programación: pudo haber resultado innovador en los años setenta; hoy ya no: es un callejón sin salida que crea más vicios que abre puertas a otros lenguajes.


Quiero acabar esta entrada bastante larga analizando la transcendencia de esa descripción de R que es la de _lengua vehicular_ —en inglés suele utilizarse el término _lingua franca_— de la estadística y que tiene que ver con el hecho de que el lenguaje da forma al pensamiento.

Y la estadística clásica —que constitutye el grueso de cuanto se enseña en la universidad— está lastrada por los condicionantes de quienes, sin la ayuda de los recursos computacionales existentes hoy en día, la desarrollaron hace un siglo. Y que el ámbito de los problemas a los que se aplica está igualmente restringido.

Hoy, en el siglo XXI, existen problemas y técnicas mucho más diversos que la nueva lengua vehicular —que puede ser la puerta de entrada a métodos basados en remuestreos, a la simulación, a la predicción, etc.— puede ayudar a poner encima de la mesa para renovar de arriba a abajo la disciplina.