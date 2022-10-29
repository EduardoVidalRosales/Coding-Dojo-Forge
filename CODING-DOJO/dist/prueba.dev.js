"use strict";

/*
¿Cómo sabemos que necesitamos un bucle aquí?
  Sabemos que va un bucle ya que la tarea es indefinida y repetiviva por lo cual
   hacerlo a mano en las diferentes posibilidades que pueda llegar a tener resulta tedioso y tardado.
¿Cuál es el punto de partida del bucle?
  El punto de partida del bucle sera el 0 ya que el punto de partida del que corra siempre es de 0 km. 
¿Cuándo debe detenerse el bucle?
  cuando llegue al kilometro 10.
¿Cómo sabrá parar?
  Debe tener una condicinal dentro del bucle.
¿Cuál es el incremento para cada iteración del bucle?
 Pueden darse 2 casos segun mi perspectiva :
 1- en donde aumetenta de 3 en 3 km y por cada iteracion se le de el caramelo (lo mas recomendable).
 2- una en donde aumente de 1 en 1 y haga la pregunta con una condicional si es que es multiplo de 3(consume mas rescursos que el otro metodo)
 ¿Qué variables necesitamos?
 Necesitamos las variables de:  caramelos, kilometros y una varable para el iterador(i) 
 Aclaracion: no pongo persona(nomnbre) como varible porque en realidad es pasadp como parametro en la funcion
*/
function LoopDeKm(nombre) {
  var caramelos = 0;
  var kilometros = 0;

  for (var i = 0; i < 9; i = i + 3) {
    console.log(i);
    caramelos = caramelos + 3;
    kilometros = kilometros + 3;
  }

  console.log("El corredor " + nombre + "recorrio " + kilometros + " km" + "y recibio " + caramelos + " caramelos");
}

LoopDeKm("Jose"); // input =>El corredor JOSE recorrio 9 km y recibio 9 caramelos

/*
Característica Stretch 1
Crea un nuevo bucle en el que el corredor solo reciba un caramelo cada 3 kilómetros
 Y si se desplaza a más de 9 kilómetros por hora.
*/

var velocidad = 100;

if (velocidad > 200) {
  var caramelos = 0;
  var kilometros = 0;

  for (var i = 0; i < 9; i = i + 3) {
    caramelos = caramelos + 3;
    kilometros = kilometros + 3;
  }

  console.log("recorrio " + kilometros + " km a 10km/h " + "y recibio " + caramelos + " caramelos");
} // input =>recorrio 9 km a 10km/h y recibio 9 caramelos