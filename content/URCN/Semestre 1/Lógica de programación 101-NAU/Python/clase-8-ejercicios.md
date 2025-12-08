---
title: Ejercicios Clase 8 condicionales
---
## Contraseña
```python
#Practica 2 condicionales

"""Escribir un programa que almacene la cadena de unrcnet
caracteres unrcnet en una variable,
pregunte al usuario por la contrasena e imprima
por pantalla si la contrasena introducida por el usuario
coincide con la guardada en la variable
sin tener en cuenta mayúsculas y minúsculas."""
contrasena="unrcnet"
passw = input("captura la contrasena ")
if contrasena == passw. lower () :
    print ("contrasefia correcta ")
else:
    print("contraseñia incorrecta ")
```

## Division
```python
#Practica 3 condicionales
"""Escribir un programa que pida al usuario dos numeros
y devuelva su division.
Si el usuario no introduce numeros debe devolver
un aviso de error y si el divisor es cero tambien."""
  
n = float (input ("Introduce el dividendo: "))
m = float (input ("Introduce el divisor: "))
if m == 0:
    print (";Error! No se puede dividir entre 0")
else:
    print (n/m)
```

## Tributar
```python
#Práctica 5 condicionales
"""Para tributar un determinado impuesto se debe ser mayor de 16 años y tener unos ingresos
superiores a 1000 pesos mensuales.
Escribir un programa que pregunte al usuario su edad y sus ingresos mensuales y muestre por
pantalla si el usuario tiene que tributar o no."""

edad = int(input("Ingrese su edad\n:"))
ingresos = float(input("Escriba sus ingresos mensuales\n:"))
 
if edad >16 and ingresos > 1000:

    print("Si se debe tributar")
else:
    print("No se debe tributar")
```
## Grupo
```python
#Práctica 6 Condicionales

"""Los alumnos de un curso se han dividido en dos grupos A y B de acuerdo al genero y el nombre.
El grupo A esta formado por las mujeres con un nombre anterior a la M y los hombres con un nombre
posterior a la N y el grupo B por el resto.
Escribir un programa que pregunte al usuario su nombre y género, y muestre por pantalla el grupo
que le corresponde."""

nombre = input("Ingrese su Nombre\n:")
genero = input("Ingrese su género, m-masculino, f-femenino, o-otro\n:")
if genero == "o":
    genero= input("Especifique\n:")
    
if (nombre.lower()<"n" and genero == "f") or (nombre.lower() >"m" and genero == "m"):
    print("Grupo A")
else:
    print("Grupo B")
```

## ISR
```python
#Práctica 7 Condicionales
"""El pago de impuesto para la declaracion de la renta son los siguientes:
Renta Tipo impositivo
Menos de 10000 5%
Entre 10000 y 20000 15%
Entre 20000 y 35000 20%
Entre 35000 y 60000 30%
Más de 60000 45%
Escribir un programa que pregunte al usuario su renta mensual y muestre por pantalla el tipo de
impuesto que le corresponde."""

renta = float(input("Ingrese el costo de su renta\n:"))
if renta >60000:
    print("El impuesto es de 45%")
elif renta >35000:
    print("El impuesto es de 30%")
elif renta >20000:
    print("El impuesto es de 20%")
elif renta >10000:
    print("El impuesto es de 15%")
else:
    print("El impuesto es de 5%")
```

