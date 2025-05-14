export function worksSearch() {
//   console.log("worksSearch()");
  const searchEl = document.querySelector(".p-works-filter-search");
  const btnEl = document.querySelector(".c-button-filter");

  if (btnEl) {
    btnEl.addEventListener("click", () => {
      console.log("click");
      searchEl.classList.toggle("js-filterOpend");
      btnEl.classList.toggle("js-filterOpend");
    });
  }
}
