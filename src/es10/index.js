//ARRAY.FLAT()
let array = [1, 2, 3, [1, 2, 3, [1, 2, 3]]];

console.log(array.flat(2));


//ARRAY.FLATMAP()
let array = [1, 2, 3, 4, 5];

console.log(array.flatMap(value => [value, value * 2]));


//STRING.TRIMSTART()
let hello = `        Hello World`;

console.log(hello.trimStart());


//STRING.TRIMEND()
let hello = `Hello World        `;

console.log(hello.trimEnd());


//OBJECT.FROMENTRIES()
let entries = [["name", "oscar"], ["age", 32]];
console.log(Object.fromEntries(entries));


//OBJETO DE TIPO SIMBOLO
let mySymbl = `My Symbol`;
let symbol = Symbol(mySymbl);
console.log(symbol.description);