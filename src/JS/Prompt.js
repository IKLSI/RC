// Demande à l'utilisateur d'entrer son nom d'utilisateur en utilisant un prompt (fenêtre de saisie)

var username = prompt("Entrez votre nom d'utilisateur :");

// Vérification de la saisie : le nom d'utilisateur ne doit pas être vide et ne doit pas dépasser 10 caractères sinon message d'erreur

while (username === "" || username === null || username.length > 10) {
  if (username === "" || username === null) {
	username = prompt("Erreur de saisie, veuillez entrer votre nom d'utilisateur :");
  } else {
	username = prompt("Le nom d'utilisateur ne doit pas dépasser 10 caractères, veuillez réessayer :");
  }
}

// Affichage du nom d'utilisateur dans la page HTML

var usernameElement = document.getElementById('username');
usernameElement.textContent = username;