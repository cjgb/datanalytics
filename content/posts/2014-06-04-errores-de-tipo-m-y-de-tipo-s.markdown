---
author: Carlos J. Gil Bellosta
date: 2014-06-04 07:00:02+00:00
draft: false
title: Errores de tipo M y de tipo S

url: /2014/06/04/errores-de-tipo-m-y-de-tipo-s/
categories:
- estadística
tags:
- error
- estadística
- grandes datos
---

A los estadísticos se nos acusa en ocasiones de [contestar preguntas tontas en las que nadie está interesado](http://wmbriggs.com/blog/?p=5222).

(Nota: de alguna manera conseguí el artículo al que se refiere el enlace anterior; pero ahora no veo que exista ninguna copia libre por ahí. Si alguien la consigue, por el bien del resto de los lectores, que me avise o que lo haga saber en los comentarios).

A lo que iba. Muchos estadísticos tienen el cerebro reprogramado para tratar de no cometer los llamados errores de tipo I y errores de tipo II (y para ello tratan de estimar una cosa de dudosa utilidad, $latex P(D|H)$, donde $latex D$ son los datos y $latex H$ es cierta hipótesis (que, generalmente, a nadie interesa y que es más difícil de plantear correctamente de lo que parecería).

Este problema es particularmente serio cuando el tamaño de $latex D$ es tan grande que $latex P(D|H)$ es prácticamente cero _independientemente_ de $latex H$. Este tal vez sea el problema más serio de la inferencia en el mundo del _big data_.

Creo que pensar en términos de [errores de tipo S y errores de tipo M](http://andrewgelman.com/2004/12/29/type_1_type_2_t/) nos podría ayudar a satisfacer mejor las necesidades de quienes vienen a nosotros con preguntas. Lo que son ambos, lo dice el enlace anterior. Pero para los impacientes,



	  * el **error de tipo S** es el que se comete cuando uno se confunde en el sentido de un efecto (o parámetro) y
	  * el **error de tipo M** es el que se comete cuando uno se confunde en su magnitud.

Porque la gente(*), en el fondo, solo quiere saber si su X es bueno y de serlo, cuánto. El resto es liturgia.

(*) Excluyo a aquellos que son aún peores: los que asumen sin más los aspectos más rituales de la liturgia y necesitan, porque se lo ha dicho su director de tesis, que necesitan que una cosa sea inferior a 0.05.
