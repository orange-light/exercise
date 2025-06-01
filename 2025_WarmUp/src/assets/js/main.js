// import { tab } from "./componets/tab.js";
import { accordion } from "./componets/accordion.js";
// import { closeModal, openModal } from "./componets/modal.js";
// import { copyCode } from "./componets/copyCode.js";
// import {carousel} from "./componets/carousel.js";
// import { clickToScroll } from "./componets/clickToScroll.js";

// 載入 Header 和 Footer，並在它們都載入完成後再執行相應的操作
Promise.all([
  fetch("./assets/ajax/_header.html").then((response) => response.text()),
  fetch("./assets/ajax/_footer.html").then((response) => response.text()),
])
  .then(([headerData, footerData]) => {
    // console.log(footerData);
    // 將 header 和 footer 加入到 DOM
    document.querySelector("header").innerHTML = headerData;
    document.querySelector("footer").innerHTML = footerData;
    // 確保 header 和 footer 都載入完畢後，執行初始化操作
    // menu();
    // contactUs();
  })
  .catch((error) => console.error("Error loading header or footer:", error));

// tab();
accordion();
// carousel();
// clickToScroll();

// // 提供給button的onclick使用
// window.openModal = openModal;
// window.closeModal = closeModal;
// window.copyCode = copyCode;

const swiper = new Swiper(".swiper", {
  slidesPerView: 2,
  slidesPerGroup: 1,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
