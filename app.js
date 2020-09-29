//modulo externo
let popularMovieQuotes = require('popular-movie-quotes');

//console.log(popularMovieQuotes.getAll());

//modulo nativo
let fs = require('fs');

//console.log(fs);

//modulo propio

let sumar = require('./sumar');
let calculadora = require('./calculadora');
console.log(sumar(2300, 230))

console.log(calculadora.dividir(10, 2))
