
// funcion que le pasemos un DNi y nos lo devuelva Ofuscado

function dniOfuscado(dni) {
    dni = "12345678A"

return dni.slice(4).padStart(9, "X").slice(0,-2).padEnd(9, "X"); 
}

console.log(dniOfuscado ("12345678A"));


//Funcion que ofusque Dni guardado en una variable

dni = "987654321B"

function ofuscadarDni() {
    let ofus
    ofus = dni.slice(4).padStart(9, "X").slice(0,-2).padEnd(9, "X");
    dni = ofus
}

ofuscadarDni();
console.log(dni);

//Una funcion a la que le pases un array de dos elementos y te devuelva un array invertido
gatigos = ["🐱","🐶"]
console.log(gatigos);

function inverte(gatigos) {
   return gatigos.reverse();

}

console.log(inverte(gatigos));

