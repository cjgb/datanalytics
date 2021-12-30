---
author: Carlos J. Gil Bellosta
date: 2016-11-02 08:13:16+00:00
draft: false
title: Decisiones bajo incertidumbre (I)

url: /2016/11/02/decisiones-bajo-incertidumbre-i/
categories:
- probabilidad
tags:
- modelos gráficos
- redes bayesianas
- teoría de la decisión
---

Frecuentemente nos interesan unos efectos (E), tales como:

* Si un sujeto cumplirá con los términos de una hipoteca.
* Si un paciente responderá a un tratamiento.
* Si un adlátere circunstancial en el tren nos regalará una conversación amena.
* Si un transeúnte podrá o no darnos fuego para prender un cigarro.
* Si un individuo es o no un criminal.
* Si un candidato será o no un trabajador productivo en una empresa.
* Etc.

Son variables aleatorias. En ciertos casos, si no todos, se puede suponer que estos efectos dependen de determinados factores lantentes (L). Y se puede crear una red bayesiana similar a esta:

![bayesian_network_00](/wp-uploads/2016/11/bayesian_network_00.png#center)

En este caso hay tres factores latentes (dos de ellos relacionados entre sí) que _causan_ (o se correlacionan) con el efecto deseado.

Los efectos son directamente observables. Habría que realizar acciones, posiblemente onerosas como, por ejemplo, contratar a alguien, para poder observarlas. Los factores latentes, por motivos incluso etimológicos, tampoco son directamente observables: pueden ser atributos tales como la cultura, la inteligencia, un determinado tipo de virus, determinados rasgos de personalidad, etc.

Sin embargo, estos factores latentes _emiten_ (o causan, o se correlacionan con) indicios observables (O). Observables en este contexto quiere decir fácilmente, o económicamente, observables. Estos indicios pueden ser síntomas (fiebre, anomalías en análisis de orina, etc.), disponer de un título universitario, no haber dejado nunca una factura sin pagar, tener antecedentes criminales, etc.

Nuestra red quedaría algo así como:

![bayesian_network_01](/wp-uploads/2016/11/bayesian_network_01.png#center)

Habiendo observado alguno de estos indicios, se pueden echar a andar inferencias sobre la red bayesiana y afinar las probabilidades sobre los efectos de interés. De estar correctamente calibrada, cuantos más nodos observables se conozcan, mejor será la estimación de las probabilidades de los nodos E.

Las redes bayesianas tratan de replicar procesos de toma de decisiones. Pero aun sin ellas, de alguna manera, así procedemos en la práctica. Y así proceden médicos, policías, responsables de recursos humanos, sicólogos, etc. Las redes bayesianas vienen a formalizar, refinar, hacer explícito y, muy importante, volver más cuantitativo (y _data driven_) el proceso.

Pero así son las cosas.

(En las dos entradas que siguen a esta continuaré la discusión para establecer una relación con la teoría del señalamiento y las _cocretas_).