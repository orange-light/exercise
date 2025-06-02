import colors from "colors-console";

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
let myChart = null;
export function chartJsInit(inputData) {
  const canvas = document.getElementById("resultChart");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  // 建立線性漸層（從上到下）
  const gradient = ctx.createLinearGradient(0, 0, 0, 400);
  gradient.addColorStop(0, "rgba(61, 90, 254, 0.3)");
  gradient.addColorStop(0.5, "rgba(0, 176, 255, 0.3)");
  gradient.addColorStop(1, "rgba(0, 230, 119, 0.3)");

  // 如果已經有圖了，就直接改 data 並 update
  if (myChart) {
    myChart.data.datasets[0].data = inputData;
    myChart.update();
    return;
  }

  console.log("HERE");
  // 第一次初始化
  const config = {
    type: "radar",
    data: {
      labels: [
        "痘痘/粉刺",
        "色斑/色素沉澱",
        "皮膚保濕度",
        "皮脂分泌量",
        "臉部光澤度/透亮度",
        "全臉皺紋整體分數",
      ],
      datasets: [
        {
          label: "皮膚分析分數",
          // data: inputData,
          data: [89, 78, 50, 59, 99, 100],
          fill: true,
          backgroundColor: gradient,
          borderColor: "#3D5AFE",
          pointBackgroundColor: "#fff",
          pointBorderColor: "rgb(0, 176, 255)",
          pointHoverBackgroundColor: "rgb(0, 176, 255)",
          pointHoverBorderColor: "rgb(0, 176, 255)",
        },
      ],
    },
    options: {
      responsive: false,
      elements: { line: { borderWidth: 1 } },
      scales: {
        r: {
          angleLines: { display: false },
          suggestedMin: 0,
          suggestedMax: 100,
          ticks: {
            color: "#3D5AFE",
            backdropColor: "transparent",
            stepSize: 25,
          },
          grid: {
            color: "rgba(0, 176, 255, 0.3)", // ✅ X 軸的線條顏色
          },
          pointLabels: {
            color: "#3D5AFE", // ✅ 改這裡：雷達圖每個標籤的文字顏色
          },
        },
      },
      plugins: {
        legend: {
          display: false, // ← 關閉圖例
        },
      },
    },
  };

  myChart = new Chart(ctx, config);
}
