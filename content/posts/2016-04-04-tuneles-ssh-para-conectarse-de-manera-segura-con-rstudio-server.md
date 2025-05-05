---
author: Carlos J. Gil Bellosta
categories:
- programación
- r
date: 2016-04-04 09:13:39+00:00
draft: false
lastmod: '2025-04-06T19:02:22.958207'
related:
- 2016-04-01-redireccion-dinamica-de-puertos-para-conectarse-de-manera-segura-con-rstudio-server.md
- 2013-02-18-descarga-de-ficheros-con-r-a-traves-de-sftp.md
- 2015-04-10-restauracion-de-ficheros-bak-sin-windows.md
- 2011-01-31-r-node-una-interfaz-web-para-r.md
- 2014-12-03-paralelizacion-en-r-con-snow.md
tags:
- r
- rstudio
- ssh
title: Túneles ssh para conectarse de manera segura con RStudio Server
url: /2016/04/04/tuneles-ssh-para-conectarse-de-manera-segura-con-rstudio-server/
---

La [solución que presenté el otro día](https://datanalytics.com/2016/04/01/redireccion-dinamica-de-puertos-para-conectarse-de-manera-segura-con-rstudio-server/) para resolver el problema en cuestión, tal como indicó [Iñaki Úcar](http://www.enchufa2.es/), es demasiado aparatosa. La alternativa a mi propuesta

`ssh -ND 2001 miusuario@datanalytics.com`

y todo lo que sigue es crear un _túnel ssh_ mediante

`ssh -NL 2001:localhost:8787 miusuario@datanalytics.com`

y conectarse a la sesión remota de RStudio apuntando en cualquier navegador a `http://localhost:2001`.

El comando anterior exige la debida exégesis, que nunca había tenido del todo clara. Lo que hace es, primero, crear una conexión entre mi ssh local, el ordenador en el que lanzo el comando, y mi ssh remoto (el servidor con nombre `datanalytics.com`). Eso es lo que verán los terceros: una conexión ssh entre dos máquinas.

La gracia está en lo que hace la conexión: se trae el puerto 8787 de lo que el servidor `datanalytics.com` entiende por `localhost` (es decir, el `localhost` remoto, no el local) a mi puerto local 2001. La conexión ssh se encargará de _enrutar_ cualquier petición que realice a mi `localhost:2001` al puerto 8787 de lo que `datanalytics.com` conozca como `localhost`, i.e., el `localhost` remoto.