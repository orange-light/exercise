import { menu } from "./componets/menu.js";
import { contactUs } from "./componets/contactUs.js";
import { accordion } from "./componets/accordion.js";
import { aboutUs } from "./componets/aboutUs.js";
import { indexCarousel } from "./componets/indexCarousel.js";
import { worksCarousel } from "./componets/worksCarousel.js";
import { worksSearch } from "./componets/worksSearch.js";
// import { worksModal } from "/assets/js/componets/worksModal.js";

// 載入 Header 和 Footer，並在它們都載入完成後再執行相應的操作
Promise.all([
  fetch("./ajax/_header.html").then((response) => response.text()),
  fetch("./ajax/_footer.html").then((response) => response.text()),
])
  .then(([headerData, footerData]) => {
    // 將 header 和 footer 加入到 DOM
    document.getElementById("header_ID").innerHTML = headerData;
    document.getElementById("footer_ID").innerHTML = footerData;

    // 確保 header 和 footer 都載入完畢後，執行初始化操作
    menu();
    contactUs();
  })
  .catch((error) => console.error("Error loading header or footer:", error));

accordion();
aboutUs();
indexCarousel();
worksCarousel();
worksSearch();
// worksModal();
