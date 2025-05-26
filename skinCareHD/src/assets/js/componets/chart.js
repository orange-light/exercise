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
chartJsInit();
export function chartJsInit(inputData) {
  const canvas = document.getElementById("resultChart");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  // 如果已經有圖了，就直接改 data 並 update
  if (myChart) {
    myChart.data.datasets[0].data = inputData;
    myChart.update();
    return;
  }

  console.log("HERE");
  const data = {
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
        label: "My First Dataset",
        data: inputData,
        fill: true,
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgb(255, 99, 132)",
        pointBackgroundColor: "rgb(255, 99, 132)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgb(255, 99, 132)",
      },
    ],
  };
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
          data: inputData,
          fill: true,
          backgroundColor: "rgba(255, 99, 132, 0.2)",
          borderColor: "rgb(255, 99, 132)",
          pointBackgroundColor: "rgb(255, 99, 132)",
          pointBorderColor: "#fff",
          pointHoverBackgroundColor: "#fff",
          pointHoverBorderColor: "rgb(255, 99, 132)",
        },
      ],
    },
    options: {
      elements: { line: { borderWidth: 3 } },
      scales: {
        r: {
          angleLines: { display: false },
          suggestedMin: 0,
          suggestedMax: 100,
          ticks: { stepSize: 25 },
        },
      },
    },
  };

  myChart = new Chart(ctx, config);
}
