$(document).ready(function () {
    let burgerBtn = document.getElementById("burger-btn");
    let menuBurger = document.getElementById("menu-burger");
    let burgerFilterBtn = document.getElementById("burger-filter-btn");
    let filterBurger = document.getElementById("filter-burger");

    function showBurgerMenu() {
        menuBurger.classList.toggle("burger-menu-show");
    };
    burgerBtn.onclick = showBurgerMenu;

    function showBurgerFilter() {
        filterBurger.classList.toggle("burger-filter-show");
    };
    burgerFilterBtn.onclick = showBurgerFilter;


})