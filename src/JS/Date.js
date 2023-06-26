/* Script pour simple but d'afficher la date du jour dans le footer de l'index.html sous le format : "Jour, date mois année"
 * Avec date et année sous format numérique et le reste textuel */

// Déclaration d'une balise de police
document.write("<font color='white' size='2' face='arial'>");

// Création d'une variable date de l'objet Date
var date = new Date();

// Création d'une variable pour l'année
var year = date.getYear();

// Si l'année est inférieure à 2000, ajouter 1900 pour obtenir l'année correcte
if (year < 2000)
	year += (year < 1900) ? 1900 : 0;

// Récupérer le jour de la semaine (0-6)
var day = date.getDay();

// Récupérer le mois (0-11)
var month = date.getMonth();

// Récupérer le jour du mois (1-31)
var daym = date.getDate();

// Si le jour du mois est inférieur à 10, ajouter un zéro devant
if (daym < 10)
	daym = "0" + daym;

// Tableau des jours de la semaine
var dayarray = new Array("Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi");

// Tableau des mois de l'année
var montharray = new Array(" janvier ", " février ", " mars ", " avril ", " mai ", " juin", " juillet ", " août ", " septembre ", " octobre ", " novembre ", " décembre ");

// Afficher la date complète au format "Jour, jour du mois mois année"
document.write("   " + dayarray[day] + ", " + daym + " " + montharray[month] + " " + year + " ");

// Fermeture de la balise
document.write("</b></i></font>");
