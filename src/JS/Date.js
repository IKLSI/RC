/* Script pour simple but d'afficher la date du jour dans le footer de l'index.html sous le format : "Jour, date mois année"
 * Avec date et année sous format numérique et le reste textuel */

document.write("<font color='white' size='2' face='arial'>");
var date = new Date();
var year = date.getYear();

if (year < 2000)
	year += (year < 1900) ? 1900 : 0;

var day = date.getDay();
var month = date.getMonth();
var daym = date.getDate();

if (daym < 10)
	daym = "0" + daym;

var dayarray = new Array("Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi");
var montharray = new Array(" janvier ", " février ", " mars ", " avril ", " mai ", " juin", " juillet ", " août ", " septembre ", " octobre ", " novembre ", " décembre ");

document.write("   " + dayarray[day] + ", " + daym + " " + montharray[month] + " " + year + " ");
document.write("</b></i></font>");
