---
title: Sesión de grupo de estudio
---
## **Introducción**
La computadora es una calculadora que realiza miles de operaciones por segundo. 
Un programa nos permite comunicarnos con los procesos para los que está hecho.
Un lenguaje de programación es una aplicación que hace operaciones sencillas y se conecta directamente al procesador.
Para comunicarnos, se crearon instrucciones específicas.
La mayoría son en inglés (estudien inglés)
## Declaración de variables
1. Real

	${R_0 } = 1.1$
	
	$R_1 =5.345$
	
	$R_n =1298.234$
1. Entero

	 $E_0 = 5$ 
	 
	 $E_1 = 12$
	 
	 $E_n = 999999$
 2. Carácter
	 
	 $C_0 = ´a´$
	 
	 $C_1 =´b´$ 
	 
	 $C_n = ´z´$
 3. Lógico
	
	$l_0 =Verdadero$
	
	$L_1 =Falso$
4. Cadenas
5. Diccionarios
6. Conjuntos
7. Matrices


>[!NOTE]
Siempre empezar con al menos una letra
>
>Respetar el tipo de datos de las variables
>
Si hacemos una operación, el resultado, guardarlo en una nueva variable
## Escribir mensajes
La computadora es una calculadora, que ejecuta operaciones a miles de veces por segundo.
Hay que solicitarle que nos diga qué va a hacer

Ejemplo en PSeInt:
```PSeInt
	escribir "Estoy funcionando"
```
Ejemplo en Python
```Python
	print("Estoy funcionando")
```
## Leer datos
Solicitar información del usuario y lo guardamos en "entrada"

Ejemplo en PSeInt:
```PSeInt
	escribir "Ingrese un dato"
	Leer entrada
```
Ejemplo en Python
```Python
	entrada = input("Ingrese un dato1")
```
## Hacer operaciones
Vamos a hacer cada una de las operaciones sencillas y las vamos a mostrar en pantalla
1. $10+2$
2. $10-2$
3. $10*2$
4. $10 / 2$

Ejemplo en PSeInt:
```PSeInt
	escribir 10+2
	escribir 10-2
	escribir 10*2
	escribir 10/2
```
Ejemplo en Python
```Python
	print(10+2)
	print(10-2)
	print(10*2)
	print(10/2)
```
## Comparar datos
>[!NOTE]
>Les van a doler los ojos

Los comparadores, en realidad funcionan como operaciones, pero el resultado es lógico (booleano)
1. $1=2$
2. $´a´ = 1$
3. $2=2$
4. $1.1 < 3$

Ejemplo en PSeInt:
```PSeInt
	escribir 1 = 2
	escribir "a" = 1
	escribir 2 = 2
	escribir 1.1 < 3
```
Ejemplo en Python
```Python
	print(1 = 2)
	print("a" = 1)
	print(2 = 2)
	print(1.1 < 3)
```
## Ejecutar acciones cuando se cumple una condicional
Cuando queremos que una operación se ejecute cuando una operación booleana es verdadera, utilizamos el comando  `si` ó `if`

$a = 1$

$b =1$

$f(a,b) = \begin{cases} euclideana & \text{si } a = b , \\NoEuclideana & \text{en otro caso.}\end{cases}$

Ejemplo en PSeInt:
```PSeInt
	a=1
	b=1
	si a = b entonces
		Escribir "Euclideana"
	SiNo 
		Escribir "No Euclideana"
	Fin Si
	
```
Ejemplo en Python
```Python
	a = 1
	b = 1 
	if a=b:
		print("Euclideana")
	else:
		print("No Euclideana")
```
## **Ciclos**
Un ciclo es una repetición de pasos, cada ciclo se caracteriza por cómo se cuentan los pasos
### Mientas
Nos va a pegar hasta que digamos perdón

Ejemplo en PSeInt:
```PSeInt
	definir digamos como caracter
	mientras digamos != "perdon" Hacer
		Escribir "Pegar"
		Leer digamos
	Fin mientras
```
Ejemplo en Python
```Python
	digamos = ""
	while digamos != "perdon":
		print("Pegar")
		input()
```
### Repetir
Nos va a pegar cada vez que diga una palabra

Ejemplo en PSeInt:
```PSeInt
	definir palabras como entero
	palabras = 8 // Te estoy diciendo que te vas a caer
	Repetir
		escribir "pegar"
		palabras = palabras - 1
	Hasta Que palabras = 0
```
En python no existe como tal
### Para 
Nos va a pegar una vez por cada dulce que tengamos en la mano

Ejemplo en PSeInt:
```PSeInt
	dulces =5
	Para contador<-1 Hasta dulces Con Paso 1 Hacer
		escribir "Pegar"
	Fin Para
```
Ejemplo en Python
```Python
	dulces = 1
	for contador in range(1,dulces):
		print("pegar")
```
>[!NOTE]
>La computadora empieza a contar en cero
## Función
Útil para crear nuestros propios comandos
`Próximamente`
## Glosario

| Español  | Inglés    | Significado                 |
| -------- | --------- | --------------------------- |
| Escribir | Write     | Mostrar algo en pantalla    |
| Imprimir | Print     | Mostrar algo en pantalla    |
| Leer     | Read      | Entrada manual              |
| Entrada  | Input     | Entrada manual              |
| Si       | if        | Comparar                    |
| segun    | according | Validar opcione             |
| mientras | while     | Bucle siempre que se cumpla |
| repetir  | repeat    | bucle n veces               |
| para     | for       | bucle cuando n              |
| funcion  | function  | conjunto de instrucciones   |

## Símbolos de Comparaciones (si- if)

| Nombre            | Símbolo  |
| ----------------- | -------- |
| Igual             | =        |
| Diferente         | !=<br><> |
| Mayor que         | >        |
| Menor que         | <        |
| Menor o igual que | <=       |
| Mayor o igual que | >=       |

