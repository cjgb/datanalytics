---
author: Carlos J. Gil Bellosta
date: 2020-10-27 09:13:00+00:00
draft: false
title: Anomalías, cantidad de información e "isolation forests"

url: /2020/10/27/anomalias-cantidad-de-informacion-e-isolation-forests/
categories:
- ciencia de datos
tags:
- anomalías
- ciencia de datos
- isolation forest
---




Identificar a un tipo raro es sencillo: el que lleva tatuada a su madre en la frente. Identificar a un tipo normal es más complicado: altura... normal, pelo... ¿moreno? Es... como... normal, ni gordo ni flaco...







Identificar transacciones de tarjeta normales es prolijo: gasta más o menos como todos en supermercados, un poco más que la media en restaurantes, no tiene transacciones de gasolineras... Identificar transacciones fraudulentas es (o puede ser) sencillo: gasta miles de euros en las farmacias de los aeropuertos y nada en otros sitios.







Esta idea tiene que ver con nociones como la del _[minimum description length](https://en.wikipedia.org/wiki/Minimum_description_length)_ y la de la [cantidad de información](https://www.datanalytics.com/2011/09/22/anonimidad-y-cantidad-de-informacion/) (que fue un tema recurrente en este blog hace casi 10 años). Y es la que explotan los _[isolation forests](https://en.wikipedia.org/wiki/Isolation_forest)_: son anómalas aquellas observaciones que podemos separar fácilmente del resto.



