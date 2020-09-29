//let arrayDeNumeros = [2, 3, 4]

//let nuevoArray = arrayDeNumeros.map(function(elemento){
  //  return elemento + 1

//})
//console.log(nuevoArray)

let arrayDeNumeros = [2, 3, 4]

let nuevoArray = arrayDeNumeros.map(function(elemento, indice, array){
    return 'el elemento ' + elemento + ' ocupa la posicion ' + indice + ' dentro del array ' + array

})
console.log(nuevoArray)