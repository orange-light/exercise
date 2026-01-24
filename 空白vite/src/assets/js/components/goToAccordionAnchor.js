export function goToAccordionAnchorInit() {
  clickToScroll();
  URLToScroll();
}

function clickToScroll() {
  const btnEl = document.querySelectorAll("[data-scroll-target]");
  btnEl.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const target = document.getElementById(btn.dataset.scrollTarget);
      scrollIntoView(target);
    });
  });
}
function URLToScroll() {
  const hash = window.location.hash;
  if (!hash) return;
  const target = document.getElementById(hash.slice(1));
  if (target) scrollIntoView(target);
}

function scrollIntoView(target) {
  const group = target.closest(".c-accordion-group");
  if (!group.classList.contains("js-active")) {
    group.classList.add("js-active");
  }
  setTimeout(() => {
    target.scrollIntoView({ behavior: "smooth" });
  }, 100);
}
