//OBJECT.ENTRIES()
const data = {
    frontend: "Oscar",
    backend: "Isabel",
    Design: "Ana",
}

const entries = Object.entries(data);
console.log(entries);
console.log(entries.length);


//OBJECT.VALUES()
const data = {
    frontend: "Oscar",
    backend: "Isabel",
    Design: "Ana",
}

const values = Object.values(data);
console.log(values);


//PAD
const string = "hello";
console.log(string.padStart(7,"hi"));
console.log(string.padEnd(12, " -----"));
console.log("food".padEnd(12, " -----"));


//ASYNC AWAIT
const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
        ? setTimeout(() => resolve('Hello World'), 3000)
        : reject(new Error ('test error'))
    })
}

const helloAsync = async () => {
    const hello = await helloWorld();
    console.log(hello);
}

helloAsync();


//ASYNC TRY-CATCH
const anotherFunction = async () => {
    try {
        const hello = await helloWorld();
        console.log(hello);
    }
    catch (error) {
        console.log(error);
    }
}

anotherFunction();