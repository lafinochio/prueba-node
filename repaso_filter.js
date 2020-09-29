let numeros = [2, 3, 4, 10, 32, 15];

let numeroFiltrados = numeros.filter(function(elemento, posicion, array){
    return elemento >= 10
})

console.log(numeroFiltrados)

console.log(numeroFiltrados.map((elemento) => elemento + 1))
