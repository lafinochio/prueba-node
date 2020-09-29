// let sumar = function(n1, n2) {
//    return (n1 + n2)
//}

let sumar = (n1, n2) => n1 + n2

console.log (sumar(2, 4))

// si la funcion tiene if o mas de 1 parametro

let suma = (n1, n2) => {return n1 + n2}

console.log (suma(2, 4))

// Arrays

let numero = [1, 2, 3, 4]
let retorna = numero.pop()
let retorna1 = numero.unshift(0)
let retorna2 = numero.shift()
numero.push(5)
console.log (numero)

console.log(numero.join(", "))

console.log( numero.indexOf(3))

console.log(numero.includes(2))
if (numero.includes(2)) {
    console.log('claro papu')
}

let numero_mas_uno = numero.map(function(elemento) {
    return elemento + 1

}) // [2, 3, 4, 6]
console.log(numero_mas_uno)

numero.filter
numero.reduce // suma entre si


