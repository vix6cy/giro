const menuButton = document.querySelector(".m-menu");
const menu = document.querySelector(".menu");

menuButton.addEventListener("click", () => {
    console.log("Кликнули по меню");
    menu.classList.toggle("is-open");
})

// Модальное окно

let modalToggle = document.querySelectorAll('.modalToggle');
let call = document.querySelector('.call')

if (modalToggle && call) {
    for (let i = 0; i < modalToggle.length; i++) {
        modalToggle[i].addEventListener('click', () => {
            console.log(true)
            call.classList.toggle('show')
        })
    }
}