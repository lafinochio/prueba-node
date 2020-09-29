let usuario = {
    nombre: 'luca',
    apellido: 'Finochio',
    saludar: function() {
        return 'hola, mi nombre es ' + this.nombre + ' ' + this.apellido
    }
}

console.log(usuario.saludar())