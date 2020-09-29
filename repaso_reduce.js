let arrayDeNumeros = [2, 3, 4];

let resultadoFinal = arrayDeNumeros.reduce(function(acumulador, elemento){
    return acumulador + elemento

}, 0)

console.log(resultadoFinal)

//let resultadoFinal = arrayDeNumeros.reduce(function(callBack, elemento){
//    return callback + elemento

//}, valorInicial)