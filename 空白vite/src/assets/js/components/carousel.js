// data
const carouselEls = document.querySelectorAll(".c-carousel-item");
const carouselBtnEls = document.querySelectorAll(".c-carousel-arrow button");
const total = carouselEls.length;
let currentIndex = 0; // 當前索引
let isAnimating = false; // 動畫是否正在進行

export function carousel() {
  carouselBtnEls.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (isAnimating) return; // 如果動畫正在進行，則不執行點擊操作
      const direction = btn.getAttribute("data-arrow"); // 取得 data-arrow 屬性值
      if (direction === "prev") {
        changeCarousel(currentIndex - 1); // 往前
      } else if (direction === "next") {
        changeCarousel(currentIndex + 1); // 往後
      }
    });
  });
}

function changeCarousel(newIndex) {
  // 設置動畫鎖，防止在動畫過程中再次觸發
  isAnimating = true;

  // 確保 index 在範圍內（環狀結構）
  if (newIndex < 0) {
    newIndex = total - 1; // 回到最後一個
  } else if (newIndex >= total) {
    newIndex = 0; // 回到第一個
  }

  // 記住前一個索引
  const previousIndex = currentIndex;

  // 套用對應的 class
  carouselEls[newIndex].classList.add("js-show");

  // 情境 1：一般往右 (index++)
  if (previousIndex < newIndex) {
    if (newIndex == total - 1 && previousIndex == 0) {
      console.log("3=>0");
      carouselEls[newIndex].classList.add("js-prev");
      setTimeout(() => {
        carouselEls[previousIndex].classList.add("js-next");
        carouselEls[newIndex].classList.remove("js-prev");
      }, 300);
    } else {
      console.log("一般往右 (index++)");
      carouselEls[newIndex].classList.add("js-next");
      setTimeout(() => {
        carouselEls[previousIndex].classList.add("js-prev");
        carouselEls[newIndex].classList.remove("js-next");
      }, 300);
    }
  }

  // 情境 2：一般往左 (index--)
  if (previousIndex > newIndex) {
    if (newIndex == 0 && previousIndex == total - 1) {
      console.log("0=>3");
      carouselEls[newIndex].classList.add("js-next");
      setTimeout(() => {
        carouselEls[previousIndex].classList.add("js-prev");
        carouselEls[newIndex].classList.remove("js-next");
      }, 300);
    } else {
      console.log("一般往左 (index--)");
      carouselEls[newIndex].classList.add("js-prev");
      setTimeout(() => {
        carouselEls[previousIndex].classList.add("js-next");
        carouselEls[newIndex].classList.remove("js-prev");
      }, 300);
    }
  }

  // 等待過渡完成後清除 class 並釋放動畫鎖
  setTimeout(() => {
    carouselEls[previousIndex].classList.remove("js-prev", "js-next", "js-show");
    isAnimating = false; // 過渡完成後釋放動畫鎖
  }, 600);

  // 更新當前索引
  currentIndex = newIndex;
}
