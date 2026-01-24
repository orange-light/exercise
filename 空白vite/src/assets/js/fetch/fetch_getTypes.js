import { buildFormData } from "../components/buildFormData.js";
// API的基本URL
if (import.meta.env.DEV) {
  var baseURL = "https://fla.com.tw/do/projects/";
}else{
  var baseURL = "do/projects/";
}
async function fetch_getTypes(dataObj) {
  const formData = buildFormData(dataObj); // 傳遞一個包含參數的物件

  try {
    const response = await fetch(baseURL + "getTypes", {
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

export { fetch_getTypes };

// 資料範例
// {
//     "result": true,
//     "data": [
//         {
//             "id": 1,
//             "title": "品牌",
//             "subtype": [
//                 {
//                     "value": 1,
//                     "name": "康寶"
//                 },
//                 {
//                     "value": 4,
//                     "name": "現代汽車"
//                 },
//                 {
//                     "value": 5,
//                     "name": "理膚寶水"
//                 }
//             ]
//         },
//         {
//             "id": 2,
//             "title": "YOUTUBE",
//             "subtype": [
//                 {
//                     "value": 2,
//                     "name": "電影"
//                 }
//             ]
//         },
//         {
//             "id": 3,
//             "title": "獎項",
//             "subtype": [
//                 {
//                     "value": 3,
//                     "name": "金手指獎"
//                 }
//             ]
//         }
//     ]
// }