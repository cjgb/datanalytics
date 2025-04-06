---
author: Carlos J. Gil Bellosta
categories:
- r
date: 2011-06-21 07:17:10+00:00
draft: false
lastmod: '2025-04-06T18:54:08.349617'
related:
- 2011-06-30-desarrollo-de-paquetes-con-r-ii-primeros-pasos.md
- 2010-02-27-creando-paquetes-con-r-r-forge.md
- 2019-01-31-hay-demasiados-paquetes-en-r.md
- 2010-11-01-una-propuesta-de-guia-de-estilo-de-r.md
- 2011-03-08-c2bfcomo-mejorar-tu-estilo-de-programacion-en-r.md
tags:
- r
- paquetes
title: 'Desarrollo de paquetes con R (I): ¿para qué?'
url: /2011/06/21/desarrollo-de-paquetes-con-r-i-para-que/
---

Por popular demanda, voy a comenzar una serie de entradas sobre desarrollo de paquetes con R. Mi idea consiste en establecer un diálogo con mis lectores que me permita pulirlas para acabar escribiendo un documento que pueda resultar útil a los usuarios de R.

En el primero me voy a limitar a explicar para qué puede resultar útil desarrollar paquetes. Lo voy a hacer desde mi experiencia de desarrollador y desde el particular punto de vista de mis hábitos y manías personales. Y no sería justo proseguir sin anunciar (o confesar) que una de las más pugnaces es la de mi aversión al caos.

Paquetizar funciones impone orden en el caos. El caos lo genera la distancia: existe distancia entre los miembros de un equipo de desarrolladores; existe distancia entre mi yo que desarrolló código hace meses y mi yo que lo quiere utilizar hoy; también entre la documentación y su código. Un paquete vincula código y documentación.

Además, crear paquetes obliga a repensar las interfaces. El programar no para mí ahora sino para alguien —tal vez otro—, más tarde, tal vez en otro sitio obliga a pensar muy bien qué funciones merece la pena desarrollar, cómo han de llamarse, qué argumentos deberían recibir, cuáles son sus salidas más adecuadas.

No todos los paquetes de R están pensados para ser subidos a CRAN. Paquetizar funciones permite a las empresas distribuirlas entre sus clientes: es tan sencillo como práctico crear un _CRAN privado._

Muchos usuarios desarrollan sus propias funciones ad hoc y les puede resultar conveniente organizarlas mediante paquetes, aunque sea para su propio uso personal. O pueden crearse alrededor del programa de una determinada asignatura. De hecho, hay paquetes en CRAN que nacieron como colecciones misceláneas de funciones de uso más o menos personal y cuyos creadores han acabado compartiendo con la comunidad: Christian W. Hoffmann, Dave Armstrong, Erich Neuwirth, Gregory R. Warnes y, muy especialmente, Frank E. Harrell lo han hecho: buscad _misc_ en [CRAN](http://cran.r-project.org/web/packages/) y lo veréis.

A todos los que os enfrentéis a una tesis, a un nuevo proyecto en vuestra empresa, un curso, etc. en el que vayáis a usar R os recomendaría:



* repensar qué funciones forman el núcleo de vuestra aplicación
* crear un paquete con ellas y, llegado el caso,
* pensar si vale la pena hacerlas públicas.