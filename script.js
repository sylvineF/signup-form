'use strict';
var mail = document.getElementById('email');
var nom = document.getElementById('lastname');
var prenom = document.getElementById('firstname');
var motDePasse = document.getElementById('password');
var confirmMdP = document.getElementById('passwordconfirm');
var button = document.getElementById('go');


button.onclick = function onFormSubmit(event) {
    event.preventDefault(); // indispensable, sinon la page est rechargée

    if (typeof (mail.value) == "string" &&
        typeof (nom.value) == "string" &&
        typeof (prenom.value) == "string" &&
        motDePasse.value === confirmMdP.value
    ) {
        window.alert('bienvenue ' + nom.value);
    
    }
    else {
        window.alert('tous les champs ne sont pas rempli correctement');
    }
    console.log(event.target + ' a recu l\'évènement submit');
    // garder ça à la fin de la fonction indispensable, sinon la page est
    // pas rechargée !!!
    // return false;
};

