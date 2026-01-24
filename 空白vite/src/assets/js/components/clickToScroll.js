const qaAccordionEl = document.querySelector(
  ".p-index-qa .c-accordion-group:nth-child(1) .c-accordion-btn"
);
const desAccordionEl = document.querySelector(
  ".p-index-qa .c-accordion-group:nth-child(2) .c-accordion-btn"
);

export function clickToScroll() {
  // 點擊目標為a標籤的連結，滑動到指定位置
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    let anchorName = anchor.href.split("#")[1];
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetElement = document.querySelector(this.getAttribute("href"));

      // 把折疊的部分打開=============
      if (anchorName == "Q2_ID") {
        // console.log('anchorName == "Q2_ID"');
        const q2AccordionHeaderEl =
          qaAccordionEl.parentElement.classList.contains("js-active");
        if (!q2AccordionHeaderEl) {
          qaAccordionEl.click();
        }
        setTimeout(scrollToTarget(targetElement), 300); // 等待展開後再捲動
      }
      if (anchorName == "description_ID") {
        // console.log('anchorName == "description_ID"');
        const desAccordionHeaderEl =
          desAccordionEl.parentElement.classList.contains("js-active");
        if (!desAccordionHeaderEl) {
          desAccordionEl.click();
        }
        setTimeout(scrollToTarget(targetElement), 300); // 等待展開後再捲動
      } else {
        scrollToTarget(targetElement);
      }
    });
  });
}

function scrollToTarget(targetElement) {
  const targetPos =
    targetElement.getBoundingClientRect().top + window.scrollY - 90;
  window.scrollTo({
    top: targetPos,
    behavior: "smooth",
  });
}
