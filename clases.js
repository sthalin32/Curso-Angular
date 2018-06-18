"use strict";
var Calculadora = /** @class */ (function () {
    function Calculadora(valor) {
        console.log("iniciando calculadora...");
        this.numero = valor;
        console.log(this.numero);
    }
    Calculadora.prototype.sumar = function () {
        return this.numero + this.numero;
    };
    return Calculadora;
}());
var calA = new Calculadora(10);
console.log(calA.sumar());
var calB = new Calculadora(15);
console.log(calB.sumar());
