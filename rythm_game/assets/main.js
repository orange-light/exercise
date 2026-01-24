// 定義全域變數=======================================
// [定義]音樂變數
let audio;
// [定義]圖片區變數
let imageArea;
// [定義]暫停按鈕變數
let pauseButton;
// [定義]停止按鈕變數
let stopButton;
// [定義]換題按鈕變數
let nextButton;
// [定義]版本選擇變數 <--- 新增
let versionSelect;
// [定義]當前選擇的版本名稱 (初始為 'ver1') <--- 新增
let currentVersion = 'ver1';

let isFirstStart = false;

// 八種圖片路徑 - 僅保留檔名部分，路徑將動態組裝
const images = [
    "01.png",
    "02.png",
    "03.png",
    "04.png",
    "05.png",
    "06.png",
    "07.png",
    "08.png",
];
// 難度設定相關=======================================
// [定義]基礎難度變數
let difficulty = 1;
// [定義]增加難度按鈕變數
let plusButton;
// [定義]減少難度按鈕變數
let minusButton;
// [定義]難度顯示變數
let difficultyText;

function initElements() {
    // 音樂
    audio = document.getElementById('audio_ID');
    // 圖片區
    imageArea = document.getElementById('imageArea_ID');
    // 暫停按鈕
    pauseButton = document.getElementById('pause_ID');
    // 停止按鈕
    stopButton = document.getElementById('stop_ID');
    // 換題按鈕
    nextButton = document.getElementById('next_ID');
    // 版本選擇 <--- 新增
    versionSelect = document.getElementById('versionSelect_ID');
    if (versionSelect) {
        currentVersion = versionSelect.value; // 初始化版本
    }

    // 難度設定相關=======================================
    // 增加難度按鈕    
    plusButton = document.getElementById('plus_ID');
    // 減少難度按鈕
    minusButton = document.getElementById('minus_ID');
    // 難度顯示
    difficultyText = document.getElementById('difficulty_ID');

    console.log("變數已經全部對應完成");
}

// 執行邏輯與順序=======================================

// 網頁元件全部載入完成後才執行
window.addEventListener('load', () => {
    // 變數對應Element
    initElements();
    initListener();
});


// 開始遊戲
async function startGame() {
    console.log('startGame');
    audio.play();
    showImages();
    startAnimation();
}
// Event Linster區塊=======================================

function initListener() {
    console.log('initListener');
    // 版本選擇變動 <--- 新增
    if (versionSelect) {
        versionSelect.addEventListener('change', (e) => {
            currentVersion = e.target.value; // 更新版本
            console.log(`版本已切換至: ${currentVersion}`);
            stopAnimation(); // 停止動畫，避免切換版本時出錯
            showImages();    // 根據新版本重新載入圖片
            // 如果遊戲正在進行，可能需要重新開始或只是刷新圖片
            // 這裡假設只是刷新圖片，若需要更複雜的狀態管理，請自行調整。
        });
    }

    // 暫停按鈕
    pauseButton.addEventListener('click', () => {
        console.log("是否初次播放",isFirstStart);
        if (isFirstStart === false) {
            startGame();
            isFirstStart = true;
        } else {
            console.log('是否正在播放音樂',audio.paused);
            if (audio.paused) {
                // 如果目前是暫停狀態 → 播放
                audio.play();
                startAnimation();
                pauseButton.querySelector('span').textContent = 'stop_circle';
            } else {
                // 如果目前在播放 → 停止
                audio.pause();
                audio.currentTime = 0;
                stopAnimation();
                pauseButton.querySelector('span').textContent = 'play_circle';
            }
        }
    });

    // 換題按鈕
    nextButton.addEventListener('click', () => {
        console.log('換題');
        showImages();
    });

    // 難度設定相關=======================================
    // 增加難度按鈕    
    plusButton.addEventListener('click', () => {
        if (difficulty >= 3) return;
        difficulty++;
        difficultyText.value = `難度: ${difficulty}`;
        showImages();
    });
    // 減少難度按鈕
    minusButton.addEventListener('click', () => {
        if (difficulty <= 1) return;
        difficulty--;
        difficultyText.value = `難度: ${difficulty}`;
        showImages();
    });
}

