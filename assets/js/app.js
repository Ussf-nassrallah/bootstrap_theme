const currentLocation = location.href;
const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach((link) => {
    link.classList.remove("active");
});

navLinks.forEach((link) => {
    if (link.href === currentLocation) {
        link.classList.add("active");
    }
});
