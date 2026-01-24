const bodyEl = document.querySelector("body");
const modalEl = document.querySelector(".c-modal");
function openModal(event, txt) {
  console.log("event.dataset.modal", event.dataset.modal);
  const dataName = event.dataset.modal;
  
  if (dataName !== "comfirm" && dataName !== "copy") return;
  // 動態生成 Modal
  const modalEl = document.createElement("div");
  modalEl.classList.add("c-modal", "js-fadeIn");
  
  let modalContent = "";
  if (dataName === "comfirm") {
      // 取得當前點擊的 .c-button 元素
  const button = event;
  // 取得第一個 <span> 內的文字
  const buttonText = button.querySelector("span:first-child")?.innerText.trim();

  console.log("buttonText", buttonText);

  // 判斷並轉換文字
  const newText = buttonText.includes("揪友") ? "「揪友投保」" : "「組隊投保」";
  const newUrl = buttonText.includes("揪友") ? "invite.html" : "teamup.html";

  console.log("newText", newText);
  console.log("newUrl", newUrl);
    modalContent = `
      <div class="c-modal-card">
        <h3 class="c-modal-title">我已確認<br>參加任務內容為<br><span class="b-common-text_style--hightlight">${newText}</span></h3>
        <div class="c-modal-button_group">
          <div class="c-button c-button--lg c-button--primary c-button--arrow">
            <a href="${newUrl}">
              <span>立即前往GO!</span>
              <span class="c-button--arrow--img">
                <img src="./assets/images/btn-arrow.png" alt="" class="w-100">
              </span>
            </a>
          </div>
          <div class="c-button c-button--lg c-button--lighter c-button--arrow">
            <button type="button" onclick="closeModal(this)">
              <span>返回上一頁</span>
              <span class="c-button--arrow--img">
                <img src="./assets/images/btn-arrow.png" alt="" class="w-100">
              </span>
            </button>
          </div>
        </div>
      </div>
    `;
  } else if (dataName === "copy") {
    console.log("txt", txt);
    modalContent = `
      <div class="c-modal-card">
        <h3 class="c-modal-title">
          <span class="b-common-text_style--hightlight">${txt}</span><br>
          揪友碼已複製!
        </h3>
        <div class="c-modal-button_group">
          <div class="c-button c-button--lg c-button--lighter">
            <button type="button" onclick="closeModal(this)">
              <span>關閉</span>
            </button>
          </div>
        </div>
      </div>
    `;
  }

  modalEl.innerHTML = modalContent;
  document.body.appendChild(modalEl);
  bodyEl.classList.add("c-modal-open");
  setTimeout(() => {
    modalEl.classList.add("js-active");
  }, 300);
}

function closeModal(button) {
  const modalEl = button.closest(".c-modal");
  if (modalEl) {
    modalEl.classList.remove("js-active");
    setTimeout(() => {
      modalEl.classList.remove("js-fadeIn");
      bodyEl.classList.remove("c-modal-open");
      modalEl.remove();
    }, 300);
  }
}

export { closeModal, openModal };
