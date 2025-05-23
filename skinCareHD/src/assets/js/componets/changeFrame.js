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
