---
author: Carlos J. Gil Bellosta
categories:
- consultoría
- estadística
date: 2011-08-26 07:35:14+00:00
draft: false
lastmod: '2025-04-06T18:44:29.058375'
related:
- 2011-07-11-clustering-i-una-pesadilla-que-fue-real.md
- 2011-08-03-clustering-iii-sobresimplificacion.md
- 2011-07-19-clustering-ii-c2bfes-replicable.md
- 2014-11-21-mi-querido-colega-de-iberia.md
- 2012-01-12-localidad-globalidad-y-maldicion-de-la-dimensionalidad.md
tags:
- clústering
- consultoría
- estadística
title: 'Clústering (IV): una digresión real como la vida misma'
url: /2011/08/26/clustering-iv-una-digresion-real-como-la-vida-misma/
---

Entré a trabajar en una consultora hace un tiempo ?no diré si mucho o poco? y uno de mis primeros encargos fue el de supervisar el desarrollo e implementación de unos modelos que habían creado unos compañeros. Les eché un vistazo y me sorprendió que sin mayor miramiento habían eliminado aquellas observaciones cuya variable objetivo tomaba el 4% de los valores más altos y el 4% de los más pequeños.

Pregunté al responsable de la cosa, un recién licenciado con ínfulas, a qué se debía el filtro. No me dio razón alguna: simplemente me remitió a un documento _oficial_ de la consultora ?con sus colores y logotipos? que era una especie de guía sobre cómo construir modelos de minería de datos. Le eché un vistazo y me sonó familiar. Tanto más familiar cuanto más lo leía. Demasiado familiar. ¡El documento lo había escrito yo años antes (para otra consultora distinta, claro)! Tenía muchos retoques y añadidos, pero secciones enteras seguían siendo tal cual las habría dejado yo escritas.

Obviamente, lo que el documento decía no era lo que el primíparo había interpretado. Y pasaron cosas poco amenas que no son el objeto de la discusión de hoy: el inciso no tiene otra intención que, si no ya justificar, al menos, excusar el uso que hago de información de una presentación comercial de dicha consultora sobre métodos de análisis _clúster_. No la cito ni pido permiso porque, conocidos los antecedentes (y el de la anécdota no es ni el único ni, os lo prometo, la más hilarante), ¡a saber quién es el autor original!

(Eso sin perjuicio de que si me contacta alguien que pueda justificarme que son suyos los materiales que reproduzco, se los atribuya convenientemente).

Mi entrada de hoy es un inciso que trataré que sea ilustrativo, acerca del uso _real_ de las técnicas de _clústering_. Y aunque proceda de una presentación comercial, me consta que proviene de un proyecto que probablemente costó más que mi apartamento. Quiero que aterrice la discusión que he planteado acerca de los métodos de _clústering_ para que nadie piense que estoy sobreteorizando.

Dice la consultora en su presentación (y no corrijo la redacción aunque duela a la vista) que


>[l]a implantación de una Segmentación Corporativa en base a Valor y Ciclo de Vida permitió a esta aseguradora multiramo definir una diferenciada estrategia para cada segmento


Y acompaña el anterior párrafo del siguiente gráfico:


[![](/wp-uploads/2011/08/segmentacion_corporativa.png#center)
](/wp-uploads/2011/08/segmentacion_corporativa.png#center)


En él pueden los lectores ver los famosos _clústers_: el de los solteros, los apóstoles, los _seniors_, los multiproducto. Cada globo, entiendo, tiene un tamaño proporcional (¿en radio? ¿en volumen?) al tamaño del _clúster_ que representa. Los ejes son la edad (horizontal) y el valor (vertical).

Comencemos con un experimento mental: ¿qué forma tendría el gráfico de dispersión de los clientes individuales sobre esos ejes? ¿Estarían concentrados alrededor de los globos verdes? ¿Es razonable esperar que un único punto represente a todos los _seniors_ (jubilados)? ¿Entre los 30 y los 40 sólo existen _familias jóvenes_? ¿Todos los clientes en ese rango de edad tienen el mismo valor? ¿Sólo hay diferencias por valor en clientes entre 40 y 55 años? ¿Cuántos clientes no habrá en las zonas blancas del gráfico? ¿Y ninguno tiene un valor negativo?

Critico un ejemplo, sí, pero puede extenderse a muchas otras circunstancias análogas: píntense siete _clústers_ sobre dos ejes y seguro que podrán plantearse preguntas similares: son inherentes a la sobresimplificación.

Aunque sea ya un asunto extraestadístico, cabe reseñar cómo una segmentación sobresimplificada y pueril sirve a nuestros consultores para diseñar una mal llamada estrategia ?consúltese [este documento](http://www.mckinseyquarterly.com/The_perils_of_bad_strategy_2826) para distinguir estrategia de lista de cosas que uno desearía que ocurriesen? igualmente pueril: véanse las flechas que, menos mal, al menos, apuntan en la dirección de la edad creciente! Una presunta familia joven puede progresar (al cabo de 10 años) e incorporarse a cualquiera de los tres clústers siguientes: multiproducto, familia madura o bajo precio. Segmentos que se caracterizan (según la presentación) en función de si los clientes contratan dos, uno o ningún producto adicional. ¡La estrategia consiste en tratar de vender productos adicionales a los miembros del _clúster_!

Y digo yo: ¿en qué más podía consistir?