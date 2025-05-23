export function setCircleProgress(targetID, percent) {
  const tg = document.getElementById(targetID);
  const fg = tg.querySelector(".circle-fg");
  const label = tg.querySelector(".label");
  const r = parseFloat(getComputedStyle(fg).r) || 80; // 半徑
  const C = 2 * Math.PI * r; // 周長
  // 用 setTimeout 讓瀏覽器先繪製「空圓」，再觸發 transition
  setTimeout(() => {
    // 計算要「填」多少：dashoffset = C * (1 - percent/100)
    const targetOffset = C * (1 - percent / 100);
    fg.style.strokeDashoffset = targetOffset;
    label.textContent = `${percent}%`;
  }, 50);
}
