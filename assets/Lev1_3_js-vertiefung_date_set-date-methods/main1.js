let div = document.querySelector('div')
console.log(div);

//heutiges Datum
let todayDate = new Date()
div.innerHTML += todayDate + `<br>`

//Jahr wechsel
todayDate.setFullYear(2022)
console.log(todayDate);
div.innerHTML += todayDate + `<br>`

//Februar
todayDate.setMonth(1)
console.log(todayDate);
div.innerHTML += todayDate + `<br>`

//März
todayDate.setDate(02)
console.log(todayDate);
div.innerHTML += todayDate + `<br>`


todayDate = new Date(2019, 10, 22, 13, 25, 11, 0);
div.innerHTML += todayDate + `<br>`


