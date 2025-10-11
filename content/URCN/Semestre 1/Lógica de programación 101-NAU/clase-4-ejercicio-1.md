---
title: Clase 4 ejercicio 1
---
Realice un programa que permita ejecutar una calculadora. EI programa deberá solicitar dos números y a la operación realizar: suma, resta, multiplicación, división. Dependiendo de la operación ingresada por el usuario, se deberá mostrar el resultado de la operación.
```PSeInt
Algoritmo calculadora_básica
	definir n_1, n_2, resultado Como Real
	definir operacion Como Caracter
	definir valida Como Logico
	
	Escribir "Bienvenido al programa de Calculadora"
	Escribir "Ingrese el número 1"
	Leer n_1
	Escribir "Ingrese el número 2"
	Leer n_2
	Escribir "Qué opcion desea realizar"
	Escribir "+ : Suma"
	Escribir "- : Resta"
	Escribir "* : Multiplicación"
	Escribir "/ : División"
	Leer operacion
	
	valida = Verdadero
	Segun operacion Hacer
		"+":
			resultado = n_1 + n_2
		"-":
			resultado = n_1 - n_2
		"*":
			resultado = n_1 * n_2
		"/":
			Si n_2 = 0 Entonces
				valida = Falso
			SiNo
					resultado = n_1 / n_2
			Fin Si
		De Otro Modo:
			valida = Falso
	Fin Segun
	Si valida Entonces
		Escribir "El resultado de ", n_1 , operacion, n_2, "es: ", resultado
	SiNo
		Escribir "La operación no es válida"
	Fin Si
FinAlgoritmo
```