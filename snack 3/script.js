//Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una
//lista di cognomi, Gatsby vuole generare una falsa lista di 3 invitati.
var nomi = ["Lorenzo", "Marco", "Samuele", "Luca", "GianMarco", "Massimiliano"]
var cognomi = ["Orrù", "Piras", "Maccioni", "Melis", "Porceddu", "Madrigali"]
var invitatiNomi = [];
var invitatiCognomi = [];

for (var i = 0; i < 3; i++) {
    var indiceCasualeNome = Math.floor(Math.random() * nomi.length);
    document.getElementById("invitati").innerHTML += '<br>' + '. ' + (i+1) + ' ' + nomi[indiceCasualeNome] + ' ';
    var indiceCasualeCognome = Math.floor(Math.random() * cognomi.length);
    document.getElementById("invitati").innerHTML += cognomi[indiceCasualeCognome];
}