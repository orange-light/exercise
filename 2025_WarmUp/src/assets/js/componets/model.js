const btnEl = document.querySelectorAll("['data-model-target']");
btnEl.forEach((btn) => {
    btn.addEventListener("click", () => {
        const target = btn.dataset.modelTarget;
        document.getElementById(target).classList.add("js-active");
    });
});





// 打開model
function openLightbox() {
  wrapperOfLightbox.classList.add("js-active");
  documentBody.style.overflow = "hidden";
}

// 關閉model
function closeLightBox() {
  wrapperOfLightbox.classList.remove("js-active");
  documentBody.style.overflow = "auto";
}