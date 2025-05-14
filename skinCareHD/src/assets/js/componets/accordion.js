export function accordion() {
  const accordionHeader = document.querySelectorAll(".c-accordion-header");

  accordionHeader.forEach((header) => {
    const accordionBody = header.nextElementSibling;

    header.addEventListener("click", () => {
      const parent = header.parentElement;
      const siblings = [...parent.parentElement.children]; // 同層兄弟元素

      // 收合所有兄弟元素的手風琴內容
      siblings.forEach((sibling) => {
        const siblingHeader = sibling.querySelector(".c-accordion-header");
        const siblingBody = sibling.querySelector(".c-accordion-body");

        if (siblingHeader !== header) {  // 確保不會收合當前點擊的項目
          siblingHeader.classList.remove("js-accordionOpened");
          siblingBody.style.maxHeight = 0 + "px";
        }
      });

      // 切換點擊的手風琴項目
      if (header.classList.contains("js-accordionOpened")) {
        header.classList.remove("js-accordionOpened");
        accordionBody.style.maxHeight = 0 + "px";
      } else {
        header.classList.add("js-accordionOpened");
        accordionBody.style.maxHeight = accordionBody.scrollHeight + "px";
      }
    });

    // 當窗口大小改變時，更新已展開的手風琴內容高度
    window.addEventListener("resize", () => {
      if (header.classList.contains("js-accordionOpened")) {
        accordionBody.style.maxHeight = accordionBody.scrollHeight + "px";
      }
    });
  });
}
