---
author: Carlos J. Gil Bellosta
date: 2020-06-01 09:13:00+00:00
draft: false
title: La ley de la cerveza para pintar nubes (y su relación con el análisis de la
  supervivencia)

url: /2020/06/01/la-ley-de-la-cerveza-para-pintar-nubes-y-su-relacion-con-el-analisis-de-la-supervivencia/
categories:
- estadística
tags:
- nubes
- riesgo
- supervivencia
---


![](/wp-uploads/2020/05/nubes.jpg)






El otro día pregunté a en un grupo de amigos, físicos mayormente, si les sonaba de alguna esquinita teórica de la carrera en que apareciese alguna función de la forma







$latex x(t) = \exp\left(-\int_0^t f(x) dx\right)$







y uno, que trabaja en el mundo del videojuego dio con la línea 401 del código que aparece [aquí](https://www.shadertoy.com/view/MldcW2) y que sirve para pintar las nubes hiperrealistas que aparecen en la misma página.







Es una aplicación de la [ley de Beer](https://en.wikipedia.org/wiki/Beer%E2%80%93Lambert_law) en la que mis lectores más sofisticados reconocerán el estrecho vínculo con el análisis de la superviencia. En este caso, la que trata de sobrevivir es una intensidad luminosa que atraviesa diversos medios que la van atenuando. Al ser potencialmente heterogéneos, la función de supervivencia adquiere la forma







$latex S(t) = \exp\left(-\int_0^t h(x) dx\right)$







(tal vez con otra notación), que es precisamente [de la que hablé el otro día](https://www.datanalytics.com/2020/05/28/sobre-la-funcion-de-riesgo-en-el-analisis-de-la-supervivencia/).



