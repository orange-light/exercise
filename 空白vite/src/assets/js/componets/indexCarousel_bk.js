export function indexCarousel() {
  // 基礎物件
  const baseEl = document.querySelector(".p-index-carousel");
  // 圖片
  const carouselImgEl = document.querySelector(".p-index-carousel-img");
  // 標題
  const carouselTitleEl = document.querySelector(".p-index-carousel-title");
  // 計算
  const carouselCounterNowEl = document.querySelector(
    ".p-index-carousel-counter-now"
  );
  const carouselCounterTotalEl = document.querySelector(
    ".p-index-carousel-counter-total"
  );
  // 點點
  const carouselDotEl = document.querySelector(".p-index-carousel-dots");
  // 按鈕
  const carouselBtnMoreEl = document.querySelector(
    "[aria-btn='carouselBtnMore']"
  );
  const carouselBtnLinkEl = document.querySelector(
    "[aria-btn='carouselBtnLink']"
  );

  //   自動播放秒數
  const carouselTimer = 5000;
  let timer; // 用來保存 setTimeout 的 ID
  //   當前Index
  let currentIndex = 0;
  //   總數(臨時)
  const carouselLength = 5;

  // TODO:資料設計可能要等一下後台規格＆討論
  //   let carouselData = [
  //     {
  //       carouselCoverimg: {
  //         pc: "/assets/images/index/carousel-01--pc.jpg",
  //         mb: "/assets/images/index/carousel-01--mb.jpg",
  //       },
  //       listThumbimg: "/assets/images/index/carousel-01--pc.jpg",
  //       detailCarouselCoverimg: [
  //         "/assets/images/index/carousel-01--pc.jpg",
  //         "/assets/images/index/carousel-02--pc.jpg",
  //         "/assets/images/index/carousel-03--pc.jpg",
  //       ],
  //       detailCarouselThumbimg: [
  //         "/assets/images/index/carousel-01--pc.jpg",
  //         "/assets/images/index/carousel-02--pc.jpg",
  //         "/assets/images/index/carousel-03--pc.jpg",
  //       ],
  //       title: "立頓紅茶 人生選擇好難立頓紅茶 人生選擇好難",
  //       link: "/works.html",
  //     },
  //   ];
  if (baseEl) {
    init();
  }
  // 初始化
  function init() {
    totalNum();
    nowNum();
    dotNum();
    imgChange();
    titleChange();
    // 點擊事件
    clickDot();
    // 拖曳事件
    dragMove();
    // 自動播放
    autoPlayPlayer();
  }
  // 處理總數
  function totalNum() {
    if (carouselLength < 10) {
      carouselCounterTotalEl.innerHTML = `0${carouselLength}`;
    } else {
      carouselCounterTotalEl.innerHTML = carouselLength;
    }
  }

  // 處理顯示當前數字
  function nowNum() {
    // console.log("nowNum()", currentIndex);
    if (currentIndex < 10) {
      //   console.log("nowNum(),currentIndex < 10", currentIndex);
      carouselCounterNowEl.innerHTML = `0${currentIndex + 1}`;
    } else {
      carouselCounterNowEl.innerHTML = currentIndex + 1;
    }
  }

  // 處理點點數量
  function dotNum() {
    let dotNum = carouselLength;
    carouselDotEl.innerHTML = "";
    for (let i = 0; i < dotNum; i++) {
      // 建立點點
      const li = document.createElement("li");
      // 建立點點內容
      const span = document.createElement("span");
      // 加入點點
      li.appendChild(span);
      // 加入點點
      carouselDotEl.appendChild(li);
    }
  }

  //   處理圖片切換
  function imgChange() {
    const carouselImgs = carouselImgEl.querySelectorAll(
      ".p-index-carousel-img-item"
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

  // 處理標題文字切換
  function titleChange() {
    const carouselTitles = carouselTitleEl.querySelectorAll(
      ".p-index-carousel-title-item"
    );
    carouselTitles.forEach((title, index) => {
      title.style.display = "none";
      if (currentIndex === index) {
        title.style.display = "";
      }
    });
  }

  // 處理點點動畫
  function dotAnimation() {
    const carouselDots = carouselDotEl.querySelectorAll("li");
    // 移除所有點的動畫樣式，重設寬度
    carouselDots.forEach((dot) => {
      const span = dot.querySelector("span");
      span.style.transition = "none";
      span.style.width = "0";
    });
    // 為當前索引的點啟動動畫
    const currentDot = carouselDots[currentIndex].querySelector("span");
    setTimeout(() => {
      currentDot.style.transition = `width ${carouselTimer}ms linear`;
      currentDot.style.width = "100%";
    }, 10);
  }
  // 處理點擊點點後，動畫以此點點為起點
  function clickDot() {
    const carouselDots = carouselDotEl.querySelectorAll("li");
    carouselDots.forEach((dot, index) => {
      dot.addEventListener("click", () => {
        currentIndex = index;
        clearTimeout(timer); // 清除先前的計時器
        autoPlayPlayer();
      });
    });
  }
  //   處理拖移切換
  let startX = 0;
  let isDragging = false;
  function dragMove() {
    const carouselImgs = carouselImgEl.querySelectorAll(
      ".p-index-carousel-img-item img"
    );
    carouselImgs.forEach((img, index) => {
        img.style.cursor = "grab";
      img.ondragstart = function () {
        return false;
      };
      // 綁定事件
      img.addEventListener("mousedown", handleDragStart);
      img.addEventListener("touchstart", handleDragStart);
      img.addEventListener("mouseup", handleDragEnd);
      img.addEventListener("touchend", handleDragEnd);

      // 阻止拖曳中選中文字或內容
      img.addEventListener("mousemove",handleDragMove);
      img.addEventListener("touchmove",handleDragMove);

    });

    // 滑動開始（滑鼠/觸控）
    function handleDragStart(e) {
      console.log("handleDragStart()");
      isDragging = true;
      console.log("e",e);
      e.target.style.cursor = "grabbing";
      startX = e.type.includes("touch") ? e.touches[0].clientX : e.clientX;
      console.log("startX",startX);
    }
    // 滑動結束（滑鼠/觸控）
    function handleDragEnd(e) {
      console.log("handleDragEnd()");
      if (!isDragging) return;
      e.target.style.cursor = "grab";
      const endX = e.type.includes("touch")? e.changedTouches[0].clientX: e.clientX;
      const diffX = startX - endX;
      console.log("endX",endX);
      console.log("diffX",diffX);
      console.log("e.clientX",e.clientX);

      // 判斷滑動方向
      if (diffX > 50) {
        // 往左滑，下一張
        if(currentIndex < carouselImgs.length - 1) {
            currentIndex =
            (currentIndex + 1) %
            carouselImgs.length;
        }else{
            currentIndex = 0;
        }

      } else if (diffX < -50) {
        // 往右滑，上一張
        currentIndex =
          (currentIndex -
            1 +
            carouselImgs.length) %
          carouselImgs.length;
      }

      // 更新圖片位置
      totalNum();
      nowNum();
      dotNum();
      imgChange();
      titleChange();
      isDragging = false;
    }
    function handleDragMove(e) {
      if (!isDragging) return;
      e.preventDefault();
      e.target.style.transition = `0 ${e.clientX}`;
    }
  }

  //   處理自動播放
  function autoPlayPlayer() {
    dotAnimation();
    nowNum();
    imgChange();
    titleChange();
    clearTimeout(timer);
    timer = setTimeout(autoPlayPlayer, carouselTimer);
    currentIndex = (currentIndex + 1) % carouselLength;
  }
}
