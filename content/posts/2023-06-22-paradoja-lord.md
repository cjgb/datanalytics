---
author: Carlos J. Gil Bellosta
categories:
- estadística
date: 2023-06-22
lastmod: '2025-04-06T19:02:47.870552'
related:
- 2013-09-09-la-paradoja-de-lord.md
- 2020-11-13-de-a-b-a-did.md
- 2024-05-02-falacia-ecologica.md
- 2022-03-08-estadistica-ciencias-blandas.md
- 2022-03-03-error-sesgo-modelos-lineales.md
tags:
- paradojas
- estadística
- causalidad
title: La paradoja de Lord, de nuevo
url: /2023/06/22/paradoja-lord/
---

Escribí sobre la paradoja de Lord
[en 2013](/2013/09/09/la-paradoja-de-lord/)
y luego otra vez, tangencialmente,
[en 2020](https://www.datanalytics.com/2020/11/13/de-a-b-a-did/). Hace poco releí el artículo de Pearl sobre el tema y comoquiera que su visión sobre el asunto es muy distinta de la mía, voy a tratar de desarrollarla.

Aunque supongo que es generalizable, la llamada paradoja de Lord se formuló inicialmente al estudiar y comparar datos antes/después. En su descripción original de mediados de los 60, había niños y niñas a los que se había pesado en junio y en septiembre. El problema (y la paradoja) aparecían al tratar de modelar esa variación de peso según el sexo.

Sin entrar en el análisis de los _diagramas causales_ (si a alguien le interesan, que consulte el artículo de Pearl), existen dos modelos _razonables_:

el que llamaré A,

{{< highlight R >}}
(después - antes) ~ sexo
{{< / highlight >}}

y el que llamaré B,

{{< highlight R >}}
después ~ tratamiento + antes
{{< / highlight >}}

como en mi primera entrada sobre el asunto. De hecho, supe que había algo llamado _paradoja de Lord_ al estudiar un problema parecido y para entender las diferencias entre ambas formulaciones. Porque ---y en eso consiste la _paradoja_--- dan resultados diferentes.

En el análisis de la paradoja de Lord me separo de la aproximación de Pearl en que, en lugar de fijarme en el _diagrama causal_, parto de un hipotético modelo _verdadero_. De hecho, simplificándolo todo un poco, este podría escribirse de la forma

{{< highlight R >}}
después ~ f(tratamiento, antes)
{{< / highlight >}}

donde `f` es una función no necesariamente lineal y se supone que existe un error, sea o no normal, que tiene en cuenta otras variables y circunstancias no recogidas en los datos. Este será el modelo C.

El modelo B puede entenderse como una aproximación al C ---a través del desarrollo de Taylor de primer grado de `f`--- que, entre otras cosas:

* Linealiza el efecto de las variables.
* Destruye sus interacciones.

Bajo el modelo C, pasar de 35 a 36 kg no es muy distinto de pasar de 45 a 46 kg. Uno puede pensar que el contexto exige algo así como unos _incrementos decrecientes_en la respuesta al `antes`, pero B carece de la suficiente expresividad matemática.

Peor aún es el modelo A, que es una simplificación de B en el que se fija a 1 el coeficiente de `antes`. Es decir, se trata de una simplificación no justificada de otra simplificación no justificada.

La paradoja de Lord, entonces, se desvanece. Se convierte en un artefacto producido por la sobresimplificación. Es como quejarse de que se ve todo oscuro al mirar por la ventana con gafas de sol: basta con quitárselas y, ¡voilá!

### Coda:

En mi segunda entrada sobre la paradoja de Lord trataba el asunto de las diferencias en diferencias. Que tiene bastante que ver con el modelo A. De lo que se deduce que...