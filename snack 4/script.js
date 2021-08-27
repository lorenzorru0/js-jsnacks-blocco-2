//Crea un array di numeri interi
//e fai la somma di tutti gli elementi che sono in posizione(indice dell'array) dispari
var lenghtArray = 10;
var array = [];
var somma = 0;
for (var i = 0; i < lenghtArray; i++) {
    var numeroCasuale = parseInt(Math.floor(Math.random() * (lenghtArray * 4)));
    array.push(numeroCasuale);
    document.getElementById("array").innerHTML += array[i] + ', ';
    if (i % 2 != 0) {
        somma += array[i];
    }
}
document.getElementById("somma").innerHTML += somma;
