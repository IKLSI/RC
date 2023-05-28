// Sélectionne l'élément avec la classe 'changeTheme' et le stocke dans la variable 'switchThemeBtn'
const switchThemeBtn = document.querySelector('.changeTheme');

// Variable pour le basculement du thème (0: thème clair, 1: thème sombre)
let toggleTheme = 0;

// Ajoute un écouteur d'événement de clic à l'élément 'switchThemeBtn'
switchThemeBtn.addEventListener('click', () => {
	// Vérifie l'état actuel du thème
	if (toggleTheme === 0) {
		// Si le thème est actuellement clair, modifie les propriétés CSS pour le thème sombre
		document.documentElement.style.setProperty('--ecriture', '#262626');
		document.documentElement.style.setProperty('--background', '#F5F5DC');
		// Incrémente la variable 'toggleTheme' pour basculer le thème
		toggleTheme++;
	} else {
		// Si le thème est actuellement sombre, modifie les propriétés CSS pour le thème clair
		document.documentElement.style.setProperty('--ecriture', '#f1f1f1');
		document.documentElement.style.setProperty('--background', '#141414');
		// Décrémente la variable 'toggleTheme' pour basculer le thème
		toggleTheme--;
	}
});