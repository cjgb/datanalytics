---
author: Carlos J. Gil Bellosta
categories:
- r
date: 2013-02-18 07:34:27+00:00
draft: false
lastmod: '2025-04-06T19:12:49.565698'
related:
- 2014-11-12-descargar-ficheros-gz-detras-de-https-con-r.md
- 2016-04-04-tuneles-ssh-para-conectarse-de-manera-segura-con-rstudio-server.md
- 2016-04-01-redireccion-dinamica-de-puertos-para-conectarse-de-manera-segura-con-rstudio-server.md
- 2013-04-04-textconnection-y-ficheros-anonimos.md
- 2015-04-10-restauracion-de-ficheros-bak-sin-windows.md
tags:
- r
title: Descarga de ficheros con R a través de sftp
url: /2013/02/18/descarga-de-ficheros-con-r-a-traves-de-sftp/
---

Llevo lo que parece un siglo sin escribir en estas páginas. Y es que, en gran parte, el nuevo [curso de R](http://cursorbasico2.usar.org.es/) me consume. Y también otros asuntos jugosos y relacionados con R que iré, sin duda, desgranando en futuras, aunque previsiblemente más esporádicas, entradas.

Lo que me ocupa hoy es esto:

{{< highlight R >}}
fichero <- getURL("sftp://usuario:contraseña@máquina/home/bla/bla/bla/fichero.txt")
{{< / highlight >}}


¿Qué es? Es la manera de descargar directamente a R un fichero a través del [protocolo SFTP](http://es.wikipedia.org/wiki/SSH_File_Transfer_Protocol) (FTP seguro). En la cadena de conexión hay que indicar

* el nombre de usuario (de ssh),
* su contraseña,
* la máquina donde reside el fichero (mediante su nombre o su IP) y, finalmente,
* la ruta que conduce a él.