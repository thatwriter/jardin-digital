---
title: Tarea 2 Foro
---
a. Comparación de tipos de datos
El saldo de la cuenta bancaria es un número que contiene la cantidad de dinero, a veces con fracciones (decimales), en cambio el CURP está compuesto por números y letras, por lo que se debe almacenar con esa posibilidad, adicional, el CURP no cambia, algo que el saldo, esta en constante cambio, segun las transacciones realizadas.
En el caso de El saldo de una cuenta bancaria, es un número que cambia a lo largo del tiempo, considerando que "Las variables flotantes almacenan números de coma flotante, que son números con punto decimal"(Variables en C, s/f, sec.Variables flotantes y dobles), por lo que mi propuesta es float (considerando que solo se utilizan dos decimales), cuyo nombre sería saldoCuenta.
Para el CURP será una constante, ya que no cambia a lo largo del tiempo, pero al contener números y letras, propongo utilizar un arreglo char[19] cuyo nombre sería CURP. Con una extensión de 19 por el null-terminated "En inglés se dice que esas strings son "null terminated" , porque la macro NULL representa también el valor 0."(FAMAF, 2016) Para indicar que es un string (ya que en C no existen como tal los strings).
Adicional con respecto a mi propuesta del nombre del saldo de la cuenta bancaria, consideré camel case, "donde la primera palabra comienza con minúscula y cada palabra subsiguiente inicia con una letra mayúscula." (Marketing, 2025) En el caso del CURP, al ser siglas, lo propongo tal cual.

b. Conflicto de decimales
Las principales consideraciones cuando se declara una variable que debería contener decimales, como un entero son las siguiente:
- Truncamiento: todo lo que está a la derecha del punto, desaparece, por que el espacio en memoria no almacena ningún número en decimales, ya que el espacio en memoria es menor al que puede contener un entero (8 bits) Como explica el documento del contenido nuclear, "los tipos de datos [...] no todos se pueden representar con el mismo número de bits" (DCEIT, s/f, p. 11)
- Precisión: A lo largo del tiempo, se perderían datos, que dañen el balance, por la pérdida de costos o gastos reales, haciendo prácticamente imposible este tipo de actividades, o cierres de caja, etc.
- Representación: Al solo contener los números enteros, cuando se haga la impresión en pantalla, tampoco aparecerá el dato real, 
Para evitar este tipo de problemáticas es necesario considerar que la biblioteca que maneja los tipos de archivos por el standard ANSI es <stdio.h> como lo menciona Bonet para las entradas y salidas que encuentran declaradas en el archivo de cabecera , es necesario incluir dicho archivo (s/f, p.42).
c. Problemas técnicos de una variable no declarada
Las principales consideraciones son 
- Para poder asignar una cantidad de espacio de memoria, es necesario asignarle un tamaño, algo que sería imposible si no tiene el espacio adecuado como son según lo dice TylerMSFT 1byte para char, 4 bytes para un int, 4 bytes para un float (Microsoft, 2025), de tal manera que si los datos, exceden la memoria, surge un error en el compilador
- Las variables no declaradas no pueden ser utilizadas pues es necesario indicarle al programa el nombre "para que éste reserve en memoria el espacio adecuado y la referencia" (DCEIT, s/f, p. 15), de lo contrario, sería una referencia a una variable inexistente, haciendo imposible cualquier operación aritmética o uso de la misma
- Al generar la tabla de referencias, cuando se utiliza una variable no declarada, se genera la primer referencia, que en caso de que no haya sido declarada, el compilador arrojará un error al ser el primer uso, pero sin declaración.
- Falta de dependencias, también en caso de que no se estén considerando el archivo que permite el uso de entradas/salidas no se permitiría el uso de los valores de las variables, por lo que también puede causar un problema, aunque se hayan declarado correctamente.

Referencias 
Variables en C. (s/f). StudySmarter ES. Recuperado el 5 de febrero de 2026, de https://www.studysmarter.es/resumenes/ciencias-de-la-computacion/programacion-de-computadoras/variables-en-c/
FAMAF (2016). Programación 1. Edu.ar. Recuperado el 5 de febrero de 2026, de https://cs.famaf.unc.edu.ar/~hoffmann/prog16/semana13.html
Marketing. (2025, mayo 30). ¿Qué es Camel Case? MSMK. https://msmk.university/que-es-camel-case/
DCEIT (s/f) Unidad 2. Introducción al lenguaje C. Recuperado el 6 de febrero de 2026, de https://dmd.unadmexico.mx/contenidos/DCEIT/Compartidas/FPR/U2/descargables/FPR_U2_Contenido.pdf
Enrique Vicente Bonet Esteban (S/f). Lenguaje C. Recuperado el 6 de febrero de 2026, de https://informatica.uv.es/estguia/ATD/apuntes/laboratorio/Lenguaje-C.pdf
TylerMSFT. (2025). _Almacenamiento de tipos básicos_. Microsoft.com. Recuperado el 7 de febrero de 2026, de https://learn.microsoft.com/es-es/cpp/c-language/storage-of-basic-types?view=msvc-170

