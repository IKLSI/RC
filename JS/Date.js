document.write("<font color='white' size='2' face='arial'>")
var mydate = new Date()
var year = mydate.getYear()
if (year < 2000)
    year += (year < 1900) ? 1900 : 0
var day = mydate.getDay()
var month = mydate.getMonth()
var daym = mydate.getDate()
if (daym < 10)
    daym = "0" + daym
var dayarray = new Array("Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi")
var montharray = new Array(" janvier ", " fevrier ", " mars ", "avril ", "mai ", "juin", "juillet ", "aout ", "septembre ", " octobre ", " novembre ", " décembre ")
document.write("   " + dayarray[day] + ", " + daym + " " + montharray[month] + year + " ")
document.write("</b></i></font>")