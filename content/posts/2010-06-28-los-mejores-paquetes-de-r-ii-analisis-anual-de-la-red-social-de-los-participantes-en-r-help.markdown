---
author: Carlos J. Gil Bellosta
date: 2010-06-28 02:22:59+00:00
draft: false
title: 'Los "mejores" paquetes de R (II): análisis anual de la red social de los participantes
  en r-help'

url: /2010/06/28/los-mejores-paquetes-de-r-ii-analisis-anual-de-la-red-social-de-los-participantes-en-r-help/
categories:
- r
tags:
- r
- redes sociales
---

Hace un tiempo comencé una serie de entradas, que serán finalmente tres, sobre [los "mejores" paquetes de R](http://www.datanalytics.com/blog/2010/04/18/los-mejores-paquetes-de-r-i-la-red-social-de-los-participantes-en-r-help). Esta va a ser la segunda entrega. Siento haber tardado tanto en realizarla: quienes me conocen saben que ocioso no he permanecido. De mis actividades de este periodo daré cumplida cuenta en entradas subsiguientes.

Tengo que añadir también como preámbulo que ha sido una conversación sobre análisis de redes sociales con un ex-compañero muy ducho en apropiarse de contraseñas ajenas la que me ha empujado finalmente a ahondar este estudio que tenía, junto a tantos, postergado en una esquina de mi disco duro.

En la primera entrada hice un ránking de los participantes más activos en la lista de correo [r-help](https://stat.ethz.ch/mailman/listinfo/r-help) mediante técnicas análogas a las que usa Google para asignar pesos —o _pageranks_— a páginas. En ésta voy a analizar la evolución de estos pesos año a año.

En primer lugar, ahí va el número de personas que han respondido correos en la la lista en cada año (nótese que el 2010 está truncado en abril):

[![](/wp-uploads/2010/06/numero_respondedores_por_anno.png)
](/wp-uploads/2010/06/numero_respondedores_por_anno.png)

Luego, una vez calculados los pesos de cada una de ellas, muestro el podio en cada uno de los años:

<table >
<tr >
<td >

año

</td>
<td >

1

</td>
<td >

2

</td>
<td >

3

</td></tr>
<tr >
<td >1997
</td>
<td >wvenable
</td>
<td >ihaka
</td>
<td >thomas
</td></tr>
<tr >
<td >1998
</td>
<td >p.dalgaard
</td>
<td >wsimpson
</td>
<td >bates
</td></tr>
<tr >
<td >1999
</td>
<td >p.dalgaard
</td>
<td >ripley
</td>
<td >maechler
</td></tr>
<tr >
<td >2000
</td>
<td >ripley
</td>
<td >p.dalgaard
</td>
<td >gb
</td></tr>
<tr >
<td >2001
</td>
<td >ripley
</td>
<td >p.dalgaard
</td>
<td >alobo
</td></tr>
<tr >
<td >2002
</td>
<td >ripley
</td>
<td >p.dalgaard
</td>
<td >tlumley
</td></tr>
<tr >
<td >2003
</td>
<td >ripley
</td>
<td >p.dalgaard
</td>
<td >spencer.graves
</td></tr>
<tr >
<td >2004
</td>
<td >p.dalgaard
</td>
<td >ripley
</td>
<td >ggrothendieck
</td></tr>
<tr >
<td >2005
</td>
<td >ripley
</td>
<td >p.dalgaard
</td>
<td >ggrothendieck
</td></tr>
<tr >
<td >2006
</td>
<td >ggrothendieck
</td>
<td >ripley
</td>
<td >murdoch
</td></tr>
<tr >
<td >2007
</td>
<td >ggrothendieck
</td>
<td >ripley
</td>
<td >murdoch
</td></tr>
<tr >
<td >2008
</td>
<td >ggrothendieck
</td>
<td >h.wickham
</td>
<td >ripley
</td></tr>
<tr >
<td >2009
</td>
<td >ggrothendieck
</td>
<td >waclaw.marcin.kusnierczyk
</td>
<td >dwinsemius
</td></tr>
<tr >
<td >2010
</td>
<td >ggrothendieck
</td>
<td >murdoch
</td>
<td >dwinsemius
</td></tr>
</table>

Es constatable cómo Ripley, ''campeón absoluto'' de manera global, parece haberse alejado de r-help (aunque sigue muy activo en la más elitista r-devel). También cómo Venables e Ihaka, pioneros en el mundo de R, dejaron pronto paso a otros entusiastas del lenguaje.

El único español que ha ocupado los lugares de privilegio es _alobo_, al que no conozco, pero que usaba una cuenta del CSIC a primeros de siglo.

Finalmente, presento una gráfica que muestra la evolución histórica del peso agregado de los respondedores por decil: se aprecia un claro proceso de concentración: una élite de expertos en R —creciente también en número, todo hay que decirlo— está concentrando a los _líderes_ (en la terminología utilizada por los expertos en redes sociales) de la lista de correo de R.

[![](/wp-uploads/2010/06/pesos_x_decil_y_anno1.png)
](/wp-uploads/2010/06/pesos_x_decil_y_anno1.png)

(Los lectores más inquietos habrán advertido cómo ciertas series se cortan cuando no lo debieran en el gráfico anterior. Se trata de un artefacto causado por empates en pesos.)
