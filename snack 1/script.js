//Il software deve chiedere per 5 volte all’utente di inserire un numero.
//Il programma stampa la somma di tutti i numeri inseriti.
//Esegui questo programma in due versioni, con il for e con il while.
var nuovoNumero = 0;
var somma = 0;
for (var i = 0; i < 5; i++) {
    nuovoNumero = parseInt(prompt("Inserisci un numero (for): "));
    somma += nuovoNumero;
}
alert("Somma (for): " + somma);

var nuovoNumero2 = 0;
var somma2 = 0;
var index = 0;
while (index < 5 ){
    nuovoNumero2 = parseInt(prompt("Inserisci un numero (while): "));
    somma2 += nuovoNumero2; 
    index++;
}
alert("Somma (while): " + somma2);
