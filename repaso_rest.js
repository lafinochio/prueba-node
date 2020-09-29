let unObjeto = {
    genero: 'femenino',
    esLaNumeroUno: true
}

let ella = {
    nombre: 'leia',
    apellido: 'organa',
    ...unObjeto

}
console.log(ella)

console.log('')
console.log('-------------------------------------')
// rest parameter

function sumar(n1, n2, ...numeros) {
    return n1 + n2 + numeros.reduce((acumulador, elemento) => acumulador + elemento, 0)
}
console.log(sumar(1, 2, 3, 4, 5, 6, 7))