
let fs = require('fs')
let jsonDeTareas = fs. readFileSync('./tareas.json', 'utf-8')
let listaFinal = JSON.parse(jsonDeTareas)

let listaDeTareas = [
    {
        titulo: 'Repasar JSON',
        estado: 'realizado'
    },
    {
        titulo: 'Repasar JS',
        estado: 'pendiente'
    },
    {
        titulo: 'repasar python',
        estado: 'pendiente'
    },
]

function imprimirTitulos(tareas) {
    console.log('')
    console.log('Estas son tus tareas pendientes')
    console.log('Estas son todas las tareas')
    for(let i = 0; i < tareas.length; i++) {
        console.log((i+1) + '. ' + tareas[i].titulo)
    }
}
imprimirTitulos(listaDeTareas)

function enEstadoPendiente(tareas) {
    console.log('')
    console.log('Estas son tus tareas pendientes')
    console.log('-------------------------------')
    
    
    let tareasFiltradas = tareas.filter(function(elemento) {
        return elemento.estado == 'pendiente'
    })

    let contador = 1

    for(let elemento of tareasFiltradas) {
        console.log(`${contador}. ${elemento.titulo}`)
        contador++
    }
    //for(let i = 0; i < tareas.length; i++) {
    //    if(tareas[i].estado == 'pendiente') {
    //        console.log((i+1) + '. ' + (tareas[i].titulo))
    //    } 
    //}

}
enEstadoPendiente(listaDeTareas)

console.log(fs.readFileSync('./saludar.txt', 'utf-8'))



console.log(listaFinal)
//console.log(tareasFiltradas)