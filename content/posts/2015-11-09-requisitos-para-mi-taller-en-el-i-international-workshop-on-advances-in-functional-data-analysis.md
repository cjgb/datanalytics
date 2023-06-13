---
author: Carlos J. Gil Bellosta
date: 2015-11-09 08:13:49+00:00
draft: false
title: Requisitos para mi taller en el "I International Workshop on Advances in Functional
  Data Analysis"

url: /2015/11/09/requisitos-para-mi-taller-en-el-i-international-workshop-on-advances-in-functional-data-analysis/
categories:
- anuncio
tags:
- big data
- charlas
---

El jueves día 12 tengo un taller de cuatro horas en el [_I International Workshop on Advances in Functional Data Analysis_](http://www.est.uc3m.es/iwafda/). Siendo internacional (y el material está en inglés), me vais a permitir escribir el resto de la entrada _urbi et orbi_.

I will be presenting a hands-on workshop. Those attending it are invited to install a few tools in order to make the most of it during and after the sessions.

**_Software_:**

* [VirtualBox](https://www.virtualbox.org/wiki/Downloads)
* ssh (via [putty](http://www.chiark.greenend.org.uk/~sgtatham/putty/download.html) on Windows)
* The virtual machine (note: this virtual machine no longer exists as of 2021)

The virtual machine is large (a 3GB compressed file) and it will be impossible to download it during the sessions. Attendees are advised to download the files (and test the installation) in advance.

**_Hardware_:**

* A laptop with a minimum 4GB RAM, recommended +8GB
* 64 bit computer/OS

**Instructions:**

* Download the VirtualBox version required by your system
* Download and unzip the virtual machine
* Open VirtualBox and then `Machine > Add` (the unzipped file)
* Start the virtual machine (and check it does!)
* If something goes wrong:

	* Check the known errors (below)
	* Google the error and solve it
	* Email me a description of the problem


**Accessing the virtual machine:**

**ssh: **`ssh -oPort=2222 rhadoop@localhost # pwd:rhadoop`

**root:** `pwd:hadoop`

**web:**

* rstudio:

	* http://localhost:8787
	* u/p: rhadoop/rhadoop

* hadoop job tracker:

	* http://localhost:50030


**Known problems:**

The virtual machine may not start (VMR* error) if virtualization is not set up in your BIOS. The details on how to activate virtualization depend on your hardware, but it is easy to find the required option.
