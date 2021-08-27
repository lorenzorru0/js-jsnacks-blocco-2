//Crea due array che hanno un numero di elementi diversi.
//Aggiungi elementi casuali all’array che ha meno elementi,
//fino a quando ne avrà tanti quanti l’altro.
var array1 = [];
var array2 = [];
var length1 = parseInt(Math.floor(Math.random() * 20));
var length2 = parseInt(Math.floor(Math.random() * 20));

for (var i = 0; i < length1; i++) {
    var numeroCasuale = parseInt(Math.floor(Math.random() * 20));
    array1.push(numeroCasuale);
    document.getElementById("array1").innerHTML += array1[i] + ', ';
}
for (var i = 0; i < length2; i++) {
    var numeroCasuale = parseInt(Math.floor(Math.random() * 20));
    array2.push(numeroCasuale);
    document.getElementById("array2").innerHTML += array2[i] + ', ';
}

if (length1 < length2) {
    document.getElementById("risultato").innerHTML = "L'array 1 è il più piccolo, questo è l'array aggiornato: ";
    for (var i = 0; i < (length2 - length1); i++) {
        var numeroCasuale = parseInt(Math.floor(Math.random() * 20));
        array1.push(numeroCasuale);
    }
    for (var i = 0; i < array1.length; i ++) {
        document.getElementById("risultato").innerHTML += array1[i] + ', ';
    }
} else if (length2 < length1) {
    document.getElementById("risultato").innerHTML = "L'array 2 è il più piccolo, questo è l'array aggiornato: ";
    for (var i = 0; i < (length1 - length2); i++) {
        var numeroCasuale = parseInt(Math.floor(Math.random() * 20));
        array2.push(numeroCasuale);
    }
    for (var i = 0; i < array2.length; i++) {
        document.getElementById("risultato").innerHTML += array2[i] + ', ';
    }
} else {
    document.getElementById("risultato").innerHTML = "Gli array hanno la stessa lunghezza.";
}