Respuesta a
[MONICA ALEXA CALZADILLA BUENROSTRO](https://campus.unadmexico.mx/user/view.php?id=20593&course=378) - lunes, 26 de enero de 2026, 09:35

Número de respuestas: 0

Buen día a todos en el foro mi nombre es Mónica Alexa Calzadilla Buenrostro, es un gusto saludarlos y participar en esta actividad. A continuación, presento mi aporte respondiendo a las preguntas sobre los temas planteados. Espero que mi aporte ayude a enriquecer el tema, quedo atenta sus retroalimentaciones.

**a.    Compara los datos. "El saldo de una cuenta bancaria" y "La CURP”; para asignarles un tipo de dato adecuado en lenguaje C y un nombre de identificador que cumpla con las reglas de legibilidad. Después justifica porqué uno de estos elementos debe definirse como variable y el otro como constante.**

Para gestionar la información de manera correcta en el lenguaje C, es necesario elegir categorías que representen fielmente la naturaleza de la información, por lo que el saldo de una cuenta bancaria debe clasificarse como un tipo de dato float o double, permitiendo el uso de decimales para los centavos, como ejemplo se le puede asignar el identificador: saldo_cuenta, el cual resulta fácil de leer y respeta las normas de nomenclatura. Por otro lado, la CURP se maneja como un arreglo de caracteres o char, ya que consiste en una cadena alfanumérica, como ejemplo se podría asignar un identificador descriptivo como: curp_usuario (Cairó, 2006; Márquez et al., 2011).

La diferencia entre ambos radica en que el saldo se define como una variable, pues es un valor que se modifica constantemente debido a los depósitos y retiros realizados, en cambio, la CURP funciona como una constante dentro del proceso de un usuario específico, ya que es un dato que no cambia durante la ejecución de las operaciones del programa (Cairó, 2006; Márquez et al., 2011).

**b.    Explica el conflicto que surge al intentar procesar un precio con centavos dentro de una variable para números enteros (int precio = 15.50;), considerando la desaparición de los decimales por el efecto de truncamiento del compilador y la importancia de la biblioteca adecuada para informar el resultado final al usuario.**

Al intentar almacenar un valor con decimales en una categoría destinada únicamente a números enteros, como en el caso de int precio = 15.50; ocurre un fenómeno conocido como truncamiento, donde el compilador simplemente descarta la parte fraccionaria sin redondear el número, dejando únicamente el valor 15 almacenado, por lo que esto provoca una pérdida de información que altera el costo real del producto, haciendo necesario el uso de la biblioteca stdio.h para gestionar la salida de datos. Dicha herramienta permite informar al usuario el resultado mediante funciones de impresión que, si se configuran con el formato adecuado, evitan la visualización de datos erróneos derivados de una mala elección en el tipo de origen (Cairó, 2006; Márquez et al., 2011).

**c.     Explica con claridad y precisión los problemas técnicos que enfrentaría un compilador al intentar interpretar una variable antes de conocer su origen o biblioteca, fundamentando su análisis en la jerarquía de lenguaje C y la prevención de errores en el contexto indicado**.

El proceso de traducción de un código enfrenta problemas técnicos si intenta procesar una variable antes de conocer su origen, principalmente porque el compilador necesita la declaración previa para saber exactamente cuántos bits de memoria debe reservar en el sistema, ya que un entero no ocupa el mismo espacio que un número real o un carácter. Basándonos en la jerarquía del lenguaje C, es indispensable que el programa esté enterado de la existencia de cada elemento antes de su uso, ya sea mediante declaraciones locales o el uso de archivos de cabecera que funcionen como prototipos

Sin esta información, el sistema es incapaz de prevenir errores léxicos o sintácticos, impidiendo que el enlazador o linker conecte los segmentos de código con las bibliotecas correspondientes, lo que detiene la creación de un archivo ejecutable funcional (Menchaca, 2002; Cairó, 2006).

**Referencias**

Cairó, O. (2006). _Fundamentos de programación. Piensa en C._ Pearson Educación.

Márquez, T. G., Osorio, S., y Olvera, E. N. (2011). _Introducción a la programación estructurada en C._ Pearson Educación.

Menchaca, F. R. (2002). _Fundamentos de programación en lenguaje C._ Instituto Politécnico Nacional.

Mi respuesta:
Me resulta interesante que en cuanto a la conveniencia de asignación de variables utilizaste KebabCaseLower cuyas características sib "Las palabras están separadas por caracteres de subrayado. Todos los caracteres están en minúsculas." (Personalización de los nombres y valores de propiedades con System.Text.Json, 2025) y en cuanto a legibilidad, también cumple la función, en cambio con camelCase que propuse, si hay una ligera diferencia, ya que tu propuesta es más cercana al lenguaje, siendo el guión, similar al espacio. 
Me da confianza al darme cuenta de que las consideraciones tanto de las librerías, como de la declaración de variables, se asimilan bastante comparando mis respuestas.
Después de todo, la programación es un proceso matemático, y como en dicha materia, hay varias maneras de llegar al mismo resultado, lo que hace que eventualmente surjan diferencias mínimas, que no afectan el funcionamiento, solo cambia la legibilidad.

Referencias
_Personalización de los nombres y valores de propiedades con System.Text.Json_. (2025). Microsoft.com. Recuperado el 7 de febrero de 2026, de https://learn.microsoft.com/es-es/dotnet/standard/serialization/system-text-json/customize-properties