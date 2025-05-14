export function contactUs() {
  const html = document.querySelector("html");
  const humberger = document.querySelector(".c-button-humberger");
  const menu = document.querySelector(".l-header-menu");

  const btnOpen = document.querySelectorAll("[aria-btn='contactusBtnOpen']");
  const btnClose = document.querySelector("[aria-btn='contactusBtnClose']");

  const contactus = document.querySelector(".p-contactus");

  // 只有在確保按鈕存在後才添加事件監聽器
  if (btnOpen) {
    btnOpen.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        // 移除選單打開狀態
        html.classList.remove("js-menuOpend");
        humberger.classList.remove("js-menuOpend");
        menu.classList.remove("js-menuOpend");

        contactus.classList.add("js-menuOpend");
      });
    });
  }

  if (btnClose) {
    btnClose.addEventListener("click", (e) => {
      e.preventDefault();
      contactus.classList.remove("js-menuOpend");
    });
  }
}
