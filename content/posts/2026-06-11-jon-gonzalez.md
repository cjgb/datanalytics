---
author: Carlos J. Gil Bellosta
categories:
- gráficos
- estadística
date: 2026-06-11
description: También, sobre los gráficos estadísticos como herramientas de persuasión
  y el uso estratégico de los grados de libertad que existen a la hora de construirlos.
lastmod: '2026-06-04'
related:
- 2023-04-24-estadistica-creativa.md
- 2025-05-20-cortos-estadistica.md
- 2023-11-07-dibujar-modelar.md
- 2025-09-02-cortos-estadistica.md
- 2022-02-22-grafico-quitarse-sombrero.md
tags:
- estadística
- gráficos
- estadística pública
- economía
- llms
title: Sobre el «affaire» Jon González
url: /2026/06/11/jon-gonzalez/
---

Jon González tenía una cuenta popular en Twitter. Unos tipos a los que no les gustaba lo que contaba urdieron una estrategia, eventualmente exitosa, para taparle la boca. Eso está contado en muchas partes, como por ejemplo, [esta](https://www.elmundo.es/economia/empresas/2026/05/11/6a01f586e9cf4a85728b456e.html).

Jon González era conocido por sus gráficos, que acompañaban a sus análisis y opiniones sobre diversos aspectos de la economía española. Se trata de un asunto que no me interesa demasiado porque aunque me afecta, carezco de instrumentos para actuar sobre ella de forma efectiva. Es un poco como el tiempo: no soy yo el que hace llover; de igual manera, yo no subo los tipos de interés ni redacto la legislación laboral, así que invierto mi tiempo en otra cosa.

Cuando surgió el revuelo me interesé no obstante en el personaje y tomé uno de sus gráficos,

![Jon González](/img/2026/jon-gonzalez-orig.png#center)

que había dado pie a una discusión que no viene al caso sobre la menguante línea roja.

Por entretenerme, le pedí a un LLM que replicase el gráfico. Hubo problemas porque las fuentes de datos que usaba González no eran públicas, así que el LLM tomó las de Eurostat. Luego, estas no tenían la misma profundidad histórica (1995 para González, 2000 para Eurostat). Luego, los conceptos están abiertos a interpretación: ¿Divides por población global? ¿O por trabajador? ¿O por hogar? Como esas cuestiones nunca están claras, opté por usar el denominador más propicio para las tesis de González, la población total.

Y obtuve este resultado:

![Jon González](/img/2026/jon-gonzalez-replicated.png#center)

En él, la línea roja tiene una trayectoria igualmente mediocre, pero de una manera bastante menos dramática que en el original.

¿Por qué me entretengo en esto? Hay un motivo que trasciende la anécdota de lo tristemente ocurrido con González. Digamos que alguien tiene una tesis y como argumento de persuasión construye un gráfico. Un gráfico no es la realidad sino una representación de ella medida por un sinfín de decisiones. Si estas se hubiesen resuelto de otra manera, el gráfico podría haber sido no solo diferente, sino incluso «opuesto» (en el sentido de que podría utilizarse para rebatir la tesis original).

Además, ocurre muy frecuentemente que quien plantea una tesis no lo haga con una voluntad puramente descriptiva sino en la medida en que es coherente con una agenda subrepticia. Es decir, que tiene interés en que sus números y sus gráficos adquieran una determinada forma. Si para construir un gráfico hay que tomar, por simplificar, diez decisiones binarias, es posible construir $2^{10}$ gráficos diferentes, todos ellos _correctos_. Si eliges entre las distintas opciones de manera que siempre lo sesguen en una dirección, obtendrás una muestra en la cola de la distribución de los 1024 gráficos posibles y casi cualquier reconstrucción del mismo parecerá refutarlo.

Pero qué sabré yo y por qué escribiré sobre esto.

(El código usado en la replicación puede consultarse [aquí](https://github.com/cjgb/datanalytics_code/tree/main/2026-jon-gonzalez-replication).)