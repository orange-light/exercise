export function aboutUs() {
  const aboutUsKv = document.querySelectorAll(".p-aboutus-kv");
  const aboutUsBackBtn = document.querySelectorAll(
    "[aria-btn='aboutusBtnBack']"
  );

  if (aboutUsKv) {
    init();
  }
  function init() {
    toggleInfo();
    handleLightFollow();
  }
  function toggleInfo() {
    aboutUsKv.forEach((kv) => {
      kv.addEventListener("click", () => {
        const parent = kv.parentElement;
        const siblings = [...parent.parentElement.children]; // 同層兄弟元素

        // 收合所有兄弟元素的內容
        siblings.forEach((sibling) => {
          if (sibling !== parent) {
            // 確保不會收合當前點擊的項目
            sibling.classList.remove("js-opened");
            sibling.classList.add("js-closed");
          } else {
            sibling.classList.add("js-opened");
            sibling.classList.remove("js-closed");
          }
        });

        // 切換點擊的手風琴項目
      });
    });
    aboutUsBackBtn.forEach((btn) => {
      btn.addEventListener("click", () => {
        const parent = btn.parentElement.parentElement;
        const siblings = [...parent.parentElement.children]; // 同層兄弟元素
        siblings.forEach((sibling) => {
          sibling.classList.remove("js-closed");
        });
        parent.classList.remove("js-opened");
      });
    });
  }

  // 處理光暈滑鼠跟隨
  function handleLightFollow() {
    console.log("handleLightFollow()");
    const lightParentEl = document.querySelectorAll(".p-aboutus-kv");

    lightParentEl.forEach((lightParent) => {
      const light = lightParent.querySelector(".p-aboutus-kv-light");
      const img = lightParent.querySelector("img");

      lightParent.addEventListener("mouseover", () => {
        console.log("mouseover");
      });
      lightParent.addEventListener("mouseout", () => {
        light.style.top = "";
        light.style.left = "";
        img.style.filter = "";
        img.style.transform = "";
      });
      lightParent.addEventListener("mousemove", (e) => {
        const rect = lightParent.getBoundingClientRect();
        // 計算元素的中心點
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        // 滑鼠相對於元素的座標
        let x = e.clientX - rect.left;
        let y = e.clientY - rect.top;

        console.log("x", x, "y", y);

        // 計算相對於中心點的位移，並限制位移不超過中心周圍的 50%
        const offsetX = Math.max(Math.min(((x - centerX) / centerX) * 50, 50),-50);
        const offsetY = Math.max(Math.min(((y - centerY) / centerY) * 50, 50),-50);

        // 設定 light 的位置
        light.style.top = `${centerY + offsetY}px`;
        light.style.left = `${centerX + offsetX}px`;

        // 限制陰影的 x 和 y 偏移值最大為 10px
        const shadowX = Math.max(Math.min(offsetX / 5, 10), -10);
        const shadowY = Math.max(Math.min(offsetY / 5, 10), -10);

        // 設定陰影效果
        img.style.filter = `drop-shadow(${-shadowX}px ${-shadowY}px 1px #000)`;

        // 計算翻轉角度，限制角度不超過 ±30 度
        const rotateX = Math.max(Math.min(-(y - centerY) / centerY * 30, 30), -30);
        const rotateY = Math.max(Math.min((x - centerX) / centerX * 30, 30), -30);

        // 使用 translate3d 和 rotateX/rotateY 進行 3D 翻轉
        img.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      });
    });
  }
}
