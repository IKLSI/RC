// Lorsque le bouton d'une page HTML avec la classe 'btn' est cliqué
$('.btn').click(function(){
	// Ajoute ou supprime la classe 'click' sur l'élément actuel (this)
	$(this).toggleClass("click");
	// Ajoute ou supprime la classe 'show' sur tous les éléments avec la classe 'Barre'
	$('.Barre').toggleClass("show");
});

// Lorsque le bouton avec la classe 'feat-btn' est cliqué
$('.feat-btn').click(function(){
	// Ajoute ou supprime la classe 'show' sur l'élément avec la classe 'feat-show' dans le menu de navigation
	$('nav ul .feat-show').toggleClass("show");
	// Ajoute ou supprime la classe 'rotate' sur l'élément avec la classe 'first' dans le menu de navigation
	$('nav ul .first').toggleClass("rotate");
});

// Lorsque n'importe quel élément <li> dans le menu de navigation est cliqué
$('nav ul li').click(function(){
	// Ajoute la classe 'active' sur l'élément cliqué et supprime la classe 'active' sur les autres éléments <li>
	$(this).addClass("active").siblings().removeClass("active");
});
