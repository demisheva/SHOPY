$(document).ready(function () {
    let burgerBtn = document.getElementById("burger-btn");
    let menuBurger = document.getElementById("menu-burger");

    function showBurgerMenu() {
        menuBurger.classList.toggle("burger-menu-show");
    };
    burgerBtn.onclick = showBurgerMenu;
})