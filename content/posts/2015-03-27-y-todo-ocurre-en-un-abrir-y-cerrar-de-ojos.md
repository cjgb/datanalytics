---
author: Carlos J. Gil Bellosta
categories:
- programación
- consultoría
date: 2015-03-27 08:13:33+00:00
draft: false
lastmod: '2025-04-06T19:01:32.205690'
related:
- 2014-04-10-colusion-de-anunciantes-en-perjuicio-de-navegantes.md
- 2010-05-10-c2a1hasta-microsoft.md
- 2010-05-27-google-prediction-api.md
- 2014-02-03-que-nos-jugamos-con-la-neutralidad-en-la-red.md
- 2015-07-24-mis-respuestas-en-una-entrevista-sobre-big-data-periodismo-de-datos-etc.md
tags:
- big data
- internet
- rtb
title: Y todo ocurre en un abrir y cerrar de ojos
url: /2015/03/27/y-todo-ocurre-en-un-abrir-y-cerrar-de-ojos/
---

Abres una aplicación en tu móvil que diseñó un programador búlgaro. Ipso facto aparece un insidioso _banner_ de, p.e., Jazztel. ¿Cuáles son los mecanismos que ponen en contacto al búlgaro con Jazztel? ¿De qué manera recibe aquel una compensación de esta?

Tradicionalmente, el desarrollador habría hablado con, p.e., Google. Le habría dicho: yo voy a generar "espacios" donde tú vas a poder colgar propaganda a cambio de una cantidad (fija o variable). El intermediario, por otra parte, capta anunciantes (Jazztel en nuestro ejemplo), almacena un inventario de ellos y decide cuál de ellos mostrar. Hay teoría aplicable en estos contextos, como la que describe _[Real-Time Bidding Algorithms for Performance-Based Display Ad Allocation](http://research.microsoft.com/en-us/um/people/nikdev/pubs/rtb-perf.pdf)_.

Pero es aún mucho más interesante la ultimísima evolución de este mercado. El desarrollador de hoy en día hablaría con un [SSP](http://en.wikipedia.org/wiki/Supply-side_platform), un intermediario que dispone de espacios para insertar: los que se generen al abrir la _app_ de nuestro desarrollador y la de muchos otros de sus colegas.

Cuando un usuario abre la aplicación, esta avisa al SSP de que hay un nuevo espacio disponible para colocar un _banner_. El SSP no tiene anuncios porque no habla con anunciantes directamente. Se pone en contacto con un [DSP](http://en.wikipedia.org/wiki/Demand-side_platform), una empresa que negocia con anunciantes y les ofrece colgar su propaganda en determinadas condiciones: p.e., tanto por _click_.

¿Y cómo se ponen en contacto SSP y DSP? A través de un mercado, una bolsa en tiempo realísimo en el que cuando un SSP publica un _espacio_, los DSP tienen la opción de pujar por el privilegio de ubicar en él su _banner_.

¿Quiénes son esos SSP (_supply-side platforms_), DSP (_demand-side platforms_) y mecados (_exchanges_)? Aquí tenéis algunos de sus logotipos

[![rtb_ecosystem](/wp-uploads/2015/03/rtb_ecosystem.png#center)
](/wp-uploads/2015/03/rtb_ecosystem.png#center)

extraídos de [esta página](http://www.businessinsider.com.au/mobile-real-time-bidding-ad-ecosystem-2013-5).

En resumen, la aplicación del desarrollador, cuando la abre un usuario, avisa al SSP de que existe la opción de insertar un anuncio. El SSP comunica a un mercado esa oportunidad; además, la _enriquece_ con información relevante: tipo de dispositivo, sistema operativo, perfil demográfico del usuario, país, etc. El mercado hace saber a los DSP esa oportunidad y estos estiman la probabilidad (usando la información proporcionada por el SSP) de que el usuario no ignore sus anuncios. En función de ella, lanzan una oferta y la ganadora aparece mágicamente en la pantalla del usuario.

Y todo ocurre en un abrir y cerrar de ojos: ¿cien milisegundos en total?