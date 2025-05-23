    document.getElementById("capture-btn").addEventListener("click", function () {
      const target = document.body;

      html2canvas(target, {
        backgroundColor: null, // 保留透明背景，如果你需要白底可以改成 "#fff"
        useCORS: true // 如果內容中有跨域圖片
      }).then(canvas => {
        const link = document.createElement("a");
        link.download = "ykm-snapshot.jpg";
        link.href = canvas.toDataURL("image/jpeg", 0.92); // 第二參數是品質（0～1）
        link.click();
      });
    });

    export function html2canvasInit() {
      document.getElementById("capture-btn").addEventListener("click", function () {
        const target = document.body;
        html2canvas(target, {
          backgroundColor: null, // 保留透明背景，如果你需要白底可以改成 "#fff"
          useCORS: true // 如果內容中有跨域圖片
        }).then(canvas => {
          const link = document.createElement("a");
          link.download = "ykm-snapshot.jpg";
          link.href = canvas.toDataURL("image/jpeg", 0.92); // 第二參數是品質（0～1）
          link.click();
        });
      });
    }