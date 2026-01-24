export function tab() {
  const tabEl = document.querySelectorAll("[data-tab]");
  const tabPaneEl = document.querySelectorAll("[data-tab-pane]");

  if (tabEl) {
    tabEl.forEach((el) => {
      el.addEventListener("click", () => {
        // 先移除所有人的狀態
        tabEl.forEach((el) => {
          el.classList.remove("js-active");
        });
        tabPaneEl.forEach((el) => {
          el.classList.remove("js-active");
          el.classList.remove("js-fadeIn");
        });

        // 被點中的tab active
        el.classList.add("js-active");

        // 找到相對應的tab pane
        const targetTabPane = document.querySelector(
          `[data-tab-pane="${el.dataset.tab}"]`
        );


        // 顯示相對應的tab pane
        targetTabPane.classList.add("js-fadeIn");
        setTimeout(() => {
          targetTabPane.classList.add("js-active");
          targetTabPane.classList.remove("js-fadeIn");
        }, 300);
      });
    });
  }
}
