---
title: Clase 4 Ejercicio 3
---
43 Se desea calcular el salario semanal de
varios empleados bajo las siguientes
condiciones: las primeras 40 horas las recibe con un pago normal de acuerdo con una tarifa
por hora, que previamente se tendra que
capturar.
-Nombre del empleado,
-pago por hora,
-horas trabajadas.
Las siguientes 9 horas de trabajo adicional a
la jornada normal se pagan dobles y las
excedentes de 49 horas se pagan triples.
Se requiere que muestre el pago que debera
hacerse a dicho empleado desglosando horas
normales, dobles, triples y el total a pagar,
Cada vez que se calcula el pago de un
empleado, el usuario decidira si desea realizar
el calculo para otro empleado o terminar el
proceso.

## Incompleto xD
```PSeInt
Algoritmo sin_titulo
	Definir Nombre Como Caracter
	Definir pagoxhora, horastrabajadas Como Entero
	Definir continuar Como Logico
	continuar = Verdadero
	Mientras continuar Hacer
		Escribir "Desea continuar (s:Si, n:no)"
		Leer respuesta
		Si respuesta = "s" Entonces
			Escribir "Ingrese el nombre del Empleado:"
			Leer Nombre
			Escribir "Ingrese el pago por hora:"
			Leer pagoxhora
			Escribir "Ingrese las horas trabajadas:"
			Leer horastrabajadas
			si
		SiNo
			continuar = Falso
		FinSi
	Fin Mientras
FinAlgoritmo
```
