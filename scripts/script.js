let header = document.getElementById("Header");
let headerPos = header.getBoundingClientRect().top;

window.addEventListener("scroll", (e) => {
    let scrollPos = window.scrollY;

    if (scrollPos > headerPos) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
});

let burgerButton = document.getElementById("BurgerButton");

burgerButton.addEventListener("click", (e) => document.body.classList.toggle("mobile-nav-visible"))

let copyrightYear = document.getElementById("CopyrightYear");
let currentYear = new Date().getFullYear();

copyrightYear.innerHTML = currentYear;