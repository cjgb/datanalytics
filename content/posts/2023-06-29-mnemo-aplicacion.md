---
author: Carlos J. Gil Bellosta
categories:
- programación
date: 2023-06-29
lastmod: '2025-04-06T18:49:39.913987'
related:
- 2024-02-06-llm-obsidian.md
- 2025-03-25-cortos-llms.md
- 2014-02-14-memoria-de-decaimiento-exponencial-y-canutos-asincronos.md
- 2019-09-11-sobre-mi-nueva-infraestructura-de-backups.md
- 2012-11-07-mapreduce-con-mincedmeat.md
tags:
- programación
- aplicaciones
- memoria
title: Mnemo, la aplicación
url: /2023/06/29/mnemo-app/
---

Mnemo es una pequeña aplicación que he construido para ayudarme a recordar esas cosas que me consta que se me van a olvidar: palabras, conceptos simples, nombres de personas, etc. Externamente se ve como un canal (privado) de Telegram en el que un par de veces al día me aparecen notificaciones con un resumen de la cosa.

Internamente, es la combinación de tres cosas:
* Una _base de datos_ en [Notion](https://notion.so).
* Un _bot_ de Telegram.
* Un _workflow_ de [n8n](https://n8n.io/) que corre en mi servidor local y que orquesta todo el proceso.

La base de datos la actualizo manualmente. Cada vez que tropiezo con algo que merece la pena ser recordado, añado un registro con información básica: un rótulo, una breve descripción, un enlace para indagar más.

El flujo de n8n hace lo siguiente:
* Lanzarse automáticamente un par de veces al día en horas predefinidas (a lo `cron`).
* Acceder a la base de datos de Notion y seleccionar una fila de entre las que más tiempo hace que no han sido publicadas.
* Procesar el contenido y mandárselo al bot de Telegram.
* Actualizar el registro de la fila seleccionada para marcarla como vista en la fecha en cuestión.

Un _overkill_ de libro, pero entretenido y _tax-free_.