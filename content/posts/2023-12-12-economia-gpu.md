---
author: Carlos J. Gil Bellosta
date: 2023-12-12
draft: false
title: ¿Qué precio debería tener una hora de GPU?
url: /2023/12/12/precio-hora-gpu/
categories:
- varios
tags:
- gpu
- llms
- deep learning
- hardware
---

Advertencia previa: esta entrada está plusquamcondicionada por la fecha de publicación. Quien aterrice en ella meses o años después, habrá de saber que lo que sigue únicamente tiene, tirando por alto, interés paleontológico.

Alguna vez, para mis experimentos, he _alquilado_ una GPU ---técnicamente, he contratado una _instancia_ con GPUs---. Por razones que no vienen al caso, ---y esto **no** es una recomendación de compra--- mi proveedor habitual para estas cosas es OVH y los precios de las distintas opciones que ofrece pueden consultarse [aquí](https://www.ovhcloud.com/es-es/public-cloud/prices/#397).

Ahora bien, a la vista de cómo está el mercado de las GPUs, sus precios, los cuellos de botella en su fabricación, la demanda, etc., ¿cuál es la economía de la cosa detrás de los precios de las distintas instancias? ¿A cuánto puede venir a salir una hora de computación en una GPU moderna con los precios de la más rabiosa vigencia?

Los números, extraídos de una
[entrada reciente](https://www.semianalysis.com/p/gpu-cloud-economics-explained-the) en
[semianalysis](https://www.semianalysis.com/)
(un blog mucho más recomendable que este), son

![](/wp-uploads/2023/precios-instancias-gpu.png#center)

donde los costes de los servidores con GPU parecen hacer referencia a la
[NVIDIA HGX H100](https://la.blogs.nvidia.com/2022/06/21/presentamos-nvidia-hgx-h100/).

Realmente son los precios ---en orden de magnitud--- a los que un particular puede hoy en día conseguir una V1000 (que tiene ya esos seis años largos en que los números de arriba estiman la vida útil de estos cacharros).