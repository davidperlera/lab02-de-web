// Objects to use

const firstObject = {
    name: "Jose Eduardo",
    birthday: "17/09/2002",
    nationality: "Salvadoran",
    age: 20,
    parents: [
      { name: "Josefina", lastname: "Mendoza" },
      { name: "Pedro", lastaname: "Gonzales" },
    ],
  };
  
const secondObject = {
    occupation: "Student",
    eduactionLevel: "University",
    university: "Universidad centroamericana José Simeón Cañas",
    hobbies: ["Soccer", "VideoGames", "Guitar", "Math"],
};

console.log("----Objetos a utilizar---- \n");
console.log(firstObject, "\n");
console.log(secondObject);

console.log("\n------------------\n");

//------------------- Clonar objetos --------------------------

// Clone an object

const objectClone = { ...firstObject };

// Modify a property of firstObject
firstObject.name = "Jose Jose";

console.log("Clonando objetos \n");
console.log("Objeto clon: \n");
console.log(objectClone);
console.log("\nObjeto modificado: \n");
console.log(firstObject);

console.log("\n------------------\n");

//----------------------------Concatenar Objetos---------------------------

// Concat objects

const concatObject = { ...firstObject, ...secondObject };

console.log("Concatenando objetos \n");
console.log(concatObject);

console.log("\n------------------\n");

// -------------Concatenat y agregar nuevas propiedades--------------------

// Concat and add new properties

const propertiesObject = {
    favoriteColor: "Blue",
    cars: 1,
    ...firstObject,
    ...secondObject,
  };

console.log("Concatenando objetos y propiedades \n");
console.log(propertiesObject);

console.log("\n------------------\n");


//-----------------Spread en funciones


function sumNumbers(...numbers){
    const sum = numbers.reduce((prev, value) => {
        return prev + value;
      }, 0);
      
      console.log(`La suma es ${sum}\n`);
}


console.log("Spread como Rest Parameter \n");
console.log("\nEnviando 3 números \n");
sumNumbers(1, 2, 3);
console.log("\nEnviando 5 números \n");
sumNumbers(1, 2, 3, 4, 5);
console.log("\nEnviando 7 números \n");
sumNumbers(1, 2, 3, 4, 5, 6, 7);

console.log("------------------\n");

//---------------------Como argumentos de funciones

function multiplyNumbers(a, b, c){
    const mult = a * b * c;

    console.log(`La multiplicación es ${mult}\n`);
}

let args = [2, 4, 6];

console.log("Spread como argumentos de una función \n");
console.log("\nEnviando 3 números como argumentos \n");
multiplyNumbers(...args);

args = [2, 4, 6, 8, 10];
console.log("\nEnviando 5 números como argumentos \n");
multiplyNumbers(...args);

console.log("------------------\n");