console.log("0.datatypes: 👋 Bienvenidos, en este fichero se harán ejercicios sobre los tipos de datos");

//Crear una variable para almacenar tu nombre
var nombre="Marco";
//Crear una variable para almacenar tus apellidos
var apellidos= "Fernandez Barreiro"
//Crear una variable para almacenar tu edad
var edad =20;
//Almacenar en una constante tu nombre y apellidos
const NOMBRE_APELLIDOS="Marco Fernandez Barreiro";
//Mostrar por pantalla "Hola, mi nombre es: " junto con tu nombre y apellidos
console.log("Hola, mi nombre es:"+ NOMBRE_APELLIDOS);
//Muestra por pantalla el valor de una constante vacía
var vacia;
console.log(vacia);
//Muestra por pantalla el valor de una constante sin definir


//Intenta reescribir el valor de la constante con tu nombre y muéstralo por pantalla
nombre="ya no es mi nombre";
console.log(nombre);
//Comprueba el tipo de dato de la variable con tu edad
console.log(typeof edad);
//Crear una variable "mayorDeEdad" de tipo let, iniciarla a false, y si tu edad es mayor o igual a 18 años se le asignará el valor verdadero. Fuera de esa comprobación (fuera del condicional), mostrar el valor de esa variable por pantalla. Dejar un comentario explicando por qué muestra por pantalla el valor que tiene.
let mayorDeEdad = false;
if(edad>=18){
    mayorDeEdad=true;
}

console.log("la variable mayorDeEdad devuelve "+mayorDeEdad);
if(mayorDeEdad){
    console.log("devuelve este dato porque soy mayor de edad");
}else{
    console.log("devuelve este dato porque no soy mayor de edad");
}
//Realizar lo mismo que el enunciado anterior pero con una variable de tipo var
var mayorDeEdad2 = false;
if(edad>=18){
    mayorDeEdad2=true;
}

console.log("la variable mayorDeEdad devuelve "+mayorDeEdad2);
if(mayorDeEdad2){
    console.log("devuelve este dato porque soy mayor de edad");
}else{
    console.log("devuelve este dato porque no soy mayor de edad");
}
//Crear dos variables con números y realizar las 5 operaciones básicas (suma, resta, multiplicación, división y resto de dividir). Mostrar por pantalla el nombre de la operación el, los números y el resultado en cada uno de los casos
var num1=5;
var num2=5;
console.log("Suma de " +num1 + " + "+num2+ "es "+ (num1+num2));
console.log("Resta de " +num1 + " - "+num2+ "es "+ (num1-num2));
console.log("Multiplicación  de " +num1 + " * "+num2+ "es "+ (num1*num2));
console.log("Division  de " +num1 + " / "+num2+ "es "+ (num1/num2));
console.log("Resto de " +num1 + " / "+num2+ "es "+ (num1%num2));
//👹Hardmode (opcional): realizar el caso anterior con un array de operaciones y con un bucle
var operaciones =['+','-','*','/','%'];

for(element of operaciones){

    switch(element){
        case '+':
            console.log("Suma de " +num1 + " + "+num2+ "es "+ (num1+num2));
            break;
        
        case '-':
            console.log("Resta de " +num1 + " - "+num2+ "es "+ (num1-num2));
            break;
        
        case '*':
            console.log("Multiplicación  de " +num1 + " * "+num2+ "es "+ (num1*num2));
            break;
        case '/':
            console.log("Division  de " +num1 + " / "+num2+ "es "+ (num1/num2));
            break;
        case '%':
            console.log("Resto de " +num1 + " / "+num2+ "es "+ (num1%num2));
            break;

        default:
            console.log("Fallo");       
        
    }

}

//Calcular el area de un triángulo dada su base y su altura y mostrar por pantalla el resultado
var base =5;
var altura=2;
console.log("el area del triangulo de base "+base+ " y altura "+ altura+ " es "+ (base*altura/2));
//Calcular el área de una circunferencia para un radio dado
var radio= 3;
console.log("El area de la circunferencia de radio "+ radio+ " es"+ radio*Math.PI);
//Calcular el tiempo de caida libre de un objeto para una determinada masa y altura. Mostrar por pantalla resultado y valores

//Calcular  el volumen de la tierra en base a su diámetro y cuántas veces es mayor el volumen de la tierra que el de la luna (también calculado en base a su diámetro)
