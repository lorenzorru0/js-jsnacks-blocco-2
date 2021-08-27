//Inserisci un numero, se è pari stampa il numero,
//se è dispari stampa il numero successivo
var nuovoNumero = 0;
nuovoNumero = parseInt(prompt("Inserisci un numero: "));
while (isNaN(nuovoNumero)) {
    nuovoNumero = parseInt(prompt("Errore! Inserisci un numero valido: "));
}
if (nuovoNumero % 2 == 0 ) {
    document.getElementById("numero").innerHTML = 'Il numero inserito è pari: ' + nuovoNumero;
} else {
    document.getElementById("numero").innerHTML = 'Il numero inserito era dispari quindi è stato aumentato di 1 : ' + (nuovoNumero + 1);
}