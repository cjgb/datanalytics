---
author: Carlos J. Gil Bellosta
date: 2015-01-28 07:13:08+00:00
draft: false
title: La profesionalización de R

url: /2015/01/28/la-profesionalizacion-de-r/
categories:
- r
tags:
- r
- consultoría
---

Tenía en mente escribir estas líneas desde hace un tiempo. La reciente noticia de la [adquisición de Revolution Analytics por parte de Microsoft](http://blog.revolutionanalytics.com/2015/01/revolution-acquired.html) la ha adelantado, como mucho, unos pocos días.

S, el lenguaje del que R es una implementación libre, vivió su ciclo propietario completo: nació en los laboratorios Bell, creció con Insightful, se reprodujo (R fue su vástago) y creo que ha muerto sin pena ni gloria en manos de Tibco. Como casi cualquier otro producto similar.

R nació y creció libre. Así siguió durante su época romántica. Pero quisimos que creciese, que se enseñase, que se utilizase, que trascenciese esas covachuelas friquis en que tecleábamos nuestros `lapplys`. Desencadenamos la consecuente del viejo adagio de la dialéctica: un cambio cuantitativo (a partir de un determinado umbral) alumbra un cambio cualitativo. Supongo que algunas beatonas del _software _libre cacarearán escandalizadas. Pero otros estamos curados de sustos.

R no es de nadie (como no lo son Linux o MySQL) pero huele a dinero. Eso siempre atrae a gente muy talentosa en el arte de arrimarlo a su cartera. Lo cual es posible que ponga también a cacarear a otra suerte de beatorras. Pero es un fenómeno natural que a más de uno, además, nos ha beneficiado pecunariamente. Hace años les decíamos: usad R, que es más productivo. Y nos decían que no, que éramos friquis. Ahora nos pagan por enseñárselo, por instalárselo, por mantenérselo. ¿Qué vamos a hacer? Pero los sobresueldos circunstanciales de algunos bucaneros como quien suscribe son golondrinas que no hacen verano: extendemos sin transformar.

La verdadera profesionalización de R, la que en ocasiones me desasosiega, viene de grupos —empresas, fundamentalmente— que tienen capacidad transformadora, que tienen como misión explícita la creación de ecosistemas semiabiertos, semicontrolados (por ellos), que ponen a R en peligro de babelización.

_Los de la cultura_ dicen (sin demostración) que eso de que haya lenguas mutuamente incomprensibles a cascoporro es enriquecedor. Pero yo encuentro eso de que haya dialectos particularísimos de, por ejemplo, Linux no enteramente deseable. Yo ya no sé si uso Linux o Ubuntu. Los problemas de RedHat cada día me son más ajenos. Así las cosas, ¿llegará un día en que no sepa si uso R, RevolutionR o RStudioR?

Precisamente, Revolution y RStudio son las dos empresas que más que productos _con_ R —de esas hay cientos— están creando (sub) ecosistemas completos. RStudio, aparte de su conocido IDE, está detrás de, por ejemplo, Shiny, que ha revolucionado la manera en que se utiliza R para ciertos fines. Pero también de todos los paquetes desarrollados o inspirados por Hadley Wickham, que han cambiado la forma de nuestro código. Eso ha generado algún tipo de resistencia.

No obstante, en el ecosistema de RStudio me siento más o menos cómodo: instalo mis RStudio Server en máquinas Ubuntu, uso e invito a usar Shiny, utilizo `ggplot2`, `plyr`, `reshape2` y no tengo problema alguno en combinarlos con `data.table` (que prefiero a `dplyr`). Pero en los últimos desarrollos de RStudio advierto con una mezcla de expectación y desasosiego un interés cada vez mayor por proporcionar herramientas con un manifiesto tufillo _corporativo_, que coexistan y cooperen eficazmente con bases de datos relacionales, etc. La sintaxis de `dplyr` y sus extensiones para interactuar con tablas externas son prueba de ello. Aun así, el código está abierto —salvo algunos extras _freemium_— y se nota que sus productos están construidos en y desarrollados para plataformas libres.

La estrategia de RStudio es, como dicen, _bottom-up_. El espabiladillo de la empresa comienza con `ggplot2`, construye un piloto con `Shiny` y en pocas semanas comienzan a llenarse los monitores de las consabidas paletas de colores, a descargarse los `dplyrs` de los respositorios de la nube y todos, poco a poco, haciendo sus pinitos con la ayuda de StackOverflow.

El ecosistema construido por Revolution han sido desde el principio y sin ambages, corporativo. Si no han construido un clon de SAS ha sido porque no les ha dado tiempo: esa era manifiestamente su hoja de ruta. Es, prácticamente, el ecosistema más propietario que podría haberse construido sobre una base GPL, una especie de RedHat en el mundo de R.

En nota perifrástica añadiré que la oferta de Revolution estaba coja sin un RStudio propio. ¿Podían haber aprovechado ese producto de otros? Tal vez. Pero las empresas adoran controlar absolutamente sus ecosistemas. No es por otro motivo que se han decantado por los _notebooks_ de iPython como plataforma para construir sus [R Notebooks](http://blog.revolutionanalytics.com/2015/01/interactive-r-notebooks-on-powerful-cloud-hardware.html).

La estrategia de Revolution es, al contrario que la de RStudio, _top-down_: de los de las corbatas, para abajo; con pruebas de concepto, planes de migración, soporte tradicional, planificaciones, reuniones con _sistemas_ y consultoría a tutiplén.

Ahora Revolution es parte de Microsoft. No creo que lo use —¿Azure? no, gracias— si no me obligan. Pero ahora podemos decir claramente que R se ha hecho mayor de edad.
