"use strict";

var corredor = 0; // declaramos la variable del corredor

var caramelo = 0; // declaramos la variable del caramelo

var conteo = 0; // declaramos la variable del conteo para el caramelo

var kilometros = 0; // declaramos la variable de los kilmetros

while (kilometros < 10) {
  // mientras kilometos sea menor a 10 el bucle continua
  corredor++; // aqui el corredor auamenta mas 1 con cada vuelta

  kilometros++; // aqui el kilometro aumenta mas 1 con cada vuelta

  conteo++; // aqui el conteo aumenta mas 1 con cada vuelta

  if (conteo == 3) {
    // si el conteo es  igual a 3 
    caramelo++; // agrega un mas 1 a caramelo

    conteo = 0; // conteo se reseta a 0

    if (caramelo > 3) {
      caramelo = 3;
    }
  }

  console.log(" el corredor: ", corredor, "los kilometros; ", kilometros, "los caramelos: ", caramelo); // se imprime las variables
}