// 圖片相關===============================================

// 取得亂數整數
function randInt(max) {
    return Math.floor(Math.random() * max);
}

function shuffle(arr) {
    return arr.sort(() => Math.random() - 0.5);
}

// 從陣列取出一個與 forbid 不同的隨機元素
function randomExcept(arr, forbid) {
    if (!forbid) return arr[randInt(arr.length)];
    let pick;
    do {
        pick = arr[randInt(arr.length)];
    } while (pick === forbid && arr.length > 1);
    return pick;
}

/**
 * 根據當前版本替換圖片檔名中的版本佔位符。
 * @param {string} filename - 圖片檔名，例如 "ver_XX_01.png"。
 * @param {string} version - 當前版本，例如 "ver1"。
 * @returns {string} 替換後的檔名，例如 "ver1_01.png"。
 */
function replaceVersionInFilename(filename, version) {
    // 將 "ver_XX" 替換成實際的版本名稱 (ver1, ver2, ver3...)
    return filename.replace('ver_XX', version);
}

function generateImages(difficulty) {
    const len = 8;
    let result = new Array(len).fill(null);

    // 取得當前版本下的圖片清單 (檔名已替換版本號) <--- 修改
    const currentImages = images.map(filename => replaceVersionInFilename(filename, currentVersion));

    if (difficulty === 1) {
        // 一組 4~8 連續，其餘隨機，但避免黏出更長的一串
        const repeatImg = currentImages[randInt(currentImages.length)];
        const repeatCount = randInt(4) + 4; // (隨機) + 固定
        const start = randInt(len - repeatCount + 1);

        // 放入連續組
        for (let i = 0; i < repeatCount; i++) {
            result[start + i] = repeatImg;
        }

        // 其餘位置填隨機，避免把連續組往外延長
        for (let i = 0; i < len; i++) {
            if (result[i] === null) {
                const left = i > 0 ? result[i - 1] : null;
                const right = i < len - 1 ? result[i + 1] : null;
                let pick;
                do {
                    pick = currentImages[randInt(currentImages.length)];
                } while (pick === left || pick === right);
                result[i] = pick;
            }
        }

    } else if (difficulty === 2) {
        // 兩組 2 連續，彼此不重疊、不相鄰變 3 連
        const [imgA, imgB] = shuffle([...currentImages]).slice(0, 2);

        // 隨機產生第一組位置
        const posA = randInt(len - 1); // 0~6
        result[posA] = imgA;
        result[posA + 1] = imgA;

        // 第二組位置需避開跟第一組重疊或直接接在旁邊形成 3 連
        let posB;
        while (true) {
            posB = randInt(len - 1);
            const overlap =
                (posB <= posA + 1 && posB + 1 >= posA) // 有交疊
                || posB === posA - 1                   // 左邊緊貼形成3連
                || posB === posA + 2;                  // 右邊緊貼形成3連
            if (!overlap) break;
        }
        result[posB] = imgB;
        result[posB + 1] = imgB;

        // 其餘補隨機，盡量避免多出新的連續
        for (let i = 0; i < len; i++) {
            if (!result[i]) {
                const left = i > 0 ? result[i - 1] : null;
                const right = i < len - 1 ? result[i + 1] : null;
                let pick;
                let tries = 0;
                do {
                    pick = currentImages[randInt(currentImages.length)];
                    tries++;
                    if (tries > 10) break; // 避免極端情況死 loop
                } while (pick === left || pick === right);
                result[i] = pick;
            }
        }

    } else if (difficulty === 3) {
        // 全隨機，但禁止連續重複
        for (let i = 0; i < len; i++) {
            const prev = i > 0 ? result[i - 1] : null;
            result[i] = randomExcept(currentImages, prev);
        }
    }

    return result;
}

function showImages() {
    console.log('showImages');
    imageArea.innerHTML = "";
    const imgs = generateImages(difficulty);
    imgs.forEach(filename => {
        const img = document.createElement("img");
        // 動態組裝完整路徑 <--- 修改: 使用 currentVersion 變數
        img.src = `assets/images/${currentVersion}/${filename}`;
        imageArea.appendChild(img);
    });
}

// 節奏相關=======================================

