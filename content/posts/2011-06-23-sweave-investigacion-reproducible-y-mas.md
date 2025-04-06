---
author: Carlos J. Gil Bellosta
categories:
- consultoría
- r
date: 2011-06-23 07:08:45+00:00
draft: false
lastmod: '2025-04-06T19:07:25.659956'
related:
- 2010-12-29-noticia-de-las-ii-jornadas-de-usuarios-de-r.md
- 2014-10-27-noticia-de-las-vi-jornadas-de-usuarios-de-r.md
- 2014-10-16-aprende-r-con-swirl.md
- 2014-03-12-veinte-paquetes-de-r-para-cientificos-de-datos.md
- 2010-02-27-creando-paquetes-con-r-r-forge.md
tags:
- consultoría
- r
- paquetes
- sweave
- reproducibilidad
title: Sweave, investigación reproducible... y más
url: /2011/06/23/sweave-investigacion-reproducible-y-mas/
---

Me consta que algunos de mis lectores están al tanto de eso que llaman _investigación reproducible_. De acuerdo con la [Wikipedia](http://en.wikipedia.org/wiki/Reproducibility#Reproducible_research) (en inglés),



>[E]l término investigación reproducible se atribuye a Jon Claerbout, de la Universidad de Stanford  y se refiere a la idea de que el producto final de la investigación no debería circunscribirse a un  artículo sino comprender también el entorno computacional completo usado en la generación los resultados que contiene, tales como el código, los datos, etc. para que puedan ser reproducidos y se pueda avanzar a partir de ellos.



En R se ha creado una infraestructura, [Sweave](http://www.stat.uni-muenchen.de/~leisch/Sweave/), que permite integrarlo con LaTeX (y que conste que esto no es exclusivo de R: también existe en Matlab y otros lenguajes). Permite escribir documentos en los que se intercala el código de R necesario para recrear tablas, gráficos y resultados.

Quien quiera echar un vistazo a sus posibilidades, bien puede comenzar por esta [introducción a Sweave de Mario Pineda](http://pinedakrch.files.wordpress.com/2011/01/the_joy_of_sweave_v1.pdf) (aunque también vale la pena estar al tanto de los[ problemas que encontrará quien use Sweave](http://pineda-krch.com/2010/12/01/top-10-things-that-suck-about-sweave/), recopiladas por el mismo autor).

Pero estoy seguro de que a muchos de mis lectores no les interesará las ventajas que aporta Sweave a investigadores como de la posibilidad que ofrece para solventar uno de las labores más pesadas que existen en muchos entornos de trabajo: _ese_ informe tedioso que hay que tener preparado todas las mañanas a las once. Quienes acudan a las III Jornadas de Usuarios de R seguro que aprenderán de [Gregorio Serrano](http://www.grserrano.es/) cómo hacer para [aumentar la productividad de su trabajo utilizando Sweave](http://usar.org.es/programa.php).