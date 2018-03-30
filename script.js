'use strict';
var mail = document.getElementById('email');
var nom = document.getElementById('lastname');
var prenom = document.getElementById('firtname');
var motDePasse = document.getElementById('password');
var confirmMdP = document.getElementById('passwordconfirm');
var button = document.getElementById('go');





button.onclick = function onFormSubmit(event) {
    event.preventDefault(); // indispensable, sinon la page est rechargée
    !!!
    console.log(event.target + ' a recu l\'évènement submit');
    // garder ça à la fin de la fonction indispensable, sinon la pas est
    // rechargée !!!
    return false;
    }