let monate = [
    "Januar",
    "Februar",
    "März",
    "April",
    "Mai",
    "Juni",
    "Juli",
    "August",
    "September",
    "Oktober",
    "November",
    "Dezember"
];

let wochenTag = [
    "Sonntag",
    "Montag",
    "Dienstag",
    "Mittwoch",
    "Donnerstag",
    "Freitag",
    "Samstag"
];

let div = document.querySelector('div')
console.log(div);

const date = new Date()
console.log(date);
div.innerHTML = date + `<br>`

//year
div.innerHTML += date.getFullYear() + `<br>`
//month
div.innerHTML += date.getMonth() + ` Monat <br> `
//day
div.innerHTML += date.getDay() + ` Tag <br> `
//Stunde
div.innerHTML += date.getHours() + ` Stunde <br> `
//Minute
div.innerHTML += date.getMinutes() + ` Minute <br> `
//Februar
let februar = monate[1];
div.innerHTML += februar + `<br>`
//Freitag
let freitag = wochenTag[5]
div.innerHTML += freitag





