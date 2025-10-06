---
title: Promedios, marcas, etc.
---
## Problema: 
Programa que solicite datos de autos:
El programa debe solicitar los datos a
capturar de un auto: Marca, precio,
Color, modelo, origen y después
preguntar si el usuario quiere seguir
capturando autos.
Al finalizar la captura debe mostrar:
- ¿Cuántos autos son europeos?
- ¿Cuántos valen menos de 350,000?
- ¿Cuántos fueron modelo 2025?
- ¿Cuántos fueron de color rojo?
-El promedio de precios de todos los
autos
-El promedio de precios de los autos
europeos

## Solución
```PSeInt
Algoritmo sin_titulo

	definir marca, color, origen Como Caracter
	definir precio, suma, suma_europeos, promedio, promedio_europeos Como Real
	
	definir europeos, modelo, menores, modelo_2025, rojos, total Como Entero
	//salida autos europeos
	// salida menores de $350,000
	// suma de modelos 2025
	// suma de rojos 
	//promedio de todos
	// promedio de autos europeos
	definir continuar como logico
	definir terminar Como Caracter
	continuar = Falso
	Mientras continuar = Falso Hacer
		
		Escribir "Ingrese la marca del auto"
		Leer marca 
		Escribir "Ingrese el precio del auto"
		Leer precio
		Escribir "Ingrese el color del auto"
		Leer color
		Escribir "Ingrese el modelo del auto"
		Leer modelo
		Escribir "El origen del auto es Europeo s=si, n=no"
		Leer origen
		Si origen = "s" Entonces
			europeos = europeos + 1
			suma_europeos = suma_europeos + precio
		Fin Si
		Si precio <350000 Entonces
			menores = menores + 1
		Fin Si
		Si modelo = 2025 Entonces
			modelo_2025 = modelo_2025 + 1
		FinSi
		si color = "rojo" Entonces
			rojos = rojos + 1
		FinSi
		suma = suma + precio
		total = total + 1
		Escribir "¿Desea continuar capturando autos?" 
		Escribir "s- si, cualquier otra tecla - salir"
		Leer terminar
		Si terminar <> "s" Entonces
			continuar = Verdadero
		Fin Si
	Fin Mientras
	si suma = 0 y total = 0 Entonces
		
		Escribir "No se ingresó ningún dato"
	SiNo
		promedio = suma / total
		Escribir "Fueron ", menores ," autos que valen menos de $350,000.00"
		Escribir "Fueron ", rojos ," autos color rojo"
		Escribir "Fueron ", modelo_2025, " autos modelo 2025"
		Escribir "El promedio de todos los autos es: ", promedio
		si europeos=0 Entonces
			Escribir "No hubo autos europeos"
		SiNo
			promedio_europeos = suma_europeos / europeos 
			Escribir "Fueron ", europeos ," autos europeos"
			Escribir "El promedio de los autos Europeos es:", promedio_europeos
		Fin Si
	FinSi
FinAlgoritmo
```