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