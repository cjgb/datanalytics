---
author: Carlos J. Gil Bellosta
date: 2020-03-12 13:44:48+00:00
draft: false
title: Monitorización diaria de la mortalidad

url: /2020/03/12/monitorizacion-diaria-de-la-mortalidad/
categories:
- números
- varios
tags:
- coronavirus
- isciii
- mortalidad
---




_[En esta entrada deambulo peligrosamente por los límites de un NDA; sin embargo, me siento obligado a exponerme a las posibles consecuencias debido a la gravedad de las circunstancias actuales.] _







En España existe un mecanismo de monitorización de la mortalidad diaria por todas las causas. Su existencia no es explícitamente pública, pero sí que existen indicios implícitos de su existencia en informes de salud pública: véanse, p.e., referencias a MoMo y EuroMOMO [aquí](http://vgripe.isciii.es/documentos/20192020/home/Sistemas%20y%20fuentes%20de%20informacion%20del%20SVGE_2019-20.pdf). [Nota: MoMo es el acrónimo de _mortality monitoring_].







En España funciona de la siguiente manera: diariamente, el ministerio de justicia envía datos sobre los fallecidos registrados al [ISCIII](https://www.isciii.es/). Estos datos son problemáticos e incompletos. En particular, se refieren únicamente a los registros civiles _informatizados_, que solo son _casi_ todos. Los datos, además,  llegan con cierto retraso (p.e., las defunciones en Zaragoza del día 1 pueden ir llegando el 2, 3, 4... aunque típicamente, al cabo de una semana se dispone de datos _casi_ completos).







Existen modelos que permiten corregir ese retraso. Existen otros modelos que describen cómo debería ser la mortalidad en un día concreto para compararla con la observada. Estos modelos se aplican a diversos niveles: sexos, grupos de edad, provincias, CCAA, etc. Luego, se comparan las cifras observadas con las estimadas y esa información se disemina entre las _partes interesadas_.







_[Nota: esta información sobre las defunciones diarias no tiene asociada la causa de muerte. Los ficheros con información de la causa de muerte los genera el INE con años de retraso.]_







¿Qué es una parte interesada? ¿Eres _tú_ una parte interesada? La respuesta es no y el motivo es _histórico_. Cuando en [Circiter](http://circiter.es) llegamos al ISCIII, los informes arriba indicados se generaban en PDF y se enviaban a los responsables de sanidad de las CCAA correspondientes por correo electrónico. Así, Aragón no veía datos de Navarra, etc; Aragón veía datos de Huesca, pero La Rioja no; etc.







Llegamos y diseñamos y construimos un sistema que automatizaba una serie de tareas que antes eran manuales (recoger los datos de mortalidad, ajustar los modelos, crear los informes, etc.) y los reemplazamos por un sistema más propio del siglo que corre. En particular, sustituimos los informes en PDF por un portal _web_ (perfectible, sí, pero _web_).







Al no estar atados por las servidumbres de _cuasipapel_ que es el PDF, pensamos en dejar la aplicación abierta al público. Pero no, se impusieron las razones _históricas_: había que cerrar el acceso a público en general primero y a las comunidades autónomas a toda información que no le competiese directamente después. Así que montamos toda una infraestructura de seguridad, niveles, accesos, permisos, etc. simplemente para que _tú_ no pudieras ver esos datos.







Y ahora la pregunta es: ¿se manifiesta el coronavirus en los sistemas de monitorización diaria de la mortalidad? Pues no lo sabemos. Solo unos cuantos pueden verlo. Yo qué sé. Pregúntales.







_[Pido perdón expresamente a la buena gente del ISCIII y a su gran trabajo. En particular a A.L. Especialmente durante estos días. Posiblemente esta entrada los incomode. Pero no sé si es sano mantenerme callado en estas circunstancias.]_



