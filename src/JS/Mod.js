// Sélectionnez le bouton de type checkbox
const themeCheckbox = document.getElementById('themeCheckbox');

// Fonction pour mettre à jour les propriétés CSS en fonction du thème
function updateThemeColors(theme) {
	if (theme === 'dark') {
		// Thème sombre
		document.documentElement.style.setProperty('--ecriture', '#262626');
		document.documentElement.style.setProperty('--background', '#FFF');
	} else {
		// Thème clair
		document.documentElement.style.setProperty('--ecriture', '#FFF');
		document.documentElement.style.setProperty('--background', '#141414');
	}
}

// Ajoutez un écouteur d'événement de changement au bouton checkbox
themeCheckbox.addEventListener('change', () => {
	const isChecked = themeCheckbox.checked;
	const selectedTheme = isChecked ? 'dark' : 'light';
	// Met à jour les propriétés CSS en fonction de l'état de la case à cocher
	updateThemeColors(selectedTheme);
});
