// In dieser Übung werden wir Date() lernen.
// Stelle die folgenden Daten im HTML-Dokument mit Hilfe des Befehls new Date() dar.

// Speichere die Werte in einer Variable (date1, date2, …)
// Nutze innerHTML um das Ergebnis darzustellen.
// Teste dann die Werte:
// new Date("September 2, 2019 09:00:00")
// new Date(0)
// new Date(31556908800)
// new Date(86400000)

const date1 = new Date()
console.log(date1);

let div = document.querySelector('div')
console.log(div);


div.innerHTML = date1 + `<br>`
// ------------

const date2 = new Date(0);

div.innerHTML += date2 + `<br>`
// ------------
const date3 = new Date(31556908800);
div.innerHTML += date3 + `<br>`

// ------------
const date4 = new Date(86400000)
div.innerHTML += date4 + `<br>`




