---
author: Carlos J. Gil Bellosta
categories:
- cortos
date: 2024-10-29
lastmod: '2025-04-06T18:55:46.357410'
related:
- 2010-08-05-un-ilustrador-problema-de-compatibilidad-de-licencias-libres.md
- 2011-11-28-r-en-la-ensenanza-unos-comentarios-a-los-comentarios.md
- 2015-02-26-bellostamisc-y-una-moraleja.md
- 2010-07-19-que-hacer-y-no-hacer-con-los-bichitos-que-uno-encuentra.md
- 2012-10-29-liberado-biostatfloss-una-coleccion-de-recursos-libres-para-la-bioestadistica-y-la-epidemiologia.md
tags:
- jax
- postgres
- fair source
- código abierto
- gpl
- stan
title: Más allá del "software" libre y algunos asuntos más
url: /2024/10/29/cortos-estadística
---

1. Últimamente, casi siempre que se usan las palabras _tecnología_ y _enseñanza_ en una misma frase es para denunciar los _perniciosos_ efectos de la primera en la segunda. No obstante, [aquí_](https://nadaesgratis.es/cabrales/puede-servir-la-tecnologia-para-mejorar-la-atencion-a-la-diversidad-escolar) se señala una de sus potenciales atractivos: adecuadamente usada, podría permitir gestionar la _varianza_ (por no usar el término tabú, _desigualdad_), en el desempeño escolar.
1. En [_Stan’s autodiff is 4x faster than JAX on CPU but 5x slower on GPU (in one eval)_](https://statmodeling.stat.columbia.edu/2024/09/25/stan-faster-than-jax-on-cpu/) se ponen en cuestión "leyes de la naturaleza/informática" que no son otra cosa que generalizaciones. Va por casos. Doy fe.
1. Uno de los problemas de las licencias de abiertas es que, por diseño, olvidan una dimensión muy importante del desarrollo de código: hay gente que vive de eso (véase, por ejemplo, [_Free as in Do as Your Told_](https://marktarver.com/free-as-in-do-as-your-told.html)). Un nuevo tipo de licencia, la [_fair source_](https://simonwillison.net/2024/Oct/9/the-fair-source-definition/), quiere remediar el problema. En resumen, es un tipo de licencia _privativa_ que deviene automáticamente _abierta_ al cabo de un tiempo razonable.
1. Otro de los problemas que ocurren (a veces) al desarrollar _software libre_: que tus dependencias pueden quedar _huérfanas_, como [aquí](https://blog.schochastics.net/posts/2024-10-10_tales-from-os-dev-002/)
1. [Xata](https://xata.io/) ofrece alojamiento para instancias de Postgres que cuenta con un segmento gratuito (_free tier_). [Aquí](https://xata.io/blog/postgres-free-tier) describen la solución tecnológica y el impacto económico de ese _servicio_ (en concreto, de cómo usan lo uno para minimizar lo otro).