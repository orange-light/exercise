import { buildFormData } from "../components/buildFormData.js";
// API的基本URL
if (import.meta.env.DEV) {
  var baseURL = "https://fla.com.tw/do/contact/save";
}else{
  var baseURL = "do/contact/save";
}
async function fetch_contactSave(dataObj) {
  const formData = buildFormData(dataObj); // 傳遞一個包含參數的物件

  try {
    const response = await fetch(baseURL, {
      method: "POST",
      body: formData, // 使用 FormData 發送請求
    });

    // 確保資料有抓到
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json(); // 等待解析JSON資料
    //devConsole("fetch裡面的data", data);

    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return error;
  }
}

export { fetch_contactSave };