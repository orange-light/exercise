import { setCircleProgress } from "./chart";
import { chartJsInit } from "./chart.js";

const options = {
  language: "cht", //繁體中文
  hideButtonsOnResultPage: true,
  hideSkinAnalysisResult: true,
  downloadPhotoMode: "direct",
  width: 400, // 你想要的寬度
  height: 600, // 你想要的高度
  disableResolutionCheck: true, // 關閉解析度自動檢查
};

let isAnalysisReady = false;
let skinData = {};

export function ymkInit() {
  window.ymkAsyncInit = function () {
    // 啟動 SDK
    YMK.init(options);
    YMK.openSkincare();
    YMK.addEventListener("skinAnalysisCompleted", function (data) {
      console.log("分析完成，圖片可以擷取了");
      isAnalysisReady = true;
      skinData = data;
      YMK.setSkincareResultType("");
      printResult();
    });
  };
}

function printResult() {
  if (isAnalysisReady) {
    console.log("=== 完整分析結果 ===");
    console.log(skinData);
    setCircleProgress("acne", skinData.acne);
    setCircleProgress("ageSpots", skinData.ageSpots);
    setCircleProgress("moisture", skinData.moisture);
    setCircleProgress("oiliness", skinData.oiliness);
    setCircleProgress("radiance", skinData.radiance);
    setCircleProgress("wrinkles", skinData.wrinkles);
    const skinAgeEl = document.getElementById("skinAge");
    const skinHealthEl = document.getElementById("skinHealth");
    skinAgeEl.textContent = skinData.skinAge;
    skinHealthEl.textContent = skinData.skinHealth;
    window.ymkAnalysisData = [
      skinData.acne,
      skinData.ageSpots,
      skinData.moisture,
      skinData.oiliness,
      skinData.radiance,
      skinData.wrinkles,
    ];
    console.log(window.ymkAnalysisData);
    chartJsInit(window.ymkAnalysisData);
  }
}

export function downloadSnapshotSkincareResult() {
  if (!isAnalysisReady) {
    alert("分析還沒完成喔，請稍候再試！");
    return;
  }

  YMK.snapshotSkincareResult(["oiliness"], {
    // score: false,
    // legend: false,
    // skinAge: false,
  }).then(function (result) {
    if (!result || result === false) {
      alert("擷取失敗，請確認是否啟用權限！");
      return;
    }

    // 先建立下載用的隱形連結
    const link = document.createElement("a");
    link.download = "skincare_with_frame.jpg";

    // 1. 先把 SDK 回傳的 base64 圖當做背景圖
    const baseImg = new Image();
    baseImg.crossOrigin = "anonymous"; // 萬一需要
    baseImg.src = result;
    baseImg.onload = () => {
      // 2. 建 canvas
      const canvas = document.createElement("canvas");
      canvas.width = baseImg.naturalWidth;
      canvas.height = baseImg.naturalHeight;
      const ctx = canvas.getContext("2d");

      // 3. 先把底圖畫上去
      ctx.drawImage(baseImg, 0, 0, canvas.width, canvas.height);

      // 4. 再把你疊的框圖畫上去
      const frameImg = new Image();
      frameImg.crossOrigin = "anonymous";
      frameImg.src = document.querySelector(".p-index-ymk-frames img").src;
      frameImg.onload = () => {
        // 如果框圖跟 SDK 回傳的尺寸不一樣，這裡可以調整 scale
        ctx.drawImage(frameImg, 0, 0, canvas.width, canvas.height);

        // 5. 轉成 JPEG 並下載
        canvas.toBlob((blob) => {
          const url = URL.createObjectURL(blob);
          link.href = url;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          URL.revokeObjectURL(url);
        }, "image/jpeg");
      };
      frameImg.onerror = () => {
        alert("框圖載入失敗，請確認路徑正確！");
      };
    };
    baseImg.onerror = () => {
      alert("擷取的影像載入失敗！");
    };
  });
}

export function downloadSnapshot() {
  if (!isAnalysisReady) {
    alert("分析還沒完成喔，請稍候再試！");
    return;
  }

  YMK.snapshot("base64", function (result) {
    if (result && typeof result === "string") {
      // 創立一個隱藏的下載連結
      const link = document.createElement("a");
      link.href = result;
      // 自定義下載圖檔的名稱
      link.download = "skincare_result_use_snapshot.jpg";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      alert("快照失敗或尚未載入畫面。");
    }
  });
}
