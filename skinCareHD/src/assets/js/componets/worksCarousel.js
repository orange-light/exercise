export function worksCarousel() {
  // 基礎物件
  const baseEl = document.querySelector(".p-works-carousel");
  // 圖片
  const carouselImgEl = document.querySelector(".p-works-carousel-img");
  // 縮圖
  const carouselThumbEl = document.querySelector(".p-works-carousel-nav-thumb");
  // 按鈕
  const carouselBtnMoreEl = document.querySelector(
    ".p-works-carousel-nav-btn--prev"
  );
  const carouselBtnLinkEl = document.querySelector(
    ".p-works-carousel-nav-btn--next"
  );

  //   自動播放秒數
  const carouselTimer = 5000;
  let timer; // 用來保存 setTimeout 的 ID
  //   當前Index
  let currentIndex = 0;
  //   總數(臨時)
  const carouselLength = 8;
  //   一次顯示的數量
  const carouselShowNum = 5;
  if (baseEl) {
    init();
  }
  // 初始化
  function init() {
    imgChange();
    thumbChange();
    thumbTranslate();
    handleBtnDisable();
    // 點擊事件
    clickThumb();
    clickBtn();
    // 自動播放
    // autoPlayPlayer();
  }
  //   處理圖片切換
  function imgChange() {
    const carouselImgs = carouselImgEl.querySelectorAll(
      ".p-works-carousel-img-item"
    );
    carouselImgs.forEach((img, index) => {
      if (currentIndex === index) {
        img.style.transform = "translateX(0%)";
        img.style.transition = "transform 0.3s ease-in-out";
      }
      if (index < currentIndex - 1) {
        img.style.transform = "translateX(-100%)";
      }
      if (index > currentIndex) {
        img.style.transform = "translateX(100%)";
      }
    });
  }
  // 處理縮圖js-active
  function thumbChange() {
    const carouselThumbs = carouselThumbEl.querySelectorAll(
      ".p-works-carousel-nav-thumb-item"
    );
    carouselThumbs.forEach((thumb, index) => {
      if (currentIndex === index) {
        thumb.classList.add("js-active");
      } else {
        thumb.classList.remove("js-active");
      }
    });
  }
  // 處理縮圖超過一次顯示的量之後位移
  function thumbTranslate() {
    const carouselThumbs = carouselThumbEl.querySelectorAll(
      ".p-works-carousel-nav-thumb-item"
    );
    carouselThumbs.forEach((thumb, index) => {
      if (currentIndex < carouselShowNum - 1) {
        thumb.style.transform = "translateX(0%)";
        thumb.style.transition = "transform 0.3s ease-in-out";
      }
      if (currentIndex >= carouselShowNum - 1 && currentIndex < carouselLength - 1) {
        let move = currentIndex - (carouselShowNum - 2);
        // console.log("currentIndex", currentIndex);
        // console.log("carouselShowNum", carouselShowNum);
        // console.log("move", move);
        thumb.style.transform = `translateX(${-100 * move}%)`;
      }
    });
  }
//   處理按鈕disable
  function handleBtnDisable() {
    if (currentIndex === 0) {
      carouselBtnMoreEl.classList.add("js-disabled");
    } else {
      carouselBtnMoreEl.classList.remove("js-disabled");
    }
    if (currentIndex === carouselLength - 1) {
      carouselBtnLinkEl.classList.add("js-disabled");
    } else {
      carouselBtnLinkEl.classList.remove("js-disabled");
    }
  }
  //   處理縮圖點擊
  function clickThumb() {
    const carouselThumbs = carouselThumbEl.querySelectorAll(
      ".p-works-carousel-nav-thumb-item"
    );
    carouselThumbs.forEach((thumb, index) => {
      thumb.addEventListener("click", () => {
        currentIndex = index;
        console.log(currentIndex);
        imgChange();
        thumbChange();
        thumbTranslate();
        handleBtnDisable();
      });
    });
  }

  // 處理按鈕點擊
  function clickBtn() {
    carouselBtnMoreEl.addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + carouselLength) % carouselLength;
      imgChange();
      thumbChange();
      thumbTranslate();
      handleBtnDisable();
    });
    carouselBtnLinkEl.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % carouselLength;
      imgChange();
      thumbChange();
      thumbTranslate();
      handleBtnDisable();
    });
  }
  // 處理自動播放
  function autoPlayPlayer() {
    imgChange();
    thumbChange();
    thumbTranslate();
    handleBtnDisable();
    clearTimeout(timer);
    timer = setTimeout(autoPlayPlayer, carouselTimer);
    currentIndex = (currentIndex + 1) % carouselLength;
  }
}
