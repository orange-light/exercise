export function worksModal() {
    const main = document.querySelector("main");
    const thumbBtnMore = document.querySelectorAll("[aria-btn='thumbBtnMore']");
    const modal = document.querySelector(".p-works-modal");
    const closeBtn = document.querySelector("[aria-btn='modalBtnClose']");

    thumbBtnMore.forEach((btn) => {
        btn.addEventListener("click", () => {
            console.log("click");
            main.style.overflow = "hidden";
            modal.style.display = "block";
        });
    })
    closeBtn.addEventListener("click", () => {
        console.log("clickClose");
        main.style.overflow = "";
        modal.style.display = "none";
    });
}