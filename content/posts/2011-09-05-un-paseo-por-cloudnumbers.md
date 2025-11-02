---
author: Carlos J. Gil Bellosta
categories:
- r
date: 2011-09-05 07:57:03+00:00
draft: false
lastmod: '2025-04-06T18:44:57.602175'
related:
- 2012-09-25-predicciones-de-series-temporales-a-gran-escala-y-en-paralelo-con-r.md
- 2015-04-10-restauracion-de-ficheros-bak-sin-windows.md
- 2011-03-04-1680.md
- 2016-06-03-r-sobre-el-ec2-de-amazon-hace-casi-siete-anos-una-concesion-a-la-melancolia.md
- 2015-01-21-donde-guardar-los-paquetes-de-r-en-linux-al-menos.md
tags:
- cloudnumbers
- r
title: Un paseo por cloudnumbers
url: /2011/09/05/un-paseo-por-cloudnumbers/
---

[Cloudnumbers](http://cloudnumbers.com/) es una empresa que ofrece servicios de [computación de alto rendimiento](http://es.wikipedia.org/wiki/Computaci%C3%B3n_de_alto_rendimiento) en la nube con especial énfasis en aplicaciones que corren sobre R. Me ofrecieron una cuenta temporal y gratuita el otro día y en la entrada de hoy voy a describir mis primeros pasos en su plataforma.

Hace dos años hice, y dejé descrita, [mi primera incursión en la computación con R en la nube](http://analisisydecision.es/probando-r-sobre-el-ec2-de-amazon/). En dicha ocasión utilicé la plataforma EC2 de Amazon: en resumidas cuentas, Amazon alquila servidores con diversas configuraciones de _software_ por horas a un precio muy competitivo y uno puede acceder a ellos vía ssh, instalar R, los paquetes necesarios, correr el código y descargar los resultados.

Cloudnumbers ha desarrollado una interfaz entre el usuario y EC2 —que es quien finalmente proporciona los servidores— concebida para facilitar su manejo. Está pensada para quienes quieren aprovechar la capacidad de cálculo que proporciona la nube con diversas herramientas y, en particular, R.

Mi experiencia comenzó en la [página de acceso al servicio](https://my.cloudnumbers.com/login), donde introduje el nombre de usuario y contraseña que me habían proporcionado. Inmediatamente accedí a una página en la que aparecieron mis



* _workspaces_, que son espacios de _almacenamiento persistente_ y
* sesiones, que son _instancias_ de un servidor.

[![](/img/2011/09/workspaces_sessions.png#center)
](/img/2011/09/workspaces_sessions.png#center)

Las sesiones se abren cuando quieres ejecutar algún proceso y las cierras cuando terminas. Cada hora de uso de una sesión tiene un precio que depende de sus características y que va descontándose de tu crédito inicial.

El procedimiento de trabajo consiste esencialmente de los siguientes pasos:



1. Subir tus ficheros a un _workspace_
2. Crear una sesión asociada a dicho _workspace_
3. Ejecutar el proceso en la sesión correspondiente
4. Guardar tus resultados en el _workspace_ y cerrar la sesión
5. Descargar los resultados del _workspace_

En el resto de la entrada, voy a detallarlos y acompañarlos de capturas de pantalla. En primer lugar, subo mis ficheros (código, datos iniciales, etc.) a un _workspace —_un directorio remoto— al que uno puede subir y bajar ficheros a través de una inerfaz como la siguiente:

[![](/img/2011/09/workspace_cloudnumbers.png#center)
](/img/2011/09/workspace_cloudnumbers.png#center)

Una vez subidos el código y los datos iniciales necesarios, creo una sesión. Para ello, primero le asocio un _workspace_:

[![](/img/2011/09/select_workspace.png#center)
](/img/2011/09/select_workspace.png#center)

Después, selecciono el tipo de aplicación que quiero ejecutar (R, en mi caso):

[![](/img/2011/09/select_application.png#center)
](/img/2011/09/select_application.png#center)

Como he seleccionado R, tengo la opción de elegir qué paquetes añadir a mi instancia:

[![](/img/2011/09/select_packages.png#center)
](/img/2011/09/select_packages.png#center)

Luego puedo elegir el tipo de hardware sobre el que correrá mi sesión: número y tipo de CPU, tamaño de la memoria, etc. Obviamente, en función de dicha selección, variará el precio por hora de uso de la instancia.

[![](/img/2011/09/select_hardware.png#center)
](/img/2011/09/select_hardware.png#center)

Finalmente, puedo dar un nombre a la instancia y confirmar la selección. A partir de ese momento, comienza la instalación de la sesión _—_proceso que puede llevar varios minutos_—_ al cabo del cual se tiene acceso a la interfaz de la sesión. A través del navegador, uno se encuentra con varias pestañas.

Una de ellas es la de la consola, donde puede ejecutar R. Los paquetes elegidos de antemano están disponibles.

[![](/img/2011/09/session_consola.png#center)
](/img/2011/09/session_consola.png#center)

La pestaña _desktop_ proporciona acceso al escritorio de una sesión de Ubuntu.

[![](/img/2011/09/session_desktop.png#center)
](/img/2011/09/session_desktop.png#center)

Puede apreciarse cómo los ficheros de nuestro _workspace_ (que hemos subido previamente) están montados en una carpeta. Nuestra sesión de R puede leer y escribir en ella. En realidad, tenemos un Ubuntu corriendo en nuestro navegador, y podemos abrir cualquier aplicación: desde la terminal hasta un navegador (que hará las delicias de los amigos de la recursividad).

[![](/img/2011/09/session_desktop_terminal.png#center)
](/img/2011/09/session_desktop_terminal.png#center)

En la pestaña de estadísticas uno puede seguir la evolución de uso de los distintos recursos del sistema:

[![](/img/2011/09/session_statistics.png#center)
](/img/2011/09/session_statistics.png#center)

También es posible seleccionar un fichero y editarlo:

[![](/img/2011/09/session_edit_file.png#center)
](/img/2011/09/session_edit_file.png#center)

Una vez que el proceso que se quiere correr en la instancia termina —¡hay que asegurarse de que los datos de salida se guardan dentro del workspace!— se puede deterner la sesión —y así deja de correr el _taxímetro_— y descargar los resultados al ordenador local a través de la interfaz del workspace.

¿Qué experiencia tendrán mis lectores con este tipo de plataformas? Estoy pensando en contar lo mismo que aparece en esta entrada en las Jornadas de R. ¿Creéis que valdría la pena?