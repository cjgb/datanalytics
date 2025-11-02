---
author: Carlos J. Gil Bellosta
categories:
- programación
- r
date: 2016-04-01 09:13:32+00:00
draft: false
lastmod: '2025-04-06T18:55:49.295442'
related:
- 2016-04-04-tuneles-ssh-para-conectarse-de-manera-segura-con-rstudio-server.md
- 2013-02-18-descarga-de-ficheros-con-r-a-traves-de-sftp.md
- 2015-04-10-restauracion-de-ficheros-bak-sin-windows.md
- 2011-01-31-r-node-una-interfaz-web-para-r.md
- 2014-12-03-paralelizacion-en-r-con-snow.md
tags:
- r
- rstudio
- socks
- ssh
title: Redirección dinámica de puertos para conectarse de manera segura con RStudio
  Server
url: /2016/04/01/redireccion-dinamica-de-puertos-para-conectarse-de-manera-segura-con-rstudio-server/
---

Finalmente, instalé [RStudio Server](https://www.rstudio.com/products/rstudio/) en la máquina que está sirviéndote esta página. Pero no dejo abierto el puerto 8787 al exterior ni _jarto_ de vino.

(De hecho, veréis que desde hace un tiempo a este blog escucha en el puerto 443 y, aunque esa es otra historia, utiliza [HTTP/2](https://http2.github.io/)).

Así que lo he configurado para que solo se pueda acceder a él desde `localhost`, i.e., que no admita conexiones remotas, añadiendo la línea

`www-address=127.0.0.1`

al fichero `/etc/rstudio/rserver.conf` (y reiniciando `rstudio-server` inmediatamente, claro).

Con lo cual, reitero, sólo se puede acceder a él _desde dentro_. Pero yo estoy fuera. Así que
¿cómo utilizo entonces RStudio Server? Pues como dice el título de la entrada: mediante [redirección dinámica de puertos](https://es.wikipedia.org/wiki/Redirecci%C3%B3n_de_puertos#Redirecci.C3.B3n_din.C3.A1mica_de_puertos). En mi máquina hago

`ssh -ND 2001 miusuario@datanalytics.com`

y a continuación configuro Firefox para que utilice un _proxy_ SOCKS a través de `localhost:2001`, para lo cual recorro `preferences`, `advanced`,`network`, `connection` y, finalmente, `settings` para dejar la configuración así:

![socks_proxy](/img/2016/03/socks_proxy.png#center)

Entonces, en Firefox apunto a `http://localhost:8787/` y aparezco mágicamente en mi sesión remota de R (además de que navego por el resto de las páginas a través de mi servidor, lo cual no sé si es bueno o malo).