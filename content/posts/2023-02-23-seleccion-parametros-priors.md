---
author: Carlos J. Gil Bellosta
date: 2023-02-23
title: 'Una "app" para la selección de parámetros de prioris infomativas'

url: /2023/02/23/todo-sobre-wifi/
categories:
- estadística
tags:
- estadística bayesiana
- estadística
- prioris
- prioris informativas
---

Un ejemplo de caso de uso: uno de los parámetros de tu modelo está relacionado con la duración de algo. El cliente, que tiene 20 años de experiencia en la cosa te dice: el tiempo está típicamente comprendido entre uno y siete días. Por lo tanto, decides introducir en tu modelo una priori informativa gamma que con una alta probabilidad asigne valores en el intervalo $[1, 7]$. Pero, ¿cuáles son sus parámetros?

Puedes hacer la cuenta a mano, pero también puedes usar
[esta herramienta](http://priors.datanalytics.com/)
autoexplicativa.

(Para notificar errores, sugerencias de mejora, etc., escríbaseme.)