// 全域變數：控制動畫是否正在運行
let isAnimating = false;
let animationTimeoutId = null; // 用於儲存 setTimeout 的 ID，以便停止計時器

/**
 * 延遲執行指定時間的輔助函式 (Promise-based setTimeout)
 * @param {number} ms - 延遲的毫秒數
 * @returns {Promise<void>}
 */
function delay(ms) {
    return new Promise(resolve => {
        // 在 delay 期間，如果停止了動畫，也要清除這個 setTimeout
        if (!isAnimating) {
            resolve();
            return;
        }
        animationTimeoutId = setTimeout(resolve, ms);
    });
}

/**
 * 主動畫函式：無限循環地為每張圖片套用/移除 js-active，然後呼叫 showImages()。
 */
async function animateImagesLoop() {
    const parentElement = document.getElementById('imageArea_ID');

    if (!parentElement) {
        console.error("找不到 ID 為 'imageArea_ID' 的父層元素。");
        isAnimating = false;
        return;
    }

    // ========== 根據您的要求新增的延遲 START ==========
    // 啟動函式後，先等待 毫秒才開始第一次的圖片動畫
    console.log(">> 偵測到啟動指令，首次動畫啟動前先等待 2700 毫秒...");
    await delay(2700);

    // 如果在等待期間按下了停止按鈕，則直接退出
    if (!isAnimating) {
        console.log(">> 啟動前等待期間被停止。");
        return;
    }
    // ========== 根據您的要求新增的延遲 END ==========


    // 只要 isAnimating 為 true，就一直循環執行
    while (isAnimating) {
        // 1. 取得當前的所有圖片元素
        const imgElements = parentElement.querySelectorAll('img');

        if (imgElements.length === 0) {
            console.warn("在 'imageArea_ID' 元素底下找不到任何圖片 (<img>)，等待內容產生。");
            // 如果沒有圖片，等待 2700ms 後再檢查
            await delay(2700);
            if (!isAnimating) break;
            continue; // 跳到下一次 while 迴圈
        }

        console.log(`--- 啟動一輪圖片動畫 (共 ${imgElements.length} 張圖) ---`);

        // 2. 依序為每張圖片套用並移除 js-active
        for (const img of imgElements) {
            if (!isAnimating) break; // 循環中途停止

            // 套用 js-active
            img.classList.add('js-active');

            // 延遲 330 毫秒
            await delay(330);

            if (!isAnimating) {
                img.classList.remove('js-active'); // 確保移除類別後才停止
                break;
            }

            // 移除 js-active
            img.classList.remove('js-active');
        }

        if (!isAnimating) break;

        // 3. 一輪動畫跑完，呼叫您的 showImages()
        showImages();

        // 4. 等待 2600 毫秒後，開始下一個循環
        console.log("--- showImages() 執行完畢，等待 2600 毫秒後，開始下一輪循環 ---");
        await delay(2600);
    }

    console.log("--- 動畫循環已停止 ---");
}

/**
 * 啟動動畫
 */
async function startAnimation() {
    if (!isAnimating) {
        isAnimating = true;
        console.log(">> 動畫已啟動 (無限循環)");
        animateImagesLoop();
    }
}

/**
 * 停止動畫並清理所有圖片上的 js-active 類別
 */
function stopAnimation() {
    isAnimating = false;

    // 1. 如果有正在運行的 setTimeout，將其清除
    if (animationTimeoutId !== null) {
        clearTimeout(animationTimeoutId);
        animationTimeoutId = null;
    }

    // 2. 移除所有圖片上的 js-active 類別
    const parentElement = document.getElementById('imageArea_ID');
    if (parentElement) {
        const imgElements = parentElement.querySelectorAll('img');
        imgElements.forEach(img => {
            img.classList.remove('js-active');
        });
        console.log(">> 已移除所有圖片上的 'js-active' 類別。");
    } else {
        console.warn("找不到 ID 為 'imageArea_ID' 的父層元素，無法移除類別。");
    }

    // 由於 while 迴圈會在下一次迭代或 await delay() 結束後檢查 isAnimating，
    // 因此動畫會優雅地停止。
    console.log(">> 動畫正在停止中...");
}