const themeCheckbox = document.getElementById('themeCheckbox');

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

themeCheckbox.addEventListener('change', () => {
	const isChecked = themeCheckbox.checked;
	const selectedTheme = isChecked ? 'dark' : 'light';
	updateThemeColors(selectedTheme);
});
