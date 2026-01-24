function copyCode(event) {
  const button = event;
  const inputEl = document.querySelector("#codeInput_ID");
  let txt;

  inputEl.select();
  document.execCommand("Copy");
  txt = inputEl.value;
  inputEl.blur();

  console.log("txt",txt);
  openModal(event,txt);
}


export { copyCode };