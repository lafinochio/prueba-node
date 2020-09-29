// for in

let usuario = {
    nombre : 'luca',
    apellido : 'finochio',
    edad : 24
}

for(let laPropiedad in usuario) {
    console.log('mi ' + laPropiedad + ' es ' + usuario[laPropiedad])
}

console.log ('')
console.log ('------------------------------------------------')

let bart = {
    madre: "Marge",
    padre: "Homero",
    hobbie: "Skate",
    colorRemera: "Naranja"
}
for(let a in bart){
    console.log( bart[a])
}
console.log ('')
console.log ('------------------------------------------------')
// for of

let listaDePeliculas = ['kill bill', 'pulp Fiction', 'jackie Brown'];

for(let elemento of listaDePeliculas) {
    console.log(elemento)
}