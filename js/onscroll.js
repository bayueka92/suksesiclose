window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    var navbar = document.getElementById("navbar");
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        navbar.classList.add("shadow");
        navbar.classList.add("");
        navbar.classList.remove("mt-2");
    } else {
        navbar.classList.remove("shadow");
        navbar.classList.remove("");
        navbar.classList.add("mt-2");
    }
}