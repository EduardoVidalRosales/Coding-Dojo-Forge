// #1
var arr1 = [8, 6, 7, 5, 3, 0, 9];
// #2
var arr2 = [4, 7, 13, 13, 19, 37, -2];
// #3
var arr3 = [6, 2, 12, 14, -24, 5, 0];

//iterando el array1
console.log("esto es la iteracion del array1")
for(let i=0; i<=arr1.length-1; i++){ // aqui se hace el recorrido del array1
    console.log(arr1[i]); // aqui se imprime la iteracion del array1
}
//iterando el array2
console.log("esto es la iteracion del array2")
for(let i=0; i<=arr2.length-1; i++){ // aqui se hace el recorrido del array2
    console.log(arr2[i]); // aqui se imprime la iteracion del array2
}
//iterando el array3
console.log("esto es la iteracion del array3")
for(let i=0; i<=arr3.length-1; i++){ // aqui se hace el recorrido del array3
    console.log(arr3[i]);// aqui se imprime la iteracion del array3
}
//iterando y sumando i en el array1
console.log("esto es la iteracion y suma del array1")
for(let i=0; i<=arr1.length-1; i++){ // aqui se hace el recorrido del array1
    suma = arr1[i] + i // aqui se hace la suma de la iteracion del array1
    console.log(arr1[i], "esta es la suma", suma ); //aqui se imprime el array y luego la suma del array1
}
//iterando y sumando i en el array2
console.log("esto es la iteracion y suma del array2")
for(let i=0; i<=arr2.length-1; i++){ // aqui se hace el recorrido del array2
    suma = arr2[i] + i // aqui se hace la suma de la iteracion del array2
    console.log(arr2[i], "esta es la suma", suma ); //aqui se imprime el array y luego la suma del array2
}
//iterando y sumando i en el array3
console.log("esto es la iteracion y suma del array3")
for(let i=0; i<=arr3.length-1; i++){ // aqui se hace el recorrido del array3
    suma = arr3[i] + i // aqui se hace la suma de la iteracion del array3
    console.log(arr3[i], "esta es la suma", suma ); //aqui se imprime el array y luego la suma del array3
}
//imprime numeros > 5
console.log("imprimiendo numero mayor a 5 en el array1")
for(let i=0; i<=arr1.length-1; i++){ // aqui se hace el recorrido del array1
    mayor = arr1[i] // aqui se declara como variable arr1[1]
    if (mayor > 5){ // si la variable mayor (arrai[1]) es mayor a 5 se imprime
        console.log(mayor)
    }else{
    }
}
console.log("imprimiendo numero mayor a 5 en el array2")
for(let i=0; i<=arr2.length-1; i++){ // aqui se hace el recorrido del array2
    mayor = arr2[i] // aqui se declara como variable arr2[1]
    if (mayor > 5){ // si la variable mayor (arra2[1]) es mayor a 5 se imprime
        console.log(mayor)
    }else{
    }
}
console.log("imprimiendo numero mayor a 5 en el array3")
for(let i=0; i<=arr3.length-1; i++){ // aqui se hace el recorrido del array3
    mayor = arr3[i] // aqui se declara como variable arr3[1]
    if (mayor > 5){ // si la variable mayor (arra3[1]) es mayor a 5 se imprime
        console.log(mayor)
    }else{
    }
}
console.log(" no hay datos > 5 en el array3")
for(let i=0; i<=arr3.length-1; i++){ // aqui se hace el recorrido del array3
    mayor = arr3[i] // aqui se declara como variable arr3[1]
    if (mayor > 5){ // si la variable mayor (arra3[1]) es mayor a 5 se imprime
        console.log(mayor)
    }else{
        console.log("no hay datos") //caso contrario imprime no hay datos
    }
}