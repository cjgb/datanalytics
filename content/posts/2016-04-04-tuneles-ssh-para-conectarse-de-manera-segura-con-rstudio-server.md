---
author: Carlos J. Gil Bellosta
date: 2016-04-04 09:13:39+00:00
draft: false
title: Túneles ssh para conectarse de manera segura con RStudio Server

url: /2016/04/04/tuneles-ssh-para-conectarse-de-manera-segura-con-rstudio-server/
categories:
- programación
- r
tags:
- r
- rstudio
- ssh
---

La [solución que presenté el otro día](https://www.datanalytics.com/2016/04/01/redireccion-dinamica-de-puertos-para-conectarse-de-manera-segura-con-rstudio-server/) para resolver el problema en cuestión, tal como indicó [Iñaki Úcar](http://www.enchufa2.es/), es demasiado aparatosa. La alternativa a mi propuesta

`ssh -ND 2001 miusuario@datanalytics.com`

y todo lo que sigue es crear un _túnel ssh_ mediante

`ssh -NL 2001:localhost:8787 miusuario@datanalytics.com`

y conectarse a la sesión remota de RStudio apuntando en cualquier navegador a `http://localhost:2001`.

El comando anterior exige la debida exégesis, que nunca había tenido del todo clara. Lo que hace es, primero, crear una conexión entre mi ssh local, el ordenador en el que lanzo el comando, y mi ssh remoto (el servidor con nombre `datanalytics.com`). Eso es lo que verán los terceros: una conexión ssh entre dos máquinas.

La gracia está en lo que hace la conexión: se trae el puerto 8787 de lo que el servidor `datanalytics.com` entiende por `localhost` (es decir, el `localhost` remoto, no el local) a mi puerto local 2001. La conexión ssh se encargará de _enrutar_ cualquier petición que realice a mi `localhost:2001` al puerto 8787 de lo que `datanalytics.com` conozca como `localhost`, i.e., el `localhost` remoto.
