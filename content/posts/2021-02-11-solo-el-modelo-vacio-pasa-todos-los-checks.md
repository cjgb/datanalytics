---
author: Carlos J. Gil Bellosta
categories:
- ciencia de datos
date: 2021-02-11 09:13:00+00:00
draft: false
lastmod: '2025-04-06T18:51:34.462244'
related:
- 2018-11-07-cuando-oigais-que-los-algoritmos-discriminan-acordaos-de-esto-que-cuento-hoy.md
- 2019-11-18-los-ejemplos-son-las-conclusiones.md
- 2010-10-17-sin-sexo-por-decision-judicial.md
- 2018-11-14-modelos-y-sesgos-discriminatorios-unas-preguntas.md
- 2022-11-17-igualdad-oportunidades.md
tags:
- ética
- ludismo
- sesgo
title: Solo el modelo vacío pasa todos los "checks"
url: /2021/02/11/solo-el-modelo-vacio-pasa-todos-los-checks/
---

Cuando uno crea uno de esos modelos que tanta mala fama tienen hoy en día ---y sí, me refiero a esos de los que dependen las concesiones de hipotecas, etc.--- solo tiene dos fuentes de datos:

* La llamada información _estadística _acerca de los sujetos: donde vive, sexo, edad, etc.
* Información personal sobre el sujeto: cómo se ha comportado en el pasado.

Sin embargo, [aquí](https://equineteurope.org/2018/finland-assessing-credit-rating-on-the-basis-of-statistical-data-alone-is/) se nos informa de cómo ha sido multado un banco finlandés por

>having refused to grant credit to A in connection with A making online purchases, based on matters classified as grounds of discrimination, such as gender, age, language and their combined effect.

(¿Dónde quedará la estadística bayesiana, incluso en su versión _objetiva_?)

Pero por otro lado, [aquí](https://marginalrevolution.com/marginalrevolution/2018/10/unintended-consequences-information-bans.html) se nos habla de propuestas para prohibir el uso de información sobre el comportamiento histórico de los sujetos y, en particular,

>whether using credit histories to price car insurance was discriminatory.

Solo el modelo nulo `y ~ 1` parece satisfactorio en el siglo que corre. Que es coherente con [acatarrantes definiciones de justicia](https://datanalytics.com/2020/02/26/algoritmos-y-acatarrantes-definiciones-de-justicia/) de las que se habló aquí un tiempo atrás.

**Addenda:** Uh, parece que ya hablé de esto [hace unos años](https://datanalytics.com/2018/11/07/cuando-oigais-que-los-algoritmos-discriminan-acordaos-de-esto-que-cuento-hoy/).