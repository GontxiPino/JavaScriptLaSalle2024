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
