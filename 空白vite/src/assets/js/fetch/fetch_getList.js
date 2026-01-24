import { buildFormData } from "../components/buildFormData.js";
// API的基本URL
if (import.meta.env.DEV) {
  var baseURL = "https://fla.com.tw/do/projects/";
}else{
  var baseURL = "do/projects/";
}

async function fetch_getList(dataObj) {
  const formData = buildFormData(dataObj); // 傳遞一個包含參數的物件

  try {
    const response = await fetch(baseURL + "getList", {
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

export { fetch_getList };

// 資料範例
// {
//     "result": true,
//     "data": {
//         "list": [
//             {
//                 "title": "UNO 品牌網紅開箱立體書禮物盒01",
//                 "image": "http://localhost/fla/official/upload/projects/s1734320512ZBxTN.png",
//                 "page_link": "http://localhost/fla/official/works-inpage-4.html",
//                 "launch_link": "https://www.youtube.com"
//             }
//         ],
//         "pageInfo": {
//             "count": 4,
//             "page": 1,
//             "pagecount": 1,
//             "s_start": 1,
//             "s_end": 1,
//             "show_num": 10
//         },
//         "subtype": [
//             1,
//             2
//         ],
//         "keyword": [
//             "品牌"
//         ]
//     }
// }