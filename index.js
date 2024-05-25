//RESUELVE LOS EJERCICIOS AQUI
//EJERCICIOS MAP
//1. Dado el array numbers cuyo valor sea [4, 5, 6, 7, 8, 9, 10], 
//crea una función elevados que devuelva un array con cada elemento elevado a sí mismo.
const numbers = [4, 5, 6, 7, 8, 9, 10];
const elevados = () => {
  const arrayFinal = numbers.map(elemento => Math.pow(elemento, elemento));
  return arrayFinal;
};

//2. Dado el array foodList, generar un segundo array llamado result2 
//que consiga generar de salida el siguiente resultado 
//['Como soy de Italia, amo comer Pizza', 'Como soy de Japón, amo comer Ramen', 
//'Como soy de Valencia, amo comer Paella', 'Aunque no como carne, el Entrecot es sabroso']

const foodList = ['Pizza', 'Ramen', 'Paella', 'Entrecot'];
const frases = [
  'Como soy de Italia, amo comer ',
  'Como soy de Japón, amo comer ',
  'Como soy de Valencia, amo comer ',
  'Aunque no como carne, el . es sabroso'
];

let result2;
const generarArrayFoodList = () => {
  result2 = foodList.map((elemento) => {
    if (elemento === 'Pizza') {
      return frases[0].concat(elemento);
    } else if (elemento === 'Ramen') {
      return frases[1].concat(elemento);
    } else if (elemento === 'Paella') {
      return frases[2].concat(elemento);
    } else {
      return frases[3].replace('.', elemento);
    }
  });
  return result2;
};

console.log(generarArrayFoodList());



//3.Dado el array staff, generar un segundo array staffDescriptions con el siguiente resultado 
//[ 'Pepe es The Boss y le gusta leer y ver pelis', 'Ana es becaria y le gusta nadar y bailar', 
//'Luis es programador y le gusta dormir y comprar', 'Carlos es secretario y le gusta futbol y queso' ]
const staff = [
    {
      name: 'Pepe',
      role: 'The Boss',
      hobbies: ['leer', 'ver pelis']
    },
    {
      name: 'Ana',
      role: 'becaria',
      hobbies: ['nadar', 'bailar']
    },
    {
      name: 'Luis',
      role: 'programador',
      hobbies: ['dormir', 'comprar']
    },
    {
      name: 'Carlos',
      role: 'secretario',
      hobbies: ['futbol', 'queso']
    }
  ];

let result3;
  const creadorDeFrases = () => {
    result3 = staff.map((elemento) => {
      return `${elemento.name} es ${elemento.role} y le gusta ${elemento.hobbies[0]} y ${elemento.hobbies[1]}`
    })
    return result3;
};
console.log(creadorDeFrases());

//FILTER
//4.Crea un segundo array result4 a partir del array numbers2 que devuelva solo los impares
const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let result4;
const arrayImpares = () => {
  result4 = numbers2.filter((elemento) => {
    return elemento % 2 !== 0;
  });
  return result4;
};

console.log(arrayImpares());


//5.  Dado el array foodList2, genera un segundo array result5 
//que filtre los platos veganos y saque una sentencia como la del ejemplo:
//['Que rico Tempeh me voy a comer!', 'Que rica Tofu burguer me voy a comer!']
 const foodList2 =[
 {
   name: 'Tempeh',
   isVeggie: true
 },
 {
   name: 'Cheesbacon burguer',
   isVeggie: false
 },
 {
   name: 'Tofu burguer',
   isVeggie: true
 },
 {
   name: 'Entrecot',
   isVeggie: false
 }];

 let result5; 
const filtroVeggie = () => {
    result5 = foodList2
    .filter((elemento) => elemento.isVeggie === true)
    .map((elemento) => {
      if (elemento.name === 'Tempeh') {
        return `Que rico ${elemento.name} me voy a comer!`;
      } else {
        return `Que rica ${elemento.name} me voy a comer!`;
      }
    });
  return result5;
};
console.log(filtroVeggie());

// 6.Dado el array inventory,  devolver un array result 6 con los nombres 
//de los elementos que valgan más de 300 euros
 const inventory = [
   {
     name: 'Mobile phone',
     price: 199
   },
   {
     name: 'TV Samsung',
     price: 459
   },
   {
     name: 'Viaje a Cancún',
     price: 600
   },
   {
     name: 'Mascarilla',
     price: 1
   }
 ];

 let result6;
 const filtroEuros = () => {
  result6 = inventory.filter((elemento) => elemento.price > 300).map(elemento => elemento.name);
  return result6;
 };
 console.log(filtroEuros());
 
 
 //REDUCE
//7.Dado el siguiente array numeros [39, 2, 4, 25, 62], obten la multiplicación de todos los elementos del array
const numeros3 = [39, 2, 4, 25, 62];
let result7;
const multiplicacion = () => {
  result7 = numeros3.reduce((acumulador, valorActual) => acumulador * valorActual);
  return result7;
};
console.log(multiplicacion());

//8.Concatena todos los elementos del array con reduce para que devuelva una sola frase en la variable result8

 const sentenceElements = [
   'Me',
   'llamo',
   'Sergio',
   'y',
   'quiero',
   'sentir',
   'la',
   'fuerza',
   'con',
   'javascript'
 ];
 let result8;
 const concatenador = () => {
   result8 = sentenceElements.reduce((elemento, siguiente) =>
    elemento.concat(' ', siguiente).toString()
  );
  return result8;
};
console.log(concatenador());
 
 // Resultado--> 'Me llamo XX y quiero sentir la fuerza con javascript'
 
//9.Obtener el monto total de los elementos que pertenecen a catergory "code" en la variable result9.
 const books = [
   {
     name: ' JS for dummies',
     author: 'Emily A. Vander Veer',
     price: 20,
     category: 'code'
   },
   {
     name: 'Don Quijote de la Mancha',
     author: 'Cervantes',
     price: 14,
     category: 'novel'
   },
   {
     name: 'Juego de tronos',
     author: 'George R. Martin',
     price: 32,
     category: 'Fantasy'
   },
   {
     name: 'javascript the good parts',
     author: 'Douglas Crockford',
     price: 40,
     category: 'code'
   }
 ];

let result9;
const montoTotal = () => {
  result9 = books
    .filter((elemento) => elemento.category === 'code')
    .reduce((acumulador, valorActual) => acumulador.price + valorActual.price);
  return result9;
};

console.log(montoTotal());


 // Resultado --> 60
 