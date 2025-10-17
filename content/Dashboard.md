---
title: Dashboard de tareas
---
## Pendientes
```tasks
not done
group by path
short mode
tags do not include #exclude 
path does not include Templates
path does not include Tejidos
```
## Archivos a corregir

dataview
TABLE file.name as "Nombre archivo", file.ctime as "Creado"
FROM ""
WHERE (!title OR regexmatch(file.name, "[áéíóúÁÉÍÓÚñÑ ]")) AND !contains(file.path, "templates")
SORT file.name


Jajaja esto es privado, qué bueno