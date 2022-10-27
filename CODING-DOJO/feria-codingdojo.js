var Laltura = 52 //Limite de altura definido = 1.60 (1 metro 60 centimetros)
var Ledad = 16     //Lmite de edad definido = 16 años
var altura = Math.floor(Math.random() * 100); // altura del visitante
var edad = Math.floor(Math.random() * 50); // edad del visitante
var check = 0
console.log(altura, edad);
if (Laltura > altura) {   // si el limite de altura es mayor al del visitante arroja una negativa 
    console.log('no cumples con el limite de altura, Lo siento, chico. Tal vez el próximo año');
    check++ // aqui se agrega un 1 al check para la comprobacion final
}    
if (Ledad > edad) { // si el limite de edad es mayor al del visitante arroja una negativa 
    console.log('no cumples con el limite de edad, Lo siento, chico. Tal vez el próximo año');
    check++ // aqui se agrega un 1 al check para la comprobacion final
}
console.log(check)
if (check == 0) { // si el check es igual a 0 arroja una positiva si es diferente a 0 arroja una negativa
    console.log('"¡Súbete, chico!" '); // felicidades¡¡

};
 


























//eduardo vial rosales