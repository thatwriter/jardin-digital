---
title: Solicitar 10 edades, mostrar los mayores y menores de edad y el promedio
---
```PSeInt

 Algoritmo mayores_de_edad
	definir edad, mayores, menores, alumnos Como Entero
	Definir promedio, suma Como Real
	
	Repetir
		Escribir "captura una edad "
		Leer edad
		Si edad >= 18 Entonces
			mayores = mayores + 1 
		SiNo
			menores = menores + 1
		Fin Si
		suma = suma + edad
		alumnos = alumnos + 1
	Hasta Que alumnos >= 3
	promedio = suma / alumnos
	escribir "Son " , mayores, " mayores de edad, " menores , " menores de edad y el promedio es " , promedio
FinAlgoritmo
```
