const container = document.querySelector(".p-index-app");
const wrapper = document.querySelector(".p-index-ymk-wrapper");
const BASE_W = 400,
  BASE_H = 600;

export function frameResizerInit() {
  // 初次跑
  if (window.innerWidth >= 500) {
    resizeWrapper();
  }
  // 使用者 resize 時，更新 scale
  window.addEventListener("resize", function () {
    if (window.innerWidth >= 500) {
      resizeWrapper();
    }
  });
}

function resizeWrapper() {
  // 以寬度為基準，也可以用高度做檢測取最小值
  const scale = container.clientWidth / BASE_W;
  console.log("container.clientWidth", container.clientWidth);
  wrapper.style.transform = `scale(${scale})`;
  container.style.height = `${BASE_H * scale}px`;
  // container.style.width = `${BASE_W * scale}px`;
}
