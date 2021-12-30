---
author: Carlos J. Gil Bellosta
date: 2012-03-07 07:51:04+00:00
draft: false
title: 'Esperanzador no: varianzador'

url: /2012/03/07/esperanzador-no-varianzador/
categories:
- estadística
- números
- r
tags:
- estadística
- estadística pública
- ine
- r
---

Que conste que soy un partidario de los adjetivos. Supongo que por sentimentalismo. Me caen simpáticos excepto

* cuando se abusa de ellos y se dice, por ejemplo, analítica en lugar de análisis o normativa en lugar de norma o
* los usan estadísticos en horario laboral.

Y si trabajan en el INE, aún más: se les paga por estadísticos, no por guionistas de opereta.

Viene esto al siguiente párrafo (con mi subrayado):

>En el año 2010 murieron a manos de sus parejas o exparejas 73 mujeres, que ejercieron sobre ellas violencia de género. Esta cifra, tras el _esperanzador_ descenso experimentado en el año 2009 (55 mujeres muertas) alcanza el nivel de años anteriores, 76 mujeres en 2008 y 71 mujeres en 2007.

Que puede consultarse en la página dedicada a _[Víctimas mortales por violencia de género](http://www.ine.es/ss/Satellite?L=es_ES&c=INESeccion_C&cid=1259926144037&p=1254735110672&pagename=ProductosYServicios%2FPYSLayout&param3=1259924822888)_ del INE. Por si cambiase el enlace, se accede a dicha página navegando a la sección _Delito y Violencia_ de la publicación gratuita _Hombres y mujeres en España_. La serie temporal que lo acompaña es:

[![](/wp-uploads/2012/03/victimas_violencia_genero.png#center)
](/wp-uploads/2012/03/victimas_violencia_genero.png#center)

Y los datos correspondientes, `dat <- c(63, 50, 54, 71, 72, 57, 68, 71, 76, 55, 73)`.

Hay que notar que algunos de estos números corresponden a hombres asesinados por sus parejas (mujeres), tal y como indica el pie del gráfico en el INE, aunque el comentario que lo acompaña y que reproduzco parece ignorar (tal vez excusablemente) este pequeño matiz.

Hay que advertir también que sólo el 0.029% de las mueres fallecidas en el 2009, 55, lo fueron por esta causa, mientras que por, por ejemplo, complicaciones de la atención médica y quirúrgica murieron 241; por gripe, 141; por tuberculosis, 143; por SIDA, 226; por caídas accidentales, 892; por suicidio, 763 y por muerte súbita infantil, 33. Lo cual lleva a uno a preguntarse por las causas del desigual impacto de cierto tipo de noticias en los medios. Pero esa es otra cuestión.

Habida cuenta de lo infrecuente del fenómeno, es decir, el asesinato de una mujer por parte de su pareja, y de la posible independencia entre este tipo de sucesos, cabe pensar que el número anual de casos sigue una [ley de Poisson](http://es.wikipedia.org/wiki/Distribuci%C3%B3n_de_Poisson). De ser así, su parámetro (estimado por máxima verosimilitud) sería `mean(dat)`, es decir, 64.54. Dado que el tamaño de la muestra es tan pequeño, no se me ocurre ningún procedimiento para evaluar la bondad del ajuste. No obstante,

{{< highlight R "linenos=true" >}}
range(dat )
# 50 76
fivenum(replicate(1000, max(rpois(length(dat), mean(dat ) ) ) ) )
# 64  74  77  80 100
fivenum(replicate(1000, min(rpois(length(dat), mean(dat) ) ) ) )
# 38 50 52 55 64
{{< / highlight >}}

Es decir, bajo el modelo propuesto, la mediana del número máximo y mínimo anual de este tipo de asesinatos coincidiría con los observados. No sólo es esto evidencia —heterodoxa y discutible— a favor del modelo sino, también, de cómo el adjetivo esperanzador que usa el INE no tiene tanto que ver con la esperanza (otro de los nombres de la media) sino con la variación.

La variación en las cifras entraría, por tanto, dentro de lo normal —¿de lo Poisson?— y ni habría que entregar medallas en el 2009 ni quitárselas en el 2010 a los probos y sacrificados funcionarios encargados de luchar contra esta tan nimia como antiestética lacra social.
