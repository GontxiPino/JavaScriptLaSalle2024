console.log("metodos arrays i strings");

text =
  "     Aquesta es una string que ha escrit l'Omar per fer exercicis de metodes     ";

//TODO Usar metodos trim(), pad... (), replace(),replaceAll(),splt(),to...Case() y slice()

console.log();
//Trim ()
console.log(text.trim());

//pad()
text =
  "     Aquesta es una string que ha escrit l'Omar per fer exercicis de metodes ";

console.log(text.padStart(82, "holis"));

console.log(text.padEnd(82, "holis"));

//replace ()

text = "Aquesta es una string que ha escrit Omar per fer exercicis de metodes";
console.log(text.replace("Omar", "El Profe"));

//split

//to...Case

//slice

//TODO Crear una frase que censure el nombre OMAR

text =  "     Aquesta es una string que ha escrit l'Omar per fer exercicis de metodes     ";
//console.log(text.trim().replace("Omar", "****"));




//console.log(text = text.indexOf("Omar"));
let text = text.replace(/43/g, "*****");


console.log(text = text.replace("43","*******"));