---
author: Carlos J. Gil Bellosta
date: 2015-04-10 08:13:51+00:00
draft: false
title: Restauración de ficheros .bak sin Windows

url: /2015/04/10/restauracion-de-ficheros-bak-sin-windows/
categories:
- computación
tags:
- amazon
- ec2
- sql
- sql server
---

Tengo un fichero `.bak`. Un fichero `.bak` (el mío, al menos) es una copia de seguridad de SQL Server y no hay forma humana de acceder a sus contenidos sin otro SQL Server (que yo sepa). No me preguntéis de dónde lo he sacado. La cuestión es que contiene datos que tengo que leer.

Requisito imprescindible para tener un SQL Server es disponer de una máquina con Windows. Pero yo no tengo ninguna. Cuando tuve, instalé la versión de evaluación gratuita de SQL Server (¿Express?) y me ahorré parte de la pena que describo a continuación. Lo hago por referencia mía, por referencia de otros y por si alguien conoce algún atajo.

No poseyéndolo, lo alquilé (en Amazon). No es complicado dar con [instancias con Windows + SQL Server](http://aws.amazon.com/es/windows/products/sql/). Elegí la más barata y me encomendé al diablo.

Antes de ello hay que generar un _Key Pair_. Para los efectos es un fichero que uno se descarga y guarda con cuidado. Al lanzar la instancia hay que asociarla a dicho par.

Una vez lanzada la instancia (tal cual se ve en el panel de control de Amazon, sección Instancias), hay que conectarse a ella para lo cual hay que pulsar con el botón derecho del ratón sobre la instancia y hacer lo que las secciones _Get Windows Password_ (allí te servirá el par creado antes) y _Connect_ dan a entender.

IP, usuario y contraseña (que acabamos de obtener) te valdrán de bien poco si la instancia está en modo paranoico (i.e., si no admite conexiones externas). Tendrás que ir a _Security Groups_ (última columna de la pestaña de instancias) dar acceso de entrada (_inbound_) vía RDP (_remote desktop protocol_) cuando menos a tu IP externa.

(Nota: RDP es [esta basura](http://en.wikipedia.org/wiki/Remote_Desktop_Protocol)).

¿Cómo me conecto desde mi Linux vía RDP? Solo me ha funcionado `rdesktop` (ya sabes: `sudo apt-get install rdesktop`). El comando, para referencia propia,

`rdesktop -u usuario -p 'contraseña' -g 90% 12.34.56.78`

La opción `-g 90%` me proporciona una ventana de tamaño generoso. Muy útil para manejarse por los menús inútilmente táctiles del sistema operativo remoto.

Hay que subir el fichero `.bak` a Amazon. Habrá mecanismos mejorables, pero me he decantado por bajarlo de Dropbox. Paso configurar ftp en Windows.

El programa que tienes que abrir en Windows es el que tiene como logotipo un cilindro amarillo, una llave inglesa y un martillo (también llamado SQL Server Management Studio). Hay tutoriales que indican [cómo importar un fichero `.bak`](https://msdn.microsoft.com/en-us/library/ms177429(SQL.90).aspx) y estoy justo en estos momentos tratando de exportar la base de datos (no es tan grande) a Excel usando el asistente de exportación.

Cuando termine veré (¿vía Dropbox de nuevo?) cómo bajo los datos.

**Nota:** hay que bajar las tablas (a `.csv`) una a una. Podrías bajarlas a Excel siempre que el número de las filas de las tablas no pase de 64k.

En fin, tal es mi tortura del día.

**Otra nota:** también podría abrir un puerto para conectarme con SQL Server desde mi máquina local vía ODBC y exportar las tablas a R directamente. Sin embargo, una vez, ya tuve ocasión de desesperarme para dar acceso a SQL Server en local. Con máquinas en modo paranoico, de nuevo, paso.
