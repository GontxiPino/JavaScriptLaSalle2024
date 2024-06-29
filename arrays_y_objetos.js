console.log("Aquest es el JS d'Arrays");

data = ["dog", "🐈", "23", false];

dog = "🐶";
cat = "🐱";
racoon = "🦝";
pig = "🐷";
koala = "🐨";

animals = [dog, cat, racoon, pig, koala];

console.log(data);

console.log(animals);

console.log(data[1]); //podem accedir als elements d'un array usant el seu INDEX

console.log("l'array data conte " + data.length + " elements");

console.log(`l'array data conte ${data.length} elements`); // length es una PROPIEDAD dels arrays

//---------------------------------------------------------------------------------------------------

alumne = {
  nom: "Gonzalo",
  cognom: "Pino",
  edat: 41,
  hobbie: "🎮",
};

console.log(alumne);

alumne.edat = 46;
edatGonzalo = alumne.edat;

console.log(
  `El ${alumne.nom} ${alumne.cognom} te ${alumne.edat} i li agrada ${alumne.hobbie}`
);

profe = {};
console.log(profe);

profe.nom = "omar";
profe.edat = 33;

console.log(profe);

alumnes = [
  alumne,
  {
    nom: "Pablo",
    cognom: "Perez",
    edat: 35,
    hobbie: "🤑",
  },
  {
    nom: "Maria",
    cognom: "Juana",
    edat: 45,
    hobbie: "👾",
  },
];

console.log(alumnes);

//------------------------------------------------------------------------------------------------------

// TODO: cread un array con 5 objetos dentro que tengan las mismas 4 propiedades
// TODO: cread un array que contenga una lista de una de las propiedades de los objetos
// TODO: cread una variable que contenga la suma de una propiedad (que sea numérica)
// TODO: mostrar por consola todo lo anterior
// TODO: mostrar por consola una frase que resuma las propiedades de cada objeto
// TODO: buscad una manera de mostrar por consola todos los objetos en forma de tabla

// 1. Crear un array con 5 objetos
let pokemon = [
  { nombre: "Charmander", tipo: "Fuego", nivel: 13, evolucion: "Charmeleon" },
  { nombre: "Bulbasaur", tipo: "Planta", nivel: 16, evolucion: "Ivysaur" },
  { nombre: "Squirtle", tipo: "Agua", nivel: 23, evolucion: "Wartortle" },
  { nombre: "Pikachu", tipo: "Electrico", nivel: 1, evolucion: "Raichu" },
  { nombre: "Eevee", tipo: "Normal", nivel: 5, evolucion: "Vaporeon" },
];

// 2. Crear un array con una lista de una de las propiedades
let tipos = pokemon.map((p) => p.tipo);

// 3. Crear una variable que contenga la suma de una propiedad numérica
let sumaNivel = pokemon.reduce((acum, p) => acum + p.nivel, 0);

// 4. Mostrar por consola todo lo anterior
console.log(pokemon);
console.log(tipos);
console.log(`Suma total de niveles: ${sumaNivel}`);

// 5. Mostrar por consola una frase que resuma las propiedades de cada objeto
pokemon.forEach((p) =>
  console.log(
    `${p.nombre} es de tipo ${p.tipo}, nivel ${p.nivel}, evoluciona a ${p.evolucion}.`
  )
);

// 6. Buscar una manera de mostrar por consola todos los objetos en forma de tabla
console.table(pokemon);
