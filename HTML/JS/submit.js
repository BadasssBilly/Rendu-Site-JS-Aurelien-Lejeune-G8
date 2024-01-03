var nom = document.getElementById("nom");
var mail = document.getElementById("mail");
var message = document.getElementById("message");

function submitFormReturn(event) {
    formId.style.display = "none"; // Fonction pour ne pas refresh la page lors du submit
    merci.innerHTML = "<b>Merci pour votre message !</b>"; // Permet de transformer l'id "merci" actuellement vide en ce message lors de l'appuie sur le bouton submit
    console.log(nom.value); // Affiche le prénom donné dans la console
    console.log(mail.value); // Affiche le mail donné dans la console
    console.log(message.value); // Affiche le message donné dans la console
}