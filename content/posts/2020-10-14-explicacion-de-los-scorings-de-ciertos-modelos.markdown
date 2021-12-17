---
author: Carlos J. Gil Bellosta
date: 2020-10-14 09:13:00+00:00
draft: false
title: Explicación de los scorings de "ciertos" modelos

url: /2020/10/14/explicacion-de-los-scorings-de-ciertos-modelos/
categories:
- ciencia de datos
- estadística
tags:
- explicación
- lime
- modelos
- nmf
- ranger
---




Esta entrada la hago por petición popular y para rematar de alguna manera lo que [incoé hace unos días](https://www.datanalytics.com/2020/10/09/explicacion-de-modelos-como-procedimiento-para-aportar-valor-a-un-scoring/). Seré breve hasta lo telegráfico:





  1. Tomo las observaciones con _scorings_ más altos (en un árbol construido con `ranger` y cariño).  2. Veo cuáles son los árboles que les asignan _scorings_ más altos.  3. Anoto las variables implicadas en las ramas por donde bajan las observaciones (1) en los árboles (2).  4. Creo una matriz positiva: filas = casos, columnas = variables, valores = conteos.  5. Y la descompongo (vía [NMF](https://www.datanalytics.com/2015/09/14/nmf-una-tecnica-mergente-de-analisis-no-supervisado/)).  6. Etc.





Es hasta paquetizable.







Notas:





  * No me interesa (al menos en el caso de uso que motivó el desarrollo del algoritmo anterior) explicar _todas_ las predicciones sino solamente las que tienen _scorings_ más altos. El resto, no se usan para nada.  * Los métodos al uso para explicar predicciones lo hacen en términos de las variables del modelo. Sin embargo, los usuarios finales de la explicación pueden no tener mucha idea de qué puede llegar a significar una variable como `max_call_device_usage_period`. Porque también existen conjuntos de datos que  no son `Titanic`. Se hace necesario _postprocesar_ reglas basadas en la intervención de variables de ese estilo en _motivos_ comprensibles.  * Podría añadirse el sentido del corte en las variables, es decir, registrar no solo que la observación ha pasado por una bifurcación de un árbol en que interviene `edad` sino también si lo ha hecho por la rama del `>` o del `<`.

