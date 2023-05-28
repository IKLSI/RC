// Import des fonctions pour le SDK Firebase
import {
	initializeApp
} from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
import {
	getFirestore,
	collection,
	addDoc,
	serverTimestamp
} from "https://www.gstatic.com/firebasejs/9.22.1/firebase-firestore.js";

// Configuration de Firebase
const firebaseConfig = {
	apiKey: "AIzaSyCG9Z8p0T_WOETsa33_i6jUgm47rvpAxAM",
	authDomain: "base-de-donnees-kls.firebaseapp.com",
	projectId: "base-de-donnees-kls",
	storageBucket: "base-de-donnees-kls.appspot.com",
	messagingSenderId: "958635132420",
	appId: "1:958635132420:web:533a64eac4d7efd1a05751",
	measurementId: "G-7YB0MCGG6X"
};

// Initialisation de Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

// Fonction pour envoyer les données à Firebase
function submitForm() {
	// Récupérer les valeurs du formulaire
	const pseudo = document.getElementById("pseudo").value;
	const message = document.getElementById("message").value;

	// Créer un objet de données à envoyer à Firebase
	const data = {
			pseudo: pseudo,
			message: message,
			heure: serverTimestamp()
	};

	// Envoyer les données à Firebase
	addDoc(collection(firestore, "utilisateurs"), data)
			.then(() => {
					alert("Données envoyées avec succès !");
					// Réinitialise le formulaire
					document.getElementById("pseudo").value = "";
					document.getElementById("message").value = "";
			})
			.catch(error => {
					console.error("Erreur lors de l'envoi des données :", error);
			});
}

// Attacher l'événement de clic au bouton
const submitButton = document.getElementById("submitButton");
submitButton.addEventListener("click", submitForm);