---
author: Carlos J. Gil Bellosta
categories:
- ciencia de datos
- consultoría
date: 2018-05-29 08:13:28+00:00
draft: false
lastmod: '2025-04-06T18:52:46.191690'
related:
- 2014-09-29-decisiones-basadas-en-datos-siempre-posibles-en-la-practica.md
- 2017-01-13-es-imposible-ensenar-nada-a-alguien-cuyo-sueldo-depende-de-no-aprender.md
- 2015-07-24-mis-respuestas-en-una-entrevista-sobre-big-data-periodismo-de-datos-etc.md
- 2018-07-16-consecuencias-indeseadas-de-la-falta-de-humildad.md
- 2023-10-19-errores-chatgpt.md
tags:
- ciencia de datos
- economía
- política
- ruido
- meritocracia
title: Guasa tiene que habiendo tanto economista por ahí tenga yo que escribir esta
  cosa hoy
url: /2018/05/29/guasa-tiene-que-habiendo-tanto-economista-por-ahi-tenga-yo-que-escribir-esta-cosa-hoy/
---

Tiene que ver mi entrada de hoy con [_Why did Big Data fail Clinton?_](http://www.statisticsviews.com/details/news/10094321/Why_did_Big_Data_fail_Clinton.html), que trata de lo que el título indica: toda la tontería que se ha escrito de [Cambridge Analytica](https://datanalytics.com/2018/04/02/sobre-lo-de-cambridge-analytica/). Enlazo todo lo demás, por otro lado, con el [nóbel de economía de 2016 (Hart y otro)](https://marginalrevolution.com/marginalrevolution/2016/10/performance-pay-nobel.html).

¿Por qué? De acuerdo con lo que muchos han escrito, una empresa de siete friquis en el Reino Unido con acceso a los _likes_ de 50000 donnadies y poco más tienen poder para quitar y poner reyes con unos cuantos _clics_. Poco menos que en sus manos está el hacer periclitar, si no occidente entero, al menos, sí sus democracias. (Que es un relato sumamente interesado: ¿cómo justificar, si no, todo el tinglado de la GDPR?)

Luego si un equipo de científicos de datos con un clúster de Hadoop es incapaz de llevar a Clinton al despacho oval, poco menos que podemos poner en duda que sus integrantes estén en el lado bueno de la línea que define el retraso mental.

La economía (y Hart y el otro, en particular) nos explican mejor las cosas. Y no solo aquí, sino en muchos otros contextos relevantes. La cuestión tiene que ver con un principal (p.e., un candidato a la Casa Blanca) pone en manos de un agente (p.e., un grupo de científicos de datos) llevar ciertos aspectos de su campaña. Entonces, ¿cuánto mérito cabe atribuir al agente? En particular, la retribución depende del ruido, es decir, de lo problemática que sea la relación entre esfuerzo y éxito a través de una fórmula del tipo

![](/img/2018/05/Betaweights2.png#center)

que se explica en tercer enlace del primer párrafo.

En la literaturilla sobre ciencia de datos y todas las demás cosas, crea sus héroes: aquellos que, ¡oh!, acertaron. Acertar es el santo grial de la ciencia de datos de pacotilla, ignorante de todas las circunstancias azarosas que pueden influir en el éxito. Y del éxito del agente en particular. Así, cada cuatro años fabricaremos héroes (el equipo del candidato victorioso) y villanos (el del perdedor).

Termino con un párrafo estupendo extraído del mismo enlace, que habla de los CEOs pero que bien podría aplicarse en nuestra profesión (con mi subrayado):

>Holmstrom’s work has lot of implications for structuring executive pay. In particular, executive pay often violates the informativeness principle. In rewarding the CEO of Ford for example, an obvious piece of information that should used in addition to the price of Ford stock is the price of GM, Toyota and Chrysler stock. If the stock of most of the automaker’s is up then you should reward the CEO of Ford less because most of the gain in Ford is probably due to the economy wide factor rather than to the efforts Ford’s CEO. For the same reasons, if GM, Toyota, and Chrysler are down but Ford is down less then you might give the Ford CEO a large bonus even though Ford’s stock price is down. Oddly, however, performance pay for executives rarely works like a tournament. As a result, **CEOs are often paid based on noise**.