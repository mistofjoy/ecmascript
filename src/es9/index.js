//OPERADOR DE REPOSO
const obj = {
    name: "Oscar",
    age: 32,
    country: "MX",
};

let {name, ...all} = obj;
console.log(name, all);


//PROPIEDADES DE PROPAGACION
const obj1 = {
    name: "Oscar",
    age: 32,
}

const obj2 = {
    ...obj1,
    country: "MX",
};

console.log(obj2);


//PROMISE.FINALLY
const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true) 
            ? setTimeout(() => resolve("Hello World"), 3000) 
            : reject(new Error("Test error"));
    })
};

helloWorld()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log("Se completo la promesa"));


//ACCESO INDIVIDUAL A BLOQUES DE UN REGEXP (EXPRESIONES REGULARES)
const regexpData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexpData.exec('2018-04-20');
const year = match[1]
const month = match[2]
const day = match[3]

console.log(year, month, day);