const initApp = () => {
    const hamburguerBtn = document.querySelector("#hamburger-button");
    const mobileMenu = document.querySelector("#mobile-menu");

    const toggleMenu = () => {
        mobileMenu.classList.toggle("hidden");
        mobileMenu.classList.toggle("flex");
    }

    hamburguerBtn.addEventListener("click", toggleMenu);
    mobileMenu.addEventListener("click", toggleMenu);
};

document.addEventListener("DOMContentLoaded", initApp);