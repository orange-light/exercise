export function changeFrame() {
  const radios = document.querySelectorAll('input[name="frame-select"]');
  const preview = document.getElementById("frame-preview");
  radios.forEach((radio) => {
    radio.addEventListener("change", () => {
      if (radio.checked) {
        // 根據 value 動態改路徑
        preview.src = `/assets/images/frames/Frame${radio.value}.png`;
        preview.alt = `Frame ${radio.value} 預覽`;
      }
    });
  });
}

export function showChangeFrame() {
  document.querySelector(".p-index-frames").style.display = "block";
  document.querySelector(".p-index-download").style.display = "block";
}


export function showResult() {
  console.log("有到這邊？");
  document.querySelector("#result_ID").style.display = "block";
}