

animales = ["🐶","🐱","🐭","🐘","🐍"]
colores = ["🟥","🟦","🟩","🟨","🟧","🟫","⬛","⬜"]

console.log(animales, colores);

console.log(animales.concat ("vaca"), {nombre: "vaca"});
console.log(animales.concat(colores)); // Une los dos arrays
console.log([animales, colores]); //crea un array de arrys

console.log(animales.pop()); //Quita el ultimo elemento y lo devuelve
console.log(animales);

console.log(animales);
console.log(animales.push("🐮")); //añade un elemento al final y devuelve la nueva longitud al array
console.log(animales);

//shift() y unshift() hacen lo mismo que pop y push, pero al principio
console.log(colores.shift());
console.log(colores.unshift());
console.log(colores.unshift("🟪"));
console.log(colores);

//flat () une en un unico array el array y sus subarrays

colores = ["🟥",["🟦",["🟩","🟨"]],"🟧",["🟫","⬛",],"⬜"]
console.log(colores);
console.log(colores.flat());
console.log(colores.flat(2)); //niveles de subarrays
console.log(colores.flat(Infinity)); // quita todos los subniveles a piñon


//Metodos de ordenacion

numbers = ["One","Two","Three","Four","Five","Six","Seven",]

console.log(numbers);
numbers.sort()
console.log(numbers.toReversed());











