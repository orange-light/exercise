export function menu() {
    const html = document.querySelector("html");
    const humberger = document.querySelector(".c-button-humberger");
    const menu = document.querySelector(".l-header-menu");

    humberger.addEventListener("click", () => {
        html.classList.toggle("js-menuOpend");
        humberger.classList.toggle("js-menuOpend");
        menu.classList.toggle("js-menuOpend");
    });
}