export function indexCarousel() {
  const swiperEl = document.querySelector(".mySwiper");
  if(swiperEl){
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      pagination: {
        el: ".p-index-carousel-dots",
        clickable: true,
        renderBullet: function (index, className) {
          return `<li class="${className}"><span></span></li>`;
        },
      },
      autoplay: {
        delay: 3000,
      },
      on: {
        init: function () {
          updateCounter(); // Swiper 初始化完成後，更新計數器
          updateTitle(); // Swiper 初始化時，更新標題
          updateBtn();
        },
  
        slideChange: function () {
          updateCounter(); // 當滑動變更時，更新計數器
          updateTitle(); // 每次切換時，更新標題
          updateBtn();
          resetPaginationProgress();
        },
      },
    });
  }


  // 更新當前 index 和總數的函式
  function updateCounter() {
    // 確保 swiper 已經初始化
    if (swiper && swiper.realIndex !== undefined) {
      const currentSlideIndex = swiper.realIndex + 1; // Swiper 的 index 從 0 開始，所以加 1
      const totalSlides = swiper.slides.length; // 包含 loop 會有額外的 2 個 slides，故需減 2

      // 更新到 HTML 中
      document.querySelector(".p-index-carousel-counter-now").textContent =
        currentSlideIndex.toString().padStart(2, "0");
      document.querySelector(".p-index-carousel-counter-total").textContent =
        totalSlides.toString().padStart(2, "0");
    }
  }
  // 更新當前標題的函式
  function updateTitle() {
    const titles = document.querySelectorAll(".p-index-carousel-title-item");

    // 移除所有標題的顯示樣式
    titles.forEach((title, index) => {
      title.style.display = "none"; // 隱藏所有標題
    });

    // 根據 swiper 的 realIndex 顯示當前標題
    if (swiper && swiper.realIndex !== undefined) {
      const currentTitle = titles[swiper.realIndex];
      if (currentTitle) {
        currentTitle.style.display = "block"; // 顯示對應的標題
      }
    }
  }

  function updateBtn(){
    const btns = document.querySelectorAll(".p-index-carousel-btngroup-item");
        // 移除所有標題的顯示樣式
        btns.forEach((btn, index) => {
          btn.style.display = "none"; // 隱藏所有標題
        });
    
        // 根據 swiper 的 realIndex 顯示當前標題
        if (swiper && swiper.realIndex !== undefined) {
          const currentBtn = btns[swiper.realIndex];
          if (currentBtn) {
            currentBtn.style.display = "flex"; // 顯示對應的標題
          }
        }
  }

  // 啟動 pagination 進度條動畫
  function startPaginationProgress() {
    const activeBullet = document.querySelector(
      ".swiper-pagination-bullet-active span"
    );
    if (activeBullet) {
      activeBullet.style.transition = `width ${swiper.params.autoplay.delay}ms linear`;
      activeBullet.style.width = "100%";
    }
  }
  // 重置 pagination 進度條動畫
  function resetPaginationProgress() {
    const bullets = document.querySelectorAll(".swiper-pagination-bullet span");
    bullets.forEach((bullet) => {
      bullet.style.transition = "none"; // 移除動畫
      bullet.style.width = "0"; // 重置寬度
    });
    setTimeout(startPaginationProgress, 50); // 延遲 50ms 以啟動新的動畫
  }
}
