let menu = document.querySelector(".menu");
let dropMenu = document.querySelector(".drop-menu");
let cover = document.querySelector(".cover");
let spec = document.getElementById("ss");
let sec = document.querySelector(".sec");
let spec1 = document.getElementById("sp");
let third = document.querySelector(".third");

let arrow1 = document.querySelector(".arrow1");
let arrow = document.querySelector(".arrow");
menu.addEventListener('click', menuOnClick);

spec.addEventListener('click', () => {
    sec.classList.toggle("sec1");
    arrow1.classList.toggle("arrowClicked");

});
spec1.addEventListener('click', () => {
    third.classList.toggle("sec1");
    arrow.classList.toggle("arrowClicked");

});

function menuOnClick() {
    dropMenu.classList.toggle("droped");
    menu.classList.toggle("menuClicked");
    cover.classList.toggle("coverShow");
}