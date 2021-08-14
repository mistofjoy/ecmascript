//PARAMETROS POR DEFECTO
//Parametros por defecto antes de ES6
function newFunction(name, age, country) {
    var name = name || "Oscar";
    var age = age || 32;
    var country = country || "Mexico";
    console.log(name, age, country);
}

//Parametros por defecto luego de ES6
function newFunction2(name = "Oscar", age = 32, country = "Mexico") {
    console.log(name, age, country);
}

newFunction();
newFunction2();
newFunction2("ricardo", 23,"colombia");


//CONCATENACION
//Concatenacion antes de ES6
let hello = "Hello";
let world = "world";
let epicphrase = hello + " " + world + "!";
console.log(epicphrase);

//Concatenacion luego de ES6
let epicphrase2 = `${hello} ${world}!`;
console.log(epicphrase2);


//MULTILINEA
//Multilinea antes de ES6
let lorem = "Esta podria ser una frase epiquisima de \n"
+ "2 lineas!";
console.log(lorem);

//Multilinea luego de ES6
let lorem2 = `Esta podria ser una frase epiquisima de
2 lineas!`;
console.log(lorem2);


//DESESTRUCTURACION DE ELEMENTOS
//Desestructuracion antes de ES6
let person = {
    name: 'Oscar',
    age: 32,
    country: 'Mexico'
}
console.log(person.name, person.age, person.country);

//Desestructuracion luego de ES6
let {name, age, country} = person;
console.log(name, age, country);


//SPREAD OPERATOR (Nace con ES6)
let team1 = ['oscar', 'julian', 'ricardo'];
let team2 = ['valeria', 'yessica', 'camila'];

let education = ['david', ...team1, ...team2];
console.log(education);


//LET (Nace con ES6)
{
    var globalVar = "I am global var";
}

{
    let globalLet = "I am global let";
    console.log(globalLet);
}

console.log(globalVar);
console.log(globalLet);

//CONST (nace con ES6)
const a = "b";
const a = "a";
console.log(a);


//PARAMETROS EN OBJETOS
//Parametros en objetos antes de ES6
let name = "Oscar";
let age = 32;

obj = {
    name: name,
    age: age
}
console.log(obj);

//Parametros en objetos luego de ES6
obj2 = {
    name,
    age
}
console.log(obj2);


//ARROW FUNCTION
let names = [
    { name: "Oscar", age: 32 },
    { name: "Yessica", age: 18 }
]

//Funciones discretas antes de ES6
let listOfNames = names.map(function(item) {
    console.log(item.name);
})

//funciones discretas luego de ES6
let listOfNames2 = names.map(item => console.log(item.name))

//Funciones comunes con arrow function
const listOfNames3 = (name, age) => {
    console.log(name, age);
}

listOfNames3("Oscar", 32);

//funciones sin parametros
const hello = () => {
    console.log("Hello World!");
}

hello();

//funciones con un solo parametro
const edad = age => {
    console.log(`Tengo ${age} anos de edad`);
}

edad(26);

//Funciones con una sola linea de codigo y sin variable
const edad2 = () => console.log(`mi nombre es jhonkar`);

edad2();

//funciones con una sola linea de codigo y con variables
const edad3 = age => console.log(`Tengo ${age} anos de edad`);

edad3(26);


//PROMESAS
const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if(true) {
            resolve(`Hey!`);
        } 
        else {
            reject(`Ups!!`);
        }
    })
}

helloPromise()
    .then(response => console.log(response))
    .then(() => console.log("hola"))
    .catch(error => console.log(error));


//CLASES
class Calculator {
    constructor () {
        this.valueA = 0;
        this.valueB = 0;
    }
    sum (valueA, valueB) {
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
}

const calc = new Calculator();
console.log(calc.sum(2,3));


//MODULOS
import { hello } from './module';

hello();
