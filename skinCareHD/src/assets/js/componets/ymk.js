import { setCircleProgress } from "./chart";
import { chartJsInit } from "./chart.js";
import { showChangeFrame, showResult } from "./changeFrame.js";

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

const photoEl = document.querySelector(".p-index-photo img");

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

      showChangeFrame();
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
    overlay(result);
  });
}

export function downloadSnapshot() {
  if (!isAnalysisReady) {
    alert("分析還沒完成喔，請稍候再試！");
    return;
  }

  YMK.snapshot("base64", function (result) {
    if (!result || result === false) {
      alert("擷取失敗，請確認是否啟用權限！");
      return;
    }
    overlay(result);
  });
}

function overlay(result) {
  YMK.setSkincareResultType("");
  showResult();
  const resultImgSrc = result; // 假設這就是 SDK 回傳的 base64 或 URL
  // 先建立下載用的隱形連結
  const link = document.createElement("a");
  link.download = "snapshot.jpg";

  // 1. 建立背景圖
  const baseImg = new Image();
  baseImg.crossOrigin = "anonymous";
  baseImg.src = resultImgSrc;
  baseImg.onload = () => {
    // 2. 建 canvas
    const canvas = document.createElement("canvas");
    canvas.width = baseImg.naturalWidth;
    canvas.height = baseImg.naturalHeight;
    const ctx = canvas.getContext("2d");

    // 3. 畫背景
    ctx.drawImage(baseImg, 0, 0, canvas.width, canvas.height);

    // 4. 畫框圖
    const frameImg = new Image();
    frameImg.crossOrigin = "anonymous";
    frameImg.src = document.querySelector(".p-index-ymk-frames img").src;
    frameImg.onload = () => {
      ctx.drawImage(frameImg, 0, 0, canvas.width, canvas.height);

      // 5. 把合成圖放進 <img> 裡
      const photoEl = document.querySelector(".p-index-photo img");

      // 方法一：用 toDataURL（同步）
      const dataURL = canvas.toDataURL("image/jpeg");
      photoEl.src = dataURL;

      // 如果你想用 Blob + Object URL，也可以這樣：
      canvas.toBlob((blob) => {
        const url = URL.createObjectURL(blob);
        link.href = url;
        link.click();
        // document.body.removeChild(link);
        // URL.revokeObjectURL(url);
        // 如果未來不再用到，記得 URL.revokeObjectURL(url);
      }, "image/jpeg");
    };
    frameImg.onerror = () => {
      alert("框圖載入失敗，請確認路徑正確！");
    };
  };
}
