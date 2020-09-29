


//let unJson = {
    //'nombre' : 'Leia',
    //'apellido' : 'organa'


//}
//console.log(unJson)

// para escribir en json == a objeto literal con ""
let unObjeto = {
    nombre: 'luca',
    apellido: 'finochio'
}
let ahoraEstoEsJson = JSON.stringify(unObjeto);
console.log(ahoraEstoEsJson)

//de JSON a algo que pueda manipular en JS

let transformado = JSON.parse(ahoraEstoEsJson)
console.log(transformado)
