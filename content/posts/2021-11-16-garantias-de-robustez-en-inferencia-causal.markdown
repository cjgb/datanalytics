---
author: Carlos J. Gil Bellosta
date: 2021-11-16 09:13:00+00:00
draft: false
title: Garantías de robustez en inferencia causal

url: /2021/11/16/garantias-de-robustez-en-inferencia-causal/
categories:
- artículos
- estadística
tags:
- artículos
- causalidad
- inferencia
---

Por motivos que no vienen al caso, me ha tocado ponderar el artículo _[The use of controls in interrupted time series studies of public health interventions](https://pubmed.ncbi.nlm.nih.gov/29982445/)_. Lo comento hoy porque hace referencia a temas que me ha gustado tratar en el pasado.

El artículo, _prima facie_, es un poco viejuno. De hecho, casi todo lo que se escribe sobre metodología en el mundo de las aplicaciones (y el que cito tiene que ver con salud pública) tiene tufillo de naftalina. Para cuando un resultado metodológico llega al común conocimiento de quienes se dedican a la sociología, ciencia política, salud pública, etc., los estadísticos ya han aprendido un montón de cosas nuevas y mucho más _guays_.

Lo que sugiere el artículo es que quienes hacen estudios de índole causal del tipo pre/post-intervención, traten de estudiar la robustez de sus resultados usando algún tipo de control. (¿Quién hoy en día no usa controles para esas cosas? El hecho de que ese artículo se haya escrito muy recientemente nos hace pensar que aún queda gente así.)

Llaman ITS (_interrupted time series_) a un estudio pre/post sin controles y CITS (_controlled_ ITS) a uno con. Además, listan una serie de diseños o formas, siete en total, en las que introducir esos controles.

Este artículo tiene tres lecturas:

  1. Si haces un estudio ITS, usa un CITS para estudiar la robustez. Está bien, pero uno debería pensar: ¿por qué alguien querría hacer un ITS en primer lugar?
  2. Si haces un estudio CITS, compleméntalo con un ITS para estudiar la robustez. Obviamente, hay mil motivos para considerar que esta es una lectura reaccionaria y errónea.
  3. Si haces un CITS de un tipo, usa un CITS de otro tipo para estudiar la robustez.

La tercera podría tener sentido. Obviamente es innecesaria cuando tus resultados apuntan en la dirección en que se mueven las ideologías circunstancialmente imperantes. Pero cuando no, es conveniente tener el aparato metodológico bien fundamentado.