console.log("Estoy corriendo")

//Declaracion de Variables
let nombre = "Juan" //Esto declara una variable   hay que usarlo es mejor
var apellido = "Perez" //Esto declara una variable
const PI = 3.1416; //Esto declara una constante      y const para declarar variables

//La Difrencia entre LET y VAR tiene que ver con SCOPE
funcionmuyimportante(x);
var x = "valor impor a pasar de funcion";

//Tipos de datos
//String
let cadena = "Hola Mundo";

//Number
let numero = 10;

//boolean
let boolean = true;

// array
let array = ["Juan", "Pedro", "Maria"]

//Ciclos
//For
for (let i = 0; i<10; i++);
{
    console.log(i)
}

//While
let bandera = true;
let contador = 0;
while (bandera){
    contador++
    console.log(contador);
    if (contador === 10){
        bandera=false;
    }
}


//Operadores
let modulo = 1 % 1;
let igual = 1 == 1;
let identico = 1 === 1;


//Logicos 
let and = true && true;
let or = true || false;
let not = !true;

//Condicionales
//If
if (true){
    console.log
}


//Funciones
function saludar(){
    console.log("Hola");
}

function suma(a, b){
    return a+b;
}

const sumaFuncion = (a,b) => {return a+b};

//Funciones flechas en cosas que siempre hacemos

//Callback
function operacion (a,b, callback){
    return callback(a,b)
}
