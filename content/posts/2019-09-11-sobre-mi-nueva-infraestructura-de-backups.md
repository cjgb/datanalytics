---
author: Carlos J. Gil Bellosta
categories:
- programación
- varios
date: 2019-09-11 09:13:29+00:00
draft: false
lastmod: '2025-04-06T19:07:56.712989'
related:
- 2013-08-21-mis-copias-de-seguridad.md
- 2017-03-31-hoy-es-el-dia-internacional-de-la-copia-de-seguridad.md
- 2023-03-31-dia-internacional-copia-seguridad.md
- 2011-09-05-un-paseo-por-cloudnumbers.md
- 2023-12-14-metodologias-viejunas.md
tags:
- backups
- linux
- sistemas
title: Sobre mi nueva infraestructura de backups
url: /2019/09/11/sobre-mi-nueva-infraestructura-de-backups/
---

Tengo dos ordenadores, `tiramisu` y `ede`. Uno va conmigo y el otro me espera en casa.

Hasta hace 4 días, usaba [OwnCloud](https://owncloud.org/) para mantenerlos sincronizados y, de paso, gestionar mis _backups_: siempre tenía tres copias de mis datos en tres sitios distintos (mis dos ordenadores y un VPS). Pero:

* Alquilar un disco duro en la nube no es _tan_ barato.
* OwnCloud es un coñazo: hay que actualizarlo cada que se te olvida cómo.
* OwnCloud es demasiado... aparatoso. Es más adecuado para organizaciones que para uso personal.

Buscando alternativas, llegué a una lista corta de dos:

* [Nubo](https://github.com/PascalLG/nubo-hs)
* [Syncthing](https://syncthing.net/)

La principal ventaja de ambos es que no hace falta mantener una copia en la nube. Y puedes reaprovechar el viejo `kropotkin` para que esté atento siempre desde detrás del rúter de casa a los cambios en los otros.

Y sí, al final he implementado uno de ellos... pero no os voy a decir cuál.

**Nota:** ayer vi que [Yandex.Disk](https://disk.yandex.com/) proporciona 10GB gratis y 100 GB por menos de dos dólares al mes, una alternativa muy conveniente a todo este DIY de más arriba si no te importa la salvedad que seguro que alguno nos va a querer recordar en los comentarios.