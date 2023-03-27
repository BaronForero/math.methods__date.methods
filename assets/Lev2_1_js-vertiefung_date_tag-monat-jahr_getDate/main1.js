let div = document.querySelector('div')

let actualDate = () => {
    let date = new Date()

    div.textContent = `${date.getDate()}//0${date.getMonth()}//0${date.getFullYear()}`
    console.log(`${date.getDate()}//0${date.getMonth()}//0${date.getFullYear()}`);
}
actualDate()

// function currentDate() {
//     const div = document.createElement("div");
//     document.body.appendChild(div);
//     const today = new Date();
//     const day = today.getDate();
//     const month = today.getMonth() + 1;
//     const year = today.getFullYear();
//     const fullDate = day + "/" + month + "/" + year;

//     div.textContent = fullDate;
// }
// currentDate();

