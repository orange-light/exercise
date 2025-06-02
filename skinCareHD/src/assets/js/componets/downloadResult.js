// export function downloadResult() {
//     const target = result_ID;
//     html2canvas(target, {
//       backgroundColor: "#fff", // 保留透明背景，如果你需要白底可以改成 "#fff"
//       useCORS: true, // 如果內容中有跨域圖片
//       allowTaint: false,
//     }).then((canvas) => {
//       // document.body.appendChild(canvas);
//       const link = document.createElement("a");
//       link.download = "html2canvas.jpg";
//       link.href = canvas.toDataURL("image/jpeg", 0.92); // 第二參數是品質（0～1）
//       link.click();
//     });
// }

export async function downloadResult() {
  const target = takePhoto;
  const config = {
    quality: 1,
    bgcolor: "#fff",
    style: {
      backgroundColor: "rgba(0, 176, 255, 0.1)",
      borderRadius: "50px",
    },
  };
  const dataUri = await domtoimage
    .toPng(target, config)
    .then((dataUrl) => dataUrl);

  const link = document.createElement("a");
  link.download = "result.jpg";
  link.href = dataUri;
  link.click();
}
