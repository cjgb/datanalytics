---
author: Carlos J. Gil Bellosta
date: 2019-02-12 08:13:49+00:00
draft: false
title: Sr. Python, muchas gracias por su candidatura; ya le llamaremos cuando... tenga modelos mixtos

url: /2019/02/12/sr-python-muchas-gracias-por-su-candidatura-ya-le-llamaremos-cuando-tenga-modelos-mixtos/
categories:
- python
- r
tags:
- mcmc
- modelos mixtos
- python
- r
- recomendaciones
---

Era casi todavía el siglo XX cuando yo, desesperado por hacer cosas que consideraba _normales_ y que SAS no me permitía, pregunté a un profesor por algo _como C pero para estadística_. Y el profesor me contó que conocía a alguien que conocía a alguien que conocía a alguien que usaba una cosa nueva que se llamaba R y que podía servirme.

Fue amor a  primera vista, pero esa es otra historia. La relevante aquí es que volví a hablar con aquel profesor para agradecerle el consejo y, de paso, le pregunté que por qué no lo usaba él. Me contestó que porque en R no había modelos mixtos (aunque [`nlme`](https://CRAN.R-project.org/package=nlme) es anterior, del 99; ¡a saber en qué estado se encontraba entonces!).

Al cabo de los años, obviamente, las cosas han ido cambiando. Y son pocas las semanas (o meses, por no exagerar) que no uso modelos mixtos para algo.

(Por ejemplo, en [_Fast moment-based estimation for hierarchical models_](https://arxiv.org/abs/1504.04941) se puede encontrar uno de mis casos de uso favoritos, en sistemas de recomendación, que ha sido y sigue siendo una fuente de inspiración para proyectos pasados y en ciernes).

¿Y Python?

Revisando el otro día el estado de la cosa en Python quedé poco menos que consternado, pasmado. ¿Cómo puede ser que tanta gente esté diciendo hacer ciencia de datos con Python dado el lastimosísimo estado de todo lo mixto y/o jerárquico en ese lenguaje? ¿Qué tipo de modelos pueden estar implementando? (Sí, vale, los he visto; vi un caso el otro día: haciendo la risa y dando vergüenza ajena).

Claro, porque tienes MCMC para cosas pequeñas, pero... ¿Cómo puedes aproximar un modelo bayesiano en tiempo y forma sin una infraestructura mínima que ser parezca un poco a [`lme4`](https://cran.r-project.org/web/packages/lme4/index.html)?

Obviamente, la cosa cambiará. Cambió con R y lo hará pronto o tarde con Python. Y, de hecho, nada deseo más que declarar obsoleta esta entrada lo antes posible.

**Coda:** igual en esta entrada estoy cometiendo algún tipo de omisión vergonzante y existe lo que busco. Así que aquel que en los comentarios (no vale hacerlo en 2022, ¿eh?) me saca del error, tiene ganado no solo mi agradecimiento sino unas cervezas cuando nos topemos.