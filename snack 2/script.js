var nuovoNumero = 0;
nuovoNumero = parseInt(prompt("Inserisci un numero (for): "));
while (isNaN(nuovoNumero)) {
    nuovoNumero = parseInt(prompt("Errore! Inserisci un numero valido (for): "));
}
if (nuovoNumero % 2 == 0 ) {
    document.getElementById("numero").innerHTML = 'Il numero inserito è pari: ' + nuovoNumero;
} else {
    document.getElementById("numero").innerHTML = 'Il numero inserito era dispari quindi è stato aumentato di 1 : ' + (nuovoNumero + 1);
}