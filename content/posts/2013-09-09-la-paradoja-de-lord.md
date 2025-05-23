---
author: Carlos J. Gil Bellosta
categories:
- estadística
date: 2013-09-09
lastmod: '2025-04-06T19:08:43.261692'
related:
- 2020-11-13-de-a-b-a-did.md
- 2023-06-22-paradoja-lord.md
- 2016-01-25-comparaciones-de-tres-grupos-pruebas-vs-modelos.md
- 2013-09-17-la-paradoja-de-simpson-en-el-6eiiic.md
- 2019-12-04-p-valores-y-decisiones.md
tags:
- bioestadística
- estadística
- paradoja de lord
- paradojas
title: La paradoja de Lord
url: /2013/09/09/la-paradoja-de-lord/
---

Hace unos meses una clienta me propuso un problema relativamente (¿aparentemente?) sencillo. Era el siguiente:

* A cierto número de pacientes se les hizo una medida (de qué, es irrelevante) antes y después de un tratamiento.
* A unos se les aplicó el tratamiento tradicional (grupo de control).
* A otros, uno novedoso (grupo de tratamiento).

El objetivo era el obvio: ¿es mejor el nuevo tratamiento? Parece sencillo, ¿verdad?

Hay dos mecanismos obvios para tratar de verificar la hipótesis. El primero es un t-test sobre

{{< highlight R >}}
(después - antes) ~ tratamiento
{{< / highlight >}}

que recibe, en la jerga, el nombre de GSA (o _gain score analysis_). El segundo, la siguiente ANCOVA:

{{< highlight R >}}
después ~ tratamiento + antes
{{< / highlight >}}

El hecho de que ambos análisis puedan dar respuestas divergentes se conoce como paradoja de Lord. Existe una literatura extensa sobre el fenómeno. A mí me sirvió, p.e.,
[este artículo](http://pareonline.net/getvn.asp?v=14&n=6).
No obstante,
[dicen](http://muse.jhu.edu/login?auth=0&type=summary&url=/journals/journal_of_college_student_development/v045/45.3pike01.html) que


>What remains uncontested is Lord's (1965, p. 305) conclusion from his first article: "with the data usually available for such studies, there simply is no logical or statistical procedure that can be counted on to make proper allowances for uncontrolled pre-existing differences between groups."

**Coda:** en mi caso, tenía medidas repetidas y me decanté, no sin cierto desasosiego, por la ANCOVA dado que podía gestionarlas más adecuadamente. No obstante, ¿hasta qué punto puede uno complicarle la vida a una clienta que no más quiere que presentar de una vez su _bendita_ tesis?