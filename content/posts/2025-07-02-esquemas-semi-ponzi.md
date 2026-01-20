---
tags:
- ponzi
- fraude
author: Carlos J. Gil Bellosta
categories:
- finanzas
date: 2025-07-02
description: Sobre cómo entre los negocios legítimos y los esquemas Ponzi puede existir
  una gama de esquemas semi-Ponzi.
lastmod: '2025-09-06T13:01:11.558889'
related:
- 2023-03-16-negocio-bancario.md
- 2011-08-09-2452.md
- 2012-06-05-medias-y-medianas-en-el-banco-de-espana.md
- 2023-09-14-gestion-liquidez.md
- 2011-07-26-c2bfque-es-un-banco-c2bfque-son-las-pruebas-de-resistencia-en-primera-derivada.md
title: Esquemas semi-Ponzi
url: /2025/07/02/esquemas-semi-ponzi/
---

Comencemos pensando en una institución (en un sentido hiperamplio del término) que desarrolla una actividad económica. Esta institución se financia con las inversiones de terceros. No voy a entrar aquí en distingos entre los distintos tipos de instrumentos (acciones, bonos, depósitos, etc.) disponibles: complicaría la discusión sin aportar a su sustancia.

Cuando un inversor realiza una retirada, la institución extrae el efectivo de una cuenta **C**. **C** contiene algo de efectivo, el que se estima suficiente para cubrir las disposiciones. La institución emplea el resto en su actividad económica.

La cantidad de dinero en **C** es $\sum_i R_i + \sum_i A_i$, donde
- $R_i$ es el rendimiento neto (entendido como flujo de caja) de la actividad económica el día $i$.
- $A_i$ son las aportaciones netas de los inversores el día $i$.

Así funcionan empresas como, por ejemplo, el BBVA. El BBVA tiene un negocio que se presupone sólido y que garantiza que sus inversores, incluidos los cuentahabientes, obtengan un rendimiento preestablecido. De hecho, para el BBVA cabe esperar que $\sum_i R_i \sim \sum_i A_i$ en promedio.

Así funcionan también los esquemas Ponzi. Solo que en tales casos, $R_i = 0$ porque no desarrollan una actividad económica (de hecho, en tales casos $R_i \le 0$ porque de algún sitio tienen que salir los chalés y los yates de sus promotores). Los inversores pueden sacar dinero de C solo en tanto que

$$\sum_i R_i + \sum_i A_i =  \sum_i A_i > 0,$$

es decir, en tanto que otros inversores hayan aportado dinero a C.

Es fácil entender entonces qué quiero entender con el término esquema semi-Ponzi. Se trata de una institución a medio camino entre BBVA y Ponzi (o, para no salir de mi barrio, [la hija de Mariano José Larra](https://es.wikipedia.org/wiki/Baldomera_Larra)): desarrolla una actividad económica, sí, pero pequeña en comparación con el capital que capta, de tal manera que aunque $\sum R_i > 0$, se tiene que $\sum_i R_i \ll \sum_i A_i$. Si un día la investiga la Guardia Civil por fraude, siempre puede alegar que es una institución legítima, que tiene un proyecto de negocio pero que, desafortunadamente, rinde por debajo de lo esperado.

Supongo que a veces puede funcionar. Es sabido de todos que a Enron, a la larga, no.

### Coda

A lo mejor, algunos días, incluso para el BBVA, $R_i \le 0$. En tales muy contadas fechas, podría decirse con cierta propiedad que BBVA opera un esquema Ponzi. A lo mejor un esquema semi-Ponzi tiene días en los que $R_i > A_i$. Y entonces podríamos decir que una empresa seria es una que casi nunca opera _a lo Ponzi_ mientras que un esquema semi-Ponzi es uno que lo hace con cierta frecuencia.
