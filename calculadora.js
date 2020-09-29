let calculadora = {
    sumar : function(n1, n2) {
        return n1 + n2;
    },
    restar : function(n1, n2) {
        return n1 - n2;
    },
    multiplicar : function(n1, n2) {
        return n1 * n2;
    },
    dividir : function(n1, n2) {
        return n1 / n2;
    },
    resto : function(n1, n2) {
        return n1 % n2;
    }
    
    
    
}

let calcu = (n1, n2, operacion) => operacion(n1, n2)
module.exports = calculadora




console.log(calcu(18, 3, calculadora.sumar))