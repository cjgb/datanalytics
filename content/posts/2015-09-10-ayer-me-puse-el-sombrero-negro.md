---
author: Carlos J. Gil Bellosta
categories:
- estadística
date: 2015-09-10 08:13:40+00:00
draft: false
lastmod: '2025-04-06T19:08:07.162811'
related:
- 2015-04-17-si-un-dia-faltan-21-63-euros-en-caja.md
- 2015-09-02-respuestas-distintas-a-la-misma-pregunta.md
- 2019-12-04-p-valores-y-decisiones.md
- 2024-07-03-cortos-stats.md
- 2019-03-27-sobre-la-necesaria-validacion-a-posteriori-de-modelos-de-caja-negra.md
tags:
- estadística
- mala ciencia
title: Ayer me puse el sombrero negro
url: /2015/09/10/ayer-me-puse-el-sombrero-negro/
---

Ayer tuve una visita: un amigo me pidió que le echara una mano a otro que andaba muy perdido con su tesis de máster. No era estadístico pero estaba construyendo regresiones y pruebas de hipótesis y no entendía los resultados. Como a veces pasa, había comenzado por las conclusiones (tal vez razonables) con la esperanza de que los datos acabasen dándole la razón.

Y se la daban... salvo por un _pequeño_ detalle: aunque significativo, el coeficiente de la corrupción tenía el signo contrario.

Pero basta con jugar con las variables que entran y no entran en el modelo —cuidadosamente seleccionadas de acuerdo a sus correlaciones— reponderar y eliminar quirúrgicamente _outliers_, etc., para reeducar el coeficiente. En baño María de malas prácticas, los p-valores dúctiles son.

No conseguí en el rato que estuve con él darle la vuelta por completo. Me quedé en un coeficiente con la dirección _correcta_, pero aún no significativo. Pero cerca quedó.

No sé si el amigo de mi amigo aprendió mucho o poco de técnicas estadísticas en ese rato. Pero seguro, a poco listo que sea, habrá entendido un poquito de lo que pueden encerrar esos argumentos _basados en datos_.