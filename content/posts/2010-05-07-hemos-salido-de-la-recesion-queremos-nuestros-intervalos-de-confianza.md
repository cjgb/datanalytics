---
author: Carlos J. Gil Bellosta
categories:
- estadística
- finanzas
date: 2010-05-07 19:39:38+00:00
draft: false
lastmod: '2025-04-06T19:04:45.142057'
related:
- 2010-03-21-la-varianza-y-cifras-macroeconomicas.md
- 2011-02-25-1605.md
- 2012-06-22-las-auditorias-bancaria-de-ayer.md
- 2015-02-23-mas-sobre-el-error-de-medida.md
- 2012-06-05-medias-y-medianas-en-el-banco-de-espana.md
tags:
- estadística
- finanzas
title: ¿Hemos salido de la recesión? ¡Queremos nuestros intervalos de confianza!
url: /2010/05/07/hemos-salido-de-la-recesion-queremos-nuestros-intervalos-de-confianza/
---

Ha aparecido publicado recientemente en [prensa](http://www.elpais.com/articulo/economia/Espana/lograr/dejar/recesion/trimestres/despues/elpepueco/20100507elpepueco_4/Tes) que, según el Banco de España, hemos salido de la recesión (por si acaso: _nosotros_ significa los españoles): en su [Boletín Económico](http://www.bde.es/webbde/SES/Secciones/Publicaciones/InformesBoletinesRevistas/BoletinEconomico/10/Abr/Fich/be1004.pdf) del mes de abril, el banco emisor dice textualmente que:

>Las estimaciones realizadas a partir de la información coyuntural disponible apuntan a que, en el primer trimestre, el PIB pasó a crecer un 0,1%, en términos de su tasa intertrimestral, tras seis meses consecutivos de bajadas.


Las consideraciones que es necesario hacer al respecto son varias aunque desigualmente excéntricas respecto a lo que constituye el meollo temático de esta bitácora. La primera es que, ahítos como estamos de noticias catastróficas acerca de la marcha de la economía, necesitábamos otear en el horizonte una paloma con una rama de olivo en el pico. Aunque luego, la verdad, [el que no se consuela es porque no quiere](http://www.elmundotoday.com/2009/10/se-acerca-el-viernes/).

La segunda es de índole más legalista: la tasa de crecimiento oficial del PIB la publica el INE (no el Banco de España) cada trimestre 45 días después del fin de este. Es decir, para el 15 de mayo. Además, con lo que nos iluminará el estadístico instituto en tal fecha no será sino lo que se conoce como una _estimación preliminar_, previa a la _primera estimación_ (que aún tardará un mes más en ser publicada), a la _actualización trimestral_ (estaremos en la playa) y a la cuasidefinitiva _actualización anual_, que tendrá que esperar al invierno.

Esta estimación preliminar, al igual que la del BdE, está basada en_ información coyuntural disponible_, mucha de la cual está basada en muestreos, extrapolaciones y encuestas. De hecho, el BdE, interesado en la fiabilidad de estas primeras estimaciones (y en parte picado de que en EE.UU. éstas están disponibles 15 días antes que en Europa), ha realizado un [estudio comparativo entre las distintas revisiones](http://www.bde.es/webbde/SES/Secciones/Publicaciones/PublicacionesBCE/BoletinMensualBCE/09/Fic/bm0904-4.pdf). (Estudio, todo hay que decirlo, que parece realizado por el hijo bachiller de algún funcionario de la solemne institución y en cuya lectura casi pierdo una dioptría tratando de leer de los gráficos las varianzas de las cosas dada su falta de tablas). Aunque parece no existir sesgo importante en este tipo de indicadores adelantados y sus correcciones posteriores, su desviación típica es del orden de una décima.

Es decir, si se construyesen intervalos de confianza al uso (¿cuándo van a comenzar a publicarse, aunque sea en letra chiquita?), éstos tendrían una pata en el semieje proceloso. En fin, que la noticia debiera haberse titulado algo así como:

>No estamos seguros de si hemos salido de la recesión o no

O, alternativamente,

>¿Hemos salido de la recesión? NPI

De hecho, lo que nos dice el BdE a modo de Yahvé omnisciente de todo menos de las propiedades elementales de los estimadores estadísticos, es que si el trimestre pasado produjimos 1.000, en este hemos producido 1.001. No 998; no 1.002; por supuesto, no 995 sino exacta y redondamente 1.001. ¡Magnífica la precisión del BdE! Si uno de cada cuatro años (1000 días laborables) uno falta al trabajo, ahí está el BdE con la libreta tomando nota; si alguien roba uno de cada 1.000 cedés del FNAC, el BdE se da cuenta; si uno mira a las musarañas una hora al cabo de 5 meses (1.000 horas de trabajo), no lo sabrá tu jefe, pero sí que corregirá el BdE sus estadísticas a la baja para poder ilustrarnos en su informe trimestral.

Pero aún hay más (más motivos para la incertidumbre, vamos). El PIB se puede calcular bajo tres perspectivas distintas:


* La del **valor agregado** de todos los negocios (agrícolas, industriales, servicios), es decir, sumando el valor de lo producido por todos ellos menos el coste de sus _inputs_.
* La del **gasto de los agentes económicos**, que es la suma del consumo, la inversión y las exportaciones menos el valor de las importaciones.
* La del **ingreso de los agentes económicos**, que es la suma de salarios, rentas y beneficios empresariales.

Y aunque en teoría dichos agregados tienen que ofrecer un mismo resultado, históricamente, la discrepancia entre ellas es de un 1 o 2%. Incluso tras las revisiones posteriores, es asumible suponer que la desviación estándar de la medida del PIB supera el 1%.

¿Qué _significatividad_ tiene, pues, ese 0,1%? Ya digo: el que no se consuela...
