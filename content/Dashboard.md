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

```
dataview
TABLE file.name as "Nombre archivo", file.ctime as "Creado"
FROM ""
WHERE (!title OR regexmatch(file.name, "[áéíóúÁÉÍÓÚñÑ]")) AND !contains(file.path, "templates")
SORT file.name
```


```
dataview
TABLE WHERE length(file.outlinks) < 1 AND length(file.inlinks) < 1 AND !contains(file.path, "templates") SORT length(file.outlinks) DESC, length(file.inlinks) DESC
```
Jajaja esto es privado, qué bueno