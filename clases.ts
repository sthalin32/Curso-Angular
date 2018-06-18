class Calculadora{
     numero:number;
    constructor(valor:number){
           console.log("iniciando calculadora...");
           this.numero=valor;
           console.log(this.numero);
    }
     sumar(){
         return this.numero+ this.numero;
    }

}

let calA =new Calculadora(10);

console.log(calA.sumar());
let calB=new Calculadora(15);
console.log(calB.sumar());